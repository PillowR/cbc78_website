import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationBoardComponent } from './administration-board.component';

describe('AdministrationBoardComponent', () => {
  let component: AdministrationBoardComponent;
  let fixture: ComponentFixture<AdministrationBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
