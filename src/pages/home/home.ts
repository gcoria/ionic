import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EmailComposer]
})

export class HomePage {
   
  simpleForm: FormGroup;

  constructor(public navCtrl: NavController,
  	          public emailComposer: EmailComposer,
  	          public formBuilder: FormBuilder) {

  	this.simpleForm = formBuilder.group({
        place: [''],
        date: [ new Date() ],
        operator: [''],
        buyer: [''],
        term_buyer: [''],
        comision_buyer: [''],
        detail: [''],
        kg: [''],
        amount: [''],
        saler: [''],
        term_saler: [''],
        comision_saler: [''],
        dte: [''],
        res_origin: [''],
        res_destiny: [''],
        autorization: [''],
        flete: [''],
        saler_b:[''],
        raze: [''],
        comisioner: [''],
        destiny: [''],
        faena: ['']
    });
    
  }

  clean() {
  	this.simpleForm = this.formBuilder.group({
        place: [''],
        date: [''],
        operator: [''],
        buyer: [''],
        term_buyer: [''],
        comision_buyer: [''],
        detail: [''],
        kg: [''],
        amount: [''],
        saler: [''],
        term_saler: [''],
        comision_saler: [''],
        dte: [''],
        destiny: [''],
        res_origin: [''],
        res_destiny: [''],
        raze: [''],
        autorization: [''],
        flete: [''],
        comisioner: [''],
        faena: ['']
    });
  }

  update() {
    this.simpleForm;
  }
  
  send_mail(){
  	let form = this.simpleForm.value;
  	let email = {
      to: 'gaston.e.coria@gmail.com',
      cc: '',
      bcc: [],
       subject: 'Formulario',
       body:"Lugar: " + form.place + "<br>" +
            "Fecha: " + form.date + "<br>" +
            "Operario: " + form.operator + "<br>" +
            "Comprador: " + form.buyer + "<br>" +
            "Plazo del Comprador: " + form.term_buyer + "<br>" +
            "Comision del Comprador: " + form.comision_buyer + "<br>" +
            "autorizacion del Comprador" + form.autorization + "<br>" +
            "Establecimiento Faenador" + form.faena + "<br>" +
            "Detalle: " + form.detail + "<br>" +
            "Raza: " + form.raze + "<br>" +
            "Kilos: " + form.kg + "<br>" +
            "Precio: " + form.amount + "<br>" +
            "Vendedor: " + form.saler + "<br>" +
            "Plazo del Vendedor: " + form.term_saler + "<br>" +
            "Comision del Vendedor: " + form.comision_saler + "<br>" +
            "Nro: " + form.dte + "<br>" +
            "Destino: " + form.destiny,            
       isHtml: true
      };
    this.emailComposer.open(email);
  }
}



