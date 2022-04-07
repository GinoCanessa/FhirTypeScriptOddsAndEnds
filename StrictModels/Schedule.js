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
 * A container for slots of time that may be available for booking appointments.
 */
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    /**
     * Default constructor for Schedule from an object that MAY NOT contain all required elements.
     */
    function Schedule(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Schedule";
        if ((source['resourceType'] !== "Schedule") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Schedule';
        }
        if (source["active"] !== undefined) {
            _this.active = source.active;
        }
        if (source["_active"] !== undefined) {
            _this._active = new fhirModels.Element(source._active);
        }
        {
            _this.actor = source.actor.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["planningHorizon"] !== undefined) {
            _this.planningHorizon = new fhirModels.Period(source.planningHorizon);
        }
        if (source["serviceCategory"] !== undefined) {
            _this.serviceCategory = source.serviceCategory.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["serviceType"] !== undefined) {
            _this.serviceType = source.serviceType.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["specialty"] !== undefined) {
            _this.specialty = source.specialty.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        return _this;
    }
    return Schedule;
}(fhirModels.DomainResource));
export { Schedule };
