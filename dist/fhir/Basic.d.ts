import * as fhir from '../fhir.js';
import { BasicResourceTypeValueSetType } from '../fhirValueSets/BasicResourceTypeValueSet.js';
/**
 * Valid arguments for the Basic type.
 */
export interface BasicArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Basic" | undefined;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies when the resource was first created.
     */
    created?: fhir.FhirDate | string | undefined;
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export declare class Basic extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Basic";
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Identifies when the resource was first created.
     */
    created?: fhir.FhirDate | undefined;
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for Basic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BasicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): BasicResourceTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Basic.d.ts.map