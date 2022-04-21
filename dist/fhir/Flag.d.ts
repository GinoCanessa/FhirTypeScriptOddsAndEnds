import * as fhir from '../fhir.js';
import { FlagStatusValueSetType, FlagStatusValueSetEnum } from '../fhirValueSets/FlagStatusValueSet.js';
import { FlagCategoryValueSetType } from '../fhirValueSets/FlagCategoryValueSet.js';
import { FlagCodeValueSetType } from '../fhirValueSets/FlagCodeValueSet.js';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare type IFlag = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Flag";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Flag.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhir.IReference | null;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.IReference | undefined;
};
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare class Flag extends fhir.DomainResource implements IFlag {
    /**
     * Resource Type Name
     */
    resourceType: "Flag";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Flag.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.Period | undefined;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for Flag - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IFlag>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): FlagStatusValueSetType;
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): FlagCategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): FlagCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Flag.d.ts.map