// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/library-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of knowledge asset this library contains.
 */
export const LibraryTypeValueSet = {
    /**
     * asset-collection: The resource is a collection of knowledge assets.
     */
    AssetCollection: new Coding({
        display: "Asset Collection",
        code: "asset-collection",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    }),
    /**
     * logic-library: The resource is a shareable library of formalized knowledge.
     */
    LogicLibrary: new Coding({
        display: "Logic Library",
        code: "logic-library",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    }),
    /**
     * model-definition: The resource is a definition of an information model.
     */
    ModelDefinition: new Coding({
        display: "Model Definition",
        code: "model-definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    }),
    /**
     * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    ModuleDefinition: new Coding({
        display: "Module Definition",
        code: "module-definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type",
    }),
};
/**
 * The type of knowledge asset this library contains.
 */
//# sourceMappingURL=LibraryTypeValueSet.js.map