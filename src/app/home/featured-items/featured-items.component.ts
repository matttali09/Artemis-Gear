import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.scss']
})
export class FeaturedItemsComponent implements OnInit {
  cards = [
    {
      title: 'Diamond Bow',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content add a bunch of ffnnnn text here to test the height adjusments for cards you know what im saying brother like a lotta text to really test this shiz hard',
      img: 'assets/images/bow1.png',
      sale: true,
      salePercentage: 25,
      outOfStock: true,
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      sale: true,
      salePercentage: 20,
      outOfStock: false,
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      sale: true,
      salePercentage: 15,
      outOfStock: true,
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      sale: true,
      salePercentage: 15,
      outOfStock: true,
    },
    {
      title: 'Diamond Bow',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'assets/images/bow1.png',
      sale: true,
      salePercentage: 20,
      outOfStock: false,
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      sale: true,
      salePercentage: 25,
      outOfStock: true,
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      sale: true,
      salePercentage: 25,
      outOfStock: false,
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      sale: true,
      salePercentage: 20,
      outOfStock: false,
    },
    {
      title: 'Diamond Bow',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'assets/images/bow1.png',
      sale: true,
      salePercentage: 15,
      outOfStock: true,
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
