// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Authorization in areas within a country.
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement {
    /**
     * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["country"]) {
            this.country = new fhir.CodeableConcept(source.country);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["legalStatusOfSupply"]) {
            this.legalStatusOfSupply = new fhir.CodeableConcept(source.legalStatusOfSupply);
        }
        if (source["validityPeriod"]) {
            this.validityPeriod = new fhir.Period(source.validityPeriod);
        }
    }
    /**
     * Check if the current MedicinalProductAuthorizationJurisdictionalAuthorization contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicinalProductAuthorizationJurisdictionalAuthorization from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicinalProductAuthorizationJurisdictionalAuthorization(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductAuthorizationJurisdictionalAuthorization is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export class MedicinalProductAuthorizationProcedure extends fhir.BackboneElement {
    /**
     * Default constructor for MedicinalProductAuthorizationProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["application"]) {
            this.application = source.application.map((x) => new fhir.MedicinalProductAuthorizationProcedure(x));
        }
        if (source["datePeriod"]) {
            this.datePeriod = new fhir.Period(source.datePeriod);
        }
        if (source["dateDateTime"]) {
            this.dateDateTime = source.dateDateTime;
        }
        if (source["_dateDateTime"]) {
            this._dateDateTime = new fhir.FhirElement(source._dateDateTime);
        }
        if (source["identifier"]) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
    }
    /**
     * Check if the current MedicinalProductAuthorizationProcedure contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicinalProductAuthorizationProcedure from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicinalProductAuthorizationProcedure(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductAuthorizationProcedure is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The regulatory authorization of a medicinal product.
 */
export class MedicinalProductAuthorization extends fhir.DomainResource {
    /**
     * Default constructor for MedicinalProductAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MedicinalProductAuthorization';
        if (source["country"]) {
            this.country = source.country.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["dataExclusivityPeriod"]) {
            this.dataExclusivityPeriod = new fhir.Period(source.dataExclusivityPeriod);
        }
        if (source["dateOfFirstAuthorization"]) {
            this.dateOfFirstAuthorization = source.dateOfFirstAuthorization;
        }
        if (source["_dateOfFirstAuthorization"]) {
            this._dateOfFirstAuthorization = new fhir.FhirElement(source._dateOfFirstAuthorization);
        }
        if (source["holder"]) {
            this.holder = new fhir.Reference(source.holder);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["internationalBirthDate"]) {
            this.internationalBirthDate = source.internationalBirthDate;
        }
        if (source["_internationalBirthDate"]) {
            this._internationalBirthDate = new fhir.FhirElement(source._internationalBirthDate);
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["jurisdictionalAuthorization"]) {
            this.jurisdictionalAuthorization = source.jurisdictionalAuthorization.map((x) => new fhir.MedicinalProductAuthorizationJurisdictionalAuthorization(x));
        }
        if (source["legalBasis"]) {
            this.legalBasis = new fhir.CodeableConcept(source.legalBasis);
        }
        if (source["procedure"]) {
            this.procedure = new fhir.MedicinalProductAuthorizationProcedure(source.procedure);
        }
        if (source["regulator"]) {
            this.regulator = new fhir.Reference(source.regulator);
        }
        if (source["restoreDate"]) {
            this.restoreDate = source.restoreDate;
        }
        if (source["_restoreDate"]) {
            this._restoreDate = new fhir.FhirElement(source._restoreDate);
        }
        if (source["status"]) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source["statusDate"]) {
            this.statusDate = source.statusDate;
        }
        if (source["_statusDate"]) {
            this._statusDate = new fhir.FhirElement(source._statusDate);
        }
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source["validityPeriod"]) {
            this.validityPeriod = new fhir.Period(source.validityPeriod);
        }
    }
    /**
     * Check if the current MedicinalProductAuthorization contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicinalProductAuthorization from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicinalProductAuthorization(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductAuthorization is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=MedicinalProductAuthorization.js.map