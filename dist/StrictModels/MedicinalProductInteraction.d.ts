import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The specific medication, food or laboratory test that interacts.
 */
export declare class MedicinalProductInteractionInteractant extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductInteractionInteractant {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhirModels.Reference | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductInteractionInteractant from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductInteractionInteractant);
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export declare class MedicinalProductInteraction extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductInteraction {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductInteraction";
    /**
     * The interaction described.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhirModels.CodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhirModels.CodeableConcept | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhirModels.MedicinalProductInteractionInteractant[] | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhirModels.CodeableConcept | undefined;
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductInteraction from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductInteraction);
}
//# sourceMappingURL=MedicinalProductInteraction.d.ts.map