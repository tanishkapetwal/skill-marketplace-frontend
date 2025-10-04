import { Component } from '@angular/core';
import { LoaderService } from '../../core/services/loader';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports:[CommonModule,AsyncPipe],
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