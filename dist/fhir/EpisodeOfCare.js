// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export class EpisodeOfCareStatusHistory extends fhir.BackboneElement {
    /**
     * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.period = null;
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (this.period === undefined) {
            this.period = null;
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
    }
    /**
     * Check if the current EpisodeOfCareStatusHistory contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["period"] === undefined) {
            missingElements.push("period");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a EpisodeOfCareStatusHistory from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new EpisodeOfCareStatusHistory(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `EpisodeOfCareStatusHistory is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The list of diagnosis relevant to this episode of care.
 */
export class EpisodeOfCareDiagnosis extends fhir.BackboneElement {
    /**
     * Default constructor for EpisodeOfCareDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.condition = null;
        if (source["condition"]) {
            this.condition = new fhir.Reference(source.condition);
        }
        if (this.condition === undefined) {
            this.condition = null;
        }
        if (source["rank"]) {
            this.rank = source.rank;
        }
        if (source["_rank"]) {
            this._rank = new fhir.FhirElement(source._rank);
        }
        if (source["role"]) {
            this.role = new fhir.CodeableConcept(source.role);
        }
    }
    /**
     * Check if the current EpisodeOfCareDiagnosis contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["condition"] === undefined) {
            missingElements.push("condition");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a EpisodeOfCareDiagnosis from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new EpisodeOfCareDiagnosis(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `EpisodeOfCareDiagnosis is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export class EpisodeOfCare extends fhir.DomainResource {
    /**
     * Default constructor for EpisodeOfCare - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'EpisodeOfCare';
        if (source["account"]) {
            this.account = source.account.map((x) => new fhir.Reference(x));
        }
        if (source["careManager"]) {
            this.careManager = new fhir.Reference(source.careManager);
        }
        if (source["diagnosis"]) {
            this.diagnosis = source.diagnosis.map((x) => new fhir.EpisodeOfCareDiagnosis(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["managingOrganization"]) {
            this.managingOrganization = new fhir.Reference(source.managingOrganization);
        }
        this.patient = null;
        if (source["patient"]) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (this.patient === undefined) {
            this.patient = null;
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["referralRequest"]) {
            this.referralRequest = source.referralRequest.map((x) => new fhir.Reference(x));
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source["statusHistory"]) {
            this.statusHistory = source.statusHistory.map((x) => new fhir.EpisodeOfCareStatusHistory(x));
        }
        if (source["team"]) {
            this.team = source.team.map((x) => new fhir.Reference(x));
        }
        if (source["type"]) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Check if the current EpisodeOfCare contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["patient"] === undefined) {
            missingElements.push("patient");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a EpisodeOfCare from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new EpisodeOfCare(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `EpisodeOfCare is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the EpisodeOfCare.statusHistory.status field
 */
export var EpisodeOfCareStatusHistoryStatusEnum;
(function (EpisodeOfCareStatusHistoryStatusEnum) {
    EpisodeOfCareStatusHistoryStatusEnum["PLANNED"] = "planned";
    EpisodeOfCareStatusHistoryStatusEnum["WAITLIST"] = "waitlist";
    EpisodeOfCareStatusHistoryStatusEnum["ACTIVE"] = "active";
    EpisodeOfCareStatusHistoryStatusEnum["ONHOLD"] = "onhold";
    EpisodeOfCareStatusHistoryStatusEnum["FINISHED"] = "finished";
    EpisodeOfCareStatusHistoryStatusEnum["CANCELLED"] = "cancelled";
    EpisodeOfCareStatusHistoryStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(EpisodeOfCareStatusHistoryStatusEnum || (EpisodeOfCareStatusHistoryStatusEnum = {}));
/**
 * Code Values for the EpisodeOfCare.status field
 */
export var EpisodeOfCareStatusEnum;
(function (EpisodeOfCareStatusEnum) {
    EpisodeOfCareStatusEnum["PLANNED"] = "planned";
    EpisodeOfCareStatusEnum["WAITLIST"] = "waitlist";
    EpisodeOfCareStatusEnum["ACTIVE"] = "active";
    EpisodeOfCareStatusEnum["ONHOLD"] = "onhold";
    EpisodeOfCareStatusEnum["FINISHED"] = "finished";
    EpisodeOfCareStatusEnum["CANCELLED"] = "cancelled";
    EpisodeOfCareStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(EpisodeOfCareStatusEnum || (EpisodeOfCareStatusEnum = {}));
//# sourceMappingURL=EpisodeOfCare.js.map