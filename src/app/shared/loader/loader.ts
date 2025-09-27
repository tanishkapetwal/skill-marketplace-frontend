// src/app/loader/loader.component.ts
import { Component } from '@angular/core';
import { LoaderService } from '../../core/services/loader';
import { AsyncPipe, NgIf } from '@angular/common';
import { async } from 'rxjs';

@Component({
  selector: 'app-loader',
  imports:[NgIf,AsyncPipe],
  template: `
    <div *ngIf="loaderService.isLoading$ | async" class="loader-overlay">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./loader.css']
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}