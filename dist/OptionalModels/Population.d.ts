import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A populatioof people with some set of grouping criteria.
 */
export declare class Population extends fhirModels.BackboneElement implements fhirInterfaces.IPopulation {
    /**
     * The age of the specific population.
     */
    ageRange?: fhirModels.Range | undefined;
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The gender of the specific population.
     */
    gender?: fhirModels.CodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhirModels.CodeableConcept | undefined;
    /**
     * Race of the specific population.
     */
    race?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Population from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPopulation>);
    /**
     * Factory function to create a Population from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPopulation): Population;
    /**
     * Check if the current Population contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Population.d.ts.map