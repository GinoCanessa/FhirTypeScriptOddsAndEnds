import * as fhir from '../fhir';
/**
 * Indicates who or what performed the event.
 */
export declare type IMedicationDispensePerformer = fhir.IBackboneElement & {
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
     */
    actor: fhir.IReference | null;
    /**
     * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
     */
    function?: fhir.ICodeableConcept | undefined;
};
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export declare type IMedicationDispenseSubstitution = fhir.IBackboneElement & {
    /**
     * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
     */
    reason?: fhir.ICodeableConcept[] | undefined;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: fhir.IReference[] | undefined;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted: boolean | null;
    _wasSubstituted?: fhir.IFhirElement | undefined;
};
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export declare type IMedicationDispense = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationDispense";
    /**
     * Maps to basedOn in Event logical model.
     */
    authorizingPrescription?: fhir.IReference[] | undefined;
    /**
     * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.IReference | undefined;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: fhir.IQuantity | undefined;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.IReference | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue?: fhir.IReference[] | undefined;
    /**
     * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
     * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
     */
    dosageInstruction?: fhir.IDosage[] | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.IReference[] | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The principal physical location where the dispense was performed.
     */
    location?: fhir.IReference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.IReference | undefined;
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The procedure that trigger the dispense.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * Indicates who or what performed the event.
     */
    performer?: fhir.IMedicationDispensePerformer[] | undefined;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationDispenseStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    statusReasonCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    statusReasonReference?: fhir.IReference | undefined;
    /**
     * SubstanceAdministration-&gt;subject-&gt;Patient.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
     */
    substitution?: fhir.IMedicationDispenseSubstitution | undefined;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation?: fhir.IReference[] | undefined;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: string | undefined;
    _whenHandedOver?: fhir.IFhirElement | undefined;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: string | undefined;
    _whenPrepared?: fhir.IFhirElement | undefined;
};
/**
 * Indicates who or what performed the event.
 */
export declare class MedicationDispensePerformer extends fhir.BackboneElement implements fhir.IMedicationDispensePerformer {
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
     */
    actor: fhir.Reference | null;
    /**
     * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationDispensePerformer>);
    /**
     * Check if the current MedicationDispensePerformer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationDispensePerformer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationDispensePerformer): MedicationDispensePerformer;
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export declare class MedicationDispenseSubstitution extends fhir.BackboneElement implements fhir.IMedicationDispenseSubstitution {
    /**
     * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
     */
    reason?: fhir.CodeableConcept[] | undefined;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: fhir.Reference[] | undefined;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted: boolean | null;
    _wasSubstituted?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationDispenseSubstitution>);
    /**
     * Check if the current MedicationDispenseSubstitution contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationDispenseSubstitution from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationDispenseSubstitution): MedicationDispenseSubstitution;
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export declare class MedicationDispense extends fhir.DomainResource implements fhir.IMedicationDispense {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationDispense";
    /**
     * Maps to basedOn in Event logical model.
     */
    authorizingPrescription?: fhir.Reference[] | undefined;
    /**
     * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.Reference | undefined;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: fhir.Quantity | undefined;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue?: fhir.Reference[] | undefined;
    /**
     * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
     * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
     */
    dosageInstruction?: fhir.Dosage[] | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.Reference[] | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The principal physical location where the dispense was performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The procedure that trigger the dispense.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * Indicates who or what performed the event.
     */
    performer?: fhir.MedicationDispensePerformer[] | undefined;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationDispenseStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    statusReasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the reason why a dispense was not performed.
     */
    statusReasonReference?: fhir.Reference | undefined;
    /**
     * SubstanceAdministration-&gt;subject-&gt;Patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
     */
    substitution?: fhir.MedicationDispenseSubstitution | undefined;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: string | undefined;
    _whenHandedOver?: fhir.FhirElement | undefined;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: string | undefined;
    _whenPrepared?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationDispense>);
    /**
     * Check if the current MedicationDispense contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationDispense from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationDispense): MedicationDispense;
}
/**
 * Code Values for the MedicationDispense.status field
 */
export declare enum MedicationDispenseStatusEnum {
    PREPARATION = "preparation",
    IN_PROGRESS = "in-progress",
    CANCELLED = "cancelled",
    ON_HOLD = "on-hold",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    STOPPED = "stopped",
    DECLINED = "declined",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=MedicationDispense.d.ts.map