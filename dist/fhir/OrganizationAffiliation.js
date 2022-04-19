// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export class OrganizationAffiliation extends fhir.DomainResource {
    /**
     * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'OrganizationAffiliation';
        if (source["active"]) {
            this.active = source.active;
        }
        if (source["_active"]) {
            this._active = new fhir.FhirElement(source._active);
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
        if (source["network"]) {
            this.network = source.network.map((x) => new fhir.Reference(x));
        }
        if (source["organization"]) {
            this.organization = new fhir.Reference(source.organization);
        }
        if (source["participatingOrganization"]) {
            this.participatingOrganization = new fhir.Reference(source.participatingOrganization);
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["specialty"]) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["telecom"]) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
    }
    /**
     * Check if the current OrganizationAffiliation contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a OrganizationAffiliation from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new OrganizationAffiliation(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `OrganizationAffiliation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=OrganizationAffiliation.js.map