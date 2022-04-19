import * as fhir from '../fhir';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare type IQuantity = fhir.IFhirElement & {
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    _code?: fhir.IFhirElement | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: QuantityComparatorEnum | undefined;
    _comparator?: fhir.IFhirElement | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    _system?: fhir.IFhirElement | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    _unit?: fhir.IFhirElement | undefined;
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Quantity extends fhir.FhirElement implements fhir.IQuantity {
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    _code?: fhir.FhirElement | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: QuantityComparatorEnum | undefined;
    _comparator?: fhir.FhirElement | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    _system?: fhir.FhirElement | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    _unit?: fhir.FhirElement | undefined;
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IQuantity>);
    /**
     * Check if the current Quantity contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Quantity from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IQuantity): Quantity;
}
/**
 * Code Values for the Quantity.comparator field
 */
export declare enum QuantityComparatorEnum {
    LESS_THAN = "<",
    LESS_THAN_OR_EQUALS = "<=",
    GREATER_THAN_OR_EQUALS = ">=",
    GREATER_THAN = ">"
}
//# sourceMappingURL=Quantity.d.ts.map