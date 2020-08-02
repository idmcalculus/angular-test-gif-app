import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetGifService } from './get-gif.service';

describe('GetGifService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', async(inject([HttpTestingController],
    (httpClient: HttpTestingController) => {
    const service: GetGifService = TestBed.get(GetGifService);
    expect(service).toBeTruthy();
  })));
});
