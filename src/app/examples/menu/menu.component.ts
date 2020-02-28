import { Component, OnInit } from '@angular/core';
import MenuItem from 'app/models/menu-item';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  focus: any;
  focus1: any;

  private menuItems: Array<MenuItem>;

  constructor() { 
    this.menuItems = [];
    this.menuItems.push(new MenuItem("https://files.dutchbros.com/website/menu/drink-images/Latte.png", "Latte", ""));
    this.menuItems.push(new MenuItem("https://files.dutchbros.com/website/menu/drink-images/Frost.png", "Frost", ""));
    this.menuItems.push(new MenuItem("https://files.dutchbros.com/website/menu/drink-images/Hot_Cocoa.png", "Hot Cocoa", ""));
    this.menuItems.push(new MenuItem("https://files.dutchbros.com/website/menu/drink-images/Tea.png", "Tea", ""));
    this.menuItems.push(new MenuItem("https://files.dutchbros.com/website/menu/drink-images/Smoothie.png", "Smoothie", ""));
    this.menuItems.push(new MenuItem("https://files.dutchbros.com/website/menu/drink-images/Rebel.png", "Rebel", ""));
  }

  ngOnInit() {}

}
