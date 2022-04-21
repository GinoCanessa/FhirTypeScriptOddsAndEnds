import * as fhir from '../fhir.js';
/**
 * Describe the undesirable effects of the medicinal product.
 */
export declare type IMedicinalProductUndesirableEffect = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhir.ICodeableConcept | undefined;
    /**
     * Classification of the effect.
     */
    classification?: fhir.ICodeableConcept | undefined;
    /**
     * The frequency of occurrence of the effect.
     */
    frequencyOfOccurrence?: fhir.ICodeableConcept | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.IPopulation[] | undefined;
};
/**
 * Describe the undesirable effects of the medicinal product.
 */
export declare class MedicinalProductUndesirableEffect extends fhir.DomainResource implements IMedicinalProductUndesirableEffect {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhir.CodeableConcept | undefined;
    /**
     * Classification of the effect.
     */
    classification?: fhir.CodeableConcept | undefined;
    /**
     * The frequency of occurrence of the effect.
     */
    frequencyOfOccurrence?: fhir.CodeableConcept | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[] | undefined;
    /**
     * Default constructor for MedicinalProductUndesirableEffect - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductUndesirableEffect>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductUndesirableEffect.d.ts.map