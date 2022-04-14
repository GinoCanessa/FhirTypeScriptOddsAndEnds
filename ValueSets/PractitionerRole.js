"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PractitionerRole = void 0;
/**
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 */
exports.PractitionerRole = {
    /**
     * A qualified/registered medical practitioner
     */
    practitioner_role_Doctor: {
        code: "doctor",
        display: "Doctor",
        system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
    },
    /**
     * Someone who is qualified in Information and Communication Technologies
     */
    practitioner_role_ICTProfessional: {
        code: "ict",
        display: "ICT professional",
        system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
    },
    /**
     * A practitioner with nursing experience that may be qualified/registered
     */
    practitioner_role_Nurse: {
        code: "nurse",
        display: "Nurse",
        system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
    },
    /**
     * A qualified/registered/licensed pharmacist
     */
    practitioner_role_Pharmacist: {
        code: "pharmacist",
        display: "Pharmacist",
        system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
    },
    /**
     * A practitioner that may perform research
     */
    practitioner_role_Researcher: {
        code: "researcher",
        display: "Researcher",
        system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
    },
    /**
     * Someone who is able to provide educational services
     */
    practitioner_role_TeacherEducator: {
        code: "teacher",
        display: "Teacher/educator",
        system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
    },
};
//# sourceMappingURL=PractitionerRole.js.map