import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRoomsComponent } from './section-rooms.component';

describe('SectionRoomsComponent', () => {
  let component: SectionRoomsComponent;
  let fixture: ComponentFixture<SectionRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
