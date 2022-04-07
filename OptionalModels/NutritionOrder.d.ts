import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export declare class NutritionOrderOralDietNutrient extends fhirModels.BackboneElement implements fhirInterfaces.INutritionOrderOralDietNutrient {
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhirModels.Quantity | undefined;
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietNutrient from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrderOralDietNutrient>);
    /**
     * Factory function to create a NutritionOrderOralDietNutrient from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrderOralDietNutrient): NutritionOrderOralDietNutrient;
    /**
     * Check if the current NutritionOrderOralDietNutrient contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export declare class NutritionOrderOralDietTexture extends fhirModels.BackboneElement implements fhirInterfaces.INutritionOrderOralDietTexture {
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhirModels.CodeableConcept | undefined;
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietTexture from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrderOralDietTexture>);
    /**
     * Factory function to create a NutritionOrderOralDietTexture from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrderOralDietTexture): NutritionOrderOralDietTexture;
    /**
     * Check if the current NutritionOrderOralDietTexture contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export declare class NutritionOrderOralDiet extends fhirModels.BackboneElement implements fhirInterfaces.INutritionOrderOralDiet {
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhirModels.Element | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhirModels.NutritionOrderOralDietNutrient[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhirModels.Timing[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhirModels.NutritionOrderOralDietTexture[] | undefined;
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for NutritionOrderOralDiet from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrderOralDiet>);
    /**
     * Factory function to create a NutritionOrderOralDiet from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrderOralDiet): NutritionOrderOralDiet;
    /**
     * Check if the current NutritionOrderOralDiet contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export declare class NutritionOrderSupplement extends fhirModels.BackboneElement implements fhirInterfaces.INutritionOrderSupplement {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhirModels.Element | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    _productName?: fhirModels.Element | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhirModels.Timing[] | undefined;
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderSupplement from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrderSupplement>);
    /**
     * Factory function to create a NutritionOrderSupplement from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrderSupplement): NutritionOrderSupplement;
    /**
     * Check if the current NutritionOrderSupplement contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export declare class NutritionOrderEnteralFormulaAdministration extends fhirModels.BackboneElement implements fhirInterfaces.INutritionOrderEnteralFormulaAdministration {
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhirModels.Quantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhirModels.Ratio | undefined;
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhirModels.Timing | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormulaAdministration from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrderEnteralFormulaAdministration>);
    /**
     * Factory function to create a NutritionOrderEnteralFormulaAdministration from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrderEnteralFormulaAdministration): NutritionOrderEnteralFormulaAdministration;
    /**
     * Check if the current NutritionOrderEnteralFormulaAdministration contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export declare class NutritionOrderEnteralFormula extends fhirModels.BackboneElement implements fhirInterfaces.INutritionOrderEnteralFormula {
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    _additiveProductName?: fhirModels.Element | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhirModels.CodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhirModels.NutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    _administrationInstruction?: fhirModels.Element | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    _baseFormulaProductName?: fhirModels.Element | undefined;
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhirModels.CodeableConcept | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhirModels.Quantity | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhirModels.Quantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormula from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrderEnteralFormula>);
    /**
     * Factory function to create a NutritionOrderEnteralFormula from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrderEnteralFormula): NutritionOrderEnteralFormula;
    /**
     * Check if the current NutritionOrderEnteralFormula contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export declare class NutritionOrder extends fhirModels.DomainResource implements fhirInterfaces.INutritionOrder {
    /**
     * Resource Type Name
     */
    readonly resourceType = "NutritionOrder";
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhirModels.Reference[] | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime?: string | undefined;
    _dateTime?: fhirModels.Element | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhirModels.NutritionOrderEnteralFormula | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhirModels.Element[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirModels.Element[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirModels.Element[] | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent?: NutritionOrderIntentEnum | undefined;
    _intent?: fhirModels.Element | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhirModels.NutritionOrderOralDiet | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhirModels.Reference | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: NutritionOrderStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhirModels.NutritionOrderSupplement[] | undefined;
    /**
     * Default constructor for NutritionOrder from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.INutritionOrder>);
    /**
     * Factory function to create a NutritionOrder from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.INutritionOrder): NutritionOrder;
    /**
     * Check if the current NutritionOrder contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=NutritionOrder.d.ts.map