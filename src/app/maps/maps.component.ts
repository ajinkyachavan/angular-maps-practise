import { Component, OnInit } from '@angular/core';
import { MapsService } from './maps.service';
import { take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  userLocationData = [];

  constructor(
    private mapsService: MapsService
  ) { }

  ngOnInit() {
    this.mapsService.getUserLocationData().pipe(
      take(1)
    ).subscribe(
      (res: any) => {
        this.userLocationData = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
