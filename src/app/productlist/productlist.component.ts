import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prodlist : any =[
    {
      "productid": 1,
      "name": "chicken briyani",
      "price": "200",
      "type": "Non-veg"
    },
    {
      "productid": 2,
      "name": "Mutton briyani",
      "price": "300",
      "type": "Non-veg"
    },
    {
      "productid": 2,
      "name": "Chicken Noodles",
      "price": "120",
      "type": "Non-veg"
    },
    {
      "productid": 1,
      "name": "Egg briyani",
      "price": "90",
      "type": "Non-veg"
    },
    {
      "productid": 1,
      "name": "Egg Noodles",
      "price": "100",
      "type": "Non-veg"
    }
  ]
}
