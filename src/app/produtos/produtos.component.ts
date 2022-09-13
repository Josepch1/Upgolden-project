import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  mostrar1: boolean = false;
  mostrar2: boolean = false;
  mostrar3: boolean = false;
  mostrar4: boolean = false;
  mostrar5: boolean = false;
  mostrar6: boolean = false;
  mostrar7: boolean = false;
  mostrar8: boolean = false;
  mostrar9: boolean = false;


  toggle1 () {
    this.mostrar1 = !this.mostrar1;
  }

  toggle2 () {
    this.mostrar2 = !this.mostrar2;
  }

  toggle3 () {
    this.mostrar3 = !this.mostrar3;
  }

  toggle4 () {
    this.mostrar4 = !this.mostrar4;
  }

  toggle5 () {
    this.mostrar5 = !this.mostrar5;
  }

  toggle6 () {
    this.mostrar6 = !this.mostrar6;
  }

  toggle7 () {
    this.mostrar7 = !this.mostrar7;
  }

  toggle8 () {
    this.mostrar8 = !this.mostrar8;
  }

  toggle9 () {
    this.mostrar9 = !this.mostrar9;
  }

  constructor() {

    }

  ngOnInit(): void {

  }

}
