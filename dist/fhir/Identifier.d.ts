import * as fhir from '../fhir';
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export declare type IIdentifier = fhir.IFhirElement & {
    /**
     * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
     */
    assigner?: fhir.IReference | undefined;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Identifier.system is always case sensitive.
     */
    system?: string | undefined;
    _system?: fhir.IFhirElement | undefined;
    /**
     * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     */
    use?: IdentifierUseEnum | undefined;
    _use?: fhir.IFhirElement | undefined;
    /**
     * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
     */
    value?: string | undefined;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export declare class Identifier extends fhir.FhirElement implements fhir.IIdentifier {
    /**
     * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
     */
    assigner?: fhir.Reference | undefined;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.Period | undefined;
    /**
     * Identifier.system is always case sensitive.
     */
    system?: string | undefined;
    _system?: fhir.FhirElement | undefined;
    /**
     * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     */
    use?: IdentifierUseEnum | undefined;
    _use?: fhir.FhirElement | undefined;
    /**
     * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
     */
    value?: string | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IIdentifier>);
    /**
     * Check if the current Identifier contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Identifier from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IIdentifier): Identifier;
}
/**
 * Code Values for the Identifier.use field
 */
export declare enum IdentifierUseEnum {
    USUAL = "usual",
    OFFICIAL = "official",
    TEMP = "temp",
    SECONDARY = "secondary",
    OLD = "old"
}
//# sourceMappingURL=Identifier.d.ts.map