import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable() 
export class SharedService {

    constructor() {}

    public static getAuthorizationHeader() {

        let header = new HttpHeaders(
        // {
        //   "Content-Type": "application/json",
        //   "Cache-Control": 'no-cache',
        //   "Authorization": "Bearer " + accessToken
        // }
        );
        header = header.set("Content-Type", "application/json")
            .set('Cache-Control', 'no-cache');
        
        return header;
    }
}
