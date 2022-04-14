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
exports.PractitionerGenderEnum = exports.Practitioner = exports.PractitionerQualification = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
class PractitionerQualification extends fhirModels.BackboneElement {
    /**
     * Default constructor for PractitionerQualification from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["issuer"] !== undefined) {
            this.issuer = new fhirModels.Reference(source.issuer);
        }
        if (source["period"] !== undefined) {
            this.period = new fhirModels.Period(source.period);
        }
    }
    /**
     * Factory function to create a PractitionerQualification from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new PractitionerQualification(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `PractitionerQualification is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current PractitionerQualification contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.PractitionerQualification = PractitionerQualification;
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
class Practitioner extends fhirModels.DomainResource {
    /**
     * Default constructor for Practitioner from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "Practitioner";
        if ((source['resourceType'] !== "Practitioner") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Practitioner';
        }
        if (source["active"] !== undefined) {
            this.active = source.active;
        }
        if (source["_active"] !== undefined) {
            this._active = new fhirModels.Element(source._active);
        }
        if (source["address"] !== undefined) {
            this.address = source.address.map((x) => new fhirModels.Address(x));
        }
        if (source["birthDate"] !== undefined) {
            this.birthDate = source.birthDate;
        }
        if (source["_birthDate"] !== undefined) {
            this._birthDate = new fhirModels.Element(source._birthDate);
        }
        if (source["communication"] !== undefined) {
            this.communication = source.communication.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["gender"] !== undefined) {
            this.gender = source.gender;
        }
        if (source["_gender"] !== undefined) {
            this._gender = new fhirModels.Element(source._gender);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["name"] !== undefined) {
            this.name = source.name.map((x) => new fhirModels.HumanName(x));
        }
        if (source["photo"] !== undefined) {
            this.photo = source.photo.map((x) => new fhirModels.Attachment(x));
        }
        if (source["qualification"] !== undefined) {
            this.qualification = source.qualification.map((x) => new fhirModels.PractitionerQualification(x));
        }
        if (source["telecom"] !== undefined) {
            this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
        }
    }
    /**
     * Factory function to create a Practitioner from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new Practitioner(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Practitioner is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current Practitioner contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.Practitioner = Practitioner;
/**
 * Code Values for the Practitioner.gender field
 */
var PractitionerGenderEnum;
(function (PractitionerGenderEnum) {
    PractitionerGenderEnum["MALE"] = "male";
    PractitionerGenderEnum["FEMALE"] = "female";
    PractitionerGenderEnum["OTHER"] = "other";
    PractitionerGenderEnum["UNKNOWN"] = "unknown";
})(PractitionerGenderEnum = exports.PractitionerGenderEnum || (exports.PractitionerGenderEnum = {}));
//# sourceMappingURL=Practitioner.js.map