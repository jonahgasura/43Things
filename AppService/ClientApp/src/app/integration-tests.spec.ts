import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home/home.component';
import { GoalsComponent } from './goal/goals.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CounterComponent } from './counter/counter.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, GoalsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize showOther as false', () => {
    expect(component.showOther).toBeFalse();
  });

  it('should toggle showOther when continue() is called', () => {
    component.continue();
    expect(component.showOther).toBeTrue();

    component.continue();
    expect(component.showOther).toBeFalse();
  });

  it('should render the initial HTML content correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('What is 43 Things?');
    expect(compiled.querySelector('p').textContent).toContain(
      "43 Things is the world's most popular online goal setting community. It's free and fun. How does it work?"
    );
    expect(compiled.querySelector('.text-blocks')).toBeTruthy();
    expect(compiled.querySelector('button').textContent).toContain('Get Started');
    expect(compiled.querySelector('app-goals')).toBeFalsy();
  });
});



describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FetchDataComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FetchDataComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize existingGoals correctly', () => {
    expect(component.existingGoals.length).toBe(5);
    // Add additional assertions to check the content of each goal object
  });

  it('should initialize hideSentiments as true', () => {
    expect(component.hideSentiments).toBeTrue();
  });

  it('should initialize showLoader as false', () => {
    expect(component.showLoader).toBeFalse();
  });

  it('should remove a goal from existingGoals when removeGoal() is called', () => {
    const goalToRemove = component.existingGoals[0];
    component.removeGoal(goalToRemove);
    expect(component.existingGoals.includes(goalToRemove)).toBeFalse();
  });
});



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
