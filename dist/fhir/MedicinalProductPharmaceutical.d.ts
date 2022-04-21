import * as fhir from '../fhir.js';
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
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue: fhir.ICodeableConcept | null;
    /**
     * A value for the time.
     */
    value: fhir.IQuantity | null;
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
     */
    _supportingInformation?: fhir.IFhirElement | undefined;
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
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.IQuantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhir.IQuantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhir.IRatio | undefined;
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
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm: fhir.ICodeableConcept | null;
    /**
     * Todo.
     */
    unitOfPresentation?: fhir.ICodeableConcept | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.IReference[] | undefined;
    /**
     * Accompanying device.
     */
    device?: fhir.IReference[] | undefined;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: fhir.IMedicinalProductPharmaceuticalCharacteristics[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: fhir.IMedicinalProductPharmaceuticalRouteOfAdministration[] | null;
};
/**
 * Characteristics e.g. a products onset of action.
 */
export declare class MedicinalProductPharmaceuticalCharacteristics extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalCharacteristics {
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
    constructor(source?: Partial<IMedicinalProductPharmaceuticalCharacteristics>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    /**
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue: fhir.CodeableConcept | null;
    /**
     * A value for the time.
     */
    value: fhir.Quantity | null;
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
     */
    _supportingInformation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A species for which this route applies.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
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
    constructor(source?: Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministration extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministration {
    /**
     * Coded expression for the route.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.Quantity | undefined;
    /**
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.Quantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhir.Quantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhir.Ratio | undefined;
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
    constructor(source?: Partial<IMedicinalProductPharmaceuticalRouteOfAdministration>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export declare class MedicinalProductPharmaceutical extends fhir.DomainResource implements IMedicinalProductPharmaceutical {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPharmaceutical";
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm: fhir.CodeableConcept | null;
    /**
     * Todo.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.Reference[] | undefined;
    /**
     * Accompanying device.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: fhir.MedicinalProductPharmaceuticalCharacteristics[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministration[] | null;
    /**
     * Default constructor for MedicinalProductPharmaceutical - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductPharmaceutical>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductPharmaceutical.d.ts.map