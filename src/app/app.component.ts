import { AfterViewInit, Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    /* global bootstrap: false */
    (function () {
      'use strict';
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    })();
  }
  title = 'angular_estudo_v2';
}
