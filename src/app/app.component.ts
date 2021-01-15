import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private editorSubject: Subject<any> = new AsyncSubject();

  title = 'dummie-project';

  form: FormGroup;

  public myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
  }

}
