// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class MarketingStatus extends fhir.BackboneElement {
    /**
     * Default constructor for MarketingStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.country = null;
        if (source["country"]) {
            this.country = new fhir.CodeableConcept(source.country);
        }
        if (this.country === undefined) {
            this.country = null;
        }
        this.dateRange = null;
        if (source["dateRange"]) {
            this.dateRange = new fhir.Period(source.dateRange);
        }
        if (this.dateRange === undefined) {
            this.dateRange = null;
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = new fhir.CodeableConcept(source.jurisdiction);
        }
        if (source["restoreDate"]) {
            this.restoreDate = source.restoreDate;
        }
        if (source["_restoreDate"]) {
            this._restoreDate = new fhir.FhirElement(source._restoreDate);
        }
        this.status = null;
        if (source["status"]) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (this.status === undefined) {
            this.status = null;
        }
    }
    /**
     * Check if the current MarketingStatus contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["country"] === undefined) {
            missingElements.push("country");
        }
        if (this["dateRange"] === undefined) {
            missingElements.push("dateRange");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MarketingStatus from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MarketingStatus(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MarketingStatus is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=MarketingStatus.js.map