// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Coding words or phrases of the name.
 */
export class MedicinalProductNameNamePart extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductNameNamePart {
  /**
   * A fragment of a product name.
   */
  part: string;
  _part?: fhirModels.Element|undefined;
  /**
   * Idenifying type for this part of the name (e.g. strength part).
   */
  type: fhirModels.Coding;
  /**
   * Default constructor for MedicinalProductNameNamePart from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductNameNamePart) {
    super(source);
    {
      this.part = source.part;
    }
    if (source["_part"] !== undefined) {
      this._part = new fhirModels.Element(source._part);
    }
    {
      this.type = new fhirModels.Coding(source.type);
    }
  }
}
/**
 * Country where the name applies.
 */
export class MedicinalProductNameCountryLanguage extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductNameCountryLanguage {
  /**
   * Country code for where this name applies.
   */
  country: fhirModels.CodeableConcept;
  /**
   * Jurisdiction code for where this name applies.
   */
  jurisdiction?: fhirModels.CodeableConcept|undefined;
  /**
   * Language code for this name.
   */
  language: fhirModels.CodeableConcept;
  /**
   * Default constructor for MedicinalProductNameCountryLanguage from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductNameCountryLanguage) {
    super(source);
    {
      this.country = new fhirModels.CodeableConcept(source.country);
    }
    if (source["jurisdiction"] !== undefined) {
      this.jurisdiction = new fhirModels.CodeableConcept(source.jurisdiction);
    }
    {
      this.language = new fhirModels.CodeableConcept(source.language);
    }
  }
}
/**
 * The product's name, including full name and possibly coded parts.
 */
export class MedicinalProductName extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductName {
  /**
   * Country where the name applies.
   */
  countryLanguage?: fhirModels.MedicinalProductNameCountryLanguage[]|undefined;
  /**
   * Coding words or phrases of the name.
   */
  namePart?: fhirModels.MedicinalProductNameNamePart[]|undefined;
  /**
   * The full product name.
   */
  productName: string;
  _productName?: fhirModels.Element|undefined;
  /**
   * Default constructor for MedicinalProductName from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductName) {
    super(source);
    if (source["countryLanguage"] !== undefined) {
      this.countryLanguage = source.countryLanguage.map((x) => new fhirModels.MedicinalProductNameCountryLanguage(x));
    }
    if (source["namePart"] !== undefined) {
      this.namePart = source.namePart.map((x) => new fhirModels.MedicinalProductNameNamePart(x));
    }
    {
      this.productName = source.productName;
    }
    if (source["_productName"] !== undefined) {
      this._productName = new fhirModels.Element(source._productName);
    }
  }
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
export class MedicinalProductManufacturingBusinessOperation extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductManufacturingBusinessOperation {
  /**
   * Regulatory authorization reference number.
   */
  authorisationReferenceNumber?: fhirModels.Identifier|undefined;
  /**
   * To indicate if this proces is commercially confidential.
   */
  confidentialityIndicator?: fhirModels.CodeableConcept|undefined;
  /**
   * Regulatory authorization date.
   */
  effectiveDate?: string|undefined;
  _effectiveDate?: fhirModels.Element|undefined;
  /**
   * The manufacturer or establishment associated with the process.
   */
  manufacturer?: fhirModels.Reference[]|undefined;
  /**
   * The type of manufacturing operation.
   */
  operationType?: fhirModels.CodeableConcept|undefined;
  /**
   * A regulator which oversees the operation.
   */
  regulator?: fhirModels.Reference|undefined;
  /**
   * Default constructor for MedicinalProductManufacturingBusinessOperation from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductManufacturingBusinessOperation) {
    super(source);
    if (source["authorisationReferenceNumber"] !== undefined) {
      this.authorisationReferenceNumber = new fhirModels.Identifier(source.authorisationReferenceNumber);
    }
    if (source["confidentialityIndicator"] !== undefined) {
      this.confidentialityIndicator = new fhirModels.CodeableConcept(source.confidentialityIndicator);
    }
    if (source["effectiveDate"] !== undefined) {
      this.effectiveDate = source.effectiveDate;
    }
    if (source["_effectiveDate"] !== undefined) {
      this._effectiveDate = new fhirModels.Element(source._effectiveDate);
    }
    if (source["manufacturer"] !== undefined) {
      this.manufacturer = source.manufacturer.map((x) => new fhirModels.Reference(x));
    }
    if (source["operationType"] !== undefined) {
      this.operationType = new fhirModels.CodeableConcept(source.operationType);
    }
    if (source["regulator"] !== undefined) {
      this.regulator = new fhirModels.Reference(source.regulator);
    }
  }
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
export class MedicinalProductSpecialDesignation extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductSpecialDesignation {
  /**
   * Date when the designation was granted.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * Identifier for the designation, or procedure number.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Condition for which the medicinal use applies.
   */
  indicationReference?: fhirModels.Reference|undefined;
  /**
   * The intended use of the product, e.g. prevention, treatment.
   */
  intendedUse?: fhirModels.CodeableConcept|undefined;
  /**
   * Animal species for which this applies.
   */
  species?: fhirModels.CodeableConcept|undefined;
  /**
   * For example granted, pending, expired or withdrawn.
   */
  status?: fhirModels.CodeableConcept|undefined;
  /**
   * The type of special designation, e.g. orphan drug, minor use.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductSpecialDesignation from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductSpecialDesignation) {
    super(source);
    if (source["date"] !== undefined) {
      this.date = source.date;
    }
    if (source["_date"] !== undefined) {
      this._date = new fhirModels.Element(source._date);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["indicationCodeableConcept"] !== undefined) {
      this.indicationCodeableConcept = new fhirModels.CodeableConcept(source.indicationCodeableConcept);
    }
    if (source["indicationReference"] !== undefined) {
      this.indicationReference = new fhirModels.Reference(source.indicationReference);
    }
    if (source["intendedUse"] !== undefined) {
      this.intendedUse = new fhirModels.CodeableConcept(source.intendedUse);
    }
    if (source["species"] !== undefined) {
      this.species = new fhirModels.CodeableConcept(source.species);
    }
    if (source["status"] !== undefined) {
      this.status = new fhirModels.CodeableConcept(source.status);
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export class MedicinalProduct extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProduct {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProduct";
  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  additionalMonitoringIndicator?: fhirModels.CodeableConcept|undefined;
  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: fhirModels.Reference[]|undefined;
  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: fhirModels.Reference[]|undefined;
  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  combinedPharmaceuticalDoseForm?: fhirModels.CodeableConcept|undefined;
  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: fhirModels.Reference[]|undefined;
  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  crossReference?: fhirModels.Identifier[]|undefined;
  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: fhirModels.Coding|undefined;
  /**
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: fhirModels.CodeableConcept|undefined;
  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  manufacturingBusinessOperation?: fhirModels.MedicinalProductManufacturingBusinessOperation[]|undefined;
  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  marketingStatus?: fhirModels.MarketingStatus[]|undefined;
  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  masterFile?: fhirModels.Reference[]|undefined;
  /**
   * The product's name, including full name and possibly coded parts.
   */
  name: fhirModels.MedicinalProductName[];
  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: fhirModels.Reference[]|undefined;
  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: fhirModels.CodeableConcept|undefined;
  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: fhirModels.Reference[]|undefined;
  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  specialDesignation?: fhirModels.MedicinalProductSpecialDesignation[]|undefined;
  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  specialMeasures?: string[]|undefined;
  _specialMeasures?: fhirModels.Element[]|undefined;
  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProduct from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProduct) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProduct") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProduct'; }
    if (source["additionalMonitoringIndicator"] !== undefined) {
      this.additionalMonitoringIndicator = new fhirModels.CodeableConcept(source.additionalMonitoringIndicator);
    }
    if (source["attachedDocument"] !== undefined) {
      this.attachedDocument = source.attachedDocument.map((x) => new fhirModels.Reference(x));
    }
    if (source["clinicalTrial"] !== undefined) {
      this.clinicalTrial = source.clinicalTrial.map((x) => new fhirModels.Reference(x));
    }
    if (source["combinedPharmaceuticalDoseForm"] !== undefined) {
      this.combinedPharmaceuticalDoseForm = new fhirModels.CodeableConcept(source.combinedPharmaceuticalDoseForm);
    }
    if (source["contact"] !== undefined) {
      this.contact = source.contact.map((x) => new fhirModels.Reference(x));
    }
    if (source["crossReference"] !== undefined) {
      this.crossReference = source.crossReference.map((x) => new fhirModels.Identifier(x));
    }
    if (source["domain"] !== undefined) {
      this.domain = new fhirModels.Coding(source.domain);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["legalStatusOfSupply"] !== undefined) {
      this.legalStatusOfSupply = new fhirModels.CodeableConcept(source.legalStatusOfSupply);
    }
    if (source["manufacturingBusinessOperation"] !== undefined) {
      this.manufacturingBusinessOperation = source.manufacturingBusinessOperation.map((x) => new fhirModels.MedicinalProductManufacturingBusinessOperation(x));
    }
    if (source["marketingStatus"] !== undefined) {
      this.marketingStatus = source.marketingStatus.map((x) => new fhirModels.MarketingStatus(x));
    }
    if (source["masterFile"] !== undefined) {
      this.masterFile = source.masterFile.map((x) => new fhirModels.Reference(x));
    }
    {
      this.name = source.name.map((x) => new fhirModels.MedicinalProductName(x));
    }
    if (source["packagedMedicinalProduct"] !== undefined) {
      this.packagedMedicinalProduct = source.packagedMedicinalProduct.map((x) => new fhirModels.Reference(x));
    }
    if (source["paediatricUseIndicator"] !== undefined) {
      this.paediatricUseIndicator = new fhirModels.CodeableConcept(source.paediatricUseIndicator);
    }
    if (source["pharmaceuticalProduct"] !== undefined) {
      this.pharmaceuticalProduct = source.pharmaceuticalProduct.map((x) => new fhirModels.Reference(x));
    }
    if (source["productClassification"] !== undefined) {
      this.productClassification = source.productClassification.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["specialDesignation"] !== undefined) {
      this.specialDesignation = source.specialDesignation.map((x) => new fhirModels.MedicinalProductSpecialDesignation(x));
    }
    if (source["specialMeasures"] !== undefined) {
      this.specialMeasures = source.specialMeasures.map((x) => (x));
    }
    if (source["_specialMeasures"] !== undefined) {
      this._specialMeasures = source._specialMeasures.map((x) => new fhirModels.Element(x));
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
