import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    authorEmail = "jaysen.lin@foxmail.com";
    qqGroup = "272637868";
    sinaId = "Mr_Jaysen";
    copyRightYears = "2014-2017";

    constructor() {
    }

    ngOnInit() {
    }

}
