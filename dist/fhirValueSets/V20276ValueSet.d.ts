import { Coding } from '../fhir.js';
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export declare const V20276ValueSet: {
    /**
     * Code: CHECKUP
     */
    readonly ARoutineCheckUpSuchAsAnAnnualPhysical: Coding;
    /**
     * Code: EMERGENCY
     */
    readonly EmergencyAppointment: Coding;
    /**
     * Code: FOLLOWUP
     */
    readonly AFollowUpVisitFromAPreviousAppointment: Coding;
    /**
     * Code: ROUTINE
     */
    readonly RoutineAppointmentDefaultIfNotValued: Coding;
    /**
     * Code: WALKIN
     */
    readonly APreviouslyUnscheduledWalkInVisit: Coding;
};
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export declare type V20276ValueSetType = typeof V20276ValueSet;
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
//# sourceMappingURL=V20276ValueSet.d.ts.map