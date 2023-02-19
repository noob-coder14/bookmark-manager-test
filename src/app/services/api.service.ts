import { Injectable } from '@angular/core';
import { category } from '../interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  localArray: category[]= [
    {
      id: 1,
      title: "Javascript tutorial",
      URL: 'www.javascript.com',
      Category: 'Category A'
    },
    {
      id: 2,
      title: "React tutorial",
      URL: 'www.react.com',
      Category: 'Category A'
    },
    {
      id: 3,
      title: "Angular tutorial",
      URL: 'www.angular.com',
      Category: 'Category A'
    },
    {
      id: 4,
      title: "Typescript tutorial",
      URL: 'www.ts.com',
      Category: 'Category A'
    },
    {
      id: 5,
      title: "Tailwind tutorial",
      URL: 'www.tailwind.com',
      Category: 'Category A'
    },
    {
      id: 6,
      title: "Bootstrap tutorial",
      URL: 'www.bootstrap.com',
      Category: 'Category A'
    },
    {
      id: 7,
      title: "Best food in dhaka",
      URL: 'www.food.com',
      Category: 'Category B'
    },
    {
      id: 8,
      title: "Burger vs Pizza",
      URL: 'www.burger.com',
      Category: 'Category B'
    },{
      id: 9,
      title: "Basic physics",
      URL: 'www.physics.com',
      Category: 'Category C'
    },
    {
      id: 10,
      title: "Astronomy",
      URL: 'www.astro.com',
      Category: 'Category C'
    }
  ]

  getAllBookmarks(){
    return this.localArray
  }

}


// import { Injectable } from ‘@angular/core’;
// @Injectable({
//   providedIn: ‘root’,
// })
// export class SharingBookMarkService {
//   constructor() { }
//   bookMarksKeys: any = [];
//   //get all the keys from the localstroage
//   gettingAllTheKey() {
//     for (let key in localStorage) {
//       this.bookMarksKeys.push(key);
//     }
//     this.bookMarksKeys = this.bookMarksKeys.slice(0, -6);
//     return this.bookMarksKeys;
//   }
//   bookMarksObj: any = [];
//   itemFromLocalStroge: any;
//   AllTheBookMarks() {
//     for (let i = 0; i < this.bookMarksKeys.length; i++) {
//       this.itemFromLocalStroge = localStorage.getItem(this.bookMarksKeys[i]);
//       this.bookMarksObj.push(this.itemFromLocalStroge);
//     }
//     return this.bookMarksObj;
//   }
//   categoryNames: any = [];
//   categoryParse: any;
//   getAllCategory() {
//     this.categoryNames = this.bookMarksObj.filter((x: any) => {
//       this.categoryParse = JSON.parse(x);
//       return this.categoryNames.category;
//     });
//   }
// }