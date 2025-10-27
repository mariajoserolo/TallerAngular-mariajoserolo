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
      this.seasonsAverage = this.seasonsAverageCalculate(series);
    })
  }

  seasonsAverageCalculate(series: Serie[]){
    let sumaTotalSeasons: number = 0;
    const totalSeries: number = series.length;
    series.forEach((serie) => sumaTotalSeasons = sumaTotalSeasons + serie.seasons);
    let seasonsAverage: number = 0;
    seasonsAverage = sumaTotalSeasons / totalSeries;
    return seasonsAverage;
  }

  ngOnInit() {
    this.getSeries();
  }

}
