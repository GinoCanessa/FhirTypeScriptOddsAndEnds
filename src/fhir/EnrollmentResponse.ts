// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export type IEnrollmentResponse = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "EnrollmentResponse";
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  created?: string|undefined;
  _created?: fhir.IFhirElement|undefined;
  /**
   * A description of the status of the adjudication.
   */
  disposition?: string|undefined;
  _disposition?: fhir.IFhirElement|undefined;
  /**
   * The Response business identifier.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The Insurer who produced this adjudicated response.
   */
  organization?: fhir.IReference|undefined;
  /**
   * Processing status: error, complete.
   */
  outcome?: EnrollmentResponseOutcomeEnum|undefined;
  _outcome?: fhir.IFhirElement|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhir.IReference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestProvider?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
   */
  status?: EnrollmentResponseStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
}
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export class EnrollmentResponse extends fhir.DomainResource implements fhir.IEnrollmentResponse {
  /**
   * Resource Type Name
   */
  public override resourceType: "EnrollmentResponse";
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  public created?: string|undefined;
  public _created?: fhir.FhirElement|undefined;
  /**
   * A description of the status of the adjudication.
   */
  public disposition?: string|undefined;
  public _disposition?: fhir.FhirElement|undefined;
  /**
   * The Response business identifier.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The Insurer who produced this adjudicated response.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * Processing status: error, complete.
   */
  public outcome?: EnrollmentResponseOutcomeEnum|undefined;
  public _outcome?: fhir.FhirElement|undefined;
  /**
   * Original request resource reference.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public requestProvider?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
   */
  public status?: EnrollmentResponseStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IEnrollmentResponse> = {}) {
    super(source);
    this.resourceType = 'EnrollmentResponse';
    if (source["created"]) { this.created = source.created; }
    if (source["_created"]) { this._created = new fhir.FhirElement(source._created!); }
    if (source["disposition"]) { this.disposition = source.disposition; }
    if (source["_disposition"]) { this._disposition = new fhir.FhirElement(source._disposition!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["organization"]) { this.organization = new fhir.Reference(source.organization!); }
    if (source["outcome"]) { this.outcome = source.outcome; }
    if (source["_outcome"]) { this._outcome = new fhir.FhirElement(source._outcome!); }
    if (source["request"]) { this.request = new fhir.Reference(source.request!); }
    if (source["requestProvider"]) { this.requestProvider = new fhir.Reference(source.requestProvider!); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
  }
  /**
   * Check if the current EnrollmentResponse contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a EnrollmentResponse from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IEnrollmentResponse):EnrollmentResponse {
    var dest:EnrollmentResponse = new EnrollmentResponse(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `EnrollmentResponse is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the EnrollmentResponse.outcome field
 */
export enum EnrollmentResponseOutcomeEnum {
  QUEUED = "queued",
  COMPLETE = "complete",
  ERROR = "error",
  PARTIAL = "partial",
}
/**
 * Code Values for the EnrollmentResponse.status field
 */
export enum EnrollmentResponseStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}