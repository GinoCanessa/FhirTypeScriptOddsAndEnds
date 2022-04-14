"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportParticipantType = void 0;
/**
 * The type of participant.
 */
exports.ReportParticipantType = {
    /**
     * A FHIR Client.
     */
    report_participant_type_Client: {
        code: "client",
        display: "Client",
        system: "http://hl7.org/fhir/report-participant-type"
    },
    /**
     * A FHIR Server.
     */
    report_participant_type_Server: {
        code: "server",
        display: "Server",
        system: "http://hl7.org/fhir/report-participant-type"
    },
    /**
     * The test execution engine.
     */
    report_participant_type_TestEngine: {
        code: "test-engine",
        display: "Test Engine",
        system: "http://hl7.org/fhir/report-participant-type"
    },
};
//# sourceMappingURL=ReportParticipantType.js.map