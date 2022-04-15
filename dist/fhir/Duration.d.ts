import * as fhir from '../fhir';
/**
 * A length of time.
 */
export interface IDuration extends fhir.IQuantity {
}
/**
 * A length of time.
 */
export declare class Duration extends fhir.Quantity implements fhir.IDuration {
    /**
     * Default constructor for Duration - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a Duration from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IDuration>): Duration;
    /**
     * Check if the current Duration contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Duration from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IDuration): Duration;
}
//# sourceMappingURL=Duration.d.ts.map