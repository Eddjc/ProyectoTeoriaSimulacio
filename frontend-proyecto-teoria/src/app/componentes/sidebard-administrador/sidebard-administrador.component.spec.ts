import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardAdministradorComponent } from './sidebard-administrador.component';

describe('SidebardAdministradorComponent', () => {
  let component: SidebardAdministradorComponent;
  let fixture: ComponentFixture<SidebardAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebardAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
