import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharListModel } from '../model/charListModel';
import { charSelectList } from '../model/charSelectList';

@Injectable({
  providedIn: 'root'
})
export class RenkeiService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * セレクトボックス値取得
   * @param
   */
  public getString(): Observable<charSelectList[]> {
    return this.http.get<charSelectList[]>('/api/selectBox');
  }

  /**
   * 一覧情報取得
   */
   public getCharList(word? : string): Observable<CharListModel[]> {
    return this.http.get<CharListModel[]> ('/api/charList/'+ word);
  }

}
