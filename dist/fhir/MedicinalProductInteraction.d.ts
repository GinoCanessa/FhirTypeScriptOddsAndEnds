import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductInteractionInteractant type.
 */
export interface MedicinalProductInteractionInteractantArgs extends fhir.BackboneElementArgs {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    item?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The specific medication, food or laboratory test that interacts.
 */
export declare class MedicinalProductInteractionInteractant extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    item: (fhir.Reference | fhir.CodeableConcept) | null;
    readonly __itemIsChoice: true;
    /**
     * Default constructor for MedicinalProductInteractionInteractant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductInteractionInteractantArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the MedicinalProductInteraction type.
 */
export interface MedicinalProductInteractionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductInteraction" | undefined;
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * The interaction described.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhir.MedicinalProductInteractionInteractantArgs[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.CodeableConceptArgs | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.CodeableConceptArgs | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export declare class MedicinalProductInteraction extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductInteraction";
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The interaction described.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhir.MedicinalProductInteractionInteractant[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.CodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.CodeableConcept | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=MedicinalProductInteraction.d.ts.map