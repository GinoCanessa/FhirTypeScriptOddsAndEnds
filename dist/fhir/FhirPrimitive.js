// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir.js';
import { IssueSeverityValueSetEnum, IssueTypeValueSetEnum } from '../valueSetEnums.js';
export class FhirPrimitive extends fhir.FhirBase {
    /**
     * Constructor for FHIR primitive type elements
     * @param value
     * @param id
     * @param extension
     * @param options
     */
    constructor(source = {}, options = {}) {
        var _a, _b;
        super();
        this.__isPrimitive = true;
        this.__dataType = 'PrimitiveType';
        this.__jsonType = 'any';
        if (source) {
            if ((source.value) && (source.value['__dataType'])) {
                this.value = (_a = source.value.value) !== null && _a !== void 0 ? _a : null;
                this.id = (_b = source.value.id) !== null && _b !== void 0 ? _b : undefined;
                if ((source.value.extension) && (source.value.extension.length > 0)) {
                    this.extension = [];
                    source.value.extension.forEach((e) => {
                        if (e === null) {
                            this.extension.push(null);
                        }
                        else {
                            this.extension.push(new fhir.Extension(e, options));
                        }
                    });
                }
            }
            else if (source.value) {
                this.value = source.value;
            }
            if (source.id) {
                this.id = source.id;
            }
            if ((source.extension) && (source.extension.length > 0)) {
                if (!this.extension) {
                    this.extension = [];
                }
                source.extension.forEach((e) => {
                    if (e === null) {
                        this.extension.push(null);
                    }
                    else {
                        this.extension.push(new fhir.Extension(e, options));
                    }
                });
            }
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = new fhir.OperationOutcome({ issue: [] });
        if ((!this.value) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({
                severity: IssueSeverityValueSetEnum.Error,
                code: IssueTypeValueSetEnum.RequiredElementMissing,
                diagnostics: "Primitive values must have a value, id, or extensions.",
            }));
        }
        return outcome;
    }
    /**
     * Add an extension with the desired URL and FHIR value
     * @param url
     * @param value
     */
    addExtension(url, value) {
        if (this.extension === undefined) {
            this.extension = [];
        }
        this.extension.push(fhir.Extension.fromValue(url, value));
    }
}
//# sourceMappingURL=FhirPrimitive.js.map