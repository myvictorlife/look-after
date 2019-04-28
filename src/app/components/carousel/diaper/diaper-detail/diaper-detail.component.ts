
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-diaper-detail',
  templateUrl: './diaper-detail.component.html',
  styleUrls: ['./diaper-detail.component.scss']
})
export class DiaperDetailComponent implements OnInit {

  @Input() diaper;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}
}
