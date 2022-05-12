import * as fhir from '../fhirJson.js';
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export interface NutritionOrderOralDietNutrient extends fhir.BackboneElement {
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.Quantity | undefined;
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export interface NutritionOrderOralDietTexture extends fhir.BackboneElement {
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhir.CodeableConcept | undefined;
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export interface NutritionOrderOralDiet extends fhir.BackboneElement {
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.Timing[] | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhir.NutritionOrderOralDietNutrient[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhir.NutritionOrderOralDietTexture[] | undefined;
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhir.CodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.oralDiet.instruction
     */
    _instruction?: fhir.FhirElement;
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export interface NutritionOrderSupplement extends fhir.BackboneElement {
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.productName
     */
    _productName?: fhir.FhirElement;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.Timing[] | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.instruction
     */
    _instruction?: fhir.FhirElement;
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export interface NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement {
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.Timing | undefined;
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhir.Quantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhir.Ratio | undefined;
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export interface NutritionOrderEnteralFormula extends fhir.BackboneElement {
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.baseFormulaProductName
     */
    _baseFormulaProductName?: fhir.FhirElement;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.additiveProductName
     */
    _additiveProductName?: fhir.FhirElement;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.Quantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhir.NutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.Quantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.administrationInstruction
     */
    _administrationInstruction?: fhir.FhirElement;
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export interface NutritionOrder extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder";
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElement | null)[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElement | null)[];
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiates
     */
    _instantiates?: (fhir.FhirElement | null)[];
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'completed' | 'draft' | 'entered-in-error' | 'on-hold' | 'revoked' | 'unknown' | null;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: 'directive' | 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.Reference | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: string | null;
    /**
     * Extended properties for primitive element: NutritionOrder.dateTime
     */
    _dateTime?: fhir.FhirElement;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhir.Reference[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhir.CodeableConcept[] | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhir.CodeableConcept[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.NutritionOrderOralDiet | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhir.NutritionOrderSupplement[] | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.NutritionOrderEnteralFormula | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhir.Annotation[] | undefined;
}
//# sourceMappingURL=NutritionOrder.d.ts.map