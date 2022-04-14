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
exports.MedicinalProductUndesirableEffect = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Describe the undesirable effects of the medicinal product.
 */
class MedicinalProductUndesirableEffect extends fhirModels.DomainResource {
    /**
     * Default constructor for MedicinalProductUndesirableEffect from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "MedicinalProductUndesirableEffect";
        if ((source['resourceType'] !== "MedicinalProductUndesirableEffect") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicinalProductUndesirableEffect';
        }
        if (source["classification"] !== undefined) {
            this.classification = new fhirModels.CodeableConcept(source.classification);
        }
        if (source["frequencyOfOccurrence"] !== undefined) {
            this.frequencyOfOccurrence = new fhirModels.CodeableConcept(source.frequencyOfOccurrence);
        }
        if (source["population"] !== undefined) {
            this.population = source.population.map((x) => new fhirModels.Population(x));
        }
        if (source["subject"] !== undefined) {
            this.subject = source.subject.map((x) => new fhirModels.Reference(x));
        }
        if (source["symptomConditionEffect"] !== undefined) {
            this.symptomConditionEffect = new fhirModels.CodeableConcept(source.symptomConditionEffect);
        }
    }
}
exports.MedicinalProductUndesirableEffect = MedicinalProductUndesirableEffect;
//# sourceMappingURL=MedicinalProductUndesirableEffect.js.map