import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export declare class Age extends fhirModels.Quantity implements fhirInterfaces.IAge {
    /**
     * Default constructor for Age from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IAge>);
    /**
     * Factory function to create a Age from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IAge): Age;
    /**
     * Check if the current Age contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Age.d.ts.map