import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Project } from './../interfaces/project';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsColletion: AngularFirestoreCollection<Project>;
  private projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;

  private imgRuta = '/projects';
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>
  imgURL: string;

  constructor( private db: AngularFirestore, private storage: AngularFireStorage ) {
    this.projectsColletion = db.collection<Project>('proyects', ref => ref.orderBy('create', 'desc'));
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

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `${this.imgRuta}/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if(url) {
            this.imgURL;
          }
        });
      })
    ).subscribe()
  }

  addProject(project: Project) {
    project.img = this.imgURL;
    return this.projectsColletion.add(project);
  }

  updateProject(id: string, project: Project) {
    return this.projectsColletion.doc(id).set(project);
  }

  deleteProject(id:string) {
    return this.projectsColletion.doc(id).delete();
  }
}
