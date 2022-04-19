import * as fhir from '../fhir';
/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export declare type IMedicationStatement = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationStatement";
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * The encounter or episode of care that establishes the context for this MedicationStatement.
     */
    context?: fhir.IReference | undefined;
    /**
     * The date when the medication statement was asserted by the information source.
     */
    dateAsserted?: string | undefined;
    _dateAsserted?: fhir.IFhirElement | undefined;
    /**
     * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
     */
    derivedFrom?: fhir.IReference[] | undefined;
    /**
     * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
     */
    dosage?: fhir.IDosage[] | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
     */
    informationSource?: fhir.IReference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.IReference | undefined;
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationStatementStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * The person, animal or group who is/was taking the medication.
     */
    subject: fhir.IReference | null;
};
/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export declare class MedicationStatement extends fhir.DomainResource implements fhir.IMedicationStatement {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationStatement";
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The encounter or episode of care that establishes the context for this MedicationStatement.
     */
    context?: fhir.Reference | undefined;
    /**
     * The date when the medication statement was asserted by the information source.
     */
    dateAsserted?: string | undefined;
    _dateAsserted?: fhir.FhirElement | undefined;
    /**
     * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.
     */
    derivedFrom?: fhir.Reference[] | undefined;
    /**
     * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.
     */
    dosage?: fhir.Dosage[] | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.FhirElement | undefined;
    /**
     * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
     */
    informationSource?: fhir.Reference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseReference.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationStatementStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * The person, animal or group who is/was taking the medication.
     */
    subject: fhir.Reference | null;
    /**
     * Default constructor for MedicationStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationStatement>);
    /**
     * Check if the current MedicationStatement contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicationStatement from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicationStatement): MedicationStatement;
}
/**
 * Code Values for the MedicationStatement.status field
 */
export declare enum MedicationStatementStatusEnum {
    ACTIVE = "active",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    INTENDED = "intended",
    STOPPED = "stopped",
    ON_HOLD = "on-hold",
    UNKNOWN = "unknown",
    NOT_TAKEN = "not-taken"
}
//# sourceMappingURL=MedicationStatement.d.ts.map