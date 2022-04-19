import * as fhir from '../fhir';
/**
 * Indicates who should participate in performing the action described.
 */
export declare type IActivityDefinitionParticipant = fhir.IBackboneElement & {
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * The type of participant in the action.
     */
    type: ActivityDefinitionParticipantTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export declare type IActivityDefinitionDynamicValue = fhir.IBackboneElement & {
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.IExpression | null;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: string | null;
    _path?: fhir.IFhirElement | undefined;
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
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.IContactDetail[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite?: fhir.ICodeableConcept[] | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhir.IFhirElement | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: fhir.IDosage[] | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue?: fhir.IActivityDefinitionDynamicValue[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.IContactDetail[] | undefined;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.IContactDetail[] | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: ActivityDefinitionIntentEnum | undefined;
    _intent?: fhir.IFhirElement | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: string | undefined;
    _kind?: fhir.IFhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library?: string[] | undefined;
    _library?: fhir.IFhirElement[] | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.IReference | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement?: fhir.IReference[] | undefined;
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: fhir.IReference[] | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.IActivityDefinitionParticipant[] | undefined;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: ActivityDefinitionPriorityEnum | undefined;
    _priority?: fhir.IFhirElement | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.IReference | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: string | undefined;
    _profile?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.IContactDetail[] | undefined;
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement?: fhir.IReference[] | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: ActivityDefinitionStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectReference?: fhir.IReference | undefined;
    /**
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhir.IFhirElement | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.ITiming | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string | undefined;
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
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
     */
    topic?: fhir.ICodeableConcept[] | undefined;
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: string | undefined;
    _transform?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    _usage?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Indicates who should participate in performing the action described.
 */
export declare class ActivityDefinitionParticipant extends fhir.BackboneElement implements fhir.IActivityDefinitionParticipant {
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The type of participant in the action.
     */
    type: ActivityDefinitionParticipantTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ActivityDefinitionParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IActivityDefinitionParticipant>);
    /**
     * Check if the current ActivityDefinitionParticipant contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ActivityDefinitionParticipant from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IActivityDefinitionParticipant): ActivityDefinitionParticipant;
}
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export declare class ActivityDefinitionDynamicValue extends fhir.BackboneElement implements fhir.IActivityDefinitionDynamicValue {
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.Expression | null;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: string | null;
    _path?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ActivityDefinitionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IActivityDefinitionDynamicValue>);
    /**
     * Check if the current ActivityDefinitionDynamicValue contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ActivityDefinitionDynamicValue from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IActivityDefinitionDynamicValue): ActivityDefinitionDynamicValue;
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export declare class ActivityDefinition extends fhir.DomainResource implements fhir.IActivityDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetail[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite?: fhir.CodeableConcept[] | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhir.FhirElement | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: fhir.Dosage[] | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue?: fhir.ActivityDefinitionDynamicValue[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: ActivityDefinitionIntentEnum | undefined;
    _intent?: fhir.FhirElement | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: string | undefined;
    _kind?: fhir.FhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library?: string[] | undefined;
    _library?: fhir.FhirElement[] | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement?: fhir.Reference[] | undefined;
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: fhir.Reference[] | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.ActivityDefinitionParticipant[] | undefined;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: ActivityDefinitionPriorityEnum | undefined;
    _priority?: fhir.FhirElement | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: string | undefined;
    _profile?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement?: fhir.Reference[] | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: ActivityDefinitionStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhir.FhirElement | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string | undefined;
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
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConcept[] | undefined;
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: string | undefined;
    _transform?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    _usage?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ActivityDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IActivityDefinition>);
    /**
     * Check if the current ActivityDefinition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ActivityDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IActivityDefinition): ActivityDefinition;
}
/**
 * Code Values for the ActivityDefinition.participant.type field
 */
export declare enum ActivityDefinitionParticipantTypeEnum {
    PATIENT = "patient",
    PRACTITIONER = "practitioner",
    RELATED_PERSON = "related-person",
    DEVICE = "device"
}
/**
 * Code Values for the ActivityDefinition.intent field
 */
export declare enum ActivityDefinitionIntentEnum {
    PROPOSAL = "proposal",
    PLAN = "plan",
    DIRECTIVE = "directive",
    ORDER = "order",
    ORIGINAL_ORDER = "original-order",
    REFLEX_ORDER = "reflex-order",
    FILLER_ORDER = "filler-order",
    INSTANCE_ORDER = "instance-order",
    OPTION = "option"
}
/**
 * Code Values for the ActivityDefinition.priority field
 */
export declare enum ActivityDefinitionPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the ActivityDefinition.status field
 */
export declare enum ActivityDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ActivityDefinition.d.ts.map