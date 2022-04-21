import { Coding } from '../fhir.js';
/**
 * The type of participant.
 */
export declare const ReportParticipantTypeValueSet: {
    /**
     * client: A FHIR Client.
     */
    readonly Client: Coding;
    /**
     * server: A FHIR Server.
     */
    readonly Server: Coding;
    /**
     * test-engine: The test execution engine.
     */
    readonly TestEngine: Coding;
};
/**
 * The type of participant.
 */
export declare type ReportParticipantTypeValueSetType = typeof ReportParticipantTypeValueSet;
/**
 * The type of participant.
 */
export declare enum ReportParticipantTypeValueSetEnum {
    /**
     * client: A FHIR Client.
     */
    Client = "client",
    /**
     * server: A FHIR Server.
     */
    Server = "server",
    /**
     * test-engine: The test execution engine.
     */
    TestEngine = "test-engine"
}
//# sourceMappingURL=ReportParticipantTypeValueSet.d.ts.map