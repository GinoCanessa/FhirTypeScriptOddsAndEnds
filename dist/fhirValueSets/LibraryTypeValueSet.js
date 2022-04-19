// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The type of knowledge asset this library contains.
 */
export const LibraryTypeValueSet = {
    /**
     * The resource is a collection of knowledge assets.
     */
    library_type_AssetCollection: new Coding({
        code: "asset-collection",
        display: "Asset Collection",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    }),
    /**
     * The resource is a shareable library of formalized knowledge.
     */
    library_type_LogicLibrary: new Coding({
        code: "logic-library",
        display: "Logic Library",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    }),
    /**
     * The resource is a definition of an information model.
     */
    library_type_ModelDefinition: new Coding({
        code: "model-definition",
        display: "Model Definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    }),
    /**
     * The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    library_type_ModuleDefinition: new Coding({
        code: "module-definition",
        display: "Module Definition",
        system: "http://terminology.hl7.org/CodeSystem/library-type"
    }),
};
//# sourceMappingURL=LibraryTypeValueSet.js.map