import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export declare class Flag extends fhirModels.DomainResource implements fhirInterfaces.IFlag {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Flag";
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhirModels.CodeableConcept;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhirModels.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhirModels.Reference;
    /**
     * Default constructor for Flag from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IFlag);
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