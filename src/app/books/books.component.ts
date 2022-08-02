import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book [] = [
    {
      name: 'Clean Code',
      author: 'Rober C Martin',
      image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 40,
    },
    {
      name: "Pragmetic Programmer",
      author: "David Thomas",
      image: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg",
      amount: 30,
    }
  ];

  card: Book[] = [];

  isShowing: boolean = true;

  constructor() {
   }


  ngOnInit(): void {    
  }

  addToCard(book:any){
    console.log(book);
    
  }

}
