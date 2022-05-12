import * as fhir from '../fhirJson.js';
/**
 * An amount of economic utility in some recognized currency.
 */
export interface Money extends fhir.FhirElement {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: Money.value
     */
    _value?: fhir.FhirElement;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    /**
     * Extended properties for primitive element: Money.currency
     */
    _currency?: fhir.FhirElement;
}
//# sourceMappingURL=Money.d.ts.map