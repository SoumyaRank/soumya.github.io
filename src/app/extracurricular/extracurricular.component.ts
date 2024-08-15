import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-extracurricular',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule],
  templateUrl: './extracurricular.component.html',
  styleUrl: './extracurricular.component.css'
})
export class ExtracurricularComponent {

}
