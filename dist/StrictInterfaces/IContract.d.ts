import * as fhirInterfaces from '../strictinterfaces';
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export interface IContractContentDefinition extends fhirInterfaces.IBackboneElement {
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhirInterfaces.IElement | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: ContractContentDefinitionPublicationStatusEnum;
    _publicationStatus?: fhirInterfaces.IElement | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhirInterfaces.IReference | undefined;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhirInterfaces.ICodeableConcept;
}
/**
 * Code Values for the Contract.contentDefinition.publicationStatus field
 */
export declare enum ContractContentDefinitionPublicationStatusEnum {
    AMENDED = "amended",
    APPENDED = "appended",
    CANCELLED = "cancelled",
    DISPUTED = "disputed",
    ENTERED_IN_ERROR = "entered-in-error",
    EXECUTABLE = "executable",
    EXECUTED = "executed",
    NEGOTIABLE = "negotiable",
    OFFERED = "offered",
    POLICY = "policy",
    REJECTED = "rejected",
    RENEWED = "renewed",
    REVOKED = "revoked",
    RESOLVED = "resolved",
    TERMINATED = "terminated"
}
/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export interface IContractTermSecurityLabel extends fhirInterfaces.IBackboneElement {
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhirInterfaces.ICoding[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhirInterfaces.ICoding;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhirInterfaces.ICoding[] | undefined;
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: number[] | undefined;
    _number?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Offer Recipient.
 */
export interface IContractTermOfferParty extends fhirInterfaces.IBackboneElement {
    /**
     * Participant in the offer.
     */
    reference: fhirInterfaces.IReference[];
    /**
     * How the party participates in the offer.
     */
    role: fhirInterfaces.ICodeableConcept;
}
/**
 * Response to offer text.
 */
export interface IContractTermOfferAnswer extends fhirInterfaces.IBackboneElement {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirInterfaces.IElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
}
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export interface IContractTermOffer extends fhirInterfaces.IBackboneElement {
    /**
     * Response to offer text.
     */
    answer?: fhirInterfaces.IContractTermOfferAnswer[] | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhirInterfaces.IContractTermOfferParty[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhirInterfaces.IReference | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Circumstance of the asset.
 */
export interface IContractTermAssetContext extends fhirInterfaces.IBackboneElement {
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhirInterfaces.IReference | undefined;
    /**
     * Context description.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
}
/**
 * Contract Valued Item List.
 */
export interface IContractTermAssetValuedItem extends fhirInterfaces.IBackboneElement {
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: string | undefined;
    _effectiveTime?: fhirInterfaces.IElement | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhirInterfaces.IReference | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhirInterfaces.IMoney | undefined;
    /**
     * Terms of valuation.
     */
    payment?: string | undefined;
    _payment?: fhirInterfaces.IElement | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhirInterfaces.IElement | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    _points?: fhirInterfaces.IElement | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhirInterfaces.IReference | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhirInterfaces.IReference | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * Contract Term Asset List.
 */
export interface IContractTermAsset extends fhirInterfaces.IBackboneElement {
    /**
     * Response to assets.
     */
    answer?: fhirInterfaces.IContractTermOfferAnswer[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: string | undefined;
    _condition?: fhirInterfaces.IElement | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhirInterfaces.IContractTermAssetContext[] | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhirInterfaces.IPeriod[] | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhirInterfaces.ICoding | undefined;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhirInterfaces.IPeriod[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhirInterfaces.IContractTermAssetValuedItem[] | undefined;
}
/**
 * Entity of the action.
 */
export interface IContractTermActionSubject extends fhirInterfaces.IBackboneElement {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: fhirInterfaces.IReference[];
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export interface IContractTermAction extends fhirInterfaces.IBackboneElement {
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhirInterfaces.IReference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: string[] | undefined;
    _contextLinkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhirInterfaces.IElement | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhirInterfaces.ICodeableConcept;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * When action happens.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhirInterfaces.IReference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: string[] | undefined;
    _performerLinkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: string[] | undefined;
    _reason?: fhirInterfaces.IElement[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: string[] | undefined;
    _reasonLinkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhirInterfaces.IReference[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: string[] | undefined;
    _requesterLinkId?: fhirInterfaces.IElement[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * Current state of the term action.
     */
    status: fhirInterfaces.ICodeableConcept;
    /**
     * Entity of the action.
     */
    subject?: fhirInterfaces.IContractTermActionSubject[] | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhirInterfaces.ICodeableConcept;
}
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export interface IContractTerm extends fhirInterfaces.IBackboneElement {
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhirInterfaces.IContractTermAction[] | undefined;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhirInterfaces.IPeriod | undefined;
    /**
     * Contract Term Asset List.
     */
    asset?: fhirInterfaces.IContractTermAsset[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhirInterfaces.IContractTerm[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: string | undefined;
    _issued?: fhirInterfaces.IElement | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhirInterfaces.IContractTermOffer;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhirInterfaces.IContractTermSecurityLabel[] | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhirInterfaces.IReference | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export interface IContractSigner extends fhirInterfaces.IBackboneElement {
    /**
     * Party which is a signator to this Contract.
     */
    party: fhirInterfaces.IReference;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: fhirInterfaces.ISignature[];
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhirInterfaces.ICoding;
}
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export interface IContractFriendly extends fhirInterfaces.IBackboneElement {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhirInterfaces.IReference | undefined;
}
/**
 * List of Legal expressions or representations of this Contract.
 */
export interface IContractLegal extends fhirInterfaces.IBackboneElement {
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhirInterfaces.IReference | undefined;
}
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export interface IContractRule extends fhirInterfaces.IBackboneElement {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhirInterfaces.IReference | undefined;
}
/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface IContract extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Contract";
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: string[] | undefined;
    _alias?: fhirInterfaces.IElement[] | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhirInterfaces.IPeriod | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhirInterfaces.IReference[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhirInterfaces.IContractContentDefinition | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhirInterfaces.IReference[] | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhirInterfaces.IContractFriendly[] | undefined;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhirInterfaces.IReference | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhirInterfaces.IElement | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: string | undefined;
    _issued?: fhirInterfaces.IElement | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhirInterfaces.IContractLegal[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhirInterfaces.IReference | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhirInterfaces.IReference[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhirInterfaces.IContractRule[] | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhirInterfaces.IContractSigner[] | undefined;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhirInterfaces.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: ContractStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhirInterfaces.IReference[] | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhirInterfaces.IElement | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhirInterfaces.IReference[] | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhirInterfaces.IContractTerm[] | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhirInterfaces.IReference | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Contract.status field
 */
export declare enum ContractStatusEnum {
    AMENDED = "amended",
    APPENDED = "appended",
    CANCELLED = "cancelled",
    DISPUTED = "disputed",
    ENTERED_IN_ERROR = "entered-in-error",
    EXECUTABLE = "executable",
    EXECUTED = "executed",
    NEGOTIABLE = "negotiable",
    OFFERED = "offered",
    POLICY = "policy",
    REJECTED = "rejected",
    RENEWED = "renewed",
    REVOKED = "revoked",
    RESOLVED = "resolved",
    TERMINATED = "terminated"
}
//# sourceMappingURL=IContract.d.ts.map