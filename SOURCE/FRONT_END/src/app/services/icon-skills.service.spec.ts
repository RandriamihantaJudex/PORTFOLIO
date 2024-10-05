import { TestBed } from '@angular/core/testing';

import { IconSkillsService } from './icon-skills.service';

describe('IconSkillsService', () => {
  let service: IconSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
