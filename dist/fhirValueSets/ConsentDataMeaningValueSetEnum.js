// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/consent-data-meaning|4.0.1
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export var ConsentDataMeaningValueSetEnum;
(function (ConsentDataMeaningValueSetEnum) {
    /**
     * authoredby: The consent applies to instances of resources that are authored by.
     */
    ConsentDataMeaningValueSetEnum["AuthoredBy"] = "authoredby";
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
     */
    ConsentDataMeaningValueSetEnum["Dependents"] = "dependents";
    /**
     * instance: The consent applies directly to the instance of the resource.
     */
    ConsentDataMeaningValueSetEnum["Instance"] = "instance";
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to.
     */
    ConsentDataMeaningValueSetEnum["Related"] = "related";
})(ConsentDataMeaningValueSetEnum || (ConsentDataMeaningValueSetEnum = {}));
//# sourceMappingURL=ConsentDataMeaningValueSetEnum.js.map