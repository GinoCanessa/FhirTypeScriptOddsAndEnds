import * as fhir from '../fhir';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export declare type ISubstanceInstance = fhir.IBackboneElement & {
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    _expiry?: fhir.IFhirElement | undefined;
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.IQuantity | undefined;
};
/**
 * A substance can be composed of other substances.
 */
export declare type ISubstanceIngredient = fhir.IBackboneElement & {
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhir.IRatio | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceReference?: fhir.IReference | undefined;
};
/**
 * A homogeneous material with a definite composition.
 */
export declare type ISubstance = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Substance";
    /**
     * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.ISubstanceIngredient[] | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.ISubstanceInstance[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export declare class SubstanceInstance extends fhir.BackboneElement implements fhir.ISubstanceInstance {
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    _expiry?: fhir.FhirElement | undefined;
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceInstance>);
    /**
     * Check if the current SubstanceInstance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceInstance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceInstance): SubstanceInstance;
}
/**
 * A substance can be composed of other substances.
 */
export declare class SubstanceIngredient extends fhir.BackboneElement implements fhir.ISubstanceIngredient {
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
    /**
     * Default constructor for SubstanceIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceIngredient>);
    /**
     * Check if the current SubstanceIngredient contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceIngredient from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceIngredient): SubstanceIngredient;
}
/**
 * A homogeneous material with a definite composition.
 */
export declare class Substance extends fhir.DomainResource implements fhir.ISubstance {
    /**
     * Resource Type Name
     */
    resourceType: "Substance";
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
    _description?: fhir.FhirElement | undefined;
    /**
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.SubstanceIngredient[] | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.SubstanceInstance[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Substance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstance>);
    /**
     * Check if the current Substance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Substance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstance): Substance;
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