import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from './shared/loader/loader'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HttpClientModule,LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skills-marketplace');
}

