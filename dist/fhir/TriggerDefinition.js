// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: TriggerDefinition
import * as fhir from '../fhir.js';
import { TriggerTypeValueSet, } from '../fhirValueSets/TriggerTypeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export class TriggerDefinition extends fhir.FhirElement {
    /**
     * Default constructor for TriggerDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TriggerDefinition';
        this.__timingIsChoice = true;
        /**
         * This element shall be present for any data type trigger.
         */
        this.data = [];
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['timing']) {
            this.timing = source.timing;
        }
        else if (source['timingTiming']) {
            this.timing = new fhir.Timing(source.timingTiming);
        }
        else if (source['timingReference']) {
            this.timing = new fhir.Reference(source.timingReference);
        }
        else if (source['timingDate']) {
            this.timing = new fhir.FhirDate({ value: source.timingDate });
        }
        else if (source['timingDateTime']) {
            this.timing = new fhir.FhirDateTime({ value: source.timingDateTime });
        }
        if (source['data']) {
            this.data = source.data.map((x) => new fhir.DataRequirement(x));
        }
        if (source['condition']) {
            this.condition = new fhir.Expression(source.condition);
        }
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return TriggerTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:TriggerTypeValueSetEnum fhir: TriggerDefinition.type:code", }));
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["data"]) {
            this.data.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["condition"]) {
            outcome.issue.push(...this.condition.doModelValidation().issue);
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
//# sourceMappingURL=TriggerDefinition.js.map