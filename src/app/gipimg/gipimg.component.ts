import { Component, OnInit, OnDestroy } from '@angular/core';
import {  GipserService } from '../gipser.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gipimg',
  templateUrl: './gipimg.component.html',
  styleUrls: ['./gipimg.component.css']
})
export class GipimgComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription

  constructor(private dataService: GipserService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription = this.dataService.getGifs()
      .subscribe((response: any) => {
        
        this.gifs = response;
      });
      
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
