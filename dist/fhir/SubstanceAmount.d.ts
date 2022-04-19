import * as fhir from '../fhir';
/**
 * Reference range of possible or expected values.
 */
export declare type ISubstanceAmountReferenceRange = fhir.IFhirElement & {
    /**
     * Upper limit possible or expected.
     */
    highLimit?: fhir.IQuantity | undefined;
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: fhir.IQuantity | undefined;
};
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export declare type ISubstanceAmount = fhir.IBackboneElement & {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountRange?: fhir.IRange | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountString?: string | undefined;
    _amountString?: fhir.IFhirElement | undefined;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: string | undefined;
    _amountText?: fhir.IFhirElement | undefined;
    /**
     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
     */
    amountType?: fhir.ICodeableConcept | undefined;
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: fhir.ISubstanceAmountReferenceRange | undefined;
};
/**
 * Reference range of possible or expected values.
 */
export declare class SubstanceAmountReferenceRange extends fhir.FhirElement implements fhir.ISubstanceAmountReferenceRange {
    /**
     * Upper limit possible or expected.
     */
    highLimit?: fhir.Quantity | undefined;
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceAmountReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceAmountReferenceRange>);
    /**
     * Check if the current SubstanceAmountReferenceRange contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceAmountReferenceRange from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceAmountReferenceRange): SubstanceAmountReferenceRange;
}
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export declare class SubstanceAmount extends fhir.BackboneElement implements fhir.ISubstanceAmount {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountRange?: fhir.Range | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountString?: string | undefined;
    _amountString?: fhir.FhirElement | undefined;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: string | undefined;
    _amountText?: fhir.FhirElement | undefined;
    /**
     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: fhir.SubstanceAmountReferenceRange | undefined;
    /**
     * Default constructor for SubstanceAmount - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceAmount>);
    /**
     * Check if the current SubstanceAmount contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceAmount from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceAmount): SubstanceAmount;
}
//# sourceMappingURL=SubstanceAmount.d.ts.map