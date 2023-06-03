import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the NavMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isExpanded as false', () => {
    expect(component.isExpanded).toBeFalse();
  });

  it('should collapse the menu when collapse() is called', () => {
    component.isExpanded = true;
    component.collapse();
    expect(component.isExpanded).toBeFalse();
  });

  it('should toggle isExpanded when toggle() is called', () => {
    component.toggle();
    expect(component.isExpanded).toBeTrue();

    component.toggle();
    expect(component.isExpanded).toBeFalse();
  });
});
