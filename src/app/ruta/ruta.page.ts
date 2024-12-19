import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})
export class RutaPage {
  showImages = false;

  imagesInfo = [
    { src: 'assets/img/ruta325.PNG', info: 'PARADEROS MAS IMPORTANTES RECORRIDO 325 //PE799 //- Dr. Sótero Del Río esq. Av. Vicuña Mackenna (La Florida),//PE1274 // - Av. Vicuña Mackenna esq. Rojas Magallanes (La Florida),//PD319 //- Avenida Irarrázaval esq. Av. Pedro de Valdivia (Ñuñoa),//PD324 //- Avenida Irarrázaval esq. Avenida Salvador (Ñuñoa)//PD906 //- Fabriciano González esq. Los Zorzales (Macul)' },
    { src: 'assets/img/ruta225.PNG', info: 'PARADEROS MAS IMPORTANTES RECORRIDO 225 //PC115// - Avenida Las Condes esq. Psje. Las Condes, //PD240// - Avenida Salvador esq. Av. Príncipe de Gales, //PE126// - Av. Vicuña Mackenna esq. Vicente Valdés, //PD188// - Av. Américo Vespucio esq. Av. Castillo Velasco, //PG275// - Bahía Catalina esq. Los Timbales' },
    { src: 'assets/img/rutaE15.PNG', info: 'PARADEROS MAS IMPORTANTES RECORRIDO E15c //PE151// - Av. Vicuña Mackenna esq. Vicente Valdés, //PE1274// - Av. Vicuña Mackenna esq. Rojas Magallanes, //PE1441// - Av. Vicuña Mackenna esq. Av. A. Vespucio, //PE96// - Avenida Santa Raquel esq. Avenida Trinidad, //PE799// - Dr. Sótero Del Río esq. Av. Vicuña Mackenna' }
  ];

  constructor(private navCtrl: NavController) {}

  goHome() {
    this.navCtrl.navigateBack('/main/home');
  }
}
