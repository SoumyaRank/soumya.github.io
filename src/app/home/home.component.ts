import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showFiller = false;
  isHovered = false;
  constructor (private router: Router){}
//   toggleFiller() {
//       this.showFiller = !this.showFiller;
//   }

//   onMouseOver() {
//       this.isHovered = true;
//   }

//   onMouseLeave() {
//       this.isHovered = false;
//   }

  redirect_Experience() {
    this.router.navigate(['/Experience']);
  }
  redirect_Projects() {
    this.router.navigate(['/Projects']);
  }
  redirect_extracurricular() {
    this.router.navigate(['/Extracurricular']);
  }
  redirect_skills() {
    this.router.navigate(['/Skills']);
  }

  // showDropdown: boolean = false;

  // showExperienceDropdown() {
  //   this.showDropdown = true;
  // }


  // hideExperienceDropdown() {
  //   this.showDropdown = false;
  // }

  // experienceDropdownVisible = false;

  // toggleExperienceDropdown() {
  //   this.experienceDropdownVisible = !this.experienceDropdownVisible;
  // }

}
