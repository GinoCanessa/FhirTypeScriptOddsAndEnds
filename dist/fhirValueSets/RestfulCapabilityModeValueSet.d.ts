import { Coding } from '../fhir.js';
/**
 * The mode of a RESTful capability statement.
 */
export declare const RestfulCapabilityModeValueSet: {
    /**
     * client: The application acts as a client for this resource.
     */
    readonly Client: Coding;
    /**
     * server: The application acts as a server for this resource.
     */
    readonly Server: Coding;
};
/**
 * The mode of a RESTful capability statement.
 */
export declare type RestfulCapabilityModeValueSetType = typeof RestfulCapabilityModeValueSet;
/**
 * The mode of a RESTful capability statement.
 */
export declare enum RestfulCapabilityModeValueSetEnum {
    /**
     * client: The application acts as a client for this resource.
     */
    Client = "client",
    /**
     * server: The application acts as a server for this resource.
     */
    Server = "server"
}
//# sourceMappingURL=RestfulCapabilityModeValueSet.d.ts.map