import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainExplorerComponent } from './blockchain-explorer.component';

describe('BlockchainExplorerComponent', () => {
  let component: BlockchainExplorerComponent;
  let fixture: ComponentFixture<BlockchainExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
