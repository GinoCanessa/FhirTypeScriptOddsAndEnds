import { Coding } from '../fhir.js';
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare const ConsentDataMeaningValueSet: {
    /**
     * authoredby: The consent applies to instances of resources that are authored by.
     */
    readonly AuthoredBy: Coding;
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
     */
    readonly Dependents: Coding;
    /**
     * instance: The consent applies directly to the instance of the resource.
     */
    readonly Instance: Coding;
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to.
     */
    readonly Related: Coding;
};
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare type ConsentDataMeaningValueSetType = typeof ConsentDataMeaningValueSet;
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare enum ConsentDataMeaningValueSetEnum {
    /**
     * authoredby: The consent applies to instances of resources that are authored by.
     */
    AuthoredBy = "authoredby",
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
     */
    Dependents = "dependents",
    /**
     * instance: The consent applies directly to the instance of the resource.
     */
    Instance = "instance",
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to.
     */
    Related = "related"
}
//# sourceMappingURL=ConsentDataMeaningValueSet.d.ts.map