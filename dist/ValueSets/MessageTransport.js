"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTransport = void 0;
/**
 * The protocol used for message transport.
 */
exports.MessageTransport = {
    /**
     * The application sends or receives messages using File Transfer Protocol.
     */
    message_transport_FTP: {
        code: "ftp",
        display: "FTP",
        system: "http://terminology.hl7.org/CodeSystem/message-transport"
    },
    /**
     * The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    message_transport_HTTP: {
        code: "http",
        display: "HTTP",
        system: "http://terminology.hl7.org/CodeSystem/message-transport"
    },
    /**
     * The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    message_transport_MLLP: {
        code: "mllp",
        display: "MLLP",
        system: "http://terminology.hl7.org/CodeSystem/message-transport"
    },
};
//# sourceMappingURL=MessageTransport.js.map