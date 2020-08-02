import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockComponent } from 'ng2-mock-component';
import { AllGifsComponent } from './all-gifs.component';

describe('AllGifsComponent', () => {
  let component: AllGifsComponent;
  let fixture: ComponentFixture<AllGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        AllGifsComponent,
        MockComponent({ selector: 'app-results', inputs: ['result'] })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create All Gifs component', async(inject([HttpTestingController],
  (httpClient: HttpTestingController) => {
    expect(component).toBeTruthy();
  })));
});
