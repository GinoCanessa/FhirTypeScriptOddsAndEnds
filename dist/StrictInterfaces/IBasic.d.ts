import * as fhirInterfaces from '../strictinterfaces';
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export interface IBasic extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Basic";
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * Identifies when the resource was first created.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhirInterfaces.IReference | undefined;
}
//# sourceMappingURL=IBasic.d.ts.map