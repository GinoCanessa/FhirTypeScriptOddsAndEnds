import * as fhir from '../fhir.js';
import { ResourceTypesValueSetType } from '../fhirValueSets/ResourceTypesValueSet.js';
import { FHIRVersionValueSetType } from '../fhirValueSets/FHIRVersionValueSet.js';
import { GuidePageGenerationValueSetType, GuidePageGenerationValueSetEnum } from '../fhirValueSets/GuidePageGenerationValueSet.js';
import { GuideParameterCodeValueSetType, GuideParameterCodeValueSetEnum } from '../fhirValueSets/GuideParameterCodeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { SpdxLicenseValueSetType } from '../fhirValueSets/SpdxLicenseValueSet.js';
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare type IImplementationGuideDependsOn = fhir.IBackboneElement & {
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
     */
    _uri?: fhir.IFhirElement | undefined;
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.packageId
     */
    _packageId?: fhir.IFhirElement | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.version
     */
    _version?: fhir.IFhirElement | undefined;
};
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export declare type IImplementationGuideGlobal = fhir.IBackboneElement & {
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.profile
     */
    _profile?: fhir.IFhirElement | undefined;
};
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export declare type IImplementationGuideDefinitionGrouping = fhir.IBackboneElement & {
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Human readable text describing the package.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.description
     */
    _description?: fhir.IFhirElement | undefined;
};
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare type IImplementationGuideDefinitionResource = fhir.IBackboneElement & {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.IReference | null;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.fhirVersion
     */
    _fhirVersion?: fhir.IFhirElement[] | undefined;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.example[x]
     */
    _exampleBoolean?: fhir.IFhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.example[x]
     */
    _exampleCanonical?: fhir.IFhirElement | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.groupingId
     */
    _groupingId?: fhir.IFhirElement | undefined;
};
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare type IImplementationGuideDefinitionPage = fhir.IBackboneElement & {
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.name[x]
     */
    _nameUrl?: fhir.IFhirElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhir.IReference | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * A code that indicates how the page is generated.
     */
    generation: GuidePageGenerationValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.generation
     */
    _generation?: fhir.IFhirElement | undefined;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.IImplementationGuideDefinitionPage[] | undefined;
};
/**
 * Defines how IG is built by tools.
 */
export declare type IImplementationGuideDefinitionParameter = fhir.IBackboneElement & {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: GuideParameterCodeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * Value for named type.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A template for building resources.
 */
export declare type IImplementationGuideDefinitionTemplate = fhir.IBackboneElement & {
    /**
     * Type of template specified.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The source location for the template.
     */
    source: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.source
     */
    _source?: fhir.IFhirElement | undefined;
    /**
     * The scope in which the template applies.
     */
    scope?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.scope
     */
    _scope?: fhir.IFhirElement | undefined;
};
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export declare type IImplementationGuideDefinition = fhir.IBackboneElement & {
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping?: fhir.IImplementationGuideDefinitionGrouping[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.IImplementationGuideDefinitionResource[] | null;
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.IImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhir.IImplementationGuideDefinitionParameter[] | undefined;
    /**
     * A template for building resources.
     */
    template?: fhir.IImplementationGuideDefinitionTemplate[] | undefined;
};
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare type IImplementationGuideManifestResource = fhir.IBackboneElement & {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.IReference | null;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.example[x]
     */
    _exampleBoolean?: fhir.IFhirElement | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.example[x]
     */
    _exampleCanonical?: fhir.IFhirElement | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.relativePath
     */
    _relativePath?: fhir.IFhirElement | undefined;
};
/**
 * Information about a page within the IG.
 */
export declare type IImplementationGuideManifestPage = fhir.IBackboneElement & {
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Label for the page intended for human display.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.anchor
     */
    _anchor?: fhir.IFhirElement[] | undefined;
};
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export declare type IImplementationGuideManifest = fhir.IBackboneElement & {
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.rendering
     */
    _rendering?: fhir.IFhirElement | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.IImplementationGuideManifestResource[] | null;
    /**
     * Information about a page within the IG.
     */
    page?: fhir.IImplementationGuideManifestPage[] | undefined;
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.image
     */
    _image?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.other
     */
    _other?: fhir.IFhirElement[] | undefined;
};
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export declare type IImplementationGuide = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.packageId
     */
    _packageId?: fhir.IFhirElement | undefined;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.license
     */
    _license?: fhir.IFhirElement | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: string[] | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.fhirVersion
     */
    _fhirVersion?: fhir.IFhirElement[] | undefined;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhir.IImplementationGuideDependsOn[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.IImplementationGuideGlobal[] | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.IImplementationGuideDefinition | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.IImplementationGuideManifest | undefined;
};
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare class ImplementationGuideDependsOn extends fhir.BackboneElement implements IImplementationGuideDependsOn {
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
     */
    _uri?: fhir.FhirElement | undefined;
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.packageId
     */
    _packageId?: fhir.FhirElement | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDependsOn>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export declare class ImplementationGuideGlobal extends fhir.BackboneElement implements IImplementationGuideGlobal {
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.profile
     */
    _profile?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideGlobal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideGlobal>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): ResourceTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export declare class ImplementationGuideDefinitionGrouping extends fhir.BackboneElement implements IImplementationGuideDefinitionGrouping {
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Human readable text describing the package.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDefinitionGrouping>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideDefinitionResource extends fhir.BackboneElement implements IImplementationGuideDefinitionResource {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement[] | undefined;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.example[x]
     */
    _exampleBoolean?: fhir.FhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.example[x]
     */
    _exampleCanonical?: fhir.FhirElement | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.groupingId
     */
    _groupingId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDefinitionResource>);
    /**
     * Required-bound Value Set for fhirVersion
     */
    static fhirVersionRequiredValueSet(): FHIRVersionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare class ImplementationGuideDefinitionPage extends fhir.BackboneElement implements IImplementationGuideDefinitionPage {
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.name[x]
     */
    _nameUrl?: fhir.FhirElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhir.Reference | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * A code that indicates how the page is generated.
     */
    generation: GuidePageGenerationValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.generation
     */
    _generation?: fhir.FhirElement | undefined;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.ImplementationGuideDefinitionPage[] | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDefinitionPage>);
    /**
     * Required-bound Value Set for generation
     */
    static generationRequiredValueSet(): GuidePageGenerationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Defines how IG is built by tools.
 */
export declare class ImplementationGuideDefinitionParameter extends fhir.BackboneElement implements IImplementationGuideDefinitionParameter {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: GuideParameterCodeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * Value for named type.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDefinitionParameter>);
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet(): GuideParameterCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A template for building resources.
 */
export declare class ImplementationGuideDefinitionTemplate extends fhir.BackboneElement implements IImplementationGuideDefinitionTemplate {
    /**
     * Type of template specified.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The source location for the template.
     */
    source: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.source
     */
    _source?: fhir.FhirElement | undefined;
    /**
     * The scope in which the template applies.
     */
    scope?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.scope
     */
    _scope?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDefinitionTemplate>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export declare class ImplementationGuideDefinition extends fhir.BackboneElement implements IImplementationGuideDefinition {
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping?: fhir.ImplementationGuideDefinitionGrouping[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideDefinitionResource[] | null;
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhir.ImplementationGuideDefinitionParameter[] | undefined;
    /**
     * A template for building resources.
     */
    template?: fhir.ImplementationGuideDefinitionTemplate[] | undefined;
    /**
     * Default constructor for ImplementationGuideDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideDefinition>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideManifestResource extends fhir.BackboneElement implements IImplementationGuideManifestResource {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.example[x]
     */
    _exampleBoolean?: fhir.FhirElement | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.example[x]
     */
    _exampleCanonical?: fhir.FhirElement | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.relativePath
     */
    _relativePath?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideManifestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideManifestResource>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about a page within the IG.
 */
export declare class ImplementationGuideManifestPage extends fhir.BackboneElement implements IImplementationGuideManifestPage {
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Label for the page intended for human display.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.anchor
     */
    _anchor?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ImplementationGuideManifestPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideManifestPage>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export declare class ImplementationGuideManifest extends fhir.BackboneElement implements IImplementationGuideManifest {
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.rendering
     */
    _rendering?: fhir.FhirElement | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideManifestResource[] | null;
    /**
     * Information about a page within the IG.
     */
    page?: fhir.ImplementationGuideManifestPage[] | undefined;
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.image
     */
    _image?: fhir.FhirElement[] | undefined;
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.other
     */
    _other?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ImplementationGuideManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuideManifest>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export declare class ImplementationGuide extends fhir.DomainResource implements IImplementationGuide {
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.packageId
     */
    _packageId?: fhir.FhirElement | undefined;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.license
     */
    _license?: fhir.FhirElement | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: string[] | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement[] | undefined;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhir.ImplementationGuideDependsOn[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.ImplementationGuideGlobal[] | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.ImplementationGuideDefinition | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.ImplementationGuideManifest | undefined;
    /**
     * Default constructor for ImplementationGuide - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImplementationGuide>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for license
     */
    static licenseRequiredValueSet(): SpdxLicenseValueSetType;
    /**
     * Required-bound Value Set for fhirVersion
     */
    static fhirVersionRequiredValueSet(): FHIRVersionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ImplementationGuide.d.ts.map