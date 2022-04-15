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
 * A time period defined by a start and end date and optionally time.
 */
var Period = /** @class */ (function (_super) {
    __extends(Period, _super);
    /**
     * Default constructor for Period - initializes required elements to null.
     */
    function Period() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a Period from an object that MAY NOT contain all required elements.
     */
    Period.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["end"] !== undefined) {
            dest.end = source.end;
        }
        if (source["_end"] !== undefined) {
            dest._end = fhir.FhirElement.FactoryCreate(source._end);
        }
        if (source["start"] !== undefined) {
            dest.start = source.start;
        }
        if (source["_start"] !== undefined) {
            dest._start = fhir.FhirElement.FactoryCreate(source._start);
        }
        return dest;
    };
    /**
     * Check if the current Period contains all required elements.
     */
    Period.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a Period from an object that MUST contain all required elements.
     */
    Period.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Period is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return Period;
}(fhir.FhirElement));
export { Period };
//# sourceMappingURL=Period.js.map