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
exports.DomainResource = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
class DomainResource extends fhirModels.Resource {
    /**
     * Default constructor for DomainResource from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["contained"] !== undefined) {
            this.contained = [];
            source.contained.forEach((x) => {
                var r = fhirModels.FhirResourceFactory(x);
                if (r) {
                    this.contained.push(r);
                }
            });
        }
        if (source["extension"] !== undefined) {
            this.extension = source.extension.map((x) => new fhirModels.Extension(x));
        }
        if (source["modifierExtension"] !== undefined) {
            this.modifierExtension = source.modifierExtension.map((x) => new fhirModels.Extension(x));
        }
        if (source["text"] !== undefined) {
            this.text = new fhirModels.Narrative(source.text);
        }
    }
    /**
     * Factory function to create a DomainResource from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new DomainResource(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DomainResource is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current DomainResource contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.DomainResource = DomainResource;
//# sourceMappingURL=DomainResource.js.map