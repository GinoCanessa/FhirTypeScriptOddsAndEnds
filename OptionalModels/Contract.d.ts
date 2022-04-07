import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export declare class ContractContentDefinition extends fhirModels.BackboneElement implements fhirInterfaces.IContractContentDefinition {
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhirModels.Element | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus?: ContractContentDefinitionPublicationStatusEnum | undefined;
    _publicationStatus?: fhirModels.Element | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhirModels.Reference | undefined;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhirModels.CodeableConcept | undefined;
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ContractContentDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractContentDefinition>);
    /**
     * Factory function to create a ContractContentDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractContentDefinition): ContractContentDefinition;
    /**
     * Check if the current ContractContentDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class ContractTermSecurityLabel extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermSecurityLabel {
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhirModels.Coding[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification?: fhirModels.Coding | undefined;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhirModels.Coding[] | undefined;
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: number[] | undefined;
    _number?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for ContractTermSecurityLabel from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermSecurityLabel>);
    /**
     * Factory function to create a ContractTermSecurityLabel from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermSecurityLabel): ContractTermSecurityLabel;
    /**
     * Check if the current ContractTermSecurityLabel contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Offer Recipient.
 */
export declare class ContractTermOfferParty extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermOfferParty {
    /**
     * Participant in the offer.
     */
    reference?: fhirModels.Reference[] | undefined;
    /**
     * How the party participates in the offer.
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermOfferParty from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermOfferParty>);
    /**
     * Factory function to create a ContractTermOfferParty from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermOfferParty): ContractTermOfferParty;
    /**
     * Check if the current ContractTermOfferParty contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Response to offer text.
 */
export declare class ContractTermOfferAnswer extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermOfferAnswer {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirModels.Element | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhirModels.Coding | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ContractTermOfferAnswer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermOfferAnswer>);
    /**
     * Factory function to create a ContractTermOfferAnswer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermOfferAnswer): ContractTermOfferAnswer;
    /**
     * Check if the current ContractTermOfferAnswer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export declare class ContractTermOffer extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermOffer {
    /**
     * Response to offer text.
     */
    answer?: fhirModels.ContractTermOfferAnswer[] | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhirModels.CodeableConcept | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirModels.Element[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhirModels.ContractTermOfferParty[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirModels.Element[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhirModels.Reference | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermOffer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermOffer>);
    /**
     * Factory function to create a ContractTermOffer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermOffer): ContractTermOffer;
    /**
     * Check if the current ContractTermOffer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Circumstance of the asset.
 */
export declare class ContractTermAssetContext extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermAssetContext {
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhirModels.Reference | undefined;
    /**
     * Context description.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * Default constructor for ContractTermAssetContext from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermAssetContext>);
    /**
     * Factory function to create a ContractTermAssetContext from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermAssetContext): ContractTermAssetContext;
    /**
     * Check if the current ContractTermAssetContext contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Contract Valued Item List.
 */
export declare class ContractTermAssetValuedItem extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermAssetValuedItem {
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: string | undefined;
    _effectiveTime?: fhirModels.Element | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhirModels.Reference | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirModels.Element[] | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhirModels.Money | undefined;
    /**
     * Terms of valuation.
     */
    payment?: string | undefined;
    _payment?: fhirModels.Element | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhirModels.Element | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    _points?: fhirModels.Element | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhirModels.Reference | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhirModels.Reference | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirModels.Element[] | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ContractTermAssetValuedItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermAssetValuedItem>);
    /**
     * Factory function to create a ContractTermAssetValuedItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermAssetValuedItem): ContractTermAssetValuedItem;
    /**
     * Check if the current ContractTermAssetValuedItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Contract Term Asset List.
 */
export declare class ContractTermAsset extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermAsset {
    /**
     * Response to assets.
     */
    answer?: fhirModels.ContractTermOfferAnswer[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: string | undefined;
    _condition?: fhirModels.Element | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhirModels.ContractTermAssetContext[] | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirModels.Element[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhirModels.Period[] | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhirModels.Coding | undefined;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhirModels.CodeableConcept | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirModels.Element[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhirModels.Reference[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhirModels.Period[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhirModels.ContractTermAssetValuedItem[] | undefined;
    /**
     * Default constructor for ContractTermAsset from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermAsset>);
    /**
     * Factory function to create a ContractTermAsset from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermAsset): ContractTermAsset;
    /**
     * Check if the current ContractTermAsset contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Entity of the action.
 */
export declare class ContractTermActionSubject extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermActionSubject {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference?: fhirModels.Reference[] | undefined;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermActionSubject from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermActionSubject>);
    /**
     * Factory function to create a ContractTermActionSubject from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermActionSubject): ContractTermActionSubject;
    /**
     * Check if the current ContractTermActionSubject contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare class ContractTermAction extends fhirModels.BackboneElement implements fhirInterfaces.IContractTermAction {
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhirModels.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: string[] | undefined;
    _contextLinkId?: fhirModels.Element[] | undefined;
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhirModels.Element | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent?: fhirModels.CodeableConcept | undefined;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: string[] | undefined;
    _linkId?: fhirModels.Element[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * When action happens.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirModels.Element | undefined;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhirModels.Period | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhirModels.Timing | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhirModels.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: string[] | undefined;
    _performerLinkId?: fhirModels.Element[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: string[] | undefined;
    _reason?: fhirModels.Element[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: string[] | undefined;
    _reasonLinkId?: fhirModels.Element[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhirModels.Reference[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: string[] | undefined;
    _requesterLinkId?: fhirModels.Element[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: number[] | undefined;
    _securityLabelNumber?: fhirModels.Element[] | undefined;
    /**
     * Current state of the term action.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * Entity of the action.
     */
    subject?: fhirModels.ContractTermActionSubject[] | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTermAction>);
    /**
     * Factory function to create a ContractTermAction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTermAction): ContractTermAction;
    /**
     * Check if the current ContractTermAction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export declare class ContractTerm extends fhirModels.BackboneElement implements fhirInterfaces.IContractTerm {
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhirModels.ContractTermAction[] | undefined;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhirModels.Period | undefined;
    /**
     * Contract Term Asset List.
     */
    asset?: fhirModels.ContractTermAsset[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhirModels.ContractTerm[] | undefined;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: string | undefined;
    _issued?: fhirModels.Element | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer?: fhirModels.ContractTermOffer | undefined;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhirModels.ContractTermSecurityLabel[] | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhirModels.CodeableConcept | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhirModels.Reference | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTerm from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractTerm>);
    /**
     * Factory function to create a ContractTerm from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractTerm): ContractTerm;
    /**
     * Check if the current ContractTerm contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export declare class ContractSigner extends fhirModels.BackboneElement implements fhirInterfaces.IContractSigner {
    /**
     * Party which is a signator to this Contract.
     */
    party?: fhirModels.Reference | undefined;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature?: fhirModels.Signature[] | undefined;
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type?: fhirModels.Coding | undefined;
    /**
     * Default constructor for ContractSigner from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractSigner>);
    /**
     * Factory function to create a ContractSigner from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractSigner): ContractSigner;
    /**
     * Check if the current ContractSigner contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export declare class ContractFriendly extends fhirModels.BackboneElement implements fhirInterfaces.IContractFriendly {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhirModels.Attachment | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ContractFriendly from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractFriendly>);
    /**
     * Factory function to create a ContractFriendly from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractFriendly): ContractFriendly;
    /**
     * Check if the current ContractFriendly contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * List of Legal expressions or representations of this Contract.
 */
export declare class ContractLegal extends fhirModels.BackboneElement implements fhirInterfaces.IContractLegal {
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhirModels.Attachment | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ContractLegal from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractLegal>);
    /**
     * Factory function to create a ContractLegal from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractLegal): ContractLegal;
    /**
     * Check if the current ContractLegal contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export declare class ContractRule extends fhirModels.BackboneElement implements fhirInterfaces.IContractRule {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhirModels.Attachment | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ContractRule from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContractRule>);
    /**
     * Factory function to create a ContractRule from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContractRule): ContractRule;
    /**
     * Check if the current ContractRule contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export declare class Contract extends fhirModels.DomainResource implements fhirInterfaces.IContract {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Contract";
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: string[] | undefined;
    _alias?: fhirModels.Element[] | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhirModels.Period | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhirModels.Reference[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhirModels.ContractContentDefinition | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhirModels.CodeableConcept | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhirModels.Reference[] | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhirModels.CodeableConcept | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhirModels.ContractFriendly[] | undefined;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhirModels.Reference | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhirModels.Element | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: string | undefined;
    _issued?: fhirModels.Element | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhirModels.ContractLegal[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhirModels.Attachment | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhirModels.Reference | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhirModels.CodeableConcept | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhirModels.Reference[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhirModels.ContractRule[] | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhirModels.CodeableConcept | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhirModels.ContractSigner[] | undefined;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhirModels.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: ContractStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhirModels.Element | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhirModels.Reference[] | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhirModels.ContractTerm[] | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhirModels.Reference | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for Contract from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContract>);
    /**
     * Factory function to create a Contract from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContract): Contract;
    /**
     * Check if the current Contract contains all required elements.
     */
    checkRequiredElements(): string[];
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