import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export declare class Signature extends fhirModels.Element implements fhirInterfaces.ISignature {
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    data?: string | undefined;
    _data?: fhirModels.Element | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhirModels.Reference | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
     */
    sigFormat?: string | undefined;
    _sigFormat?: fhirModels.Element | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    targetFormat?: string | undefined;
    _targetFormat?: fhirModels.Element | undefined;
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type?: fhirModels.Coding[] | undefined;
    /**
     * This should agree with the information in the signature.
     */
    when?: string | undefined;
    _when?: fhirModels.Element | undefined;
    /**
     * This should agree with the information in the signature.
     */
    who?: fhirModels.Reference | undefined;
    /**
     * Default constructor for Signature from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISignature>);
    /**
     * Factory function to create a Signature from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISignature): Signature;
    /**
     * Check if the current Signature contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Signature.d.ts.map