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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJSONLData = exports.isAudio = exports.isVideo = exports.isDocument = exports.isImage = exports.isAdminPassword = exports.delay = exports.getJSONData = exports.setJSONData = exports.getIdsString2 = exports.getIdsString1 = exports.getIdsNumber2 = exports.getIdsNumber1 = void 0;
const datastore_1 = require("@google-cloud/datastore");
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("readline/promises"));
const getIdsNumber1 = (data) => {
    const [items] = data;
    return items.map((item) => {
        item.id = parseInt(item[datastore_1.Datastore.KEY].id);
        return item;
    });
};
exports.getIdsNumber1 = getIdsNumber1;
const getIdsNumber2 = (data) => {
    const [items] = data;
    return items.map((item) => {
        item.id = parseInt(item[datastore_1.Datastore.KEY].id);
        return item;
    });
};
exports.getIdsNumber2 = getIdsNumber2;
const getIdsString1 = (data) => {
    const [items] = data;
    console.log(items);
    return items.map(item => {
        if (item[datastore_1.Datastore.KEY].id) {
            item.id = item[datastore_1.Datastore.KEY].id;
        }
        return item;
    });
};
exports.getIdsString1 = getIdsString1;
const getIdsString2 = (data) => {
    const [items] = data;
    return data.map(item => {
        if (item[datastore_1.Datastore.KEY].id) {
            item.id = item[datastore_1.Datastore.KEY].id;
        }
        return item;
    });
};
exports.getIdsString2 = getIdsString2;
const setJSONData = (path, data) => {
    // use only localhost
    return new Promise((resolve, reject) => {
        const folder = path.substring(0, path.lastIndexOf('/'));
        if (!fs_1.default.existsSync(folder)) {
            fs_1.default.mkdirSync(folder);
        }
        fs_1.default.writeFile(path, data, { encoding: 'utf8' }, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve("OK");
        });
    });
};
exports.setJSONData = setJSONData;
const getJSONData = (path) => {
    if (!path || !path.length) {
        return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(path, 'utf8', function (err, data) {
            if (err) {
                resolve(null);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
};
exports.getJSONData = getJSONData;
const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time !== null && time !== void 0 ? time : 3000);
    });
};
exports.delay = delay;
const isAdminPassword = (text) => {
    return text === 'Hiepnx27';
};
exports.isAdminPassword = isAdminPassword;
const isImage = (text) => {
    text = text.toLowerCase();
    return text.endsWith('.png') || text.endsWith('.jpg') || text.endsWith('.jpeg')
        || text.endsWith('.gif') || text.endsWith('.svg') || text.endsWith('.webp')
        || text.endsWith('.raw') || text.endsWith('.tiff');
};
exports.isImage = isImage;
const isDocument = (text) => {
    text = text.toLowerCase();
    return text.endsWith('.png') || text.endsWith('.jpg') || text.endsWith('.jpeg')
        || text.endsWith('.gif') || text.endsWith('.svg') || text.endsWith('.webp')
        || text.endsWith('.raw') || text.endsWith('.tiff');
};
exports.isDocument = isDocument;
const isVideo = (text) => {
    text = text.toLowerCase();
    return text.endsWith('.mp4') || text.endsWith('.avi') || text.endsWith('.mkv')
        || text.endsWith('.wmv') || text.endsWith('.vob') || text.endsWith('.flv')
        || text.endsWith('.divx');
};
exports.isVideo = isVideo;
const isAudio = (text) => {
    text = text.toLowerCase();
    return text.endsWith('.mp3') || text.endsWith('.wma') || text.endsWith('.wav')
        || text.endsWith('.flac') || text.endsWith('.aac') || text.endsWith('.ogg')
        || text.endsWith('.aiff') || text.endsWith('.alac');
};
exports.isAudio = isAudio;
const getJSONLData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        const rl = promises_1.default.createInterface({
            input: fs_1.default.createReadStream(path),
            crlfDelay: Infinity,
        });
        const jsonArray = [];
        rl.on('line', (line) => {
            jsonArray.push(JSON.parse(line));
        });
        rl.on('close', () => {
            resolve(jsonArray);
        });
    });
});
exports.getJSONLData = getJSONLData;
