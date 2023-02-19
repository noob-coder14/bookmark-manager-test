import { Component,EventEmitter,Input, Output } from '@angular/core';
import { category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-category-module',
  templateUrl: './category-module.component.html',
  styleUrls: ['./category-module.component.css']
})
export class CategoryModuleComponent {
  @Input() Categories!:any
  @Input() localArray!:any
  @Input() buttonText!:any
  @Input() GroupByCategory!:{}
  @Output() details = new EventEmitter<category>();
  

  detailsClick(item:category){
    this.details.emit(item)
  }
}
