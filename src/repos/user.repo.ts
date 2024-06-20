import { RootDatastoreHelper } from "./datastore_setting.js";
import { getIdsNumber1 } from "../../utils/index.js";
let tableApp = "test"
class User {
    name: string;
    value: string;

    constructor(data: any) {
        this.name = data.name ?? "";
        this.value = data.value ?? "";
    }
}
const getAll = async () => {
    const datastore = RootDatastoreHelper();
    const query = datastore.createQuery(tableApp);
    return getIdsNumber1(await datastore.runQuery(query)).map((a) => new User(a));
};
export const UserRepo = {
    getAll,
};
