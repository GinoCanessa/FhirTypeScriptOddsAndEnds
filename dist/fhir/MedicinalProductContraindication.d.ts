import * as fhir from '../fhir.js';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare type IMedicinalProductContraindicationOtherTherapy = fhir.IBackboneElement & {
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
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export declare type IMedicinalProductContraindication = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhir.ICodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhir.ICodeableConcept | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhir.ICodeableConcept[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhir.IReference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.IMedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.IPopulation[] | undefined;
};
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductContraindicationOtherTherapy extends fhir.BackboneElement implements IMedicinalProductContraindicationOtherTherapy {
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
     * Default constructor for MedicinalProductContraindicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductContraindicationOtherTherapy>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export declare class MedicinalProductContraindication extends fhir.DomainResource implements IMedicinalProductContraindication {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhir.CodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhir.CodeableConcept | undefined;
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhir.CodeableConcept[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhir.Reference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[] | undefined;
    /**
     * Default constructor for MedicinalProductContraindication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductContraindication>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductContraindication.d.ts.map