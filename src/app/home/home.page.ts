import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private apiService: ApiService) {
    this.getData();
  }
  artes = [];

  getData(){

  this.apiService.getData().subscribe(data =>{
    console.log(data.records[0].id);
    this.artes = data.records;
    console.log(this.artes);
  
  })


  }
  converterObjetoParaString(objeto: any): string {
    return JSON.stringify(objeto);
  }
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }
}

