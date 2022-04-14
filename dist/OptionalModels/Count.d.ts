import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Count extends fhirModels.Quantity implements fhirInterfaces.ICount {
    /**
     * Default constructor for Count from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICount>);
    /**
     * Factory function to create a Count from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICount): Count;
    /**
     * Check if the current Count contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Count.d.ts.map