import { TestBed } from '@angular/core/testing';

import { LascInterceptorInterceptor } from './lasc-interceptor.interceptor';

describe('LascInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LascInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LascInterceptorInterceptor = TestBed.inject(LascInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
