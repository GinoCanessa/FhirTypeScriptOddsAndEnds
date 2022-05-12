// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/message-transport|4.0.1

/**
 * The protocol used for message transport.
 */
export enum MessageTransportValueSetEnum {
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
  MLLP = "mllp",
}