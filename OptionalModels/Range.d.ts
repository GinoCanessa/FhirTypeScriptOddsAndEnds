import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
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
    constructor(source: Partial<fhirInterfaces.IRange>);
    /**
     * Factory function to create a Range from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRange): Range;
    /**
     * Check if the current Range contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Range.d.ts.map