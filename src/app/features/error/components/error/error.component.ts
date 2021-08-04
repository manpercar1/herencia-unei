import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  // TODO: encontrar la forma de hacer un cambio de cabecera

  ngOnInit(): void {
    console.log("componente error")
  }

}
