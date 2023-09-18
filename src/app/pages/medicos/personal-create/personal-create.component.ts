import { Component } from '@angular/core';;
import { MedicosService } from 'src/app/services/medicos/medicos.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-create',
  templateUrl: './personal-create.component.html',
  styleUrls: ['./personal-create.component.scss']
})
export class PersonalCreateComponent {
  formData = {
    member_number: '',
    identification: '',
    name: '',
    lastame:'',
    dof:'',
    address:'',
    phone:'',
    email:''
  }

  constructor(private medicosService: MedicosService,   private router: Router){}

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.member_number = this.formData.member_number.toString();
    this.formData.identification = this.formData.identification.toString();
    this.formData.name = this.formData.name.toString();
    this.formData.lastame = this.formData.lastame.toString();
    this.formData.dof = this.formData.dof.toString();
    this.formData.address = this.formData.address.toString();
    this.formData.phone = this.formData.phone.toString();
    this.formData.email = this.formData.email.toString();
    // Convierte los valores del formulario a cadenas (strings)
    // const formDataString = {};
    // for (const key in this.formData) {
    //   if (Object.prototype.hasOwnProperty.call(this.formData, key)) {
    //     formDataString[key] = this.formData[key].toString();
    //   }
    // }

    // Llama al servicio para crear un nuevo médico
    this.medicosService.createDoctor(this.formData).subscribe(
      (response) => {
        console.log('Médico creado exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('El médico se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/medicos']);
      },
      (error) => {
        console.error('Error al crear el médico:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear el médico. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      member_number: '',
      identification: '',
      name: '',
      lastame:'',
      dof:'',
      address:'',
      phone:'',
      email:''
    };
  }
}