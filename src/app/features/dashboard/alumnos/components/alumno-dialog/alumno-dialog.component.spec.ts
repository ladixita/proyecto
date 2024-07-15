import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDialogComponent } from './alumno-dialog.component';

describe('AlumnoDialogComponent', () => {
  let component: AlumnoDialogComponent;
  let fixture: ComponentFixture<AlumnoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
