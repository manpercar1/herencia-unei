import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private activatedRouteError : ActivatedRoute) { }

  code : string = ""
  message : string = ""

  // TODO: encontrar la forma de hacer un cambio de cabecera

  ngOnInit(): void {
    this.activatedRouteError.data.subscribe(data => {
      this.code = data.errorCode
      this.message = data.message
    })
  }

}
