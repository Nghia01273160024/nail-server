import {Datastore} from '@google-cloud/datastore';

var rootDatastore: Datastore | undefined;

export const RootDatastoreHelper = () => {
    if(rootDatastore) {
        return rootDatastore;
    }
    console.log("RootDatastoreHelper init");
    return rootDatastore = new Datastore({
        projectId: 'mai-linh-nail',
        keyFilename: 'serviceAccount/mai-linh-nail-a99cac43e9be.json'
    });
}