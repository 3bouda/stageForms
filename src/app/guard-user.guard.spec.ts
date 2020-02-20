import { TestBed, async, inject } from '@angular/core/testing';

import { GuardUserGuard } from './guard-user.guard';

describe('GuardUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardUserGuard]
    });
  });

  it('should ...', inject([GuardUserGuard], (guard: GuardUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
