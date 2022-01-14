// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export class Flag extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "Flag";
  /**
   * The person, organization or device that created the flag.
   */
  author?: fhirModels.Reference;
  /**
   * The value set will often need to be adjusted based on local business rules and usage context.
   */
  category?: fhirModels.CodeableConcept[];
  /**
   * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  code: fhirModels.CodeableConcept;
  /**
   * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
   */
  encounter?: fhirModels.Reference;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  period?: fhirModels.Period;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: FlagStatusEnum;
  _status?: fhirModels.Element;
  /**
   * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  subject: fhirModels.Reference;
  /**
   * Default constructor
   */
  constructor(source: Flag) {
    super(source);
    if ((source['resourceType'] !== "Flag") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Flag'; }
    if (source["author"] !== undefined) { this.author = source.author; }
    if (source["category"] !== undefined) { this.category = source.category; }
    if (source["code"] === undefined) { throw 'Missing required element code';}
    this.code = source.code;
    if (source["encounter"] !== undefined) { this.encounter = source.encounter; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["period"] !== undefined) { this.period = source.period; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["subject"] === undefined) { throw 'Missing required element subject';}
    this.subject = source.subject;
  }
}
/**
 * Code Values for the Flag.status field
 */
export enum FlagStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  ENTERED_IN_ERROR = "entered-in-error",
}
