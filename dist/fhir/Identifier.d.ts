import * as fhir from '../fhir.js';
import { IdentifierUseValueSetType, IdentifierUseValueSetEnum } from '../fhirValueSets/IdentifierUseValueSet.js';
import { IdentifierTypeValueSetType } from '../fhirValueSets/IdentifierTypeValueSet.js';
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export declare type IIdentifier = fhir.IFhirElement & {
    /**
     * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     */
    use?: IdentifierUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Identifier.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Identifier.system is always case sensitive.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
     */
    assigner?: fhir.IReference | undefined;
};
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export declare class Identifier extends fhir.FhirElement implements IIdentifier {
    /**
     * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     */
    use?: IdentifierUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Identifier.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Identifier.system is always case sensitive.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.Period | undefined;
    /**
     * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
     */
    assigner?: fhir.Reference | undefined;
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IIdentifier>);
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet(): IdentifierUseValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): IdentifierTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Identifier.d.ts.map