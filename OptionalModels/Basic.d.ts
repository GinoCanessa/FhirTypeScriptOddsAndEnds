import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export declare class Basic extends fhirModels.DomainResource implements fhirInterfaces.IBasic {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Basic";
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Identifies when the resource was first created.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Default constructor for Basic from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBasic>);
    /**
     * Factory function to create a Basic from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBasic): Basic;
    /**
     * Check if the current Basic contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Basic.d.ts.map