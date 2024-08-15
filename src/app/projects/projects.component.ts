import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  showFiller = false;
  isHovered = false;

  toggleFiller() {
      this.showFiller = !this.showFiller;
  }

  onMouseOver() {
      this.isHovered = true;
  }

  onMouseLeave() {
      this.isHovered = false;
  }
}
