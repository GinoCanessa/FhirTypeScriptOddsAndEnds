import * as fhir from '../fhir.js';
import { FlagStatusValueSetType } from '../fhirValueSets/FlagStatusValueSet.js';
import { FlagStatusValueSetEnum } from '../valueSetEnums.js';
import { FlagCategoryValueSetType } from '../fhirValueSets/FlagCategoryValueSet.js';
import { FlagCodeValueSetType } from '../fhirValueSets/FlagCodeValueSet.js';
/**
 * Valid arguments for the Flag type.
 */
export interface FlagArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Flag" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusValueSetEnum | null;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare class Flag extends fhir.DomainResource {
    readonly __dataType: string;
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
    constructor(source?: Partial<FlagArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FlagStatusValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): FlagCategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): FlagCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Flag.d.ts.map