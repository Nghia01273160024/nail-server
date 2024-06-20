"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const datastore_setting_js_1 = require("./datastore_setting.js");
const index_js_1 = require("../../utils/index.js");
let tableApp = "test";
class User {
    constructor(data) {
        var _a, _b;
        this.name = (_a = data.name) !== null && _a !== void 0 ? _a : "";
        this.value = (_b = data.value) !== null && _b !== void 0 ? _b : "";
    }
}
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const datastore = (0, datastore_setting_js_1.RootDatastoreHelper)();
    const query = datastore.createQuery(tableApp);
    return (0, index_js_1.getIdsNumber1)(yield datastore.runQuery(query)).map((a) => new User(a));
});
exports.UserRepo = {
    getAll,
};
