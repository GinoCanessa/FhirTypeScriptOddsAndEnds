// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ProductShelfLife
import * as fhir from '../fhir.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export class ProductShelfLife extends fhir.BackboneElement {
    /**
     * Default constructor for ProductShelfLife - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ProductShelfLife';
        /**
         * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
         */
        this.specialPrecautionsForStorage = [];
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        else {
            this.type = null;
        }
        if (source['period']) {
            this.period = new fhir.Quantity(source.period);
        }
        else {
            this.period = null;
        }
        if (source['specialPrecautionsForStorage']) {
            this.specialPrecautionsForStorage = source.specialPrecautionsForStorage.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:fhir.CodeableConcept fhir: ProductShelfLife.type:CodeableConcept", }));
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (!this['period']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property period:fhir.Quantity fhir: ProductShelfLife.period:Quantity", }));
        }
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["specialPrecautionsForStorage"]) {
            this.specialPrecautionsForStorage.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=ProductShelfLife.js.map