import * as fhir from '../fhir';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare type ICount = fhir.IQuantity & {};
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Count extends fhir.Quantity implements fhir.ICount {
    /**
     * Default constructor for Count - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICount>);
    /**
     * Check if the current Count contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Count from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICount): Count;
}
//# sourceMappingURL=Count.d.ts.map