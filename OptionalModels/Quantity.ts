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
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export class Quantity extends fhirModels.Element implements fhirInterfaces.IQuantity {
  /**
   * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
   */
  code?: string|undefined;
  _code?: fhirModels.Element|undefined;
  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
   */
  comparator?: QuantityComparatorEnum|undefined;
  _comparator?: fhirModels.Element|undefined;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string|undefined;
  _system?: fhirModels.Element|undefined;
  /**
   * A human-readable form of the unit.
   */
  unit?: string|undefined;
  _unit?: fhirModels.Element|undefined;
  /**
   * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: number|undefined;
  _value?: fhirModels.Element|undefined;
  /**
   * Default constructor for Quantity from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IQuantity>) {
    super(source);
    if (source["code"] !== undefined) { this.code = source.code; }
    if (source["_code"] !== undefined) { this._code = new fhirModels.Element(source._code); }
    if (source["comparator"] !== undefined) { this.comparator = source.comparator; }
    if (source["_comparator"] !== undefined) { this._comparator = new fhirModels.Element(source._comparator); }
    if (source["system"] !== undefined) { this.system = source.system; }
    if (source["_system"] !== undefined) { this._system = new fhirModels.Element(source._system); }
    if (source["unit"] !== undefined) { this.unit = source.unit; }
    if (source["_unit"] !== undefined) { this._unit = new fhirModels.Element(source._unit); }
    if (source["value"] !== undefined) { this.value = source.value; }
    if (source["_value"] !== undefined) { this._value = new fhirModels.Element(source._value); }
  }
  /**
   * Factory function to create a Quantity from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IQuantity):Quantity {
    var dest:Quantity = new Quantity(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Quantity is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current Quantity contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the Quantity.comparator field
 */
export enum QuantityComparatorEnum {
  LESS_THAN = "<",
  LESS_THAN_OR_EQUALS = "<=",
  GREATER_THAN_OR_EQUALS = ">=",
  GREATER_THAN = ">",
}