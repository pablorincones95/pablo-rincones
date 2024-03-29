import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataOfPabloRincones } from 'src/app/interfaces/data-of-pablo-rincones';
import { DataOfPabloRinconesService } from 'src/app/services/data-of-pablo-rincones.service';

declare var particlesJS: any;
declare var Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  datas: DataOfPabloRincones[];

  contactForm: FormGroup;

  submitted = false;

  constructor(private dataOfPabloService: DataOfPabloRinconesService, private fb: FormBuilder) {}

  ngOnInit() {
    particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

    this.dataOfPabloService.getData().subscribe(datas => {
      this.datas = datas;
    });

    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }


  emailSend() {
    let host = 'smtp.gmail.com';
    let adressee = 'pablorincones95@gmail.com';
    let password = 'v--24418291';
    let formName = 'pablorincones.com';
    let names = this.contactForm.value.name;
    let email = this.contactForm.value.email;
    let subject = this.contactForm.value.subject;
    let message = this.contactForm.value.message;

    let body = `
      <div>
        <p>Nombre: ${names} </p>
        <p>Asunto: ${subject} </p>
        <p>Mensaje: ${message} </p>
      </div>
    `;

    Email.send({
        Host: host,
        Username: adressee,
        Password: password,
        To: adressee,
        From: email,
        Subject: formName,
        Body: body
    }).then( message => {
      alert(message)
      this.contactForm.reset();
    }
    );
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

}
