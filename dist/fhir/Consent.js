// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Consent
import * as fhir from '../fhir.js';
import { SecurityRoleTypeValueSet, } from '../fhirValueSets/SecurityRoleTypeValueSet.js';
import { ConsentDataMeaningValueSet, } from '../fhirValueSets/ConsentDataMeaningValueSet.js';
import { ConsentProvisionTypeValueSet, } from '../fhirValueSets/ConsentProvisionTypeValueSet.js';
import { ConsentActionValueSet, } from '../fhirValueSets/ConsentActionValueSet.js';
import { SecurityLabelsValueSet, } from '../fhirValueSets/SecurityLabelsValueSet.js';
import { V3PurposeOfUseValueSet, } from '../fhirValueSets/V3PurposeOfUseValueSet.js';
import { ConsentContentClassValueSet, } from '../fhirValueSets/ConsentContentClassValueSet.js';
import { ConsentContentCodeValueSet, } from '../fhirValueSets/ConsentContentCodeValueSet.js';
import { ConsentStateCodesValueSet, } from '../fhirValueSets/ConsentStateCodesValueSet.js';
import { ConsentScopeValueSet, } from '../fhirValueSets/ConsentScopeValueSet.js';
import { ConsentCategoryValueSet, } from '../fhirValueSets/ConsentCategoryValueSet.js';
import { ConsentPolicyValueSet, } from '../fhirValueSets/ConsentPolicyValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export class ConsentPolicy extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ConsentPolicy';
        if (source['authority']) {
            this.authority = new fhir.FhirUri({ value: source.authority });
        }
        if (source['uri']) {
            this.uri = new fhir.FhirUri({ value: source.uri });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["authority"]) {
            outcome.issue.push(...this.authority.doModelValidation().issue);
        }
        if (this["uri"]) {
            outcome.issue.push(...this.uri.doModelValidation().issue);
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
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export class ConsentVerification extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ConsentVerification';
        if (source['verified']) {
            this.verified = new fhir.FhirBoolean({ value: source.verified });
        }
        else {
            this.verified = null;
        }
        if (source['verifiedWith']) {
            this.verifiedWith = new fhir.Reference(source.verifiedWith);
        }
        if (source['verificationDate']) {
            this.verificationDate = new fhir.FhirDateTime({ value: source.verificationDate });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['verified']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property verified:fhir.FhirBoolean fhir: Consent.verification.verified:boolean", }));
        }
        if (this["verified"]) {
            outcome.issue.push(...this.verified.doModelValidation().issue);
        }
        if (this["verifiedWith"]) {
            outcome.issue.push(...this.verifiedWith.doModelValidation().issue);
        }
        if (this["verificationDate"]) {
            outcome.issue.push(...this.verificationDate.doModelValidation().issue);
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
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export class ConsentProvisionActor extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ConsentProvisionActor';
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
    static roleExtensibleValueSet() {
        return SecurityRoleTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['role']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property role:fhir.CodeableConcept fhir: Consent.provision.actor.role:CodeableConcept", }));
        }
        if (this["role"]) {
            outcome.issue.push(...this.role.doModelValidation().issue);
        }
        if (!this['reference']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property reference:fhir.Reference fhir: Consent.provision.actor.reference:Reference", }));
        }
        if (this["reference"]) {
            outcome.issue.push(...this.reference.doModelValidation().issue);
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
 * The resources controlled by this rule if specific resources are referenced.
 */
export class ConsentProvisionData extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ConsentProvisionData';
        if (source['meaning']) {
            this.meaning = source.meaning;
        }
        else {
            this.meaning = null;
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
    static meaningRequiredValueSet() {
        return ConsentDataMeaningValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['meaning']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property meaning:ConsentDataMeaningValueSetEnum fhir: Consent.provision.data.meaning:code", }));
        }
        if (!this['reference']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property reference:fhir.Reference fhir: Consent.provision.data.reference:Reference", }));
        }
        if (this["reference"]) {
            outcome.issue.push(...this.reference.doModelValidation().issue);
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
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export class ConsentProvision extends fhir.BackboneElement {
    /**
     * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ConsentProvision';
        /**
         * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
         */
        this.actor = [];
        /**
         * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
         */
        this.action = [];
        /**
         * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
         */
        this.securityLabel = [];
        /**
         * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
         */
        this.purpose = [];
        /**
         * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
         */
        this.class = [];
        /**
         * Typical use of this is a Document code with class = CDA.
         */
        this.code = [];
        /**
         * The resources controlled by this rule if specific resources are referenced.
         */
        this.data = [];
        /**
         * Rules which provide exceptions to the base rule or subrules.
         */
        this.provision = [];
        if (source['type']) {
            this.type = source.type;
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
    static typeRequiredValueSet() {
        return ConsentProvisionTypeValueSet;
    }
    /**
     * Example-bound Value Set for action
     */
    static actionExampleValueSet() {
        return ConsentActionValueSet;
    }
    /**
     * Extensible-bound Value Set for securityLabel
     */
    static securityLabelExtensibleValueSet() {
        return SecurityLabelsValueSet;
    }
    /**
     * Extensible-bound Value Set for purpose
     */
    static purposeExtensibleValueSet() {
        return V3PurposeOfUseValueSet;
    }
    /**
     * Extensible-bound Value Set for class
     */
    static classExtensibleValueSet() {
        return ConsentContentClassValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return ConsentContentCodeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["actor"]) {
            this.actor.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["action"]) {
            this.action.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["securityLabel"]) {
            this.securityLabel.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["purpose"]) {
            this.purpose.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["class"]) {
            this.class.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["dataPeriod"]) {
            outcome.issue.push(...this.dataPeriod.doModelValidation().issue);
        }
        if (this["data"]) {
            this.data.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["provision"]) {
            this.provision.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * A record of a healthcare consumer???s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent extends fhir.DomainResource {
    /**
     * Default constructor for Consent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Consent';
        /**
         * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
         */
        this.identifier = [];
        /**
         * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
         */
        this.category = [];
        /**
         * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
         */
        this.performer = [];
        /**
         * The organization that manages the consent, and the framework within which it is executed.
         */
        this.organization = [];
        this.__sourceIsChoice = true;
        /**
         * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
         */
        this.policy = [];
        /**
         * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
         */
        this.verification = [];
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
            this.dateTime = new fhir.FhirDateTime({ value: source.dateTime });
        }
        if (source['performer']) {
            this.performer = source.performer.map((x) => new fhir.Reference(x));
        }
        if (source['organization']) {
            this.organization = source.organization.map((x) => new fhir.Reference(x));
        }
        if (source['source']) {
            this.source = source.source;
        }
        else if (source['sourceAttachment']) {
            this.source = new fhir.Attachment(source.sourceAttachment);
        }
        else if (source['sourceReference']) {
            this.source = new fhir.Reference(source.sourceReference);
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
    static statusRequiredValueSet() {
        return ConsentStateCodesValueSet;
    }
    /**
     * Extensible-bound Value Set for scope
     */
    static scopeExtensibleValueSet() {
        return ConsentScopeValueSet;
    }
    /**
     * Extensible-bound Value Set for category
     */
    static categoryExtensibleValueSet() {
        return ConsentCategoryValueSet;
    }
    /**
     * Extensible-bound Value Set for policyRule
     */
    static policyRuleExtensibleValueSet() {
        return ConsentPolicyValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'Consent' fhir: Consent.resourceType:'Consent'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:ConsentStateCodesValueSetEnum fhir: Consent.status:code", }));
        }
        if (!this['scope']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property scope:fhir.CodeableConcept fhir: Consent.scope:CodeableConcept", }));
        }
        if (this["scope"]) {
            outcome.issue.push(...this.scope.doModelValidation().issue);
        }
        if (!this['category']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property category:fhir.CodeableConcept[] fhir: Consent.category:CodeableConcept", }));
        }
        else if (!Array.isArray(this.category)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property category:fhir.CodeableConcept[] fhir: Consent.category:CodeableConcept", }));
        }
        else if (this.category.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property category:fhir.CodeableConcept[] fhir: Consent.category:CodeableConcept", }));
        }
        if (this["category"]) {
            this.category.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["patient"]) {
            outcome.issue.push(...this.patient.doModelValidation().issue);
        }
        if (this["dateTime"]) {
            outcome.issue.push(...this.dateTime.doModelValidation().issue);
        }
        if (this["performer"]) {
            this.performer.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["organization"]) {
            this.organization.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["policy"]) {
            this.policy.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["policyRule"]) {
            outcome.issue.push(...this.policyRule.doModelValidation().issue);
        }
        if (this["verification"]) {
            this.verification.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["provision"]) {
            outcome.issue.push(...this.provision.doModelValidation().issue);
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
//# sourceMappingURL=Consent.js.map