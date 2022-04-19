import * as fhir from '../fhir';
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export declare type IUsageContext = fhir.IFhirElement & {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: fhir.ICoding | null;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueReference?: fhir.IReference | undefined;
};
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export declare class UsageContext extends fhir.FhirElement implements fhir.IUsageContext {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: fhir.Coding | null;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Default constructor for UsageContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IUsageContext>);
    /**
     * Check if the current UsageContext contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a UsageContext from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IUsageContext): UsageContext;
}
//# sourceMappingURL=UsageContext.d.ts.map