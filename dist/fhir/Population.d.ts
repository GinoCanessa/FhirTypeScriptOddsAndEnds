import * as fhir from '../fhir';
/**
 * A populatioof people with some set of grouping criteria.
 */
export declare type IPopulation = fhir.IBackboneElement & {
    /**
     * The age of the specific population.
     */
    ageRange?: fhir.IRange | undefined;
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The gender of the specific population.
     */
    gender?: fhir.ICodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhir.ICodeableConcept | undefined;
    /**
     * Race of the specific population.
     */
    race?: fhir.ICodeableConcept | undefined;
};
/**
 * A populatioof people with some set of grouping criteria.
 */
export declare class Population extends fhir.BackboneElement implements fhir.IPopulation {
    /**
     * The age of the specific population.
     */
    ageRange?: fhir.Range | undefined;
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The gender of the specific population.
     */
    gender?: fhir.CodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhir.CodeableConcept | undefined;
    /**
     * Race of the specific population.
     */
    race?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Population - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPopulation>);
    /**
     * Check if the current Population contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Population from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPopulation): Population;
}
//# sourceMappingURL=Population.d.ts.map