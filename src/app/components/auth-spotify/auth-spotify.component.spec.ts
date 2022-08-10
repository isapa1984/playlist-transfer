import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSpotifyComponent } from './auth-spotify.component';

describe('AuthSpotifyComponent', () => {
  let component: AuthSpotifyComponent;
  let fixture: ComponentFixture<AuthSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSpotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
