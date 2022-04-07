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
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
var HealthcareServiceEligibility = /** @class */ (function (_super) {
    __extends(HealthcareServiceEligibility, _super);
    /**
     * Default constructor for HealthcareServiceEligibility from an object that MAY NOT contain all required elements.
     */
    function HealthcareServiceEligibility(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        return _this;
    }
    return HealthcareServiceEligibility;
}(fhirModels.BackboneElement));
export { HealthcareServiceEligibility };
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
var HealthcareServiceAvailableTime = /** @class */ (function (_super) {
    __extends(HealthcareServiceAvailableTime, _super);
    /**
     * Default constructor for HealthcareServiceAvailableTime from an object that MAY NOT contain all required elements.
     */
    function HealthcareServiceAvailableTime(source) {
        var _this = _super.call(this, source) || this;
        if (source["allDay"] !== undefined) {
            _this.allDay = source.allDay;
        }
        if (source["_allDay"] !== undefined) {
            _this._allDay = new fhirModels.Element(source._allDay);
        }
        if (source["availableEndTime"] !== undefined) {
            _this.availableEndTime = source.availableEndTime;
        }
        if (source["_availableEndTime"] !== undefined) {
            _this._availableEndTime = new fhirModels.Element(source._availableEndTime);
        }
        if (source["availableStartTime"] !== undefined) {
            _this.availableStartTime = source.availableStartTime;
        }
        if (source["_availableStartTime"] !== undefined) {
            _this._availableStartTime = new fhirModels.Element(source._availableStartTime);
        }
        if (source["daysOfWeek"] !== undefined) {
            _this.daysOfWeek = source.daysOfWeek.map(function (x) { return (x); });
        }
        if (source["_daysOfWeek"] !== undefined) {
            _this._daysOfWeek = source._daysOfWeek.map(function (x) { return new fhirModels.Element(x); });
        }
        return _this;
    }
    return HealthcareServiceAvailableTime;
}(fhirModels.BackboneElement));
export { HealthcareServiceAvailableTime };
/**
 * Code Values for the HealthcareService.availableTime.daysOfWeek field
 */
export var HealthcareServiceAvailableTimeDaysOfWeekEnum;
(function (HealthcareServiceAvailableTimeDaysOfWeekEnum) {
    HealthcareServiceAvailableTimeDaysOfWeekEnum["MON"] = "mon";
    HealthcareServiceAvailableTimeDaysOfWeekEnum["TUE"] = "tue";
    HealthcareServiceAvailableTimeDaysOfWeekEnum["WED"] = "wed";
    HealthcareServiceAvailableTimeDaysOfWeekEnum["THU"] = "thu";
    HealthcareServiceAvailableTimeDaysOfWeekEnum["FRI"] = "fri";
    HealthcareServiceAvailableTimeDaysOfWeekEnum["SAT"] = "sat";
    HealthcareServiceAvailableTimeDaysOfWeekEnum["SUN"] = "sun";
})(HealthcareServiceAvailableTimeDaysOfWeekEnum || (HealthcareServiceAvailableTimeDaysOfWeekEnum = {}));
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
var HealthcareServiceNotAvailable = /** @class */ (function (_super) {
    __extends(HealthcareServiceNotAvailable, _super);
    /**
     * Default constructor for HealthcareServiceNotAvailable from an object that MAY NOT contain all required elements.
     */
    function HealthcareServiceNotAvailable(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["during"] !== undefined) {
            _this.during = new fhirModels.Period(source.during);
        }
        return _this;
    }
    return HealthcareServiceNotAvailable;
}(fhirModels.BackboneElement));
export { HealthcareServiceNotAvailable };
/**
 * The details of a healthcare service available at a location.
 */
var HealthcareService = /** @class */ (function (_super) {
    __extends(HealthcareService, _super);
    /**
     * Default constructor for HealthcareService from an object that MAY NOT contain all required elements.
     */
    function HealthcareService(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "HealthcareService";
        if ((source['resourceType'] !== "HealthcareService") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a HealthcareService';
        }
        if (source["active"] !== undefined) {
            _this.active = source.active;
        }
        if (source["_active"] !== undefined) {
            _this._active = new fhirModels.Element(source._active);
        }
        if (source["appointmentRequired"] !== undefined) {
            _this.appointmentRequired = source.appointmentRequired;
        }
        if (source["_appointmentRequired"] !== undefined) {
            _this._appointmentRequired = new fhirModels.Element(source._appointmentRequired);
        }
        if (source["availabilityExceptions"] !== undefined) {
            _this.availabilityExceptions = source.availabilityExceptions;
        }
        if (source["_availabilityExceptions"] !== undefined) {
            _this._availabilityExceptions = new fhirModels.Element(source._availabilityExceptions);
        }
        if (source["availableTime"] !== undefined) {
            _this.availableTime = source.availableTime.map(function (x) { return new fhirModels.HealthcareServiceAvailableTime(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["characteristic"] !== undefined) {
            _this.characteristic = source.characteristic.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        if (source["communication"] !== undefined) {
            _this.communication = source.communication.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["coverageArea"] !== undefined) {
            _this.coverageArea = source.coverageArea.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["eligibility"] !== undefined) {
            _this.eligibility = source.eligibility.map(function (x) { return new fhirModels.HealthcareServiceEligibility(x); });
        }
        if (source["endpoint"] !== undefined) {
            _this.endpoint = source.endpoint.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["extraDetails"] !== undefined) {
            _this.extraDetails = source.extraDetails;
        }
        if (source["_extraDetails"] !== undefined) {
            _this._extraDetails = new fhirModels.Element(source._extraDetails);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["location"] !== undefined) {
            _this.location = source.location.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["notAvailable"] !== undefined) {
            _this.notAvailable = source.notAvailable.map(function (x) { return new fhirModels.HealthcareServiceNotAvailable(x); });
        }
        if (source["photo"] !== undefined) {
            _this.photo = new fhirModels.Attachment(source.photo);
        }
        if (source["program"] !== undefined) {
            _this.program = source.program.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["providedBy"] !== undefined) {
            _this.providedBy = new fhirModels.Reference(source.providedBy);
        }
        if (source["referralMethod"] !== undefined) {
            _this.referralMethod = source.referralMethod.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["serviceProvisionCode"] !== undefined) {
            _this.serviceProvisionCode = source.serviceProvisionCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["specialty"] !== undefined) {
            _this.specialty = source.specialty.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["telecom"] !== undefined) {
            _this.telecom = source.telecom.map(function (x) { return new fhirModels.ContactPoint(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = source.type.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        return _this;
    }
    return HealthcareService;
}(fhirModels.DomainResource));
export { HealthcareService };
