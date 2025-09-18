import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-homepage',
  imports: [NgStyle, RouterLink, Navbar],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
    activeSide: 'teacher' | 'student' | null = null; 
  showSide(side: 'teacher' | 'student') {

    this.activeSide = side;
  }
  resetSide(){
    this.activeSide = null;
  }

}
