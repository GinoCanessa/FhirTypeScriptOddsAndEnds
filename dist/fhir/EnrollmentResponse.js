// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: EnrollmentResponse
import * as fhir from '../fhir.js';
import { FmStatusValueSet, } from '../fhirValueSets/FmStatusValueSet.js';
import { RemittanceOutcomeValueSet, } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export class EnrollmentResponse extends fhir.DomainResource {
    /**
     * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'EnrollmentResponse';
        /**
         * The Response business identifier.
         */
        this.identifier = [];
        this.resourceType = 'EnrollmentResponse';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        if (source['request']) {
            this.request = new fhir.Reference(source.request);
        }
        if (source['outcome']) {
            this.outcome = source.outcome;
        }
        if (source['disposition']) {
            this.disposition = new fhir.FhirString({ value: source.disposition });
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['requestProvider']) {
            this.requestProvider = new fhir.Reference(source.requestProvider);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return FmStatusValueSet;
    }
    /**
     * Required-bound Value Set for outcome
     */
    static outcomeRequiredValueSet() {
        return RemittanceOutcomeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'EnrollmentResponse' fhir: EnrollmentResponse.resourceType:'EnrollmentResponse'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["request"]) {
            outcome.issue.push(...this.request.doModelValidation().issue);
        }
        if (this["disposition"]) {
            outcome.issue.push(...this.disposition.doModelValidation().issue);
        }
        if (this["created"]) {
            outcome.issue.push(...this.created.doModelValidation().issue);
        }
        if (this["organization"]) {
            outcome.issue.push(...this.organization.doModelValidation().issue);
        }
        if (this["requestProvider"]) {
            outcome.issue.push(...this.requestProvider.doModelValidation().issue);
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
//# sourceMappingURL=EnrollmentResponse.js.map