import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Book {
  name:string
  author:string
  image:string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[] = [
    {
      name: 'Clean Code',
      author: 'Rober C Martin',
      image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      name: "Pragmetic Programmer",
      author: "David Thomas",
      image: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg",
    }
  ]



  isShowing: boolean = true;

  constructor() { }


  ngOnInit(): void { }

}
