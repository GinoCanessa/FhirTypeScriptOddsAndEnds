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
exports.GuidanceResponseStatusEnum = exports.GuidanceResponse = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
class GuidanceResponse extends fhirModels.DomainResource {
    /**
     * Default constructor for GuidanceResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "GuidanceResponse";
        if ((source['resourceType'] !== "GuidanceResponse") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a GuidanceResponse';
        }
        if (source["dataRequirement"] !== undefined) {
            this.dataRequirement = source.dataRequirement.map((x) => new fhirModels.DataRequirement(x));
        }
        if (source["encounter"] !== undefined) {
            this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["evaluationMessage"] !== undefined) {
            this.evaluationMessage = source.evaluationMessage.map((x) => new fhirModels.Reference(x));
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["moduleUri"] !== undefined) {
            this.moduleUri = source.moduleUri;
        }
        if (source["_moduleUri"] !== undefined) {
            this._moduleUri = new fhirModels.Element(source._moduleUri);
        }
        if (source["moduleCanonical"] !== undefined) {
            this.moduleCanonical = source.moduleCanonical;
        }
        if (source["_moduleCanonical"] !== undefined) {
            this._moduleCanonical = new fhirModels.Element(source._moduleCanonical);
        }
        if (source["moduleCodeableConcept"] !== undefined) {
            this.moduleCodeableConcept = new fhirModels.CodeableConcept(source.moduleCodeableConcept);
        }
        if (source["note"] !== undefined) {
            this.note = source.note.map((x) => new fhirModels.Annotation(x));
        }
        if (source["occurrenceDateTime"] !== undefined) {
            this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source["_occurrenceDateTime"] !== undefined) {
            this._occurrenceDateTime = new fhirModels.Element(source._occurrenceDateTime);
        }
        if (source["outputParameters"] !== undefined) {
            this.outputParameters = new fhirModels.Reference(source.outputParameters);
        }
        if (source["performer"] !== undefined) {
            this.performer = new fhirModels.Reference(source.performer);
        }
        if (source["reasonCode"] !== undefined) {
            this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["reasonReference"] !== undefined) {
            this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x));
        }
        if (source["requestIdentifier"] !== undefined) {
            this.requestIdentifier = new fhirModels.Identifier(source.requestIdentifier);
        }
        if (source["result"] !== undefined) {
            this.result = new fhirModels.Reference(source.result);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            this.subject = new fhirModels.Reference(source.subject);
        }
    }
    /**
     * Factory function to create a GuidanceResponse from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new GuidanceResponse(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GuidanceResponse is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current GuidanceResponse contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.GuidanceResponse = GuidanceResponse;
/**
 * Code Values for the GuidanceResponse.status field
 */
var GuidanceResponseStatusEnum;
(function (GuidanceResponseStatusEnum) {
    GuidanceResponseStatusEnum["SUCCESS"] = "success";
    GuidanceResponseStatusEnum["DATA_REQUESTED"] = "data-requested";
    GuidanceResponseStatusEnum["DATA_REQUIRED"] = "data-required";
    GuidanceResponseStatusEnum["IN_PROGRESS"] = "in-progress";
    GuidanceResponseStatusEnum["FAILURE"] = "failure";
    GuidanceResponseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(GuidanceResponseStatusEnum = exports.GuidanceResponseStatusEnum || (exports.GuidanceResponseStatusEnum = {}));
//# sourceMappingURL=GuidanceResponse.js.map