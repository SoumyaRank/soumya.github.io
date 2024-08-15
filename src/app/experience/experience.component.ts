import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  showFiller = false;
  isHovered = false;
  constructor (private router: Router){}
  // toggleFiller() {
  //     this.showFiller = !this.showFiller;
  // }

  // onMouseOver() {
  //     this.isHovered = true;
  // }

  // onMouseLeave() {
  //     this.isHovered = false;
  // }
  redirect_mmwave() {
    this.router.navigate(['/mmwave']);
  }
  redirect_france() {
    this.router.navigate(['/france']);
  }
}
