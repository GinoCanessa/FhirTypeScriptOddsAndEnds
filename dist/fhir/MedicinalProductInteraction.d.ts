import * as fhir from '../fhir';
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
     * The interaction described.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.ICodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.ICodeableConcept | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhir.IMedicinalProductInteractionInteractant[] | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.ICodeableConcept | undefined;
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * The specific medication, food or laboratory test that interacts.
 */
export declare class MedicinalProductInteractionInteractant extends fhir.BackboneElement implements fhir.IMedicinalProductInteractionInteractant {
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
    constructor(source?: Partial<fhir.IMedicinalProductInteractionInteractant>);
    /**
     * Check if the current MedicinalProductInteractionInteractant contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductInteractionInteractant from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductInteractionInteractant): MedicinalProductInteractionInteractant;
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export declare class MedicinalProductInteraction extends fhir.DomainResource implements fhir.IMedicinalProductInteraction {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductInteraction";
    /**
     * The interaction described.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.CodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.CodeableConcept | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhir.MedicinalProductInteractionInteractant[] | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.CodeableConcept | undefined;
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductInteraction>);
    /**
     * Check if the current MedicinalProductInteraction contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductInteraction from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductInteraction): MedicinalProductInteraction;
}
//# sourceMappingURL=MedicinalProductInteraction.d.ts.map