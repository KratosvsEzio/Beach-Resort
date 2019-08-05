import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionKitchenComponent } from './section-kitchen.component';

describe('SectionKitchenComponent', () => {
  let component: SectionKitchenComponent;
  let fixture: ComponentFixture<SectionKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
