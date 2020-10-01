import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slides: any[];
  // @Input() get slides(value: string | any[]) {
  //   if (typeof value == 'string') {
  //     this._slides = JSON.parse(value)
  //   } else {
  //     this._slides = value
  //   }
  // }


  currentSlide=0;
  constructor() { }
  

  ngOnInit(): void {
    const s =this.slides;
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
