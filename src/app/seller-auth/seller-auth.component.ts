import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin=false

  constructor( private seller:SellerService) { }


  ngOnInit(): void {
   this.seller.sellerReload()
    }

  signUp(data:signUp):any{
    console.warn(data)
    this.seller.userSignUp(data)
}

openLogin(){
  this.showLogin=!(this.showLogin)
}
}
