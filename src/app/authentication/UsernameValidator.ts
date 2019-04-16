import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserserviceService } from '../services/users/userservice.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UsernameValidator {

  debouncer: any;

  constructor(public authProvider: UserserviceService){

  }

  checkUsername(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {
        console.log(control.value)
        const data = new FormData
        data.append('username',control.value)
        this.authProvider.ValidatorService(data).subscribe((res) => {
          console.log(res)
          if(res.ok){
            resolve(null);
          }
        }, (err) => {
          console.log(err)
          resolve({'usernameInUse': true});
        });

      }, 1000);      

    });
  }

}