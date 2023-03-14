import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public persona: Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) {

  }

  ngOnInit() {

  }

  public guardar(persona: Persona): void {
    this.service.createPersonas(persona)
      .subscribe(data => {
        alert("Se agrego con exito");
        this.router.navigate(['listar']);
      });
  }

}
