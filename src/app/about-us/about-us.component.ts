import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imageObject: Array<object> = [
    {
      image: 'assets/c1.jpg',
      thumbImage: 'assets/c1.jpg',
      alt: 'Image'
    },
    {
      image: 'assets/c2.jpg',
      thumbImage: 'assets/c2.jpg',
      alt: 'Image'
    },
    {
      image: 'assets/c3.jpg',
      thumbImage: 'assets/c3.jpg',
      alt: 'Image'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
