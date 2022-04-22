// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Expression
import * as fhir from '../fhir.js';
import { ExpressionLanguageValueSet } from '../fhirValueSets/ExpressionLanguageValueSet.js';
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export class Expression extends fhir.FhirElement {
    /**
     * Default constructor for Expression - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['name']) {
            this.name = source.name;
        }
        if (source['_name']) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source['language']) {
            this.language = source.language;
        }
        else {
            this.language = null;
        }
        if (source['_language']) {
            this._language = new fhir.FhirElement(source._language);
        }
        if (source['expression']) {
            this.expression = source.expression;
        }
        if (source['_expression']) {
            this._expression = new fhir.FhirElement(source._expression);
        }
        if (source['reference']) {
            this.reference = source.reference;
        }
        if (source['_reference']) {
            this._reference = new fhir.FhirElement(source._reference);
        }
    }
    /**
     * Extensible-bound Value Set for language
     */
    static languageExtensibleValueSet() {
        return ExpressionLanguageValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["_name"]) {
            results.push(...this._name.doModelValidation());
        }
        if (!this["language"]) {
            results.push(["language", 'Missing required element: Expression.language']);
        }
        if (this["_language"]) {
            results.push(...this._language.doModelValidation());
        }
        if (this["_expression"]) {
            results.push(...this._expression.doModelValidation());
        }
        if (this["_reference"]) {
            results.push(...this._reference.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=Expression.js.map