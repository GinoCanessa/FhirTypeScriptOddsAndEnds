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
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
var AppointmentResponse = /** @class */ (function (_super) {
    __extends(AppointmentResponse, _super);
    /**
     * Default constructor for AppointmentResponse from an object that MAY NOT contain all required elements.
     */
    function AppointmentResponse(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "AppointmentResponse";
        if ((source['resourceType'] !== "AppointmentResponse") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a AppointmentResponse';
        }
        if (source["actor"] !== undefined) {
            _this.actor = new fhirModels.Reference(source.actor);
        }
        {
            _this.appointment = new fhirModels.Reference(source.appointment);
        }
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        if (source["end"] !== undefined) {
            _this.end = source.end;
        }
        if (source["_end"] !== undefined) {
            _this._end = new fhirModels.Element(source._end);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        {
            _this.participantStatus = source.participantStatus;
        }
        if (source["_participantStatus"] !== undefined) {
            _this._participantStatus = new fhirModels.Element(source._participantStatus);
        }
        if (source["participantType"] !== undefined) {
            _this.participantType = source.participantType.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["start"] !== undefined) {
            _this.start = source.start;
        }
        if (source["_start"] !== undefined) {
            _this._start = new fhirModels.Element(source._start);
        }
        return _this;
    }
    return AppointmentResponse;
}(fhirModels.DomainResource));
export { AppointmentResponse };
/**
 * Code Values for the AppointmentResponse.participantStatus field
 */
export var AppointmentResponseParticipantStatusEnum;
(function (AppointmentResponseParticipantStatusEnum) {
    AppointmentResponseParticipantStatusEnum["ACCEPTED"] = "accepted";
    AppointmentResponseParticipantStatusEnum["DECLINED"] = "declined";
    AppointmentResponseParticipantStatusEnum["TENTATIVE"] = "tentative";
    AppointmentResponseParticipantStatusEnum["NEEDS_ACTION"] = "needs-action";
})(AppointmentResponseParticipantStatusEnum || (AppointmentResponseParticipantStatusEnum = {}));
