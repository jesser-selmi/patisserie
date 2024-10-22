import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesecakeListComponent } from './cheesecake-list.component';

describe('CheesecakeListComponent', () => {
  let component: CheesecakeListComponent;
  let fixture: ComponentFixture<CheesecakeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheesecakeListComponent]
    });
    fixture = TestBed.createComponent(CheesecakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
