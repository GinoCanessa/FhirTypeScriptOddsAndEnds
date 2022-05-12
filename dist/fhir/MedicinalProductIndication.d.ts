import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductIndicationOtherTherapy type.
 */
export interface MedicinalProductIndicationOtherTherapyArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConceptArgs | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export declare class MedicinalProductIndicationOtherTherapy extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The type of relationship between the medicinal product indication or contraindication and another therapy.
     */
    therapyRelationshipType: fhir.CodeableConcept | null;
    /**
     * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    readonly __medicationIsChoice: true;
    /**
     * Default constructor for MedicinalProductIndicationOtherTherapy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIndicationOtherTherapyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MedicinalProductIndication type.
 */
export interface MedicinalProductIndicationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIndication" | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * The disease, symptom or procedure that is the indication for treatment.
     */
    diseaseSymptomProcedure?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status of the disease or symptom for which the indication applies.
     */
    diseaseStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * Comorbidity (concurrent condition) or co-infection as part of the indication.
     */
    comorbidity?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The intended effect, aim or strategy to be achieved by the indication.
     */
    intendedEffect?: fhir.CodeableConceptArgs | undefined;
    /**
     * Timing or duration information as part of the indication.
     */
    duration?: fhir.QuantityArgs | undefined;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: fhir.MedicinalProductIndicationOtherTherapyArgs[] | undefined;
    /**
     * Describe the undesirable effects of the medicinal product.
     */
    undesirableEffect?: fhir.ReferenceArgs[] | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.PopulationArgs[] | undefined;
}
/**
 * Indication for the Medicinal Product.
 */
export declare class MedicinalProductIndication extends fhir.DomainResource {
    readonly __dataType: string;
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
    constructor(source?: Partial<MedicinalProductIndicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map