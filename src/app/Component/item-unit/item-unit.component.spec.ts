import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUnitComponent } from './item-unit.component';

describe('ItemUnitComponent', () => {
  let component: ItemUnitComponent;
  let fixture: ComponentFixture<ItemUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
