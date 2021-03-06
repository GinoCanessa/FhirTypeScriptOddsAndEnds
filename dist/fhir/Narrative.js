// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Narrative
import * as fhir from '../fhir.js';
import { NarrativeStatusValueSet, } from '../fhirValueSets/NarrativeStatusValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhir.FhirElement {
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Narrative';
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['div']) {
            this.div = new fhir.FhirXhtml({ value: source.div });
        }
        else {
            this.div = null;
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return NarrativeStatusValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:NarrativeStatusValueSetEnum fhir: Narrative.status:code", }));
        }
        if (!this['div']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property div:fhir.FhirXhtml fhir: Narrative.div:xhtml", }));
        }
        if (this["div"]) {
            outcome.issue.push(...this.div.doModelValidation().issue);
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
//# sourceMappingURL=Narrative.js.map