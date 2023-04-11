import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTreasureComponent } from './find-treasure.component';

describe('FindTreasureComponent', () => {
  let component: FindTreasureComponent;
  let fixture: ComponentFixture<FindTreasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTreasureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
