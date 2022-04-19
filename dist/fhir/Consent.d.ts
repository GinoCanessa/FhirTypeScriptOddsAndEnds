import * as fhir from '../fhir';
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare type IConsentPolicy = fhir.IBackboneElement & {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: string | undefined;
    _authority?: fhir.IFhirElement | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: string | undefined;
    _uri?: fhir.IFhirElement | undefined;
};
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare type IConsentVerification = fhir.IBackboneElement & {
    /**
     * Date verification was collected.
     */
    verificationDate?: string | undefined;
    _verificationDate?: fhir.IFhirElement | undefined;
    /**
     * Has the instruction been verified.
     */
    verified: boolean | null;
    _verified?: fhir.IFhirElement | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.IReference | undefined;
};
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare type IConsentProvisionActor = fhir.IBackboneElement & {
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.IReference | null;
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.ICodeableConcept | null;
};
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare type IConsentProvisionData = fhir.IBackboneElement & {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentProvisionDataMeaningEnum | null;
    _meaning?: fhir.IFhirElement | undefined;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.IReference | null;
};
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare type IConsentProvision = fhir.IBackboneElement & {
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.ICodeableConcept[] | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.IConsentProvisionActor[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.ICoding[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.IConsentProvisionData[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.IPeriod | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.IConsentProvision[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.ICoding[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.ICoding[] | undefined;
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeEnum | undefined;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare type IConsent = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Consent";
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.ICodeableConcept[] | null;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: string | undefined;
    _dateTime?: fhir.IFhirElement | undefined;
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.IReference[] | undefined;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.IReference | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.IReference[] | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.IConsentPolicy[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.ICodeableConcept | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.IConsentProvision | undefined;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.ICodeableConcept | null;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.IAttachment | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: ConsentStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.IConsentVerification[] | undefined;
};
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare class ConsentPolicy extends fhir.BackboneElement implements fhir.IConsentPolicy {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: string | undefined;
    _authority?: fhir.FhirElement | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: string | undefined;
    _uri?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConsentPolicy>);
    /**
     * Check if the current ConsentPolicy contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConsentPolicy from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConsentPolicy): ConsentPolicy;
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare class ConsentVerification extends fhir.BackboneElement implements fhir.IConsentVerification {
    /**
     * Date verification was collected.
     */
    verificationDate?: string | undefined;
    _verificationDate?: fhir.FhirElement | undefined;
    /**
     * Has the instruction been verified.
     */
    verified: boolean | null;
    _verified?: fhir.FhirElement | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.Reference | undefined;
    /**
     * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConsentVerification>);
    /**
     * Check if the current ConsentVerification contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConsentVerification from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConsentVerification): ConsentVerification;
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentProvisionActor extends fhir.BackboneElement implements fhir.IConsentProvisionActor {
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.Reference | null;
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConcept | null;
    /**
     * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConsentProvisionActor>);
    /**
     * Check if the current ConsentProvisionActor contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConsentProvisionActor from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConsentProvisionActor): ConsentProvisionActor;
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare class ConsentProvisionData extends fhir.BackboneElement implements fhir.IConsentProvisionData {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentProvisionDataMeaningEnum | null;
    _meaning?: fhir.FhirElement | undefined;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConsentProvisionData>);
    /**
     * Check if the current ConsentProvisionData contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConsentProvisionData from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConsentProvisionData): ConsentProvisionData;
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare class ConsentProvision extends fhir.BackboneElement implements fhir.IConsentProvision {
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConcept[] | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentProvisionActor[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.Coding[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.ConsentProvisionData[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.Period | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.ConsentProvision[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.Coding[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.Coding[] | undefined;
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeEnum | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConsentProvision>);
    /**
     * Check if the current ConsentProvision contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConsentProvision from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConsentProvision): ConsentProvision;
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare class Consent extends fhir.DomainResource implements fhir.IConsent {
    /**
     * Resource Type Name
     */
    resourceType: "Consent";
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConcept[] | null;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: string | undefined;
    _dateTime?: fhir.FhirElement | undefined;
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.Reference[] | undefined;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.Reference[] | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.ConsentPolicy[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.CodeableConcept | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.ConsentProvision | undefined;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.CodeableConcept | null;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.Attachment | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: ConsentStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.ConsentVerification[] | undefined;
    /**
     * Default constructor for Consent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConsent>);
    /**
     * Check if the current Consent contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Consent from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConsent): Consent;
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
 * Code Values for the Consent.provision.type field
 */
export declare enum ConsentProvisionTypeEnum {
    DENY = "deny",
    PERMIT = "permit"
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