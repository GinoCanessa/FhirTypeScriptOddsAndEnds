// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * How this product was collected.
 */
export type IBiologicallyDerivedProductCollection = fhir.IBackboneElement & {
  /**
   * Time of product collection.
   */
  collectedDateTime?: string|undefined;
  _collectedDateTime?: fhir.IFhirElement|undefined;
  /**
   * Time of product collection.
   */
  collectedPeriod?: fhir.IPeriod|undefined;
  /**
   * Healthcare professional who is performing the collection.
   */
  collector?: fhir.IReference|undefined;
  /**
   * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   */
  source?: fhir.IReference|undefined;
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export type IBiologicallyDerivedProductProcessing = fhir.IBackboneElement & {
  /**
   * Substance added during processing.
   */
  additive?: fhir.IReference|undefined;
  /**
   * Description of of processing.
   */
  description?: string|undefined;
  _description?: fhir.IFhirElement|undefined;
  /**
   * Procesing code.
   */
  procedure?: fhir.ICodeableConcept|undefined;
  /**
   * Time of processing.
   */
  timeDateTime?: string|undefined;
  _timeDateTime?: fhir.IFhirElement|undefined;
  /**
   * Time of processing.
   */
  timePeriod?: fhir.IPeriod|undefined;
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export type IBiologicallyDerivedProductManipulation = fhir.IBackboneElement & {
  /**
   * Description of manipulation.
   */
  description?: string|undefined;
  _description?: fhir.IFhirElement|undefined;
  /**
   * Time of manipulation.
   */
  timeDateTime?: string|undefined;
  _timeDateTime?: fhir.IFhirElement|undefined;
  /**
   * Time of manipulation.
   */
  timePeriod?: fhir.IPeriod|undefined;
}
/**
 * Product storage.
 */
export type IBiologicallyDerivedProductStorage = fhir.IBackboneElement & {
  /**
   * Description of storage.
   */
  description?: string|undefined;
  _description?: fhir.IFhirElement|undefined;
  /**
   * Storage timeperiod.
   */
  duration?: fhir.IPeriod|undefined;
  /**
   * Temperature scale used.
   */
  scale?: BiologicallyDerivedProductStorageScaleEnum|undefined;
  _scale?: fhir.IFhirElement|undefined;
  /**
   * Storage temperature.
   */
  temperature?: number|undefined;
  _temperature?: fhir.IFhirElement|undefined;
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export type IBiologicallyDerivedProduct = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "BiologicallyDerivedProduct";
  /**
   * How this product was collected.
   */
  collection?: fhir.IBiologicallyDerivedProductCollection|undefined;
  /**
   * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  manipulation?: fhir.IBiologicallyDerivedProductManipulation|undefined;
  /**
   * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   */
  parent?: fhir.IReference[]|undefined;
  /**
   * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  processing?: fhir.IBiologicallyDerivedProductProcessing[]|undefined;
  /**
   * Broad category of this product.
   */
  productCategory?: BiologicallyDerivedProductProductCategoryEnum|undefined;
  _productCategory?: fhir.IFhirElement|undefined;
  /**
   * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   */
  productCode?: fhir.ICodeableConcept|undefined;
  /**
   * Number of discrete units within this product.
   */
  quantity?: number|undefined;
  _quantity?: fhir.IFhirElement|undefined;
  /**
   * Procedure request to obtain this biologically derived product.
   */
  request?: fhir.IReference[]|undefined;
  /**
   * Whether the product is currently available.
   */
  status?: BiologicallyDerivedProductStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Product storage.
   */
  storage?: fhir.IBiologicallyDerivedProductStorage[]|undefined;
}
/**
 * How this product was collected.
 */
export class BiologicallyDerivedProductCollection extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductCollection {
  /**
   * Time of product collection.
   */
  public collectedDateTime?: string|undefined;
  public _collectedDateTime?: fhir.FhirElement|undefined;
  /**
   * Time of product collection.
   */
  public collectedPeriod?: fhir.Period|undefined;
  /**
   * Healthcare professional who is performing the collection.
   */
  public collector?: fhir.Reference|undefined;
  /**
   * The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Default constructor for BiologicallyDerivedProductCollection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IBiologicallyDerivedProductCollection> = {}) {
    super(source);
    if (source["collectedDateTime"]) { this.collectedDateTime = source.collectedDateTime; }
    if (source["_collectedDateTime"]) { this._collectedDateTime = new fhir.FhirElement(source._collectedDateTime!); }
    if (source["collectedPeriod"]) { this.collectedPeriod = new fhir.Period(source.collectedPeriod!); }
    if (source["collector"]) { this.collector = new fhir.Reference(source.collector!); }
    if (source["source"]) { this.source = new fhir.Reference(source.source!); }
  }
  /**
   * Check if the current BiologicallyDerivedProductCollection contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a BiologicallyDerivedProductCollection from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IBiologicallyDerivedProductCollection):BiologicallyDerivedProductCollection {
    var dest:BiologicallyDerivedProductCollection = new BiologicallyDerivedProductCollection(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `BiologicallyDerivedProductCollection is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export class BiologicallyDerivedProductProcessing extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductProcessing {
  /**
   * Substance added during processing.
   */
  public additive?: fhir.Reference|undefined;
  /**
   * Description of of processing.
   */
  public description?: string|undefined;
  public _description?: fhir.FhirElement|undefined;
  /**
   * Procesing code.
   */
  public procedure?: fhir.CodeableConcept|undefined;
  /**
   * Time of processing.
   */
  public timeDateTime?: string|undefined;
  public _timeDateTime?: fhir.FhirElement|undefined;
  /**
   * Time of processing.
   */
  public timePeriod?: fhir.Period|undefined;
  /**
   * Default constructor for BiologicallyDerivedProductProcessing - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IBiologicallyDerivedProductProcessing> = {}) {
    super(source);
    if (source["additive"]) { this.additive = new fhir.Reference(source.additive!); }
    if (source["description"]) { this.description = source.description; }
    if (source["_description"]) { this._description = new fhir.FhirElement(source._description!); }
    if (source["procedure"]) { this.procedure = new fhir.CodeableConcept(source.procedure!); }
    if (source["timeDateTime"]) { this.timeDateTime = source.timeDateTime; }
    if (source["_timeDateTime"]) { this._timeDateTime = new fhir.FhirElement(source._timeDateTime!); }
    if (source["timePeriod"]) { this.timePeriod = new fhir.Period(source.timePeriod!); }
  }
  /**
   * Check if the current BiologicallyDerivedProductProcessing contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a BiologicallyDerivedProductProcessing from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IBiologicallyDerivedProductProcessing):BiologicallyDerivedProductProcessing {
    var dest:BiologicallyDerivedProductProcessing = new BiologicallyDerivedProductProcessing(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `BiologicallyDerivedProductProcessing is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
 */
export class BiologicallyDerivedProductManipulation extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductManipulation {
  /**
   * Description of manipulation.
   */
  public description?: string|undefined;
  public _description?: fhir.FhirElement|undefined;
  /**
   * Time of manipulation.
   */
  public timeDateTime?: string|undefined;
  public _timeDateTime?: fhir.FhirElement|undefined;
  /**
   * Time of manipulation.
   */
  public timePeriod?: fhir.Period|undefined;
  /**
   * Default constructor for BiologicallyDerivedProductManipulation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IBiologicallyDerivedProductManipulation> = {}) {
    super(source);
    if (source["description"]) { this.description = source.description; }
    if (source["_description"]) { this._description = new fhir.FhirElement(source._description!); }
    if (source["timeDateTime"]) { this.timeDateTime = source.timeDateTime; }
    if (source["_timeDateTime"]) { this._timeDateTime = new fhir.FhirElement(source._timeDateTime!); }
    if (source["timePeriod"]) { this.timePeriod = new fhir.Period(source.timePeriod!); }
  }
  /**
   * Check if the current BiologicallyDerivedProductManipulation contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a BiologicallyDerivedProductManipulation from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IBiologicallyDerivedProductManipulation):BiologicallyDerivedProductManipulation {
    var dest:BiologicallyDerivedProductManipulation = new BiologicallyDerivedProductManipulation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `BiologicallyDerivedProductManipulation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Product storage.
 */
export class BiologicallyDerivedProductStorage extends fhir.BackboneElement implements fhir.IBiologicallyDerivedProductStorage {
  /**
   * Description of storage.
   */
  public description?: string|undefined;
  public _description?: fhir.FhirElement|undefined;
  /**
   * Storage timeperiod.
   */
  public duration?: fhir.Period|undefined;
  /**
   * Temperature scale used.
   */
  public scale?: BiologicallyDerivedProductStorageScaleEnum|undefined;
  public _scale?: fhir.FhirElement|undefined;
  /**
   * Storage temperature.
   */
  public temperature?: number|undefined;
  public _temperature?: fhir.FhirElement|undefined;
  /**
   * Default constructor for BiologicallyDerivedProductStorage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IBiologicallyDerivedProductStorage> = {}) {
    super(source);
    if (source["description"]) { this.description = source.description; }
    if (source["_description"]) { this._description = new fhir.FhirElement(source._description!); }
    if (source["duration"]) { this.duration = new fhir.Period(source.duration!); }
    if (source["scale"]) { this.scale = source.scale; }
    if (source["_scale"]) { this._scale = new fhir.FhirElement(source._scale!); }
    if (source["temperature"]) { this.temperature = source.temperature; }
    if (source["_temperature"]) { this._temperature = new fhir.FhirElement(source._temperature!); }
  }
  /**
   * Check if the current BiologicallyDerivedProductStorage contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a BiologicallyDerivedProductStorage from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IBiologicallyDerivedProductStorage):BiologicallyDerivedProductStorage {
    var dest:BiologicallyDerivedProductStorage = new BiologicallyDerivedProductStorage(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `BiologicallyDerivedProductStorage is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export class BiologicallyDerivedProduct extends fhir.DomainResource implements fhir.IBiologicallyDerivedProduct {
  /**
   * Resource Type Name
   */
  public override resourceType: "BiologicallyDerivedProduct";
  /**
   * How this product was collected.
   */
  public collection?: fhir.BiologicallyDerivedProductCollection|undefined;
  /**
   * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.
   */
  public manipulation?: fhir.BiologicallyDerivedProductManipulation|undefined;
  /**
   * For products that have multiple collections. For example Peripheral Blood Stem Cells may be collected over several days from a single donor and the donation split into in multiple containers which must be linked to the parent donation.
   */
  public parent?: fhir.Reference[]|undefined;
  /**
   * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
   */
  public processing?: fhir.BiologicallyDerivedProductProcessing[]|undefined;
  /**
   * Broad category of this product.
   */
  public productCategory?: BiologicallyDerivedProductProductCategoryEnum|undefined;
  public _productCategory?: fhir.FhirElement|undefined;
  /**
   * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
   */
  public productCode?: fhir.CodeableConcept|undefined;
  /**
   * Number of discrete units within this product.
   */
  public quantity?: number|undefined;
  public _quantity?: fhir.FhirElement|undefined;
  /**
   * Procedure request to obtain this biologically derived product.
   */
  public request?: fhir.Reference[]|undefined;
  /**
   * Whether the product is currently available.
   */
  public status?: BiologicallyDerivedProductStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Product storage.
   */
  public storage?: fhir.BiologicallyDerivedProductStorage[]|undefined;
  /**
   * Default constructor for BiologicallyDerivedProduct - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IBiologicallyDerivedProduct> = {}) {
    super(source);
    this.resourceType = 'BiologicallyDerivedProduct';
    if (source["collection"]) { this.collection = new fhir.BiologicallyDerivedProductCollection(source.collection!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["manipulation"]) { this.manipulation = new fhir.BiologicallyDerivedProductManipulation(source.manipulation!); }
    if (source["parent"]) { this.parent = source.parent.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["processing"]) { this.processing = source.processing.map((x:Partial<fhir.IBiologicallyDerivedProductProcessing>) => new fhir.BiologicallyDerivedProductProcessing(x)); }
    if (source["productCategory"]) { this.productCategory = source.productCategory; }
    if (source["_productCategory"]) { this._productCategory = new fhir.FhirElement(source._productCategory!); }
    if (source["productCode"]) { this.productCode = new fhir.CodeableConcept(source.productCode!); }
    if (source["quantity"]) { this.quantity = source.quantity; }
    if (source["_quantity"]) { this._quantity = new fhir.FhirElement(source._quantity!); }
    if (source["request"]) { this.request = source.request.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["storage"]) { this.storage = source.storage.map((x:Partial<fhir.IBiologicallyDerivedProductStorage>) => new fhir.BiologicallyDerivedProductStorage(x)); }
  }
  /**
   * Check if the current BiologicallyDerivedProduct contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a BiologicallyDerivedProduct from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IBiologicallyDerivedProduct):BiologicallyDerivedProduct {
    var dest:BiologicallyDerivedProduct = new BiologicallyDerivedProduct(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `BiologicallyDerivedProduct is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the BiologicallyDerivedProduct.storage.scale field
 */
export enum BiologicallyDerivedProductStorageScaleEnum {
  FARENHEIT = "farenheit",
  CELSIUS = "celsius",
  KELVIN = "kelvin",
}
/**
 * Code Values for the BiologicallyDerivedProduct.productCategory field
 */
export enum BiologicallyDerivedProductProductCategoryEnum {
  ORGAN = "organ",
  TISSUE = "tissue",
  FLUID = "fluid",
  CELLS = "cells",
  BIOLOGICALAGENT = "biologicalAgent",
}
/**
 * Code Values for the BiologicallyDerivedProduct.status field
 */
export enum BiologicallyDerivedProductStatusEnum {
  AVAILABLE = "available",
  UNAVAILABLE = "unavailable",
}
