import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssetComponent } from './all-asset.component';

describe('AllAssetComponent', () => {
  let component: AllAssetComponent;
  let fixture: ComponentFixture<AllAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
