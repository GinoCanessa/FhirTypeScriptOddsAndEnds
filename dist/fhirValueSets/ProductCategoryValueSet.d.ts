import { Coding } from '../fhir.js';
/**
 * Biologically Derived Product Category.
 */
export declare const ProductCategoryValueSet: {
    /**
     * biologicalAgent: Biological agent of unspecified type.
     */
    readonly BiologicalAgent: Coding;
    /**
     * cells: Collection of cells.
     */
    readonly Cells: Coding;
    /**
     * fluid: Body fluid.
     */
    readonly Fluid: Coding;
    /**
     * organ: A collection of tissues joined in a structural unit to serve a common function.
     */
    readonly Organ: Coding;
    /**
     * tissue: An ensemble of similar cells and their extracellular matrix from the same origin that together carry out a specific function.
     */
    readonly Tissue: Coding;
};
/**
 * Biologically Derived Product Category.
 */
export declare type ProductCategoryValueSetType = typeof ProductCategoryValueSet;
/**
 * Biologically Derived Product Category.
 */
export declare enum ProductCategoryValueSetEnum {
    /**
     * biologicalAgent: Biological agent of unspecified type.
     */
    BiologicalAgent = "biologicalAgent",
    /**
     * cells: Collection of cells.
     */
    Cells = "cells",
    /**
     * fluid: Body fluid.
     */
    Fluid = "fluid",
    /**
     * organ: A collection of tissues joined in a structural unit to serve a common function.
     */
    Organ = "organ",
    /**
     * tissue: An ensemble of similar cells and their extracellular matrix from the same origin that together carry out a specific function.
     */
    Tissue = "tissue"
}
//# sourceMappingURL=ProductCategoryValueSet.d.ts.map