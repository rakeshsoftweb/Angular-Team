import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfamilydetComponent } from './addfamilydet.component';

describe('AddfamilydetComponent', () => {
  let component: AddfamilydetComponent;
  let fixture: ComponentFixture<AddfamilydetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfamilydetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfamilydetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
