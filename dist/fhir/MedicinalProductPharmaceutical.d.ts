import * as fhir from '../fhir';
/**
 * Characteristics e.g. a products onset of action.
 */
export declare type IMedicinalProductPharmaceuticalCharacteristics = fhir.IBackboneElement & {
    /**
     * A coded characteristic.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.ICodeableConcept | undefined;
};
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export declare type IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = fhir.IBackboneElement & {
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: string | undefined;
    _supportingInformation?: fhir.IFhirElement | undefined;
    /**
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue: fhir.ICodeableConcept | null;
    /**
     * A value for the time.
     */
    value: fhir.IQuantity | null;
};
/**
 * A species for which this route applies.
 */
export declare type IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = fhir.IBackboneElement & {
    /**
     * Coded expression for the species.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] | undefined;
};
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export declare type IMedicinalProductPharmaceuticalRouteOfAdministration = fhir.IBackboneElement & {
    /**
     * Coded expression for the route.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.IQuantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhir.IQuantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhir.IRatio | undefined;
    /**
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.IQuantity | undefined;
    /**
     * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxTreatmentPeriod?: fhir.IDuration | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies?: fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[] | undefined;
};
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export declare type IMedicinalProductPharmaceutical = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPharmaceutical";
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm: fhir.ICodeableConcept | null;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: fhir.IMedicinalProductPharmaceuticalCharacteristics[] | undefined;
    /**
     * Accompanying device.
     */
    device?: fhir.IReference[] | undefined;
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.IReference[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: fhir.IMedicinalProductPharmaceuticalRouteOfAdministration[] | null;
    /**
     * Todo.
     */
    unitOfPresentation?: fhir.ICodeableConcept | undefined;
};
/**
 * Characteristics e.g. a products onset of action.
 */
export declare class MedicinalProductPharmaceuticalCharacteristics extends fhir.BackboneElement implements fhir.IMedicinalProductPharmaceuticalCharacteristics {
    /**
     * A coded characteristic.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalCharacteristics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPharmaceuticalCharacteristics>);
    /**
     * Check if the current MedicinalProductPharmaceuticalCharacteristics contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPharmaceuticalCharacteristics from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductPharmaceuticalCharacteristics): MedicinalProductPharmaceuticalCharacteristics;
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement implements fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: string | undefined;
    _supportingInformation?: fhir.FhirElement | undefined;
    /**
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue: fhir.CodeableConcept | null;
    /**
     * A value for the time.
     */
    value: fhir.Quantity | null;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>);
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
}
/**
 * A species for which this route applies.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhir.BackboneElement implements fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>);
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministration extends fhir.BackboneElement implements fhir.IMedicinalProductPharmaceuticalRouteOfAdministration {
    /**
     * Coded expression for the route.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.Quantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhir.Quantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhir.Ratio | undefined;
    /**
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.Quantity | undefined;
    /**
     * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxTreatmentPeriod?: fhir.Duration | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[] | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPharmaceuticalRouteOfAdministration>);
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministration contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministration from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductPharmaceuticalRouteOfAdministration): MedicinalProductPharmaceuticalRouteOfAdministration;
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export declare class MedicinalProductPharmaceutical extends fhir.DomainResource implements fhir.IMedicinalProductPharmaceutical {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPharmaceutical";
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm: fhir.CodeableConcept | null;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: fhir.MedicinalProductPharmaceuticalCharacteristics[] | undefined;
    /**
     * Accompanying device.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.Reference[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministration[] | null;
    /**
     * Todo.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceutical - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductPharmaceutical>);
    /**
     * Check if the current MedicinalProductPharmaceutical contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductPharmaceutical from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductPharmaceutical): MedicinalProductPharmaceutical;
}
//# sourceMappingURL=MedicinalProductPharmaceutical.d.ts.map