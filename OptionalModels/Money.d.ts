import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
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
    constructor(source: Partial<fhirInterfaces.IMoney>);
    /**
     * Factory function to create a Money from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMoney): Money;
    /**
     * Check if the current Money contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Money.d.ts.map