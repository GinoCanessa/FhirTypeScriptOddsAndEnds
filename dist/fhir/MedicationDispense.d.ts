import * as fhir from '../fhir.js';
import { MedicationdispensePerformerFunctionValueSetType } from '../fhirValueSets/MedicationdispensePerformerFunctionValueSet.js';
import { V3ActSubstanceAdminSubstitutionCodeValueSetType } from '../fhirValueSets/V3ActSubstanceAdminSubstitutionCodeValueSet.js';
import { V3SubstanceAdminSubstitutionReasonValueSetType } from '../fhirValueSets/V3SubstanceAdminSubstitutionReasonValueSet.js';
import { MedicationdispenseStatusValueSetType, MedicationdispenseStatusValueSetEnum } from '../fhirValueSets/MedicationdispenseStatusValueSet.js';
import { MedicationdispenseStatusReasonValueSetType } from '../fhirValueSets/MedicationdispenseStatusReasonValueSet.js';
import { MedicationdispenseCategoryValueSetType } from '../fhirValueSets/MedicationdispenseCategoryValueSet.js';
import { MedicationCodesValueSetType } from '../fhirValueSets/MedicationCodesValueSet.js';
import { V3ActPharmacySupplyTypeValueSetType } from '../fhirValueSets/V3ActPharmacySupplyTypeValueSet.js';
/**
 * Indicates who or what performed the event.
 */
export declare type IMedicationDispensePerformer = fhir.IBackboneElement & {
    /**
     * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
     */
    function?: fhir.ICodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
     */
    actor: fhir.IReference | null;
};
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export declare type IMedicationDispenseSubstitution = fhir.IBackboneElement & {
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted: boolean | null;
    /**
     * Extended properties for primitive element: MedicationDispense.substitution.wasSubstituted
     */
    _wasSubstituted?: fhir.IFhirElement | undefined;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
     */
    reason?: fhir.ICodeableConcept[] | undefined;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: fhir.IReference[] | undefined;
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
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The procedure that trigger the dispense.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationdispenseStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: MedicationDispense.status
     */
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
     * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.IReference | undefined;
    /**
     * SubstanceAdministration-&gt;subject-&gt;Patient.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.IReference | undefined;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation?: fhir.IReference[] | undefined;
    /**
     * Indicates who or what performed the event.
     */
    performer?: fhir.IMedicationDispensePerformer[] | undefined;
    /**
     * The principal physical location where the dispense was performed.
     */
    location?: fhir.IReference | undefined;
    /**
     * Maps to basedOn in Event logical model.
     */
    authorizingPrescription?: fhir.IReference[] | undefined;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: fhir.IQuantity | undefined;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenPrepared
     */
    _whenPrepared?: fhir.IFhirElement | undefined;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenHandedOver
     */
    _whenHandedOver?: fhir.IFhirElement | undefined;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.IReference | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: fhir.IReference[] | undefined;
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
     * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
     */
    dosageInstruction?: fhir.IDosage[] | undefined;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
     */
    substitution?: fhir.IMedicationDispenseSubstitution | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue?: fhir.IReference[] | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.IReference[] | undefined;
};
/**
 * Indicates who or what performed the event.
 */
export declare class MedicationDispensePerformer extends fhir.BackboneElement implements IMedicationDispensePerformer {
    /**
     * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationDispensePerformer>);
    /**
     * Example-bound Value Set for function
     */
    functionExampleValueSet(): MedicationdispensePerformerFunctionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export declare class MedicationDispenseSubstitution extends fhir.BackboneElement implements IMedicationDispenseSubstitution {
    /**
     * True if the dispenser dispensed a different drug or product from what was prescribed.
     */
    wasSubstituted: boolean | null;
    /**
     * Extended properties for primitive element: MedicationDispense.substitution.wasSubstituted
     */
    _wasSubstituted?: fhir.FhirElement | undefined;
    /**
     * A code signifying whether a different drug was dispensed from what was prescribed.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
     */
    reason?: fhir.CodeableConcept[] | undefined;
    /**
     * The person or organization that has primary responsibility for the substitution.
     */
    responsibleParty?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationDispenseSubstitution>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): V3ActSubstanceAdminSubstitutionCodeValueSetType;
    /**
     * Example-bound Value Set for reason
     */
    reasonExampleValueSet(): V3SubstanceAdminSubstitutionReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export declare class MedicationDispense extends fhir.DomainResource implements IMedicationDispense {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationDispense";
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The procedure that trigger the dispense.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationdispenseStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: MedicationDispense.status
     */
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
     * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * SubstanceAdministration-&gt;subject-&gt;Patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.Reference | undefined;
    /**
     * Additional information that supports the medication being dispensed.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * Indicates who or what performed the event.
     */
    performer?: fhir.MedicationDispensePerformer[] | undefined;
    /**
     * The principal physical location where the dispense was performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * Maps to basedOn in Event logical model.
     */
    authorizingPrescription?: fhir.Reference[] | undefined;
    /**
     * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The amount of medication that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The amount of medication expressed as a timing amount.
     */
    daysSupply?: fhir.Quantity | undefined;
    /**
     * The time when the dispensed product was packaged and reviewed.
     */
    whenPrepared?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenPrepared
     */
    _whenPrepared?: fhir.FhirElement | undefined;
    /**
     * The time the dispensed product was provided to the patient or their representative.
     */
    whenHandedOver?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationDispense.whenHandedOver
     */
    _whenHandedOver?: fhir.FhirElement | undefined;
    /**
     * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
     */
    receiver?: fhir.Reference[] | undefined;
    /**
     * Extra information about the dispense that could not be conveyed in the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
     * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
     */
    dosageInstruction?: fhir.Dosage[] | undefined;
    /**
     * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
     */
    substitution?: fhir.MedicationDispenseSubstitution | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue?: fhir.Reference[] | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicationDispense>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): MedicationdispenseStatusValueSetType;
    /**
     * Example-bound Value Set for statusReasonCodeableConcept
     */
    statusReasonCodeableConceptExampleValueSet(): MedicationdispenseStatusReasonValueSetType;
    /**
     * Example-bound Value Set for statusReasonReference
     */
    statusReasonReferenceExampleValueSet(): MedicationdispenseStatusReasonValueSetType;
    /**
     * Preferred-bound Value Set for category
     */
    categoryPreferredValueSet(): MedicationdispenseCategoryValueSetType;
    /**
     * Example-bound Value Set for medicationCodeableConcept
     */
    medicationCodeableConceptExampleValueSet(): MedicationCodesValueSetType;
    /**
     * Example-bound Value Set for medicationReference
     */
    medicationReferenceExampleValueSet(): MedicationCodesValueSetType;
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): V3ActPharmacySupplyTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicationDispense.d.ts.map