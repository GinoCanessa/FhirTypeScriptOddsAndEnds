import * as fhir from '../fhir';
/**
 * A reference to a code defined by a terminology system.
 */
export declare type ICoding = fhir.IFhirElement & {
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: string | undefined;
    _code?: fhir.IFhirElement | undefined;
    /**
     * A representation of the meaning of the code in the system, following the rules of the system.
     */
    display?: string | undefined;
    _display?: fhir.IFhirElement | undefined;
    /**
     * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
     */
    system?: string | undefined;
    _system?: fhir.IFhirElement | undefined;
    /**
     * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
     */
    userSelected?: boolean | undefined;
    _userSelected?: fhir.IFhirElement | undefined;
    /**
     * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * A reference to a code defined by a terminology system.
 */
export declare class Coding extends fhir.FhirElement implements fhir.ICoding {
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: string | undefined;
    _code?: fhir.FhirElement | undefined;
    /**
     * A representation of the meaning of the code in the system, following the rules of the system.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
     */
    system?: string | undefined;
    _system?: fhir.FhirElement | undefined;
    /**
     * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
     */
    userSelected?: boolean | undefined;
    _userSelected?: fhir.FhirElement | undefined;
    /**
     * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Coding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoding>);
    /**
     * Check if the current Coding contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Coding from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICoding): Coding;
}
//# sourceMappingURL=Coding.d.ts.map