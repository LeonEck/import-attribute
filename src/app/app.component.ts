import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import configFileContent from './app.config.ts' with { loader: 'text' };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'import-attribute';

  constructor() {
    console.log(configFileContent);
  }
}
