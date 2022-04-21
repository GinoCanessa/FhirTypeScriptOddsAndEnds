import * as fhir from '../fhir.js';
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
     * Race of the specific population.
     */
    race?: fhir.ICodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhir.ICodeableConcept | undefined;
};
/**
 * A populatioof people with some set of grouping criteria.
 */
export declare class Population extends fhir.BackboneElement implements IPopulation {
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
     * Race of the specific population.
     */
    race?: fhir.CodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Population - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPopulation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Population.d.ts.map