import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [ RouterLink, Navbar],
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
