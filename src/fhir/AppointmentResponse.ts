// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export type IAppointmentResponse = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "AppointmentResponse";
  /**
   * A Person, Location, HealthcareService, or Device that is participating in the appointment.
   */
  actor?: fhir.IReference|undefined;
  /**
   * Appointment that this response is replying to.
   */
  appointment: fhir.IReference|null;
  /**
   * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
   */
  comment?: string|undefined;
  _comment?: fhir.IFhirElement|undefined;
  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
   */
  end?: string|undefined;
  _end?: fhir.IFhirElement|undefined;
  /**
   * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
   */
  participantStatus: AppointmentResponseParticipantStatusEnum|null;
  _participantStatus?: fhir.IFhirElement|undefined;
  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
   * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
   * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
   */
  participantType?: fhir.ICodeableConcept[]|undefined;
  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
   */
  start?: string|undefined;
  _start?: fhir.IFhirElement|undefined;
}
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export class AppointmentResponse extends fhir.DomainResource implements fhir.IAppointmentResponse {
  /**
   * Resource Type Name
   */
  public override resourceType: "AppointmentResponse";
  /**
   * A Person, Location, HealthcareService, or Device that is participating in the appointment.
   */
  public actor?: fhir.Reference|undefined;
  /**
   * Appointment that this response is replying to.
   */
  public appointment: fhir.Reference|null;
  /**
   * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
   */
  public comment?: string|undefined;
  public _comment?: fhir.FhirElement|undefined;
  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
   */
  public end?: string|undefined;
  public _end?: fhir.FhirElement|undefined;
  /**
   * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
   */
  public participantStatus: AppointmentResponseParticipantStatusEnum|null;
  public _participantStatus?: fhir.FhirElement|undefined;
  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
   * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
   * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
   */
  public participantType?: fhir.CodeableConcept[]|undefined;
  /**
   * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
   */
  public start?: string|undefined;
  public _start?: fhir.FhirElement|undefined;
  /**
   * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IAppointmentResponse> = {}) {
    super(source);
    this.resourceType = 'AppointmentResponse';
    if (source["actor"]) { this.actor = new fhir.Reference(source.actor!); }
    this.appointment = null;
    if (source["appointment"]) { this.appointment = new fhir.Reference(source.appointment!); }
    if (this.appointment === undefined) { this.appointment = null }
    if (source["comment"]) { this.comment = source.comment; }
    if (source["_comment"]) { this._comment = new fhir.FhirElement(source._comment!); }
    if (source["end"]) { this.end = source.end; }
    if (source["_end"]) { this._end = new fhir.FhirElement(source._end!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    this.participantStatus = null;
    if (source["participantStatus"]) { this.participantStatus = source.participantStatus; }
    if (this.participantStatus === undefined) { this.participantStatus = null }
    if (source["_participantStatus"]) { this._participantStatus = new fhir.FhirElement(source._participantStatus!); }
    if (source["participantType"]) { this.participantType = source.participantType.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["start"]) { this.start = source.start; }
    if (source["_start"]) { this._start = new fhir.FhirElement(source._start!); }
  }
  /**
   * Check if the current AppointmentResponse contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["appointment"] === undefined) { missingElements.push("appointment"); }
    if (this["participantStatus"] === undefined) { missingElements.push("participantStatus"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AppointmentResponse from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IAppointmentResponse):AppointmentResponse {
    var dest:AppointmentResponse = new AppointmentResponse(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `AppointmentResponse is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the AppointmentResponse.participantStatus field
 */
export enum AppointmentResponseParticipantStatusEnum {
  ACCEPTED = "accepted",
  DECLINED = "declined",
  TENTATIVE = "tentative",
  NEEDS_ACTION = "needs-action",
}