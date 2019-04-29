import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { DiapersModal } from '../../modals/diapers.modal';
import DiapersFile from "../../../assets/data/diapers.json";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  diapersList: any = {}; 
  formatDiapersList: any[] = [];
  @Input() showControls = true;
  isMobileOrDesktop: boolean = false; // true - modile  false - desktop

  @ViewChild('defaultTabButtons')
  private defaultTabButtonsTpl: TemplateRef<any>;

  constructor() {
    console.log(this.defaultTabButtonsTpl)
    let products: DiapersModal[];
    this.diapersList.products = products;
  }

  ngOnInit() {
    
    this.diapersList = DiapersFile.products;
    this.formatDiapersList = this.mountArrayDiapers();  
  }

  mountArrayDiapers() {
    let diapersList : any[] = [];
    let diapers : DiapersModal[] = [];
    
    let i = 0;
    for(let diaper of this.diapersList){
      if(i && i % 4 === 0){
        diapersList.push(diapers);
        diapers = [];
        i = 0;
      }
      diapers.push(diaper);
      i++;
    }
    if(diapers.length){
      diapersList.push(diapers);
    }
    return diapersList
  }

  isDesktop() {
    return !this.isMobileOrDesktop;
  }
  isMobile() {
    return this.isMobileOrDesktop;
  }
}