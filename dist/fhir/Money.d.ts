import * as fhir from '../fhir.js';
import { CurrenciesValueSetType } from '../fhirValueSets/CurrenciesValueSet.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.FhirElementArgs {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | string | undefined;
}
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MoneyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for currency
     */
    static currencyRequiredValueSet(): CurrenciesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Money.d.ts.map