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
exports.MediaStatusEnum = exports.Media = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
class Media extends fhirModels.DomainResource {
    /**
     * Default constructor for Media from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "Media";
        if ((source['resourceType'] !== "Media") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Media';
        }
        if (source["basedOn"] !== undefined) {
            this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x));
        }
        if (source["bodySite"] !== undefined) {
            this.bodySite = new fhirModels.CodeableConcept(source.bodySite);
        }
        {
            this.content = new fhirModels.Attachment(source.content);
        }
        if (source["createdDateTime"] !== undefined) {
            this.createdDateTime = source.createdDateTime;
        }
        if (source["_createdDateTime"] !== undefined) {
            this._createdDateTime = new fhirModels.Element(source._createdDateTime);
        }
        if (source["createdPeriod"] !== undefined) {
            this.createdPeriod = new fhirModels.Period(source.createdPeriod);
        }
        if (source["device"] !== undefined) {
            this.device = new fhirModels.Reference(source.device);
        }
        if (source["deviceName"] !== undefined) {
            this.deviceName = source.deviceName;
        }
        if (source["_deviceName"] !== undefined) {
            this._deviceName = new fhirModels.Element(source._deviceName);
        }
        if (source["duration"] !== undefined) {
            this.duration = source.duration;
        }
        if (source["_duration"] !== undefined) {
            this._duration = new fhirModels.Element(source._duration);
        }
        if (source["encounter"] !== undefined) {
            this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["frames"] !== undefined) {
            this.frames = source.frames;
        }
        if (source["_frames"] !== undefined) {
            this._frames = new fhirModels.Element(source._frames);
        }
        if (source["height"] !== undefined) {
            this.height = source.height;
        }
        if (source["_height"] !== undefined) {
            this._height = new fhirModels.Element(source._height);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["issued"] !== undefined) {
            this.issued = source.issued;
        }
        if (source["_issued"] !== undefined) {
            this._issued = new fhirModels.Element(source._issued);
        }
        if (source["modality"] !== undefined) {
            this.modality = new fhirModels.CodeableConcept(source.modality);
        }
        if (source["note"] !== undefined) {
            this.note = source.note.map((x) => new fhirModels.Annotation(x));
        }
        if (source["operator"] !== undefined) {
            this.operator = new fhirModels.Reference(source.operator);
        }
        if (source["partOf"] !== undefined) {
            this.partOf = source.partOf.map((x) => new fhirModels.Reference(x));
        }
        if (source["reasonCode"] !== undefined) {
            this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x));
        }
        {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            this.subject = new fhirModels.Reference(source.subject);
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["view"] !== undefined) {
            this.view = new fhirModels.CodeableConcept(source.view);
        }
        if (source["width"] !== undefined) {
            this.width = source.width;
        }
        if (source["_width"] !== undefined) {
            this._width = new fhirModels.Element(source._width);
        }
    }
}
exports.Media = Media;
/**
 * Code Values for the Media.status field
 */
var MediaStatusEnum;
(function (MediaStatusEnum) {
    MediaStatusEnum["PREPARATION"] = "preparation";
    MediaStatusEnum["IN_PROGRESS"] = "in-progress";
    MediaStatusEnum["NOT_DONE"] = "not-done";
    MediaStatusEnum["ON_HOLD"] = "on-hold";
    MediaStatusEnum["STOPPED"] = "stopped";
    MediaStatusEnum["COMPLETED"] = "completed";
    MediaStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    MediaStatusEnum["UNKNOWN"] = "unknown";
})(MediaStatusEnum = exports.MediaStatusEnum || (exports.MediaStatusEnum = {}));
//# sourceMappingURL=Media.js.map