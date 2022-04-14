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
exports.MedicinalProductPharmaceutical = exports.MedicinalProductPharmaceuticalRouteOfAdministration = exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = exports.MedicinalProductPharmaceuticalCharacteristics = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Characteristics e.g. a products onset of action.
 */
class MedicinalProductPharmaceuticalCharacteristics extends fhirModels.BackboneElement {
    /**
     * Default constructor for MedicinalProductPharmaceuticalCharacteristics from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["status"] !== undefined) {
            this.status = new fhirModels.CodeableConcept(source.status);
        }
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalCharacteristics from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new MedicinalProductPharmaceuticalCharacteristics(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPharmaceuticalCharacteristics is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current MedicinalProductPharmaceuticalCharacteristics contains all required elements.
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
exports.MedicinalProductPharmaceuticalCharacteristics = MedicinalProductPharmaceuticalCharacteristics;
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhirModels.BackboneElement {
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["supportingInformation"] !== undefined) {
            this.supportingInformation = source.supportingInformation;
        }
        if (source["_supportingInformation"] !== undefined) {
            this._supportingInformation = new fhirModels.Element(source._supportingInformation);
        }
        if (source["tissue"] !== undefined) {
            this.tissue = new fhirModels.CodeableConcept(source.tissue);
        }
        if (source["value"] !== undefined) {
            this.value = new fhirModels.Quantity(source.value);
        }
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["tissue"] === undefined) {
            missingElements.push("tissue");
        }
        if (this["value"] === undefined) {
            missingElements.push("value");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
/**
 * A species for which this route applies.
 */
class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhirModels.BackboneElement {
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["withdrawalPeriod"] !== undefined) {
            this.withdrawalPeriod = source.withdrawalPeriod.map((x) => new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(x));
        }
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies contains all required elements.
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
exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
class MedicinalProductPharmaceuticalRouteOfAdministration extends fhirModels.BackboneElement {
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["firstDose"] !== undefined) {
            this.firstDose = new fhirModels.Quantity(source.firstDose);
        }
        if (source["maxDosePerDay"] !== undefined) {
            this.maxDosePerDay = new fhirModels.Quantity(source.maxDosePerDay);
        }
        if (source["maxDosePerTreatmentPeriod"] !== undefined) {
            this.maxDosePerTreatmentPeriod = new fhirModels.Ratio(source.maxDosePerTreatmentPeriod);
        }
        if (source["maxSingleDose"] !== undefined) {
            this.maxSingleDose = new fhirModels.Quantity(source.maxSingleDose);
        }
        if (source["maxTreatmentPeriod"] !== undefined) {
            this.maxTreatmentPeriod = new fhirModels.Duration(source.maxTreatmentPeriod);
        }
        if (source["targetSpecies"] !== undefined) {
            this.targetSpecies = source.targetSpecies.map((x) => new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(x));
        }
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministration from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new MedicinalProductPharmaceuticalRouteOfAdministration(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPharmaceuticalRouteOfAdministration is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministration contains all required elements.
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
exports.MedicinalProductPharmaceuticalRouteOfAdministration = MedicinalProductPharmaceuticalRouteOfAdministration;
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
class MedicinalProductPharmaceutical extends fhirModels.DomainResource {
    /**
     * Default constructor for MedicinalProductPharmaceutical from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "MedicinalProductPharmaceutical";
        if ((source['resourceType'] !== "MedicinalProductPharmaceutical") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicinalProductPharmaceutical';
        }
        if (source["administrableDoseForm"] !== undefined) {
            this.administrableDoseForm = new fhirModels.CodeableConcept(source.administrableDoseForm);
        }
        if (source["characteristics"] !== undefined) {
            this.characteristics = source.characteristics.map((x) => new fhirModels.MedicinalProductPharmaceuticalCharacteristics(x));
        }
        if (source["device"] !== undefined) {
            this.device = source.device.map((x) => new fhirModels.Reference(x));
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["ingredient"] !== undefined) {
            this.ingredient = source.ingredient.map((x) => new fhirModels.Reference(x));
        }
        if (source["routeOfAdministration"] !== undefined) {
            this.routeOfAdministration = source.routeOfAdministration.map((x) => new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministration(x));
        }
        if (source["unitOfPresentation"] !== undefined) {
            this.unitOfPresentation = new fhirModels.CodeableConcept(source.unitOfPresentation);
        }
    }
    /**
     * Factory function to create a MedicinalProductPharmaceutical from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new MedicinalProductPharmaceutical(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPharmaceutical is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current MedicinalProductPharmaceutical contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["administrableDoseForm"] === undefined) {
            missingElements.push("administrableDoseForm");
        }
        if ((this["routeOfAdministration"] === undefined) || (this["routeOfAdministration"].length === 0)) {
            missingElements.push("routeOfAdministration");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.MedicinalProductPharmaceutical = MedicinalProductPharmaceutical;
//# sourceMappingURL=MedicinalProductPharmaceutical.js.map