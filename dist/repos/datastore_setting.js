"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootDatastoreHelper = void 0;
const datastore_1 = require("@google-cloud/datastore");
var rootDatastore;
const RootDatastoreHelper = () => {
    if (rootDatastore) {
        return rootDatastore;
    }
    console.log("RootDatastoreHelper init");
    return rootDatastore = new datastore_1.Datastore({
        projectId: 'mai-linh-nail',
        keyFilename: 'serviceAccount/mai-linh-nail-a99cac43e9be.json'
    });
};
exports.RootDatastoreHelper = RootDatastoreHelper;
