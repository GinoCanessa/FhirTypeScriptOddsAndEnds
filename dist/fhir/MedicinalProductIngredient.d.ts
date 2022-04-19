import * as fhir from '../fhir';
/**
 * Strength expressed in terms of a reference substance.
 */
export declare type IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = fhir.IBackboneElement & {
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.ICodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhir.IFhirElement | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhir.IRatio | null;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhir.IRatio | undefined;
    /**
     * Relevant reference substance.
     */
    substance?: fhir.ICodeableConcept | undefined;
};
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export declare type IMedicinalProductIngredientSpecifiedSubstanceStrength = fhir.IBackboneElement & {
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.IRatio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhir.IRatio | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.ICodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhir.IFhirElement | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhir.IRatio | null;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhir.IRatio | undefined;
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
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhir.ICodeableConcept | undefined;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhir.ICodeableConcept | null;
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
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhir.IFhirElement | undefined;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhir.ICodeableConcept | null;
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
export declare class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends fhir.BackboneElement implements fhir.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhir.FhirElement | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhir.Ratio | null;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhir.Ratio | undefined;
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>);
    /**
     * Check if the current MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrength extends fhir.BackboneElement implements fhir.IMedicinalProductIngredientSpecifiedSubstanceStrength {
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.Ratio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhir.Ratio | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    _measurementPoint?: fhir.FhirElement | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhir.Ratio | null;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhir.Ratio | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductIngredientSpecifiedSubstanceStrength>);
    /**
     * Check if the current MedicinalProductIngredientSpecifiedSubstanceStrength contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIngredientSpecifiedSubstanceStrength from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIngredientSpecifiedSubstanceStrength): MedicinalProductIngredientSpecifiedSubstanceStrength;
}
/**
 * A specified substance that comprises this ingredient.
 */
export declare class MedicinalProductIngredientSpecifiedSubstance extends fhir.BackboneElement implements fhir.IMedicinalProductIngredientSpecifiedSubstance {
    /**
     * The specified substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhir.CodeableConcept | undefined;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhir.CodeableConcept | null;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrength[] | undefined;
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductIngredientSpecifiedSubstance>);
    /**
     * Check if the current MedicinalProductIngredientSpecifiedSubstance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIngredientSpecifiedSubstance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIngredientSpecifiedSubstance): MedicinalProductIngredientSpecifiedSubstance;
}
/**
 * The ingredient substance.
 */
export declare class MedicinalProductIngredientSubstance extends fhir.BackboneElement implements fhir.IMedicinalProductIngredientSubstance {
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
    constructor(source?: Partial<fhir.IMedicinalProductIngredientSubstance>);
    /**
     * Check if the current MedicinalProductIngredientSubstance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIngredientSubstance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIngredientSubstance): MedicinalProductIngredientSubstance;
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredient extends fhir.DomainResource implements fhir.IMedicinalProductIngredient {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIngredient";
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhir.FhirElement | undefined;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhir.CodeableConcept | null;
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
    constructor(source?: Partial<fhir.IMedicinalProductIngredient>);
    /**
     * Check if the current MedicinalProductIngredient contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductIngredient from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductIngredient): MedicinalProductIngredient;
}
//# sourceMappingURL=MedicinalProductIngredient.d.ts.map