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
 * The manufactured item as contained in the packaged medicinal product.
 */
export class MedicinalProductManufactured extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductManufactured {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductManufactured";
  /**
   * Ingredient.
   */
  ingredient?: fhirModels.Reference[]|undefined;
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  manufacturedDoseForm: fhirModels.CodeableConcept;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  manufacturer?: fhirModels.Reference[]|undefined;
  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: fhirModels.ProdCharacteristic|undefined;
  /**
   * The quantity or "count number" of the manufactured item.
   */
  quantity: fhirModels.Quantity;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  unitOfPresentation?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductManufactured from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductManufactured) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductManufactured") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductManufactured'; }
    if (source["ingredient"] !== undefined) {
      this.ingredient = source.ingredient.map((x) => new fhirModels.Reference(x));
    }
    {
      this.manufacturedDoseForm = new fhirModels.CodeableConcept(source.manufacturedDoseForm);
    }
    if (source["manufacturer"] !== undefined) {
      this.manufacturer = source.manufacturer.map((x) => new fhirModels.Reference(x));
    }
    if (source["otherCharacteristics"] !== undefined) {
      this.otherCharacteristics = source.otherCharacteristics.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["physicalCharacteristics"] !== undefined) {
      this.physicalCharacteristics = new fhirModels.ProdCharacteristic(source.physicalCharacteristics);
    }
    {
      this.quantity = new fhirModels.Quantity(source.quantity);
    }
    if (source["unitOfPresentation"] !== undefined) {
      this.unitOfPresentation = new fhirModels.CodeableConcept(source.unitOfPresentation);
    }
  }
}
