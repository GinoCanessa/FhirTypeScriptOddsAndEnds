// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export class MedicationStatement extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "MedicationStatement";
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: fhirModels.Reference[];
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: fhirModels.CodeableConcept;
  /**
   * The encounter or episode of care that establishes the context for this MedicationStatement.
   */
  context?: fhirModels.Reference;
  /**
   * The date when the medication statement was asserted by the information source.
   */
  dateAsserted?: string;
  _dateAsserted?: fhirModels.Element;
  /**
   * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
   */
  derivedFrom?: fhirModels.Reference[];
  /**
   * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
   */
  dosage?: fhirModels.Dosage[];
  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   */
  effectiveDateTime?: string;
  _effectiveDateTime?: fhirModels.Element;
  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
   */
  effectivePeriod?: fhirModels.Period;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
   */
  informationSource?: fhirModels.Reference;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhirModels.CodeableConcept;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhirModels.Reference;
  /**
   * Provides extra information about the medication statement that is not conveyed by the other attributes.
   */
  note?: fhirModels.Annotation[];
  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: fhirModels.Reference[];
  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
   */
  reasonCode?: fhirModels.CodeableConcept[];
  /**
   * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
   */
  reasonReference?: fhirModels.Reference[];
  /**
   * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationStatementStatusEnum;
  _status?: fhirModels.Element;
  /**
   * This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: fhirModels.CodeableConcept[];
  /**
   * The person, animal or group who is/was taking the medication.
   */
  subject: fhirModels.Reference;
  /**
   * Default constructor
   */
  constructor(source: MedicationStatement) {
    super(source);
    if ((source['resourceType'] !== "MedicationStatement") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicationStatement'; }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn; }
    if (source["category"] !== undefined) { this.category = source.category; }
    if (source["context"] !== undefined) { this.context = source.context; }
    if (source["dateAsserted"] !== undefined) { this.dateAsserted = source.dateAsserted; }
    if (source["_dateAsserted"] !== undefined) { this._dateAsserted = source._dateAsserted; }
    if (source["derivedFrom"] !== undefined) { this.derivedFrom = source.derivedFrom; }
    if (source["dosage"] !== undefined) { this.dosage = source.dosage; }
    if (source["effectiveDateTime"] !== undefined) { this.effectiveDateTime = source.effectiveDateTime; }
    if (source["_effectiveDateTime"] !== undefined) { this._effectiveDateTime = source._effectiveDateTime; }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = source.effectivePeriod; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["informationSource"] !== undefined) { this.informationSource = source.informationSource; }
    if (source["medicationCodeableConcept"] !== undefined) { this.medicationCodeableConcept = source.medicationCodeableConcept; }
    if (source["medicationReference"] !== undefined) { this.medicationReference = source.medicationReference; }
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["partOf"] !== undefined) { this.partOf = source.partOf; }
    if (source["reasonCode"] !== undefined) { this.reasonCode = source.reasonCode; }
    if (source["reasonReference"] !== undefined) { this.reasonReference = source.reasonReference; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["statusReason"] !== undefined) { this.statusReason = source.statusReason; }
    if (source["subject"] === undefined) { throw 'Missing required element subject';}
    this.subject = source.subject;
  }
}
/**
 * Code Values for the MedicationStatement.status field
 */
export enum MedicationStatementStatusEnum {
  ACTIVE = "active",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  INTENDED = "intended",
  STOPPED = "stopped",
  ON_HOLD = "on-hold",
  UNKNOWN = "unknown",
  NOT_TAKEN = "not-taken",
}
