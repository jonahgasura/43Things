import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goal } from './goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private existingGoals: Goal[] = [
    {
      id: 1,
      title: 'Learn a new language',
      description: 'I want to learn Spanish within the next 6 months.',
      progress: 0,
      cheers: 0,
      sentiment: "postive",
      sentimentValue: 61
    },
  ];

  private popularGoals: Goal[] = [
    {
      id: 1,
      title: 'Travel the world',
      description: 'Explore different countries and cultures.',
      progress: 0,
      cheers: 0,
      sentiment: "postive",
      sentimentValue: 59
    },
    {
      id: 2,
      title: 'Start a business',
      description: 'Launch a business within the next year',
      progress: 0,
      cheers: 0,
      sentiment: "postive",
      sentimentValue: 77
    },
    {
      id: 1,
      title: 'Get fitter',
      description: 'Go to the gym at least 3 times a week',
      progress: 0,
      cheers: 0,
      sentiment: "postive",
      sentimentValue: 66
    },
  ];

  constructor() { }

  getExistingGoals(): Observable<Goal[]> {
    return of(this.existingGoals);
  }

  getPopularGoals(): Observable<Goal[]> {
    return of(this.popularGoals);
  }

  addGoal(title: string, description: string): void {
    const newGoal: Goal = {
      id: this.generateUniqueId(),
      title,
      description,
      progress: 0,
      cheers: 0,
      sentiment: "positive",
      sentimentValue: 90,
    };
    this.existingGoals.push(newGoal);
  }

  private generateUniqueId(): number {
    // Generate a unique ID for new goals (example: using a timestamp or a library like uuid)
    return Math.floor(Math.random() * 1000);
  }
}
