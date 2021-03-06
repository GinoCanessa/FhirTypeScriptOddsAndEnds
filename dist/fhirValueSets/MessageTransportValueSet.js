// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-transport|4.0.1
import { Coding } from '../fhir.js';
/**
 * The protocol used for message transport.
 */
export const MessageTransportValueSet = {
    /**
     * ftp: The application sends or receives messages using File Transfer Protocol.
     */
    FTP: new Coding({
        display: "FTP",
        code: "ftp",
        system: "http://terminology.hl7.org/CodeSystem/message-transport",
    }),
    /**
     * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    HTTP: new Coding({
        display: "HTTP",
        code: "http",
        system: "http://terminology.hl7.org/CodeSystem/message-transport",
    }),
    /**
     * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    MLLP: new Coding({
        display: "MLLP",
        code: "mllp",
        system: "http://terminology.hl7.org/CodeSystem/message-transport",
    }),
};
/**
 * The protocol used for message transport.
 */
//# sourceMappingURL=MessageTransportValueSet.js.map