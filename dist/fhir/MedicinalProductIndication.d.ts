import * as fhir from '../fhir.js';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare type IMedicinalProductIndicationOtherTherapy = fhir.IBackboneElement & {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.ICodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.IReference | undefined;
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
     * The medication for which this is an indication.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.ICodeableConcept | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.ICodeableConcept | undefined;
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.ICodeableConcept[] | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.ICodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.IQuantity | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.IMedicinalProductIndicationOtherTherapy[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.IReference[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.IPopulation[] | undefined;
};
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductIndicationOtherTherapy extends fhir.BackboneElement implements IMedicinalProductIndicationOtherTherapy {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicinalProductIndicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIndicationOtherTherapy>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indication for the Medicinal Product.
 */
export declare class MedicinalProductIndication extends fhir.DomainResource implements IMedicinalProductIndication {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIndication";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.CodeableConcept | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.CodeableConcept | undefined;
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.CodeableConcept[] | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.CodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductIndicationOtherTherapy[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.Reference[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[] | undefined;
    /**
     * Default constructor for MedicinalProductIndication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIndication>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map