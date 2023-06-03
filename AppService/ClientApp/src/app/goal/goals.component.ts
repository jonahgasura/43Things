import { Component, OnInit } from '@angular/core';
import { GoalsService } from './goals.service';
import { Goal } from './goal.model';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  existingGoals: Goal[] = [];
  popularGoals: Goal[] = [];

  newGoalTitle: string = '';
  newGoalDescription: string = '';

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
    this.goalsService.getExistingGoals().subscribe(goals => {
      this.existingGoals = goals;
    });

    this.goalsService.getPopularGoals().subscribe(goals => {
      this.popularGoals = goals;
    });
  }

  addGoal() {
    if (this.newGoalTitle && this.newGoalDescription) {
      this.goalsService.addGoal(this.newGoalTitle, this.newGoalDescription);
      this.newGoalTitle = '';
      this.newGoalDescription = '';
    }
  }
}
