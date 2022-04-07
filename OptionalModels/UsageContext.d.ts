import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export declare class UsageContext extends fhirModels.Element implements fhirInterfaces.IUsageContext {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code?: fhirModels.Coding | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for UsageContext from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IUsageContext>);
    /**
     * Factory function to create a UsageContext from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IUsageContext): UsageContext;
    /**
     * Check if the current UsageContext contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=UsageContext.d.ts.map