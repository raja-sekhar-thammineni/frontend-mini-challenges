import { Router, RouterOutlet } from '@angular/router';

import { Component, inject } from '@angular/core';
import { angularChallenges } from '@fmc/data/content';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-challenge-container',
  templateUrl: './challenge-container.component.html',
  styleUrls: ['./challenge-container.component.scss'],
  imports: [NavbarComponent, RouterOutlet],
})
export class ChallengeContainerComponent {
  public title = 'Challenge';
  private router = inject(Router);

  ngOnInit() {
    const challengeId = this.router.url.split('/').at(-1);

    if (!challengeId) {
      return;
    }

    const challenge = angularChallenges.get(challengeId);

    if (!challenge) {
      return;
    }

    this.title = challenge.title;
  }
}
