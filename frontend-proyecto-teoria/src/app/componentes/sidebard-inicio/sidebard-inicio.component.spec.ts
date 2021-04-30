import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardInicioComponent } from './sidebard-inicio.component';

describe('SidebardInicioComponent', () => {
  let component: SidebardInicioComponent;
  let fixture: ComponentFixture<SidebardInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
