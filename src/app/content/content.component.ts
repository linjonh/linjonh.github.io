import {Component, OnInit} from '@angular/core';
import {AppData} from "./app.content";
import {ContentService} from "../content.service";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    moduleId: module.id
})
export class ContentComponent implements OnInit {
    appDataSets: AppData[] = [];

    constructor(private contentService: ContentService) {
    }

    ngOnInit(): void {
        this.contentService
            .getContents()
            .then(datas =>
                this.appDataSets = datas
                // console.log("appDataSets" + this.appDataSets)
            );
    }

}
