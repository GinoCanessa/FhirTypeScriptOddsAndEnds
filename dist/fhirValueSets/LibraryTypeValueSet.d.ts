import { Coding } from '../fhir.js';
/**
 * The type of knowledge asset this library contains.
 */
export declare const LibraryTypeValueSet: {
    /**
     * asset-collection: The resource is a collection of knowledge assets.
     */
    readonly AssetCollection: Coding;
    /**
     * logic-library: The resource is a shareable library of formalized knowledge.
     */
    readonly LogicLibrary: Coding;
    /**
     * model-definition: The resource is a definition of an information model.
     */
    readonly ModelDefinition: Coding;
    /**
     * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    readonly ModuleDefinition: Coding;
};
/**
 * The type of knowledge asset this library contains.
 */
export declare type LibraryTypeValueSetType = typeof LibraryTypeValueSet;
/**
 * The type of knowledge asset this library contains.
 */
//# sourceMappingURL=LibraryTypeValueSet.d.ts.map