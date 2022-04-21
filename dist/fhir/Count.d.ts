import * as fhir from '../fhir.js';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare type ICount = fhir.IQuantity & {};
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Count extends fhir.Quantity implements ICount {
    /**
     * Default constructor for Count - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICount>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Count.d.ts.map