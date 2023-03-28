import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imageObject: Array<object> = [
    {
      image: 'assets/mapka.png',
      thumbImage: 'assets/mapka.png',
      alt: 'Image'
    },
    {
      image: 'assets/about_1.jpg',
      thumbImage: 'assets/about_1.jpg',
      alt: 'Image'
    },
    {
      image: 'assets/mapka.png',
      thumbImage: 'assets/mapka.png',
      alt: 'Image'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
