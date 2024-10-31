import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyuserComponent } from './notifyuser.component';

describe('NotifyuserComponent', () => {
  let component: NotifyuserComponent;
  let fixture: ComponentFixture<NotifyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
