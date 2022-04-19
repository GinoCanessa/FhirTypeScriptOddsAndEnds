import * as fhir from '../fhir';
/**
 * A length - a value with a unit that is a physical distance.
 */
export declare type IDistance = fhir.IQuantity & {};
/**
 * A length - a value with a unit that is a physical distance.
 */
export declare class Distance extends fhir.Quantity implements fhir.IDistance {
    /**
     * Default constructor for Distance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDistance>);
    /**
     * Check if the current Distance contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Distance from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDistance): Distance;
}
//# sourceMappingURL=Distance.d.ts.map