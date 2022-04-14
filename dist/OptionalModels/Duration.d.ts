import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A length of time.
 */
export declare class Duration extends fhirModels.Quantity implements fhirInterfaces.IDuration {
    /**
     * Default constructor for Duration from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDuration>);
    /**
     * Factory function to create a Duration from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDuration): Duration;
    /**
     * Check if the current Duration contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Duration.d.ts.map