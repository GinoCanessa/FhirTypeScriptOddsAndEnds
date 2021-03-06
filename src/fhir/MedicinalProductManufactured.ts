// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductManufactured

import * as fhir from '../fhir.js';

import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the MedicinalProductManufactured type.
 */
export interface MedicinalProductManufacturedArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductManufactured"|undefined;
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  manufacturedDoseForm: fhir.CodeableConceptArgs|null;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  unitOfPresentation?: fhir.CodeableConceptArgs|undefined;
  /**
   * The quantity or "count number" of the manufactured item.
   */
  quantity: fhir.QuantityArgs|null;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  manufacturer?: fhir.ReferenceArgs[]|undefined;
  /**
   * Ingredient.
   */
  ingredient?: fhir.ReferenceArgs[]|undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: fhir.ProdCharacteristicArgs|undefined;
  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export class MedicinalProductManufactured extends fhir.DomainResource {
  readonly __dataType:string = 'MedicinalProductManufactured';
  /**
   * Resource Type Name
   */
  public resourceType: "MedicinalProductManufactured";
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  public manufacturedDoseForm: fhir.CodeableConcept|null;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  public unitOfPresentation?: fhir.CodeableConcept|undefined;
  /**
   * The quantity or "count number" of the manufactured item.
   */
  public quantity: fhir.Quantity|null;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  public manufacturer?: fhir.Reference[]|undefined = [];
  /**
   * Ingredient.
   */
  public ingredient?: fhir.Reference[]|undefined = [];
  /**
   * Dimensions, color etc.
   */
  public physicalCharacteristics?: fhir.ProdCharacteristic|undefined;
  /**
   * Other codeable characteristics.
   */
  public otherCharacteristics?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Default constructor for MedicinalProductManufactured - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductManufacturedArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProductManufactured';
    if (source['manufacturedDoseForm']) { this.manufacturedDoseForm = new fhir.CodeableConcept(source.manufacturedDoseForm); }
    else { this.manufacturedDoseForm = null; }
    if (source['unitOfPresentation']) { this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    else { this.quantity = null; }
    if (source['manufacturer']) { this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x)); }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.Reference(x)); }
    if (source['physicalCharacteristics']) { this.physicalCharacteristics = new fhir.ProdCharacteristic(source.physicalCharacteristics); }
    if (source['otherCharacteristics']) { this.otherCharacteristics = source.otherCharacteristics.map((x) => new fhir.CodeableConcept(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'MedicinalProductManufactured' fhir: MedicinalProductManufactured.resourceType:'MedicinalProductManufactured'", }));
    }
    if (!this['manufacturedDoseForm']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property manufacturedDoseForm:fhir.CodeableConcept fhir: MedicinalProductManufactured.manufacturedDoseForm:CodeableConcept", }));
    }
    if (this["manufacturedDoseForm"]) { outcome.issue!.push(...this.manufacturedDoseForm.doModelValidation().issue!); }
    if (this["unitOfPresentation"]) { outcome.issue!.push(...this.unitOfPresentation.doModelValidation().issue!); }
    if (!this['quantity']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property quantity:fhir.Quantity fhir: MedicinalProductManufactured.quantity:Quantity", }));
    }
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    if (this["manufacturer"]) { this.manufacturer.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["ingredient"]) { this.ingredient.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["physicalCharacteristics"]) { outcome.issue!.push(...this.physicalCharacteristics.doModelValidation().issue!); }
    if (this["otherCharacteristics"]) { this.otherCharacteristics.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
