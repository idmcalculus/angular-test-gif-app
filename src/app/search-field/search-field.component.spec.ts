import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SearchFieldComponent } from './search-field.component';
import { FormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgReduxModule,
        HttpClientTestingModule
      ],
      declarations: [ SearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Search component', (inject([HttpTestingController],
    (httpController: HttpTestingController) => {
    expect(component).toBeTruthy();
  })));
});
