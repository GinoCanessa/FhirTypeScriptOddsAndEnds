// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Range
import * as fhir from '../fhir.js';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export class Range extends fhir.FhirElement {
    /**
     * Default constructor for Range - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['low']) {
            this.low = new fhir.Quantity(source.low);
        }
        if (source['high']) {
            this.high = new fhir.Quantity(source.high);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["low"]) {
            results.push(...this.low.doModelValidation());
        }
        if (this["high"]) {
            results.push(...this.high.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=Range.js.map