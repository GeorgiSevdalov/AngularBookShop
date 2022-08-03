import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books:Book [] = [];

  constructor(private booksService: BooksService) { } //dependency injection

  isShowing: boolean = true;



  ngOnInit(): void {
    this.books = this.booksService.getBooks()
  }

}
