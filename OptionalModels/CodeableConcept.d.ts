import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export declare class CodeableConcept extends fhirModels.Element implements fhirInterfaces.ICodeableConcept {
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: fhirModels.Coding[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * Default constructor for CodeableConcept from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICodeableConcept>);
    /**
     * Factory function to create a CodeableConcept from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICodeableConcept): CodeableConcept;
    /**
     * Check if the current CodeableConcept contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=CodeableConcept.d.ts.map