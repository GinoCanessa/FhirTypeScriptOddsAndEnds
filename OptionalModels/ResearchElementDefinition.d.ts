import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export declare class ResearchElementDefinitionCharacteristic extends fhirModels.BackboneElement implements fhirInterfaces.IResearchElementDefinitionCharacteristic {
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string | undefined;
    _definitionCanonical?: fhirModels.Element | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhirModels.Expression | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: boolean | undefined;
    _exclude?: fhirModels.Element | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string | undefined;
    _participantEffectiveDateTime?: fhirModels.Element | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: fhirModels.Period | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: fhirModels.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: fhirModels.Timing | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: string | undefined;
    _participantEffectiveDescription?: fhirModels.Element | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum | undefined;
    _participantEffectiveGroupMeasure?: fhirModels.Element | undefined;
    /**
     * Indicates duration from the participant's study entry.
     */
    participantEffectiveTimeFromStart?: fhirModels.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDateTime?: string | undefined;
    _studyEffectiveDateTime?: fhirModels.Element | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectivePeriod?: fhirModels.Period | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDuration?: fhirModels.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveTiming?: fhirModels.Timing | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: string | undefined;
    _studyEffectiveDescription?: fhirModels.Element | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum | undefined;
    _studyEffectiveGroupMeasure?: fhirModels.Element | undefined;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhirModels.Duration | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhirModels.CodeableConcept | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhirModels.UsageContext[] | undefined;
    /**
     * Default constructor for ResearchElementDefinitionCharacteristic from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IResearchElementDefinitionCharacteristic>);
    /**
     * Factory function to create a ResearchElementDefinitionCharacteristic from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IResearchElementDefinitionCharacteristic): ResearchElementDefinitionCharacteristic;
    /**
     * Check if the current ResearchElementDefinitionCharacteristic contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure field
 */
export declare enum ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum {
    MEAN = "mean",
    MEDIAN = "median",
    MEAN_OF_MEAN = "mean-of-mean",
    MEAN_OF_MEDIAN = "mean-of-median",
    MEDIAN_OF_MEAN = "median-of-mean",
    MEDIAN_OF_MEDIAN = "median-of-median"
}
/**
 * Code Values for the ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure field
 */
export declare enum ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum {
    MEAN = "mean",
    MEDIAN = "median",
    MEAN_OF_MEAN = "mean-of-mean",
    MEAN_OF_MEDIAN = "mean-of-median",
    MEDIAN_OF_MEAN = "median-of-mean",
    MEDIAN_OF_MEDIAN = "median-of-median"
}
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export declare class ResearchElementDefinition extends fhirModels.DomainResource implements fhirInterfaces.IResearchElementDefinition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ResearchElementDefinition";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhirModels.Element | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhirModels.ContactDetail[] | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic?: fhirModels.ResearchElementDefinitionCharacteristic[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: string[] | undefined;
    _comment?: fhirModels.Element[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhirModels.ContactDetail[] | undefined;
    /**
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhirModels.Period | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhirModels.ContactDetail[] | undefined;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhirModels.Element | undefined;
    /**
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library?: string[] | undefined;
    _library?: fhirModels.Element[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhirModels.ContactDetail[] | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    _shortTitle?: fhirModels.Element | undefined;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status?: ResearchElementDefinitionStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhirModels.Reference | undefined;
    /**
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhirModels.Element | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
     */
    topic?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type?: ResearchElementDefinitionTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: string | undefined;
    _usage?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: ResearchElementDefinitionVariableTypeEnum | undefined;
    _variableType?: fhirModels.Element | undefined;
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for ResearchElementDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IResearchElementDefinition>);
    /**
     * Factory function to create a ResearchElementDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IResearchElementDefinition): ResearchElementDefinition;
    /**
     * Check if the current ResearchElementDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the ResearchElementDefinition.status field
 */
export declare enum ResearchElementDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
/**
 * Code Values for the ResearchElementDefinition.type field
 */
export declare enum ResearchElementDefinitionTypeEnum {
    POPULATION = "population",
    EXPOSURE = "exposure",
    OUTCOME = "outcome"
}
/**
 * Code Values for the ResearchElementDefinition.variableType field
 */
export declare enum ResearchElementDefinitionVariableTypeEnum {
    DICHOTOMOUS = "dichotomous",
    CONTINUOUS = "continuous",
    DESCRIPTIVE = "descriptive"
}
//# sourceMappingURL=ResearchElementDefinition.d.ts.map