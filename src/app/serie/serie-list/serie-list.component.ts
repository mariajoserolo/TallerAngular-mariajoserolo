import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries(): void{
    this.serieService.getSeries().subscribe((series: Serie[]) => {
      this.series = series;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

}
