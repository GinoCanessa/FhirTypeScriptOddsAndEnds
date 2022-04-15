// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
  // Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export interface ISampledData extends fhir.IFhirElement {
  /**
   * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
   */
  data?: string|undefined;
  _data?: fhir.IFhirElement|undefined;
  /**
   * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
   */
  dimensions: number|null;
  _dimensions?: fhir.IFhirElement|undefined;
  /**
   * A correction factor that is applied to the sampled data points before they are added to the origin.
   */
  factor?: number|undefined;
  _factor?: fhir.IFhirElement|undefined;
  /**
   * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
   */
  lowerLimit?: number|undefined;
  _lowerLimit?: fhir.IFhirElement|undefined;
  /**
   * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
   */
  origin: fhir.IQuantity|null;
  /**
   * This is usually a whole number.
   */
  period: number|null;
  _period?: fhir.IFhirElement|undefined;
  /**
   * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
   */
  upperLimit?: number|undefined;
  _upperLimit?: fhir.IFhirElement|undefined;
}
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export class SampledData extends fhir.FhirElement implements fhir.ISampledData {
  /**
   * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
   */
  public data?: string|undefined;
  public _data?: fhir.FhirElement|undefined;
  /**
   * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
   */
  public dimensions: number|null;
  public _dimensions?: fhir.FhirElement|undefined;
  /**
   * A correction factor that is applied to the sampled data points before they are added to the origin.
   */
  public factor?: number|undefined;
  public _factor?: fhir.FhirElement|undefined;
  /**
   * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
   */
  public lowerLimit?: number|undefined;
  public _lowerLimit?: fhir.FhirElement|undefined;
  /**
   * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
   */
  public origin: fhir.Quantity|null;
  /**
   * This is usually a whole number.
   */
  public period: number|null;
  public _period?: fhir.FhirElement|undefined;
  /**
   * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
   */
  public upperLimit?: number|undefined;
  public _upperLimit?: fhir.FhirElement|undefined;
  /**
   * Default constructor for SampledData - initializes required elements to null.
   */
  constructor() {
    super();
    this.dimensions = null;
    this.origin = null;
    this.period = null;
  }
  /**
   * Factory function to create a SampledData from an object that MAY NOT contain all required elements.
   */
  static override FactoryCreate(source:Partial<fhir.ISampledData>):SampledData {
    var dest:Partial<SampledData> = super.FactoryCreate(source) as Partial<SampledData>;
    if (source["data"] !== undefined) { dest.data = source.data; }
    if (source["_data"] !== undefined) { dest._data = fhir.FhirElement.FactoryCreate(source._data!); }
    if (source["dimensions"] !== undefined) { dest.dimensions = source.dimensions; }
    if (source["_dimensions"] !== undefined) { dest._dimensions = fhir.FhirElement.FactoryCreate(source._dimensions!); }
    if (source["factor"] !== undefined) { dest.factor = source.factor; }
    if (source["_factor"] !== undefined) { dest._factor = fhir.FhirElement.FactoryCreate(source._factor!); }
    if (source["lowerLimit"] !== undefined) { dest.lowerLimit = source.lowerLimit; }
    if (source["_lowerLimit"] !== undefined) { dest._lowerLimit = fhir.FhirElement.FactoryCreate(source._lowerLimit!); }
    if (source["origin"] !== undefined) { dest.origin = fhir.Quantity.FactoryCreate(source.origin!); }
    if (source["period"] !== undefined) { dest.period = source.period; }
    if (source["_period"] !== undefined) { dest._period = fhir.FhirElement.FactoryCreate(source._period!); }
    if (source["upperLimit"] !== undefined) { dest.upperLimit = source.upperLimit; }
    if (source["_upperLimit"] !== undefined) { dest._upperLimit = fhir.FhirElement.FactoryCreate(source._upperLimit!); }
    return dest as SampledData;
  }
  /**
   * Check if the current SampledData contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["dimensions"] === undefined) { missingElements.push("dimensions"); }
    if (this["origin"] === undefined) { missingElements.push("origin"); }
    if (this["period"] === undefined) { missingElements.push("period"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a SampledData from an object that MUST contain all required elements.
   */
  static override FactoryCreateStrict(source:fhir.ISampledData):SampledData {
    var dest:SampledData = this.FactoryCreate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SampledData is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
