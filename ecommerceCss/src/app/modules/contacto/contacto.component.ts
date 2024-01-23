import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public fb = inject(FormBuilder)

  formUser = this.fb.group({
    'Nombre': ["",Validators.required],
    'Asunto': ["",Validators.required,],
    'Email' : ["", [Validators.email, Validators.required]],
    'Telefono' : ["", Validators.required, Validators.minLength(9), Validators.maxLength(12), Validators.pattern("^[0-9]*$"),],
    'Mensaje': ["", Validators.required],
    'Pais': ["", Validators.required],
    'Tipo': ["", Validators.required],
    'Categoria': ["", Validators.required],
  })
  
  
  get Nombre(){
    return this.formUser.get('Nombre');
  }
  get Asunto(){
    return this.formUser.get('Asunto');
  }
  get Email(){
    return this.formUser.get('Email');
  }
  get Telefono(){
    return this.formUser.get('Telefono');
  }
  get Mensaje(){
    return this.formUser.get('Mensaje');
  }
}
