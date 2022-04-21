import * as fhir from '../fhir.js';
/**
 * Strength expressed in terms of a reference substance.
 */
export declare type IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = fhir.IBackboneElement & {
    /**
     * Relevant reference substance.
     */
    substance?: fhir.ICodeableConcept | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhir.IRatio | null;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhir.IRatio | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.measurementPoint
     */
    _measurementPoint?: fhir.IFhirElement | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export declare type IMedicinalProductIngredientSpecifiedSubstanceStrength = fhir.IBackboneElement & {
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhir.IRatio | null;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhir.IRatio | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.IRatio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhir.IRatio | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.specifiedSubstance.strength.measurementPoint
     */
    _measurementPoint?: fhir.IFhirElement | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.ICodeableConcept[] | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhir.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;
};
/**
 * A specified substance that comprises this ingredient.
 */
export declare type IMedicinalProductIngredientSpecifiedSubstance = fhir.IBackboneElement & {
    /**
     * The specified substance.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhir.ICodeableConcept | null;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhir.ICodeableConcept | undefined;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.IMedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
};
/**
 * The ingredient substance.
 */
export declare type IMedicinalProductIngredientSubstance = fhir.IBackboneElement & {
    /**
     * The ingredient substance.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.IMedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
};
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export declare type IMedicinalProductIngredient = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIngredient";
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhir.ICodeableConcept | null;
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.allergenicIndicator
     */
    _allergenicIndicator?: fhir.IFhirElement | undefined;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance?: fhir.IMedicinalProductIngredientSpecifiedSubstance[] | undefined;
    /**
     * The ingredient substance.
     */
    substance?: fhir.IMedicinalProductIngredientSubstance | undefined;
};
/**
 * Strength expressed in terms of a reference substance.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends fhir.BackboneElement implements IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
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
    _measurementPoint?: fhir.FhirElement | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrength extends fhir.BackboneElement implements IMedicinalProductIngredientSpecifiedSubstanceStrength {
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
    _measurementPoint?: fhir.FhirElement | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIngredientSpecifiedSubstanceStrength>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A specified substance that comprises this ingredient.
 */
export declare class MedicinalProductIngredientSpecifiedSubstance extends fhir.BackboneElement implements IMedicinalProductIngredientSpecifiedSubstance {
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
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIngredientSpecifiedSubstance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The ingredient substance.
 */
export declare class MedicinalProductIngredientSubstance extends fhir.BackboneElement implements IMedicinalProductIngredientSubstance {
    /**
     * The ingredient substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSubstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIngredientSubstance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredient extends fhir.DomainResource implements IMedicinalProductIngredient {
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
    _allergenicIndicator?: fhir.FhirElement | undefined;
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
    /**
     * Default constructor for MedicinalProductIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductIngredient>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductIngredient.d.ts.map