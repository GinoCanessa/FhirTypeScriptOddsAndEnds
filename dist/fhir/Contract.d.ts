import * as fhir from '../fhir.js';
import { ContractDefinitionTypeValueSetType } from '../fhirValueSets/ContractDefinitionTypeValueSet.js';
import { ContractDefinitionSubtypeValueSetType } from '../fhirValueSets/ContractDefinitionSubtypeValueSet.js';
import { ContractPublicationstatusValueSetType } from '../fhirValueSets/ContractPublicationstatusValueSet.js';
import { ContractPublicationstatusValueSetEnum } from '../valueSetEnums.js';
import { ContractSecurityClassificationValueSetType } from '../fhirValueSets/ContractSecurityClassificationValueSet.js';
import { ContractSecurityCategoryValueSetType } from '../fhirValueSets/ContractSecurityCategoryValueSet.js';
import { ContractSecurityControlValueSetType } from '../fhirValueSets/ContractSecurityControlValueSet.js';
import { ContractPartyRoleValueSetType } from '../fhirValueSets/ContractPartyRoleValueSet.js';
import { ContractTermTypeValueSetType } from '../fhirValueSets/ContractTermTypeValueSet.js';
import { V3ActConsentDirectiveValueSetType } from '../fhirValueSets/V3ActConsentDirectiveValueSet.js';
import { ContractDecisionModeValueSetType } from '../fhirValueSets/ContractDecisionModeValueSet.js';
import { ContractAssetcontextValueSetType } from '../fhirValueSets/ContractAssetcontextValueSet.js';
import { ContractAssetscopeValueSetType } from '../fhirValueSets/ContractAssetscopeValueSet.js';
import { ContractAssettypeValueSetType } from '../fhirValueSets/ContractAssettypeValueSet.js';
import { ContractAssetsubtypeValueSetType } from '../fhirValueSets/ContractAssetsubtypeValueSet.js';
import { ConsentContentClassValueSetType } from '../fhirValueSets/ConsentContentClassValueSet.js';
import { AssetAvailabilityValueSetType } from '../fhirValueSets/AssetAvailabilityValueSet.js';
import { ContractActorroleValueSetType } from '../fhirValueSets/ContractActorroleValueSet.js';
import { ContractActionValueSetType } from '../fhirValueSets/ContractActionValueSet.js';
import { V3PurposeOfUseValueSetType } from '../fhirValueSets/V3PurposeOfUseValueSet.js';
import { ContractActionstatusValueSetType } from '../fhirValueSets/ContractActionstatusValueSet.js';
import { ProvenanceAgentTypeValueSetType } from '../fhirValueSets/ProvenanceAgentTypeValueSet.js';
import { ProvenanceAgentRoleValueSetType } from '../fhirValueSets/ProvenanceAgentRoleValueSet.js';
import { ContractTermSubtypeValueSetType } from '../fhirValueSets/ContractTermSubtypeValueSet.js';
import { ContractSignerTypeValueSetType } from '../fhirValueSets/ContractSignerTypeValueSet.js';
import { ContractStatusValueSetType } from '../fhirValueSets/ContractStatusValueSet.js';
import { ContractStatusValueSetEnum } from '../valueSetEnums.js';
import { ContractLegalstateValueSetType } from '../fhirValueSets/ContractLegalstateValueSet.js';
import { ContractContentDerivativeValueSetType } from '../fhirValueSets/ContractContentDerivativeValueSet.js';
import { ContractExpirationTypeValueSetType } from '../fhirValueSets/ContractExpirationTypeValueSet.js';
import { ContractScopeValueSetType } from '../fhirValueSets/ContractScopeValueSet.js';
import { ContractTypeValueSetType } from '../fhirValueSets/ContractTypeValueSet.js';
import { ContractSubtypeValueSetType } from '../fhirValueSets/ContractSubtypeValueSet.js';
/**
 * Valid arguments for the ContractContentDefinition type.
 */
export interface ContractContentDefinitionArgs extends fhir.BackboneElementArgs {
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhir.ReferenceArgs | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: ContractPublicationstatusValueSetEnum | null;
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
}
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export declare class ContractContentDefinition extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhir.Reference | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: fhir.FhirDateTime | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: ContractPublicationstatusValueSetEnum | null;
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for ContractContentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractContentDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ContractDefinitionTypeValueSetType;
    /**
     * Example-bound Value Set for subType
     */
    static subTypeExampleValueSet(): ContractDefinitionSubtypeValueSetType;
    /**
     * Required-bound Value Set for publicationStatus
     */
    static publicationStatusRequiredValueSet(): ContractPublicationstatusValueSetType;
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
 * Valid arguments for the ContractTermSecurityLabel type.
 */
export interface ContractTermSecurityLabelArgs extends fhir.BackboneElementArgs {
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: fhir.FhirUnsignedInt[] | number[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.CodingArgs | null;
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhir.CodingArgs[] | undefined;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhir.CodingArgs[] | undefined;
}
/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export declare class ContractTermSecurityLabel extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: fhir.FhirUnsignedInt[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.Coding | null;
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhir.Coding[] | undefined;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhir.Coding[] | undefined;
    /**
     * Default constructor for ContractTermSecurityLabel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermSecurityLabelArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for classification
     */
    static classificationExampleValueSet(): ContractSecurityClassificationValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ContractSecurityCategoryValueSetType;
    /**
     * Example-bound Value Set for control
     */
    static controlExampleValueSet(): ContractSecurityControlValueSetType;
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
 * Valid arguments for the ContractTermOfferParty type.
 */
export interface ContractTermOfferPartyArgs extends fhir.BackboneElementArgs {
    /**
     * Participant in the offer.
     */
    reference: fhir.ReferenceArgs[] | null;
    /**
     * How the party participates in the offer.
     */
    role: fhir.CodeableConceptArgs | null;
}
/**
 * Offer Recipient.
 */
export declare class ContractTermOfferParty extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<ContractTermOfferPartyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for role
     */
    static roleExampleValueSet(): ContractPartyRoleValueSetType;
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
 * Valid arguments for the ContractTermOfferAnswer type.
 */
export interface ContractTermOfferAnswerArgs extends fhir.BackboneElementArgs {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    value?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Response to offer text.
 */
export declare class ContractTermOfferAnswer extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    value: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | null;
    readonly __valueIsChoice: true;
    /**
     * Default constructor for ContractTermOfferAnswer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermOfferAnswerArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ContractTermOffer type.
 */
export interface ContractTermOfferArgs extends fhir.BackboneElementArgs {
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhir.ContractTermOfferPartyArgs[] | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhir.ReferenceArgs | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhir.CodeableConceptArgs | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Response to offer text.
     */
    answer?: fhir.ContractTermOfferAnswerArgs[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
}
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export declare class ContractTermOffer extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhir.ContractTermOfferParty[] | undefined;
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
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhir.CodeableConcept | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhir.CodeableConcept[] | undefined;
    /**
     * Response to offer text.
     */
    answer?: fhir.ContractTermOfferAnswer[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: fhir.FhirString[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | undefined;
    /**
     * Default constructor for ContractTermOffer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermOfferArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ContractTermTypeValueSetType;
    /**
     * Extensible-bound Value Set for decision
     */
    static decisionExtensibleValueSet(): V3ActConsentDirectiveValueSetType;
    /**
     * Example-bound Value Set for decisionMode
     */
    static decisionModeExampleValueSet(): ContractDecisionModeValueSetType;
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
 * Valid arguments for the ContractTermAssetContext type.
 */
export interface ContractTermAssetContextArgs extends fhir.BackboneElementArgs {
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Context description.
     */
    text?: fhir.FhirString | string | undefined;
}
/**
 * Circumstance of the asset.
 */
export declare class ContractTermAssetContext extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Context description.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ContractTermAssetContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAssetContextArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ContractAssetcontextValueSetType;
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
 * Valid arguments for the ContractTermAssetValuedItem type.
 */
export interface ContractTermAssetValuedItemArgs extends fhir.BackboneElementArgs {
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entity?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * Terms of valuation.
     */
    payment?: fhir.FhirString | string | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhir.ReferenceArgs | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhir.ReferenceArgs | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
}
/**
 * Contract Valued Item List.
 */
export declare class ContractTermAssetValuedItem extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entity?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    readonly __entityIsChoice: true;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: fhir.FhirDateTime | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Terms of valuation.
     */
    payment?: fhir.FhirString | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: fhir.FhirDateTime | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhir.Reference | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | undefined;
    /**
     * Default constructor for ContractTermAssetValuedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAssetValuedItemArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ContractTermAsset type.
 */
export interface ContractTermAssetArgs extends fhir.BackboneElementArgs {
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.CodeableConceptArgs | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.CodingArgs | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhir.ContractTermAssetContextArgs[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: fhir.FhirString | string | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhir.PeriodArgs[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhir.PeriodArgs[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Response to assets.
     */
    answer?: fhir.ContractTermOfferAnswerArgs[] | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.ContractTermAssetValuedItemArgs[] | undefined;
}
/**
 * Contract Term Asset List.
 */
export declare class ContractTermAsset extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhir.Reference[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhir.CodeableConcept[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.Coding | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhir.ContractTermAssetContext[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: fhir.FhirString | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhir.CodeableConcept[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhir.Period[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhir.Period[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | undefined;
    /**
     * Response to assets.
     */
    answer?: fhir.ContractTermOfferAnswer[] | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.ContractTermAssetValuedItem[] | undefined;
    /**
     * Default constructor for ContractTermAsset - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAssetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for scope
     */
    static scopeExampleValueSet(): ContractAssetscopeValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ContractAssettypeValueSetType;
    /**
     * Example-bound Value Set for subtype
     */
    static subtypeExampleValueSet(): ContractAssetsubtypeValueSetType;
    /**
     * Extensible-bound Value Set for relationship
     */
    static relationshipExtensibleValueSet(): ConsentContentClassValueSetType;
    /**
     * Example-bound Value Set for periodType
     */
    static periodTypeExampleValueSet(): AssetAvailabilityValueSetType;
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
 * Valid arguments for the ContractTermActionSubject type.
 */
export interface ContractTermActionSubjectArgs extends fhir.BackboneElementArgs {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: fhir.ReferenceArgs[] | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Entity of the action.
 */
export declare class ContractTermActionSubject extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<ContractTermActionSubjectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for role
     */
    static roleExampleValueSet(): ContractActorroleValueSetType;
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
 * Valid arguments for the ContractTermAction type.
 */
export interface ContractTermActionArgs extends fhir.BackboneElementArgs {
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Entity of the action.
     */
    subject?: fhir.ContractTermActionSubjectArgs[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.CodeableConceptArgs | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Current state of the term action.
     */
    status: fhir.CodeableConceptArgs | null;
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * When action happens.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * When action happens.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhir.ReferenceArgs[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: fhir.FhirString[] | string[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare class ContractTermAction extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Entity of the action.
     */
    subject?: fhir.ContractTermActionSubject[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.CodeableConcept | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | undefined;
    /**
     * Current state of the term action.
     */
    status: fhir.CodeableConcept | null;
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhir.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: fhir.FhirString[] | undefined;
    /**
     * When action happens.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    readonly __occurrenceIsChoice: true;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhir.Reference[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: fhir.FhirString[] | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhir.CodeableConcept[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhir.CodeableConcept | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: fhir.FhirString[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: fhir.FhirString[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: fhir.FhirString[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | undefined;
    /**
     * Default constructor for ContractTermAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ContractActionValueSetType;
    /**
     * Example-bound Value Set for intent
     */
    static intentExampleValueSet(): V3PurposeOfUseValueSetType;
    /**
     * Example-bound Value Set for status
     */
    static statusExampleValueSet(): ContractActionstatusValueSetType;
    /**
     * Example-bound Value Set for performerType
     */
    static performerTypeExampleValueSet(): ProvenanceAgentTypeValueSetType;
    /**
     * Example-bound Value Set for performerRole
     */
    static performerRoleExampleValueSet(): ProvenanceAgentRoleValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): V3PurposeOfUseValueSetType;
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
 * Valid arguments for the ContractTerm type.
 */
export interface ContractTermArgs extends fhir.BackboneElementArgs {
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: fhir.FhirDateTime | string | undefined;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.PeriodArgs | undefined;
    /**
     * The entity that the term applies to.
     */
    topic?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhir.ReferenceArgs | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhir.ContractTermSecurityLabelArgs[] | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.ContractTermOfferArgs | null;
    /**
     * Contract Term Asset List.
     */
    asset?: fhir.ContractTermAssetArgs[] | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhir.ContractTermActionArgs[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhir.ContractTermArgs[] | undefined;
}
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export declare class ContractTerm extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: fhir.FhirDateTime | undefined;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * The entity that the term applies to.
     */
    topic?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    readonly __topicIsChoice: true;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhir.ContractTermSecurityLabel[] | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.ContractTermOffer | null;
    /**
     * Contract Term Asset List.
     */
    asset?: fhir.ContractTermAsset[] | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhir.ContractTermAction[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhir.ContractTerm[] | undefined;
    /**
     * Default constructor for ContractTerm - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ContractTermTypeValueSetType;
    /**
     * Example-bound Value Set for subType
     */
    static subTypeExampleValueSet(): ContractTermSubtypeValueSetType;
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
 * Valid arguments for the ContractSigner type.
 */
export interface ContractSignerArgs extends fhir.BackboneElementArgs {
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhir.CodingArgs | null;
    /**
     * Party which is a signator to this Contract.
     */
    party: fhir.ReferenceArgs | null;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: fhir.SignatureArgs[] | null;
}
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export declare class ContractSigner extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhir.Coding | null;
    /**
     * Party which is a signator to this Contract.
     */
    party: fhir.Reference | null;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: fhir.Signature[] | null;
    /**
     * Default constructor for ContractSigner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractSignerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for type
     */
    static typePreferredValueSet(): ContractSignerTypeValueSetType;
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
 * Valid arguments for the ContractFriendly type.
 */
export interface ContractFriendlyArgs extends fhir.BackboneElementArgs {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    content?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export declare class ContractFriendly extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    content: (fhir.Attachment | fhir.Reference) | null;
    readonly __contentIsChoice: true;
    /**
     * Default constructor for ContractFriendly - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractFriendlyArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ContractLegal type.
 */
export interface ContractLegalArgs extends fhir.BackboneElementArgs {
    /**
     * Contract legal text in human renderable form.
     */
    content?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * List of Legal expressions or representations of this Contract.
 */
export declare class ContractLegal extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Contract legal text in human renderable form.
     */
    content: (fhir.Attachment | fhir.Reference) | null;
    readonly __contentIsChoice: true;
    /**
     * Default constructor for ContractLegal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractLegalArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ContractRule type.
 */
export interface ContractRuleArgs extends fhir.BackboneElementArgs {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    content?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export declare class ContractRule extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    content: (fhir.Attachment | fhir.Reference) | null;
    readonly __contentIsChoice: true;
    /**
     * Default constructor for ContractRule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractRuleArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the Contract type.
 */
export interface ContractArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Contract" | undefined;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: ContractStatusValueSetEnum | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhir.CodeableConceptArgs | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhir.ReferenceArgs | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: fhir.FhirUri | string | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConceptArgs | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | string | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.PeriodArgs | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhir.ReferenceArgs[] | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhir.ReferenceArgs[] | undefined;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhir.ReferenceArgs[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: fhir.FhirString[] | string[] | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhir.CodeableConceptArgs | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topic?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhir.ReferenceArgs | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.ContractContentDefinitionArgs | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhir.ContractTermArgs[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhir.ContractSignerArgs[] | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhir.ContractFriendlyArgs[] | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhir.ContractLegalArgs[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhir.ContractRuleArgs[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBinding?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export declare class Contract extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Contract";
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: ContractStatusValueSetEnum | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhir.CodeableConcept | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhir.Reference | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: fhir.FhirUri | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConcept | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhir.CodeableConcept | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhir.Reference[] | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhir.Reference[] | undefined;
    /**
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhir.Reference[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: fhir.FhirString | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: fhir.FhirString[] | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhir.Reference | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topic?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    readonly __topicIsChoice: true;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhir.CodeableConcept[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.ContractContentDefinition | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhir.ContractTerm[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhir.Reference[] | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhir.Reference[] | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhir.ContractSigner[] | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhir.ContractFriendly[] | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhir.ContractLegal[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhir.ContractRule[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBinding?: (fhir.Attachment | fhir.Reference) | undefined;
    readonly __legallyBindingIsChoice: true;
    /**
     * Default constructor for Contract - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ContractStatusValueSetType;
    /**
     * Extensible-bound Value Set for legalState
     */
    static legalStateExtensibleValueSet(): ContractLegalstateValueSetType;
    /**
     * Example-bound Value Set for contentDerivative
     */
    static contentDerivativeExampleValueSet(): ContractContentDerivativeValueSetType;
    /**
     * Example-bound Value Set for expirationType
     */
    static expirationTypeExampleValueSet(): ContractExpirationTypeValueSetType;
    /**
     * Example-bound Value Set for scope
     */
    static scopeExampleValueSet(): ContractScopeValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ContractTypeValueSetType;
    /**
     * Example-bound Value Set for subType
     */
    static subTypeExampleValueSet(): ContractSubtypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Contract.d.ts.map