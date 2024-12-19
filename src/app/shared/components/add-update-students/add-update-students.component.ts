import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-students',
  templateUrl: './add-update-students.component.html',
  styleUrls: ['./add-update-students.component.scss'],
})
export class AddUpdateStudentsComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    seccion: new FormControl('', [Validators.required, Validators.minLength(4)]),
    asignatura: new FormControl('', [Validators.required, Validators.minLength(4)]),
    carrera: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  user = {} as User;
  ngOnInit() {

    this.user = this.utilsSvc.getFromLocalStorage('user');

  }

  async submit() {
    if (this.form.valid) {

      let path = `users/${this.user.uid}/asistencia`;

      const loading = await this.utilsSvc.loading();
      await loading.present();

      delete this.form.value.id

      this.firebaseSvc.addDocumnet(path, this.form.value).then(async res => {

       
        this.utilsSvc.dismissModal({success: true});

        this.utilsSvc.presentToast({
          message:'Asistencia creada correctamente',
          duration: 2500,
          color: 'success',
          position: 'middle',
          icon: 'checkmark-circle-outline'
        })


      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();
      })

      







    }

  }
}
