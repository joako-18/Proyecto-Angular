import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Students } from '../models/students';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class DashboardComponent implements OnInit {

  myForm!: FormGroup;

  studentsArray: Students[] = []
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  deleteStudent(id: number){
    var newListStudents : Students[]= this.studentsArray
    this.studentsArray= newListStudents.filter(student => student.id != id)
  }

  private breakpointObserver = inject(BreakpointObserver);

  onSubmit(): void {
    if (this.myForm.valid) {
      const newStudent: Students = {
        id: this.studentsArray.length + 1,
        name: this.myForm.value.name,
        email: this.myForm.value.email
      };
      this.studentsArray.push(newStudent);
      this.dialog.open(DialogComponent, {
        data: newStudent
      });
      this.myForm.reset();
    }
  }

    showName(name: string): void {
      console.log('Nombre seleccionado:', name);
    }
}
