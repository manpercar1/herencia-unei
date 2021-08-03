import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginCre() : void{
    if(localStorage.getItem('idTenant') == 'cre' || localStorage.getItem('idTenant') == 'assda' ||
        localStorage.getItem('idTenant') == 'tss'){
          localStorage.clear()
        }
    localStorage.setItem('idTenant', 'cre')
    localStorage.setItem('mensajeLogin', 'Logueado como CRE')
  }

  loginAssda() : void{
    if(localStorage.getItem('idTenant') == 'cre' || localStorage.getItem('idTenant') == 'assda' ||
        localStorage.getItem('idTenant') == 'tss'){
          localStorage.clear()
        }
    localStorage.setItem('idTenant', 'assda')
    localStorage.setItem('mensajeLogin', 'Logueado como ASSDA')
  }

  loginTss() : void{
    if(localStorage.getItem('idTenant') == 'cre' || localStorage.getItem('idTenant') == 'assda' ||
        localStorage.getItem('idTenant') == 'tss'){
          localStorage.clear()
        }
    localStorage.setItem('idTenant', 'tss')
    localStorage.setItem('mensajeLogin', 'Logueado como TSS')
  }
}
