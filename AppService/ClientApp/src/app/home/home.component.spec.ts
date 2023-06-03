import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GoalsComponent } from '../goal/goals.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, GoalsComponent],
    }).compileComponents();
  });

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
    expect(compiled.querySelector('h2').textContent).toContain("What is 43 Things?");
    expect(compiled.querySelector('p').textContent).toContain("43 Things is the world's most popular online goal setting community. It's free and fun. How does it work?");
    expect(compiled.querySelector('.text-blocks')).toBeTruthy();
    expect(compiled.querySelector('button').textContent).toContain("Get Started");
    expect(compiled.querySelector('app-goals')).toBeFalsy();
  });
});
