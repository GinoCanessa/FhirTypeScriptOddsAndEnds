// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: GraphDefinition

import * as fhir from '../fhir.js';

import { GraphCompartmentUseValueSet, GraphCompartmentUseValueSetType,} from '../fhirValueSets/GraphCompartmentUseValueSet.js';
import { GraphCompartmentUseValueSetEnum } from '../valueSetEnums.js';
import { CompartmentTypeValueSet, CompartmentTypeValueSetType,} from '../fhirValueSets/CompartmentTypeValueSet.js';
import { CompartmentTypeValueSetEnum } from '../valueSetEnums.js';
import { GraphCompartmentRuleValueSet, GraphCompartmentRuleValueSetType,} from '../fhirValueSets/GraphCompartmentRuleValueSet.js';
import { GraphCompartmentRuleValueSetEnum } from '../valueSetEnums.js';
import { ResourceTypesValueSet, ResourceTypesValueSetType,} from '../fhirValueSets/ResourceTypesValueSet.js';
import { ResourceTypesValueSetEnum } from '../valueSetEnums.js';
import { PublicationStatusValueSet, PublicationStatusValueSetType,} from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the GraphDefinitionLinkTargetCompartment type.
 */
export interface GraphDefinitionLinkTargetCompartmentArgs extends fhir.BackboneElementArgs {
  /**
   * All conditional rules are evaluated; if they are true, then the rules are evaluated.
   */
  use: GraphCompartmentUseValueSetEnum|null;
  /**
   * Identifies the compartment.
   */
  code: CompartmentTypeValueSetEnum|null;
  /**
   * identical | matching | different | no-rule | custom.
   */
  rule: GraphCompartmentRuleValueSetEnum|null;
  /**
   * Custom rule, as a FHIRPath expression.
   */
  expression?: fhir.FhirString|string|undefined;
  /**
   * Documentation for FHIRPath expression.
   */
  description?: fhir.FhirString|string|undefined;
}

/**
 * Compartment Consistency Rules.
 */
export class GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement {
  readonly __dataType:string = 'GraphDefinitionLinkTargetCompartment';
  /**
   * All conditional rules are evaluated; if they are true, then the rules are evaluated.
   */
  public use: GraphCompartmentUseValueSetEnum|null;
  /**
   * Identifies the compartment.
   */
  public code: CompartmentTypeValueSetEnum|null;
  /**
   * identical | matching | different | no-rule | custom.
   */
  public rule: GraphCompartmentRuleValueSetEnum|null;
  /**
   * Custom rule, as a FHIRPath expression.
   */
  public expression?: fhir.FhirString|undefined;
  /**
   * Documentation for FHIRPath expression.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Default constructor for GraphDefinitionLinkTargetCompartment - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GraphDefinitionLinkTargetCompartmentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use']) { this.use = source.use; }
    else { this.use = null; }
    if (source['code']) { this.code = source.code; }
    else { this.code = null; }
    if (source['rule']) { this.rule = source.rule; }
    else { this.rule = null; }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
  }
  /**
   * Required-bound Value Set for use
   */
  public static useRequiredValueSet():GraphCompartmentUseValueSetType {
    return GraphCompartmentUseValueSet;
  }
  /**
   * Required-bound Value Set for code
   */
  public static codeRequiredValueSet():CompartmentTypeValueSetType {
    return CompartmentTypeValueSet;
  }
  /**
   * Required-bound Value Set for rule
   */
  public static ruleRequiredValueSet():GraphCompartmentRuleValueSetType {
    return GraphCompartmentRuleValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['use']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property use:GraphCompartmentUseValueSetEnum fhir: GraphDefinition.link.target.compartment.use:code", }));
    }
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property code:CompartmentTypeValueSetEnum fhir: GraphDefinition.link.target.compartment.code:code", }));
    }
    if (!this['rule']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property rule:GraphCompartmentRuleValueSetEnum fhir: GraphDefinition.link.target.compartment.rule:code", }));
    }
    if (this["expression"]) { outcome.issue!.push(...this.expression.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the GraphDefinitionLinkTarget type.
 */
export interface GraphDefinitionLinkTargetArgs extends fhir.BackboneElementArgs {
  /**
   * Type of resource this link refers to.
   */
  type: fhir.FhirCode|string|undefined;
  /**
   * At least one of the parameters must have the value {ref} which identifies the focus resource.
   */
  params?: fhir.FhirString|string|undefined;
  /**
   * Profile for the target resource.
   */
  profile?: fhir.FhirCanonical|string|undefined;
  /**
   * Compartment Consistency Rules.
   */
  compartment?: fhir.GraphDefinitionLinkTargetCompartmentArgs[]|undefined;
  /**
   * Additional links from target resource.
   */
  link?: fhir.GraphDefinitionLinkArgs[]|undefined;
}

/**
 * Potential target for the link.
 */
export class GraphDefinitionLinkTarget extends fhir.BackboneElement {
  readonly __dataType:string = 'GraphDefinitionLinkTarget';
  /**
   * Type of resource this link refers to.
   */
  public type: fhir.FhirCode|null;
  /**
   * At least one of the parameters must have the value {ref} which identifies the focus resource.
   */
  public params?: fhir.FhirString|undefined;
  /**
   * Profile for the target resource.
   */
  public profile?: fhir.FhirCanonical|undefined;
  /**
   * Compartment Consistency Rules.
   */
  public compartment?: fhir.GraphDefinitionLinkTargetCompartment[]|undefined = [];
  /**
   * Additional links from target resource.
   */
  public link?: fhir.GraphDefinitionLink[]|undefined = [];
  /**
   * Default constructor for GraphDefinitionLinkTarget - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GraphDefinitionLinkTargetArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode({value: source.type}); }
    else { this.type = null; }
    if (source['params']) { this.params = new fhir.FhirString({value: source.params}); }
    if (source['profile']) { this.profile = new fhir.FhirCanonical({value: source.profile}); }
    if (source['compartment']) { this.compartment = source.compartment.map((x) => new fhir.GraphDefinitionLinkTargetCompartment(x)); }
    if (source['link']) { this.link = source.link.map((x) => new fhir.GraphDefinitionLink(x)); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():ResourceTypesValueSetType {
    return ResourceTypesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:fhir.FhirCode fhir: GraphDefinition.link.target.type:code", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["params"]) { outcome.issue!.push(...this.params.doModelValidation().issue!); }
    if (this["profile"]) { outcome.issue!.push(...this.profile.doModelValidation().issue!); }
    if (this["compartment"]) { this.compartment.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["link"]) { this.link.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the GraphDefinitionLink type.
 */
export interface GraphDefinitionLinkArgs extends fhir.BackboneElementArgs {
  /**
   * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
   */
  path?: fhir.FhirString|string|undefined;
  /**
   * Which slice (if profiled).
   */
  sliceName?: fhir.FhirString|string|undefined;
  /**
   * Minimum occurrences for this link.
   */
  min?: fhir.FhirInteger|number|undefined;
  /**
   * Maximum occurrences for this link.
   */
  max?: fhir.FhirString|string|undefined;
  /**
   * Information about why this link is of interest in this graph definition.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Potential target for the link.
   */
  target?: fhir.GraphDefinitionLinkTargetArgs[]|undefined;
}

/**
 * Links this graph makes rules about.
 */
export class GraphDefinitionLink extends fhir.BackboneElement {
  readonly __dataType:string = 'GraphDefinitionLink';
  /**
   * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
   */
  public path?: fhir.FhirString|undefined;
  /**
   * Which slice (if profiled).
   */
  public sliceName?: fhir.FhirString|undefined;
  /**
   * Minimum occurrences for this link.
   */
  public min?: fhir.FhirInteger|undefined;
  /**
   * Maximum occurrences for this link.
   */
  public max?: fhir.FhirString|undefined;
  /**
   * Information about why this link is of interest in this graph definition.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Potential target for the link.
   */
  public target?: fhir.GraphDefinitionLinkTarget[]|undefined = [];
  /**
   * Default constructor for GraphDefinitionLink - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GraphDefinitionLinkArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    if (source['sliceName']) { this.sliceName = new fhir.FhirString({value: source.sliceName}); }
    if (source['min']) { this.min = new fhir.FhirInteger({value: source.min}); }
    if (source['max']) { this.max = new fhir.FhirString({value: source.max}); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['target']) { this.target = source.target.map((x) => new fhir.GraphDefinitionLinkTarget(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["path"]) { outcome.issue!.push(...this.path.doModelValidation().issue!); }
    if (this["sliceName"]) { outcome.issue!.push(...this.sliceName.doModelValidation().issue!); }
    if (this["min"]) { outcome.issue!.push(...this.min.doModelValidation().issue!); }
    if (this["max"]) { outcome.issue!.push(...this.max.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["target"]) { this.target.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the GraphDefinition type.
 */
export interface GraphDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "GraphDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Allows filtering of graph definitions that are appropriate for use versus not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of graph definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * The type of FHIR resource at which instances of this graph start.
   */
  start: fhir.FhirCode|string|undefined;
  /**
   * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
   */
  profile?: fhir.FhirCanonical|string|undefined;
  /**
   * Links this graph makes rules about.
   */
  link?: fhir.GraphDefinitionLinkArgs[]|undefined;
}

/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export class GraphDefinition extends fhir.DomainResource {
  readonly __dataType:string = 'GraphDefinition';
  /**
   * Resource Type Name
   */
  public resourceType: "GraphDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name: fhir.FhirString|null;
  /**
   * Allows filtering of graph definitions that are appropriate for use versus not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of graph definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined = [];
  /**
   * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined = [];
  /**
   * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined = [];
  /**
   * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * The type of FHIR resource at which instances of this graph start.
   */
  public start: fhir.FhirCode|null;
  /**
   * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
   */
  public profile?: fhir.FhirCanonical|undefined;
  /**
   * Links this graph makes rules about.
   */
  public link?: fhir.GraphDefinitionLink[]|undefined = [];
  /**
   * Default constructor for GraphDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GraphDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'GraphDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    if (source['purpose']) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}); }
    if (source['start']) { this.start = new fhir.FhirCode({value: source.start}); }
    else { this.start = null; }
    if (source['profile']) { this.profile = new fhir.FhirCanonical({value: source.profile}); }
    if (source['link']) { this.link = source.link.map((x) => new fhir.GraphDefinitionLink(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Required-bound Value Set for start
   */
  public static startRequiredValueSet():ResourceTypesValueSetType {
    return ResourceTypesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'GraphDefinition' fhir: GraphDefinition.resourceType:'GraphDefinition'", }));
    }
    if (this["url"]) { outcome.issue!.push(...this.url.doModelValidation().issue!); }
    if (this["version"]) { outcome.issue!.push(...this.version.doModelValidation().issue!); }
    if (!this['name']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property name:fhir.FhirString fhir: GraphDefinition.name:string", }));
    }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: GraphDefinition.status:code", }));
    }
    if (this["experimental"]) { outcome.issue!.push(...this.experimental.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["publisher"]) { outcome.issue!.push(...this.publisher.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["useContext"]) { this.useContext.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["purpose"]) { outcome.issue!.push(...this.purpose.doModelValidation().issue!); }
    if (!this['start']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property start:fhir.FhirCode fhir: GraphDefinition.start:code", }));
    }
    if (this["start"]) { outcome.issue!.push(...this.start.doModelValidation().issue!); }
    if (this["profile"]) { outcome.issue!.push(...this.profile.doModelValidation().issue!); }
    if (this["link"]) { this.link.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
