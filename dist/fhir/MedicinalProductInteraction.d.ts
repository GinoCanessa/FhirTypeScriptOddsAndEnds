import * as fhir from '../fhir.js';
/**
 * The specific medication, food or laboratory test that interacts.
 */
export declare type IMedicinalProductInteractionInteractant = fhir.IBackboneElement & {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
};
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export declare type IMedicinalProductInteraction = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductInteraction";
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * The interaction described.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductInteraction.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhir.IMedicinalProductInteractionInteractant[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.ICodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.ICodeableConcept | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.ICodeableConcept | undefined;
};
/**
 * The specific medication, food or laboratory test that interacts.
 */
export declare class MedicinalProductInteractionInteractant extends fhir.BackboneElement implements IMedicinalProductInteractionInteractant {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductInteractionInteractant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductInteractionInteractant>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export declare class MedicinalProductInteraction extends fhir.DomainResource implements IMedicinalProductInteraction {
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
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductInteraction.description
     */
    _description?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IMedicinalProductInteraction>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductInteraction.d.ts.map