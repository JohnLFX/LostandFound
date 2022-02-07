export class ItemTag {
    constructor(icon, text, id, color) {
        this.icon = icon;
        this.text = text;
        this.id = id;
        this.color = color;
    }

    equals(other) {
        return other === this || (other instanceof ItemTag && other.id === this.id);
    }

    toString() {
        return this.text;
    }

}

export class Item {
    constructor(id = -1, title = null, comment = null, base64Img = null, tags = [], created = new Date()) {
        this.id = id;
        this.title = title;
        this.comment = comment;
        this.base64Img = base64Img;
        this.tags = tags;
        this.created = created;
    }
}

export class Database {
    constructor(id, name, items = null, tags = null) {
        this.id = id;
        this.name = name;
        this.items = items;
        this.tags = tags;
    }
}

export default {
    ItemTag, Item, Database
}