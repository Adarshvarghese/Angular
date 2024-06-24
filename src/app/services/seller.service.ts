import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:signUp){
    console.warn("service called")
    return this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((result)=>{
      console.log(result)
      if(result){
this.isSellerLoggedIn.next(true)
localStorage.setItem('loggedin',"true")
this.router.navigate(['seller-home'])
      }
    })
  }
  sellerReload(){
    if(localStorage.getItem('loggedin')==='true'){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }

}
