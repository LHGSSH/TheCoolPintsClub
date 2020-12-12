import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { HttpClient } from '@angular/common/http';

export interface Item {
  name: string;
  price: number;
}

export interface Order {
  _id: string;
  name: string;
  address: string;
  phone: string;
  status: string;
  items: Array<Item>;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

}