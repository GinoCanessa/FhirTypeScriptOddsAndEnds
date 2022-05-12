// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/map-source-list-mode|4.0.1
/**
 * If field is a list, how to manage the source.
 */
export var MapSourceListModeValueSetEnum;
(function (MapSourceListModeValueSetEnum) {
    /**
     * first: Only process this rule for the first in the list.
     */
    MapSourceListModeValueSetEnum["First"] = "first";
    /**
     * last: Only process this rule for the last in the list.
     */
    MapSourceListModeValueSetEnum["Last"] = "last";
    /**
     * not_first: Process this rule for all but the first.
     */
    MapSourceListModeValueSetEnum["AllButTheFirst"] = "not_first";
    /**
     * not_last: Process this rule for all but the last.
     */
    MapSourceListModeValueSetEnum["AllButTheLast"] = "not_last";
    /**
     * only_one: Only process this rule is there is only item.
     */
    MapSourceListModeValueSetEnum["EnforceOnlyOne"] = "only_one";
})(MapSourceListModeValueSetEnum || (MapSourceListModeValueSetEnum = {}));
//# sourceMappingURL=MapSourceListModeValueSetEnum.js.map