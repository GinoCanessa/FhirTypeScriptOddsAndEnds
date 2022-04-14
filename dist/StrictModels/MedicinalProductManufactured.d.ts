import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export declare class MedicinalProductManufactured extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductManufactured {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductManufactured";
    /**
     * Ingredient.
     */
    ingredient?: fhirModels.Reference[] | undefined;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhirModels.CodeableConcept;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhirModels.Reference[] | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhirModels.ProdCharacteristic | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhirModels.Quantity;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductManufactured from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductManufactured);
}
//# sourceMappingURL=MedicinalProductManufactured.d.ts.map