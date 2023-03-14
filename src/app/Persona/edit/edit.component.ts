import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public persona: Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) {

  }

  ngOnInit() {
    this.editar();
  }

  editar() {
    let id = localStorage.getItem('id');
    this.service.getPersonaId(+id!).subscribe(data => {
      this.persona = data;
    });
  }

  guardar() {
    this.service.updatePersona(this.persona)
      .subscribe(data => {
        console.log("Ok");
        this.router.navigate(['listar']);
      })
  }

}
