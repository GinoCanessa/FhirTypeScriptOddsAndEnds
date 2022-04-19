import * as fhir from '../fhir';
/**
 * A length of time.
 */
export declare type IDuration = fhir.IQuantity & {};
/**
 * A length of time.
 */
export declare class Duration extends fhir.Quantity implements fhir.IDuration {
    /**
     * Default constructor for Duration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDuration>);
    /**
     * Check if the current Duration contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Duration from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDuration): Duration;
}
//# sourceMappingURL=Duration.d.ts.map