import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from '../../services/detail.service';
import { MovieDescriptor } from '../../types/detail.type';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  private routerSubscribe: any;
  public movie: MovieDescriptor = new MovieDescriptor();
  public strGenres: string = '';
  public strProductionCompanies: string = '';
  public strProductionCountries: string = '';
  public strSpokenLanguages: string = '';

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let idMovie: number = +params['id'];
      this.detailService.getDetail(idMovie).subscribe(
        (data) => {
          this.strProductionCompanies = data.production_companies.map((element)=>{return element.name}).join(', ');
          this.strProductionCountries = data.production_countries.map((element)=>{return element.name}).join(', ');
          this.strSpokenLanguages = data.spoken_languages.map((element)=>{return element.name}).join(', ');
          this.strGenres = data.genres.map((element)=>{return element.name}).join(', ');
          this.movie= data;
        }
      );
    });
    console.log(this.movie, "detail");
  }

  goToSearch() {
    this.router.navigate(['/']);
  }

}