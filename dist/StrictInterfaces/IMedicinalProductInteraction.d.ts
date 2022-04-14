import * as fhirInterfaces from '../strictinterfaces';
/**
 * The specific medication, food or laboratory test that interacts.
 */
export interface IMedicinalProductInteractionInteractant extends fhirInterfaces.IBackboneElement {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhirInterfaces.IReference | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export interface IMedicinalProductInteraction extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductInteraction";
    /**
     * The interaction described.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhirInterfaces.IMedicinalProductInteractionInteractant[] | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhirInterfaces.IReference[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
//# sourceMappingURL=IMedicinalProductInteraction.d.ts.map