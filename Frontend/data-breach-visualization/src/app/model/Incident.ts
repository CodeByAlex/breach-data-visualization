
export class Incident {
  incidentId: number;
  orgId: number;
  actorId: number;
  reportDay: number;
  reportMonth: number;
  reportYear: number;

  numRecordsLost: number;
  dataLostType: string;
  country: string;
  state: string;
  victimType: string;
  summary: string;
  references: string;

  constructor(incidentId?: number, orgId?: number, actorId?: number, reportDay?: number, reportMonth?: number, reportYear?: number,
              numRecordsLost?: number, dataLostType?: string, country?: string, state?: string, victimType?: string,
              summary?: string, references?: string) {
    this.incidentId = incidentId;
    this.orgId = orgId;
    this.actorId = actorId;
    this.reportDay = reportDay;
    this.reportMonth = reportMonth;
    this.reportYear = reportYear;
    this.numRecordsLost = numRecordsLost;
    this.dataLostType = dataLostType;
    this.country = country;
    this.state = state;
    this.victimType = victimType;
    this.summary = summary;
    this.references = references;
  }

}
