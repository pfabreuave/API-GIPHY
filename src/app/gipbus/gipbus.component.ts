import { Component, OnInit } from '@angular/core';
import { GipserService } from '../gipser.service';

@Component({
  selector: 'app-gipbus',
  templateUrl: './gipbus.component.html',
  styleUrls: ['./gipbus.component.css']
})
export class GipbusComponent implements OnInit {

  constructor(private gitserService: GipserService ) { }

  ngOnInit(): void {
  }
  search(searchTerm: string) {
    if (searchTerm !=='') {
      this.gitserService.searchGifs(searchTerm);
       
    }
  }

}
