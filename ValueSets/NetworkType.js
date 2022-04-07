/**
 * The type of network access point of this agent in the audit event.
 */
export var NetworkType = {
    /**
     * The machine name, including DNS name.
     */
    network_type_MachineName: {
        code: "1",
        display: "Machine Name",
        system: "http://hl7.org/fhir/network-type"
    },
    /**
     * The assigned Internet Protocol (IP) address.
     */
    network_type_IPAddress: {
        code: "2",
        display: "IP Address",
        system: "http://hl7.org/fhir/network-type"
    },
    /**
     * The assigned telephone number.
     */
    network_type_TelephoneNumber: {
        code: "3",
        display: "Telephone Number",
        system: "http://hl7.org/fhir/network-type"
    },
    /**
     * The assigned email address.
     */
    network_type_EmailAddress: {
        code: "4",
        display: "Email address",
        system: "http://hl7.org/fhir/network-type"
    },
    /**
     * URI (User directory, HTTP-PUT, ftp, etc.).
     */
    network_type_URI: {
        code: "5",
        display: "URI",
        system: "http://hl7.org/fhir/network-type"
    }
};
