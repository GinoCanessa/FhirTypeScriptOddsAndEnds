import { Coding } from '../fhir';
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare const ConsentDataMeaningValueSet: {
    /**
     * The consent applies to instances of resources that are authored by.
     */
    consent_data_meaning_AuthoredBy: Coding;
    /**
     * The consent applies directly to the instance of the resource and instances that refer to it.
     */
    consent_data_meaning_Dependents: Coding;
    /**
     * The consent applies directly to the instance of the resource.
     */
    consent_data_meaning_Instance: Coding;
    /**
     * The consent applies directly to the instance of the resource and instances it refers to.
     */
    consent_data_meaning_Related: Coding;
};
//# sourceMappingURL=ConsentDataMeaningValueSet.d.ts.map