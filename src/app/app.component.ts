import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'js';
  name: string = 'NGQABUTHO NCUBE';
  surname: String = 'Ncube';
  place: string= 'Joburg';

  constructor () {
    console.log(this.name);
    console.log (this.surname);
    console.log (this.place);



  }
}
