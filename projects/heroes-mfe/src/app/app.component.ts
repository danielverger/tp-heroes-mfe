import { Component } from '@angular/core';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeroesListComponent],
  providers: [HeroesService]
})
export class AppComponent {
  title = 'heroes-mfe';
}
