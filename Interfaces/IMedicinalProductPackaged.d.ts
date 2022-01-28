// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../interfaces'
/**
 * Batch numbering.
 */
export interface IMedicinalProductPackagedBatchIdentifier extends fhirInterfaces.IBackboneElement {
  /**
   * A number appearing on the immediate packaging (and not the outer packaging).
   */
  immediatePackaging?: fhirInterfaces.IIdentifier|undefined;
  /**
   * A number appearing on the outer packaging of a specific batch.
   */
  outerPackaging: fhirInterfaces.IIdentifier|undefined;
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export interface IMedicinalProductPackagedPackageItem extends fhirInterfaces.IBackboneElement {
  /**
   * A possible alternate material for the packaging.
   */
  alternateMaterial?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * A device accompanying a medicinal product.
   */
  device?: fhirInterfaces.IReference[]|undefined;
  /**
   * Including possibly Data Carrier Identifier.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The manufactured item as contained in the packaged medicinal product.
   */
  manufacturedItem?: fhirInterfaces.IReference[]|undefined;
  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: fhirInterfaces.IReference[]|undefined;
  /**
   * Material type of the package item.
   */
  material?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Allows containers within containers.
   */
  packageItem?: fhirInterfaces.IMedicinalProductPackagedPackageItem[]|undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: fhirInterfaces.IProdCharacteristic|undefined;
  /**
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
   */
  quantity: fhirInterfaces.IQuantity|undefined;
  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: fhirInterfaces.IProductShelfLife[]|undefined;
  /**
   * The physical type of the container of the medicine.
   */
  type: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * A medicinal product in a container or package.
 */
export interface IMedicinalProductPackaged extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "MedicinalProductPackaged";
  /**
   * Batch numbering.
   */
  batchIdentifier?: fhirInterfaces.IMedicinalProductPackagedBatchIdentifier[]|undefined;
  /**
   * Textual description.
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * Unique identifier.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: fhirInterfaces.IReference[]|undefined;
  /**
   * Manufacturer of this Package Item.
   */
  marketingAuthorization?: fhirInterfaces.IReference|undefined;
  /**
   * Marketing information.
   */
  marketingStatus?: fhirInterfaces.IMarketingStatus[]|undefined;
  /**
   * A packaging item, as a contained for medicine, possibly with other packaging items within.
   */
  packageItem: fhirInterfaces.IMedicinalProductPackagedPackageItem[]|undefined;
  /**
   * The product with this is a pack for.
   */
  subject?: fhirInterfaces.IReference[]|undefined;
}
