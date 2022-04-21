import * as fhir from '../fhir.js';
import { ResourceTypesValueSetType } from '../fhirValueSets/ResourceTypesValueSet.js';
/**
 * A reference from one resource to another.
 */
export declare type IReference = fhir.IFhirElement & {
    /**
     * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.reference
     */
    _reference?: fhir.IFhirElement | undefined;
    /**
     * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.
     * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
     * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
     * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.display
     */
    _display?: fhir.IFhirElement | undefined;
};
/**
 * A reference from one resource to another.
 */
export declare class Reference extends fhir.FhirElement implements IReference {
    /**
     * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.reference
     */
    _reference?: fhir.FhirElement | undefined;
    /**
     * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.
     * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
     * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
     * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: Reference.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Reference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IReference>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): ResourceTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
    /**
     * Create a reference from an existing resource
     */
    static fromResource(source: fhir.IResource, baseUrl?: string): Reference;
}
//# sourceMappingURL=Reference.d.ts.map