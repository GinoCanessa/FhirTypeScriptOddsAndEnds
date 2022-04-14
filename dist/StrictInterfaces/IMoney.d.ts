import * as fhirInterfaces from '../strictinterfaces';
/**
 * An amount of economic utility in some recognized currency.
 */
export interface IMoney extends fhirInterfaces.IElement {
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    _currency?: fhirInterfaces.IElement | undefined;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhirInterfaces.IElement | undefined;
}
//# sourceMappingURL=IMoney.d.ts.map