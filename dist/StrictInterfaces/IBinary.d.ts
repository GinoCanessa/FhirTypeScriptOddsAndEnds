import * as fhirInterfaces from '../strictinterfaces';
/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export interface IBinary extends fhirInterfaces.IResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Binary";
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: string;
    _contentType?: fhirInterfaces.IElement | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: string | undefined;
    _data?: fhirInterfaces.IElement | undefined;
    /**
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhirInterfaces.IReference | undefined;
}
//# sourceMappingURL=IBinary.d.ts.map