// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/restful-capability-mode|4.0.1
import { Coding } from '../fhir.js';
/**
 * The mode of a RESTful capability statement.
 */
export const RestfulCapabilityModeValueSet = {
    /**
     * client: The application acts as a client for this resource.
     */
    Client: new Coding({
        display: "Client",
        code: "client",
        system: "http://hl7.org/fhir/restful-capability-mode",
    }),
    /**
     * server: The application acts as a server for this resource.
     */
    Server: new Coding({
        display: "Server",
        code: "server",
        system: "http://hl7.org/fhir/restful-capability-mode",
    }),
};
/**
 * The mode of a RESTful capability statement.
 */
export var RestfulCapabilityModeValueSetEnum;
(function (RestfulCapabilityModeValueSetEnum) {
    /**
     * client: The application acts as a client for this resource.
     */
    RestfulCapabilityModeValueSetEnum["Client"] = "client";
    /**
     * server: The application acts as a server for this resource.
     */
    RestfulCapabilityModeValueSetEnum["Server"] = "server";
})(RestfulCapabilityModeValueSetEnum || (RestfulCapabilityModeValueSetEnum = {}));
//# sourceMappingURL=RestfulCapabilityModeValueSet.js.map