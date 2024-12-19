import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateStudentsComponent } from 'src/app/shared/components/add-update-students/add-update-students.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';  // Importa Leaflet

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  map: L.Map; // Mapa Leaflet

  constructor() {}

  ngOnInit() {
    this.loadMap(); // Cargar el mapa cuando se inicializa el componente
  }

  // Función para inicializar el mapa
  loadMap() {
    if (!this.map) { // Evita recrear el mapa si ya existe
      // Coordenadas de La Florida, Santiago de Chile
      this.map = L.map('map').setView([-33.523, -70.598], 13); // Coordenadas de La Florida
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      // Agrega un marcador en La Florida
      L.marker([-33.523, -70.598]).addTo(this.map)
        .bindPopup('La Florida, Santiago de Chile')
        .openPopup();
    }
  }

  // Limpia el mapa cuando se destruye el componente para evitar fugas de memoria
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  signOut() {
    this.firebaseSvc.signOut();
  }

  addUpdateStudnets() {
    this.utilsSvc.presentModal({
      component: AddUpdateStudentsComponent,
      cssClass: 'add-update-modal'
    });
  }

  async takeImage() {
    const dataUrl = (await this.utilsSvc.takePicture('Escanea tu QR')).dataUrl;
  }

  routerlinkIntro() {
    this.utilsSvc.routerLink('/main/intro');
  }
}
