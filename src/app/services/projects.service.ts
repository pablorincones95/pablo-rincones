import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from './../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsColletion: AngularFirestoreCollection<Project>;
  private projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;

  constructor( private db: AngularFirestore ) {
    this.projectsColletion = db.collection<Project>('projects');
  }

  getProjects(): Observable<Project[]> {
    this.projects = this.projectsColletion.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Project;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
    return this.projects;
  }
}
