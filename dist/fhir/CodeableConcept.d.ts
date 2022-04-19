import * as fhir from '../fhir';
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export declare type ICodeableConcept = fhir.IFhirElement & {
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: fhir.ICoding[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
};
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export declare class CodeableConcept extends fhir.FhirElement implements fhir.ICodeableConcept {
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: fhir.Coding[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CodeableConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICodeableConcept>);
    /**
     * Check if the current CodeableConcept contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CodeableConcept from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICodeableConcept): CodeableConcept;
}
//# sourceMappingURL=CodeableConcept.d.ts.map