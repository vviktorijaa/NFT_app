import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaMaskComponent } from './meta-mask.component';

describe('MetaMaskComponent', () => {
  let component: MetaMaskComponent;
  let fixture: ComponentFixture<MetaMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
