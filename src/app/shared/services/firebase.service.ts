import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  public db: Firestore;

  constructor() {
    // 1. Inicializamos Firebase usando el objeto de configuración del environment
    this.app = initializeApp(environment.firebaseConfig);
    
    // 2. Inicializamos Firestore
    this.db = getFirestore(this.app);
  }
}