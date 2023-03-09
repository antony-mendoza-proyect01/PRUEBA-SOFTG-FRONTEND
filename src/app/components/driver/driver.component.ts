import { Component, OnInit } from '@angular/core';
import {Drivers} from "../../interfaces/drivers";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
listDrivers: Drivers[]=[
  {lastname:'Antony', firstname:'mendoza', ssd:'algo',
  adress:'holis', city: 'quilla', phone:11,active:true}
]
  constructor() { }

  ngOnInit(): void {
  }

}
