var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels';
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    /**
     * Default constructor for Endpoint from an object that MAY NOT contain all required elements.
     */
    function Endpoint(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Endpoint";
        if ((source['resourceType'] !== "Endpoint") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Endpoint';
        }
        {
            _this.address = source.address;
        }
        if (source["_address"] !== undefined) {
            _this._address = new fhirModels.Element(source._address);
        }
        {
            _this.connectionType = new fhirModels.Coding(source.connectionType);
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactPoint(x); });
        }
        if (source["header"] !== undefined) {
            _this.header = source.header.map(function (x) { return (x); });
        }
        if (source["_header"] !== undefined) {
            _this._header = source._header.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["managingOrganization"] !== undefined) {
            _this.managingOrganization = new fhirModels.Reference(source.managingOrganization);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["payloadMimeType"] !== undefined) {
            _this.payloadMimeType = source.payloadMimeType.map(function (x) { return (x); });
        }
        if (source["_payloadMimeType"] !== undefined) {
            _this._payloadMimeType = source._payloadMimeType.map(function (x) { return new fhirModels.Element(x); });
        }
        {
            _this.payloadType = source.payloadType.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    return Endpoint;
}(fhirModels.DomainResource));
export { Endpoint };
/**
 * Code Values for the Endpoint.status field
 */
export var EndpointStatusEnum;
(function (EndpointStatusEnum) {
    EndpointStatusEnum["ACTIVE"] = "active";
    EndpointStatusEnum["SUSPENDED"] = "suspended";
    EndpointStatusEnum["ERROR"] = "error";
    EndpointStatusEnum["OFF"] = "off";
    EndpointStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    EndpointStatusEnum["TEST"] = "test";
})(EndpointStatusEnum || (EndpointStatusEnum = {}));
