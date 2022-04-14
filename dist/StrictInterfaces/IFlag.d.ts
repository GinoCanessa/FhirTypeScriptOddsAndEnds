import * as fhirInterfaces from '../strictinterfaces';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export interface IFlag extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Flag";
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * The value set will often need to be adjusted based on local business rules and usage context.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FlagStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
     */
    subject: fhirInterfaces.IReference;
}
/**
 * Code Values for the Flag.status field
 */
export declare enum FlagStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IFlag.d.ts.map