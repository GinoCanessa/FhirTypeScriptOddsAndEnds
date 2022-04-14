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
 * For referring to data content defined in other formats.
 */
export class Attachment extends fhirModels.Element implements fhirInterfaces.IAttachment {
  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
   */
  contentType?: string|undefined;
  _contentType?: fhirModels.Element|undefined;
  /**
   * The date that the attachment was first created.
   */
  creation?: string|undefined;
  _creation?: fhirModels.Element|undefined;
  /**
   * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
   */
  data?: string|undefined;
  _data?: fhirModels.Element|undefined;
  /**
   * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
   */
  hash?: string|undefined;
  _hash?: fhirModels.Element|undefined;
  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  language?: string|undefined;
  _language?: fhirModels.Element|undefined;
  /**
   * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
   */
  size?: number|undefined;
  _size?: fhirModels.Element|undefined;
  /**
   * A label or set of text to display in place of the data.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * Default constructor for Attachment from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IAttachment) {
    super(source);
    if (source["contentType"] !== undefined) {
      this.contentType = source.contentType;
    }
    if (source["_contentType"] !== undefined) {
      this._contentType = new fhirModels.Element(source._contentType);
    }
    if (source["creation"] !== undefined) {
      this.creation = source.creation;
    }
    if (source["_creation"] !== undefined) {
      this._creation = new fhirModels.Element(source._creation);
    }
    if (source["data"] !== undefined) {
      this.data = source.data;
    }
    if (source["_data"] !== undefined) {
      this._data = new fhirModels.Element(source._data);
    }
    if (source["hash"] !== undefined) {
      this.hash = source.hash;
    }
    if (source["_hash"] !== undefined) {
      this._hash = new fhirModels.Element(source._hash);
    }
    if (source["language"] !== undefined) {
      this.language = source.language;
    }
    if (source["_language"] !== undefined) {
      this._language = new fhirModels.Element(source._language);
    }
    if (source["size"] !== undefined) {
      this.size = source.size;
    }
    if (source["_size"] !== undefined) {
      this._size = new fhirModels.Element(source._size);
    }
    if (source["title"] !== undefined) {
      this.title = source.title;
    }
    if (source["_title"] !== undefined) {
      this._title = new fhirModels.Element(source._title);
    }
    if (source["url"] !== undefined) {
      this.url = source.url;
    }
    if (source["_url"] !== undefined) {
      this._url = new fhirModels.Element(source._url);
    }
  }
}
