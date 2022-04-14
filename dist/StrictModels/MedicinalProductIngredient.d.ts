import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Strength expressed in terms of a reference substance.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhirModels.Element | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhirModels.Ratio;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhirModels.Ratio | undefined;
    /**
     * Relevant reference substance.
     */
    substance?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength);
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrength extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrength {
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhirModels.Ratio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhirModels.Ratio | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhirModels.Element | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhirModels.Ratio;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhirModels.Ratio | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhirModels.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrength from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrength);
}
/**
 * A specified substance that comprises this ingredient.
 */
export declare class MedicinalProductIngredientSpecifiedSubstance extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstance {
    /**
     * The specified substance.
     */
    code: fhirModels.CodeableConcept;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhirModels.CodeableConcept | undefined;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhirModels.CodeableConcept;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhirModels.MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstance from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstance);
}
/**
 * The ingredient substance.
 */
export declare class MedicinalProductIngredientSubstance extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductIngredientSubstance {
    /**
     * The ingredient substance.
     */
    code: fhirModels.CodeableConcept;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhirModels.MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSubstance from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductIngredientSubstance);
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredient extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductIngredient {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductIngredient";
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhirModels.Element | undefined;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhirModels.Reference[] | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhirModels.CodeableConcept;
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance?: fhirModels.MedicinalProductIngredientSpecifiedSubstance[] | undefined;
    /**
     * The ingredient substance.
     */
    substance?: fhirModels.MedicinalProductIngredientSubstance | undefined;
    /**
     * Default constructor for MedicinalProductIngredient from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductIngredient);
}
//# sourceMappingURL=MedicinalProductIngredient.d.ts.map