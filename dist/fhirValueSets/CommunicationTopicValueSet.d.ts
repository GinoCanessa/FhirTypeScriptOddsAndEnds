import { Coding } from '../fhir.js';
/**
 * Codes describing the purpose or content of the communication.
 */
export declare const CommunicationTopicValueSet: {
    /**
     * appointment-reminder: The purpose or content of the communication is an appointment reminder.
     */
    readonly AppointmentReminder: Coding;
    /**
     * phone-consult: The purpose or content of the communication is a phone consult.
     */
    readonly PhoneConsult: Coding;
    /**
     * prescription-refill-request: The purpose or content of the communication is a prescription refill request.
     */
    readonly PrescriptionRefillRequest: Coding;
    /**
     * progress-update: The purpose or content of the communication is a progress update.
     */
    readonly ProgressUpdate: Coding;
    /**
     * report-labs: The purpose or content of the communication is to report labs.
     */
    readonly ReportLabs: Coding;
    /**
     * summary-report: The purpose or content of the communication is a summary report.
     */
    readonly SummaryReport: Coding;
};
/**
 * Codes describing the purpose or content of the communication.
 */
export declare type CommunicationTopicValueSetType = typeof CommunicationTopicValueSet;
/**
 * Codes describing the purpose or content of the communication.
 */
//# sourceMappingURL=CommunicationTopicValueSet.d.ts.map