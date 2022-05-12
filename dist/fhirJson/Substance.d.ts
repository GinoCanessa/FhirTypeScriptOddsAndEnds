import * as fhir from '../fhirJson.js';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export interface SubstanceInstance extends fhir.BackboneElement {
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    /**
     * Extended properties for primitive element: Substance.instance.expiry
     */
    _expiry?: fhir.FhirElement;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.Quantity | undefined;
}
/**
 * A substance can be composed of other substances.
 */
export interface SubstanceIngredient extends fhir.BackboneElement {
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhir.Ratio | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceReference?: fhir.Reference | undefined;
}
/**
 * A homogeneous material with a definite composition.
 */
export interface Substance extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Substance";
    /**
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: 'active' | 'entered-in-error' | 'inactive' | undefined;
    /**
     * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Substance.description
     */
    _description?: fhir.FhirElement;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.SubstanceInstance[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.SubstanceIngredient[] | undefined;
}
//# sourceMappingURL=Substance.d.ts.map