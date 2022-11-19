import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() sendRequest = new EventEmitter<string>();

  handleSubmit(value: string) {
    this.sendRequest.emit(value);
  }
}
