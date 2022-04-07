import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductContraindicationOtherTherapy extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductContraindicationOtherTherapy {
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
    therapyRelationshipType: fhirModels.CodeableConcept;
    /**
     * Default constructor for MedicinalProductContraindicationOtherTherapy from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductContraindicationOtherTherapy);
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export declare class MedicinalProductContraindication extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductContraindication {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductContraindication";
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhirModels.CodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhirModels.MedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhirModels.Population[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for MedicinalProductContraindication from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductContraindication);
}
//# sourceMappingURL=MedicinalProductContraindication.d.ts.map