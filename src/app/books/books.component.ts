import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name: string = 'Clean Code';
  author: string = 'Rober C Martin';
  src: string =
    "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";

  name2: string = "Pragmetic Programmer";
  author2: string = "David Thomas";
  src2: string = "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg";

  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  handleClick() {
    this.isDisabled = true;
  }

  myName: string = "";
  handleInput(event: any) {
    this.myName = event.target.value;
  }

}
