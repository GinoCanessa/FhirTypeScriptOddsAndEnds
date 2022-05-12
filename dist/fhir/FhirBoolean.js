// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Primitive: boolean
import * as fhir from '../fhir.js';
import { IssueTypeValueSetEnum, IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Value of "true" or "false"
 */
export class FhirBoolean extends fhir.FhirPrimitive {
    /**
       * Create a FhirBoolean
       * @param value Value of "true" or "false"
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Boolean';
        this.__jsonType = 'boolean';
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if ((this.value) && (!FhirBoolean.__regex.test(this.value.toString()))) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.InvalidContent, diagnostics: "Invalid value in primitive type boolean", }));
        }
        return outcome;
    }
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : false); }
}
// published regex: true|false
FhirBoolean.__regex = /^true|false$/;
//# sourceMappingURL=FhirBoolean.js.map