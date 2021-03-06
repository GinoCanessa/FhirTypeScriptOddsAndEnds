// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: MarketingStatus
import * as fhir from '../fhir.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class MarketingStatus extends fhir.BackboneElement {
    /**
     * Default constructor for MarketingStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MarketingStatus';
        if (source['country']) {
            this.country = new fhir.CodeableConcept(source.country);
        }
        else {
            this.country = null;
        }
        if (source['jurisdiction']) {
            this.jurisdiction = new fhir.CodeableConcept(source.jurisdiction);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        else {
            this.status = null;
        }
        if (source['dateRange']) {
            this.dateRange = new fhir.Period(source.dateRange);
        }
        else {
            this.dateRange = null;
        }
        if (source['restoreDate']) {
            this.restoreDate = new fhir.FhirDateTime({ value: source.restoreDate });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['country']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property country:fhir.CodeableConcept fhir: MarketingStatus.country:CodeableConcept", }));
        }
        if (this["country"]) {
            outcome.issue.push(...this.country.doModelValidation().issue);
        }
        if (this["jurisdiction"]) {
            outcome.issue.push(...this.jurisdiction.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:fhir.CodeableConcept fhir: MarketingStatus.status:CodeableConcept", }));
        }
        if (this["status"]) {
            outcome.issue.push(...this.status.doModelValidation().issue);
        }
        if (!this['dateRange']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property dateRange:fhir.Period fhir: MarketingStatus.dateRange:Period", }));
        }
        if (this["dateRange"]) {
            outcome.issue.push(...this.dateRange.doModelValidation().issue);
        }
        if (this["restoreDate"]) {
            outcome.issue.push(...this.restoreDate.doModelValidation().issue);
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
//# sourceMappingURL=MarketingStatus.js.map