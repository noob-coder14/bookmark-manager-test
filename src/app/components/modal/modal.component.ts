import { Component,Input,Output,EventEmitter } from '@angular/core';
import {FormArray,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() Categories!:any
  @Output() getFormVal = new EventEmitter<any>();
  
  showModal = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }

  handleClick(){
    this.getFormVal.emit(this.bookmarkForm.value)
    console.log(this.bookmarkForm.value)
  }

  bookmarkForm = this.formBuilder.group({
    Title: ['',Validators.required],
    URL: ['',[Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
    Category: ['',Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
  ) {}

}

//reference
//https://www.positronx.io/angular-url-validation-with-reactive-forms-tutorial/