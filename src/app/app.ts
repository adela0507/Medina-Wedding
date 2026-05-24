import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { Story } from './components/story/story';
import { EventDetails } from './components/event-details/event-details';
import { Timeline } from './components/timeline/timeline';
import {  CountdownComponent } from './components/countdown/countdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    Story,
    EventDetails,
    Timeline,
    CountdownComponent,
    CountdownComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  weddingDate = new Date('2026-08-15T00:00:00');
}