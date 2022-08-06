import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassoAuthComponent } from './passo-auth.component';

describe('PassoAuthComponent', () => {
  let component: PassoAuthComponent;
  let fixture: ComponentFixture<PassoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
