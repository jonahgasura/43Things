import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchDataComponent } from './fetch-data.component';

describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchDataComponent],
    }).compileComponents();
  });

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
  });

  it('should initialize hideSentiments as true', () => {
    expect(component.hideSentiments).toBeTrue();
  });

  it('should initialize showLoader as false', () => {
    expect(component.showLoader).toBeFalse();
  });

  it('should toggle hideSentiments and showLoader when toggleSentiments() is called', (done) => {
    component.toggleSentiments();

    expect(component.showLoader).toBeTrue();

    setTimeout(() => {
      expect(component.hideSentiments).toBeFalse();
      expect(component.showLoader).toBeFalse();
      done();
    }, 3000);
  });

  it('should remove a goal from existingGoals when removeGoal() is called', () => {
    const goalToRemove = component.existingGoals[0];
    component.removeGoal(goalToRemove);

    expect(component.existingGoals.length).toBe(4);
    expect(component.existingGoals.includes(goalToRemove)).toBeFalse();
  });
});
