import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { SectionRoomsComponent } from './section-rooms/section-rooms.component';
import { SectionKitchenComponent } from './section-kitchen/section-kitchen.component';

import { NgxUsefulSwiperModule,  } from 'ngx-useful-swiper';
import { OffersComponent } from './offers/offers.component';
import { ActivityComponent } from './activity/activity.component';
const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SectionRoomsComponent,
    SectionKitchenComponent,
    OffersComponent,
    ActivityComponent,
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class HomeModule { }
