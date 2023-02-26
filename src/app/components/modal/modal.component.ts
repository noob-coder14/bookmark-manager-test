import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() Categories!: any;
  @Output() getFormVal = new EventEmitter<any>();

  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
    if (this.showModal === false) {
      this.bookmarkForm.reset();
    }
  }

  handleClick() {
    this.getFormVal.emit(this.bookmarkForm.value);
    console.log(this.bookmarkForm.value);
    this.bookmarkForm.reset();
  }

  bookmarkForm = this.formBuilder.group({
    title: ['', Validators.required],
    URL: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ],
    ],
    Category: ['', Validators.required],
  });

  catForm = this.formBuilder.group({
    addCat: [''],
  });

  addCatFunc() {
    if (
      !this.Categories.includes(this.catForm.value.addCat) &&
      this.catForm.value.addCat !== '' &&
      this.catForm.value.addCat !== null
    ) {
      this.Categories.push(this.catForm.value.addCat);
      console.log('Category array from modal comp ', this.Categories);
      this.catForm.reset();
    } else {
    }
  }

  constructor(private formBuilder: FormBuilder) {}
}

//reference
//https://www.positronx.io/angular-url-validation-with-reactive-forms-tutorial/
