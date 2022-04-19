import * as fhir from '../fhir';
/**
 * An amount of economic utility in some recognized currency.
 */
export declare type IMoney = fhir.IFhirElement & {
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    _currency?: fhir.IFhirElement | undefined;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhir.FhirElement implements fhir.IMoney {
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string | undefined;
    _currency?: fhir.FhirElement | undefined;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMoney>);
    /**
     * Check if the current Money contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Money from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMoney): Money;
}
//# sourceMappingURL=Money.d.ts.map