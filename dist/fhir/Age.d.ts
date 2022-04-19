import * as fhir from '../fhir';
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export declare type IAge = fhir.IQuantity & {};
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export declare class Age extends fhir.Quantity implements fhir.IAge {
    /**
     * Default constructor for Age - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAge>);
    /**
     * Check if the current Age contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Age from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IAge): Age;
}
//# sourceMappingURL=Age.d.ts.map