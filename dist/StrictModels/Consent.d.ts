import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare class ConsentPolicy extends fhirModels.BackboneElement implements fhirInterfaces.IConsentPolicy {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: string | undefined;
    _authority?: fhirModels.Element | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: string | undefined;
    _uri?: fhirModels.Element | undefined;
    /**
     * Default constructor for ConsentPolicy from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IConsentPolicy);
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare class ConsentVerification extends fhirModels.BackboneElement implements fhirInterfaces.IConsentVerification {
    /**
     * Date verification was collected.
     */
    verificationDate?: string | undefined;
    _verificationDate?: fhirModels.Element | undefined;
    /**
     * Has the instruction been verified.
     */
    verified: boolean;
    _verified?: fhirModels.Element | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ConsentVerification from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IConsentVerification);
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentProvisionActor extends fhirModels.BackboneElement implements fhirInterfaces.IConsentProvisionActor {
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhirModels.Reference;
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhirModels.CodeableConcept;
    /**
     * Default constructor for ConsentProvisionActor from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IConsentProvisionActor);
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare class ConsentProvisionData extends fhirModels.BackboneElement implements fhirInterfaces.IConsentProvisionData {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentProvisionDataMeaningEnum;
    _meaning?: fhirModels.Element | undefined;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhirModels.Reference;
    /**
     * Default constructor for ConsentProvisionData from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IConsentProvisionData);
}
/**
 * Code Values for the Consent.provision.data.meaning field
 */
export declare enum ConsentProvisionDataMeaningEnum {
    INSTANCE = "instance",
    RELATED = "related",
    DEPENDENTS = "dependents",
    AUTHOREDBY = "authoredby"
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare class ConsentProvision extends fhirModels.BackboneElement implements fhirInterfaces.IConsentProvision {
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhirModels.ConsentProvisionActor[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhirModels.Coding[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhirModels.ConsentProvisionData[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhirModels.Period | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhirModels.ConsentProvision[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhirModels.Coding[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhirModels.Coding[] | undefined;
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for ConsentProvision from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IConsentProvision);
}
/**
 * Code Values for the Consent.provision.type field
 */
export declare enum ConsentProvisionTypeEnum {
    DENY = "deny",
    PERMIT = "permit"
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare class Consent extends fhirModels.DomainResource implements fhirInterfaces.IConsent {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Consent";
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhirModels.CodeableConcept[];
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: string | undefined;
    _dateTime?: fhirModels.Element | undefined;
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhirModels.Reference[] | undefined;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhirModels.Reference[] | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhirModels.ConsentPolicy[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhirModels.CodeableConcept | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhirModels.ConsentProvision | undefined;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhirModels.CodeableConcept;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhirModels.Attachment | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: ConsentStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhirModels.ConsentVerification[] | undefined;
    /**
     * Default constructor for Consent from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IConsent);
}
/**
 * Code Values for the Consent.status field
 */
export declare enum ConsentStatusEnum {
    DRAFT = "draft",
    PROPOSED = "proposed",
    ACTIVE = "active",
    REJECTED = "rejected",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Consent.d.ts.map