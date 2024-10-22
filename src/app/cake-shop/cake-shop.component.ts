import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-shop',
  templateUrl: './cake-shop.component.html',
  styleUrls: ['./cake-shop.component.css']
})
export class CakeShopComponent implements OnInit {
  favoriteMessage: string = '';

  ngOnInit(): void {
    this.checkFavorite();
  }

  save(): void {
    localStorage.setItem("liked", 'true');
    this.favoriteMessage = "Merci d'avoir aimé nos produits!";
  }

  checkFavorite(): void {
    if (localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }
}
