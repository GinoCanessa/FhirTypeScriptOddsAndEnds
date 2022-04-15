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
 * A reference to a code defined by a terminology system.
 */
var Coding = /** @class */ (function (_super) {
    __extends(Coding, _super);
    /**
     * Default constructor for Coding - initializes required elements to null.
     */
    function Coding() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a Coding from an object that MAY NOT contain all required elements.
     */
    Coding.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["code"] !== undefined) {
            dest.code = source.code;
        }
        if (source["_code"] !== undefined) {
            dest._code = fhir.FhirElement.FactoryCreate(source._code);
        }
        if (source["display"] !== undefined) {
            dest.display = source.display;
        }
        if (source["_display"] !== undefined) {
            dest._display = fhir.FhirElement.FactoryCreate(source._display);
        }
        if (source["system"] !== undefined) {
            dest.system = source.system;
        }
        if (source["_system"] !== undefined) {
            dest._system = fhir.FhirElement.FactoryCreate(source._system);
        }
        if (source["userSelected"] !== undefined) {
            dest.userSelected = source.userSelected;
        }
        if (source["_userSelected"] !== undefined) {
            dest._userSelected = fhir.FhirElement.FactoryCreate(source._userSelected);
        }
        if (source["version"] !== undefined) {
            dest.version = source.version;
        }
        if (source["_version"] !== undefined) {
            dest._version = fhir.FhirElement.FactoryCreate(source._version);
        }
        return dest;
    };
    /**
     * Check if the current Coding contains all required elements.
     */
    Coding.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a Coding from an object that MUST contain all required elements.
     */
    Coding.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Coding is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return Coding;
}(fhir.FhirElement));
export { Coding };
//# sourceMappingURL=Coding.js.map