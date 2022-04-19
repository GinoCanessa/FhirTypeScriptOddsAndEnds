import * as fhir from '../fhir';
/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export declare type IBinary = fhir.IResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Binary";
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: string | null;
    _contentType?: fhir.IFhirElement | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: string | undefined;
    _data?: fhir.IFhirElement | undefined;
    /**
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhir.IReference | undefined;
};
/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export declare class Binary extends fhir.Resource implements fhir.IBinary {
    /**
     * Resource Type Name
     */
    resourceType: "Binary";
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: string | null;
    _contentType?: fhir.FhirElement | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: string | undefined;
    _data?: fhir.FhirElement | undefined;
    /**
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhir.Reference | undefined;
    /**
     * Default constructor for Binary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBinary>);
    /**
     * Check if the current Binary contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Binary from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IBinary): Binary;
}
//# sourceMappingURL=Binary.d.ts.map