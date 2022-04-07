import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
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
    constructor(source: fhirInterfaces.IRatio);
}
//# sourceMappingURL=Ratio.d.ts.map