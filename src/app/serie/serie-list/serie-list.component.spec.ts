/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SerieService } from '../serie.service';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SerieListComponent } from './serie-list.component';
import { App } from '../../app';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: Serie', () => {
  //let component: SerieListComponent;
  //let fixture: ComponentFixture<SerieListComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ App, SerieListComponent ],
      imports: [ RouterTestingModule,HttpClientTestingModule],
      providers: [SerieService]
    });
    .compileComponents();
  }));

  //beforeEach(() => {
    //fixture = TestBed.createComponent(SerieListComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  //});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy;
  });

  it(`should have as title 'TV Series'`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TV Series');
  })
});
