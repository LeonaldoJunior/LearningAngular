import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputProperyComponent } from './imput-propery.component';

describe('ImputProperyComponent', () => {
  let component: ImputProperyComponent;
  let fixture: ComponentFixture<ImputProperyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputProperyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputProperyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
