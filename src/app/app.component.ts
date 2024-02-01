import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface userData {
id: string,
name: string,
class: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = signal<userData[]>([
    {id: '1', name: 'balu', class: 'developer'},
    {id: '2', name: 'kiran', class: 'qa'},
    {id: '3', name: 'yashu', class: 'admin'},
  ])
}
