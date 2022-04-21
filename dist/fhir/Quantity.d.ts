import * as fhir from '../fhir.js';
import { QuantityComparatorValueSetType, QuantityComparatorValueSetEnum } from '../fhirValueSets/QuantityComparatorValueSet.js';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare type IQuantity = fhir.IFhirElement & {
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: Quantity.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: QuantityComparatorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Quantity.comparator
     */
    _comparator?: fhir.IFhirElement | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.unit
     */
    _unit?: fhir.IFhirElement | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.code
     */
    _code?: fhir.IFhirElement | undefined;
};
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Quantity extends fhir.FhirElement implements IQuantity {
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: Quantity.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: QuantityComparatorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Quantity.comparator
     */
    _comparator?: fhir.FhirElement | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.unit
     */
    _unit?: fhir.FhirElement | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IQuantity>);
    /**
     * Required-bound Value Set for comparator
     */
    comparatorRequiredValueSet(): QuantityComparatorValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Quantity.d.ts.map