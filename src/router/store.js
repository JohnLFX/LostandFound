import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        error: {
            title: null,
            message: null
        },
        databaseAPI: null,
        databases: []
    },
    mutations: {
        setDatabaseImplementation(state, payload) {
            state.databaseAPI = payload;
            state.databases = [];
        },
        updateError(state, payload) {
            if (payload != null && payload.exception != null) {
                console.log(payload.exception);
            }
            state.error.title = payload.title;
            state.error.message = payload.message;
        },
        /* All payloads & returns are expected to use Database object */
        updateDatabaseEntry(state, database) {
            for (let i = 0; i < state.databases.length; i++) {
                let db = state.databases[i];
                if (db.id === database.id) {
                    state.databases[i] = database;
                    break;
                }
            }
        },
        updateDatabases(state, payload) {
            state.databases = payload;
            console.log('New DB List', state.databases);
        },
    },
    getters: {
        databaseAPI: state => {
            return state.databaseAPI;
        },
        getDatabaseById: (state) => (id) => {
            return state.databases.find(db => db.id === id)
        }
    }
})

export default store
