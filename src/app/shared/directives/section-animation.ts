import {
  Directive,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appSectionAnimation]',
  standalone: true,
})
export class SectionAnimationDirective implements AfterViewInit {

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.element.nativeElement);
  }
}