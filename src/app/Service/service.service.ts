import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url = 'http://localhost:8080/personas';
  personas: Persona[] = [];

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url + "/listar");
  }
  createPersonas(persona: Persona) {
    return this.http.post<Persona>(this.Url + "/agregar", persona);
  }
  getPersonaId(id: number) {
    return this.http.get<Persona>(this.Url + "/" + id);
  }
  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.Url + "/" + persona.id, persona);
  }
  deletePersona(persona: Persona) {
    return this.http.delete<Persona>(this.Url + "/" + persona.id);
  }
}
