import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { OurStoryComponent } from './examples/our-story/our-story.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LocationComponent } from './examples/location/location.component';
import { MenuComponent} from './examples/menu/menu.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'our-story',     component: OurStoryComponent },
    { path: 'location',     component: LocationComponent },
    { path: 'menu',     component: MenuComponent },
    { path: '',          component: LandingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
