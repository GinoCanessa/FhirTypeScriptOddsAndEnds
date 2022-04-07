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
 * A slot of time on a schedule that may be available for booking appointments.
 */
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    /**
     * Default constructor for Slot from an object that MAY NOT contain all required elements.
     */
    function Slot(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Slot";
        if ((source['resourceType'] !== "Slot") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Slot';
        }
        if (source["appointmentType"] !== undefined) {
            _this.appointmentType = new fhirModels.CodeableConcept(source.appointmentType);
        }
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        {
            _this.end = source.end;
        }
        if (source["_end"] !== undefined) {
            _this._end = new fhirModels.Element(source._end);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["overbooked"] !== undefined) {
            _this.overbooked = source.overbooked;
        }
        if (source["_overbooked"] !== undefined) {
            _this._overbooked = new fhirModels.Element(source._overbooked);
        }
        {
            _this.schedule = new fhirModels.Reference(source.schedule);
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
        {
            _this.start = source.start;
        }
        if (source["_start"] !== undefined) {
            _this._start = new fhirModels.Element(source._start);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    return Slot;
}(fhirModels.DomainResource));
export { Slot };
/**
 * Code Values for the Slot.status field
 */
export var SlotStatusEnum;
(function (SlotStatusEnum) {
    SlotStatusEnum["BUSY"] = "busy";
    SlotStatusEnum["FREE"] = "free";
    SlotStatusEnum["BUSY_UNAVAILABLE"] = "busy-unavailable";
    SlotStatusEnum["BUSY_TENTATIVE"] = "busy-tentative";
    SlotStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(SlotStatusEnum || (SlotStatusEnum = {}));