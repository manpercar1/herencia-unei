import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mensaje : string = ""
  public notFoundMessage : string = ""

  constructor(private service : AuthService, private activatedRouteHome : ActivatedRoute) { }

  ngOnInit(): void {
    localStorage.clear()
    this.activatedRouteHome.data.subscribe(data => this.notFoundMessage = data.notFoundMessage)
  }

  loginTss() : void {
    this.service.loginTss()
    this.mensaje = localStorage.getItem('mensajeLogin') as string
  }

  loginAssda() : void {
    this.service.loginAssda()
    this.mensaje = localStorage.getItem('mensajeLogin') as string
  }

  loginCre() : void {
    this.service.loginCre()
    this.mensaje = localStorage.getItem('mensajeLogin') as string
  }


}
