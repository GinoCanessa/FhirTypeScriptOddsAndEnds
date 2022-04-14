// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export class ConceptMapGroupElementTargetDependsOn extends fhirModels.BackboneElement implements fhirInterfaces.IConceptMapGroupElementTargetDependsOn {
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  _display?: fhirModels.Element|undefined;
  /**
   * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
   */
  property?: string|undefined;
  _property?: fhirModels.Element|undefined;
  /**
   * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
   */
  system?: string|undefined;
  _system?: fhirModels.Element|undefined;
  /**
   * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
   */
  value?: string|undefined;
  _value?: fhirModels.Element|undefined;
  /**
   * Default constructor for ConceptMapGroupElementTargetDependsOn from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IConceptMapGroupElementTargetDependsOn>) {
    super(source);
    if (source["display"] !== undefined) { this.display = source.display; }
    if (source["_display"] !== undefined) { this._display = new fhirModels.Element(source._display); }
    if (source["property"] !== undefined) { this.property = source.property; }
    if (source["_property"] !== undefined) { this._property = new fhirModels.Element(source._property); }
    if (source["system"] !== undefined) { this.system = source.system; }
    if (source["_system"] !== undefined) { this._system = new fhirModels.Element(source._system); }
    if (source["value"] !== undefined) { this.value = source.value; }
    if (source["_value"] !== undefined) { this._value = new fhirModels.Element(source._value); }
  }
  /**
   * Factory function to create a ConceptMapGroupElementTargetDependsOn from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IConceptMapGroupElementTargetDependsOn):ConceptMapGroupElementTargetDependsOn {
    var dest:ConceptMapGroupElementTargetDependsOn = new ConceptMapGroupElementTargetDependsOn(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ConceptMapGroupElementTargetDependsOn is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ConceptMapGroupElementTargetDependsOn contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["property"] === undefined) { missingElements.push("property"); }
    if (this["value"] === undefined) { missingElements.push("value"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export class ConceptMapGroupElementTarget extends fhirModels.BackboneElement implements fhirInterfaces.IConceptMapGroupElementTarget {
  /**
   * Identity (code or path) or the element/item that the map refers to.
   */
  code?: string|undefined;
  _code?: fhirModels.Element|undefined;
  /**
   * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
   */
  comment?: string|undefined;
  _comment?: fhirModels.Element|undefined;
  /**
   * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
   */
  dependsOn?: fhirModels.ConceptMapGroupElementTargetDependsOn[]|undefined;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  _display?: fhirModels.Element|undefined;
  /**
   * This element is labeled as a modifier because it may indicate that a target does not apply.
   */
  equivalence?: ConceptMapGroupElementTargetEquivalenceEnum|undefined;
  _equivalence?: fhirModels.Element|undefined;
  /**
   * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
   */
  product?: fhirModels.ConceptMapGroupElementTargetDependsOn[]|undefined;
  /**
   * Default constructor for ConceptMapGroupElementTarget from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IConceptMapGroupElementTarget>) {
    super(source);
    if (source["code"] !== undefined) { this.code = source.code; }
    if (source["_code"] !== undefined) { this._code = new fhirModels.Element(source._code); }
    if (source["comment"] !== undefined) { this.comment = source.comment; }
    if (source["_comment"] !== undefined) { this._comment = new fhirModels.Element(source._comment); }
    if (source["dependsOn"] !== undefined) { this.dependsOn = source.dependsOn.map((x) => new fhirModels.ConceptMapGroupElementTargetDependsOn(x)); }
    if (source["display"] !== undefined) { this.display = source.display; }
    if (source["_display"] !== undefined) { this._display = new fhirModels.Element(source._display); }
    if (source["equivalence"] !== undefined) { this.equivalence = source.equivalence; }
    if (source["_equivalence"] !== undefined) { this._equivalence = new fhirModels.Element(source._equivalence); }
    if (source["product"] !== undefined) { this.product = source.product.map((x) => new fhirModels.ConceptMapGroupElementTargetDependsOn(x)); }
  }
  /**
   * Factory function to create a ConceptMapGroupElementTarget from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IConceptMapGroupElementTarget):ConceptMapGroupElementTarget {
    var dest:ConceptMapGroupElementTarget = new ConceptMapGroupElementTarget(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ConceptMapGroupElementTarget is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ConceptMapGroupElementTarget contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["equivalence"] === undefined) { missingElements.push("equivalence"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the ConceptMap.group.element.target.equivalence field
 */
export enum ConceptMapGroupElementTargetEquivalenceEnum {
  RELATEDTO = "relatedto",
  EQUIVALENT = "equivalent",
  EQUAL = "equal",
  WIDER = "wider",
  SUBSUMES = "subsumes",
  NARROWER = "narrower",
  SPECIALIZES = "specializes",
  INEXACT = "inexact",
  UNMATCHED = "unmatched",
  DISJOINT = "disjoint",
}
/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export class ConceptMapGroupElement extends fhirModels.BackboneElement implements fhirInterfaces.IConceptMapGroupElement {
  /**
   * Identity (code or path) or the element/item being mapped.
   */
  code?: string|undefined;
  _code?: fhirModels.Element|undefined;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  _display?: fhirModels.Element|undefined;
  /**
   * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
   */
  target?: fhirModels.ConceptMapGroupElementTarget[]|undefined;
  /**
   * Default constructor for ConceptMapGroupElement from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IConceptMapGroupElement>) {
    super(source);
    if (source["code"] !== undefined) { this.code = source.code; }
    if (source["_code"] !== undefined) { this._code = new fhirModels.Element(source._code); }
    if (source["display"] !== undefined) { this.display = source.display; }
    if (source["_display"] !== undefined) { this._display = new fhirModels.Element(source._display); }
    if (source["target"] !== undefined) { this.target = source.target.map((x) => new fhirModels.ConceptMapGroupElementTarget(x)); }
  }
  /**
   * Factory function to create a ConceptMapGroupElement from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IConceptMapGroupElement):ConceptMapGroupElement {
    var dest:ConceptMapGroupElement = new ConceptMapGroupElement(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ConceptMapGroupElement is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ConceptMapGroupElement contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export class ConceptMapGroupUnmapped extends fhirModels.BackboneElement implements fhirInterfaces.IConceptMapGroupUnmapped {
  /**
   * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
   */
  code?: string|undefined;
  _code?: fhirModels.Element|undefined;
  /**
   * The display is ignored when processing the map.
   */
  display?: string|undefined;
  _display?: fhirModels.Element|undefined;
  /**
   * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
   */
  mode?: ConceptMapGroupUnmappedModeEnum|undefined;
  _mode?: fhirModels.Element|undefined;
  /**
   * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * Default constructor for ConceptMapGroupUnmapped from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IConceptMapGroupUnmapped>) {
    super(source);
    if (source["code"] !== undefined) { this.code = source.code; }
    if (source["_code"] !== undefined) { this._code = new fhirModels.Element(source._code); }
    if (source["display"] !== undefined) { this.display = source.display; }
    if (source["_display"] !== undefined) { this._display = new fhirModels.Element(source._display); }
    if (source["mode"] !== undefined) { this.mode = source.mode; }
    if (source["_mode"] !== undefined) { this._mode = new fhirModels.Element(source._mode); }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
  }
  /**
   * Factory function to create a ConceptMapGroupUnmapped from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IConceptMapGroupUnmapped):ConceptMapGroupUnmapped {
    var dest:ConceptMapGroupUnmapped = new ConceptMapGroupUnmapped(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ConceptMapGroupUnmapped is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ConceptMapGroupUnmapped contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["mode"] === undefined) { missingElements.push("mode"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the ConceptMap.group.unmapped.mode field
 */
export enum ConceptMapGroupUnmappedModeEnum {
  PROVIDED = "provided",
  FIXED = "fixed",
  OTHER_MAP = "other-map",
}
/**
 * A group of mappings that all have the same source and target system.
 */
export class ConceptMapGroup extends fhirModels.BackboneElement implements fhirInterfaces.IConceptMapGroup {
  /**
   * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
   */
  element?: fhirModels.ConceptMapGroupElement[]|undefined;
  /**
   * This is not needed if the source value set is specified and it contains concepts from only a single system.
   */
  source?: string|undefined;
  _source?: fhirModels.Element|undefined;
  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  sourceVersion?: string|undefined;
  _sourceVersion?: fhirModels.Element|undefined;
  /**
   * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
   */
  target?: string|undefined;
  _target?: fhirModels.Element|undefined;
  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  targetVersion?: string|undefined;
  _targetVersion?: fhirModels.Element|undefined;
  /**
   * This only applies if the source code has a system value that matches the system defined for the group.
   */
  unmapped?: fhirModels.ConceptMapGroupUnmapped|undefined;
  /**
   * Default constructor for ConceptMapGroup from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IConceptMapGroup>) {
    super(source);
    if (source["element"] !== undefined) { this.element = source.element.map((x) => new fhirModels.ConceptMapGroupElement(x)); }
    if (source["source"] !== undefined) { this.source = source.source; }
    if (source["_source"] !== undefined) { this._source = new fhirModels.Element(source._source); }
    if (source["sourceVersion"] !== undefined) { this.sourceVersion = source.sourceVersion; }
    if (source["_sourceVersion"] !== undefined) { this._sourceVersion = new fhirModels.Element(source._sourceVersion); }
    if (source["target"] !== undefined) { this.target = source.target; }
    if (source["_target"] !== undefined) { this._target = new fhirModels.Element(source._target); }
    if (source["targetVersion"] !== undefined) { this.targetVersion = source.targetVersion; }
    if (source["_targetVersion"] !== undefined) { this._targetVersion = new fhirModels.Element(source._targetVersion); }
    if (source["unmapped"] !== undefined) { this.unmapped = new fhirModels.ConceptMapGroupUnmapped(source.unmapped); }
  }
  /**
   * Factory function to create a ConceptMapGroup from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IConceptMapGroup):ConceptMapGroup {
    var dest:ConceptMapGroup = new ConceptMapGroup(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ConceptMapGroup is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ConceptMapGroup contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((this["element"] === undefined) || (this["element"].length === 0)) { missingElements.push("element"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export class ConceptMap extends fhirModels.DomainResource implements fhirInterfaces.IConceptMap {
  /**
   * Resource Type Name
   */
  readonly resourceType = "ConceptMap";
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[]|undefined;
  /**
   * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
   */
  copyright?: string|undefined;
  _copyright?: fhirModels.Element|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Allows filtering of concept maps that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  _experimental?: fhirModels.Element|undefined;
  /**
   * A group of mappings that all have the same source and target system.
   */
  group?: fhirModels.ConceptMapGroup[]|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier|undefined;
  /**
   * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirModels.Element|undefined;
  /**
   * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
   */
  purpose?: string|undefined;
  _purpose?: fhirModels.Element|undefined;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
   */
  sourceUri?: string|undefined;
  _sourceUri?: fhirModels.Element|undefined;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
   */
  sourceCanonical?: string|undefined;
  _sourceCanonical?: fhirModels.Element|undefined;
  /**
   * Allows filtering of concept maps that are appropriate for use versus not.
   */
  status?: ConceptMapStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   */
  targetUri?: string|undefined;
  _targetUri?: fhirModels.Element|undefined;
  /**
   * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
   */
  targetCanonical?: string|undefined;
  _targetCanonical?: fhirModels.Element|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[]|undefined;
  /**
   * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for ConceptMap from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IConceptMap>) {
    super(source);
    if ((source['resourceType'] !== "ConceptMap") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ConceptMap'; }
    if (source["contact"] !== undefined) { this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = new fhirModels.Element(source._copyright); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["experimental"] !== undefined) { this.experimental = source.experimental; }
    if (source["_experimental"] !== undefined) { this._experimental = new fhirModels.Element(source._experimental); }
    if (source["group"] !== undefined) { this.group = source.group.map((x) => new fhirModels.ConceptMapGroup(x)); }
    if (source["identifier"] !== undefined) { this.identifier = new fhirModels.Identifier(source.identifier); }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = new fhirModels.Element(source._publisher); }
    if (source["purpose"] !== undefined) { this.purpose = source.purpose; }
    if (source["_purpose"] !== undefined) { this._purpose = new fhirModels.Element(source._purpose); }
    if (source["sourceUri"] !== undefined) { this.sourceUri = source.sourceUri; }
    if (source["_sourceUri"] !== undefined) { this._sourceUri = new fhirModels.Element(source._sourceUri); }
    if (source["sourceCanonical"] !== undefined) { this.sourceCanonical = source.sourceCanonical; }
    if (source["_sourceCanonical"] !== undefined) { this._sourceCanonical = new fhirModels.Element(source._sourceCanonical); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["targetUri"] !== undefined) { this.targetUri = source.targetUri; }
    if (source["_targetUri"] !== undefined) { this._targetUri = new fhirModels.Element(source._targetUri); }
    if (source["targetCanonical"] !== undefined) { this.targetCanonical = source.targetCanonical; }
    if (source["_targetCanonical"] !== undefined) { this._targetCanonical = new fhirModels.Element(source._targetCanonical); }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = new fhirModels.Element(source._title); }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x)); }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = new fhirModels.Element(source._version); }
  }
  /**
   * Factory function to create a ConceptMap from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IConceptMap):ConceptMap {
    var dest:ConceptMap = new ConceptMap(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ConceptMap is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ConceptMap contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the ConceptMap.status field
 */
export enum ConceptMapStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}
