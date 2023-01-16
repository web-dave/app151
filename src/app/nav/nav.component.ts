import { DOCUMENT } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navigate$ = inject(Router)
    .events.pipe(
      tap((event) => {
        if (event instanceof NavigationStart) {
          this.active = false;
        }
      })
    )
    .subscribe();
  active = false;
  show() {
    this.active = true;
  }
  hide() {
    this.active = false;
  }
  focusOut(container: HTMLElement, event: FocusEvent) {
    console.log(container.contains(event.relatedTarget as HTMLElement));

    if (
      event.relatedTarget == null ||
      !container.contains(event.relatedTarget as HTMLElement)
    ) {
      this.active = false;
    }
  }
}
