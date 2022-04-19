// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export class PractitionerRoleAvailableTime extends fhir.BackboneElement {
    /**
     * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
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
     * Check if the current PractitionerRoleAvailableTime contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a PractitionerRoleAvailableTime from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new PractitionerRoleAvailableTime(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `PractitionerRoleAvailableTime is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export class PractitionerRoleNotAvailable extends fhir.BackboneElement {
    /**
     * Default constructor for PractitionerRoleNotAvailable - initializes any required elements to null if a value is not provided.
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
     * Check if the current PractitionerRoleNotAvailable contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["description"] === undefined) {
            missingElements.push("description");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a PractitionerRoleNotAvailable from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new PractitionerRoleNotAvailable(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `PractitionerRoleNotAvailable is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export class PractitionerRole extends fhir.DomainResource {
    /**
     * Default constructor for PractitionerRole - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'PractitionerRole';
        if (source["active"]) {
            this.active = source.active;
        }
        if (source["_active"]) {
            this._active = new fhir.FhirElement(source._active);
        }
        if (source["availabilityExceptions"]) {
            this.availabilityExceptions = source.availabilityExceptions;
        }
        if (source["_availabilityExceptions"]) {
            this._availabilityExceptions = new fhir.FhirElement(source._availabilityExceptions);
        }
        if (source["availableTime"]) {
            this.availableTime = source.availableTime.map((x) => new fhir.PractitionerRoleAvailableTime(x));
        }
        if (source["code"]) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["endpoint"]) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
        if (source["healthcareService"]) {
            this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["location"]) {
            this.location = source.location.map((x) => new fhir.Reference(x));
        }
        if (source["notAvailable"]) {
            this.notAvailable = source.notAvailable.map((x) => new fhir.PractitionerRoleNotAvailable(x));
        }
        if (source["organization"]) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["practitioner"]) {
            this.practitioner = new fhir.Reference(source.practitioner);
        }
        if (source["specialty"]) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["telecom"]) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
    }
    /**
     * Check if the current PractitionerRole contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a PractitionerRole from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new PractitionerRole(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `PractitionerRole is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the PractitionerRole.availableTime.daysOfWeek field
 */
export var PractitionerRoleAvailableTimeDaysOfWeekEnum;
(function (PractitionerRoleAvailableTimeDaysOfWeekEnum) {
    PractitionerRoleAvailableTimeDaysOfWeekEnum["MON"] = "mon";
    PractitionerRoleAvailableTimeDaysOfWeekEnum["TUE"] = "tue";
    PractitionerRoleAvailableTimeDaysOfWeekEnum["WED"] = "wed";
    PractitionerRoleAvailableTimeDaysOfWeekEnum["THU"] = "thu";
    PractitionerRoleAvailableTimeDaysOfWeekEnum["FRI"] = "fri";
    PractitionerRoleAvailableTimeDaysOfWeekEnum["SAT"] = "sat";
    PractitionerRoleAvailableTimeDaysOfWeekEnum["SUN"] = "sun";
})(PractitionerRoleAvailableTimeDaysOfWeekEnum || (PractitionerRoleAvailableTimeDaysOfWeekEnum = {}));
//# sourceMappingURL=PractitionerRole.js.map