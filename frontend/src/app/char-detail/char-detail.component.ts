import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit {

  title!: String;
  name!: String;
  race!: String;
  ability1!: String;
  ability2!: String;
  deital!: String;
  loginName!: String;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.pipe().subscribe(
      // ログイン名の取得
      params => {
        this.title = params.a;
        this.name = params.b;
        this.race = params.c;
        this.ability1 = params.d;
        this.ability2 = params.e;
        this.deital = params.f;
        this.loginName = params.g;

      }
    );

  }

  /**
   * 戻る
   */
  back() {
    this.router.navigate(['char-list'],
      {
        queryParams:
        {
          id: this.loginName
        }
      }


    );
  }


}
