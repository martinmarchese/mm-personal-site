import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope
}
