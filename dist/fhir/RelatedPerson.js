// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class RelatedPersonCommunication extends fhir.BackboneElement {
    /**
     * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.language = null;
        if (source["language"]) {
            this.language = new fhir.CodeableConcept(source.language);
        }
        if (this.language === undefined) {
            this.language = null;
        }
        if (source["preferred"]) {
            this.preferred = source.preferred;
        }
        if (source["_preferred"]) {
            this._preferred = new fhir.FhirElement(source._preferred);
        }
    }
    /**
     * Check if the current RelatedPersonCommunication contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["language"] === undefined) {
            missingElements.push("language");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RelatedPersonCommunication from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RelatedPersonCommunication(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RelatedPersonCommunication is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export class RelatedPerson extends fhir.DomainResource {
    /**
     * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'RelatedPerson';
        if (source["active"]) {
            this.active = source.active;
        }
        if (source["_active"]) {
            this._active = new fhir.FhirElement(source._active);
        }
        if (source["address"]) {
            this.address = source.address.map((x) => new fhir.Address(x));
        }
        if (source["birthDate"]) {
            this.birthDate = source.birthDate;
        }
        if (source["_birthDate"]) {
            this._birthDate = new fhir.FhirElement(source._birthDate);
        }
        if (source["communication"]) {
            this.communication = source.communication.map((x) => new fhir.RelatedPersonCommunication(x));
        }
        if (source["gender"]) {
            this.gender = source.gender;
        }
        if (source["_gender"]) {
            this._gender = new fhir.FhirElement(source._gender);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["name"]) {
            this.name = source.name.map((x) => new fhir.HumanName(x));
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
        if (source["photo"]) {
            this.photo = source.photo.map((x) => new fhir.Attachment(x));
        }
        if (source["relationship"]) {
            this.relationship = source.relationship.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["telecom"]) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
    }
    /**
     * Check if the current RelatedPerson contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["patient"] === undefined) {
            missingElements.push("patient");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RelatedPerson from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RelatedPerson(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RelatedPerson is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the RelatedPerson.gender field
 */
export var RelatedPersonGenderEnum;
(function (RelatedPersonGenderEnum) {
    RelatedPersonGenderEnum["MALE"] = "male";
    RelatedPersonGenderEnum["FEMALE"] = "female";
    RelatedPersonGenderEnum["OTHER"] = "other";
    RelatedPersonGenderEnum["UNKNOWN"] = "unknown";
})(RelatedPersonGenderEnum || (RelatedPersonGenderEnum = {}));
//# sourceMappingURL=RelatedPerson.js.map