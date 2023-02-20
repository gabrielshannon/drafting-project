import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentToolsComponent } from './document-tools.component';

describe('DocumentToolsComponent', () => {
  let component: DocumentToolsComponent;
  let fixture: ComponentFixture<DocumentToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
