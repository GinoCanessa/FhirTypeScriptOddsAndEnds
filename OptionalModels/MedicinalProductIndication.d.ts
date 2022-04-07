import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductIndicationOtherTherapy extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductIndicationOtherTherapy {
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhirModels.Reference | undefined;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductIndicationOtherTherapy from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductIndicationOtherTherapy>);
    /**
     * Factory function to create a MedicinalProductIndicationOtherTherapy from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductIndicationOtherTherapy): MedicinalProductIndicationOtherTherapy;
    /**
     * Check if the current MedicinalProductIndicationOtherTherapy contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Indication for the Medicinal Product.
 */
export declare class MedicinalProductIndication extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductIndication {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductIndication";
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhirModels.CodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhirModels.Quantity | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhirModels.CodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhirModels.MedicinalProductIndicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhirModels.Population[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductIndication from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductIndication>);
    /**
     * Factory function to create a MedicinalProductIndication from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductIndication): MedicinalProductIndication;
    /**
     * Check if the current MedicinalProductIndication contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map