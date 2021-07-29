import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTareaComponent } from './heroe-tarea.component';

describe('HeroeTareaComponent', () => {
  let component: HeroeTareaComponent;
  let fixture: ComponentFixture<HeroeTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
