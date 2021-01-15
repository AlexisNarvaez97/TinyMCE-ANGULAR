import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') public tabGroup: any;
  // public apiKey = apiKey;
  public activeTabIndex: number | undefined = undefined;
  public firstEditorValue = '';
  public secondEditorValue = '';

  public init = {};

  title = 'dummie-project';

  // pt_PT
  // fr_FR
  // es_MX
  // english default

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {

    // console.log(this.tabGroup);

    // his.activeTabIndex = this.tabGroup.selectedIndex;

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

  public handleTabChange(e: MatTabChangeEvent): void {
    this.activeTabIndex = e.index;
  }

  public ngAfterViewInit(): void {
    this.activeTabIndex = this.tabGroup.selectedIndex;
    this.cdRef.detectChanges();
    // console.log(this.tabGroup.selectedIndex);
  }

}
