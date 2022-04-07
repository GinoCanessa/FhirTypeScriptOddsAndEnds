import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Characteristics e.g. a products onset of action.
 */
export declare class MedicinalProductPharmaceuticalCharacteristics extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics {
    /**
     * A coded characteristic.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalCharacteristics from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics>);
    /**
     * Factory function to create a MedicinalProductPharmaceuticalCharacteristics from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics): MedicinalProductPharmaceuticalCharacteristics;
    /**
     * Check if the current MedicinalProductPharmaceuticalCharacteristics contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: string | undefined;
    _supportingInformation?: fhirModels.Element | undefined;
    /**
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue?: fhirModels.CodeableConcept | undefined;
    /**
     * A value for the time.
     */
    value?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>);
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A species for which this route applies.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    /**
     * Coded expression for the species.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[] | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>);
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministration extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration {
    /**
     * Coded expression for the route.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
     */
    firstDose?: fhirModels.Quantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhirModels.Quantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhirModels.Ratio | undefined;
    /**
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhirModels.Quantity | undefined;
    /**
     * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxTreatmentPeriod?: fhirModels.Duration | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies?: fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[] | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration>);
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministration from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration): MedicinalProductPharmaceuticalRouteOfAdministration;
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministration contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export declare class MedicinalProductPharmaceutical extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductPharmaceutical {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductPharmaceutical";
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm?: fhirModels.CodeableConcept | undefined;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: fhirModels.MedicinalProductPharmaceuticalCharacteristics[] | undefined;
    /**
     * Accompanying device.
     */
    device?: fhirModels.Reference[] | undefined;
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhirModels.Reference[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration?: fhirModels.MedicinalProductPharmaceuticalRouteOfAdministration[] | undefined;
    /**
     * Todo.
     */
    unitOfPresentation?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceutical from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMedicinalProductPharmaceutical>);
    /**
     * Factory function to create a MedicinalProductPharmaceutical from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMedicinalProductPharmaceutical): MedicinalProductPharmaceutical;
    /**
     * Check if the current MedicinalProductPharmaceutical contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=MedicinalProductPharmaceutical.d.ts.map