import * as fhir from '../fhir';
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export declare type ISignature = fhir.IFhirElement & {
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    data?: string | undefined;
    _data?: fhir.IFhirElement | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhir.IReference | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
     */
    sigFormat?: string | undefined;
    _sigFormat?: fhir.IFhirElement | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    targetFormat?: string | undefined;
    _targetFormat?: fhir.IFhirElement | undefined;
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type: fhir.ICoding[] | null;
    /**
     * This should agree with the information in the signature.
     */
    when: string | null;
    _when?: fhir.IFhirElement | undefined;
    /**
     * This should agree with the information in the signature.
     */
    who: fhir.IReference | null;
};
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export declare class Signature extends fhir.FhirElement implements fhir.ISignature {
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    data?: string | undefined;
    _data?: fhir.FhirElement | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
     */
    sigFormat?: string | undefined;
    _sigFormat?: fhir.FhirElement | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    targetFormat?: string | undefined;
    _targetFormat?: fhir.FhirElement | undefined;
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type: fhir.Coding[] | null;
    /**
     * This should agree with the information in the signature.
     */
    when: string | null;
    _when?: fhir.FhirElement | undefined;
    /**
     * This should agree with the information in the signature.
     */
    who: fhir.Reference | null;
    /**
     * Default constructor for Signature - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISignature>);
    /**
     * Check if the current Signature contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Signature from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISignature): Signature;
}
//# sourceMappingURL=Signature.d.ts.map