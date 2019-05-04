import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel-template.component.html',
  styleUrls: ['./carousel-template.component.scss']
})
export class CarouselTemplateComponent implements AfterViewInit {

  @ContentChildren(CarouselItemDirective) items : QueryList<CarouselItemDirective>;

  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
  @ViewChild('carousel') private carousel : ElementRef;

  @Input() timing = '500ms ease-in';
  @Input() timeLoop = 4000; // 4 seconds

  private player : AnimationPlayer;
  private itemWidth : number;
  private currentSlide = 0;
  private timingCarousel : boolean = true;

  carouselWrapperStyle = {};

  next() {

    if( this.currentSlide + 1 === this.items.length )  {
      this.currentSlide = -1;
    };;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  ngOnInit() {
    setInterval(() => {
      if(this.timingCarousel){
        this.next();
      }
    }, this.timeLoop);
  }
  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if( this.currentSlide === 0 ) {
      this.currentSlide = this.items.length;
    };

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor( private builder : AnimationBuilder, private cdr: ChangeDetectorRef ) {
  }

  ngAfterViewInit() {
    this.changeItemWidth();
  }

  changeItemWidth() {
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      }
      this.cdr.detectChanges();
    })
  }
  onResize() {
    this.changeItemWidth();
  }

  /**
   * Stops moving when mouse enter
   */
  mouseEnter(){
    this.timingCarousel = false;
  }

  /**
   * Starts moving when mouse leave
   */
  mouseLeave() {
    this.timingCarousel = true;
  }

}
