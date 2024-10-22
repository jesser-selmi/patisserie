import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieListComponent } from './pie-list.component';

describe('PieListComponent', () => {
  let component: PieListComponent;
  let fixture: ComponentFixture<PieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieListComponent]
    });
    fixture = TestBed.createComponent(PieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
