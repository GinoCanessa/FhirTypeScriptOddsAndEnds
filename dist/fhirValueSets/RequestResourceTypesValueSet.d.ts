import { Coding } from '../fhir';
/**
 * A list of all the request resource types defined in this version of the FHIR specification.
 */
export declare const RequestResourceTypesValueSet: {
    /**
     * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    request_resource_types_Appointment: Coding;
    /**
     * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
     */
    request_resource_types_AppointmentResponse: Coding;
    /**
     * Healthcare plan for patient or group.
     */
    request_resource_types_CarePlan: Coding;
    /**
     * Claim, Pre-determination or Pre-authorization.
     */
    request_resource_types_Claim: Coding;
    /**
     * A request for information to be sent to a receiver.
     */
    request_resource_types_CommunicationRequest: Coding;
    /**
     * Legal Agreement.
     */
    request_resource_types_Contract: Coding;
    /**
     * Medical device request.
     */
    request_resource_types_DeviceRequest: Coding;
    /**
     * Enrollment request.
     */
    request_resource_types_EnrollmentRequest: Coding;
    /**
     * Guidance or advice relating to an immunization.
     */
    request_resource_types_ImmunizationRecommendation: Coding;
    /**
     * Ordering of medication for patient or group.
     */
    request_resource_types_MedicationRequest: Coding;
    /**
     * Diet, formula or nutritional supplement request.
     */
    request_resource_types_NutritionOrder: Coding;
    /**
     * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    request_resource_types_ServiceRequest: Coding;
    /**
     * Request for a medication, substance or device.
     */
    request_resource_types_SupplyRequest: Coding;
    /**
     * A task to be performed.
     */
    request_resource_types_Task: Coding;
    /**
     * Prescription for vision correction products for a patient.
     */
    request_resource_types_VisionPrescription: Coding;
};
//# sourceMappingURL=RequestResourceTypesValueSet.d.ts.map