// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: HealthcareService
import * as fhir from '../fhir.js';
import { DaysOfWeekValueSet, } from '../fhirValueSets/DaysOfWeekValueSet.js';
import { ServiceCategoryValueSet, } from '../fhirValueSets/ServiceCategoryValueSet.js';
import { ServiceTypeValueSet, } from '../fhirValueSets/ServiceTypeValueSet.js';
import { C80PracticeCodesValueSet, } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { ServiceProvisionConditionsValueSet, } from '../fhirValueSets/ServiceProvisionConditionsValueSet.js';
import { ProgramValueSet, } from '../fhirValueSets/ProgramValueSet.js';
import { LanguagesValueSet, } from '../fhirValueSets/LanguagesValueSet.js';
import { ServiceReferralMethodValueSet, } from '../fhirValueSets/ServiceReferralMethodValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export class HealthcareServiceEligibility extends fhir.BackboneElement {
    /**
     * Default constructor for HealthcareServiceEligibility - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'HealthcareServiceEligibility';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['comment']) {
            this.comment = new fhir.FhirMarkdown({ value: source.comment });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export class HealthcareServiceAvailableTime extends fhir.BackboneElement {
    /**
     * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'HealthcareServiceAvailableTime';
        /**
         * Indicates which days of the week are available between the start and end Times.
         */
        this.daysOfWeek = [];
        if (source['daysOfWeek']) {
            this.daysOfWeek = source.daysOfWeek.map((x) => x);
        }
        if (source['allDay']) {
            this.allDay = new fhir.FhirBoolean({ value: source.allDay });
        }
        if (source['availableStartTime']) {
            this.availableStartTime = new fhir.FhirTime({ value: source.availableStartTime });
        }
        if (source['availableEndTime']) {
            this.availableEndTime = new fhir.FhirTime({ value: source.availableEndTime });
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
        var outcome = super.doModelValidation();
        if (this["allDay"]) {
            outcome.issue.push(...this.allDay.doModelValidation().issue);
        }
        if (this["availableStartTime"]) {
            outcome.issue.push(...this.availableStartTime.doModelValidation().issue);
        }
        if (this["availableEndTime"]) {
            outcome.issue.push(...this.availableEndTime.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export class HealthcareServiceNotAvailable extends fhir.BackboneElement {
    /**
     * Default constructor for HealthcareServiceNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'HealthcareServiceNotAvailable';
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        else {
            this.description = null;
        }
        if (source['during']) {
            this.during = new fhir.Period(source.during);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['description']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property description:fhir.FhirString fhir: HealthcareService.notAvailable.description:string", }));
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["during"]) {
            outcome.issue.push(...this.during.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The details of a healthcare service available at a location.
 */
export class HealthcareService extends fhir.DomainResource {
    /**
     * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'HealthcareService';
        /**
         * External identifiers for this item.
         */
        this.identifier = [];
        /**
         * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
         */
        this.category = [];
        /**
         * The specific type of service that may be delivered or performed.
         */
        this.type = [];
        /**
         * Collection of specialties handled by the service site. This is more of a medical term.
         */
        this.specialty = [];
        /**
         * The location(s) where this healthcare service may be provided.
         */
        this.location = [];
        /**
         * If this is empty, then refer to the location's contacts.
         */
        this.telecom = [];
        /**
         * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
         */
        this.coverageArea = [];
        /**
         * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
         */
        this.serviceProvisionCode = [];
        /**
         * Does this service have specific eligibility requirements that need to be met in order to use the service?
         */
        this.eligibility = [];
        /**
         * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ???.
         */
        this.program = [];
        /**
         * These could be such things as is wheelchair accessible.
         */
        this.characteristic = [];
        /**
         * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
         */
        this.communication = [];
        /**
         * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
         */
        this.referralMethod = [];
        /**
         * More detailed availability information may be provided in associated Schedule/Slot resources.
         */
        this.availableTime = [];
        /**
         * The HealthcareService is not available during this period of time due to the provided reason.
         */
        this.notAvailable = [];
        /**
         * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
         */
        this.endpoint = [];
        this.resourceType = 'HealthcareService';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['providedBy']) {
            this.providedBy = new fhir.Reference(source.providedBy);
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['specialty']) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.Reference(x));
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['extraDetails']) {
            this.extraDetails = new fhir.FhirMarkdown({ value: source.extraDetails });
        }
        if (source['photo']) {
            this.photo = new fhir.Attachment(source.photo);
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        if (source['coverageArea']) {
            this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x));
        }
        if (source['serviceProvisionCode']) {
            this.serviceProvisionCode = source.serviceProvisionCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['eligibility']) {
            this.eligibility = source.eligibility.map((x) => new fhir.HealthcareServiceEligibility(x));
        }
        if (source['program']) {
            this.program = source.program.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['characteristic']) {
            this.characteristic = source.characteristic.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['communication']) {
            this.communication = source.communication.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['referralMethod']) {
            this.referralMethod = source.referralMethod.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['appointmentRequired']) {
            this.appointmentRequired = new fhir.FhirBoolean({ value: source.appointmentRequired });
        }
        if (source['availableTime']) {
            this.availableTime = source.availableTime.map((x) => new fhir.HealthcareServiceAvailableTime(x));
        }
        if (source['notAvailable']) {
            this.notAvailable = source.notAvailable.map((x) => new fhir.HealthcareServiceNotAvailable(x));
        }
        if (source['availabilityExceptions']) {
            this.availabilityExceptions = new fhir.FhirString({ value: source.availabilityExceptions });
        }
        if (source['endpoint']) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet() {
        return ServiceCategoryValueSet;
    }
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet() {
        return ServiceTypeValueSet;
    }
    /**
     * Preferred-bound Value Set for specialty
     */
    static specialtyPreferredValueSet() {
        return C80PracticeCodesValueSet;
    }
    /**
     * Example-bound Value Set for serviceProvisionCode
     */
    static serviceProvisionCodeExampleValueSet() {
        return ServiceProvisionConditionsValueSet;
    }
    /**
     * Example-bound Value Set for program
     */
    static programExampleValueSet() {
        return ProgramValueSet;
    }
    /**
     * Preferred-bound Value Set for communication
     */
    static communicationPreferredValueSet() {
        return LanguagesValueSet;
    }
    /**
     * Example-bound Value Set for referralMethod
     */
    static referralMethodExampleValueSet() {
        return ServiceReferralMethodValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'HealthcareService' fhir: HealthcareService.resourceType:'HealthcareService'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["active"]) {
            outcome.issue.push(...this.active.doModelValidation().issue);
        }
        if (this["providedBy"]) {
            outcome.issue.push(...this.providedBy.doModelValidation().issue);
        }
        if (this["category"]) {
            this.category.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["type"]) {
            this.type.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["specialty"]) {
            this.specialty.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["location"]) {
            this.location.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
        }
        if (this["extraDetails"]) {
            outcome.issue.push(...this.extraDetails.doModelValidation().issue);
        }
        if (this["photo"]) {
            outcome.issue.push(...this.photo.doModelValidation().issue);
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["coverageArea"]) {
            this.coverageArea.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["serviceProvisionCode"]) {
            this.serviceProvisionCode.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["eligibility"]) {
            this.eligibility.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["program"]) {
            this.program.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["characteristic"]) {
            this.characteristic.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["communication"]) {
            this.communication.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["referralMethod"]) {
            this.referralMethod.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["appointmentRequired"]) {
            outcome.issue.push(...this.appointmentRequired.doModelValidation().issue);
        }
        if (this["availableTime"]) {
            this.availableTime.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["notAvailable"]) {
            this.notAvailable.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["availabilityExceptions"]) {
            outcome.issue.push(...this.availabilityExceptions.doModelValidation().issue);
        }
        if (this["endpoint"]) {
            this.endpoint.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=HealthcareService.js.map