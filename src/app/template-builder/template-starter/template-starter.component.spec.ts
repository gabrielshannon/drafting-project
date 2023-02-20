import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStarterComponent } from './template-starter.component';

describe('TemplateStarterComponent', () => {
  let component: TemplateStarterComponent;
  let fixture: ComponentFixture<TemplateStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
