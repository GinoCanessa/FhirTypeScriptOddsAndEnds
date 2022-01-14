// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export class ImplementationGuideDependsOn extends fhirModels.BackboneElement {
  /**
   * The NPM package name for the Implementation Guide that this IG depends on.
   */
  packageId?: string;
  _packageId?: fhirModels.Element;
  /**
   * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
   */
  uri: string;
  _uri?: fhirModels.Element;
  /**
   * This follows the syntax of the NPM packaging version field - see [[reference]].
   */
  version?: string;
  _version?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDependsOn) {
    super(source);
    if (source["packageId"] !== undefined) { this.packageId = source.packageId; }
    if (source["_packageId"] !== undefined) { this._packageId = source._packageId; }
    if (source["uri"] === undefined) { throw 'Missing required element uri';}
    this.uri = source.uri;
    if (source["_uri"] !== undefined) { this._uri = source._uri; }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = source._version; }
  }
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export class ImplementationGuideGlobal extends fhirModels.BackboneElement {
  /**
   * A reference to the profile that all instances must conform to.
   */
  profile: string;
  _profile?: fhirModels.Element;
  /**
   * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
   */
  type: string;
  _type?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideGlobal) {
    super(source);
    if (source["profile"] === undefined) { throw 'Missing required element profile';}
    this.profile = source.profile;
    if (source["_profile"] !== undefined) { this._profile = source._profile; }
    if (source["type"] === undefined) { throw 'Missing required element type';}
    this.type = source.type;
    if (source["_type"] !== undefined) { this._type = source._type; }
  }
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export class ImplementationGuideDefinitionGrouping extends fhirModels.BackboneElement {
  /**
   * Human readable text describing the package.
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * The human-readable title to display for the package of resources when rendering the implementation guide.
   */
  name: string;
  _name?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDefinitionGrouping) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["name"] === undefined) { throw 'Missing required element name';}
    this.name = source.name;
    if (source["_name"] !== undefined) { this._name = source._name; }
  }
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export class ImplementationGuideDefinitionResource extends fhirModels.BackboneElement {
  /**
   * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * Examples: 
   * * StructureDefinition -&gt; Any 
   * * ValueSet -&gt; expansion 
   * * OperationDefinition -&gt; Parameters 
   * * Questionnaire -&gt; QuestionnaireResponse.
   */
  exampleBoolean?: boolean;
  _exampleBoolean?: fhirModels.Element;
  /**
   * Examples: 
   * * StructureDefinition -&gt; Any 
   * * ValueSet -&gt; expansion 
   * * OperationDefinition -&gt; Parameters 
   * * Questionnaire -&gt; QuestionnaireResponse.
   */
  exampleCanonical?: string;
  _exampleCanonical?: fhirModels.Element;
  /**
   * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
   */
  fhirVersion?: string[];
  _fhirVersion?: fhirModels.Element[];
  /**
   * This must correspond to a package.id element within this implementation guide.
   */
  groupingId?: string;
  _groupingId?: fhirModels.Element;
  /**
   * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
   */
  name?: string;
  _name?: fhirModels.Element;
  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   */
  reference: fhirModels.Reference;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDefinitionResource) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["exampleBoolean"] !== undefined) { this.exampleBoolean = source.exampleBoolean; }
    if (source["_exampleBoolean"] !== undefined) { this._exampleBoolean = source._exampleBoolean; }
    if (source["exampleCanonical"] !== undefined) { this.exampleCanonical = source.exampleCanonical; }
    if (source["_exampleCanonical"] !== undefined) { this._exampleCanonical = source._exampleCanonical; }
    if (source["fhirVersion"] !== undefined) { this.fhirVersion = source.fhirVersion; }
    if (source["_fhirVersion"] !== undefined) { this._fhirVersion = source._fhirVersion; }
    if (source["groupingId"] !== undefined) { this.groupingId = source.groupingId; }
    if (source["_groupingId"] !== undefined) { this._groupingId = source._groupingId; }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = source._name; }
    if (source["reference"] === undefined) { throw 'Missing required element reference';}
    this.reference = source.reference;
  }
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export class ImplementationGuideDefinitionPage extends fhirModels.BackboneElement {
  /**
   * A code that indicates how the page is generated.
   */
  generation: ImplementationGuideDefinitionPageGenerationEnum;
  _generation?: fhirModels.Element;
  /**
   * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
   */
  nameUrl?: string;
  _nameUrl?: fhirModels.Element;
  /**
   * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
   */
  nameReference?: fhirModels.Reference;
  /**
   * The implementation guide breadcrumbs are generated from this structure.
   */
  page?: fhirModels.ImplementationGuideDefinitionPage[];
  /**
   * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
   */
  title: string;
  _title?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDefinitionPage) {
    super(source);
    if (source["generation"] === undefined) { throw 'Missing required element generation';}
    this.generation = source.generation;
    if (source["_generation"] !== undefined) { this._generation = source._generation; }
    if (source["nameUrl"] !== undefined) { this.nameUrl = source.nameUrl; }
    if (source["_nameUrl"] !== undefined) { this._nameUrl = source._nameUrl; }
    if (source["nameReference"] !== undefined) { this.nameReference = source.nameReference; }
    if (source["page"] !== undefined) { this.page = source.page; }
    if (source["title"] === undefined) { throw 'Missing required element title';}
    this.title = source.title;
    if (source["_title"] !== undefined) { this._title = source._title; }
  }
}
/**
 * Code Values for the ImplementationGuide.definition.page.generation field
 */
export enum ImplementationGuideDefinitionPageGenerationEnum {
  HTML = "html",
  MARKDOWN = "markdown",
  XML = "xml",
  GENERATED = "generated",
}
/**
 * Defines how IG is built by tools.
 */
export class ImplementationGuideDefinitionParameter extends fhirModels.BackboneElement {
  /**
   * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
   */
  code: ImplementationGuideDefinitionParameterCodeEnum;
  _code?: fhirModels.Element;
  /**
   * Value for named type.
   */
  value: string;
  _value?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDefinitionParameter) {
    super(source);
    if (source["code"] === undefined) { throw 'Missing required element code';}
    this.code = source.code;
    if (source["_code"] !== undefined) { this._code = source._code; }
    if (source["value"] === undefined) { throw 'Missing required element value';}
    this.value = source.value;
    if (source["_value"] !== undefined) { this._value = source._value; }
  }
}
/**
 * Code Values for the ImplementationGuide.definition.parameter.code field
 */
export enum ImplementationGuideDefinitionParameterCodeEnum {
  APPLY = "apply",
  PATH_RESOURCE = "path-resource",
  PATH_PAGES = "path-pages",
  PATH_TX_CACHE = "path-tx-cache",
  EXPANSION_PARAMETER = "expansion-parameter",
  RULE_BROKEN_LINKS = "rule-broken-links",
  GENERATE_XML = "generate-xml",
  GENERATE_JSON = "generate-json",
  GENERATE_TURTLE = "generate-turtle",
  HTML_TEMPLATE = "html-template",
}
/**
 * A template for building resources.
 */
export class ImplementationGuideDefinitionTemplate extends fhirModels.BackboneElement {
  /**
   * Type of template specified.
   */
  code: string;
  _code?: fhirModels.Element;
  /**
   * The scope in which the template applies.
   */
  scope?: string;
  _scope?: fhirModels.Element;
  /**
   * The source location for the template.
   */
  source: string;
  _source?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDefinitionTemplate) {
    super(source);
    if (source["code"] === undefined) { throw 'Missing required element code';}
    this.code = source.code;
    if (source["_code"] !== undefined) { this._code = source._code; }
    if (source["scope"] !== undefined) { this.scope = source.scope; }
    if (source["_scope"] !== undefined) { this._scope = source._scope; }
    if (source["source"] === undefined) { throw 'Missing required element source';}
    this.source = source.source;
    if (source["_source"] !== undefined) { this._source = source._source; }
  }
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export class ImplementationGuideDefinition extends fhirModels.BackboneElement {
  /**
   * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
   */
  grouping?: fhirModels.ImplementationGuideDefinitionGrouping[];
  /**
   * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
   */
  page?: fhirModels.ImplementationGuideDefinitionPage;
  /**
   * Defines how IG is built by tools.
   */
  parameter?: fhirModels.ImplementationGuideDefinitionParameter[];
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: fhirModels.ImplementationGuideDefinitionResource[];
  /**
   * A template for building resources.
   */
  template?: fhirModels.ImplementationGuideDefinitionTemplate[];
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideDefinition) {
    super(source);
    if (source["grouping"] !== undefined) { this.grouping = source.grouping; }
    if (source["page"] !== undefined) { this.page = source.page; }
    if (source["parameter"] !== undefined) { this.parameter = source.parameter; }
    if (source["resource"] === undefined) { throw 'Missing required element resource';}
    this.resource = source.resource;
    if (source["template"] !== undefined) { this.template = source.template; }
  }
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export class ImplementationGuideManifestResource extends fhirModels.BackboneElement {
  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
   */
  exampleBoolean?: boolean;
  _exampleBoolean?: fhirModels.Element;
  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
   */
  exampleCanonical?: string;
  _exampleCanonical?: fhirModels.Element;
  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   */
  reference: fhirModels.Reference;
  /**
   * Appending 'rendering' + "/" + this should resolve to the resource page.
   */
  relativePath?: string;
  _relativePath?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideManifestResource) {
    super(source);
    if (source["exampleBoolean"] !== undefined) { this.exampleBoolean = source.exampleBoolean; }
    if (source["_exampleBoolean"] !== undefined) { this._exampleBoolean = source._exampleBoolean; }
    if (source["exampleCanonical"] !== undefined) { this.exampleCanonical = source.exampleCanonical; }
    if (source["_exampleCanonical"] !== undefined) { this._exampleCanonical = source._exampleCanonical; }
    if (source["reference"] === undefined) { throw 'Missing required element reference';}
    this.reference = source.reference;
    if (source["relativePath"] !== undefined) { this.relativePath = source.relativePath; }
    if (source["_relativePath"] !== undefined) { this._relativePath = source._relativePath; }
  }
}
/**
 * Information about a page within the IG.
 */
export class ImplementationGuideManifestPage extends fhirModels.BackboneElement {
  /**
   * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
   */
  anchor?: string[];
  _anchor?: fhirModels.Element[];
  /**
   * Appending 'rendering' + "/" + this should resolve to the page.
   */
  name: string;
  _name?: fhirModels.Element;
  /**
   * Label for the page intended for human display.
   */
  title?: string;
  _title?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideManifestPage) {
    super(source);
    if (source["anchor"] !== undefined) { this.anchor = source.anchor; }
    if (source["_anchor"] !== undefined) { this._anchor = source._anchor; }
    if (source["name"] === undefined) { throw 'Missing required element name';}
    this.name = source.name;
    if (source["_name"] !== undefined) { this._name = source._name; }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = source._title; }
  }
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export class ImplementationGuideManifest extends fhirModels.BackboneElement {
  /**
   * Indicates a relative path to an image that exists within the IG.
   */
  image?: string[];
  _image?: fhirModels.Element[];
  /**
   * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
   */
  other?: string[];
  _other?: fhirModels.Element[];
  /**
   * Information about a page within the IG.
   */
  page?: fhirModels.ImplementationGuideManifestPage[];
  /**
   * A pointer to official web page, PDF or other rendering of the implementation guide.
   */
  rendering?: string;
  _rendering?: fhirModels.Element;
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: fhirModels.ImplementationGuideManifestResource[];
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuideManifest) {
    super(source);
    if (source["image"] !== undefined) { this.image = source.image; }
    if (source["_image"] !== undefined) { this._image = source._image; }
    if (source["other"] !== undefined) { this.other = source.other; }
    if (source["_other"] !== undefined) { this._other = source._other; }
    if (source["page"] !== undefined) { this.page = source.page; }
    if (source["rendering"] !== undefined) { this.rendering = source.rendering; }
    if (source["_rendering"] !== undefined) { this._rendering = source._rendering; }
    if (source["resource"] === undefined) { throw 'Missing required element resource';}
    this.resource = source.resource;
  }
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export class ImplementationGuide extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "ImplementationGuide";
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[];
  /**
   * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
   */
  copyright?: string;
  _copyright?: fhirModels.Element;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string;
  _date?: fhirModels.Element;
  /**
   * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
   */
  definition?: fhirModels.ImplementationGuideDefinition;
  /**
   * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
   */
  dependsOn?: fhirModels.ImplementationGuideDependsOn[];
  /**
   * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * Allows filtering of implementation guides that are appropriate for use versus not.
   */
  experimental?: boolean;
  _experimental?: fhirModels.Element;
  /**
   * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
   */
  fhirVersion: string[];
  _fhirVersion?: fhirModels.Element[];
  /**
   * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
   */
  global?: fhirModels.ImplementationGuideGlobal[];
  /**
   * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[];
  /**
   * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
   */
  license?: string;
  _license?: fhirModels.Element;
  /**
   * Information about an assembled implementation guide, created by the publication tooling.
   */
  manifest?: fhirModels.ImplementationGuideManifest;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: string;
  _name?: fhirModels.Element;
  /**
   * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
   */
  packageId: string;
  _packageId?: fhirModels.Element;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string;
  _publisher?: fhirModels.Element;
  /**
   * Allows filtering of implementation guides that are appropriate for use versus not.
   */
  status: ImplementationGuideStatusEnum;
  _status?: fhirModels.Element;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string;
  _title?: fhirModels.Element;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: string;
  _url?: fhirModels.Element;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[];
  /**
   * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
   */
  version?: string;
  _version?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: ImplementationGuide) {
    super(source);
    if ((source['resourceType'] !== "ImplementationGuide") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ImplementationGuide'; }
    if (source["contact"] !== undefined) { this.contact = source.contact; }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = source._copyright; }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = source._date; }
    if (source["definition"] !== undefined) { this.definition = source.definition; }
    if (source["dependsOn"] !== undefined) { this.dependsOn = source.dependsOn; }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["experimental"] !== undefined) { this.experimental = source.experimental; }
    if (source["_experimental"] !== undefined) { this._experimental = source._experimental; }
    if (source["fhirVersion"] === undefined) { throw 'Missing required element fhirVersion';}
    this.fhirVersion = source.fhirVersion;
    if (source["_fhirVersion"] !== undefined) { this._fhirVersion = source._fhirVersion; }
    if (source["global"] !== undefined) { this.global = source.global; }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction; }
    if (source["license"] !== undefined) { this.license = source.license; }
    if (source["_license"] !== undefined) { this._license = source._license; }
    if (source["manifest"] !== undefined) { this.manifest = source.manifest; }
    if (source["name"] === undefined) { throw 'Missing required element name';}
    this.name = source.name;
    if (source["_name"] !== undefined) { this._name = source._name; }
    if (source["packageId"] === undefined) { throw 'Missing required element packageId';}
    this.packageId = source.packageId;
    if (source["_packageId"] !== undefined) { this._packageId = source._packageId; }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = source._publisher; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = source._title; }
    if (source["url"] === undefined) { throw 'Missing required element url';}
    this.url = source.url;
    if (source["_url"] !== undefined) { this._url = source._url; }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext; }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = source._version; }
  }
}
/**
 * Code Values for the ImplementationGuide.status field
 */
export enum ImplementationGuideStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}
