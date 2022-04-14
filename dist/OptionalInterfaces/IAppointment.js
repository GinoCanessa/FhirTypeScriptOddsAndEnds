"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatusEnum = exports.AppointmentParticipantStatusEnum = exports.AppointmentParticipantRequiredEnum = void 0;
/**
 * Code Values for the Appointment.participant.required field
 */
var AppointmentParticipantRequiredEnum;
(function (AppointmentParticipantRequiredEnum) {
    AppointmentParticipantRequiredEnum["REQUIRED"] = "required";
    AppointmentParticipantRequiredEnum["OPTIONAL"] = "optional";
    AppointmentParticipantRequiredEnum["INFORMATION_ONLY"] = "information-only";
})(AppointmentParticipantRequiredEnum = exports.AppointmentParticipantRequiredEnum || (exports.AppointmentParticipantRequiredEnum = {}));
/**
 * Code Values for the Appointment.participant.status field
 */
var AppointmentParticipantStatusEnum;
(function (AppointmentParticipantStatusEnum) {
    AppointmentParticipantStatusEnum["ACCEPTED"] = "accepted";
    AppointmentParticipantStatusEnum["DECLINED"] = "declined";
    AppointmentParticipantStatusEnum["TENTATIVE"] = "tentative";
    AppointmentParticipantStatusEnum["NEEDS_ACTION"] = "needs-action";
})(AppointmentParticipantStatusEnum = exports.AppointmentParticipantStatusEnum || (exports.AppointmentParticipantStatusEnum = {}));
/**
 * Code Values for the Appointment.status field
 */
var AppointmentStatusEnum;
(function (AppointmentStatusEnum) {
    AppointmentStatusEnum["PROPOSED"] = "proposed";
    AppointmentStatusEnum["PENDING"] = "pending";
    AppointmentStatusEnum["BOOKED"] = "booked";
    AppointmentStatusEnum["ARRIVED"] = "arrived";
    AppointmentStatusEnum["FULFILLED"] = "fulfilled";
    AppointmentStatusEnum["CANCELLED"] = "cancelled";
    AppointmentStatusEnum["NOSHOW"] = "noshow";
    AppointmentStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    AppointmentStatusEnum["CHECKED_IN"] = "checked-in";
    AppointmentStatusEnum["WAITLIST"] = "waitlist";
})(AppointmentStatusEnum = exports.AppointmentStatusEnum || (exports.AppointmentStatusEnum = {}));
//# sourceMappingURL=IAppointment.js.map