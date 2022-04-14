import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Describe the undesirable effects of the medicinal product.
 */
export interface IMedicinalProductUndesirableEffect extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductUndesirableEffect";
    /**
     * Classification of the effect.
     */
    classification?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The frequency of occurrence of the effect.
     */
    frequencyOfOccurrence?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhirInterfaces.IPopulation[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhirInterfaces.IReference[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhirInterfaces.ICodeableConcept | undefined;
}
//# sourceMappingURL=IMedicinalProductUndesirableEffect.d.ts.map