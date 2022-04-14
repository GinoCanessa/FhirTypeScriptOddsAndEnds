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
exports.FlagStatusEnum = exports.Flag = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
class Flag extends fhirModels.DomainResource {
    /**
     * Default constructor for Flag from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "Flag";
        if ((source['resourceType'] !== "Flag") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Flag';
        }
        if (source["author"] !== undefined) {
            this.author = new fhirModels.Reference(source.author);
        }
        if (source["category"] !== undefined) {
            this.category = source.category.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["encounter"] !== undefined) {
            this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["period"] !== undefined) {
            this.period = new fhirModels.Period(source.period);
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
     * Factory function to create a Flag from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new Flag(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Flag is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current Flag contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["subject"] === undefined) {
            missingElements.push("subject");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.Flag = Flag;
/**
 * Code Values for the Flag.status field
 */
var FlagStatusEnum;
(function (FlagStatusEnum) {
    FlagStatusEnum["ACTIVE"] = "active";
    FlagStatusEnum["INACTIVE"] = "inactive";
    FlagStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(FlagStatusEnum = exports.FlagStatusEnum || (exports.FlagStatusEnum = {}));
//# sourceMappingURL=Flag.js.map