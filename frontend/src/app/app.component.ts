import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  title = 'watanabe-front';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //this.router.navigate(['login']);
  }

}
