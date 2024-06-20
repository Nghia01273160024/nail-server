import { Datastore } from "@google-cloud/datastore";
import { RunQueryResponse } from "@google-cloud/datastore/build/src/query";
import { GetResponse } from "@google-cloud/datastore/build/src/request";
import fs from 'fs';
import readline from "readline/promises";

export const getIdsNumber1 = (data: RunQueryResponse) => {
    const [ items ] = data;
    return items.map((item) => {
        item.id = parseInt(item[Datastore.KEY].id);
        return item;
    })
}

export const getIdsNumber2 = (data: GetResponse) => {
    const [ items ] = data;
    return items.map((item: any) => {
        item.id = parseInt(item[Datastore.KEY].id);
        return item;
    })
}

export const getIdsString1 = (data: RunQueryResponse) => {
    const [ items ] = data;
    console.log(items)
    return items.map(item => {
        if(item[Datastore.KEY].id) {
            item.id = item[Datastore.KEY].id;
        }
        return item;
    })
}

export const getIdsString2 = (data: GetResponse) => {
    const [ items ] = data;
    return data.map(item => {
        if(item[Datastore.KEY].id) {
            item.id = item[Datastore.KEY].id;
        }
        return item;
    })
}

export const setJSONData = (path: string, data: string) => {
    // use only localhost
    return new Promise((resolve, reject) => {
        const folder = path.substring(0, path.lastIndexOf('/'));
        if(!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        fs.writeFile(path, data, { encoding: 'utf8' }, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve("OK");
        });
    });
}

export const getJSONData = (path: string): Promise<any> => {
    if(!path || !path.length) {
        return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                resolve(null);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

export const delay = (time?: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(resolve, time ?? 3000);
    });
}

export const isAdminPassword = (text: string) => {
    return text === 'Hiepnx27';
}

export const isImage = (text: string) => {
    text = text.toLowerCase();
    return text.endsWith('.png') || text.endsWith('.jpg') || text.endsWith('.jpeg') 
        || text.endsWith('.gif') || text.endsWith('.svg') || text.endsWith('.webp') 
        || text.endsWith('.raw') || text.endsWith('.tiff');
}

export const isDocument = (text: string) => {
    text = text.toLowerCase();
    return text.endsWith('.png') || text.endsWith('.jpg') || text.endsWith('.jpeg') 
        || text.endsWith('.gif') || text.endsWith('.svg') || text.endsWith('.webp') 
        || text.endsWith('.raw') || text.endsWith('.tiff');
}

export const isVideo = (text: string) => {
    text = text.toLowerCase();
    return text.endsWith('.mp4') || text.endsWith('.avi') || text.endsWith('.mkv') 
        || text.endsWith('.wmv') || text.endsWith('.vob') || text.endsWith('.flv') 
        || text.endsWith('.divx');
}

export const isAudio = (text: string) => {
    text = text.toLowerCase();
    return text.endsWith('.mp3') || text.endsWith('.wma') || text.endsWith('.wav') 
        || text.endsWith('.flac') || text.endsWith('.aac') || text.endsWith('.ogg') 
        || text.endsWith('.aiff') || text.endsWith('.alac');
}

export const getJSONLData = async (path: string) => {
    return new Promise<any[]>((resolve) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(path),
            crlfDelay: Infinity,
        });
        const jsonArray: any[] = [];
        rl.on('line', (line) => {
            jsonArray.push(JSON.parse(line));
        });
        rl.on('close', () => {
            resolve(jsonArray);
        });
    });
}