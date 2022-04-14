import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export interface IResearchDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ResearchDefinition";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhirInterfaces.IElement | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: string[] | undefined;
    _comment?: fhirInterfaces.IElement[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the research definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research definition is presumed to be the predominant language in the place the research definition was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * The effective period for a research definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * Allows filtering of research definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
     */
    exposure?: fhirInterfaces.IReference | undefined;
    /**
     * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
     */
    exposureAlternative?: fhirInterfaces.IReference | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
     */
    library?: string[] | undefined;
    _library?: fhirInterfaces.IElement[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
     */
    outcome?: fhirInterfaces.IReference | undefined;
    /**
     * A reference to a ResearchElementDefinition resource that defines the population for the research.
     */
    population?: fhirInterfaces.IReference | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research definition is the organization or individual primarily responsible for the maintenance and upkeep of the research definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the research definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhirInterfaces.IRelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    _shortTitle?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of research definitions that are appropriate for use versus not.
     */
    status?: ResearchDefinitionStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhirInterfaces.IReference | undefined;
    /**
     * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhirInterfaces.IElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
     */
    topic?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
     */
    usage?: string | undefined;
    _usage?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different research definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ResearchDefinition.status field
 */
export declare enum ResearchDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IResearchDefinition.d.ts.map