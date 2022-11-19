import { Component } from '@angular/core';
import { take } from 'rxjs';
import { DictionaryService } from './core/services/dictionary.service';
import { Dictionary } from './shared/models/dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  word = '';
  definition = '';

  constructor(private service: DictionaryService) {}

  sendRequest(word: string) {
    if (!word) {
      this.definition = '';
      this.word = '';
    } else {
      this.service
        .getInfo(word)
        .pipe(take(1))
        .subscribe({
          next: (data) => {
            this.word = data.word;
            this.definition = data.meanings[0].definitions[0].definition;
          },
          error: () => {
            this.word = 'Not found';
            this.definition = '';
          },
        });
    }
  }
}
