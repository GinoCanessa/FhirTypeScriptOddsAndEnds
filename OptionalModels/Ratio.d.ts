import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export declare class Ratio extends fhirModels.Element implements fhirInterfaces.IRatio {
    /**
     * The value of the denominator.
     */
    denominator?: fhirModels.Quantity | undefined;
    /**
     * The value of the numerator.
     */
    numerator?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for Ratio from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRatio>);
    /**
     * Factory function to create a Ratio from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRatio): Ratio;
    /**
     * Check if the current Ratio contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Ratio.d.ts.map