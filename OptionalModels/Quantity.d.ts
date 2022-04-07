import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Quantity extends fhirModels.Element implements fhirInterfaces.IQuantity {
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: QuantityComparatorEnum | undefined;
    _comparator?: fhirModels.Element | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    _system?: fhirModels.Element | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    _unit?: fhirModels.Element | undefined;
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for Quantity from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IQuantity>);
    /**
     * Factory function to create a Quantity from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IQuantity): Quantity;
    /**
     * Check if the current Quantity contains all required elements.
     */
    checkRequiredElements(): string[];
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