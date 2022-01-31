// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export interface IEndpoint extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "Endpoint";
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)
   * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
   * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
   * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
   */
  address?: string|undefined;
  _address?: fhirInterfaces.IElement|undefined;
  /**
   * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   */
  connectionType?: fhirInterfaces.ICoding|undefined;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: fhirInterfaces.IContactPoint[]|undefined;
  /**
   * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
   */
  header?: string[]|undefined;
  _header?: fhirInterfaces.IElement[]|undefined;
  /**
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
   */
  managingOrganization?: fhirInterfaces.IReference|undefined;
  /**
   * A friendly name that this endpoint can be referred to with.
   */
  name?: string|undefined;
  _name?: fhirInterfaces.IElement|undefined;
  /**
   * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
   */
  payloadMimeType?: string[]|undefined;
  _payloadMimeType?: fhirInterfaces.IElement[]|undefined;
  /**
   * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   */
  payloadType?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * The interval during which the endpoint is expected to be operational.
   */
  period?: fhirInterfaces.IPeriod|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   */
  status?: EndpointStatusEnum|undefined;
  _status?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the Endpoint.status field
 */
export enum EndpointStatusEnum {
  ACTIVE = "active",
  SUSPENDED = "suspended",
  ERROR = "error",
  OFF = "off",
  ENTERED_IN_ERROR = "entered-in-error",
  TEST = "test",
}