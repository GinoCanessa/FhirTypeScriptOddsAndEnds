import * as fhir from '../fhir.js';
import { SecurityRoleTypeValueSetType } from '../fhirValueSets/SecurityRoleTypeValueSet.js';
import { ConsentDataMeaningValueSetType } from '../fhirValueSets/ConsentDataMeaningValueSet.js';
import { ConsentDataMeaningValueSetEnum } from '../valueSetEnums.js';
import { ConsentProvisionTypeValueSetType } from '../fhirValueSets/ConsentProvisionTypeValueSet.js';
import { ConsentProvisionTypeValueSetEnum } from '../valueSetEnums.js';
import { ConsentActionValueSetType } from '../fhirValueSets/ConsentActionValueSet.js';
import { SecurityLabelsValueSetType } from '../fhirValueSets/SecurityLabelsValueSet.js';
import { V3PurposeOfUseValueSetType } from '../fhirValueSets/V3PurposeOfUseValueSet.js';
import { ConsentContentClassValueSetType } from '../fhirValueSets/ConsentContentClassValueSet.js';
import { ConsentContentCodeValueSetType } from '../fhirValueSets/ConsentContentCodeValueSet.js';
import { ConsentStateCodesValueSetType } from '../fhirValueSets/ConsentStateCodesValueSet.js';
import { ConsentStateCodesValueSetEnum } from '../valueSetEnums.js';
import { ConsentScopeValueSetType } from '../fhirValueSets/ConsentScopeValueSet.js';
import { ConsentCategoryValueSetType } from '../fhirValueSets/ConsentCategoryValueSet.js';
import { ConsentPolicyValueSetType } from '../fhirValueSets/ConsentPolicyValueSet.js';
/**
 * Valid arguments for the ConsentPolicy type.
 */
export interface ConsentPolicyArgs extends fhir.BackboneElementArgs {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: fhir.FhirUri | string | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: fhir.FhirUri | string | undefined;
}
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare class ConsentPolicy extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: fhir.FhirUri | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentPolicyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ConsentVerification type.
 */
export interface ConsentVerificationArgs extends fhir.BackboneElementArgs {
    /**
     * Has the instruction been verified.
     */
    verified: fhir.FhirBoolean | boolean | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.ReferenceArgs | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: fhir.FhirDateTime | string | undefined;
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare class ConsentVerification extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Has the instruction been verified.
     */
    verified: fhir.FhirBoolean | null;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.Reference | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentVerificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ConsentProvisionActor type.
 */
export interface ConsentProvisionActorArgs extends fhir.BackboneElementArgs {
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConceptArgs | null;
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentProvisionActor extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<ConsentProvisionActorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for role
     */
    static roleExtensibleValueSet(): SecurityRoleTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ConsentProvisionData type.
 */
export interface ConsentProvisionDataArgs extends fhir.BackboneElementArgs {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentDataMeaningValueSetEnum | null;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare class ConsentProvisionData extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: ConsentDataMeaningValueSetEnum | null;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentProvisionDataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for meaning
     */
    static meaningRequiredValueSet(): ConsentDataMeaningValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ConsentProvision type.
 */
export interface ConsentProvisionArgs extends fhir.BackboneElementArgs {
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeValueSetEnum | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentProvisionActorArgs[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.CodingArgs[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.CodingArgs[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.ConsentProvisionDataArgs[] | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.ConsentProvisionArgs[] | undefined;
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare class ConsentProvision extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: ConsentProvisionTypeValueSetEnum | undefined;
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
    constructor(source?: Partial<ConsentProvisionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): ConsentProvisionTypeValueSetType;
    /**
     * Example-bound Value Set for action
     */
    static actionExampleValueSet(): ConsentActionValueSetType;
    /**
     * Extensible-bound Value Set for securityLabel
     */
    static securityLabelExtensibleValueSet(): SecurityLabelsValueSetType;
    /**
     * Extensible-bound Value Set for purpose
     */
    static purposeExtensibleValueSet(): V3PurposeOfUseValueSetType;
    /**
     * Extensible-bound Value Set for class
     */
    static classExtensibleValueSet(): ConsentContentClassValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ConsentContentCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the Consent type.
 */
export interface ConsentArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Consent" | undefined;
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: ConsentStateCodesValueSetEnum | null;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.CodeableConceptArgs | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConceptArgs[] | null;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.ReferenceArgs[] | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    source?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.ReferenceArgs | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.ConsentPolicyArgs[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.ConsentVerificationArgs[] | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.ConsentProvisionArgs | undefined;
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare class Consent extends fhir.DomainResource {
    readonly __dataType: string;
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
    dateTime?: fhir.FhirDateTime | undefined;
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
    source?: (fhir.Attachment | fhir.Reference) | undefined;
    readonly __sourceIsChoice: true;
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
    constructor(source?: Partial<ConsentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ConsentStateCodesValueSetType;
    /**
     * Extensible-bound Value Set for scope
     */
    static scopeExtensibleValueSet(): ConsentScopeValueSetType;
    /**
     * Extensible-bound Value Set for category
     */
    static categoryExtensibleValueSet(): ConsentCategoryValueSetType;
    /**
     * Extensible-bound Value Set for policyRule
     */
    static policyRuleExtensibleValueSet(): ConsentPolicyValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Consent.d.ts.map