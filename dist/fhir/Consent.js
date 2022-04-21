// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Consent
import * as fhir from '../fhir.js';
import { SecurityRoleTypeValueSet } from '../fhirValueSets/SecurityRoleTypeValueSet.js';
import { ConsentDataMeaningValueSet } from '../fhirValueSets/ConsentDataMeaningValueSet.js';
import { ConsentProvisionTypeValueSet } from '../fhirValueSets/ConsentProvisionTypeValueSet.js';
import { ConsentActionValueSet } from '../fhirValueSets/ConsentActionValueSet.js';
import { SecurityLabelsValueSet } from '../fhirValueSets/SecurityLabelsValueSet.js';
import { V3PurposeOfUseValueSet } from '../fhirValueSets/V3PurposeOfUseValueSet.js';
import { ConsentContentClassValueSet } from '../fhirValueSets/ConsentContentClassValueSet.js';
import { ConsentContentCodeValueSet } from '../fhirValueSets/ConsentContentCodeValueSet.js';
import { ConsentStateCodesValueSet } from '../fhirValueSets/ConsentStateCodesValueSet.js';
import { ConsentScopeValueSet } from '../fhirValueSets/ConsentScopeValueSet.js';
import { ConsentCategoryValueSet } from '../fhirValueSets/ConsentCategoryValueSet.js';
import { ConsentPolicyValueSet } from '../fhirValueSets/ConsentPolicyValueSet.js';
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export class ConsentPolicy extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['authority']) {
            this.authority = source.authority;
        }
        if (source['_authority']) {
            this._authority = new fhir.FhirElement(source._authority);
        }
        if (source['uri']) {
            this.uri = source.uri;
        }
        if (source['_uri']) {
            this._uri = new fhir.FhirElement(source._uri);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_authority"]) {
            results.push(...this._authority.doModelValidation());
        }
        if (this["_uri"]) {
            results.push(...this._uri.doModelValidation());
        }
        return results;
    }
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export class ConsentVerification extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['verified']) {
            this.verified = source.verified;
        }
        else {
            this.verified = null;
        }
        if (source['_verified']) {
            this._verified = new fhir.FhirElement(source._verified);
        }
        if (source['verifiedWith']) {
            this.verifiedWith = new fhir.Reference(source.verifiedWith);
        }
        if (source['verificationDate']) {
            this.verificationDate = source.verificationDate;
        }
        if (source['_verificationDate']) {
            this._verificationDate = new fhir.FhirElement(source._verificationDate);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["verified"]) {
            results.push(["verified", 'Missing required element: Consent.verification.verified']);
        }
        if (this["_verified"]) {
            results.push(...this._verified.doModelValidation());
        }
        if (this["verifiedWith"]) {
            results.push(...this.verifiedWith.doModelValidation());
        }
        if (this["_verificationDate"]) {
            results.push(...this._verificationDate.doModelValidation());
        }
        return results;
    }
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export class ConsentProvisionActor extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['role']) {
            this.role = new fhir.CodeableConcept(source.role);
        }
        else {
            this.role = null;
        }
        if (source['reference']) {
            this.reference = new fhir.Reference(source.reference);
        }
        else {
            this.reference = null;
        }
    }
    /**
     * Extensible-bound Value Set for role
     */
    roleExtensibleValueSet() {
        return SecurityRoleTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["role"]) {
            results.push(["role", 'Missing required element: Consent.provision.actor.role']);
        }
        if (this["role"]) {
            results.push(...this.role.doModelValidation());
        }
        if (!this["reference"]) {
            results.push(["reference", 'Missing required element: Consent.provision.actor.reference']);
        }
        if (this["reference"]) {
            results.push(...this.reference.doModelValidation());
        }
        return results;
    }
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export class ConsentProvisionData extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['meaning']) {
            this.meaning = source.meaning;
        }
        else {
            this.meaning = null;
        }
        if (source['_meaning']) {
            this._meaning = new fhir.FhirElement(source._meaning);
        }
        if (source['reference']) {
            this.reference = new fhir.Reference(source.reference);
        }
        else {
            this.reference = null;
        }
    }
    /**
     * Required-bound Value Set for meaning
     */
    meaningRequiredValueSet() {
        return ConsentDataMeaningValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["meaning"]) {
            results.push(["meaning", 'Missing required element: Consent.provision.data.meaning']);
        }
        if (this["_meaning"]) {
            results.push(...this._meaning.doModelValidation());
        }
        if (!this["reference"]) {
            results.push(["reference", 'Missing required element: Consent.provision.data.reference']);
        }
        if (this["reference"]) {
            results.push(...this.reference.doModelValidation());
        }
        return results;
    }
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export class ConsentProvision extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['type']) {
            this.type = source.type;
        }
        if (source['_type']) {
            this._type = new fhir.FhirElement(source._type);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['actor']) {
            this.actor = source.actor.map((x) => new fhir.ConsentProvisionActor(x));
        }
        if (source['action']) {
            this.action = source.action.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['securityLabel']) {
            this.securityLabel = source.securityLabel.map((x) => new fhir.Coding(x));
        }
        if (source['purpose']) {
            this.purpose = source.purpose.map((x) => new fhir.Coding(x));
        }
        if (source['class']) {
            this.class = source.class.map((x) => new fhir.Coding(x));
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['dataPeriod']) {
            this.dataPeriod = new fhir.Period(source.dataPeriod);
        }
        if (source['data']) {
            this.data = source.data.map((x) => new fhir.ConsentProvisionData(x));
        }
        if (source['provision']) {
            this.provision = source.provision.map((x) => new fhir.ConsentProvision(x));
        }
    }
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet() {
        return ConsentProvisionTypeValueSet;
    }
    /**
     * Example-bound Value Set for action
     */
    actionExampleValueSet() {
        return ConsentActionValueSet;
    }
    /**
     * Extensible-bound Value Set for securityLabel
     */
    securityLabelExtensibleValueSet() {
        return SecurityLabelsValueSet;
    }
    /**
     * Extensible-bound Value Set for purpose
     */
    purposeExtensibleValueSet() {
        return V3PurposeOfUseValueSet;
    }
    /**
     * Extensible-bound Value Set for class
     */
    classExtensibleValueSet() {
        return ConsentContentClassValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet() {
        return ConsentContentCodeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_type"]) {
            results.push(...this._type.doModelValidation());
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        if (this["actor"]) {
            this.actor.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["action"]) {
            this.action.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["securityLabel"]) {
            this.securityLabel.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["purpose"]) {
            this.purpose.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["class"]) {
            this.class.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["code"]) {
            this.code.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["dataPeriod"]) {
            results.push(...this.dataPeriod.doModelValidation());
        }
        if (this["data"]) {
            this.data.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["provision"]) {
            this.provision.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent extends fhir.DomainResource {
    /**
     * Default constructor for Consent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Consent';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['scope']) {
            this.scope = new fhir.CodeableConcept(source.scope);
        }
        else {
            this.scope = null;
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.category = null;
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source['dateTime']) {
            this.dateTime = source.dateTime;
        }
        if (source['_dateTime']) {
            this._dateTime = new fhir.FhirElement(source._dateTime);
        }
        if (source['performer']) {
            this.performer = source.performer.map((x) => new fhir.Reference(x));
        }
        if (source['organization']) {
            this.organization = source.organization.map((x) => new fhir.Reference(x));
        }
        if (source['sourceAttachment']) {
            this.sourceAttachment = new fhir.Attachment(source.sourceAttachment);
        }
        if (source['sourceReference']) {
            this.sourceReference = new fhir.Reference(source.sourceReference);
        }
        if (source['policy']) {
            this.policy = source.policy.map((x) => new fhir.ConsentPolicy(x));
        }
        if (source['policyRule']) {
            this.policyRule = new fhir.CodeableConcept(source.policyRule);
        }
        if (source['verification']) {
            this.verification = source.verification.map((x) => new fhir.ConsentVerification(x));
        }
        if (source['provision']) {
            this.provision = new fhir.ConsentProvision(source.provision);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return ConsentStateCodesValueSet;
    }
    /**
     * Extensible-bound Value Set for scope
     */
    scopeExtensibleValueSet() {
        return ConsentScopeValueSet;
    }
    /**
     * Extensible-bound Value Set for category
     */
    categoryExtensibleValueSet() {
        return ConsentCategoryValueSet;
    }
    /**
     * Extensible-bound Value Set for policyRule
     */
    policyRuleExtensibleValueSet() {
        return ConsentPolicyValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Consent.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: Consent.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (!this["scope"]) {
            results.push(["scope", 'Missing required element: Consent.scope']);
        }
        if (this["scope"]) {
            results.push(...this.scope.doModelValidation());
        }
        if ((!this["category"]) || (this["category"].length === 0)) {
            results.push(["category", 'Missing required element: Consent.category']);
        }
        if (this["category"]) {
            this.category.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["patient"]) {
            results.push(...this.patient.doModelValidation());
        }
        if (this["_dateTime"]) {
            results.push(...this._dateTime.doModelValidation());
        }
        if (this["performer"]) {
            this.performer.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["organization"]) {
            this.organization.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["sourceAttachment"]) {
            results.push(...this.sourceAttachment.doModelValidation());
        }
        if (this["sourceReference"]) {
            results.push(...this.sourceReference.doModelValidation());
        }
        if (this["policy"]) {
            this.policy.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["policyRule"]) {
            results.push(...this.policyRule.doModelValidation());
        }
        if (this["verification"]) {
            this.verification.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["provision"]) {
            results.push(...this.provision.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=Consent.js.map