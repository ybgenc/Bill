import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = " ";
  lastName = " ";
  date = " ";
  money : number = 0;
  product = " ";
  number : number =0;


  onNameChange (value : string){

    this.name=value;
  }

  onLastChange (value :string){
    this. lastName = value;
  }

  onDateChange(value : string){
    this.date=value;
  }

  onMoneyChange(value : string){
    this.money = parseFloat(value);
  }

  onProductChange(value : string){
    this.product=value;
  }

  onNumberChange(value:string){
    this.number=parseFloat(value);
  }

  onExchangeChange(value:string){
    this.money=parseFloat(value);
  }
}
