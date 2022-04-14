import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export interface IMedicinalProductContraindicationOtherTherapy extends fhirInterfaces.IBackboneElement {
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhirInterfaces.IReference | undefined;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export interface IMedicinalProductContraindication extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductContraindication";
    /**
     * A comorbidity (concurrent condition) or coinfection.
     */
    comorbidity?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The disease, symptom or procedure for the contraindication.
     */
    disease?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The status of the disease or symptom for the contraindication.
     */
    diseaseStatus?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhirInterfaces.IMedicinalProductContraindicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhirInterfaces.IPopulation[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhirInterfaces.IReference[] | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
     */
    therapeuticIndication?: fhirInterfaces.IReference[] | undefined;
}
//# sourceMappingURL=IMedicinalProductContraindication.d.ts.map