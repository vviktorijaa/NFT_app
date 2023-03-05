import { TestBed } from '@angular/core/testing';

import { BlockchainExplorerService } from './blockchain-explorer.service';

describe('BlockchainExplorerService', () => {
  let service: BlockchainExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockchainExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
