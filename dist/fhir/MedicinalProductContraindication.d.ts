import * as fhir from '../fhir';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare type IMedicinalProductContraindicationOtherTherapy = fhir.IBackboneElement & {
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
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export declare type IMedicinalProductContraindication = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication";
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhir.ICodeableConcept[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhir.ICodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhir.ICodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.IMedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.IPopulation[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhir.IReference[] | undefined;
};
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductContraindicationOtherTherapy extends fhir.BackboneElement implements fhir.IMedicinalProductContraindicationOtherTherapy {
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
     * Default constructor for MedicinalProductContraindicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductContraindicationOtherTherapy>);
    /**
     * Check if the current MedicinalProductContraindicationOtherTherapy contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductContraindicationOtherTherapy from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductContraindicationOtherTherapy): MedicinalProductContraindicationOtherTherapy;
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export declare class MedicinalProductContraindication extends fhir.DomainResource implements fhir.IMedicinalProductContraindication {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductContraindication";
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhir.CodeableConcept[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhir.CodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhir.CodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductContraindication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductContraindication>);
    /**
     * Check if the current MedicinalProductContraindication contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductContraindication from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductContraindication): MedicinalProductContraindication;
}
//# sourceMappingURL=MedicinalProductContraindication.d.ts.map