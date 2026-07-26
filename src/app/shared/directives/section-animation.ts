import { Directive, ElementRef, AfterViewInit } from '@angular/core';

/**
 * Directive that reveals an element when it enters the viewport.
 */
@Directive({
  selector: '[appSectionAnimation]',
  standalone: true,
})
export class SectionAnimationDirective implements AfterViewInit {
  /**
   * Creates the directive instance.
   *
   * @param element The element to observe for visibility.
   */
  constructor(private element: ElementRef) {}

  /**
   * Sets up the intersection observer for the host element.
   *
   * @returns {void}
   */
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
