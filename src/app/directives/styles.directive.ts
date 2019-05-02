import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective {

  @Input() set setStyleName(sytleName: string) { 
    this.styleName = sytleName; 
  }
  public styleName : string = 'background-color';

  @Input() set value(value: any) {
    this._value = value;
  }
  public _value: string = 'SPRINT_YELLOW';

  constructor(private _elementRef : ElementRef,
    private _renderer : Renderer,
    ) { }
  
    @HostListener('change') ngOnChanges() {
      this.selectColor();
    }

    selectColor() {
      const SHADE_OF_MAGENTA : string = '#b803ff';
      const LIGHT_CHARCOAL : string = '#636363';
      const SPRINT_YELLOW : string = '#ffdd03';
      
      switch(this._value){

        case 'SHADE_OF_MAGENTA': {
          this.setRender(SHADE_OF_MAGENTA);
        }

        case 'LIGHT_CHARCOAL': {
          this.setRender(LIGHT_CHARCOAL);
        }

        case 'SPRINT_YELLOW': {
          this.setRender(SPRINT_YELLOW);
        }

        default: { 
          console.log("Invalid choice"); 
          break;              
      } 
    }
  }

    setRender(value : string){
      this._renderer.setElementStyle(this._elementRef.nativeElement, this.styleName, value)
    }

}
