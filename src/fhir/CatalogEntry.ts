// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export type ICatalogEntryRelatedEntry = fhir.IBackboneElement & {
  /**
   * The reference to the related item.
   */
  item: fhir.IReference|null;
  /**
   * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
   */
  relationtype: CatalogEntryRelatedEntryRelationtypeEnum|null;
  _relationtype?: fhir.IFhirElement|undefined;
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export type ICatalogEntry = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "CatalogEntry";
  /**
   * Used for examplefor Out of Formulary, or any specifics.
   */
  additionalCharacteristic?: fhir.ICodeableConcept[]|undefined;
  /**
   * User for example for ATC classification, or.
   */
  additionalClassification?: fhir.ICodeableConcept[]|undefined;
  /**
   * Used in supporting related concepts, e.g. NDC to RxNorm.
   */
  additionalIdentifier?: fhir.IIdentifier[]|undefined;
  /**
   * Classes of devices, or ATC for medication.
   */
  classification?: fhir.ICodeableConcept[]|undefined;
  /**
   * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Perhaps not needed - if we use fhir resource metadata.
   */
  lastUpdated?: string|undefined;
  _lastUpdated?: fhir.IFhirElement|undefined;
  /**
   * Whether the entry represents an orderable item.
   */
  orderable: boolean|null;
  _orderable?: fhir.IFhirElement|undefined;
  /**
   * The item in a catalog or definition.
   */
  referencedItem: fhir.IReference|null;
  /**
   * Used for example, to point to a substance, or to a device used to administer a medication.
   */
  relatedEntry?: fhir.ICatalogEntryRelatedEntry[]|undefined;
  /**
   * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
   */
  status?: CatalogEntryStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
  /**
   * The type of item - medication, device, service, protocol or other.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The time period in which this catalog entry is expected to be active.
   */
  validityPeriod?: fhir.IPeriod|undefined;
  /**
   * The date until which this catalog entry is expected to be active.
   */
  validTo?: string|undefined;
  _validTo?: fhir.IFhirElement|undefined;
}
/**
 * Used for example, to point to a substance, or to a device used to administer a medication.
 */
export class CatalogEntryRelatedEntry extends fhir.BackboneElement implements fhir.ICatalogEntryRelatedEntry {
  /**
   * The reference to the related item.
   */
  public item: fhir.Reference|null;
  /**
   * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
   */
  public relationtype: CatalogEntryRelatedEntryRelationtypeEnum|null;
  public _relationtype?: fhir.FhirElement|undefined;
  /**
   * Default constructor for CatalogEntryRelatedEntry - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICatalogEntryRelatedEntry> = {}) {
    super(source);
    this.item = null;
    if (source["item"]) { this.item = new fhir.Reference(source.item!); }
    if (this.item === undefined) { this.item = null }
    this.relationtype = null;
    if (source["relationtype"]) { this.relationtype = source.relationtype; }
    if (this.relationtype === undefined) { this.relationtype = null }
    if (source["_relationtype"]) { this._relationtype = new fhir.FhirElement(source._relationtype!); }
  }
  /**
   * Check if the current CatalogEntryRelatedEntry contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["item"] === undefined) { missingElements.push("item"); }
    if (this["relationtype"] === undefined) { missingElements.push("relationtype"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CatalogEntryRelatedEntry from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICatalogEntryRelatedEntry):CatalogEntryRelatedEntry {
    var dest:CatalogEntryRelatedEntry = new CatalogEntryRelatedEntry(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CatalogEntryRelatedEntry is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export class CatalogEntry extends fhir.DomainResource implements fhir.ICatalogEntry {
  /**
   * Resource Type Name
   */
  public override resourceType: "CatalogEntry";
  /**
   * Used for examplefor Out of Formulary, or any specifics.
   */
  public additionalCharacteristic?: fhir.CodeableConcept[]|undefined;
  /**
   * User for example for ATC classification, or.
   */
  public additionalClassification?: fhir.CodeableConcept[]|undefined;
  /**
   * Used in supporting related concepts, e.g. NDC to RxNorm.
   */
  public additionalIdentifier?: fhir.Identifier[]|undefined;
  /**
   * Classes of devices, or ATC for medication.
   */
  public classification?: fhir.CodeableConcept[]|undefined;
  /**
   * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Perhaps not needed - if we use fhir resource metadata.
   */
  public lastUpdated?: string|undefined;
  public _lastUpdated?: fhir.FhirElement|undefined;
  /**
   * Whether the entry represents an orderable item.
   */
  public orderable: boolean|null;
  public _orderable?: fhir.FhirElement|undefined;
  /**
   * The item in a catalog or definition.
   */
  public referencedItem: fhir.Reference|null;
  /**
   * Used for example, to point to a substance, or to a device used to administer a medication.
   */
  public relatedEntry?: fhir.CatalogEntryRelatedEntry[]|undefined;
  /**
   * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
   */
  public status?: CatalogEntryStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * The type of item - medication, device, service, protocol or other.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The time period in which this catalog entry is expected to be active.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * The date until which this catalog entry is expected to be active.
   */
  public validTo?: string|undefined;
  public _validTo?: fhir.FhirElement|undefined;
  /**
   * Default constructor for CatalogEntry - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICatalogEntry> = {}) {
    super(source);
    this.resourceType = 'CatalogEntry';
    if (source["additionalCharacteristic"]) { this.additionalCharacteristic = source.additionalCharacteristic.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["additionalClassification"]) { this.additionalClassification = source.additionalClassification.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["additionalIdentifier"]) { this.additionalIdentifier = source.additionalIdentifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["classification"]) { this.classification = source.classification.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["lastUpdated"]) { this.lastUpdated = source.lastUpdated; }
    if (source["_lastUpdated"]) { this._lastUpdated = new fhir.FhirElement(source._lastUpdated!); }
    this.orderable = null;
    if (source["orderable"]) { this.orderable = source.orderable; }
    if (this.orderable === undefined) { this.orderable = null }
    if (source["_orderable"]) { this._orderable = new fhir.FhirElement(source._orderable!); }
    this.referencedItem = null;
    if (source["referencedItem"]) { this.referencedItem = new fhir.Reference(source.referencedItem!); }
    if (this.referencedItem === undefined) { this.referencedItem = null }
    if (source["relatedEntry"]) { this.relatedEntry = source.relatedEntry.map((x:Partial<fhir.ICatalogEntryRelatedEntry>) => new fhir.CatalogEntryRelatedEntry(x)); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source["validityPeriod"]) { this.validityPeriod = new fhir.Period(source.validityPeriod!); }
    if (source["validTo"]) { this.validTo = source.validTo; }
    if (source["_validTo"]) { this._validTo = new fhir.FhirElement(source._validTo!); }
  }
  /**
   * Check if the current CatalogEntry contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["orderable"] === undefined) { missingElements.push("orderable"); }
    if (this["referencedItem"] === undefined) { missingElements.push("referencedItem"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CatalogEntry from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICatalogEntry):CatalogEntry {
    var dest:CatalogEntry = new CatalogEntry(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CatalogEntry is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the CatalogEntry.relatedEntry.relationtype field
 */
export enum CatalogEntryRelatedEntryRelationtypeEnum {
  TRIGGERS = "triggers",
  IS_REPLACED_BY = "is-replaced-by",
}
/**
 * Code Values for the CatalogEntry.status field
 */
export enum CatalogEntryStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}