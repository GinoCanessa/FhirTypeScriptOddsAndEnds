import * as fhir from '../fhir';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare type IMedicinalProductIndicationOtherTherapy = fhir.IBackboneElement & {
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.IReference | undefined;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.ICodeableConcept | null;
};
/**
 * Indication for the Medicinal Product.
 */
export declare type IMedicinalProductIndication = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIndication";
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.ICodeableConcept[] | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.ICodeableConcept | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.ICodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.IQuantity | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.ICodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.IMedicinalProductIndicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.IPopulation[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.IReference[] | undefined;
};
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductIndicationOtherTherapy extends fhir.BackboneElement implements fhir.IMedicinalProductIndicationOtherTherapy {
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductIndicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductIndicationOtherTherapy>);
    /**
     * Check if the current MedicinalProductIndicationOtherTherapy contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIndicationOtherTherapy from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIndicationOtherTherapy): MedicinalProductIndicationOtherTherapy;
}
/**
 * Indication for the Medicinal Product.
 */
export declare class MedicinalProductIndication extends fhir.DomainResource implements fhir.IMedicinalProductIndication {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIndication";
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.CodeableConcept[] | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.CodeableConcept | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.CodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.CodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductIndicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductIndication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductIndication>);
    /**
     * Check if the current MedicinalProductIndication contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIndication from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIndication): MedicinalProductIndication;
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map