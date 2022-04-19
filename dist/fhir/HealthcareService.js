// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export class HealthcareServiceEligibility extends fhir.BackboneElement {
    /**
     * Default constructor for HealthcareServiceEligibility - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["comment"]) {
            this.comment = source.comment;
        }
        if (source["_comment"]) {
            this._comment = new fhir.FhirElement(source._comment);
        }
    }
    /**
     * Check if the current HealthcareServiceEligibility contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a HealthcareServiceEligibility from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new HealthcareServiceEligibility(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `HealthcareServiceEligibility is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export class HealthcareServiceAvailableTime extends fhir.BackboneElement {
    /**
     * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["allDay"]) {
            this.allDay = source.allDay;
        }
        if (source["_allDay"]) {
            this._allDay = new fhir.FhirElement(source._allDay);
        }
        if (source["availableEndTime"]) {
            this.availableEndTime = source.availableEndTime;
        }
        if (source["_availableEndTime"]) {
            this._availableEndTime = new fhir.FhirElement(source._availableEndTime);
        }
        if (source["availableStartTime"]) {
            this.availableStartTime = source.availableStartTime;
        }
        if (source["_availableStartTime"]) {
            this._availableStartTime = new fhir.FhirElement(source._availableStartTime);
        }
        if (source["daysOfWeek"]) {
            this.daysOfWeek = source.daysOfWeek.map((x) => (x));
        }
        if (source["_daysOfWeek"]) {
            this._daysOfWeek = source._daysOfWeek.map((x) => new fhir.FhirElement(x));
        }
    }
    /**
     * Check if the current HealthcareServiceAvailableTime contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a HealthcareServiceAvailableTime from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new HealthcareServiceAvailableTime(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `HealthcareServiceAvailableTime is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export class HealthcareServiceNotAvailable extends fhir.BackboneElement {
    /**
     * Default constructor for HealthcareServiceNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.description = null;
        if (source["description"]) {
            this.description = source.description;
        }
        if (this.description === undefined) {
            this.description = null;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["during"]) {
            this.during = new fhir.Period(source.during);
        }
    }
    /**
     * Check if the current HealthcareServiceNotAvailable contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["description"] === undefined) {
            missingElements.push("description");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a HealthcareServiceNotAvailable from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new HealthcareServiceNotAvailable(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `HealthcareServiceNotAvailable is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The details of a healthcare service available at a location.
 */
export class HealthcareService extends fhir.DomainResource {
    /**
     * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'HealthcareService';
        if (source["active"]) {
            this.active = source.active;
        }
        if (source["_active"]) {
            this._active = new fhir.FhirElement(source._active);
        }
        if (source["appointmentRequired"]) {
            this.appointmentRequired = source.appointmentRequired;
        }
        if (source["_appointmentRequired"]) {
            this._appointmentRequired = new fhir.FhirElement(source._appointmentRequired);
        }
        if (source["availabilityExceptions"]) {
            this.availabilityExceptions = source.availabilityExceptions;
        }
        if (source["_availabilityExceptions"]) {
            this._availabilityExceptions = new fhir.FhirElement(source._availabilityExceptions);
        }
        if (source["availableTime"]) {
            this.availableTime = source.availableTime.map((x) => new fhir.HealthcareServiceAvailableTime(x));
        }
        if (source["category"]) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["characteristic"]) {
            this.characteristic = source.characteristic.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["comment"]) {
            this.comment = source.comment;
        }
        if (source["_comment"]) {
            this._comment = new fhir.FhirElement(source._comment);
        }
        if (source["communication"]) {
            this.communication = source.communication.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["coverageArea"]) {
            this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x));
        }
        if (source["eligibility"]) {
            this.eligibility = source.eligibility.map((x) => new fhir.HealthcareServiceEligibility(x));
        }
        if (source["endpoint"]) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
        if (source["extraDetails"]) {
            this.extraDetails = source.extraDetails;
        }
        if (source["_extraDetails"]) {
            this._extraDetails = new fhir.FhirElement(source._extraDetails);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["location"]) {
            this.location = source.location.map((x) => new fhir.Reference(x));
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["notAvailable"]) {
            this.notAvailable = source.notAvailable.map((x) => new fhir.HealthcareServiceNotAvailable(x));
        }
        if (source["photo"]) {
            this.photo = new fhir.Attachment(source.photo);
        }
        if (source["program"]) {
            this.program = source.program.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["providedBy"]) {
            this.providedBy = new fhir.Reference(source.providedBy);
        }
        if (source["referralMethod"]) {
            this.referralMethod = source.referralMethod.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["serviceProvisionCode"]) {
            this.serviceProvisionCode = source.serviceProvisionCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["specialty"]) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["telecom"]) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        if (source["type"]) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Check if the current HealthcareService contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a HealthcareService from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new HealthcareService(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `HealthcareService is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
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
//# sourceMappingURL=HealthcareService.js.map