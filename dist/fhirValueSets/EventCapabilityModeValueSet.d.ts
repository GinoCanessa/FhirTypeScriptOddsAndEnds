import { Coding } from '../fhir.js';
/**
 * The mode of a message capability statement.
 */
export declare const EventCapabilityModeValueSet: {
    /**
     * receiver: The application receives requests and sends responses.
     */
    readonly Receiver: Coding;
    /**
     * sender: The application sends requests and receives responses.
     */
    readonly Sender: Coding;
};
/**
 * The mode of a message capability statement.
 */
export declare type EventCapabilityModeValueSetType = typeof EventCapabilityModeValueSet;
/**
 * The mode of a message capability statement.
 */
export declare enum EventCapabilityModeValueSetEnum {
    /**
     * receiver: The application receives requests and sends responses.
     */
    Receiver = "receiver",
    /**
     * sender: The application sends requests and receives responses.
     */
    Sender = "sender"
}
//# sourceMappingURL=EventCapabilityModeValueSet.d.ts.map