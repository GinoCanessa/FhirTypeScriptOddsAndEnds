import * as fhir from '../fhir.js';
import { CurrenciesValueSetType } from '../fhirValueSets/CurrenciesValueSet.js';
/**
 * An amount of economic utility in some recognized currency.
 */
export declare type IMoney = fhir.IFhirElement & {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: Money.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    /**
     * Extended properties for primitive element: Money.currency
     */
    _currency?: fhir.IFhirElement | undefined;
};
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhir.FhirElement implements IMoney {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: Money.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    /**
     * Extended properties for primitive element: Money.currency
     */
    _currency?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMoney>);
    /**
     * Required-bound Value Set for currency
     */
    static currencyRequiredValueSet(): CurrenciesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Money.d.ts.map