/**
 * The free/busy status of an appointment.
 */
export var Appointmentstatus = {
    /**
     * The patient/patients has/have arrived and is/are waiting to be seen.
     */
    appointmentstatus_Arrived: {
        code: "arrived",
        display: "Arrived",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
     */
    appointmentstatus_Booked: {
        code: "booked",
        display: "Booked",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * The appointment has been cancelled.
     */
    appointmentstatus_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).
     */
    appointmentstatus_CheckedIn: {
        code: "checked-in",
        display: "Checked In",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * This instance should not have been part of this patient's medical record.
     */
    appointmentstatus_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in error",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.
     */
    appointmentstatus_Fulfilled: {
        code: "fulfilled",
        display: "Fulfilled",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
     */
    appointmentstatus_NoShow: {
        code: "noshow",
        display: "No Show",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * Some or all of the participant(s) have not finalized their acceptance of the appointment request.
     */
    appointmentstatus_Pending: {
        code: "pending",
        display: "Pending",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.
     */
    appointmentstatus_Proposed: {
        code: "proposed",
        display: "Proposed",
        system: "http://hl7.org/fhir/appointmentstatus"
    },
    /**
     * The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.
     * A specific time might or might not be pre-allocated.
     */
    appointmentstatus_Waitlisted: {
        code: "waitlist",
        display: "Waitlisted",
        system: "http://hl7.org/fhir/appointmentstatus"
    }
};
