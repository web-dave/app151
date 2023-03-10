import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="min-h-full">
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div
              class="h-96 rounded-lg border-4 border-dashed border-gray-200"
            ></div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  `,
  styles: [],
})
export class DashboardComponent {}
