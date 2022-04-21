import { Coding } from '../fhir.js';
/**
 * The protocol used for message transport.
 */
export declare const MessageTransportValueSet: {
    /**
     * ftp: The application sends or receives messages using File Transfer Protocol.
     */
    readonly FTP: Coding;
    /**
     * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    readonly HTTP: Coding;
    /**
     * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    readonly MLLP: Coding;
};
/**
 * The protocol used for message transport.
 */
export declare type MessageTransportValueSetType = typeof MessageTransportValueSet;
/**
 * The protocol used for message transport.
 */
export declare enum MessageTransportValueSetEnum {
    /**
     * ftp: The application sends or receives messages using File Transfer Protocol.
     */
    FTP = "ftp",
    /**
     * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    HTTP = "http",
    /**
     * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    MLLP = "mllp"
}
//# sourceMappingURL=MessageTransportValueSet.d.ts.map