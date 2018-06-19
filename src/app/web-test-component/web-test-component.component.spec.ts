import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTestComponentComponent } from './web-test-component.component';

describe('WebTestComponentComponent', () => {
  let component: WebTestComponentComponent;
  let fixture: ComponentFixture<WebTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
