import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export declare class Binary extends fhirModels.Resource implements fhirInterfaces.IBinary {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Binary";
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType?: string | undefined;
    _contentType?: fhirModels.Element | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: string | undefined;
    _data?: fhirModels.Element | undefined;
    /**
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhirModels.Reference | undefined;
    /**
     * Default constructor for Binary from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBinary>);
    /**
     * Factory function to create a Binary from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBinary): Binary;
    /**
     * Check if the current Binary contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Binary.d.ts.map