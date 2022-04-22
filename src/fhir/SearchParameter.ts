// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SearchParameter

import * as fhir from '../fhir.js'

import { PublicationStatusValueSet, PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js'
import { ResourceTypesValueSet, ResourceTypesValueSetType, ResourceTypesValueSetEnum } from '../fhirValueSets/ResourceTypesValueSet.js'
import { SearchParamTypeValueSet, SearchParamTypeValueSetType, SearchParamTypeValueSetEnum } from '../fhirValueSets/SearchParamTypeValueSet.js'
import { SearchXpathUsageValueSet, SearchXpathUsageValueSetType, SearchXpathUsageValueSetEnum } from '../fhirValueSets/SearchXpathUsageValueSet.js'
import { SearchComparatorValueSet, SearchComparatorValueSetType, SearchComparatorValueSetEnum } from '../fhirValueSets/SearchComparatorValueSet.js'
import { SearchModifierCodeValueSet, SearchModifierCodeValueSetType, SearchModifierCodeValueSetEnum } from '../fhirValueSets/SearchModifierCodeValueSet.js'

/**
 * Used to define the parts of a composite search parameter.
 */
export type ISearchParameterComponent = fhir.IBackboneElement & { 
  /**
   * The definition of the search parameter that describes this part.
   */
  definition: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.component.definition
   */
  _definition?: fhir.IFhirElement|undefined;
  /**
   * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
   */
  expression: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.component.expression
   */
  _expression?: fhir.IFhirElement|undefined;
}

/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export type ISearchParameter = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "SearchParameter";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.url
   */
  _url?: fhir.IFhirElement|undefined;
  /**
   * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.version
   */
  _version?: fhir.IFhirElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
   */
  derivedFrom?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.derivedFrom
   */
  _derivedFrom?: fhir.IFhirElement|undefined;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: SearchParameter.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.experimental
   */
  _experimental?: fhir.IFhirElement|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.date
   */
  _date?: fhir.IFhirElement|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.publisher
   */
  _publisher?: fhir.IFhirElement|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.IContactDetail[]|undefined;
  /**
   * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
   */
  description: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.IUsageContext[]|undefined;
  /**
   * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.ICodeableConcept[]|undefined;
  /**
   * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
   */
  purpose?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.purpose
   */
  _purpose?: fhir.IFhirElement|undefined;
  /**
   * For maximum compatibility, use only lowercase ASCII characters.
   */
  code: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.code
   */
  _code?: fhir.IFhirElement|undefined;
  /**
   * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
   */
  base: string[]|null;
  /**
   * Extended properties for primitive element: SearchParameter.base
   */
  _base?: fhir.IFhirElement[]|undefined;
  /**
   * The type of value that a search parameter may contain, and how the content is interpreted.
   */
  type: SearchParamTypeValueSetEnum|null;
  /**
   * Extended properties for primitive element: SearchParameter.type
   */
  _type?: fhir.IFhirElement|undefined;
  /**
   * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
   */
  expression?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.expression
   */
  _expression?: fhir.IFhirElement|undefined;
  /**
   * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
   */
  xpath?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpath
   */
  _xpath?: fhir.IFhirElement|undefined;
  /**
   * How the search parameter relates to the set of elements returned by evaluating the xpath query.
   */
  xpathUsage?: SearchXpathUsageValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpathUsage
   */
  _xpathUsage?: fhir.IFhirElement|undefined;
  /**
   * Types of resource (if a resource is referenced).
   */
  target?: string[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.target
   */
  _target?: fhir.IFhirElement[]|undefined;
  /**
   * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
   */
  multipleOr?: boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.multipleOr
   */
  _multipleOr?: fhir.IFhirElement|undefined;
  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
   */
  multipleAnd?: boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.multipleAnd
   */
  _multipleAnd?: fhir.IFhirElement|undefined;
  /**
   * If no comparators are listed, clients should not expect servers to support any comparators.
   */
  comparator?: SearchComparatorValueSetEnum[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.comparator
   */
  _comparator?: fhir.IFhirElement[]|undefined;
  /**
   * A modifier supported for the search parameter.
   */
  modifier?: SearchModifierCodeValueSetEnum[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.modifier
   */
  _modifier?: fhir.IFhirElement[]|undefined;
  /**
   * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
   */
  chain?: string[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.chain
   */
  _chain?: fhir.IFhirElement[]|undefined;
  /**
   * Used to define the parts of a composite search parameter.
   */
  component?: fhir.ISearchParameterComponent[]|undefined;
}

/**
 * Used to define the parts of a composite search parameter.
 */
export class SearchParameterComponent extends fhir.BackboneElement implements ISearchParameterComponent {
  /**
   * The definition of the search parameter that describes this part.
   */
  public definition: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.component.definition
   */
  public _definition?: fhir.FhirElement|undefined;
  /**
   * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
   */
  public expression: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.component.expression
   */
  public _expression?: fhir.FhirElement|undefined;
  /**
   * Default constructor for SearchParameterComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISearchParameterComponent> = { }) {
    super(source);
    if (source['definition']) { this.definition = source.definition; }
    else { this.definition = null; }
    if (source['_definition']) { this._definition = new fhir.FhirElement(source._definition!); }
    if (source['expression']) { this.expression = source.expression; }
    else { this.expression = null; }
    if (source['_expression']) { this._expression = new fhir.FhirElement(source._expression!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["definition"]) { results.push(["definition",'Missing required element: SearchParameter.component.definition']); }
    if (this["_definition"]) { results.push(...this._definition.doModelValidation()); }
    if (!this["expression"]) { results.push(["expression",'Missing required element: SearchParameter.component.expression']); }
    if (this["_expression"]) { results.push(...this._expression.doModelValidation()); }
    return results;
  }
}

/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export class SearchParameter extends fhir.DomainResource implements ISearchParameter {
  /**
   * Resource Type Name
   */
  public resourceType: "SearchParameter";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.url
   */
  public _url?: fhir.FhirElement|undefined;
  /**
   * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
   */
  public version?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.version
   */
  public _version?: fhir.FhirElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
   */
  public derivedFrom?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.derivedFrom
   */
  public _derivedFrom?: fhir.FhirElement|undefined;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: SearchParameter.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  public experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.experimental
   */
  public _experimental?: fhir.FhirElement|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.date
   */
  public _date?: fhir.FhirElement|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.publisher
   */
  public _publisher?: fhir.FhirElement|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined;
  /**
   * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
   */
  public description: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined;
  /**
   * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined;
  /**
   * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
   */
  public purpose?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.purpose
   */
  public _purpose?: fhir.FhirElement|undefined;
  /**
   * For maximum compatibility, use only lowercase ASCII characters.
   */
  public code: string|null;
  /**
   * Extended properties for primitive element: SearchParameter.code
   */
  public _code?: fhir.FhirElement|undefined;
  /**
   * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
   */
  public base: string[]|null;
  /**
   * Extended properties for primitive element: SearchParameter.base
   */
  public _base?: fhir.FhirElement[]|undefined;
  /**
   * The type of value that a search parameter may contain, and how the content is interpreted.
   */
  public type: SearchParamTypeValueSetEnum|null;
  /**
   * Extended properties for primitive element: SearchParameter.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
   */
  public expression?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.expression
   */
  public _expression?: fhir.FhirElement|undefined;
  /**
   * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
   */
  public xpath?: string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpath
   */
  public _xpath?: fhir.FhirElement|undefined;
  /**
   * How the search parameter relates to the set of elements returned by evaluating the xpath query.
   */
  public xpathUsage?: SearchXpathUsageValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpathUsage
   */
  public _xpathUsage?: fhir.FhirElement|undefined;
  /**
   * Types of resource (if a resource is referenced).
   */
  public target?: string[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.target
   */
  public _target?: fhir.FhirElement[]|undefined;
  /**
   * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
   */
  public multipleOr?: boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.multipleOr
   */
  public _multipleOr?: fhir.FhirElement|undefined;
  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
   */
  public multipleAnd?: boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.multipleAnd
   */
  public _multipleAnd?: fhir.FhirElement|undefined;
  /**
   * If no comparators are listed, clients should not expect servers to support any comparators.
   */
  public comparator?: SearchComparatorValueSetEnum[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.comparator
   */
  public _comparator?: fhir.FhirElement[]|undefined;
  /**
   * A modifier supported for the search parameter.
   */
  public modifier?: SearchModifierCodeValueSetEnum[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.modifier
   */
  public _modifier?: fhir.FhirElement[]|undefined;
  /**
   * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
   */
  public chain?: string[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.chain
   */
  public _chain?: fhir.FhirElement[]|undefined;
  /**
   * Used to define the parts of a composite search parameter.
   */
  public component?: fhir.SearchParameterComponent[]|undefined;
  /**
   * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISearchParameter> = { }) {
    super(source);
    this.resourceType = 'SearchParameter';
    if (source['url']) { this.url = source.url; }
    else { this.url = null; }
    if (source['_url']) { this._url = new fhir.FhirElement(source._url!); }
    if (source['version']) { this.version = source.version; }
    if (source['_version']) { this._version = new fhir.FhirElement(source._version!); }
    if (source['name']) { this.name = source.name; }
    else { this.name = null; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['derivedFrom']) { this.derivedFrom = source.derivedFrom; }
    if (source['_derivedFrom']) { this._derivedFrom = new fhir.FhirElement(source._derivedFrom!); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['experimental']) { this.experimental = source.experimental; }
    if (source['_experimental']) { this._experimental = new fhir.FhirElement(source._experimental!); }
    if (source['date']) { this.date = source.date; }
    if (source['_date']) { this._date = new fhir.FhirElement(source._date!); }
    if (source['publisher']) { this.publisher = source.publisher; }
    if (source['_publisher']) { this._publisher = new fhir.FhirElement(source._publisher!); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = source.description; }
    else { this.description = null; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    if (source['purpose']) { this.purpose = source.purpose; }
    if (source['_purpose']) { this._purpose = new fhir.FhirElement(source._purpose!); }
    if (source['code']) { this.code = source.code; }
    else { this.code = null; }
    if (source['_code']) { this._code = new fhir.FhirElement(source._code!); }
    if (source['base']) { this.base = source.base.map((x) => (x)); }
    else { this.base = null; }
    if (source['_base']) { this._base = source._base.map((x) => new fhir.FhirElement(x)); }
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
    if (source['expression']) { this.expression = source.expression; }
    if (source['_expression']) { this._expression = new fhir.FhirElement(source._expression!); }
    if (source['xpath']) { this.xpath = source.xpath; }
    if (source['_xpath']) { this._xpath = new fhir.FhirElement(source._xpath!); }
    if (source['xpathUsage']) { this.xpathUsage = source.xpathUsage; }
    if (source['_xpathUsage']) { this._xpathUsage = new fhir.FhirElement(source._xpathUsage!); }
    if (source['target']) { this.target = source.target.map((x) => (x)); }
    if (source['_target']) { this._target = source._target.map((x) => new fhir.FhirElement(x)); }
    if (source['multipleOr']) { this.multipleOr = source.multipleOr; }
    if (source['_multipleOr']) { this._multipleOr = new fhir.FhirElement(source._multipleOr!); }
    if (source['multipleAnd']) { this.multipleAnd = source.multipleAnd; }
    if (source['_multipleAnd']) { this._multipleAnd = new fhir.FhirElement(source._multipleAnd!); }
    if (source['comparator']) { this.comparator = source.comparator.map((x) => (x)); }
    if (source['_comparator']) { this._comparator = source._comparator.map((x) => new fhir.FhirElement(x)); }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => (x)); }
    if (source['_modifier']) { this._modifier = source._modifier.map((x) => new fhir.FhirElement(x)); }
    if (source['chain']) { this.chain = source.chain.map((x) => (x)); }
    if (source['_chain']) { this._chain = source._chain.map((x) => new fhir.FhirElement(x)); }
    if (source['component']) { this.component = source.component.map((x) => new fhir.SearchParameterComponent(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Required-bound Value Set for base
   */
  public static baseRequiredValueSet():ResourceTypesValueSetType {
    return ResourceTypesValueSet;
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():SearchParamTypeValueSetType {
    return SearchParamTypeValueSet;
  }
  /**
   * Required-bound Value Set for xpathUsage
   */
  public static xpathUsageRequiredValueSet():SearchXpathUsageValueSetType {
    return SearchXpathUsageValueSet;
  }
  /**
   * Required-bound Value Set for target
   */
  public static targetRequiredValueSet():ResourceTypesValueSetType {
    return ResourceTypesValueSet;
  }
  /**
   * Required-bound Value Set for comparator
   */
  public static comparatorRequiredValueSet():SearchComparatorValueSetType {
    return SearchComparatorValueSet;
  }
  /**
   * Required-bound Value Set for modifier
   */
  public static modifierRequiredValueSet():SearchModifierCodeValueSetType {
    return SearchModifierCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: SearchParameter.resourceType']); }
    if (!this["url"]) { results.push(["url",'Missing required element: SearchParameter.url']); }
    if (this["_url"]) { results.push(...this._url.doModelValidation()); }
    if (this["_version"]) { results.push(...this._version.doModelValidation()); }
    if (!this["name"]) { results.push(["name",'Missing required element: SearchParameter.name']); }
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["_derivedFrom"]) { results.push(...this._derivedFrom.doModelValidation()); }
    if (!this["status"]) { results.push(["status",'Missing required element: SearchParameter.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["_experimental"]) { results.push(...this._experimental.doModelValidation()); }
    if (this["_date"]) { results.push(...this._date.doModelValidation()); }
    if (this["_publisher"]) { results.push(...this._publisher.doModelValidation()); }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["description"]) { results.push(["description",'Missing required element: SearchParameter.description']); }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["useContext"]) { this.useContext.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_purpose"]) { results.push(...this._purpose.doModelValidation()); }
    if (!this["code"]) { results.push(["code",'Missing required element: SearchParameter.code']); }
    if (this["_code"]) { results.push(...this._code.doModelValidation()); }
    if ((!this["base"]) || (this["base"].length === 0)) { results.push(["base",'Missing required element: SearchParameter.base']); }
    if (this["_base"]) { this._base.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["type"]) { results.push(["type",'Missing required element: SearchParameter.type']); }
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    if (this["_expression"]) { results.push(...this._expression.doModelValidation()); }
    if (this["_xpath"]) { results.push(...this._xpath.doModelValidation()); }
    if (this["_xpathUsage"]) { results.push(...this._xpathUsage.doModelValidation()); }
    if (this["_target"]) { this._target.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_multipleOr"]) { results.push(...this._multipleOr.doModelValidation()); }
    if (this["_multipleAnd"]) { results.push(...this._multipleAnd.doModelValidation()); }
    if (this["_comparator"]) { this._comparator.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_modifier"]) { this._modifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_chain"]) { this._chain.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["component"]) { this.component.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
