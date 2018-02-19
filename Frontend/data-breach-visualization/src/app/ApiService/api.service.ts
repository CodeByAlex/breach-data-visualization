import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Organization} from "../Models/Organization";
import {Incident} from "../Models/Incident";
import {Actor} from "../Models/Actor";

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getAllOrgs(): Observable<Organization[]> {
    return this.http.get(API_URL+'/breach-data/org-info')
      .map(response=>{
        const organizations = response.json();
        return organizations.map(org => new Organization(org.orgId, org.orgName, org.orgIndustry))
      }).catch(this.handleError)
  }

  public getAllIncidents(){
    return this.http.get(API_URL+'/breach-data/incident-info')
      .map(response=>{
        const incidents = response.json();
        return incidents.map(incident => new Incident(incident.incidentId, incident.orgId, incident.reportDay,
          incident.reportMonth, incident.reportYear, incident.numRecordsLost,
          incident.dataLostType, incident.country, incident.state, incident.victimType,
          incident.summary, incident.references))
      }).catch(this.handleError)
  }

  public getAllActors(){
    return this.http.get(API_URL+'/breach-data/actor-info')
      .map(response=>{
        const actors = response.json();
        return actors.map(actor => new Actor(actor.actorId,
          actor.incidentId, actor.actorType, actor.actorPattern))
      }).catch(this.handleError)
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}