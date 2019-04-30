import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookieUtilities  {


    constructor(@Inject(CookieService) private Cookie) {}

    // Returns the value of given cookie name.
    public getCookie(name: string) : string {
        let value = this.Cookie.get(name);
        return !!value ? JSON.parse(value) : {};
    }
    // Returns a key or name value object with all the cookies.
    public getCookielist(name: string) {
        return this.Cookie.getAll();
    }
    // Delete the given cookie name.
    public deleteCookie(name: string) {
        this.Cookie.delete(name);
    }
    // Clear the all cookies
    public CleanAllCookies() {
        this.Cookie.deleteAll();
    }
    // Sets a value for given cookie key. with expirytime
    public  setCookie(name: string, value: any, expireMinutes: number) {
        let expirytime = this.expiryMinutesConversion(expireMinutes);
        this.Cookie.set(name, JSON.stringify(value), expirytime);
    }


    // Calculate the expirytime for cookie
    public expiryMinutesConversion(expireMinutes: number) {
        let t = ((1 / 24) / 60) * expireMinutes;
        return t;
    }


    // Sets the local storage for given name
    public  setLocalStorage(name: string, value: any) {                    // set local storage
        localStorage.setItem(name, JSON.stringify(value));
    }

    // Get the local storage for given name
    public getLocalStorage(name: string) {                               // get from local storage
        console.log(name);
        let value = localStorage.getItem(name);
        if (value != undefined) {
            return JSON.parse(value);
        }else {
            return undefined;
        }
    }

    // Remove the local storage for given name
    public removeLocalStorageItem(name: string) {                        // remove from local storage
        // implements
        return null;
    }
    // clear local storage for given name
    public clearAllLocalstorage(name: string) {                          // clear local storage
        // implements
        return null;
    }

    // Getting all the keys from local storage
    public GetallKeysLocalstorage() {
        // implements
        return null;
    }
    // region : get cookie by key
    public getCookieValueByKey(cookieKey: string, key: string) {
        // implements
        return null;
    }

    public  getValueForKey(object, key: string, isRecursive?: boolean) {
        // implements
        return null;
    }

}
