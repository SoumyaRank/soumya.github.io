import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imn',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule],
  templateUrl: './imn.component.html',
  styleUrl: './imn.component.css'
})
export class ImnComponent {

}
