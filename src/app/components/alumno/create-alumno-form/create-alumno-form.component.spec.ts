import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlumnoFormComponent } from './create-alumno-form.component';

describe('CreateAlumnoFormComponent', () => {
  let component: CreateAlumnoFormComponent;
  let fixture: ComponentFixture<CreateAlumnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAlumnoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAlumnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
