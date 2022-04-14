import * as fhirInterfaces from '../strictinterfaces';
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export interface IImplementationGuideDependsOn extends fhirInterfaces.IBackboneElement {
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: string | undefined;
    _packageId?: fhirInterfaces.IElement | undefined;
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: string;
    _uri?: fhirInterfaces.IElement | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export interface IImplementationGuideGlobal extends fhirInterfaces.IBackboneElement {
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: string;
    _profile?: fhirInterfaces.IElement | undefined;
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: string;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export interface IImplementationGuideDefinitionGrouping extends fhirInterfaces.IBackboneElement {
    /**
     * Human readable text describing the package.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export interface IImplementationGuideDefinitionResource extends fhirInterfaces.IBackboneElement {
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: boolean | undefined;
    _exampleBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: string | undefined;
    _exampleCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: string[] | undefined;
    _fhirVersion?: fhirInterfaces.IElement[] | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: string | undefined;
    _groupingId?: fhirInterfaces.IElement | undefined;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhirInterfaces.IReference;
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export interface IImplementationGuideDefinitionPage extends fhirInterfaces.IBackboneElement {
    /**
     * A code that indicates how the page is generated.
     */
    generation: ImplementationGuideDefinitionPageGenerationEnum;
    _generation?: fhirInterfaces.IElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: string | undefined;
    _nameUrl?: fhirInterfaces.IElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhirInterfaces.IReference | undefined;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhirInterfaces.IImplementationGuideDefinitionPage[] | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: string;
    _title?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ImplementationGuide.definition.page.generation field
 */
export declare enum ImplementationGuideDefinitionPageGenerationEnum {
    HTML = "html",
    MARKDOWN = "markdown",
    XML = "xml",
    GENERATED = "generated"
}
/**
 * Defines how IG is built by tools.
 */
export interface IImplementationGuideDefinitionParameter extends fhirInterfaces.IBackboneElement {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: ImplementationGuideDefinitionParameterCodeEnum;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * Value for named type.
     */
    value: string;
    _value?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ImplementationGuide.definition.parameter.code field
 */
export declare enum ImplementationGuideDefinitionParameterCodeEnum {
    APPLY = "apply",
    PATH_RESOURCE = "path-resource",
    PATH_PAGES = "path-pages",
    PATH_TX_CACHE = "path-tx-cache",
    EXPANSION_PARAMETER = "expansion-parameter",
    RULE_BROKEN_LINKS = "rule-broken-links",
    GENERATE_XML = "generate-xml",
    GENERATE_JSON = "generate-json",
    GENERATE_TURTLE = "generate-turtle",
    HTML_TEMPLATE = "html-template"
}
/**
 * A template for building resources.
 */
export interface IImplementationGuideDefinitionTemplate extends fhirInterfaces.IBackboneElement {
    /**
     * Type of template specified.
     */
    code: string;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * The scope in which the template applies.
     */
    scope?: string | undefined;
    _scope?: fhirInterfaces.IElement | undefined;
    /**
     * The source location for the template.
     */
    source: string;
    _source?: fhirInterfaces.IElement | undefined;
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export interface IImplementationGuideDefinition extends fhirInterfaces.IBackboneElement {
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping?: fhirInterfaces.IImplementationGuideDefinitionGrouping[] | undefined;
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhirInterfaces.IImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhirInterfaces.IImplementationGuideDefinitionParameter[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhirInterfaces.IImplementationGuideDefinitionResource[];
    /**
     * A template for building resources.
     */
    template?: fhirInterfaces.IImplementationGuideDefinitionTemplate[] | undefined;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export interface IImplementationGuideManifestResource extends fhirInterfaces.IBackboneElement {
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: boolean | undefined;
    _exampleBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: string | undefined;
    _exampleCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhirInterfaces.IReference;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: string | undefined;
    _relativePath?: fhirInterfaces.IElement | undefined;
}
/**
 * Information about a page within the IG.
 */
export interface IImplementationGuideManifestPage extends fhirInterfaces.IBackboneElement {
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: string[] | undefined;
    _anchor?: fhirInterfaces.IElement[] | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Label for the page intended for human display.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export interface IImplementationGuideManifest extends fhirInterfaces.IBackboneElement {
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: string[] | undefined;
    _image?: fhirInterfaces.IElement[] | undefined;
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: string[] | undefined;
    _other?: fhirInterfaces.IElement[] | undefined;
    /**
     * Information about a page within the IG.
     */
    page?: fhirInterfaces.IImplementationGuideManifestPage[] | undefined;
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: string | undefined;
    _rendering?: fhirInterfaces.IElement | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhirInterfaces.IImplementationGuideManifestResource[];
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export interface IImplementationGuide extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ImplementationGuide";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhirInterfaces.IImplementationGuideDefinition | undefined;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhirInterfaces.IImplementationGuideDependsOn[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: string[];
    _fhirVersion?: fhirInterfaces.IElement[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhirInterfaces.IImplementationGuideGlobal[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: string | undefined;
    _license?: fhirInterfaces.IElement | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhirInterfaces.IImplementationGuideManifest | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: string;
    _packageId?: fhirInterfaces.IElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: ImplementationGuideStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ImplementationGuide.status field
 */
export declare enum ImplementationGuideStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IImplementationGuide.d.ts.map