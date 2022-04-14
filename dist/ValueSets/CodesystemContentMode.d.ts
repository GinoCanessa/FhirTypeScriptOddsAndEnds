import { Coding } from '../strictmodels';
/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 */
export declare const CodesystemContentMode: {
    /**
     * All the concepts defined by the code system are included in the code system resource.
     */
    codesystem_content_mode_Complete: Coding;
    /**
     * A few representative concepts are included in the code system resource. There is no useful intent in the subset choice and there's no process to make it workable: it's not intended to be workable.
     */
    codesystem_content_mode_Example: Coding;
    /**
     * A subset of the code system concepts are included in the code system resource. This is a curated subset released for a specific purpose under the governance of the code system steward, and that the intent, bounds and consequences of the fragmentation are clearly defined in the fragment or the code system documentation. Fragments are also known as partitions.
     */
    codesystem_content_mode_Fragment: Coding;
    /**
     * None of the concepts defined by the code system are included in the code system resource.
     */
    codesystem_content_mode_NotPresent: Coding;
    /**
     * The resource doesn't define any new concepts; it just provides additional designations and properties to another code system.
     */
    codesystem_content_mode_Supplement: Coding;
};
//# sourceMappingURL=CodesystemContentMode.d.ts.map