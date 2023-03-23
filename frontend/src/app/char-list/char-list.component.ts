import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RenkeiService } from '../service/renkei.service';
import { MatTableDataSource } from '@angular/material/table';
import { CharListModel } from '../model/charListModel';
import { Router } from '@angular/router';

type Element = CharListModel;

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})

export class CharListComponent implements OnInit {

  LoginName!: string;
  title!: string;
  chartitle: any[] = new Array();
  selectedBox!: any;
  word!: string;
  count!: number;
  message!: string;

  detailTitle!: String;
  detailName!: String;
  detailRace!: String;
  detailAbility1!: String;
  detailAbility2!: String;
  detailDetail!: String;

  displayedColumns: string[] = ['title', 'name', 'race', 'ability1', 'ability2', 'getdetails'];
  dataSource: MatTableDataSource<CharListModel> = new MatTableDataSource<CharListModel>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private renkeiService: RenkeiService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.pipe().subscribe(
      // ログイン名の取得
      params => {
        this.LoginName = params.id;
      }
    );

    // セレクトボックス値をバックエンド側から取得
    // subscribe(値の受け取り)
    this.renkeiService.getString()
      .subscribe(response => {
        this.chartitle.push('');

        for (let i = 0; i < response.length; i++) {
          this.chartitle.push(response[i].title);

          console.log(this.chartitle);
          console.log(response[i].title);
        }

      });
  }

  /**
   * セレクトボックス検索処理
   */
  onSubmitfilter() {

    //セレクボックスで選択↓値に絞り込み処理
    console.log(this.selectedBox);

    // キャラ一覧取得
    this.renkeiService.getCharList(this.selectedBox)
      .subscribe(resoponses => {

        //　検索結果をデータソースに格納
        this.dataSource = new MatTableDataSource<Element>(resoponses);
        console.log(resoponses);

        // 検索件数
        this.count = resoponses.length;
        // message
        if (this.selectedBox == '主人公') {
          this.message = '東方作品の主人公です！';

        } else if (this.selectedBox == '紅魔郷') {
          this.message = '東方紅魔郷　～ the Embodiment of Scarlet Devil.';

        } else {
          this.message = '東方妖々夢　～ Perfect Cherry Blossom.';
        }

      });
  }

  /**
   * 詳細画面ボタン押下処理
   * @param charName 
   */
  getRecord(charName?: String) {

    // キャラ一覧取得
    this.renkeiService.getCharList(this.selectedBox)
      .subscribe(resoponses => {

        // 詳細で確認したキャラが一致した場合
        for (let z = 0; z < resoponses.length; z++) {
          if (resoponses[z].name == charName) {

            // タイトル
            this.detailTitle = resoponses[z].title;
            // 名前
            this.detailName = resoponses[z].name;
            // 種族
            this.detailRace = resoponses[z].race;
            // 能力1
            this.detailAbility1 = resoponses[z].ability1;
            // 能力2
            this.detailAbility2 = resoponses[z].ability2;
            // 詳細
            this.detailDetail = resoponses[z].detail;

            // 詳細画面に遷移
            this.router.navigate(['chardatail'],
              {
                queryParams:
                {
                  a: this.detailTitle,
                  b: this.detailName,
                  c: this.detailRace,
                  d: this.detailAbility1,
                  e: this.detailAbility2,
                  f: this.detailDetail,
                  g: this.LoginName
                }
              }
            );
          }
        }

      });
  }

  /**
   * ログアウト
   */
  logout() {
    this.router.navigate(['']);

  }

}
