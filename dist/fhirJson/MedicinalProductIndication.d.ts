import * as fhir from '../fhirJson.js';
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export interface MedicinalProductIndicationOtherTherapy extends fhir.BackboneElement {
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
}
/**
 * Indication for the Medicinal Product.
 */
export interface MedicinalProductIndication extends fhir.DomainResource {
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
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map