import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * For referring to data content defined in other formats.
 */
export declare class Attachment extends fhirModels.Element implements fhirInterfaces.IAttachment {
    /**
     * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
     */
    contentType?: string | undefined;
    _contentType?: fhirModels.Element | undefined;
    /**
     * The date that the attachment was first created.
     */
    creation?: string | undefined;
    _creation?: fhirModels.Element | undefined;
    /**
     * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
     */
    data?: string | undefined;
    _data?: fhirModels.Element | undefined;
    /**
     * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
     */
    hash?: string | undefined;
    _hash?: fhirModels.Element | undefined;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: string | undefined;
    _language?: fhirModels.Element | undefined;
    /**
     * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
     */
    size?: number | undefined;
    _size?: fhirModels.Element | undefined;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for Attachment from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IAttachment>);
    /**
     * Factory function to create a Attachment from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IAttachment): Attachment;
    /**
     * Check if the current Attachment contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Attachment.d.ts.map