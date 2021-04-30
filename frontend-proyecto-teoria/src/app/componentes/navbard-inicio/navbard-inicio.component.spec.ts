import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardInicioComponent } from './navbard-inicio.component';

describe('NavbardInicioComponent', () => {
  let component: NavbardInicioComponent;
  let fixture: ComponentFixture<NavbardInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
