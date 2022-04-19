// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export type IProdCharacteristic = fhir.IBackboneElement & {
  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  color?: string[]|undefined;
  _color?: fhir.IFhirElement[]|undefined;
  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  depth?: fhir.IQuantity|undefined;
  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  externalDiameter?: fhir.IQuantity|undefined;
  /**
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  height?: fhir.IQuantity|undefined;
  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
   */
  image?: fhir.IAttachment[]|undefined;
  /**
   * Where applicable, the imprint can be specified as text.
   */
  imprint?: string[]|undefined;
  _imprint?: fhir.IFhirElement[]|undefined;
  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  nominalVolume?: fhir.IQuantity|undefined;
  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  scoring?: fhir.ICodeableConcept|undefined;
  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  shape?: string|undefined;
  _shape?: fhir.IFhirElement|undefined;
  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  weight?: fhir.IQuantity|undefined;
  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  width?: fhir.IQuantity|undefined;
}
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class ProdCharacteristic extends fhir.BackboneElement implements fhir.IProdCharacteristic {
  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  public color?: string[]|undefined;
  public _color?: fhir.FhirElement[]|undefined;
  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public depth?: fhir.Quantity|undefined;
  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public externalDiameter?: fhir.Quantity|undefined;
  /**
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public height?: fhir.Quantity|undefined;
  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
   */
  public image?: fhir.Attachment[]|undefined;
  /**
   * Where applicable, the imprint can be specified as text.
   */
  public imprint?: string[]|undefined;
  public _imprint?: fhir.FhirElement[]|undefined;
  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public nominalVolume?: fhir.Quantity|undefined;
  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  public scoring?: fhir.CodeableConcept|undefined;
  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  public shape?: string|undefined;
  public _shape?: fhir.FhirElement|undefined;
  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public weight?: fhir.Quantity|undefined;
  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public width?: fhir.Quantity|undefined;
  /**
   * Default constructor for ProdCharacteristic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IProdCharacteristic> = {}) {
    super(source);
    if (source["color"]) { this.color = source.color.map((x) => (x)); }
    if (source["_color"]) { this._color = source._color.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["depth"]) { this.depth = new fhir.Quantity(source.depth!); }
    if (source["externalDiameter"]) { this.externalDiameter = new fhir.Quantity(source.externalDiameter!); }
    if (source["height"]) { this.height = new fhir.Quantity(source.height!); }
    if (source["image"]) { this.image = source.image.map((x:Partial<fhir.IAttachment>) => new fhir.Attachment(x)); }
    if (source["imprint"]) { this.imprint = source.imprint.map((x) => (x)); }
    if (source["_imprint"]) { this._imprint = source._imprint.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["nominalVolume"]) { this.nominalVolume = new fhir.Quantity(source.nominalVolume!); }
    if (source["scoring"]) { this.scoring = new fhir.CodeableConcept(source.scoring!); }
    if (source["shape"]) { this.shape = source.shape; }
    if (source["_shape"]) { this._shape = new fhir.FhirElement(source._shape!); }
    if (source["weight"]) { this.weight = new fhir.Quantity(source.weight!); }
    if (source["width"]) { this.width = new fhir.Quantity(source.width!); }
  }
  /**
   * Check if the current ProdCharacteristic contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ProdCharacteristic from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IProdCharacteristic):ProdCharacteristic {
    var dest:ProdCharacteristic = new ProdCharacteristic(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ProdCharacteristic is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}