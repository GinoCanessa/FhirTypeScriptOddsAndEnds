// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * Coding words or phrases of the name.
 */
export interface IMedicinalProductNameNamePart extends fhirInterfaces.IBackboneElement {
  /**
   * A fragment of a product name.
   */
  part?: string|undefined;
  _part?: fhirInterfaces.IElement|undefined;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  type?: fhirInterfaces.ICoding|undefined;
}
/**
 * Country where the name applies.
 */
export interface IMedicinalProductNameCountryLanguage extends fhirInterfaces.IBackboneElement {
  /**
   * Country code for where this name applies.
   */
  country?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Jurisdiction code for where this name applies.
   */
  jurisdiction?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Language code for this name.
   */
  language?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export interface IMedicinalProductName extends fhirInterfaces.IBackboneElement {
  /**
   * Country where the name applies.
   */
  countryLanguage?: fhirInterfaces.IMedicinalProductNameCountryLanguage[]|undefined;
  /**
   * Coding words or phrases of the name.
   */
  namePart?: fhirInterfaces.IMedicinalProductNameNamePart[]|undefined;
  /**
   * The full product name.
   */
  productName?: string|undefined;
  _productName?: fhirInterfaces.IElement|undefined;
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export interface IMedicinalProductManufacturingBusinessOperation extends fhirInterfaces.IBackboneElement {
  /**
   * Regulatory authorization reference number.
   */
  authorisationReferenceNumber?: fhirInterfaces.IIdentifier|undefined;
  /**
   * To indicate if this proces is commercially confidential.
   */
  confidentialityIndicator?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Regulatory authorization date.
   */
  effectiveDate?: string|undefined;
  _effectiveDate?: fhirInterfaces.IElement|undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  manufacturer?: fhirInterfaces.IReference[]|undefined;
  /**
   * The type of manufacturing operation.
   */
  operationType?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A regulator which oversees the operation.
   */
  regulator?: fhirInterfaces.IReference|undefined;
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export interface IMedicinalProductSpecialDesignation extends fhirInterfaces.IBackboneElement {
  /**
   * Date when the designation was granted.
   */
  date?: string|undefined;
  _date?: fhirInterfaces.IElement|undefined;
  /**
   * Identifier for the designation, or procedure number.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: fhirInterfaces.IReference|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Animal species for which this applies.
   */
  species?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export interface IMedicinalProduct extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "MedicinalProduct";
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  additionalMonitoringIndicator?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: fhirInterfaces.IReference[]|undefined;
  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: fhirInterfaces.IReference[]|undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  combinedPharmaceuticalDoseForm?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: fhirInterfaces.IReference[]|undefined;
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  crossReference?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: fhirInterfaces.ICoding|undefined;
  /**
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  manufacturingBusinessOperation?: fhirInterfaces.IMedicinalProductManufacturingBusinessOperation[]|undefined;
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  marketingStatus?: fhirInterfaces.IMarketingStatus[]|undefined;
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  masterFile?: fhirInterfaces.IReference[]|undefined;
  /**
   * The product's name, including full name and possibly coded parts.
   */
  name?: fhirInterfaces.IMedicinalProductName[]|undefined;
  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: fhirInterfaces.IReference[]|undefined;
  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: fhirInterfaces.IReference[]|undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  specialDesignation?: fhirInterfaces.IMedicinalProductSpecialDesignation[]|undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  specialMeasures?: string[]|undefined;
  _specialMeasures?: fhirInterfaces.IElement[]|undefined;
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: fhirInterfaces.ICodeableConcept|undefined;
}
