import * as fhirInterfaces from '../strictinterfaces';
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export interface IMedicinalProductManufactured extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductManufactured";
    /**
     * Ingredient.
     */
    ingredient?: fhirInterfaces.IReference[] | undefined;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhirInterfaces.ICodeableConcept;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhirInterfaces.IReference[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhirInterfaces.IProdCharacteristic | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhirInterfaces.IQuantity;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhirInterfaces.ICodeableConcept | undefined;
}
//# sourceMappingURL=IMedicinalProductManufactured.d.ts.map