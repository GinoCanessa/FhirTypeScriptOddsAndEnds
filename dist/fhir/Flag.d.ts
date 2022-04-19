import * as fhir from '../fhir';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare type IFlag = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Flag";
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.IReference | undefined;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhir.IReference | null;
};
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare class Flag extends fhir.DomainResource implements fhir.IFlag {
    /**
     * Resource Type Name
     */
    resourceType: "Flag";
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.Reference | undefined;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.CodeableConcept | null;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * Default constructor for Flag - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IFlag>);
    /**
     * Check if the current Flag contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Flag from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IFlag): Flag;
}
/**
 * Code Values for the Flag.status field
 */
export declare enum FlagStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Flag.d.ts.map