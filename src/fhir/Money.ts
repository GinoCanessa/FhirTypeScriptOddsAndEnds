// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * An amount of economic utility in some recognized currency.
 */
export type IMoney = fhir.IFhirElement & {
  /**
   * ISO 4217 Currency Code.
   */
  currency?: string|undefined;
  _currency?: fhir.IFhirElement|undefined;
  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: number|undefined;
  _value?: fhir.IFhirElement|undefined;
}
/**
 * An amount of economic utility in some recognized currency.
 */
export class Money extends fhir.FhirElement implements fhir.IMoney {
  /**
   * ISO 4217 Currency Code.
   */
  public currency?: string|undefined;
  public _currency?: fhir.FhirElement|undefined;
  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  public value?: number|undefined;
  public _value?: fhir.FhirElement|undefined;
  /**
   * Default constructor for Money - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMoney> = {}) {
    super(source);
    if (source["currency"]) { this.currency = source.currency; }
    if (source["_currency"]) { this._currency = new fhir.FhirElement(source._currency!); }
    if (source["value"]) { this.value = source.value; }
    if (source["_value"]) { this._value = new fhir.FhirElement(source._value!); }
  }
  /**
   * Check if the current Money contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Money from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMoney):Money {
    var dest:Money = new Money(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Money is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
