import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferProgressComponent } from './transfer-progress.component';

describe('TransferProgressComponent', () => {
  let component: TransferProgressComponent;
  let fixture: ComponentFixture<TransferProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
