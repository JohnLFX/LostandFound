import {Database, Item, ItemTag} from "@/assets/objects";

export class BrowserStorageDB {
    /* All Getters are expected to use Database object */
    async listDatabases() {
        await new Promise(r => setTimeout(r, 2000));
        let databases = [];
        let masterDB = this.getMasterDB();
        for (let i = 0; i < masterDB.length; i++) {
            let db = masterDB[i];
            databases.push(new Database(db.id, db.name));
        }
        return databases;
    }

    async storeItem(databaseID, item) {
        await new Promise(r => setTimeout(r, 2000));
        let masterDB = this.getMasterDB();
        console.log('store item', item);
        for (let i = 0; i < masterDB.length; i++) {
            if (masterDB[i].id === databaseID) {
                let db = masterDB[i];
                if (!db.items) {
                    db.items = [];
                }
                let foundItem = false;
                for (let j = 0; j < db.items.length; j++) {
                    let savedItem = db.items[j];
                    if (item.id === savedItem.id) {
                        db.items[j] = item;
                        foundItem = true;
                        break;
                    }
                }
                if (!foundItem) {
                    let nextID = 0;
                    for (let j = 0; j < db.items.length; j++) {
                        if (db.items[j].id >= nextID) {
                            nextID = (db.items[j].id + 1);
                        }
                    }
                    item.id = nextID;
                    db.items.push(item);
                }
                localStorage.setItem('lf_master_db', JSON.stringify(masterDB));
                return;
            }
        }

        throw new TypeError("No database found for ID " + databaseID);
    }

    async deleteItem(databaseID, itemID) {
        await new Promise(r => setTimeout(r, 2000));
        let masterDB = this.getMasterDB();
        for (let i = 0; i < masterDB.length; i++) {
            if (masterDB[i].id === databaseID) {
                let db = masterDB[i];
                if (db.items) {
                    db.items = db.items.filter(i => i.id !== itemID);
                    localStorage.setItem('lf_master_db', JSON.stringify(masterDB));
                }
                return;
            }
        }

        throw new TypeError("No database found for ID " + databaseID);
    }

    async populateDetails(database) {
        await new Promise(r => setTimeout(r, 2000));
        let savedDB = this.getSavedDB_ByID(database.id);
        database.items = [];
        database.tags = [];
        if (savedDB != null) {
            //console.log('POPULATE TAGS', savedDB.tags);
            if (savedDB.tags) {
                for (let i = 0; i < savedDB.tags.length; i++) {
                    let raw = savedDB.tags[i];
                    database.tags.push(new ItemTag(raw.icon, raw.text, raw.id, raw.color));
                }
            }
            //console.log('savedDB', savedDB);
            if (savedDB.items) {
                for (let i = 0; i < savedDB.items.length; i++) {
                    let rawItem = savedDB.items[i];
                    //console.log('push item');
                    let item = new Item(rawItem.id, rawItem.title, rawItem.comment, rawItem.base64Img, [], rawItem.created);
                    //console.log('raw item', rawItem);
                    for (let j = 0; j < rawItem.tags.length; j++) {
                        let rawTag = rawItem.tags[j];
                        console.log('new raw tag', rawTag);
                        item.tags.push(new ItemTag(rawTag.icon, rawTag.text, rawTag.id, rawTag.color));
                    }
                    database.items.push(item);
                }
            }
        }
        console.log('populate details', database);
        return database;
    }

    async createDatabase(name) {
        let masterDB = this.getMasterDB();
        let newDB = {
            id: 0,
            name: name,
            items: []
        };
        // Simulate AUTO_INCREMENT for ids
        for (let i = 0; i < masterDB.length; i++) {
            let db = masterDB[i];
            if (db.id >= newDB.id) {
                newDB.id = (db.id + 1);
            }
        }
        masterDB.push(newDB);
        let json = JSON.stringify(masterDB);
        console.log('saving', json)
        localStorage.setItem('lf_master_db', json);
    }

    async storeTags(databaseID, tags) {
        if (Array.isArray(tags) && tags.length === 0)
            return;

        let masterDB = this.getMasterDB();
        let db = null;
        for (let i = 0; i < masterDB.length; i++) {
            if (masterDB[i].id === databaseID) {
                db = masterDB[i];
                break;
            }
        }
        if (db != null) {
            if (!Array.isArray(tags)) {
                let v = tags;
                tags = [];
                tags.push(v);
            }
            for (let i = 0; i < tags.length; i++) {
                let tag = tags[i];
                if (tag.id < 0) {
                    let nextID = 0;
                    // Figure out AUTO_INCREMENT next ID
                    if (db.tags) {
                        for (let j = 0; j < db.tags.length; j++) {
                            let t = db.tags[j];
                            if (t.id >= nextID) {
                                nextID = t.id + 1;
                            }
                        }
                    } else {
                        db.tags = [];
                    }
                    tag.id = nextID++;
                    db.tags.push(tag);
                } else {
                    let foundTag = false;
                    for (let j = 0; j < db.tags.length; j++) {
                        let t = db.tags[j];
                        if (t.id === tag.id) {
                            db.tags[j] = tag;
                            foundTag = true;
                            break;
                        }
                    }
                    if (!foundTag) {
                        throw new TypeError("No tag found for ID " + tag.id);
                    }
                }
            }
            console.log('new tag list to commit', JSON.stringify(masterDB));
            localStorage.setItem('lf_master_db', JSON.stringify(masterDB));
        } else {
            throw new TypeError("No database found for ID " + databaseID);
        }
    }

    async deleteTags(databaseID, tagIDs) {
        if (tagIDs.length === 0)
            return;

        let masterDB = this.getMasterDB();
        for (let i = 0; i < masterDB.length; i++) {
            if (masterDB[i].id === databaseID) {
                let db = masterDB[i];
                if (db.items) {
                    for (let j = 0; j < db.items.length; j++) {
                        let item = db.items[j];
                        item.tags = item.tags.filter(t => {
                            return !tagIDs.includes(t.id);
                        });
                    }
                }
                if (db.tags) {
                    db.tags = db.tags.filter(t => {
                        return !tagIDs.includes(t.id);
                    });
                    localStorage.setItem('lf_master_db', JSON.stringify(masterDB));
                }
                return;
            }
        }

        throw new TypeError("No database found for ID " + databaseID);
    }

    async updateDBName(databaseID, newName) {
        let masterDB = this.getMasterDB();
        for (let i = 0; i < masterDB.length; i++) {
            if (masterDB[i].id === databaseID) {
                let db = masterDB[i];
                db.name = newName;
                localStorage.setItem('lf_master_db', JSON.stringify(masterDB));
                break;
            }
        }
    }

    async deleteDatabase(databaseID) {
        let masterDB = this.getMasterDB();
        console.log('deleteDatabase', databaseID)
        masterDB = masterDB.filter(db => db.id !== databaseID);
        localStorage.setItem('lf_master_db', JSON.stringify(masterDB));
    }

    getSavedDB_ByID(id) {
        let savedDB = null;
        let masterDB = this.getMasterDB();
        for (let i = 0; i < masterDB.length; i++) {
            if (masterDB[i].id === id) {
                savedDB = masterDB[i];
                break;
            }
        }
        return savedDB;
    }

    /* Private methods below */
    getMasterDB() {
        let masterDB = localStorage.getItem('lf_master_db');
        console.log('getting', masterDB);
        if (!masterDB) { // null or undefined condition
            return [];
        } else {
            try {
                return JSON.parse(masterDB);
            } catch (e) {
                console.log('Corrupt local storage DB', e);
                return [];
            }
        }
    }

}