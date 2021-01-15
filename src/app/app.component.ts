import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public init = {};

  title = 'dummie-project';

  // pt_PT
  // fr_FR
  // es_MX
  // english default

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.init = {
      selector: 'textarea',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table directionality',
        'emoticons template paste textpattern',
      ],
      menubar: true,
      directionality : 'ltr', // English
      base_url: '/tinymce',
      suffix: '.min',
      toolbar:
        'undo redo | formatselect | ' +
        ' bold italic | alignleft aligncenter ' +
        ' alignright alignjustify | bullist numlist outdent indent |' +
        ' removeformat',
    };
  }
}
