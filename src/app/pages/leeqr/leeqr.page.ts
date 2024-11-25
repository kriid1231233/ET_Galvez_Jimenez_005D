import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { QrService } from 'src/app/services/qr.service';



@Component({
  selector: 'app-leeqr',
  templateUrl: './leeqr.page.html',
  styleUrls: ['./leeqr.page.scss'],
})
export class LeeqrPage implements OnInit {

  constructor(public qr : QrService) { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  async leerQr() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
  }

  scaneo(){
    this.qr.StartScan()
  }
}
