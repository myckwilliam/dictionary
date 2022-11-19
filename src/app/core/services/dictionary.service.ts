import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dictionary } from 'src/app/shared/models/dictionary';
import { Environment } from 'src/app/shared/models/environment';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private http: HttpClient, private env: Environment) {}
  getInfo(word: string): Observable<Dictionary> {
    const url = `${this.env.urls.DICTIONARY}/${word}`;
    return this.http.get<Dictionary[]>(url).pipe(
      map((data) => {
        return data[0];
      })
    );
  }
}
