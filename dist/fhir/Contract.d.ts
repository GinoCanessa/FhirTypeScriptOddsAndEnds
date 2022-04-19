import * as fhir from '../fhir';
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export declare type IContractContentDefinition = fhir.IBackboneElement & {
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhir.IFhirElement | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: ContractContentDefinitionPublicationStatusEnum | null;
    _publicationStatus?: fhir.IFhirElement | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhir.IReference | undefined;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export declare type IContractTermSecurityLabel = fhir.IBackboneElement & {
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhir.ICoding[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.ICoding | null;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhir.ICoding[] | undefined;
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: number[] | undefined;
    _number?: fhir.IFhirElement[] | undefined;
};
/**
 * Offer Recipient.
 */
export declare type IContractTermOfferParty = fhir.IBackboneElement & {
    /**
     * Participant in the offer.
     */
    reference: fhir.IReference[] | null;
    /**
     * How the party participates in the offer.
     */
    role: fhir.ICodeableConcept | null;
};
/**
 * Response to offer text.
 */
export declare type IContractTermOfferAnswer = fhir.IBackboneElement & {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhir.IReference | undefined;
};
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export declare type IContractTermOffer = fhir.IBackboneElement & {
    /**
     * Response to offer text.
     */
    answer?: fhir.IContractTermOfferAnswer[] | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhir.ICodeableConcept | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.IFhirElement[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhir.IContractTermOfferParty[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.IFhirElement[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhir.IReference | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Circumstance of the asset.
 */
export declare type IContractTermAssetContext = fhir.IBackboneElement & {
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.IReference | undefined;
    /**
     * Context description.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
};
/**
 * Contract Valued Item List.
 */
export declare type IContractTermAssetValuedItem = fhir.IBackboneElement & {
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: string | undefined;
    _effectiveTime?: fhir.IFhirElement | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhir.IReference | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.IFhirElement[] | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * Terms of valuation.
     */
    payment?: string | undefined;
    _payment?: fhir.IFhirElement | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhir.IFhirElement | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    _points?: fhir.IFhirElement | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhir.IReference | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhir.IReference | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.IFhirElement[] | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * Contract Term Asset List.
 */
export declare type IContractTermAsset = fhir.IBackboneElement & {
    /**
     * Response to assets.
     */
    answer?: fhir.IContractTermOfferAnswer[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: string | undefined;
    _condition?: fhir.IFhirElement | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhir.IContractTermAssetContext[] | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.IFhirElement[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhir.IPeriod[] | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.ICoding | undefined;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.ICodeableConcept | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.IFhirElement[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhir.ICodeableConcept[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhir.IReference[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhir.IPeriod[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.IContractTermAssetValuedItem[] | undefined;
};
/**
 * Entity of the action.
 */
export declare type IContractTermActionSubject = fhir.IBackboneElement & {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: fhir.IReference[] | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.ICodeableConcept | undefined;
};
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare type IContractTermAction = fhir.IBackboneElement & {
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhir.IReference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: string[] | undefined;
    _contextLinkId?: fhir.IFhirElement[] | undefined;
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhir.IFhirElement | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.ICodeableConcept | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.IFhirElement[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * When action happens.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhir.ITiming | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhir.IReference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: string[] | undefined;
    _performerLinkId?: fhir.IFhirElement[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhir.ICodeableConcept | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: string[] | undefined;
    _reason?: fhir.IFhirElement[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: string[] | undefined;
    _reasonLinkId?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhir.IReference[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: string[] | undefined;
    _requesterLinkId?: fhir.IFhirElement[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.IFhirElement[] | undefined;
    /**
     * Current state of the term action.
     */
    status: fhir.ICodeableConcept | null;
    /**
     * Entity of the action.
     */
    subject?: fhir.IContractTermActionSubject[] | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export declare type IContractTerm = fhir.IBackboneElement & {
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhir.IContractTermAction[] | undefined;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.IPeriod | undefined;
    /**
     * Contract Term Asset List.
     */
    asset?: fhir.IContractTermAsset[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhir.IContractTerm[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: string | undefined;
    _issued?: fhir.IFhirElement | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.IContractTermOffer | null;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhir.IContractTermSecurityLabel[] | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhir.IReference | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export declare type IContractSigner = fhir.IBackboneElement & {
    /**
     * Party which is a signator to this Contract.
     */
    party: fhir.IReference | null;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: fhir.ISignature[] | null;
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhir.ICoding | null;
};
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export declare type IContractFriendly = fhir.IBackboneElement & {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhir.IAttachment | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhir.IReference | undefined;
};
/**
 * List of Legal expressions or representations of this Contract.
 */
export declare type IContractLegal = fhir.IBackboneElement & {
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhir.IAttachment | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhir.IReference | undefined;
};
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export declare type IContractRule = fhir.IBackboneElement & {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhir.IAttachment | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhir.IReference | undefined;
};
/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export declare type IContract = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Contract";
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: string[] | undefined;
    _alias?: fhir.IFhirElement[] | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.IPeriod | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhir.IReference | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhir.IReference[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.IContractContentDefinition | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.ICodeableConcept | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhir.IReference[] | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhir.ICodeableConcept | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhir.IContractFriendly[] | undefined;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhir.IReference | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhir.IFhirElement | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: string | undefined;
    _issued?: fhir.IFhirElement | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhir.IContractLegal[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhir.IAttachment | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhir.IReference | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhir.ICodeableConcept | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhir.IReference[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhir.IContractRule[] | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhir.ICodeableConcept | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhir.IContractSigner[] | undefined;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: ContractStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhir.IFhirElement | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhir.IReference[] | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhir.IContractTerm[] | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhir.IReference | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export declare class ContractContentDefinition extends fhir.BackboneElement implements fhir.IContractContentDefinition {
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhir.FhirElement | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: ContractContentDefinitionPublicationStatusEnum | null;
    _publicationStatus?: fhir.FhirElement | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhir.Reference | undefined;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for ContractContentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractContentDefinition>);
    /**
     * Check if the current ContractContentDefinition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractContentDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractContentDefinition): ContractContentDefinition;
}
/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export declare class ContractTermSecurityLabel extends fhir.BackboneElement implements fhir.IContractTermSecurityLabel {
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhir.Coding[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.Coding | null;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhir.Coding[] | undefined;
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: number[] | undefined;
    _number?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ContractTermSecurityLabel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermSecurityLabel>);
    /**
     * Check if the current ContractTermSecurityLabel contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermSecurityLabel from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermSecurityLabel): ContractTermSecurityLabel;
}
/**
 * Offer Recipient.
 */
export declare class ContractTermOfferParty extends fhir.BackboneElement implements fhir.IContractTermOfferParty {
    /**
     * Participant in the offer.
     */
    reference: fhir.Reference[] | null;
    /**
     * How the party participates in the offer.
     */
    role: fhir.CodeableConcept | null;
    /**
     * Default constructor for ContractTermOfferParty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermOfferParty>);
    /**
     * Check if the current ContractTermOfferParty contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermOfferParty from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermOfferParty): ContractTermOfferParty;
}
/**
 * Response to offer text.
 */
export declare class ContractTermOfferAnswer extends fhir.BackboneElement implements fhir.IContractTermOfferAnswer {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ContractTermOfferAnswer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermOfferAnswer>);
    /**
     * Check if the current ContractTermOfferAnswer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermOfferAnswer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermOfferAnswer): ContractTermOfferAnswer;
}
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export declare class ContractTermOffer extends fhir.BackboneElement implements fhir.IContractTermOffer {
    /**
     * Response to offer text.
     */
    answer?: fhir.ContractTermOfferAnswer[] | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhir.CodeableConcept | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhir.CodeableConcept[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.FhirElement[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhir.ContractTermOfferParty[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.FhirElement[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhir.Reference | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermOffer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermOffer>);
    /**
     * Check if the current ContractTermOffer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermOffer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermOffer): ContractTermOffer;
}
/**
 * Circumstance of the asset.
 */
export declare class ContractTermAssetContext extends fhir.BackboneElement implements fhir.IContractTermAssetContext {
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Context description.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ContractTermAssetContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermAssetContext>);
    /**
     * Check if the current ContractTermAssetContext contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermAssetContext from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermAssetContext): ContractTermAssetContext;
}
/**
 * Contract Valued Item List.
 */
export declare class ContractTermAssetValuedItem extends fhir.BackboneElement implements fhir.IContractTermAssetValuedItem {
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: string | undefined;
    _effectiveTime?: fhir.FhirElement | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhir.Reference | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.FhirElement[] | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Terms of valuation.
     */
    payment?: string | undefined;
    _payment?: fhir.FhirElement | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhir.FhirElement | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    _points?: fhir.FhirElement | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhir.Reference | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.FhirElement[] | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ContractTermAssetValuedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermAssetValuedItem>);
    /**
     * Check if the current ContractTermAssetValuedItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermAssetValuedItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermAssetValuedItem): ContractTermAssetValuedItem;
}
/**
 * Contract Term Asset List.
 */
export declare class ContractTermAsset extends fhir.BackboneElement implements fhir.IContractTermAsset {
    /**
     * Response to assets.
     */
    answer?: fhir.ContractTermOfferAnswer[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: string | undefined;
    _condition?: fhir.FhirElement | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhir.ContractTermAssetContext[] | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.FhirElement[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhir.Period[] | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhir.CodeableConcept[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.Coding | undefined;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.FhirElement[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhir.CodeableConcept[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhir.Reference[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhir.Period[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.ContractTermAssetValuedItem[] | undefined;
    /**
     * Default constructor for ContractTermAsset - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermAsset>);
    /**
     * Check if the current ContractTermAsset contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermAsset from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermAsset): ContractTermAsset;
}
/**
 * Entity of the action.
 */
export declare class ContractTermActionSubject extends fhir.BackboneElement implements fhir.IContractTermActionSubject {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: fhir.Reference[] | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermActionSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermActionSubject>);
    /**
     * Check if the current ContractTermActionSubject contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermActionSubject from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermActionSubject): ContractTermActionSubject;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare class ContractTermAction extends fhir.BackboneElement implements fhir.IContractTermAction {
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhir.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: string[] | undefined;
    _contextLinkId?: fhir.FhirElement[] | undefined;
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhir.FhirElement | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.CodeableConcept | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhir.FhirElement[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * When action happens.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: string[] | undefined;
    _performerLinkId?: fhir.FhirElement[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhir.CodeableConcept | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhir.CodeableConcept[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: string[] | undefined;
    _reason?: fhir.FhirElement[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: string[] | undefined;
    _reasonLinkId?: fhir.FhirElement[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhir.Reference[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: string[] | undefined;
    _requesterLinkId?: fhir.FhirElement[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhir.FhirElement[] | undefined;
    /**
     * Current state of the term action.
     */
    status: fhir.CodeableConcept | null;
    /**
     * Entity of the action.
     */
    subject?: fhir.ContractTermActionSubject[] | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for ContractTermAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTermAction>);
    /**
     * Check if the current ContractTermAction contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTermAction from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTermAction): ContractTermAction;
}
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export declare class ContractTerm extends fhir.BackboneElement implements fhir.IContractTerm {
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhir.ContractTermAction[] | undefined;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * Contract Term Asset List.
     */
    asset?: fhir.ContractTermAsset[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhir.ContractTerm[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: string | undefined;
    _issued?: fhir.FhirElement | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.ContractTermOffer | null;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhir.ContractTermSecurityLabel[] | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhir.Reference | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTerm - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractTerm>);
    /**
     * Check if the current ContractTerm contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractTerm from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractTerm): ContractTerm;
}
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export declare class ContractSigner extends fhir.BackboneElement implements fhir.IContractSigner {
    /**
     * Party which is a signator to this Contract.
     */
    party: fhir.Reference | null;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: fhir.Signature[] | null;
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhir.Coding | null;
    /**
     * Default constructor for ContractSigner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractSigner>);
    /**
     * Check if the current ContractSigner contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractSigner from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractSigner): ContractSigner;
}
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export declare class ContractFriendly extends fhir.BackboneElement implements fhir.IContractFriendly {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ContractFriendly - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractFriendly>);
    /**
     * Check if the current ContractFriendly contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractFriendly from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractFriendly): ContractFriendly;
}
/**
 * List of Legal expressions or representations of this Contract.
 */
export declare class ContractLegal extends fhir.BackboneElement implements fhir.IContractLegal {
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ContractLegal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractLegal>);
    /**
     * Check if the current ContractLegal contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractLegal from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractLegal): ContractLegal;
}
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export declare class ContractRule extends fhir.BackboneElement implements fhir.IContractRule {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ContractRule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContractRule>);
    /**
     * Check if the current ContractRule contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ContractRule from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContractRule): ContractRule;
}
/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export declare class Contract extends fhir.DomainResource implements fhir.IContract {
    /**
     * Resource Type Name
     */
    resourceType: "Contract";
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: string[] | undefined;
    _alias?: fhir.FhirElement[] | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhir.Reference | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhir.Reference[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.ContractContentDefinition | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConcept | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhir.Reference[] | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhir.CodeableConcept | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhir.ContractFriendly[] | undefined;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhir.Reference | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhir.FhirElement | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: string | undefined;
    _issued?: fhir.FhirElement | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhir.ContractLegal[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhir.Attachment | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhir.Reference | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhir.CodeableConcept | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhir.Reference[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhir.ContractRule[] | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhir.ContractSigner[] | undefined;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: ContractStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhir.FhirElement | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhir.CodeableConcept[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhir.Reference[] | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhir.ContractTerm[] | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhir.Reference | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Contract - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContract>);
    /**
     * Check if the current Contract contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Contract from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IContract): Contract;
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
//# sourceMappingURL=Contract.d.ts.map