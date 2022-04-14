import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A populatioof people with some set of grouping criteria.
 */
export interface IPopulation extends fhirInterfaces.IBackboneElement {
    /**
     * The age of the specific population.
     */
    ageRange?: fhirInterfaces.IRange | undefined;
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The gender of the specific population.
     */
    gender?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Race of the specific population.
     */
    race?: fhirInterfaces.ICodeableConcept | undefined;
}
//# sourceMappingURL=IPopulation.d.ts.map