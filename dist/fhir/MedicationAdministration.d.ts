import * as fhir from '../fhir';
/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export declare type IMedicationAdministrationPerformer = fhir.IBackboneElement & {
    /**
     * Indicates who or what performed the medication administration.
     */
    actor: fhir.IReference | null;
    /**
     * Distinguishes the type of involvement of the performer in the medication administration.
     */
    function?: fhir.ICodeableConcept | undefined;
};
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export declare type IMedicationAdministrationDosage = fhir.IBackboneElement & {
    /**
     * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
     */
    dose?: fhir.IQuantity | undefined;
    /**
     * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateRatio?: fhir.IRatio | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateQuantity?: fhir.IQuantity | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.ICodeableConcept | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.ICodeableConcept | undefined;
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
     * The dosage instructions should reflect the dosage of the medication that was administered.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
};
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export declare type IMedicationAdministration = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration";
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
     */
    context?: fhir.IReference | undefined;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: fhir.IReference[] | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.IMedicationAdministrationDosage | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
     */
    eventHistory?: fhir.IReference[] | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhir.IFhirElement[] | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.IReference | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * Indicates who or what performed the medication administration and how they were involved.
     */
    performer?: fhir.IMedicationAdministrationPerformer[] | undefined;
    /**
     * A code indicating why the medication was given.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
     */
    request?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationAdministrationStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * A code indicating why the administration was not performed.
     */
    statusReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: fhir.IReference | null;
    /**
     * Additional information (for example, patient height and weight) that supports the administration of the medication.
     */
    supportingInformation?: fhir.IReference[] | undefined;
};
/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export declare class MedicationAdministrationPerformer extends fhir.BackboneElement implements fhir.IMedicationAdministrationPerformer {
    /**
     * Indicates who or what performed the medication administration.
     */
    actor: fhir.Reference | null;
    /**
     * Distinguishes the type of involvement of the performer in the medication administration.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicationAdministrationPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationAdministrationPerformer>);
    /**
     * Check if the current MedicationAdministrationPerformer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationAdministrationPerformer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationAdministrationPerformer): MedicationAdministrationPerformer;
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export declare class MedicationAdministrationDosage extends fhir.BackboneElement implements fhir.IMedicationAdministrationDosage {
    /**
     * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
     */
    dose?: fhir.Quantity | undefined;
    /**
     * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateRatio?: fhir.Ratio | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateQuantity?: fhir.Quantity | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
     * The dosage instructions should reflect the dosage of the medication that was administered.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicationAdministrationDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationAdministrationDosage>);
    /**
     * Check if the current MedicationAdministrationDosage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationAdministrationDosage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationAdministrationDosage): MedicationAdministrationDosage;
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export declare class MedicationAdministration extends fhir.DomainResource implements fhir.IMedicationAdministration {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration";
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
     */
    context?: fhir.Reference | undefined;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.MedicationAdministrationDosage | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.FhirElement | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
     */
    eventHistory?: fhir.Reference[] | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhir.FhirElement[] | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * Indicates who or what performed the medication administration and how they were involved.
     */
    performer?: fhir.MedicationAdministrationPerformer[] | undefined;
    /**
     * A code indicating why the medication was given.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
     */
    request?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationAdministrationStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * A code indicating why the administration was not performed.
     */
    statusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: fhir.Reference | null;
    /**
     * Additional information (for example, patient height and weight) that supports the administration of the medication.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicationAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicationAdministration>);
    /**
     * Check if the current MedicationAdministration contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicationAdministration from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicationAdministration): MedicationAdministration;
}
/**
 * Code Values for the MedicationAdministration.status field
 */
export declare enum MedicationAdministrationStatusEnum {
    IN_PROGRESS = "in-progress",
    NOT_DONE = "not-done",
    ON_HOLD = "on-hold",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    STOPPED = "stopped",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=MedicationAdministration.d.ts.map