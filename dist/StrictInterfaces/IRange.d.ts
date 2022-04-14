import * as fhirInterfaces from '../strictinterfaces';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface IRange extends fhirInterfaces.IElement {
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhirInterfaces.IQuantity | undefined;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhirInterfaces.IQuantity | undefined;
}
//# sourceMappingURL=IRange.d.ts.map