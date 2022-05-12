import * as fhir from '../fhir.js';
import { EndpointStatusValueSetType } from '../fhirValueSets/EndpointStatusValueSet.js';
import { EndpointStatusValueSetEnum } from '../valueSetEnums.js';
import { EndpointConnectionTypeValueSetType } from '../fhirValueSets/EndpointConnectionTypeValueSet.js';
/**
 * Valid arguments for the Endpoint type.
 */
export interface EndpointArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Endpoint" | undefined;
    /**
     * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
     */
    status: EndpointStatusValueSetEnum | null;
    /**
     * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
     */
    connectionType: fhir.CodingArgs | null;
    /**
     * A friendly name that this endpoint can be referred to with.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * The interval during which the endpoint is expected to be operational.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
     */
    payloadType: fhir.CodeableConceptArgs[] | null;
    /**
     * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
     */
    payloadMimeType?: fhir.FhirCode[] | string[] | undefined;
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)
     * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
     * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
     * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
     */
    address: fhir.FhirUrl | string | undefined;
    /**
     * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
     */
    header?: fhir.FhirString[] | string[] | undefined;
}
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export declare class Endpoint extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Endpoint";
    /**
     * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
     */
    status: EndpointStatusValueSetEnum | null;
    /**
     * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
     */
    connectionType: fhir.Coding | null;
    /**
     * A friendly name that this endpoint can be referred to with.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * The interval during which the endpoint is expected to be operational.
     */
    period?: fhir.Period | undefined;
    /**
     * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
     */
    payloadType: fhir.CodeableConcept[] | null;
    /**
     * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
     */
    payloadMimeType?: fhir.FhirCode[] | undefined;
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)
     * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
     * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
     * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
     */
    address: fhir.FhirUrl | null;
    /**
     * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
     */
    header?: fhir.FhirString[] | undefined;
    /**
     * Default constructor for Endpoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EndpointArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): EndpointStatusValueSetType;
    /**
     * Extensible-bound Value Set for connectionType
     */
    static connectionTypeExtensibleValueSet(): EndpointConnectionTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Endpoint.d.ts.map