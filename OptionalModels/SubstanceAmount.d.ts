import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Reference range of possible or expected values.
 */
export declare class SubstanceAmountReferenceRange extends fhirModels.Element implements fhirInterfaces.ISubstanceAmountReferenceRange {
    /**
     * Upper limit possible or expected.
     */
    highLimit?: fhirModels.Quantity | undefined;
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for SubstanceAmountReferenceRange from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceAmountReferenceRange>);
    /**
     * Factory function to create a SubstanceAmountReferenceRange from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceAmountReferenceRange): SubstanceAmountReferenceRange;
    /**
     * Check if the current SubstanceAmountReferenceRange contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export declare class SubstanceAmount extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceAmount {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountQuantity?: fhirModels.Quantity | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountRange?: fhirModels.Range | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountString?: string | undefined;
    _amountString?: fhirModels.Element | undefined;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: string | undefined;
    _amountText?: fhirModels.Element | undefined;
    /**
     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
     */
    amountType?: fhirModels.CodeableConcept | undefined;
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: fhirModels.SubstanceAmountReferenceRange | undefined;
    /**
     * Default constructor for SubstanceAmount from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceAmount>);
    /**
     * Factory function to create a SubstanceAmount from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceAmount): SubstanceAmount;
    /**
     * Check if the current SubstanceAmount contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=SubstanceAmount.d.ts.map