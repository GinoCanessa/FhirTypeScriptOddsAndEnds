import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export interface ISubstanceInstance extends fhirInterfaces.IBackboneElement {
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    _expiry?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The amount of the substance.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
}
/**
 * A substance can be composed of other substances.
 */
export interface ISubstanceIngredient extends fhirInterfaces.IBackboneElement {
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhirInterfaces.IRatio | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceReference?: fhirInterfaces.IReference | undefined;
}
/**
 * A homogeneous material with a definite composition.
 */
export interface ISubstance extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Substance";
    /**
     * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhirInterfaces.ISubstanceIngredient[] | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhirInterfaces.ISubstanceInstance[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Substance.status field
 */
export declare enum SubstanceStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ISubstance.d.ts.map