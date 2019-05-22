import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataOfPabloRincones } from './../interfaces/data-of-pablo-rincones';

@Injectable({
  providedIn: 'root'
})
export class DataOfPabloRinconesService {
  private datatOfPabloRinconesColletion: AngularFirestoreCollection<DataOfPabloRincones>;
  private dataOfPabloRinconesDoc: AngularFirestoreDocument<DataOfPabloRincones>;
  dataOfPabloRincones: Observable<DataOfPabloRincones[]>;
  pabloRincones: Observable<DataOfPabloRincones>;

  constructor( private db: AngularFirestore ) {
    this.datatOfPabloRinconesColletion = db.collection<DataOfPabloRincones>('dataOfPabloRincones');
  }

  getProjects(): Observable<DataOfPabloRincones[]> {
    this.dataOfPabloRincones = this.datatOfPabloRinconesColletion.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as DataOfPabloRincones;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
    return this.dataOfPabloRincones;
  }
}
