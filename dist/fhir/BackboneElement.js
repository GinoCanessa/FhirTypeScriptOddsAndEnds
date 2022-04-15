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
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
var BackboneElement = /** @class */ (function (_super) {
    __extends(BackboneElement, _super);
    /**
     * Default constructor for BackboneElement - initializes required elements to null.
     */
    function BackboneElement() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a BackboneElement from an object that MAY NOT contain all required elements.
     */
    BackboneElement.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["modifierExtension"] !== undefined) {
            dest.modifierExtension = source.modifierExtension.map(function (x) { return fhir.Extension.FactoryCreate(x); });
        }
        return dest;
    };
    /**
     * Check if the current BackboneElement contains all required elements.
     */
    BackboneElement.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a BackboneElement from an object that MUST contain all required elements.
     */
    BackboneElement.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "BackboneElement is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return BackboneElement;
}(fhir.FhirElement));
export { BackboneElement };
//# sourceMappingURL=BackboneElement.js.map