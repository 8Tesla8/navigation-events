import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _loggin = false;

    public login():void{
        this._loggin = true;
    }

    public logOut():void{
        this._loggin = false;
    }

    public isLoggedIn():boolean{
        return this._loggin;
    }

}