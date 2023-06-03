import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CounterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize suggestedGoal as undefined', () => {
    expect(component.suggestedGoal).toBeUndefined();
  });

  it('should initialize loading as false', () => {
    expect(component.loading).toBeFalse();
  });

  it('should set loading to true and update suggestedGoal after 2 seconds when suggestGoal() is called', async () => {
    const topic = 'health';
    component.suggestGoal(topic);

    expect(component.loading).toBeTrue();
    expect(component.suggestedGoal).toBeUndefined();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    expect(component.loading).toBeFalse();
    expect(component.suggestedGoal).toBe('Start a daily exercise routine');
  });

  it('should set loading to false and update suggestedGoal to a default message if topic is not recognized', async () => {
    const topic = 'unknown';
    component.suggestGoal(topic);

    expect(component.loading).toBeTrue();
    expect(component.suggestedGoal).toBeUndefined();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    expect(component.loading).toBeFalse();
    expect(component.suggestedGoal).toBe("Sorry, I don't have a suggestion for that topic.");
  });
});
