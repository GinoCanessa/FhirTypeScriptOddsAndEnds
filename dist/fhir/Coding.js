// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Coding
import * as fhir from '../fhir.js';
/**
 * A reference to a code defined by a terminology system.
 */
export class Coding extends fhir.FhirElement {
    /**
     * Default constructor for Coding - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['system']) {
            this.system = source.system;
        }
        if (source['_system']) {
            this._system = new fhir.FhirElement(source._system);
        }
        if (source['version']) {
            this.version = source.version;
        }
        if (source['_version']) {
            this._version = new fhir.FhirElement(source._version);
        }
        if (source['code']) {
            this.code = source.code;
        }
        if (source['_code']) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source['display']) {
            this.display = source.display;
        }
        if (source['_display']) {
            this._display = new fhir.FhirElement(source._display);
        }
        if (source['userSelected']) {
            this.userSelected = source.userSelected;
        }
        if (source['_userSelected']) {
            this._userSelected = new fhir.FhirElement(source._userSelected);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_system"]) {
            results.push(...this._system.doModelValidation());
        }
        if (this["_version"]) {
            results.push(...this._version.doModelValidation());
        }
        if (this["_code"]) {
            results.push(...this._code.doModelValidation());
        }
        if (this["_display"]) {
            results.push(...this._display.doModelValidation());
        }
        if (this["_userSelected"]) {
            results.push(...this._userSelected.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=Coding.js.map