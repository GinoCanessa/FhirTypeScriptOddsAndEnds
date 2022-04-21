// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Consent

import * as fhir from '../fhir.js'

import { SecurityRoleTypeValueSet, SecurityRoleTypeValueSetType, SecurityRoleTypeValueSetEnum } from '../fhirValueSets/SecurityRoleTypeValueSet.js'
import { ConsentDataMeaningValueSet, ConsentDataMeaningValueSetType, ConsentDataMeaningValueSetEnum } from '../fhirValueSets/ConsentDataMeaningValueSet.js'
import { ConsentProvisionTypeValueSet, ConsentProvisionTypeValueSetType, ConsentProvisionTypeValueSetEnum } from '../fhirValueSets/ConsentProvisionTypeValueSet.js'
import { ConsentActionValueSet, ConsentActionValueSetType, ConsentActionValueSetEnum } from '../fhirValueSets/ConsentActionValueSet.js'
import { SecurityLabelsValueSet, SecurityLabelsValueSetType, SecurityLabelsValueSetEnum } from '../fhirValueSets/SecurityLabelsValueSet.js'
import { V3PurposeOfUseValueSet, V3PurposeOfUseValueSetType, V3PurposeOfUseValueSetEnum } from '../fhirValueSets/V3PurposeOfUseValueSet.js'
import { ConsentContentClassValueSet, ConsentContentClassValueSetType, ConsentContentClassValueSetEnum } from '../fhirValueSets/ConsentContentClassValueSet.js'
import { ConsentContentCodeValueSet, ConsentContentCodeValueSetType, ConsentContentCodeValueSetEnum } from '../fhirValueSets/ConsentContentCodeValueSet.js'
import { ConsentStateCodesValueSet, ConsentStateCodesValueSetType, ConsentStateCodesValueSetEnum } from '../fhirValueSets/ConsentStateCodesValueSet.js'
import { ConsentScopeValueSet, ConsentScopeValueSetType, ConsentScopeValueSetEnum } from '../fhirValueSets/ConsentScopeValueSet.js'
import { ConsentCategoryValueSet, ConsentCategoryValueSetType, ConsentCategoryValueSetEnum } from '../fhirValueSets/ConsentCategoryValueSet.js'
import { ConsentPolicyValueSet, ConsentPolicyValueSetType, ConsentPolicyValueSetEnum } from '../fhirValueSets/ConsentPolicyValueSet.js'

/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export type IConsentPolicy = fhir.IBackboneElement & { 
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  authority?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.authority
   */
  _authority?: fhir.IFhirElement|undefined;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  uri?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.uri
   */
  _uri?: fhir.IFhirElement|undefined;
}

/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export type IConsentVerification = fhir.IBackboneElement & { 
  /**
   * Has the instruction been verified.
   */
  verified: boolean|null;
  /**
   * Extended properties for primitive element: Consent.verification.verified
   */
  _verified?: fhir.IFhirElement|undefined;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  verifiedWith?: fhir.IReference|undefined;
  /**
   * Date verification was collected.
   */
  verificationDate?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.verification.verificationDate
   */
  _verificationDate?: fhir.IFhirElement|undefined;
}

/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export type IConsentProvisionActor = fhir.IBackboneElement & { 
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  role: fhir.ICodeableConcept|null;
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  reference: fhir.IReference|null;
}

/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export type IConsentProvisionData = fhir.IBackboneElement & { 
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning: ConsentDataMeaningValueSetEnum|null;
  /**
   * Extended properties for primitive element: Consent.provision.data.meaning
   */
  _meaning?: fhir.IFhirElement|undefined;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  reference: fhir.IReference|null;
}

/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export type IConsentProvision = fhir.IBackboneElement & { 
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  type?: ConsentProvisionTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Consent.provision.type
   */
  _type?: fhir.IFhirElement|undefined;
  /**
   * The timeframe in this rule is valid.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: fhir.IConsentProvisionActor[]|undefined;
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  action?: fhir.ICodeableConcept[]|undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  securityLabel?: fhir.ICoding[]|undefined;
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  purpose?: fhir.ICoding[]|undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  class?: fhir.ICoding[]|undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  code?: fhir.ICodeableConcept[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  dataPeriod?: fhir.IPeriod|undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  data?: fhir.IConsentProvisionData[]|undefined;
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: fhir.IConsentProvision[]|undefined;
}

/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export type IConsent = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Consent";
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  status: ConsentStateCodesValueSetEnum|null;
  /**
   * Extended properties for primitive element: Consent.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  scope: fhir.ICodeableConcept|null;
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  category: fhir.ICodeableConcept[]|null;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  patient?: fhir.IReference|undefined;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  dateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.dateTime
   */
  _dateTime?: fhir.IFhirElement|undefined;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  performer?: fhir.IReference[]|undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  organization?: fhir.IReference[]|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceAttachment?: fhir.IAttachment|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceReference?: fhir.IReference|undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  policy?: fhir.IConsentPolicy[]|undefined;
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  policyRule?: fhir.ICodeableConcept|undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  verification?: fhir.IConsentVerification[]|undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  provision?: fhir.IConsentProvision|undefined;
}

/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export class ConsentPolicy extends fhir.BackboneElement implements IConsentPolicy {
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  public authority?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.authority
   */
  public _authority?: fhir.FhirElement|undefined;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  public uri?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.uri
   */
  public _uri?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IConsentPolicy> = { }) {
    super(source);
    if (source['authority']) { this.authority = source.authority; }
    if (source['_authority']) { this._authority = new fhir.FhirElement(source._authority!); }
    if (source['uri']) { this.uri = source.uri; }
    if (source['_uri']) { this._uri = new fhir.FhirElement(source._uri!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_authority"]) { results.push(...this._authority.doModelValidation()); }
    if (this["_uri"]) { results.push(...this._uri.doModelValidation()); }
    return results;
  }
}

/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export class ConsentVerification extends fhir.BackboneElement implements IConsentVerification {
  /**
   * Has the instruction been verified.
   */
  public verified: boolean|null;
  /**
   * Extended properties for primitive element: Consent.verification.verified
   */
  public _verified?: fhir.FhirElement|undefined;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  public verifiedWith?: fhir.Reference|undefined;
  /**
   * Date verification was collected.
   */
  public verificationDate?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.verification.verificationDate
   */
  public _verificationDate?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IConsentVerification> = { }) {
    super(source);
    if (source['verified']) { this.verified = source.verified; }
    else { this.verified = null; }
    if (source['_verified']) { this._verified = new fhir.FhirElement(source._verified!); }
    if (source['verifiedWith']) { this.verifiedWith = new fhir.Reference(source.verifiedWith!); }
    if (source['verificationDate']) { this.verificationDate = source.verificationDate; }
    if (source['_verificationDate']) { this._verificationDate = new fhir.FhirElement(source._verificationDate!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["verified"]) { results.push(["verified",'Missing required element: Consent.verification.verified']); }
    if (this["_verified"]) { results.push(...this._verified.doModelValidation()); }
    if (this["verifiedWith"]) { results.push(...this.verifiedWith.doModelValidation()); }
    if (this["_verificationDate"]) { results.push(...this._verificationDate.doModelValidation()); }
    return results;
  }
}

/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export class ConsentProvisionActor extends fhir.BackboneElement implements IConsentProvisionActor {
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  public role: fhir.CodeableConcept|null;
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  public reference: fhir.Reference|null;
  /**
   * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IConsentProvisionActor> = { }) {
    super(source);
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role!); }
    else { this.role = null; }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference!); }
    else { this.reference = null; }
  }
  /**
   * Extensible-bound Value Set for role
   */
  public roleExtensibleValueSet():SecurityRoleTypeValueSetType {
    return SecurityRoleTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["role"]) { results.push(["role",'Missing required element: Consent.provision.actor.role']); }
    if (this["role"]) { results.push(...this.role.doModelValidation()); }
    if (!this["reference"]) { results.push(["reference",'Missing required element: Consent.provision.actor.reference']); }
    if (this["reference"]) { results.push(...this.reference.doModelValidation()); }
    return results;
  }
}

/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export class ConsentProvisionData extends fhir.BackboneElement implements IConsentProvisionData {
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  public meaning: ConsentDataMeaningValueSetEnum|null;
  /**
   * Extended properties for primitive element: Consent.provision.data.meaning
   */
  public _meaning?: fhir.FhirElement|undefined;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  public reference: fhir.Reference|null;
  /**
   * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IConsentProvisionData> = { }) {
    super(source);
    if (source['meaning']) { this.meaning = source.meaning; }
    else { this.meaning = null; }
    if (source['_meaning']) { this._meaning = new fhir.FhirElement(source._meaning!); }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference!); }
    else { this.reference = null; }
  }
  /**
   * Required-bound Value Set for meaning
   */
  public meaningRequiredValueSet():ConsentDataMeaningValueSetType {
    return ConsentDataMeaningValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["meaning"]) { results.push(["meaning",'Missing required element: Consent.provision.data.meaning']); }
    if (this["_meaning"]) { results.push(...this._meaning.doModelValidation()); }
    if (!this["reference"]) { results.push(["reference",'Missing required element: Consent.provision.data.reference']); }
    if (this["reference"]) { results.push(...this.reference.doModelValidation()); }
    return results;
  }
}

/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export class ConsentProvision extends fhir.BackboneElement implements IConsentProvision {
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  public type?: ConsentProvisionTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Consent.provision.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * The timeframe in this rule is valid.
   */
  public period?: fhir.Period|undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  public actor?: fhir.ConsentProvisionActor[]|undefined;
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  public action?: fhir.CodeableConcept[]|undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  public securityLabel?: fhir.Coding[]|undefined;
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  public purpose?: fhir.Coding[]|undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  public class?: fhir.Coding[]|undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  public code?: fhir.CodeableConcept[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  public dataPeriod?: fhir.Period|undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  public data?: fhir.ConsentProvisionData[]|undefined;
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  public provision?: fhir.ConsentProvision[]|undefined;
  /**
   * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IConsentProvision> = { }) {
    super(source);
    if (source['type']) { this.type = source.type; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['actor']) { this.actor = source.actor.map((x) => new fhir.ConsentProvisionActor(x)); }
    if (source['action']) { this.action = source.action.map((x) => new fhir.CodeableConcept(x)); }
    if (source['securityLabel']) { this.securityLabel = source.securityLabel.map((x) => new fhir.Coding(x)); }
    if (source['purpose']) { this.purpose = source.purpose.map((x) => new fhir.Coding(x)); }
    if (source['class']) { this.class = source.class.map((x) => new fhir.Coding(x)); }
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x)); }
    if (source['dataPeriod']) { this.dataPeriod = new fhir.Period(source.dataPeriod!); }
    if (source['data']) { this.data = source.data.map((x) => new fhir.ConsentProvisionData(x)); }
    if (source['provision']) { this.provision = source.provision.map((x) => new fhir.ConsentProvision(x)); }
  }
  /**
   * Required-bound Value Set for type
   */
  public typeRequiredValueSet():ConsentProvisionTypeValueSetType {
    return ConsentProvisionTypeValueSet;
  }
  /**
   * Example-bound Value Set for action
   */
  public actionExampleValueSet():ConsentActionValueSetType {
    return ConsentActionValueSet;
  }
  /**
   * Extensible-bound Value Set for securityLabel
   */
  public securityLabelExtensibleValueSet():SecurityLabelsValueSetType {
    return SecurityLabelsValueSet;
  }
  /**
   * Extensible-bound Value Set for purpose
   */
  public purposeExtensibleValueSet():V3PurposeOfUseValueSetType {
    return V3PurposeOfUseValueSet;
  }
  /**
   * Extensible-bound Value Set for class
   */
  public classExtensibleValueSet():ConsentContentClassValueSetType {
    return ConsentContentClassValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public codeExampleValueSet():ConsentContentCodeValueSetType {
    return ConsentContentCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (this["actor"]) { this.actor.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["action"]) { this.action.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["securityLabel"]) { this.securityLabel.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["purpose"]) { this.purpose.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["class"]) { this.class.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["code"]) { this.code.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["dataPeriod"]) { results.push(...this.dataPeriod.doModelValidation()); }
    if (this["data"]) { this.data.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["provision"]) { this.provision.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent extends fhir.DomainResource implements IConsent {
  /**
   * Resource Type Name
   */
  public resourceType: "Consent";
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  public status: ConsentStateCodesValueSetEnum|null;
  /**
   * Extended properties for primitive element: Consent.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  public scope: fhir.CodeableConcept|null;
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  public category: fhir.CodeableConcept[]|null;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  public dateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.dateTime
   */
  public _dateTime?: fhir.FhirElement|undefined;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  public performer?: fhir.Reference[]|undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  public organization?: fhir.Reference[]|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  public sourceAttachment?: fhir.Attachment|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  public sourceReference?: fhir.Reference|undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  public policy?: fhir.ConsentPolicy[]|undefined;
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  public policyRule?: fhir.CodeableConcept|undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  public verification?: fhir.ConsentVerification[]|undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  public provision?: fhir.ConsentProvision|undefined;
  /**
   * Default constructor for Consent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IConsent> = { }) {
    super(source);
    this.resourceType = 'Consent';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['scope']) { this.scope = new fhir.CodeableConcept(source.scope!); }
    else { this.scope = null; }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = null; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient!); }
    if (source['dateTime']) { this.dateTime = source.dateTime; }
    if (source['_dateTime']) { this._dateTime = new fhir.FhirElement(source._dateTime!); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x)); }
    if (source['organization']) { this.organization = source.organization.map((x) => new fhir.Reference(x)); }
    if (source['sourceAttachment']) { this.sourceAttachment = new fhir.Attachment(source.sourceAttachment!); }
    if (source['sourceReference']) { this.sourceReference = new fhir.Reference(source.sourceReference!); }
    if (source['policy']) { this.policy = source.policy.map((x) => new fhir.ConsentPolicy(x)); }
    if (source['policyRule']) { this.policyRule = new fhir.CodeableConcept(source.policyRule!); }
    if (source['verification']) { this.verification = source.verification.map((x) => new fhir.ConsentVerification(x)); }
    if (source['provision']) { this.provision = new fhir.ConsentProvision(source.provision!); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():ConsentStateCodesValueSetType {
    return ConsentStateCodesValueSet;
  }
  /**
   * Extensible-bound Value Set for scope
   */
  public scopeExtensibleValueSet():ConsentScopeValueSetType {
    return ConsentScopeValueSet;
  }
  /**
   * Extensible-bound Value Set for category
   */
  public categoryExtensibleValueSet():ConsentCategoryValueSetType {
    return ConsentCategoryValueSet;
  }
  /**
   * Extensible-bound Value Set for policyRule
   */
  public policyRuleExtensibleValueSet():ConsentPolicyValueSetType {
    return ConsentPolicyValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Consent.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["status"]) { results.push(["status",'Missing required element: Consent.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (!this["scope"]) { results.push(["scope",'Missing required element: Consent.scope']); }
    if (this["scope"]) { results.push(...this.scope.doModelValidation()); }
    if ((!this["category"]) || (this["category"].length === 0)) { results.push(["category",'Missing required element: Consent.category']); }
    if (this["category"]) { this.category.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["patient"]) { results.push(...this.patient.doModelValidation()); }
    if (this["_dateTime"]) { results.push(...this._dateTime.doModelValidation()); }
    if (this["performer"]) { this.performer.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["organization"]) { this.organization.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["sourceAttachment"]) { results.push(...this.sourceAttachment.doModelValidation()); }
    if (this["sourceReference"]) { results.push(...this.sourceReference.doModelValidation()); }
    if (this["policy"]) { this.policy.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["policyRule"]) { results.push(...this.policyRule.doModelValidation()); }
    if (this["verification"]) { this.verification.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["provision"]) { results.push(...this.provision.doModelValidation()); }
    return results;
  }
}
