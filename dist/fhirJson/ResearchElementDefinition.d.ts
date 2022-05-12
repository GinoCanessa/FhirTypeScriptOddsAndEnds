import * as fhir from '../fhirJson.js';
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export interface ResearchElementDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.definition[x]
     */
    _definitionCanonical?: fhir.FhirElement;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.Expression | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhir.UsageContext[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.exclude
     */
    _exclude?: fhir.FhirElement;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffectiveDescription
     */
    _studyEffectiveDescription?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffective[x]
     */
    _studyEffectiveDateTime?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectivePeriod?: fhir.Period | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDuration?: fhir.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveTiming?: fhir.Timing | undefined;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: 'mean' | 'mean-of-mean' | 'mean-of-median' | 'median' | 'median-of-mean' | 'median-of-median' | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffectiveDescription
     */
    _participantEffectiveDescription?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffective[x]
     */
    _participantEffectiveDateTime?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: fhir.Period | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: fhir.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: fhir.Timing | undefined;
    /**
     * Indicates duration from the participant's study entry.
     */
    participantEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: 'mean' | 'mean-of-mean' | 'mean-of-median' | 'median' | 'median-of-mean' | 'median-of-median' | undefined;
}
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export interface ResearchElementDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchElementDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.shortTitle
     */
    _shortTitle?: fhir.FhirElement;
    /**
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: string[] | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.comment
     */
    _comment?: (fhir.FhirElement | null)[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
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
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library?: string[] | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.library
     */
    _library?: (fhir.FhirElement | null)[];
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type: 'exposure' | 'outcome' | 'population' | null;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: 'continuous' | 'descriptive' | 'dichotomous' | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.ResearchElementDefinitionCharacteristic[] | null;
}
//# sourceMappingURL=ResearchElementDefinition.d.ts.map