import * as fhir from '../fhir.js';
/**
 * Valid arguments for the CodeableConcept type.
 */
export interface CodeableConceptArgs extends fhir.FhirElementArgs {
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: fhir.CodingArgs[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: fhir.FhirString | string | undefined;
}
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export declare class CodeableConcept extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: fhir.Coding[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for CodeableConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeableConceptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=CodeableConcept.d.ts.map