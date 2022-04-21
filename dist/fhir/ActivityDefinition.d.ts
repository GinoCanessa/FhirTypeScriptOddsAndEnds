import * as fhir from '../fhir.js';
import { ActionParticipantTypeValueSetType, ActionParticipantTypeValueSetEnum } from '../fhirValueSets/ActionParticipantTypeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { SubjectTypeValueSetType } from '../fhirValueSets/SubjectTypeValueSet.js';
import { DefinitionTopicValueSetType } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { RequestResourceTypesValueSetType } from '../fhirValueSets/RequestResourceTypesValueSet.js';
import { ProcedureCodeValueSetType } from '../fhirValueSets/ProcedureCodeValueSet.js';
import { RequestIntentValueSetType, RequestIntentValueSetEnum } from '../fhirValueSets/RequestIntentValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { MedicationCodesValueSetType } from '../fhirValueSets/MedicationCodesValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
/**
 * Indicates who should participate in performing the action described.
 */
export declare type IActivityDefinitionParticipant = fhir.IBackboneElement & {
    /**
     * The type of participant in the action.
     */
    type: ActionParticipantTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.participant.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.ICodeableConcept | undefined;
};
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export declare type IActivityDefinitionDynamicValue = fhir.IBackboneElement & {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.IExpression | null;
};
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export declare type IActivityDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.subtitle
     */
    _subtitle?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectReference?: fhir.IReference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.usage
     */
    _usage?: fhir.IFhirElement | undefined;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.approvalDate
     */
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
     */
    topic?: fhir.ICodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.IContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library?: string[] | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.library
     */
    _library?: fhir.IFhirElement[] | undefined;
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.kind
     */
    _kind?: fhir.IFhirElement | undefined;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.profile
     */
    _profile?: fhir.IFhirElement | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: RequestIntentValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.intent
     */
    _intent?: fhir.IFhirElement | undefined;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.doNotPerform
     */
    _doNotPerform?: fhir.IFhirElement | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.ITiming | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.timing[x]
     */
    _timingDateTime?: fhir.IFhirElement | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingAge?: fhir.IAge | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingPeriod?: fhir.IPeriod | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: fhir.IRange | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDuration?: fhir.IDuration | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.IReference | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.IActivityDefinitionParticipant[] | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.IReference | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: fhir.IDosage[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite?: fhir.ICodeableConcept[] | undefined;
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement?: fhir.IReference[] | undefined;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement?: fhir.IReference[] | undefined;
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: fhir.IReference[] | undefined;
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.transform
     */
    _transform?: fhir.IFhirElement | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue?: fhir.IActivityDefinitionDynamicValue[] | undefined;
};
/**
 * Indicates who should participate in performing the action described.
 */
export declare class ActivityDefinitionParticipant extends fhir.BackboneElement implements IActivityDefinitionParticipant {
    /**
     * The type of participant in the action.
     */
    type: ActionParticipantTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.participant.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ActivityDefinitionParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IActivityDefinitionParticipant>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): ActionParticipantTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export declare class ActivityDefinitionDynamicValue extends fhir.BackboneElement implements IActivityDefinitionDynamicValue {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.Expression | null;
    /**
     * Default constructor for ActivityDefinitionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IActivityDefinitionDynamicValue>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export declare class ActivityDefinition extends fhir.DomainResource implements IActivityDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.subtitle
     */
    _subtitle?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.usage
     */
    _usage?: fhir.FhirElement | undefined;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library?: string[] | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.library
     */
    _library?: fhir.FhirElement[] | undefined;
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.kind
     */
    _kind?: fhir.FhirElement | undefined;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.profile
     */
    _profile?: fhir.FhirElement | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: RequestIntentValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.intent
     */
    _intent?: fhir.FhirElement | undefined;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.doNotPerform
     */
    _doNotPerform?: fhir.FhirElement | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.timing[x]
     */
    _timingDateTime?: fhir.FhirElement | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingAge?: fhir.Age | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: fhir.Range | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDuration?: fhir.Duration | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.ActivityDefinitionParticipant[] | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: fhir.Dosage[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite?: fhir.CodeableConcept[] | undefined;
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement?: fhir.Reference[] | undefined;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement?: fhir.Reference[] | undefined;
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: fhir.Reference[] | undefined;
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.transform
     */
    _transform?: fhir.FhirElement | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue?: fhir.ActivityDefinitionDynamicValue[] | undefined;
    /**
     * Default constructor for ActivityDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IActivityDefinition>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Extensible-bound Value Set for subjectCodeableConcept
     */
    subjectCodeableConceptExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Extensible-bound Value Set for subjectReference
     */
    subjectReferenceExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Example-bound Value Set for topic
     */
    topicExampleValueSet(): DefinitionTopicValueSetType;
    /**
     * Required-bound Value Set for kind
     */
    kindRequiredValueSet(): RequestResourceTypesValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ProcedureCodeValueSetType;
    /**
     * Required-bound Value Set for intent
     */
    intentRequiredValueSet(): RequestIntentValueSetType;
    /**
     * Required-bound Value Set for priority
     */
    priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Example-bound Value Set for productReference
     */
    productReferenceExampleValueSet(): MedicationCodesValueSetType;
    /**
     * Example-bound Value Set for productCodeableConcept
     */
    productCodeableConceptExampleValueSet(): MedicationCodesValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ActivityDefinition.d.ts.map