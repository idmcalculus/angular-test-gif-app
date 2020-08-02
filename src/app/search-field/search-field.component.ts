import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { GetGifService } from '../services/get-gif.service';
import { SEARCH_ERROR, GET_RESPONSES } from './../actions';
import { IAppState } from '../in-app-store';


@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    gifSearch = '';

    constructor(private ngRedux: NgRedux<IAppState>,
                private gifService: GetGifService) { }

    ngOnInit() {
    }

    fetchGif(gifWord) {
        if (!gifWord) {
            const err = 'Please type a gif word into the search box to search for your favourite Gif';
            this.ngRedux.dispatch({type: SEARCH_ERROR, err});
        }
        this.gifService.getGif(gifWord).subscribe((data: any) => {
                let result = {...data};
                result = result.data;
                const err = '';
                const gifWords = {gifWord};
                this.ngRedux.dispatch({type: GET_RESPONSES, allResults: result, err, gifWords});
        });
        this.gifSearch = '';
    }
}
