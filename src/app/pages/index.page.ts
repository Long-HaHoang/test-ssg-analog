import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main class="flex w-full flex-col items-center justify-center gap-2">
      <h1 class="text-center text-3xl font-bold underline">Analog Test App</h1>
      <p
        class="flex size-8 w-fit items-center justify-center rounded bg-slate-950 p-2 text-center font-mono text-white"
      >
        {{ count() }}
      </p>
      <div class="flex items-center justify-center space-x-2">
        <button
          (click)="increment()"
          class="flex size-8 items-center justify-center rounded bg-sky-500 p-2 text-white"
        >
          +
        </button>
        <button
          (click)="decrement()"
          class="flex size-8 items-center justify-center rounded bg-sky-500 p-2 text-white"
        >
          -
        </button>
      </div>
      <a
        href="/imprint"
        class="rounded bg-rose-500 p-2 font-semibold text-white hover:underline"
        >Imprint</a
      >
      <a
        href="/about"
        class="rounded bg-rose-500 p-2 font-semibold text-white hover:underline"
        >About</a
      >
    </main>
  `,
  imports: [],
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
  decrement() {
    if (this.count() > 0) {
      this.count.update((count) => count - 1);
    }
  }
}
