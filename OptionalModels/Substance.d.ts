import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export declare class SubstanceInstance extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceInstance {
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    _expiry?: fhirModels.Element | undefined;
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * The amount of the substance.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for SubstanceInstance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceInstance>);
    /**
     * Factory function to create a SubstanceInstance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceInstance): SubstanceInstance;
    /**
     * Check if the current SubstanceInstance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A substance can be composed of other substances.
 */
export declare class SubstanceIngredient extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceIngredient {
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhirModels.Ratio | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for SubstanceIngredient from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceIngredient>);
    /**
     * Factory function to create a SubstanceIngredient from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceIngredient): SubstanceIngredient;
    /**
     * Check if the current SubstanceIngredient contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A homogeneous material with a definite composition.
 */
export declare class Substance extends fhirModels.DomainResource implements fhirInterfaces.ISubstance {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Substance";
    /**
     * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhirModels.SubstanceIngredient[] | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhirModels.SubstanceInstance[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for Substance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstance>);
    /**
     * Factory function to create a Substance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstance): Substance;
    /**
     * Check if the current Substance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Substance.status field
 */
export declare enum SubstanceStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Substance.d.ts.map