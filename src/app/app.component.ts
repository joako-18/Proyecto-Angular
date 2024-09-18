import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacionComponent, DashboardComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nombre';
}
