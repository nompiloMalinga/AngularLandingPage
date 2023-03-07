import { Component } from '@angular/core';
import {faYoutube,faFacebook,faInstagramSquare,faLinkedin}from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HomePage';
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faInstagramSquare = faInstagramSquare;
  faLinkedin = faLinkedin;
}
