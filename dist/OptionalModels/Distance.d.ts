import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A length - a value with a unit that is a physical distance.
 */
export declare class Distance extends fhirModels.Quantity implements fhirInterfaces.IDistance {
    /**
     * Default constructor for Distance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDistance>);
    /**
     * Factory function to create a Distance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDistance): Distance;
    /**
     * Check if the current Distance contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Distance.d.ts.map