import * as fhir from '../fhir.js';
import { GroupMeasureValueSetType, GroupMeasureValueSetEnum } from '../fhirValueSets/GroupMeasureValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSetType } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { VariableTypeValueSetType, VariableTypeValueSetEnum } from '../fhirValueSets/VariableTypeValueSet.js';
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export declare type IEvidenceVariableCharacteristic = fhir.IBackboneElement & {
    /**
     * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionReference?: fhir.IReference | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.definition[x]
     */
    _definitionCanonical?: fhir.IFhirElement | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.IExpression | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhir.IUsageContext[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.exclude
     */
    _exclude?: fhir.IFhirElement | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.participantEffective[x]
     */
    _participantEffectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: fhir.IDuration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: fhir.ITiming | undefined;
    /**
     * Indicates duration from the participant's study entry.
     */
    timeFromStart?: fhir.IDuration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: GroupMeasureValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.groupMeasure
     */
    _groupMeasure?: fhir.IFhirElement | undefined;
};
/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export declare type IEvidenceVariable = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceVariable";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.shortTitle
     */
    _shortTitle?: fhir.IFhirElement | undefined;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.subtitle
     */
    _subtitle?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of evidence variables that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EvidenceVariable.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the evidence variable to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.approvalDate
     */
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.lastReviewDate
     */
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * The effective period for a evidence variable  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching.
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
     * The type of evidence element, a population, an exposure, or an outcome.
     */
    type?: VariableTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.IEvidenceVariableCharacteristic[] | null;
};
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export declare class EvidenceVariableCharacteristic extends fhir.BackboneElement implements IEvidenceVariableCharacteristic {
    /**
     * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionReference?: fhir.Reference | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.definition[x]
     */
    _definitionCanonical?: fhir.FhirElement | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.Expression | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhir.UsageContext[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: boolean | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.exclude
     */
    _exclude?: fhir.FhirElement | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.participantEffective[x]
     */
    _participantEffectiveDateTime?: fhir.FhirElement | undefined;
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
    timeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    groupMeasure?: GroupMeasureValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.characteristic.groupMeasure
     */
    _groupMeasure?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EvidenceVariableCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEvidenceVariableCharacteristic>);
    /**
     * Required-bound Value Set for groupMeasure
     */
    groupMeasureRequiredValueSet(): GroupMeasureValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export declare class EvidenceVariable extends fhir.DomainResource implements IEvidenceVariable {
    /**
     * Resource Type Name
     */
    resourceType: "EvidenceVariable";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.shortTitle
     */
    _shortTitle?: fhir.FhirElement | undefined;
    /**
     * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.subtitle
     */
    _subtitle?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of evidence variables that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EvidenceVariable.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the evidence variable to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.approvalDate
     */
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * The effective period for a evidence variable  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching.
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
     * The type of evidence element, a population, an exposure, or an outcome.
     */
    type?: VariableTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EvidenceVariable.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.EvidenceVariableCharacteristic[] | null;
    /**
     * Default constructor for EvidenceVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEvidenceVariable>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Example-bound Value Set for topic
     */
    topicExampleValueSet(): DefinitionTopicValueSetType;
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): VariableTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=EvidenceVariable.d.ts.map