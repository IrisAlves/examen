import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';/*
import { Toast } from '@ionic-native/toast';*/
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pag2 = Pagina2Page;
  constructor(public navCtrl: NavController, /*private toast: Toast*/) {

  }
  
  num=0;
  nconta : string = "..";
  incrementarnum(){
    this.num=this.num+1;
  }
  
  Irapagina2(){
    this.navCtrl.push("Pagina2Page",this.num);
  }

  clicmensaje(){
    /*
  this.toast.show(`Iris alves`, '3000', 'center').subscribe(
    toast => {
      console.log(toast);
    }
  );*/
  }
}
