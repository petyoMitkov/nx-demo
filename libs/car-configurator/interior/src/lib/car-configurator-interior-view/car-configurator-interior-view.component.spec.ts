import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfiguratorInteriorViewComponent } from './car-configurator-interior-view.component';

describe('CarConfiguratorInteriorViewComponent', () => {
  let component: CarConfiguratorInteriorViewComponent;
  let fixture: ComponentFixture<CarConfiguratorInteriorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarConfiguratorInteriorViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarConfiguratorInteriorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
