import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'andres';
  public nameUpper: string = 'ANDRES';
  public fullName: string = 'AnDrEs rObLeS';

  public customDate: Date = new Date();


}
