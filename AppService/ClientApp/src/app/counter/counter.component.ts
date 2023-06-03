import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  suggestedGoal: string | undefined;

  loading: boolean = false;

  suggestGoal(topic: string) {
    this.loading = true;
    setTimeout(() => {
      // Simulate the chatbot response after 2 seconds
      this.getMockResponse(topic);
      this.loading = false;
    }, 2000);
  }



  getMockResponse(topic: string): void {

    switch (topic.toLowerCase()) {
      case 'health':
        this.suggestedGoal = 'Start a daily exercise routine';
        break;
      case 'travel':
        this.suggestedGoal = 'Visit at least five new countries in the next year';
        break;
      case 'learning':
        this.suggestedGoal = 'Learn a new programming language';
        break;
      default:
        this.suggestedGoal = 'Sorry, I don\'t have a suggestion for that topic.';
        break;
    }
  }

}
