import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export interface INutritionOrderOralDietNutrient extends fhirInterfaces.IBackboneElement {
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhirInterfaces.IQuantity | undefined;
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export interface INutritionOrderOralDietTexture extends fhirInterfaces.IBackboneElement {
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export interface INutritionOrderOralDiet extends fhirInterfaces.IBackboneElement {
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhirInterfaces.IElement | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhirInterfaces.INutritionOrderOralDietNutrient[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhirInterfaces.ITiming[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhirInterfaces.INutritionOrderOralDietTexture[] | undefined;
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export interface INutritionOrderSupplement extends fhirInterfaces.IBackboneElement {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhirInterfaces.IElement | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    _productName?: fhirInterfaces.IElement | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhirInterfaces.ITiming[] | undefined;
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export interface INutritionOrderEnteralFormulaAdministration extends fhirInterfaces.IBackboneElement {
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhirInterfaces.ITiming | undefined;
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export interface INutritionOrderEnteralFormula extends fhirInterfaces.IBackboneElement {
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    _additiveProductName?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhirInterfaces.INutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    _administrationInstruction?: fhirInterfaces.IElement | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    _baseFormulaProductName?: fhirInterfaces.IElement | undefined;
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhirInterfaces.IQuantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export interface INutritionOrder extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "NutritionOrder";
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhirInterfaces.IReference[] | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime?: string | undefined;
    _dateTime?: fhirInterfaces.IElement | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhirInterfaces.INutritionOrderEnteralFormula | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhirInterfaces.IElement[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirInterfaces.IElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirInterfaces.IElement[] | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent?: NutritionOrderIntentEnum | undefined;
    _intent?: fhirInterfaces.IElement | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhirInterfaces.INutritionOrderOralDiet | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhirInterfaces.IReference | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: NutritionOrderStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhirInterfaces.INutritionOrderSupplement[] | undefined;
}
/**
 * Code Values for the NutritionOrder.intent field
 */
export declare enum NutritionOrderIntentEnum {
    PROPOSAL = "proposal",
    PLAN = "plan",
    DIRECTIVE = "directive",
    ORDER = "order",
    ORIGINAL_ORDER = "original-order",
    REFLEX_ORDER = "reflex-order",
    FILLER_ORDER = "filler-order",
    INSTANCE_ORDER = "instance-order",
    OPTION = "option"
}
/**
 * Code Values for the NutritionOrder.status field
 */
export declare enum NutritionOrderStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    REVOKED = "revoked",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=INutritionOrder.d.ts.map