import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Metaverse UI Dashboard</h1>
    <div class="dashboard">
      <metaverse-dashboard></metaverse-dashboard>
      <wasm-metaverse-engine></wasm-metaverse-engine>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }