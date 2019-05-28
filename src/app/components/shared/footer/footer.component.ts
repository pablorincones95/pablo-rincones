import { Component, OnInit } from '@angular/core';
import { DataOfPabloRinconesService } from 'src/app/services/data-of-pablo-rincones.service';
import { DataOfPabloRincones } from 'src/app/interfaces/data-of-pablo-rincones';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  datas: DataOfPabloRincones[];

  year:number = new Date().getFullYear();

  constructor(private dataOfPabloService: DataOfPabloRinconesService) { }

  ngOnInit() {
    this.dataOfPabloService.getData().subscribe(datas => {
      this.datas = datas;
    })
  }

}
