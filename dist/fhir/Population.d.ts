import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Population type.
 */
export interface PopulationArgs extends fhir.BackboneElementArgs {
    /**
     * The age of the specific population.
     */
    age?: fhir.Range | fhir.CodeableConcept | undefined;
    /**
     * The age of the specific population.
     */
    ageRange?: fhir.RangeArgs | undefined;
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The gender of the specific population.
     */
    gender?: fhir.CodeableConceptArgs | undefined;
    /**
     * Race of the specific population.
     */
    race?: fhir.CodeableConceptArgs | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A populatioof people with some set of grouping criteria.
 */
export declare class Population extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The age of the specific population.
     */
    age?: (fhir.Range | fhir.CodeableConcept) | undefined;
    readonly __ageIsChoice: true;
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
    constructor(source?: Partial<PopulationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Population.d.ts.map