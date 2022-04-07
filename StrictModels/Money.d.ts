import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhirModels.Element implements fhirInterfaces.IMoney {
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    _currency?: fhirModels.Element | undefined;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for Money from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMoney);
}
//# sourceMappingURL=Money.d.ts.map