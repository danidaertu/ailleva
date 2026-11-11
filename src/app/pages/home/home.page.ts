import { Component, OnInit } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { FirebaseService } from '../../shared/services/firebase.service';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    try {

      const refColleccion = collection(this.firebaseService.db, 'test_conexion');
      const snapshot = await getDocs(refColleccion);
      
      console.log('🔥 ¡Conexión con Firebase establecida con éxito!');
      console.log('📦 Número de documentos en la colección de prueba:', snapshot.size);
    } catch (error) {
      console.error('❌ Error al conectar con Firestore:', error);
    }
  }
}