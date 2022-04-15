var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
var CodeableConcept = /** @class */ (function (_super) {
    __extends(CodeableConcept, _super);
    /**
     * Default constructor for CodeableConcept - initializes required elements to null.
     */
    function CodeableConcept() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a CodeableConcept from an object that MAY NOT contain all required elements.
     */
    CodeableConcept.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["coding"] !== undefined) {
            dest.coding = source.coding.map(function (x) { return fhir.Coding.FactoryCreate(x); });
        }
        if (source["text"] !== undefined) {
            dest.text = source.text;
        }
        if (source["_text"] !== undefined) {
            dest._text = fhir.FhirElement.FactoryCreate(source._text);
        }
        return dest;
    };
    /**
     * Check if the current CodeableConcept contains all required elements.
     */
    CodeableConcept.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a CodeableConcept from an object that MUST contain all required elements.
     */
    CodeableConcept.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CodeableConcept is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return CodeableConcept;
}(fhir.FhirElement));
export { CodeableConcept };
//# sourceMappingURL=CodeableConcept.js.map