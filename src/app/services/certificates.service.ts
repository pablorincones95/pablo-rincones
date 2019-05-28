import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Certificate } from './../interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private certificatesCollection: AngularFirestoreCollection<Certificate>;
  certificates: Observable<Certificate[]>;

  constructor( private db: AngularFirestore ) {
    this.certificatesCollection = db.collection<Certificate>('dataOfPabloRincones');
  }

  getProjects(): Observable<Certificate[]> {
    this.certificates = this.certificatesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Certificate;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
    return this.certificates;
  }
}
