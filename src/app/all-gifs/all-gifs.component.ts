import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { GetGifService } from '../services/get-gif.service';

@Component({
  selector: 'app-all-gifs',
  templateUrl: './all-gifs.component.html',
  styleUrls: ['./all-gifs.component.css']
})
export class AllGifsComponent implements OnInit {
  @select() gifWords;
  results: any = [];

  constructor(private gifService: GetGifService) { }

  ngOnInit() {
  }

  fetchGif(gifWord) {
    this.gifService.getGif(gifWord).subscribe((data: any) => {
        const result = {...data};
        this.results = result.data;
    });
  }


}
