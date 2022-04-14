import * as fhirInterfaces from '../strictinterfaces';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export interface IQuantity extends fhirInterfaces.IElement {
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: QuantityComparatorEnum | undefined;
    _comparator?: fhirInterfaces.IElement | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    _system?: fhirInterfaces.IElement | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    _unit?: fhirInterfaces.IElement | undefined;
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    _value?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IQuantity.d.ts.map