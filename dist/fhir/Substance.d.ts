import * as fhir from '../fhir.js';
import { SubstanceCodeValueSetType } from '../fhirValueSets/SubstanceCodeValueSet.js';
import { SubstanceStatusValueSetType, SubstanceStatusValueSetEnum } from '../fhirValueSets/SubstanceStatusValueSet.js';
import { SubstanceCategoryValueSetType } from '../fhirValueSets/SubstanceCategoryValueSet.js';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export declare type ISubstanceInstance = fhir.IBackboneElement & {
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    /**
     * Extended properties for primitive element: Substance.instance.expiry
     */
    _expiry?: fhir.IFhirElement | undefined;
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
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Substance.status
     */
    _status?: fhir.IFhirElement | undefined;
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
    /**
     * Extended properties for primitive element: Substance.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.ISubstanceInstance[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.ISubstanceIngredient[] | undefined;
};
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export declare class SubstanceInstance extends fhir.BackboneElement implements ISubstanceInstance {
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
    _expiry?: fhir.FhirElement | undefined;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceInstance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A substance can be composed of other substances.
 */
export declare class SubstanceIngredient extends fhir.BackboneElement implements ISubstanceIngredient {
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
    constructor(source?: Partial<ISubstanceIngredient>);
    /**
     * Example-bound Value Set for substanceCodeableConcept
     */
    substanceCodeableConceptExampleValueSet(): SubstanceCodeValueSetType;
    /**
     * Example-bound Value Set for substanceReference
     */
    substanceReferenceExampleValueSet(): SubstanceCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A homogeneous material with a definite composition.
 */
export declare class Substance extends fhir.DomainResource implements ISubstance {
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
    status?: SubstanceStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Substance.status
     */
    _status?: fhir.FhirElement | undefined;
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
    _description?: fhir.FhirElement | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.SubstanceInstance[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.SubstanceIngredient[] | undefined;
    /**
     * Default constructor for Substance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstance>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): SubstanceStatusValueSetType;
    /**
     * Extensible-bound Value Set for category
     */
    categoryExtensibleValueSet(): SubstanceCategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): SubstanceCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Substance.d.ts.map