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
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels';
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
var CodeableConcept = /** @class */ (function (_super) {
    __extends(CodeableConcept, _super);
    /**
     * Default constructor for CodeableConcept from an object that MAY NOT contain all required elements.
     */
    function CodeableConcept(source) {
        var _this = _super.call(this, source) || this;
        if (source["coding"] !== undefined) {
            _this.coding = source.coding.map(function (x) { return new fhirModels.Coding(x); });
        }
        if (source["text"] !== undefined) {
            _this.text = source.text;
        }
        if (source["_text"] !== undefined) {
            _this._text = new fhirModels.Element(source._text);
        }
        return _this;
    }
    return CodeableConcept;
}(fhirModels.Element));
export { CodeableConcept };
