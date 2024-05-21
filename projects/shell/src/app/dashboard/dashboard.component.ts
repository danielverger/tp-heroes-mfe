import { Component, Injector, inject } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroesService } from '@mfe/heroes';

// const { HeroesService } = await import("heroes-mfe/heroes.service");


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    SidenavComponent,
    ToolbarComponent,
  ],
  // providers: [HeroesService]
})
export class DashboardComponent {
  showSideNav = true;

  private heroesService = inject(HeroesService);
  
  constructor(private injector: Injector) {
    // const heroesService = this.injector.get<HeroesService>(HeroesService); 
    // console.log(this.heroesService)
    this.heroesService.totalHeroes$.subscribe(console.log);
  }




}
