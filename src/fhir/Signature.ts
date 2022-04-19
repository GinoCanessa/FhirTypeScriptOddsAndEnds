// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export type ISignature = fhir.IFhirElement & {
  /**
   * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
   */
  data?: string|undefined;
  _data?: fhir.IFhirElement|undefined;
  /**
   * The party that can't sign. For example a child.
   */
  onBehalfOf?: fhir.IReference|undefined;
  /**
   * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
   */
  sigFormat?: string|undefined;
  _sigFormat?: fhir.IFhirElement|undefined;
  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
   */
  targetFormat?: string|undefined;
  _targetFormat?: fhir.IFhirElement|undefined;
  /**
   * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
   */
  type: fhir.ICoding[]|null;
  /**
   * This should agree with the information in the signature.
   */
  when: string|null;
  _when?: fhir.IFhirElement|undefined;
  /**
   * This should agree with the information in the signature.
   */
  who: fhir.IReference|null;
}
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export class Signature extends fhir.FhirElement implements fhir.ISignature {
  /**
   * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
   */
  public data?: string|undefined;
  public _data?: fhir.FhirElement|undefined;
  /**
   * The party that can't sign. For example a child.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
   */
  public sigFormat?: string|undefined;
  public _sigFormat?: fhir.FhirElement|undefined;
  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
   */
  public targetFormat?: string|undefined;
  public _targetFormat?: fhir.FhirElement|undefined;
  /**
   * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
   */
  public type: fhir.Coding[]|null;
  /**
   * This should agree with the information in the signature.
   */
  public when: string|null;
  public _when?: fhir.FhirElement|undefined;
  /**
   * This should agree with the information in the signature.
   */
  public who: fhir.Reference|null;
  /**
   * Default constructor for Signature - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ISignature> = {}) {
    super(source);
    if (source["data"]) { this.data = source.data; }
    if (source["_data"]) { this._data = new fhir.FhirElement(source._data!); }
    if (source["onBehalfOf"]) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf!); }
    if (source["sigFormat"]) { this.sigFormat = source.sigFormat; }
    if (source["_sigFormat"]) { this._sigFormat = new fhir.FhirElement(source._sigFormat!); }
    if (source["targetFormat"]) { this.targetFormat = source.targetFormat; }
    if (source["_targetFormat"]) { this._targetFormat = new fhir.FhirElement(source._targetFormat!); }
    this.type = null;
    if (source["type"]) { this.type = source.type.map((x:Partial<fhir.ICoding>) => new fhir.Coding(x)); }
    if (this.type === undefined) { this.type = null }
    this.when = null;
    if (source["when"]) { this.when = source.when; }
    if (this.when === undefined) { this.when = null }
    if (source["_when"]) { this._when = new fhir.FhirElement(source._when!); }
    this.who = null;
    if (source["who"]) { this.who = new fhir.Reference(source.who!); }
    if (this.who === undefined) { this.who = null }
  }
  /**
   * Check if the current Signature contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((!this["type"]) || (this["type"].length === 0)) { missingElements.push("type"); }
    if (this["when"] === undefined) { missingElements.push("when"); }
    if (this["who"] === undefined) { missingElements.push("who"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Signature from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.ISignature):Signature {
    var dest:Signature = new Signature(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `Signature is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
