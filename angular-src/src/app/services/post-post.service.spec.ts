import { TestBed, inject } from '@angular/core/testing';

import { PostPostService } from './post-post.service';

describe('PostPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostPostService]
    });
  });

  it('should be created', inject([PostPostService], (service: PostPostService) => {
    expect(service).toBeTruthy();
  }));
});
