import * as fhir from '../fhir';
/**
 * This is the base resource type for everything.
 */
export declare type IResource = {
    /**
     * Resource Type Name
     */
    resourceType: string;
    /**
     * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
     */
    id?: string | undefined;
    _id?: fhir.IFhirElement | undefined;
    /**
     * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.
     */
    implicitRules?: string | undefined;
    _implicitRules?: fhir.IFhirElement | undefined;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: string | undefined;
    _language?: fhir.IFhirElement | undefined;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: fhir.IMeta | undefined;
};
/**
 * This is the base resource type for everything.
 */
export declare class Resource implements fhir.IResource {
    /**
     * Resource Type Name
     */
    resourceType: string;
    /**
     * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
     */
    id?: string | undefined;
    _id?: fhir.FhirElement | undefined;
    /**
     * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.
     */
    implicitRules?: string | undefined;
    _implicitRules?: fhir.FhirElement | undefined;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: string | undefined;
    _language?: fhir.FhirElement | undefined;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: fhir.Meta | undefined;
    /**
     * Default constructor for Resource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IResource>);
    /**
     * Check if the current Resource contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Resource from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IResource): Resource;
}
//# sourceMappingURL=Resource.d.ts.map