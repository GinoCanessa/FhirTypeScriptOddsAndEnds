// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export type IConsentPolicy = fhir.IBackboneElement & {
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  authority?: string|undefined;
  _authority?: fhir.IFhirElement|undefined;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  uri?: string|undefined;
  _uri?: fhir.IFhirElement|undefined;
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export type IConsentVerification = fhir.IBackboneElement & {
  /**
   * Date verification was collected.
   */
  verificationDate?: string|undefined;
  _verificationDate?: fhir.IFhirElement|undefined;
  /**
   * Has the instruction been verified.
   */
  verified: boolean|null;
  _verified?: fhir.IFhirElement|undefined;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  verifiedWith?: fhir.IReference|undefined;
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export type IConsentProvisionActor = fhir.IBackboneElement & {
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  reference: fhir.IReference|null;
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  role: fhir.ICodeableConcept|null;
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export type IConsentProvisionData = fhir.IBackboneElement & {
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning: ConsentProvisionDataMeaningEnum|null;
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
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  action?: fhir.ICodeableConcept[]|undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: fhir.IConsentProvisionActor[]|undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  class?: fhir.ICoding[]|undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  code?: fhir.ICodeableConcept[]|undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  data?: fhir.IConsentProvisionData[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  dataPeriod?: fhir.IPeriod|undefined;
  /**
   * The timeframe in this rule is valid.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: fhir.IConsentProvision[]|undefined;
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  purpose?: fhir.ICoding[]|undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  securityLabel?: fhir.ICoding[]|undefined;
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  type?: ConsentProvisionTypeEnum|undefined;
  _type?: fhir.IFhirElement|undefined;
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
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  category: fhir.ICodeableConcept[]|null;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  dateTime?: string|undefined;
  _dateTime?: fhir.IFhirElement|undefined;
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  organization?: fhir.IReference[]|undefined;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  patient?: fhir.IReference|undefined;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  performer?: fhir.IReference[]|undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  policy?: fhir.IConsentPolicy[]|undefined;
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  policyRule?: fhir.ICodeableConcept|undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  provision?: fhir.IConsentProvision|undefined;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  scope: fhir.ICodeableConcept|null;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceAttachment?: fhir.IAttachment|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceReference?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  status: ConsentStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  verification?: fhir.IConsentVerification[]|undefined;
}
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export class ConsentPolicy extends fhir.BackboneElement implements fhir.IConsentPolicy {
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  public authority?: string|undefined;
  public _authority?: fhir.FhirElement|undefined;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  public uri?: string|undefined;
  public _uri?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConsentPolicy> = {}) {
    super(source);
    if (source["authority"]) { this.authority = source.authority; }
    if (source["_authority"]) { this._authority = new fhir.FhirElement(source._authority!); }
    if (source["uri"]) { this.uri = source.uri; }
    if (source["_uri"]) { this._uri = new fhir.FhirElement(source._uri!); }
  }
  /**
   * Check if the current ConsentPolicy contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConsentPolicy from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConsentPolicy):ConsentPolicy {
    var dest:ConsentPolicy = new ConsentPolicy(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConsentPolicy is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export class ConsentVerification extends fhir.BackboneElement implements fhir.IConsentVerification {
  /**
   * Date verification was collected.
   */
  public verificationDate?: string|undefined;
  public _verificationDate?: fhir.FhirElement|undefined;
  /**
   * Has the instruction been verified.
   */
  public verified: boolean|null;
  public _verified?: fhir.FhirElement|undefined;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  public verifiedWith?: fhir.Reference|undefined;
  /**
   * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConsentVerification> = {}) {
    super(source);
    if (source["verificationDate"]) { this.verificationDate = source.verificationDate; }
    if (source["_verificationDate"]) { this._verificationDate = new fhir.FhirElement(source._verificationDate!); }
    this.verified = null;
    if (source["verified"]) { this.verified = source.verified; }
    if (this.verified === undefined) { this.verified = null }
    if (source["_verified"]) { this._verified = new fhir.FhirElement(source._verified!); }
    if (source["verifiedWith"]) { this.verifiedWith = new fhir.Reference(source.verifiedWith!); }
  }
  /**
   * Check if the current ConsentVerification contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["verified"] === undefined) { missingElements.push("verified"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConsentVerification from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConsentVerification):ConsentVerification {
    var dest:ConsentVerification = new ConsentVerification(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConsentVerification is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export class ConsentProvisionActor extends fhir.BackboneElement implements fhir.IConsentProvisionActor {
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  public reference: fhir.Reference|null;
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  public role: fhir.CodeableConcept|null;
  /**
   * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConsentProvisionActor> = {}) {
    super(source);
    this.reference = null;
    if (source["reference"]) { this.reference = new fhir.Reference(source.reference!); }
    if (this.reference === undefined) { this.reference = null }
    this.role = null;
    if (source["role"]) { this.role = new fhir.CodeableConcept(source.role!); }
    if (this.role === undefined) { this.role = null }
  }
  /**
   * Check if the current ConsentProvisionActor contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["reference"] === undefined) { missingElements.push("reference"); }
    if (this["role"] === undefined) { missingElements.push("role"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConsentProvisionActor from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConsentProvisionActor):ConsentProvisionActor {
    var dest:ConsentProvisionActor = new ConsentProvisionActor(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConsentProvisionActor is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export class ConsentProvisionData extends fhir.BackboneElement implements fhir.IConsentProvisionData {
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  public meaning: ConsentProvisionDataMeaningEnum|null;
  public _meaning?: fhir.FhirElement|undefined;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  public reference: fhir.Reference|null;
  /**
   * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConsentProvisionData> = {}) {
    super(source);
    this.meaning = null;
    if (source["meaning"]) { this.meaning = source.meaning; }
    if (this.meaning === undefined) { this.meaning = null }
    if (source["_meaning"]) { this._meaning = new fhir.FhirElement(source._meaning!); }
    this.reference = null;
    if (source["reference"]) { this.reference = new fhir.Reference(source.reference!); }
    if (this.reference === undefined) { this.reference = null }
  }
  /**
   * Check if the current ConsentProvisionData contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["meaning"] === undefined) { missingElements.push("meaning"); }
    if (this["reference"] === undefined) { missingElements.push("reference"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConsentProvisionData from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConsentProvisionData):ConsentProvisionData {
    var dest:ConsentProvisionData = new ConsentProvisionData(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConsentProvisionData is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export class ConsentProvision extends fhir.BackboneElement implements fhir.IConsentProvision {
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  public action?: fhir.CodeableConcept[]|undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  public actor?: fhir.ConsentProvisionActor[]|undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  public class?: fhir.Coding[]|undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  public code?: fhir.CodeableConcept[]|undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  public data?: fhir.ConsentProvisionData[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  public dataPeriod?: fhir.Period|undefined;
  /**
   * The timeframe in this rule is valid.
   */
  public period?: fhir.Period|undefined;
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  public provision?: fhir.ConsentProvision[]|undefined;
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  public purpose?: fhir.Coding[]|undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  public securityLabel?: fhir.Coding[]|undefined;
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  public type?: ConsentProvisionTypeEnum|undefined;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConsentProvision> = {}) {
    super(source);
    if (source["action"]) { this.action = source.action.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["actor"]) { this.actor = source.actor.map((x:Partial<fhir.IConsentProvisionActor>) => new fhir.ConsentProvisionActor(x)); }
    if (source["class"]) { this.class = source.class.map((x:Partial<fhir.ICoding>) => new fhir.Coding(x)); }
    if (source["code"]) { this.code = source.code.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["data"]) { this.data = source.data.map((x:Partial<fhir.IConsentProvisionData>) => new fhir.ConsentProvisionData(x)); }
    if (source["dataPeriod"]) { this.dataPeriod = new fhir.Period(source.dataPeriod!); }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (source["provision"]) { this.provision = source.provision.map((x:Partial<fhir.IConsentProvision>) => new fhir.ConsentProvision(x)); }
    if (source["purpose"]) { this.purpose = source.purpose.map((x:Partial<fhir.ICoding>) => new fhir.Coding(x)); }
    if (source["securityLabel"]) { this.securityLabel = source.securityLabel.map((x:Partial<fhir.ICoding>) => new fhir.Coding(x)); }
    if (source["type"]) { this.type = source.type; }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Check if the current ConsentProvision contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConsentProvision from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConsentProvision):ConsentProvision {
    var dest:ConsentProvision = new ConsentProvision(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConsentProvision is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent extends fhir.DomainResource implements fhir.IConsent {
  /**
   * Resource Type Name
   */
  public override resourceType: "Consent";
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  public category: fhir.CodeableConcept[]|null;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  public dateTime?: string|undefined;
  public _dateTime?: fhir.FhirElement|undefined;
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  public organization?: fhir.Reference[]|undefined;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  public performer?: fhir.Reference[]|undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  public policy?: fhir.ConsentPolicy[]|undefined;
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  public policyRule?: fhir.CodeableConcept|undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  public provision?: fhir.ConsentProvision|undefined;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  public scope: fhir.CodeableConcept|null;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  public sourceAttachment?: fhir.Attachment|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  public sourceReference?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  public status: ConsentStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  public verification?: fhir.ConsentVerification[]|undefined;
  /**
   * Default constructor for Consent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConsent> = {}) {
    super(source);
    this.resourceType = 'Consent';
    this.category = null;
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (this.category === undefined) { this.category = null }
    if (source["dateTime"]) { this.dateTime = source.dateTime; }
    if (source["_dateTime"]) { this._dateTime = new fhir.FhirElement(source._dateTime!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["organization"]) { this.organization = source.organization.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["patient"]) { this.patient = new fhir.Reference(source.patient!); }
    if (source["performer"]) { this.performer = source.performer.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["policy"]) { this.policy = source.policy.map((x:Partial<fhir.IConsentPolicy>) => new fhir.ConsentPolicy(x)); }
    if (source["policyRule"]) { this.policyRule = new fhir.CodeableConcept(source.policyRule!); }
    if (source["provision"]) { this.provision = new fhir.ConsentProvision(source.provision!); }
    this.scope = null;
    if (source["scope"]) { this.scope = new fhir.CodeableConcept(source.scope!); }
    if (this.scope === undefined) { this.scope = null }
    if (source["sourceAttachment"]) { this.sourceAttachment = new fhir.Attachment(source.sourceAttachment!); }
    if (source["sourceReference"]) { this.sourceReference = new fhir.Reference(source.sourceReference!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["verification"]) { this.verification = source.verification.map((x:Partial<fhir.IConsentVerification>) => new fhir.ConsentVerification(x)); }
  }
  /**
   * Check if the current Consent contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((!this["category"]) || (this["category"].length === 0)) { missingElements.push("category"); }
    if (this["scope"] === undefined) { missingElements.push("scope"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Consent from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConsent):Consent {
    var dest:Consent = new Consent(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Consent is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the Consent.provision.data.meaning field
 */
export enum ConsentProvisionDataMeaningEnum {
  INSTANCE = "instance",
  RELATED = "related",
  DEPENDENTS = "dependents",
  AUTHOREDBY = "authoredby",
}
/**
 * Code Values for the Consent.provision.type field
 */
export enum ConsentProvisionTypeEnum {
  DENY = "deny",
  PERMIT = "permit",
}
/**
 * Code Values for the Consent.status field
 */
export enum ConsentStatusEnum {
  DRAFT = "draft",
  PROPOSED = "proposed",
  ACTIVE = "active",
  REJECTED = "rejected",
  INACTIVE = "inactive",
  ENTERED_IN_ERROR = "entered-in-error",
}
