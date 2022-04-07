var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels';
/**
 * Associated or related knowledge about a medication.
 */
var MedicationKnowledgeRelatedMedicationKnowledge = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeRelatedMedicationKnowledge, _super);
    /**
     * Default constructor for MedicationKnowledgeRelatedMedicationKnowledge from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeRelatedMedicationKnowledge(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.reference = source.reference.map(function (x) { return new fhirModels.Reference(x); });
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeRelatedMedicationKnowledge;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeRelatedMedicationKnowledge };
/**
 * Associated documentation about the medication.
 */
var MedicationKnowledgeMonograph = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeMonograph, _super);
    /**
     * Default constructor for MedicationKnowledgeMonograph from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeMonograph(source) {
        var _this = _super.call(this, source) || this;
        if (source["source"] !== undefined) {
            _this.source = new fhirModels.Reference(source.source);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeMonograph;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeMonograph };
/**
 * Identifies a particular constituent of interest in the product.
 */
var MedicationKnowledgeIngredient = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeIngredient, _super);
    /**
     * Default constructor for MedicationKnowledgeIngredient from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeIngredient(source) {
        var _this = _super.call(this, source) || this;
        if (source["isActive"] !== undefined) {
            _this.isActive = source.isActive;
        }
        if (source["_isActive"] !== undefined) {
            _this._isActive = new fhirModels.Element(source._isActive);
        }
        if (source["itemCodeableConcept"] !== undefined) {
            _this.itemCodeableConcept = new fhirModels.CodeableConcept(source.itemCodeableConcept);
        }
        if (source["itemReference"] !== undefined) {
            _this.itemReference = new fhirModels.Reference(source.itemReference);
        }
        if (source["strength"] !== undefined) {
            _this.strength = new fhirModels.Ratio(source.strength);
        }
        return _this;
    }
    return MedicationKnowledgeIngredient;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeIngredient };
/**
 * The price of the medication.
 */
var MedicationKnowledgeCost = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeCost, _super);
    /**
     * Default constructor for MedicationKnowledgeCost from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeCost(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.cost = new fhirModels.Money(source.cost);
        }
        if (source["source"] !== undefined) {
            _this.source = source.source;
        }
        if (source["_source"] !== undefined) {
            _this._source = new fhirModels.Element(source._source);
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeCost;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeCost };
/**
 * The program under which the medication is reviewed.
 */
var MedicationKnowledgeMonitoringProgram = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeMonitoringProgram, _super);
    /**
     * Default constructor for MedicationKnowledgeMonitoringProgram from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeMonitoringProgram(source) {
        var _this = _super.call(this, source) || this;
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeMonitoringProgram;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeMonitoringProgram };
/**
 * Dosage for the medication for the specific guidelines.
 */
var MedicationKnowledgeAdministrationGuidelinesDosage = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeAdministrationGuidelinesDosage, _super);
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesDosage from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeAdministrationGuidelinesDosage(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.dosage = source.dosage.map(function (x) { return new fhirModels.Dosage(x); });
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeAdministrationGuidelinesDosage;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeAdministrationGuidelinesDosage };
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
var MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics, _super);
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(source) {
        var _this = _super.call(this, source) || this;
        if (source["characteristicCodeableConcept"] !== undefined) {
            _this.characteristicCodeableConcept = new fhirModels.CodeableConcept(source.characteristicCodeableConcept);
        }
        if (source["characteristicQuantity"] !== undefined) {
            _this.characteristicQuantity = new fhirModels.Quantity(source.characteristicQuantity);
        }
        if (source["value"] !== undefined) {
            _this.value = source.value.map(function (x) { return (x); });
        }
        if (source["_value"] !== undefined) {
            _this._value = source._value.map(function (x) { return new fhirModels.Element(x); });
        }
        return _this;
    }
    return MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics };
/**
 * Guidelines for the administration of the medication.
 */
var MedicationKnowledgeAdministrationGuidelines = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeAdministrationGuidelines, _super);
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelines from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeAdministrationGuidelines(source) {
        var _this = _super.call(this, source) || this;
        if (source["dosage"] !== undefined) {
            _this.dosage = source.dosage.map(function (x) { return new fhirModels.MedicationKnowledgeAdministrationGuidelinesDosage(x); });
        }
        if (source["indicationCodeableConcept"] !== undefined) {
            _this.indicationCodeableConcept = new fhirModels.CodeableConcept(source.indicationCodeableConcept);
        }
        if (source["indicationReference"] !== undefined) {
            _this.indicationReference = new fhirModels.Reference(source.indicationReference);
        }
        if (source["patientCharacteristics"] !== undefined) {
            _this.patientCharacteristics = source.patientCharacteristics.map(function (x) { return new fhirModels.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(x); });
        }
        return _this;
    }
    return MedicationKnowledgeAdministrationGuidelines;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeAdministrationGuidelines };
/**
 * Categorization of the medication within a formulary or classification system.
 */
var MedicationKnowledgeMedicineClassification = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeMedicineClassification, _super);
    /**
     * Default constructor for MedicationKnowledgeMedicineClassification from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeMedicineClassification(source) {
        var _this = _super.call(this, source) || this;
        if (source["classification"] !== undefined) {
            _this.classification = source.classification.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeMedicineClassification;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeMedicineClassification };
/**
 * Information that only applies to packages (not products).
 */
var MedicationKnowledgePackaging = /** @class */ (function (_super) {
    __extends(MedicationKnowledgePackaging, _super);
    /**
     * Default constructor for MedicationKnowledgePackaging from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgePackaging(source) {
        var _this = _super.call(this, source) || this;
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgePackaging;
}(fhirModels.BackboneElement));
export { MedicationKnowledgePackaging };
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
var MedicationKnowledgeDrugCharacteristic = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeDrugCharacteristic, _super);
    /**
     * Default constructor for MedicationKnowledgeDrugCharacteristic from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeDrugCharacteristic(source) {
        var _this = _super.call(this, source) || this;
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["valueCodeableConcept"] !== undefined) {
            _this.valueCodeableConcept = new fhirModels.CodeableConcept(source.valueCodeableConcept);
        }
        if (source["valueString"] !== undefined) {
            _this.valueString = source.valueString;
        }
        if (source["_valueString"] !== undefined) {
            _this._valueString = new fhirModels.Element(source._valueString);
        }
        if (source["valueQuantity"] !== undefined) {
            _this.valueQuantity = new fhirModels.Quantity(source.valueQuantity);
        }
        if (source["valueBase64Binary"] !== undefined) {
            _this.valueBase64Binary = source.valueBase64Binary;
        }
        if (source["_valueBase64Binary"] !== undefined) {
            _this._valueBase64Binary = new fhirModels.Element(source._valueBase64Binary);
        }
        return _this;
    }
    return MedicationKnowledgeDrugCharacteristic;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeDrugCharacteristic };
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
var MedicationKnowledgeRegulatorySubstitution = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeRegulatorySubstitution, _super);
    /**
     * Default constructor for MedicationKnowledgeRegulatorySubstitution from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeRegulatorySubstitution(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.allowed = source.allowed;
        }
        if (source["_allowed"] !== undefined) {
            _this._allowed = new fhirModels.Element(source._allowed);
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return MedicationKnowledgeRegulatorySubstitution;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeRegulatorySubstitution };
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
var MedicationKnowledgeRegulatorySchedule = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeRegulatorySchedule, _super);
    /**
     * Default constructor for MedicationKnowledgeRegulatorySchedule from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeRegulatorySchedule(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.schedule = new fhirModels.CodeableConcept(source.schedule);
        }
        return _this;
    }
    return MedicationKnowledgeRegulatorySchedule;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeRegulatorySchedule };
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
var MedicationKnowledgeRegulatoryMaxDispense = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeRegulatoryMaxDispense, _super);
    /**
     * Default constructor for MedicationKnowledgeRegulatoryMaxDispense from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeRegulatoryMaxDispense(source) {
        var _this = _super.call(this, source) || this;
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Duration(source.period);
        }
        {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        return _this;
    }
    return MedicationKnowledgeRegulatoryMaxDispense;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeRegulatoryMaxDispense };
/**
 * Regulatory information about a medication.
 */
var MedicationKnowledgeRegulatory = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeRegulatory, _super);
    /**
     * Default constructor for MedicationKnowledgeRegulatory from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeRegulatory(source) {
        var _this = _super.call(this, source) || this;
        if (source["maxDispense"] !== undefined) {
            _this.maxDispense = new fhirModels.MedicationKnowledgeRegulatoryMaxDispense(source.maxDispense);
        }
        {
            _this.regulatoryAuthority = new fhirModels.Reference(source.regulatoryAuthority);
        }
        if (source["schedule"] !== undefined) {
            _this.schedule = source.schedule.map(function (x) { return new fhirModels.MedicationKnowledgeRegulatorySchedule(x); });
        }
        if (source["substitution"] !== undefined) {
            _this.substitution = source.substitution.map(function (x) { return new fhirModels.MedicationKnowledgeRegulatorySubstitution(x); });
        }
        return _this;
    }
    return MedicationKnowledgeRegulatory;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeRegulatory };
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
var MedicationKnowledgeKinetics = /** @class */ (function (_super) {
    __extends(MedicationKnowledgeKinetics, _super);
    /**
     * Default constructor for MedicationKnowledgeKinetics from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledgeKinetics(source) {
        var _this = _super.call(this, source) || this;
        if (source["areaUnderCurve"] !== undefined) {
            _this.areaUnderCurve = source.areaUnderCurve.map(function (x) { return new fhirModels.Quantity(x); });
        }
        if (source["halfLifePeriod"] !== undefined) {
            _this.halfLifePeriod = new fhirModels.Duration(source.halfLifePeriod);
        }
        if (source["lethalDose50"] !== undefined) {
            _this.lethalDose50 = source.lethalDose50.map(function (x) { return new fhirModels.Quantity(x); });
        }
        return _this;
    }
    return MedicationKnowledgeKinetics;
}(fhirModels.BackboneElement));
export { MedicationKnowledgeKinetics };
/**
 * Information about a medication that is used to support knowledge.
 */
var MedicationKnowledge = /** @class */ (function (_super) {
    __extends(MedicationKnowledge, _super);
    /**
     * Default constructor for MedicationKnowledge from an object that MAY NOT contain all required elements.
     */
    function MedicationKnowledge(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "MedicationKnowledge";
        if ((source['resourceType'] !== "MedicationKnowledge") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicationKnowledge';
        }
        if (source["administrationGuidelines"] !== undefined) {
            _this.administrationGuidelines = source.administrationGuidelines.map(function (x) { return new fhirModels.MedicationKnowledgeAdministrationGuidelines(x); });
        }
        if (source["amount"] !== undefined) {
            _this.amount = new fhirModels.Quantity(source.amount);
        }
        if (source["associatedMedication"] !== undefined) {
            _this.associatedMedication = source.associatedMedication.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["contraindication"] !== undefined) {
            _this.contraindication = source.contraindication.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["cost"] !== undefined) {
            _this.cost = source.cost.map(function (x) { return new fhirModels.MedicationKnowledgeCost(x); });
        }
        if (source["doseForm"] !== undefined) {
            _this.doseForm = new fhirModels.CodeableConcept(source.doseForm);
        }
        if (source["drugCharacteristic"] !== undefined) {
            _this.drugCharacteristic = source.drugCharacteristic.map(function (x) { return new fhirModels.MedicationKnowledgeDrugCharacteristic(x); });
        }
        if (source["ingredient"] !== undefined) {
            _this.ingredient = source.ingredient.map(function (x) { return new fhirModels.MedicationKnowledgeIngredient(x); });
        }
        if (source["intendedRoute"] !== undefined) {
            _this.intendedRoute = source.intendedRoute.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["kinetics"] !== undefined) {
            _this.kinetics = source.kinetics.map(function (x) { return new fhirModels.MedicationKnowledgeKinetics(x); });
        }
        if (source["manufacturer"] !== undefined) {
            _this.manufacturer = new fhirModels.Reference(source.manufacturer);
        }
        if (source["medicineClassification"] !== undefined) {
            _this.medicineClassification = source.medicineClassification.map(function (x) { return new fhirModels.MedicationKnowledgeMedicineClassification(x); });
        }
        if (source["monitoringProgram"] !== undefined) {
            _this.monitoringProgram = source.monitoringProgram.map(function (x) { return new fhirModels.MedicationKnowledgeMonitoringProgram(x); });
        }
        if (source["monograph"] !== undefined) {
            _this.monograph = source.monograph.map(function (x) { return new fhirModels.MedicationKnowledgeMonograph(x); });
        }
        if (source["packaging"] !== undefined) {
            _this.packaging = new fhirModels.MedicationKnowledgePackaging(source.packaging);
        }
        if (source["preparationInstruction"] !== undefined) {
            _this.preparationInstruction = source.preparationInstruction;
        }
        if (source["_preparationInstruction"] !== undefined) {
            _this._preparationInstruction = new fhirModels.Element(source._preparationInstruction);
        }
        if (source["productType"] !== undefined) {
            _this.productType = source.productType.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["regulatory"] !== undefined) {
            _this.regulatory = source.regulatory.map(function (x) { return new fhirModels.MedicationKnowledgeRegulatory(x); });
        }
        if (source["relatedMedicationKnowledge"] !== undefined) {
            _this.relatedMedicationKnowledge = source.relatedMedicationKnowledge.map(function (x) { return new fhirModels.MedicationKnowledgeRelatedMedicationKnowledge(x); });
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["synonym"] !== undefined) {
            _this.synonym = source.synonym.map(function (x) { return (x); });
        }
        if (source["_synonym"] !== undefined) {
            _this._synonym = source._synonym.map(function (x) { return new fhirModels.Element(x); });
        }
        return _this;
    }
    return MedicationKnowledge;
}(fhirModels.DomainResource));
export { MedicationKnowledge };
/**
 * Code Values for the MedicationKnowledge.status field
 */
export var MedicationKnowledgeStatusEnum;
(function (MedicationKnowledgeStatusEnum) {
    MedicationKnowledgeStatusEnum["ACTIVE"] = "active";
    MedicationKnowledgeStatusEnum["INACTIVE"] = "inactive";
    MedicationKnowledgeStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(MedicationKnowledgeStatusEnum || (MedicationKnowledgeStatusEnum = {}));
