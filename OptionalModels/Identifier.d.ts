import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export declare class Identifier extends fhirModels.Element implements fhirInterfaces.IIdentifier {
    /**
     * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
     */
    assigner?: fhirModels.Reference | undefined;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Identifier.system is always case sensitive.
     */
    system?: string | undefined;
    _system?: fhirModels.Element | undefined;
    /**
     * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     */
    use?: IdentifierUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
     */
    value?: string | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for Identifier from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IIdentifier>);
    /**
     * Factory function to create a Identifier from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IIdentifier): Identifier;
    /**
     * Check if the current Identifier contains all required elements.
     */
    checkRequiredElements(): string[];
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