import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiaperDetailComponent } from './diaper-detail/diaper-detail.component';
@Component({
  selector: 'app-diaper',
  templateUrl: './diaper.component.html',
  styleUrls: ['./diaper.component.scss']
})
export class DiaperComponent implements OnInit {

  @Input() diaper;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  onClick(diaper, disableOnClick) {
    const dialogRef = this.dialog.open(DiaperDetailComponent, {
      width: '500px',
    });
    let instance = dialogRef.componentInstance;
    instance.diaper = diaper;
  }

}
