/**
 * The mode of a RESTful capability statement.
 */
export var RestfulCapabilityMode = {
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
    }
};
