import { Component } from '@angular/core';
import { Item } from './interfaces'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    items:Item[] = [
        {name:'Notebook', description:'3Ghz, 8Gb RAM', price:500, rating:{value:3.4, count:10}},
        {name:'Tea Cup', description:'350ml', price:8.50, rating:{value:4.2, count:56}},
        {name:'Denim Jeans', description:'size L', price:55, rating:{value:4.6, count:502}}
    ]

    ratingStyle = {
        starsStyle: {'height' : '22px', 'width' : '22px'},
        ratingStyle: {'font-size' : '18px'},
        countStyle: {'font-size' : '14px'}
    }

}
