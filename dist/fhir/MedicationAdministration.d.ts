import * as fhir from '../fhir.js';
import { MedAdminPerformFunctionValueSetType } from '../fhirValueSets/MedAdminPerformFunctionValueSet.js';
import { ApproachSiteCodesValueSetType } from '../fhirValueSets/ApproachSiteCodesValueSet.js';
import { RouteCodesValueSetType } from '../fhirValueSets/RouteCodesValueSet.js';
import { AdministrationMethodCodesValueSetType } from '../fhirValueSets/AdministrationMethodCodesValueSet.js';
import { MedicationAdminStatusValueSetType } from '../fhirValueSets/MedicationAdminStatusValueSet.js';
import { MedicationAdminStatusValueSetEnum } from '../valueSetEnums.js';
import { ReasonMedicationNotGivenCodesValueSetType } from '../fhirValueSets/ReasonMedicationNotGivenCodesValueSet.js';
import { MedicationAdminCategoryValueSetType } from '../fhirValueSets/MedicationAdminCategoryValueSet.js';
import { ReasonMedicationGivenCodesValueSetType } from '../fhirValueSets/ReasonMedicationGivenCodesValueSet.js';
/**
 * Valid arguments for the MedicationAdministrationPerformer type.
 */
export interface MedicationAdministrationPerformerArgs extends fhir.BackboneElementArgs {
    /**
     * Distinguishes the type of involvement of the performer in the medication administration.
     */
    function?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates who or what performed the medication administration.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export declare class MedicationAdministrationPerformer extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Distinguishes the type of involvement of the performer in the medication administration.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Indicates who or what performed the medication administration.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for MedicationAdministrationPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationAdministrationPerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for function
     */
    static functionExampleValueSet(): MedAdminPerformFunctionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MedicationAdministrationDosage type.
 */
export interface MedicationAdministrationDosageArgs extends fhir.BackboneElementArgs {
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
     * The dosage instructions should reflect the dosage of the medication that was administered.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.CodeableConceptArgs | undefined;
    /**
     * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
     */
    dose?: fhir.QuantityArgs | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rate?: fhir.Ratio | fhir.Quantity | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateRatio?: fhir.RatioArgs | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rateQuantity?: fhir.QuantityArgs | undefined;
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export declare class MedicationAdministrationDosage extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
     * The dosage instructions should reflect the dosage of the medication that was administered.
     */
    text?: fhir.FhirString | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
     */
    dose?: fhir.Quantity | undefined;
    /**
     * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
     */
    rate?: (fhir.Ratio | fhir.Quantity) | undefined;
    readonly __rateIsChoice: true;
    /**
     * Default constructor for MedicationAdministrationDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationAdministrationDosageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for site
     */
    static siteExampleValueSet(): ApproachSiteCodesValueSetType;
    /**
     * Example-bound Value Set for route
     */
    static routeExampleValueSet(): RouteCodesValueSetType;
    /**
     * Example-bound Value Set for method
     */
    static methodExampleValueSet(): AdministrationMethodCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MedicationAdministration type.
 */
export interface MedicationAdministrationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration" | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
     */
    instantiates?: fhir.FhirUri[] | string[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationAdminStatusValueSetEnum | null;
    /**
     * A code indicating why the administration was not performed.
     */
    statusReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Additional information (for example, patient height and weight) that supports the administration of the medication.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates who or what performed the medication administration and how they were involved.
     */
    performer?: fhir.MedicationAdministrationPerformerArgs[] | undefined;
    /**
     * A code indicating why the medication was given.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: fhir.ReferenceArgs[] | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.MedicationAdministrationDosageArgs | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
     */
    eventHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export declare class MedicationAdministration extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration";
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
     */
    instantiates?: fhir.FhirUri[] | undefined;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationAdminStatusValueSetEnum | null;
    /**
     * A code indicating why the administration was not performed.
     */
    statusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    readonly __medicationIsChoice: true;
    /**
     * The person or animal or group receiving the medication.
     */
    subject: fhir.Reference | null;
    /**
     * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
     */
    context?: fhir.Reference | undefined;
    /**
     * Additional information (for example, patient height and weight) that supports the administration of the medication.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effective: (fhir.FhirDateTime | fhir.Period) | null;
    readonly __effectiveIsChoice: true;
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
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.MedicationAdministrationDosage | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
     */
    eventHistory?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicationAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationAdministrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): MedicationAdminStatusValueSetType;
    /**
     * Example-bound Value Set for statusReason
     */
    static statusReasonExampleValueSet(): ReasonMedicationNotGivenCodesValueSetType;
    /**
     * Preferred-bound Value Set for category
     */
    static categoryPreferredValueSet(): MedicationAdminCategoryValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ReasonMedicationGivenCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=MedicationAdministration.d.ts.map