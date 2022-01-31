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
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export class ProductShelfLife extends fhirModels.BackboneElement implements fhirInterfaces.IProductShelfLife {
  /**
   * Unique identifier for the packaged Medicinal Product.
   */
  identifier?: fhirModels.Identifier|undefined;
  /**
   * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  period: fhirModels.Quantity;
  /**
   * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
   */
  specialPrecautionsForStorage?: fhirModels.CodeableConcept[]|undefined;
  /**
   * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for ProductShelfLife from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IProductShelfLife) {
    super(source);
    if (source["identifier"] !== undefined) {
      this.identifier = new fhirModels.Identifier(source.identifier);
    }
    {
      this.period = new fhirModels.Quantity(source.period);
    }
    if (source["specialPrecautionsForStorage"] !== undefined) {
      this.specialPrecautionsForStorage = source.specialPrecautionsForStorage.map((x) => new fhirModels.CodeableConcept(x));
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}