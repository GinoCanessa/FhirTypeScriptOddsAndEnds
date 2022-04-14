"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentResponseParticipantStatusEnum = exports.AppointmentResponse = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
class AppointmentResponse extends fhirModels.DomainResource {
    /**
     * Default constructor for AppointmentResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "AppointmentResponse";
        if ((source['resourceType'] !== "AppointmentResponse") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a AppointmentResponse';
        }
        if (source["actor"] !== undefined) {
            this.actor = new fhirModels.Reference(source.actor);
        }
        {
            this.appointment = new fhirModels.Reference(source.appointment);
        }
        if (source["comment"] !== undefined) {
            this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            this._comment = new fhirModels.Element(source._comment);
        }
        if (source["end"] !== undefined) {
            this.end = source.end;
        }
        if (source["_end"] !== undefined) {
            this._end = new fhirModels.Element(source._end);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        {
            this.participantStatus = source.participantStatus;
        }
        if (source["_participantStatus"] !== undefined) {
            this._participantStatus = new fhirModels.Element(source._participantStatus);
        }
        if (source["participantType"] !== undefined) {
            this.participantType = source.participantType.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["start"] !== undefined) {
            this.start = source.start;
        }
        if (source["_start"] !== undefined) {
            this._start = new fhirModels.Element(source._start);
        }
    }
}
exports.AppointmentResponse = AppointmentResponse;
/**
 * Code Values for the AppointmentResponse.participantStatus field
 */
var AppointmentResponseParticipantStatusEnum;
(function (AppointmentResponseParticipantStatusEnum) {
    AppointmentResponseParticipantStatusEnum["ACCEPTED"] = "accepted";
    AppointmentResponseParticipantStatusEnum["DECLINED"] = "declined";
    AppointmentResponseParticipantStatusEnum["TENTATIVE"] = "tentative";
    AppointmentResponseParticipantStatusEnum["NEEDS_ACTION"] = "needs-action";
})(AppointmentResponseParticipantStatusEnum = exports.AppointmentResponseParticipantStatusEnum || (exports.AppointmentResponseParticipantStatusEnum = {}));
//# sourceMappingURL=AppointmentResponse.js.map