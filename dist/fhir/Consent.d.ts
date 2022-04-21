import * as fhir from '../fhir.js';
import { SecurityRoleTypeValueSetType } from '../fhirValueSets/SecurityRoleTypeValueSet.js';
import { ConsentDataMeaningValueSetType, ConsentDataMeaningValueSetEnum } from '../fhirValueSets/ConsentDataMeaningValueSet.js';
import { ConsentProvisionTypeValueSetType, ConsentProvisionTypeValueSetEnum } from '../fhirValueSets/ConsentProvisionTypeValueSet.js';
import { ConsentActionValueSetType } from '../fhirValueSets/ConsentActionValueSet.js';
import { SecurityLabelsValueSetType } from '../fhirValueSets/SecurityLabelsValueSet.js';
import { V3PurposeOfUseValueSetType } from '../fhirValueSets/V3PurposeOfUseValueSet.js';
import { ConsentContentClassValueSetType } from '../fhirValueSets/ConsentContentClassValueSet.js';
import { ConsentContentCodeValueSetType } from '../fhirValueSets/ConsentContentCodeValueSet.js';
import { ConsentStateCodesValueSetType, ConsentStateCodesValueSetEnum } from '../fhirValueSets/ConsentStateCodesValueSet.js';
import { ConsentScopeValueSetType } from '../fhirValueSets/ConsentScopeValueSet.js';
import { ConsentCategoryValueSetType } from '../fhirValueSets/ConsentCategoryValueSet.js';
import { ConsentPolicyValueSetType } from '../fhirValueSets/ConsentPolicyValueSet.js';
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare type IConsentPolicy = fhir.IBackboneElement & {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.authority
     */
    _authority?: fhir.IFhirElement | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.uri
     */
    _uri?: fhir.IFhirElement | undefined;
};
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare type IConsentVerification = fhir.IBackboneElement & {
    /**
     * Has the instruction been verified.
     */
    verified: boolean | null;
    /**
     * Extended properties for primitive element: Consent.verification.verified
     */
    _verified?: fhir.IFhirElement | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.IReference | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.verification.verificationDate
     */
    _verificationDate?: fhir.IFhirElement | undefined;
};
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare type IConsentProvisionActor = fhir.IBackboneElement & {
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.ICodeableConcept | null;
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.IReference | null;
};
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare type IConsentProvisionData = fhir.IBackboneElement & {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentDataMeaningValueSetEnum | null;
    /**
     * Extended properties for primitive element: Consent.provision.data.meaning
     */
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
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Consent.provision.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.IConsentProvisionActor[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.ICodeableConcept[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.ICoding[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.ICoding[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.ICoding[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.IPeriod | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.IConsentProvisionData[] | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.IConsentProvision[] | undefined;
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
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: ConsentStateCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: Consent.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.ICodeableConcept | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.ICodeableConcept[] | null;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.IReference | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.dateTime
     */
    _dateTime?: fhir.IFhirElement | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.IReference[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.IReference[] | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.IAttachment | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.IReference | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.IConsentPolicy[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.ICodeableConcept | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.IConsentVerification[] | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.IConsentProvision | undefined;
};
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare class ConsentPolicy extends fhir.BackboneElement implements IConsentPolicy {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.authority
     */
    _authority?: fhir.FhirElement | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.uri
     */
    _uri?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConsentPolicy>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare class ConsentVerification extends fhir.BackboneElement implements IConsentVerification {
    /**
     * Has the instruction been verified.
     */
    verified: boolean | null;
    /**
     * Extended properties for primitive element: Consent.verification.verified
     */
    _verified?: fhir.FhirElement | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.Reference | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.verification.verificationDate
     */
    _verificationDate?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConsentVerification>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentProvisionActor extends fhir.BackboneElement implements IConsentProvisionActor {
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConcept | null;
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConsentProvisionActor>);
    /**
     * Extensible-bound Value Set for role
     */
    roleExtensibleValueSet(): SecurityRoleTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare class ConsentProvisionData extends fhir.BackboneElement implements IConsentProvisionData {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentDataMeaningValueSetEnum | null;
    /**
     * Extended properties for primitive element: Consent.provision.data.meaning
     */
    _meaning?: fhir.FhirElement | undefined;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConsentProvisionData>);
    /**
     * Required-bound Value Set for meaning
     */
    meaningRequiredValueSet(): ConsentDataMeaningValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare class ConsentProvision extends fhir.BackboneElement implements IConsentProvision {
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Consent.provision.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentProvisionActor[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConcept[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.Coding[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.Coding[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.Coding[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.Period | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.ConsentProvisionData[] | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.ConsentProvision[] | undefined;
    /**
     * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConsentProvision>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): ConsentProvisionTypeValueSetType;
    /**
     * Example-bound Value Set for action
     */
    actionExampleValueSet(): ConsentActionValueSetType;
    /**
     * Extensible-bound Value Set for securityLabel
     */
    securityLabelExtensibleValueSet(): SecurityLabelsValueSetType;
    /**
     * Extensible-bound Value Set for purpose
     */
    purposeExtensibleValueSet(): V3PurposeOfUseValueSetType;
    /**
     * Extensible-bound Value Set for class
     */
    classExtensibleValueSet(): ConsentContentClassValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ConsentContentCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare class Consent extends fhir.DomainResource implements IConsent {
    /**
     * Resource Type Name
     */
    resourceType: "Consent";
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: ConsentStateCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: Consent.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.CodeableConcept | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConcept[] | null;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.dateTime
     */
    _dateTime?: fhir.FhirElement | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.Reference[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.Reference[] | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.Attachment | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.Reference | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.ConsentPolicy[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.CodeableConcept | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.ConsentVerification[] | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.ConsentProvision | undefined;
    /**
     * Default constructor for Consent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConsent>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ConsentStateCodesValueSetType;
    /**
     * Extensible-bound Value Set for scope
     */
    scopeExtensibleValueSet(): ConsentScopeValueSetType;
    /**
     * Extensible-bound Value Set for category
     */
    categoryExtensibleValueSet(): ConsentCategoryValueSetType;
    /**
     * Extensible-bound Value Set for policyRule
     */
    policyRuleExtensibleValueSet(): ConsentPolicyValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Consent.d.ts.map