import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatMatchComponent } from './creat-match.component';

describe('CreatMatchComponent', () => {
  let component: CreatMatchComponent;
  let fixture: ComponentFixture<CreatMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
