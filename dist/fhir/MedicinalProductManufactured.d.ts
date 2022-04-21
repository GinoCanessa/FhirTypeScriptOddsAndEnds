import * as fhir from '../fhir.js';
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export declare type IMedicinalProductManufactured = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductManufactured";
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.ICodeableConcept | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.ICodeableConcept | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhir.IQuantity | null;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.IReference[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.IProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.ICodeableConcept[] | undefined;
};
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export declare class MedicinalProductManufactured extends fhir.DomainResource implements IMedicinalProductManufactured {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductManufactured";
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.CodeableConcept | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhir.Quantity | null;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.Reference[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for MedicinalProductManufactured - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductManufactured>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductManufactured.d.ts.map