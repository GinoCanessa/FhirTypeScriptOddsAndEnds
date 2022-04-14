import * as fhirInterfaces from '../strictinterfaces';
/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export interface IMedicationAdministrationPerformer extends fhirInterfaces.IBackboneElement {
    /**
     * Indicates who or what performed the medication administration.
     */
    actor: fhirInterfaces.IReference;
    /**
     * Distinguishes the type of involvement of the performer in the medication administration.
     */
    function?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export interface IMedicationAdministrationDosage extends fhirInterfaces.IBackboneElement {
    /**
     * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
     */
    dose?: fhirInterfaces.IQuantity | undefined;
    /**
     * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */
    method?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
     * The dosage instructions should reflect the dosage of the medication that was administered.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export interface IMedicationAdministration extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicationAdministration";
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
     */
    context?: fhirInterfaces.IReference | undefined;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: fhirInterfaces.IReference[] | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhirInterfaces.IMedicationAdministrationDosage | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectivePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
     */
    eventHistory?: fhirInterfaces.IReference[] | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhirInterfaces.IElement[] | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhirInterfaces.IReference | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhirInterfaces.IReference[] | undefined;
    /**
     * Indicates who or what performed the medication administration and how they were involved.
     */
    performer?: fhirInterfaces.IMedicationAdministrationPerformer[] | undefined;
    /**
     * A code indicating why the medication was given.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
     */
    request?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationAdministrationStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * A code indicating why the administration was not performed.
     */
    statusReason?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: fhirInterfaces.IReference;
    /**
     * Additional information (for example, patient height and weight) that supports the administration of the medication.
     */
    supportingInformation?: fhirInterfaces.IReference[] | undefined;
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
//# sourceMappingURL=IMedicationAdministration.d.ts.map