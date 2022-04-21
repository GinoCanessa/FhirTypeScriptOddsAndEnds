// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: UsageContext
import * as fhir from '../fhir.js';
import { UsageContextTypeValueSet } from '../fhirValueSets/UsageContextTypeValueSet.js';
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export class UsageContext extends fhir.FhirElement {
    /**
     * Default constructor for UsageContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['code']) {
            this.code = new fhir.Coding(source.code);
        }
        else {
            this.code = null;
        }
        if (source['valueCodeableConcept']) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source['valueQuantity']) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source['valueRange']) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source['valueReference']) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
    }
    /**
     * Extensible-bound Value Set for code
     */
    codeExtensibleValueSet() {
        return UsageContextTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["code"]) {
            results.push(["code", 'Missing required element: UsageContext.code']);
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (this["valueCodeableConcept"]) {
            results.push(...this.valueCodeableConcept.doModelValidation());
        }
        if (this["valueQuantity"]) {
            results.push(...this.valueQuantity.doModelValidation());
        }
        if (this["valueRange"]) {
            results.push(...this.valueRange.doModelValidation());
        }
        if (this["valueReference"]) {
            results.push(...this.valueReference.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=UsageContext.js.map