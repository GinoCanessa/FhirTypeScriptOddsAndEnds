import * as fhir from '../fhirJson.js';
/**
 * Strength expressed in terms of a reference substance.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends fhir.BackboneElement {
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhir.Ratio | null;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhir.Ratio | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElement;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConcept[] | undefined;
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrength extends fhir.BackboneElement {
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhir.Ratio | null;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhir.Ratio | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.Ratio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhir.Ratio | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.specifiedSubstance.strength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElement;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;
}
/**
 * A specified substance that comprises this ingredient.
 */
export interface MedicinalProductIngredientSpecifiedSubstance extends fhir.BackboneElement {
    /**
     * The specified substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhir.CodeableConcept | null;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhir.CodeableConcept | undefined;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
}
/**
 * The ingredient substance.
 */
export interface MedicinalProductIngredientSubstance extends fhir.BackboneElement {
    /**
     * The ingredient substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredient extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIngredient";
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhir.CodeableConcept | null;
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.allergenicIndicator
     */
    _allergenicIndicator?: fhir.FhirElement;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance?: fhir.MedicinalProductIngredientSpecifiedSubstance[] | undefined;
    /**
     * The ingredient substance.
     */
    substance?: fhir.MedicinalProductIngredientSubstance | undefined;
}
//# sourceMappingURL=MedicinalProductIngredient.d.ts.map