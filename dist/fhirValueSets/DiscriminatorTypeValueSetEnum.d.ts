/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export declare enum DiscriminatorTypeValueSetEnum {
    /**
     * exists: The slices are differentiated by the presence or absence of the nominated element.
     */
    Exists = "exists",
    /**
     * pattern: The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].
     */
    Pattern = "pattern",
    /**
     * profile: The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.
     */
    Profile = "profile",
    /**
     * type: The slices are differentiated by type of the nominated element.
     */
    Type = "type",
    /**
     * value: The slices have different values in the nominated element.
     */
    Value = "value"
}
//# sourceMappingURL=DiscriminatorTypeValueSetEnum.d.ts.map