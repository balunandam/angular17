import { Component, effect, signal } from '@angular/core';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
title = signal('');
titleChangeEffect = effect(() => {
  console.log('changechangeEffect', this.title());
})
changeValue(event: Event) {
  const title = (event.target as HTMLInputElement);
  this.title.set(title.value);
}
}
