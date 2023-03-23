import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

export class KeySet {
  constructor(public name: string, public pass: string) { }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  keySet = new KeySet('', '');
  hide = true;
  title = 'watanabe-front';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit() {

    //ログインボタン押下時にユーザー名を子コンポーネント(charlistComponent)へ渡す。
    //ログインボタン押下時に一覧へ画面遷移する。
    this.router.navigate(['char-list'],
      {
        queryParams:
        {
          id: this.keySet.name
        }
      }
    );
  }

}
