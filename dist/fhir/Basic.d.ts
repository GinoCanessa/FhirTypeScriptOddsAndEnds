import * as fhir from '../fhir';
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export declare type IBasic = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Basic";
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.IReference | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Identifies when the resource was first created.
     */
    created?: string | undefined;
    _created?: fhir.IFhirElement | undefined;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.IReference | undefined;
};
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export declare class Basic extends fhir.DomainResource implements fhir.IBasic {
    /**
     * Resource Type Name
     */
    resourceType: "Basic";
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.Reference | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Identifies when the resource was first created.
     */
    created?: string | undefined;
    _created?: fhir.FhirElement | undefined;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Default constructor for Basic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBasic>);
    /**
     * Check if the current Basic contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Basic from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IBasic): Basic;
}
//# sourceMappingURL=Basic.d.ts.map