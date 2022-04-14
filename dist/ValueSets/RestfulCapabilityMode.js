"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestfulCapabilityMode = void 0;
/**
 * The mode of a RESTful capability statement.
 */
exports.RestfulCapabilityMode = {
    /**
     * The application acts as a client for this resource.
     */
    restful_capability_mode_Client: {
        code: "client",
        display: "Client",
        system: "http://hl7.org/fhir/restful-capability-mode"
    },
    /**
     * The application acts as a server for this resource.
     */
    restful_capability_mode_Server: {
        code: "server",
        display: "Server",
        system: "http://hl7.org/fhir/restful-capability-mode"
    },
};
//# sourceMappingURL=RestfulCapabilityMode.js.map