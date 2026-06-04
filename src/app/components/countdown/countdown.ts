import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.html',
  styleUrls: ['./countdown.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}

  targetDate = new Date('September 12, 2026 00:00:00');

  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  private intervalId: any;

  ngOnInit(): void {

    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private updateCountdown(): void {

    const now =  Date.now();

    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {

      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';

      clearInterval(this.intervalId);

      return;
    }

    const days = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );

    this.days = this.formatTime(days);
    this.hours = this.formatTime(hours);
    this.minutes = this.formatTime(minutes);
    this.seconds = this.formatTime(seconds);
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}