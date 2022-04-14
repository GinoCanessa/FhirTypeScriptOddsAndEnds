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
exports.MedicinalProductManufactured = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
class MedicinalProductManufactured extends fhirModels.DomainResource {
    /**
     * Default constructor for MedicinalProductManufactured from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "MedicinalProductManufactured";
        if ((source['resourceType'] !== "MedicinalProductManufactured") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicinalProductManufactured';
        }
        if (source["ingredient"] !== undefined) {
            this.ingredient = source.ingredient.map((x) => new fhirModels.Reference(x));
        }
        {
            this.manufacturedDoseForm = new fhirModels.CodeableConcept(source.manufacturedDoseForm);
        }
        if (source["manufacturer"] !== undefined) {
            this.manufacturer = source.manufacturer.map((x) => new fhirModels.Reference(x));
        }
        if (source["otherCharacteristics"] !== undefined) {
            this.otherCharacteristics = source.otherCharacteristics.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["physicalCharacteristics"] !== undefined) {
            this.physicalCharacteristics = new fhirModels.ProdCharacteristic(source.physicalCharacteristics);
        }
        {
            this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["unitOfPresentation"] !== undefined) {
            this.unitOfPresentation = new fhirModels.CodeableConcept(source.unitOfPresentation);
        }
    }
}
exports.MedicinalProductManufactured = MedicinalProductManufactured;
//# sourceMappingURL=MedicinalProductManufactured.js.map