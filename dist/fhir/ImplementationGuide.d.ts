import * as fhir from '../fhir';
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare type IImplementationGuideDependsOn = fhir.IBackboneElement & {
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: string | undefined;
    _packageId?: fhir.IFhirElement | undefined;
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: string | null;
    _uri?: fhir.IFhirElement | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export declare type IImplementationGuideGlobal = fhir.IBackboneElement & {
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: string | null;
    _profile?: fhir.IFhirElement | undefined;
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: string | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export declare type IImplementationGuideDefinitionGrouping = fhir.IBackboneElement & {
    /**
     * Human readable text describing the package.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
};
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare type IImplementationGuideDefinitionResource = fhir.IBackboneElement & {
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: boolean | undefined;
    _exampleBoolean?: fhir.IFhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: string | undefined;
    _exampleCanonical?: fhir.IFhirElement | undefined;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: string[] | undefined;
    _fhirVersion?: fhir.IFhirElement[] | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: string | undefined;
    _groupingId?: fhir.IFhirElement | undefined;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.IReference | null;
};
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare type IImplementationGuideDefinitionPage = fhir.IBackboneElement & {
    /**
     * A code that indicates how the page is generated.
     */
    generation: ImplementationGuideDefinitionPageGenerationEnum | null;
    _generation?: fhir.IFhirElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: string | undefined;
    _nameUrl?: fhir.IFhirElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhir.IReference | undefined;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.IImplementationGuideDefinitionPage[] | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: string | null;
    _title?: fhir.IFhirElement | undefined;
};
/**
 * Defines how IG is built by tools.
 */
export declare type IImplementationGuideDefinitionParameter = fhir.IBackboneElement & {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: ImplementationGuideDefinitionParameterCodeEnum | null;
    _code?: fhir.IFhirElement | undefined;
    /**
     * Value for named type.
     */
    value: string | null;
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
    _code?: fhir.IFhirElement | undefined;
    /**
     * The scope in which the template applies.
     */
    scope?: string | undefined;
    _scope?: fhir.IFhirElement | undefined;
    /**
     * The source location for the template.
     */
    source: string | null;
    _source?: fhir.IFhirElement | undefined;
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
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.IImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhir.IImplementationGuideDefinitionParameter[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.IImplementationGuideDefinitionResource[] | null;
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
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: boolean | undefined;
    _exampleBoolean?: fhir.IFhirElement | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: string | undefined;
    _exampleCanonical?: fhir.IFhirElement | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.IReference | null;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: string | undefined;
    _relativePath?: fhir.IFhirElement | undefined;
};
/**
 * Information about a page within the IG.
 */
export declare type IImplementationGuideManifestPage = fhir.IBackboneElement & {
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: string[] | undefined;
    _anchor?: fhir.IFhirElement[] | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Label for the page intended for human display.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
};
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export declare type IImplementationGuideManifest = fhir.IBackboneElement & {
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: string[] | undefined;
    _image?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: string[] | undefined;
    _other?: fhir.IFhirElement[] | undefined;
    /**
     * Information about a page within the IG.
     */
    page?: fhir.IImplementationGuideManifestPage[] | undefined;
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: string | undefined;
    _rendering?: fhir.IFhirElement | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.IImplementationGuideManifestResource[] | null;
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
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.IImplementationGuideDefinition | undefined;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhir.IImplementationGuideDependsOn[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: string[] | null;
    _fhirVersion?: fhir.IFhirElement[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.IImplementationGuideGlobal[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: string | undefined;
    _license?: fhir.IFhirElement | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.IImplementationGuideManifest | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: string | null;
    _packageId?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: ImplementationGuideStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare class ImplementationGuideDependsOn extends fhir.BackboneElement implements fhir.IImplementationGuideDependsOn {
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: string | undefined;
    _packageId?: fhir.FhirElement | undefined;
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: string | null;
    _uri?: fhir.FhirElement | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDependsOn>);
    /**
     * Check if the current ImplementationGuideDependsOn contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDependsOn from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDependsOn): ImplementationGuideDependsOn;
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export declare class ImplementationGuideGlobal extends fhir.BackboneElement implements fhir.IImplementationGuideGlobal {
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: string | null;
    _profile?: fhir.FhirElement | undefined;
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: string | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideGlobal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideGlobal>);
    /**
     * Check if the current ImplementationGuideGlobal contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideGlobal from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideGlobal): ImplementationGuideGlobal;
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export declare class ImplementationGuideDefinitionGrouping extends fhir.BackboneElement implements fhir.IImplementationGuideDefinitionGrouping {
    /**
     * Human readable text describing the package.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDefinitionGrouping>);
    /**
     * Check if the current ImplementationGuideDefinitionGrouping contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDefinitionGrouping from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDefinitionGrouping): ImplementationGuideDefinitionGrouping;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideDefinitionResource extends fhir.BackboneElement implements fhir.IImplementationGuideDefinitionResource {
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: boolean | undefined;
    _exampleBoolean?: fhir.FhirElement | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: string | undefined;
    _exampleCanonical?: fhir.FhirElement | undefined;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: string[] | undefined;
    _fhirVersion?: fhir.FhirElement[] | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: string | undefined;
    _groupingId?: fhir.FhirElement | undefined;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ImplementationGuideDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDefinitionResource>);
    /**
     * Check if the current ImplementationGuideDefinitionResource contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDefinitionResource from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDefinitionResource): ImplementationGuideDefinitionResource;
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare class ImplementationGuideDefinitionPage extends fhir.BackboneElement implements fhir.IImplementationGuideDefinitionPage {
    /**
     * A code that indicates how the page is generated.
     */
    generation: ImplementationGuideDefinitionPageGenerationEnum | null;
    _generation?: fhir.FhirElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: string | undefined;
    _nameUrl?: fhir.FhirElement | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhir.Reference | undefined;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.ImplementationGuideDefinitionPage[] | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: string | null;
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDefinitionPage>);
    /**
     * Check if the current ImplementationGuideDefinitionPage contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDefinitionPage from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDefinitionPage): ImplementationGuideDefinitionPage;
}
/**
 * Defines how IG is built by tools.
 */
export declare class ImplementationGuideDefinitionParameter extends fhir.BackboneElement implements fhir.IImplementationGuideDefinitionParameter {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: ImplementationGuideDefinitionParameterCodeEnum | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * Value for named type.
     */
    value: string | null;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDefinitionParameter>);
    /**
     * Check if the current ImplementationGuideDefinitionParameter contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDefinitionParameter from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDefinitionParameter): ImplementationGuideDefinitionParameter;
}
/**
 * A template for building resources.
 */
export declare class ImplementationGuideDefinitionTemplate extends fhir.BackboneElement implements fhir.IImplementationGuideDefinitionTemplate {
    /**
     * Type of template specified.
     */
    code: string | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * The scope in which the template applies.
     */
    scope?: string | undefined;
    _scope?: fhir.FhirElement | undefined;
    /**
     * The source location for the template.
     */
    source: string | null;
    _source?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDefinitionTemplate>);
    /**
     * Check if the current ImplementationGuideDefinitionTemplate contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDefinitionTemplate from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDefinitionTemplate): ImplementationGuideDefinitionTemplate;
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export declare class ImplementationGuideDefinition extends fhir.BackboneElement implements fhir.IImplementationGuideDefinition {
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping?: fhir.ImplementationGuideDefinitionGrouping[] | undefined;
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhir.ImplementationGuideDefinitionParameter[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideDefinitionResource[] | null;
    /**
     * A template for building resources.
     */
    template?: fhir.ImplementationGuideDefinitionTemplate[] | undefined;
    /**
     * Default constructor for ImplementationGuideDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideDefinition>);
    /**
     * Check if the current ImplementationGuideDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideDefinition): ImplementationGuideDefinition;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideManifestResource extends fhir.BackboneElement implements fhir.IImplementationGuideManifestResource {
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: boolean | undefined;
    _exampleBoolean?: fhir.FhirElement | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: string | undefined;
    _exampleCanonical?: fhir.FhirElement | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: string | undefined;
    _relativePath?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideManifestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideManifestResource>);
    /**
     * Check if the current ImplementationGuideManifestResource contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideManifestResource from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideManifestResource): ImplementationGuideManifestResource;
}
/**
 * Information about a page within the IG.
 */
export declare class ImplementationGuideManifestPage extends fhir.BackboneElement implements fhir.IImplementationGuideManifestPage {
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: string[] | undefined;
    _anchor?: fhir.FhirElement[] | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Label for the page intended for human display.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuideManifestPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideManifestPage>);
    /**
     * Check if the current ImplementationGuideManifestPage contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideManifestPage from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideManifestPage): ImplementationGuideManifestPage;
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export declare class ImplementationGuideManifest extends fhir.BackboneElement implements fhir.IImplementationGuideManifest {
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: string[] | undefined;
    _image?: fhir.FhirElement[] | undefined;
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: string[] | undefined;
    _other?: fhir.FhirElement[] | undefined;
    /**
     * Information about a page within the IG.
     */
    page?: fhir.ImplementationGuideManifestPage[] | undefined;
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: string | undefined;
    _rendering?: fhir.FhirElement | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideManifestResource[] | null;
    /**
     * Default constructor for ImplementationGuideManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuideManifest>);
    /**
     * Check if the current ImplementationGuideManifest contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuideManifest from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuideManifest): ImplementationGuideManifest;
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export declare class ImplementationGuide extends fhir.DomainResource implements fhir.IImplementationGuide {
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.ImplementationGuideDefinition | undefined;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhir.ImplementationGuideDependsOn[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: string[] | null;
    _fhirVersion?: fhir.FhirElement[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.ImplementationGuideGlobal[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: string | undefined;
    _license?: fhir.FhirElement | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.ImplementationGuideManifest | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: string | null;
    _packageId?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: ImplementationGuideStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImplementationGuide - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImplementationGuide>);
    /**
     * Check if the current ImplementationGuide contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImplementationGuide from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImplementationGuide): ImplementationGuide;
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
 * Code Values for the ImplementationGuide.status field
 */
export declare enum ImplementationGuideStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ImplementationGuide.d.ts.map