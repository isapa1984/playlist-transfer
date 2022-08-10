import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDeezerComponent } from './auth-deezer.component';

describe('AuthDeezerComponent', () => {
  let component: AuthDeezerComponent;
  let fixture: ComponentFixture<AuthDeezerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDeezerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthDeezerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
