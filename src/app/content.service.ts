import {Injectable} from '@angular/core';
import {AppData, APP_DATA_SETS} from "./content/app.content";

@Injectable()
export class ContentService {

    constructor() {
    }

    getContents(): Promise<AppData[]> {
        return Promise.resolve(APP_DATA_SETS);
    }
}
