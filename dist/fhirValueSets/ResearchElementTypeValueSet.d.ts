import { Coding } from '../fhir.js';
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare const ResearchElementTypeValueSet: {
    /**
     * exposure: The element defines an exposure within the population that is being researched.
     */
    readonly Exposure: Coding;
    /**
     * outcome: The element defines an outcome within the population that is being researched.
     */
    readonly Outcome: Coding;
    /**
     * population: The element defines the population that forms the basis for research.
     */
    readonly Population: Coding;
};
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare type ResearchElementTypeValueSetType = typeof ResearchElementTypeValueSet;
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export declare enum ResearchElementTypeValueSetEnum {
    /**
     * exposure: The element defines an exposure within the population that is being researched.
     */
    Exposure = "exposure",
    /**
     * outcome: The element defines an outcome within the population that is being researched.
     */
    Outcome = "outcome",
    /**
     * population: The element defines the population that forms the basis for research.
     */
    Population = "population"
}
//# sourceMappingURL=ResearchElementTypeValueSet.d.ts.map