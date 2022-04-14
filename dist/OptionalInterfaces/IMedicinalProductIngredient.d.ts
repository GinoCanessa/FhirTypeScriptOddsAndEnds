import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Strength expressed in terms of a reference substance.
 */
export interface IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends fhirInterfaces.IBackboneElement {
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhirInterfaces.IElement | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength?: fhirInterfaces.IRatio | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhirInterfaces.IRatio | undefined;
    /**
     * Relevant reference substance.
     */
    substance?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export interface IMedicinalProductIngredientSpecifiedSubstanceStrength extends fhirInterfaces.IBackboneElement {
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhirInterfaces.IRatio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhirInterfaces.IRatio | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhirInterfaces.IElement | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation?: fhirInterfaces.IRatio | undefined;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhirInterfaces.IRatio | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;
}
/**
 * A specified substance that comprises this ingredient.
 */
export interface IMedicinalProductIngredientSpecifiedSubstance extends fhirInterfaces.IBackboneElement {
    /**
     * The specified substance.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
}
/**
 * The ingredient substance.
 */
export interface IMedicinalProductIngredientSubstance extends fhirInterfaces.IBackboneElement {
    /**
     * The ingredient substance.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface IMedicinalProductIngredient extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductIngredient";
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhirInterfaces.IElement | undefined;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhirInterfaces.IReference[] | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance?: fhirInterfaces.IMedicinalProductIngredientSpecifiedSubstance[] | undefined;
    /**
     * The ingredient substance.
     */
    substance?: fhirInterfaces.IMedicinalProductIngredientSubstance | undefined;
}
//# sourceMappingURL=IMedicinalProductIngredient.d.ts.map