import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Describe the undesirable effects of the medicinal product.
 */
export declare class MedicinalProductUndesirableEffect extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductUndesirableEffect {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductUndesirableEffect";
    /**
     * Classification of the effect.
     */
    classification?: fhirModels.CodeableConcept | undefined;
    /**
     * The frequency of occurrence of the effect.
     */
    frequencyOfOccurrence?: fhirModels.CodeableConcept | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhirModels.Population[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductUndesirableEffect from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductUndesirableEffect);
}
//# sourceMappingURL=MedicinalProductUndesirableEffect.d.ts.map