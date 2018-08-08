import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../login/auth.service';


@Component({
    selector: 'app-createorder',
    templateUrl: './createorder.component.html',
    styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

    constructor(private _route: ActivatedRoute, private _router: Router) { }


    userName: string
    public now: Date;

    ngOnInit() {

        this._route
            .queryParams
            .subscribe((params) => {
                console.log(params);
                this.userName = params.userName;
                this.now = params.loginDate;

            })

    }




}
