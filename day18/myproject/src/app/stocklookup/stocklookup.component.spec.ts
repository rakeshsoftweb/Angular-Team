import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklookupComponent } from './stocklookup.component';

describe('StocklookupComponent', () => {
  let component: StocklookupComponent;
  let fixture: ComponentFixture<StocklookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocklookupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocklookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
