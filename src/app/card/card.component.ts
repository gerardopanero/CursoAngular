import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public image: string = "https://webneel.com/daily/sites/default/files/images/daily/10-2016/14-bicycle-vintage-photography.jpg";
  public Titulo: string = "Curso de Angular con Interpolacion";

}
