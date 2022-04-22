// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: PractitionerRole
import * as fhir from '../fhir.js';
import { DaysOfWeekValueSet } from '../fhirValueSets/DaysOfWeekValueSet.js';
import { PractitionerRoleValueSet } from '../fhirValueSets/PractitionerRoleValueSet.js';
import { C80PracticeCodesValueSet } from '../fhirValueSets/C80PracticeCodesValueSet.js';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export class PractitionerRoleAvailableTime extends fhir.BackboneElement {
    /**
     * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['daysOfWeek']) {
            this.daysOfWeek = source.daysOfWeek.map((x) => (x));
        }
        if (source['_daysOfWeek']) {
            this._daysOfWeek = source._daysOfWeek.map((x) => new fhir.FhirElement(x));
        }
        if (source['allDay']) {
            this.allDay = source.allDay;
        }
        if (source['_allDay']) {
            this._allDay = new fhir.FhirElement(source._allDay);
        }
        if (source['availableStartTime']) {
            this.availableStartTime = source.availableStartTime;
        }
        if (source['_availableStartTime']) {
            this._availableStartTime = new fhir.FhirElement(source._availableStartTime);
        }
        if (source['availableEndTime']) {
            this.availableEndTime = source.availableEndTime;
        }
        if (source['_availableEndTime']) {
            this._availableEndTime = new fhir.FhirElement(source._availableEndTime);
        }
    }
    /**
     * Required-bound Value Set for daysOfWeek
     */
    static daysOfWeekRequiredValueSet() {
        return DaysOfWeekValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_daysOfWeek"]) {
            this._daysOfWeek.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_allDay"]) {
            results.push(...this._allDay.doModelValidation());
        }
        if (this["_availableStartTime"]) {
            results.push(...this._availableStartTime.doModelValidation());
        }
        if (this["_availableEndTime"]) {
            results.push(...this._availableEndTime.doModelValidation());
        }
        return results;
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
        if (source['description']) {
            this.description = source.description;
        }
        else {
            this.description = null;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['during']) {
            this.during = new fhir.Period(source.during);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["description"]) {
            results.push(["description", 'Missing required element: PractitionerRole.notAvailable.description']);
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["during"]) {
            results.push(...this.during.doModelValidation());
        }
        return results;
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
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['active']) {
            this.active = source.active;
        }
        if (source['_active']) {
            this._active = new fhir.FhirElement(source._active);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['practitioner']) {
            this.practitioner = new fhir.Reference(source.practitioner);
        }
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.Reference(x));
        }
        if (source['healthcareService']) {
            this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x));
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        if (source['availableTime']) {
            this.availableTime = source.availableTime.map((x) => new fhir.PractitionerRoleAvailableTime(x));
        }
        if (source['notAvailable']) {
            this.notAvailable = source.notAvailable.map((x) => new fhir.PractitionerRoleNotAvailable(x));
        }
        if (source['availabilityExceptions']) {
            this.availabilityExceptions = source.availabilityExceptions;
        }
        if (source['_availabilityExceptions']) {
            this._availabilityExceptions = new fhir.FhirElement(source._availabilityExceptions);
        }
        if (source['endpoint']) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return PractitionerRoleValueSet;
    }
    /**
     * Preferred-bound Value Set for specialty
     */
    static specialtyPreferredValueSet() {
        return C80PracticeCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: PractitionerRole.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_active"]) {
            results.push(...this._active.doModelValidation());
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        if (this["practitioner"]) {
            results.push(...this.practitioner.doModelValidation());
        }
        if (this["organization"]) {
            results.push(...this.organization.doModelValidation());
        }
        if (this["code"]) {
            this.code.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["specialty"]) {
            this.specialty.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["location"]) {
            this.location.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["healthcareService"]) {
            this.healthcareService.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["availableTime"]) {
            this.availableTime.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["notAvailable"]) {
            this.notAvailable.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_availabilityExceptions"]) {
            results.push(...this._availabilityExceptions.doModelValidation());
        }
        if (this["endpoint"]) {
            this.endpoint.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=PractitionerRole.js.map