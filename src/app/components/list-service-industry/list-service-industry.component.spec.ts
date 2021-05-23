import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceIndustryComponent } from './list-service-industry.component';

describe('ListServiceIndustryComponent', () => {
  let component: ListServiceIndustryComponent;
  let fixture: ComponentFixture<ListServiceIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
