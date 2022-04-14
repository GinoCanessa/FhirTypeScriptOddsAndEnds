"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryType = void 0;
/**
 * The type of knowledge asset this library contains.
 */
exports.LibraryType = {
    /**
     * The resource is a collection of knowledge assets.
     */
    library_type_AssetCollection: {
        code: "asset-collection",
        display: "Asset Collection",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    },
    /**
     * The resource is a shareable library of formalized knowledge.
     */
    library_type_LogicLibrary: {
        code: "logic-library",
        display: "Logic Library",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    },
    /**
     * The resource is a definition of an information model.
     */
    library_type_ModelDefinition: {
        code: "model-definition",
        display: "Model Definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    },
    /**
     * The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    library_type_ModuleDefinition: {
        code: "module-definition",
        display: "Module Definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    },
};
//# sourceMappingURL=LibraryType.js.map