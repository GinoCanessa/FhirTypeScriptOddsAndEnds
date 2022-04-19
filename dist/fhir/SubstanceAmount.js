// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Reference range of possible or expected values.
 */
export class SubstanceAmountReferenceRange extends fhir.FhirElement {
    /**
     * Default constructor for SubstanceAmountReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["highLimit"]) {
            this.highLimit = new fhir.Quantity(source.highLimit);
        }
        if (source["lowLimit"]) {
            this.lowLimit = new fhir.Quantity(source.lowLimit);
        }
    }
    /**
     * Check if the current SubstanceAmountReferenceRange contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a SubstanceAmountReferenceRange from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new SubstanceAmountReferenceRange(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `SubstanceAmountReferenceRange is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export class SubstanceAmount extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceAmount - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["amountQuantity"]) {
            this.amountQuantity = new fhir.Quantity(source.amountQuantity);
        }
        if (source["amountRange"]) {
            this.amountRange = new fhir.Range(source.amountRange);
        }
        if (source["amountString"]) {
            this.amountString = source.amountString;
        }
        if (source["_amountString"]) {
            this._amountString = new fhir.FhirElement(source._amountString);
        }
        if (source["amountText"]) {
            this.amountText = source.amountText;
        }
        if (source["_amountText"]) {
            this._amountText = new fhir.FhirElement(source._amountText);
        }
        if (source["amountType"]) {
            this.amountType = new fhir.CodeableConcept(source.amountType);
        }
        if (source["referenceRange"]) {
            this.referenceRange = new fhir.SubstanceAmountReferenceRange(source.referenceRange);
        }
    }
    /**
     * Check if the current SubstanceAmount contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a SubstanceAmount from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new SubstanceAmount(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `SubstanceAmount is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=SubstanceAmount.js.map