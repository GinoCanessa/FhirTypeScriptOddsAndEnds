import * as fhir from '../fhir';
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export declare type IMedicinalProductManufactured = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductManufactured";
    /**
     * Ingredient.
     */
    ingredient?: fhir.IReference[] | undefined;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.ICodeableConcept | null;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhir.IReference[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.ICodeableConcept[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.IProdCharacteristic | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhir.IQuantity | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.ICodeableConcept | undefined;
};
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export declare class MedicinalProductManufactured extends fhir.DomainResource implements fhir.IMedicinalProductManufactured {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductManufactured";
    /**
     * Ingredient.
     */
    ingredient?: fhir.Reference[] | undefined;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.CodeableConcept | null;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConcept[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhir.Quantity | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductManufactured - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductManufactured>);
    /**
     * Check if the current MedicinalProductManufactured contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductManufactured from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedicinalProductManufactured): MedicinalProductManufactured;
}
//# sourceMappingURL=MedicinalProductManufactured.d.ts.map