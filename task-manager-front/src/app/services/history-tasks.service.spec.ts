import { TestBed } from '@angular/core/testing';

import { HistoryTasksService } from './history-tasks.service';

describe('HistoryTasksService', () => {
  let service: HistoryTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
