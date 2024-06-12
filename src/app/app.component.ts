import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as clsx from 'clsx';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex w-full items-center justify-center">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
