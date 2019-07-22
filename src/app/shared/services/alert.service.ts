import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private loading: any;
  private toast: any;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
  }

  loadingShow() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  loadingHide() {
    this.loading.dismiss();
  }

  async showToastMsg(msg) {
    this.toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 3000
    });

    this.toast.present();
  }
}
