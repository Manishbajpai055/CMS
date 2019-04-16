import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserserviceService } from '../services/users/userservice.service';

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
        this.authProvider.ValidatorService(control.value).subscribe((res) => {
          if(res['ok']){
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