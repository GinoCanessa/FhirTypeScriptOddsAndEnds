import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export declare class Endpoint extends fhirModels.DomainResource implements fhirInterfaces.IEndpoint {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Endpoint";
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)
     * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
     * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
     * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
     */
    address: string;
    _address?: fhirModels.Element | undefined;
    /**
     * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
     */
    connectionType: fhirModels.Coding;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhirModels.ContactPoint[] | undefined;
    /**
     * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
     */
    header?: string[] | undefined;
    _header?: fhirModels.Element[] | undefined;
    /**
     * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
     */
    managingOrganization?: fhirModels.Reference | undefined;
    /**
     * A friendly name that this endpoint can be referred to with.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
     */
    payloadMimeType?: string[] | undefined;
    _payloadMimeType?: fhirModels.Element[] | undefined;
    /**
     * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
     */
    payloadType: fhirModels.CodeableConcept[];
    /**
     * The interval during which the endpoint is expected to be operational.
     */
    period?: fhirModels.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
     */
    status: EndpointStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for Endpoint from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEndpoint);
}
/**
 * Code Values for the Endpoint.status field
 */
export declare enum EndpointStatusEnum {
    ACTIVE = "active",
    SUSPENDED = "suspended",
    ERROR = "error",
    OFF = "off",
    ENTERED_IN_ERROR = "entered-in-error",
    TEST = "test"
}
//# sourceMappingURL=Endpoint.d.ts.map