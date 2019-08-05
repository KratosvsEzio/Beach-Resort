import { Component, OnInit} from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-section-rooms',
  templateUrl: './section-rooms.component.html',
  styleUrls: ['./section-rooms.component.css']
})
export class SectionRoomsComponent implements OnInit {
  slides = [
    {
      heading: 'Deluxe Bedroom',
      image: '../../../assets/images/rooms-images/012517lunchmidseat1_1280x720.jpg',
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolor temporibus laudantium possimus quia consequuntur eligendi numquam quas blanditiis voluptates ipsum, amet aliquid ullam! Ut molestias vero quae modi consectetur!",
    },
    {
      heading: 'Deluxe Double Bedroom',
      image: '../../../assets/images/rooms-images/03-jumeirah-zabeel-saray-rooms-two-bedroom-suite-02-hero.jpg',
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolor temporibus laudantium possimus quia consequuntur eligendi numquam quas blanditiis voluptates ipsum, amet aliquid ullam! Ut molestias vero quae modi consectetur!",
    },
    {
      heading: 'Deluxe Beach View Bedroom',
      image: '../../../assets/images/rooms-images/9278_15062814500031078518.jpg',
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolor temporibus laudantium possimus quia consequuntur eligendi numquam quas blanditiis voluptates ipsum, amet aliquid ullam! Ut molestias vero quae modi consectetur!",
    },
  ];

  config: SwiperOptions = {
    initialSlide: 0,                      // first slide
    autoplay: {
      delay: 10000,                       // autoplay after 5sec
    },
    speed: 500,                           // next slide after 3sec
    pagination: {
      el: '.swiper-pagination',           // Pagination Class defined
      clickable: true,                    // Enable pagination click
      dynamicBullets: true,               // Enable dynamicBullets
    },
    navigation: {
      nextEl: '.swiper-button-next',      // next button
      prevEl: '.swiper-button-prev'       // previous button
    },
    effect: 'slide',                      // slide type
    watchOverflow: true,                  // Enable watchOverflow
    grabCursor: true,                     // Enable grabCursor
    loop: true,                           // Enable loop
  };

  constructor() { }

  ngOnInit() {
  }

}
