import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-tracking-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './tracking-map.component.html',
  styleUrl: './tracking-map.component.scss'
})
export class TrackingMapComponent implements AfterViewInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
