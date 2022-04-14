import * as fhirInterfaces from '../strictinterfaces';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export interface IMedicinalProductIndicationOtherTherapy extends fhirInterfaces.IBackboneElement {
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
    therapyRelationshipType: fhirInterfaces.ICodeableConcept;
}
/**
 * Indication for the Medicinal Product.
 */
export interface IMedicinalProductIndication extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductIndication";
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhirInterfaces.IQuantity | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhirInterfaces.IMedicinalProductIndicationOtherTherapy[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhirInterfaces.IPopulation[] | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhirInterfaces.IReference[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhirInterfaces.IReference[] | undefined;
}
//# sourceMappingURL=IMedicinalProductIndication.d.ts.map