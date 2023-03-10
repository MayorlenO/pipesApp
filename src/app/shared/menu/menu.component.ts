import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: MenuItem[] = [];

  constructor(){

  }

  ngOnInit() {
    this.items = this.items = [
        {
            label:'Pipes de Angular',
            icon: 'pi pi-desktop',
            items:[
                {
                    label:'Textos y Fechas',
                    icon:'pi pi-align-left',
                    routerLink:''
                },
                {
                    label:'Números',
                    icon:'pi pi-align-dolar',
                    routerLink:'numeros'
                },
                {
                    label:'No comunes',
                    icon:'pi pi-align-globe',
                    routerLink:'no-comunes'
                }
            ]

        },
        {
            label:'Pipes Personalizados',
            icon: 'pi pi-cog',
            items:[
                {
                    label:'Textos y Fechas',
                    icon:'pi pi-align-left',
                    routerLink:''
                },
                {
                    label:'Números',
                    icon:'pi pi-align-dolar',
                    routerLink:'numeros'
                },
                {
                    label:'No comunes',
                    icon:'pi pi-align-globe',
                    routerLink:'no-comunes'
                },
                {
                    label:'Pipes Personalizados',
                    icon:'pi pi-align-globe',
                    routerLink:'ordenar'
                }
            ]

        }
    ];
}
}

