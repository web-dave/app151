import { Directive, ElementRef, inject, Output } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';

@Directive({
  selector: '[outsideclick]',
})
export class OutsideclickDirective {
  private elem = inject(ElementRef).nativeElement;
  @Output() outsideclick = fromEvent(this.elem, 'focusout').pipe(
    map((e) => (e as FocusEvent).relatedTarget),
    filter(
      (relatedTarget) =>
        relatedTarget == null || !this.elem.contains(relatedTarget)
    )
  );
}
