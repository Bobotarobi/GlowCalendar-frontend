import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatChip} from "@angular/material/chips";





@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatToolbar, MatIcon, MatNavList, MatListItem, NgForOf, MatButtonToggle, NgOptimizedImage, MatChip],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})




export class MainPageComponent {




  currentDate = new Date(2025, 2, 1); // March 2025
  weekDays: any[] = [];
  hours = Array.from({length: 24}, (_, i) => i);

  constructor() {
    this.generateWeekDays();
  }

  generateWeekDays() {
    // For week 13 of March 2025 (assuming week starts on Monday)
    const startDate = new Date(2025, 2, 24); // March 24, 2025 is Monday of week 13

    this.weekDays = Array.from({length: 7}, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      return {
        name: this.getDayName(date),
        number: date.getDate(),
        date: date,
        isToday: this.isToday(date)
      };
    });
  }

  getDayName(date: Date): string {
    const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return days[date.getDay()];
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateWeekDays();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateWeekDays();
  }

  hasEvent(date: Date, hour: number): boolean {
    // Mock implementation - in real app you'd check your events
    return hour === 10 && date.getDay() === 2; // Show event at 10am on Tuesday
  }

  getEvent(date: Date, hour: number): any {
    // Mock implementation
    return {
      title: 'Meeting',
      start: new Date(date.setHours(hour)),
      end: new Date(date.setHours(hour + 1))
    };
  }





}
