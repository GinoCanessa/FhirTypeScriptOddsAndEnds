import * as fhir from '../fhir';
/**
 * Describe the undesirable effects of the medicinal product.
 */
export declare type IMedicinalProductUndesirableEffect = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect";
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
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhir.ICodeableConcept | undefined;
};
/**
 * Describe the undesirable effects of the medicinal product.
 */
export declare class MedicinalProductUndesirableEffect extends fhir.DomainResource implements fhir.IMedicinalProductUndesirableEffect {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect";
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
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductUndesirableEffect - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductUndesirableEffect>);
    /**
     * Check if the current MedicinalProductUndesirableEffect contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductUndesirableEffect from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductUndesirableEffect): MedicinalProductUndesirableEffect;
}
//# sourceMappingURL=MedicinalProductUndesirableEffect.d.ts.map