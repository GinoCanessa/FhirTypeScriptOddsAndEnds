import * as fhir from '../fhirJson.js';
/**
 * For referring to data content defined in other formats.
 */
export interface Attachment extends fhir.FhirElement {
    /**
     * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
     */
    contentType?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.language
     */
    _language?: fhir.FhirElement;
    /**
     * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
     */
    data?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.data
     */
    _data?: fhir.FhirElement;
    /**
     * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.url
     */
    _url?: fhir.FhirElement;
    /**
     * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
     */
    size?: number | undefined;
    /**
     * Extended properties for primitive element: Attachment.size
     */
    _size?: fhir.FhirElement;
    /**
     * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
     */
    hash?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.hash
     */
    _hash?: fhir.FhirElement;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.title
     */
    _title?: fhir.FhirElement;
    /**
     * The date that the attachment was first created.
     */
    creation?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.creation
     */
    _creation?: fhir.FhirElement;
}
//# sourceMappingURL=Attachment.d.ts.map