import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare class Range extends fhirModels.Element implements fhirInterfaces.IRange {
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhirModels.Quantity | undefined;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for Range from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IRange);
}
//# sourceMappingURL=Range.d.ts.map