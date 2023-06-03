import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Goal} from "../goal/goal.model";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
   existingGoals: Goal[] = [
    {
      id: 1,
      title: 'Travel the world',
      description: 'Explore different countries and cultures.',
      progress: 0,
      cheers: 0,
      sentiment: "positive",
      sentimentValue: 72
    },
    {
      id: 2,
      title: 'Start a business',
      description: 'Launch a business within the next year',
      progress: 0,
      cheers: 0,
      sentiment: "positive",
      sentimentValue: 77
    },
    {
      id: 3,
      title: 'Get fitter',
      description: 'Go to the gym at least 3 times a week',
      progress: 0,
      cheers: 0,
      sentiment: "positive",
      sentimentValue: 69
    },
     {
       id: 4,
       title: 'Become a bully',
       description: 'Bully 5 people a day',
       progress: 0,
       cheers: 0,
       sentiment: "negative",
       sentimentValue: 84
     },
     {
       id: 5,
       title: 'Vengeance',
       description: 'Get revenge on all my enemies before the end of this year',
       progress: 0,
       cheers: 0,
       sentiment: "negative",
       sentimentValue: 81
     },
  ];

  hideSentiments: boolean = true;
  showLoader: boolean = false;

  toggleSentiments() {
    if(this.hideSentiments) {
      this.showLoader = true; // Show the loader

      setTimeout(() => {
        this.hideSentiments = !this.hideSentiments; // Toggle the sentiment visibility after 3 seconds
        this.showLoader = false; // Hide the loader
      }, 3000);
    }
    else {
      this.hideSentiments = !this.hideSentiments; // Toggle the sentiment visibility after 3 seconds
    }
  }

  removeGoal(goal: Goal) {
    const index = this.existingGoals.indexOf(goal);
    if (index !== -1) {
      this.existingGoals.splice(index, 1);
    }
  }





}
