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
 * For referring to data content defined in other formats.
 */
export interface IAttachment extends fhir.IFhirElement {
  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  contentType?: string|undefined;
  _contentType?: fhir.IFhirElement|undefined;
  /**
   * The date that the attachment was first created.
   */
  creation?: string|undefined;
  _creation?: fhir.IFhirElement|undefined;
  /**
   * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
   */
  data?: string|undefined;
  _data?: fhir.IFhirElement|undefined;
  /**
   * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
   */
  hash?: string|undefined;
  _hash?: fhir.IFhirElement|undefined;
  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  language?: string|undefined;
  _language?: fhir.IFhirElement|undefined;
  /**
   * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
   */
  size?: number|undefined;
  _size?: fhir.IFhirElement|undefined;
  /**
   * A label or set of text to display in place of the data.
   */
  title?: string|undefined;
  _title?: fhir.IFhirElement|undefined;
  /**
   * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
   */
  url?: string|undefined;
  _url?: fhir.IFhirElement|undefined;
}
/**
 * For referring to data content defined in other formats.
 */
export class Attachment extends fhir.FhirElement implements fhir.IAttachment {
  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  public contentType?: string|undefined;
  public _contentType?: fhir.FhirElement|undefined;
  /**
   * The date that the attachment was first created.
   */
  public creation?: string|undefined;
  public _creation?: fhir.FhirElement|undefined;
  /**
   * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
   */
  public data?: string|undefined;
  public _data?: fhir.FhirElement|undefined;
  /**
   * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
   */
  public hash?: string|undefined;
  public _hash?: fhir.FhirElement|undefined;
  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  public language?: string|undefined;
  public _language?: fhir.FhirElement|undefined;
  /**
   * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
   */
  public size?: number|undefined;
  public _size?: fhir.FhirElement|undefined;
  /**
   * A label or set of text to display in place of the data.
   */
  public title?: string|undefined;
  public _title?: fhir.FhirElement|undefined;
  /**
   * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
   */
  public url?: string|undefined;
  public _url?: fhir.FhirElement|undefined;
  /**
   * Default constructor for Attachment - initializes required elements to null.
   */
  constructor() {
    super();
  }
  /**
   * Factory function to create a Attachment from an object that MAY NOT contain all required elements.
   */
  static override FactoryCreate(source:Partial<fhir.IAttachment>):Attachment {
    var dest:Partial<Attachment> = super.FactoryCreate(source) as Partial<Attachment>;
    if (source["contentType"] !== undefined) { dest.contentType = source.contentType; }
    if (source["_contentType"] !== undefined) { dest._contentType = fhir.FhirElement.FactoryCreate(source._contentType!); }
    if (source["creation"] !== undefined) { dest.creation = source.creation; }
    if (source["_creation"] !== undefined) { dest._creation = fhir.FhirElement.FactoryCreate(source._creation!); }
    if (source["data"] !== undefined) { dest.data = source.data; }
    if (source["_data"] !== undefined) { dest._data = fhir.FhirElement.FactoryCreate(source._data!); }
    if (source["hash"] !== undefined) { dest.hash = source.hash; }
    if (source["_hash"] !== undefined) { dest._hash = fhir.FhirElement.FactoryCreate(source._hash!); }
    if (source["language"] !== undefined) { dest.language = source.language; }
    if (source["_language"] !== undefined) { dest._language = fhir.FhirElement.FactoryCreate(source._language!); }
    if (source["size"] !== undefined) { dest.size = source.size; }
    if (source["_size"] !== undefined) { dest._size = fhir.FhirElement.FactoryCreate(source._size!); }
    if (source["title"] !== undefined) { dest.title = source.title; }
    if (source["_title"] !== undefined) { dest._title = fhir.FhirElement.FactoryCreate(source._title!); }
    if (source["url"] !== undefined) { dest.url = source.url; }
    if (source["_url"] !== undefined) { dest._url = fhir.FhirElement.FactoryCreate(source._url!); }
    return dest as Attachment;
  }
  /**
   * Check if the current Attachment contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Attachment from an object that MUST contain all required elements.
   */
  static override FactoryCreateStrict(source:fhir.IAttachment):Attachment {
    var dest:Attachment = this.FactoryCreate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Attachment is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
