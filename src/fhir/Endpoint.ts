// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Endpoint

import * as fhir from '../fhir.js'

import { EndpointStatusValueSet, EndpointStatusValueSetType, EndpointStatusValueSetEnum } from '../fhirValueSets/EndpointStatusValueSet.js'
import { EndpointConnectionTypeValueSet, EndpointConnectionTypeValueSetType, EndpointConnectionTypeValueSetEnum } from '../fhirValueSets/EndpointConnectionTypeValueSet.js'

/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export type IEndpoint = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Endpoint";
  /**
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   */
  status: EndpointStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Endpoint.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   */
  connectionType: fhir.ICoding|null;
  /**
   * A friendly name that this endpoint can be referred to with.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: Endpoint.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
   */
  managingOrganization?: fhir.IReference|undefined;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: fhir.IContactPoint[]|undefined;
  /**
   * The interval during which the endpoint is expected to be operational.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   */
  payloadType: fhir.ICodeableConcept[]|null;
  /**
   * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
   */
  payloadMimeType?: string[]|undefined;
  /**
   * Extended properties for primitive element: Endpoint.payloadMimeType
   */
  _payloadMimeType?: fhir.IFhirElement[]|undefined;
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)
   * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
   * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
   * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
   */
  address: string|null;
  /**
   * Extended properties for primitive element: Endpoint.address
   */
  _address?: fhir.IFhirElement|undefined;
  /**
   * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
   */
  header?: string[]|undefined;
  /**
   * Extended properties for primitive element: Endpoint.header
   */
  _header?: fhir.IFhirElement[]|undefined;
}

/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export class Endpoint extends fhir.DomainResource implements IEndpoint {
  /**
   * Resource Type Name
   */
  public resourceType: "Endpoint";
  /**
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   */
  public status: EndpointStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Endpoint.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   */
  public connectionType: fhir.Coding|null;
  /**
   * A friendly name that this endpoint can be referred to with.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: Endpoint.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an applicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  public contact?: fhir.ContactPoint[]|undefined;
  /**
   * The interval during which the endpoint is expected to be operational.
   */
  public period?: fhir.Period|undefined;
  /**
   * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   */
  public payloadType: fhir.CodeableConcept[]|null;
  /**
   * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
   */
  public payloadMimeType?: string[]|undefined;
  /**
   * Extended properties for primitive element: Endpoint.payloadMimeType
   */
  public _payloadMimeType?: fhir.FhirElement[]|undefined;
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)
   * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
   * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
   * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
   */
  public address: string|null;
  /**
   * Extended properties for primitive element: Endpoint.address
   */
  public _address?: fhir.FhirElement|undefined;
  /**
   * Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.
   */
  public header?: string[]|undefined;
  /**
   * Extended properties for primitive element: Endpoint.header
   */
  public _header?: fhir.FhirElement[]|undefined;
  /**
   * Default constructor for Endpoint - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IEndpoint> = { }) {
    super(source);
    this.resourceType = 'Endpoint';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['connectionType']) { this.connectionType = new fhir.Coding(source.connectionType!); }
    else { this.connectionType = null; }
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization!); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x)); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['payloadType']) { this.payloadType = source.payloadType.map((x) => new fhir.CodeableConcept(x)); }
    else { this.payloadType = null; }
    if (source['payloadMimeType']) { this.payloadMimeType = source.payloadMimeType.map((x) => (x)); }
    if (source['_payloadMimeType']) { this._payloadMimeType = source._payloadMimeType.map((x) => new fhir.FhirElement(x)); }
    if (source['address']) { this.address = source.address; }
    else { this.address = null; }
    if (source['_address']) { this._address = new fhir.FhirElement(source._address!); }
    if (source['header']) { this.header = source.header.map((x) => (x)); }
    if (source['_header']) { this._header = source._header.map((x) => new fhir.FhirElement(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():EndpointStatusValueSetType {
    return EndpointStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for connectionType
   */
  public static connectionTypeExtensibleValueSet():EndpointConnectionTypeValueSetType {
    return EndpointConnectionTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Endpoint.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["status"]) { results.push(["status",'Missing required element: Endpoint.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (!this["connectionType"]) { results.push(["connectionType",'Missing required element: Endpoint.connectionType']); }
    if (this["connectionType"]) { results.push(...this.connectionType.doModelValidation()); }
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["managingOrganization"]) { results.push(...this.managingOrganization.doModelValidation()); }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if ((!this["payloadType"]) || (this["payloadType"].length === 0)) { results.push(["payloadType",'Missing required element: Endpoint.payloadType']); }
    if (this["payloadType"]) { this.payloadType.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_payloadMimeType"]) { this._payloadMimeType.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["address"]) { results.push(["address",'Missing required element: Endpoint.address']); }
    if (this["_address"]) { results.push(...this._address.doModelValidation()); }
    if (this["_header"]) { this._header.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
