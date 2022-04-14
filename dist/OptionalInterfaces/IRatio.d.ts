import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export interface IRatio extends fhirInterfaces.IElement {
    /**
     * The value of the denominator.
     */
    denominator?: fhirInterfaces.IQuantity | undefined;
    /**
     * The value of the numerator.
     */
    numerator?: fhirInterfaces.IQuantity | undefined;
}
//# sourceMappingURL=IRatio.d.ts.map