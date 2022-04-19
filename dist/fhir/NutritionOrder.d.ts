import * as fhir from '../fhir';
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export declare type INutritionOrderOralDietNutrient = fhir.IBackboneElement & {
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.IQuantity | undefined;
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.ICodeableConcept | undefined;
};
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export declare type INutritionOrderOralDietTexture = fhir.IBackboneElement & {
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhir.ICodeableConcept | undefined;
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.ICodeableConcept | undefined;
};
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export declare type INutritionOrderOralDiet = fhir.IBackboneElement & {
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhir.IFhirElement | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhir.INutritionOrderOralDietNutrient[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.ITiming[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhir.INutritionOrderOralDietTexture[] | undefined;
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export declare type INutritionOrderSupplement = fhir.IBackboneElement & {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhir.IFhirElement | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    _productName?: fhir.IFhirElement | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.ITiming[] | undefined;
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export declare type INutritionOrderEnteralFormulaAdministration = fhir.IBackboneElement & {
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhir.IQuantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhir.IRatio | undefined;
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.ITiming | undefined;
};
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export declare type INutritionOrderEnteralFormula = fhir.IBackboneElement & {
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    _additiveProductName?: fhir.IFhirElement | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.ICodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhir.INutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    _administrationInstruction?: fhir.IFhirElement | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    _baseFormulaProductName?: fhir.IFhirElement | undefined;
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.ICodeableConcept | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.IQuantity | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.IQuantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.ICodeableConcept | undefined;
};
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export declare type INutritionOrder = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder";
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhir.IReference[] | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: string | null;
    _dateTime?: fhir.IFhirElement | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.INutritionOrderEnteralFormula | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhir.IFhirElement[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: NutritionOrderIntentEnum | null;
    _intent?: fhir.IFhirElement | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.INutritionOrderOralDiet | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.IReference | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.IReference | null;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: NutritionOrderStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhir.INutritionOrderSupplement[] | undefined;
};
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export declare class NutritionOrderOralDietNutrient extends fhir.BackboneElement implements fhir.INutritionOrderOralDietNutrient {
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietNutrient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrderOralDietNutrient>);
    /**
     * Check if the current NutritionOrderOralDietNutrient contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrderOralDietNutrient from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrderOralDietNutrient): NutritionOrderOralDietNutrient;
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export declare class NutritionOrderOralDietTexture extends fhir.BackboneElement implements fhir.INutritionOrderOralDietTexture {
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhir.CodeableConcept | undefined;
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrderOralDietTexture>);
    /**
     * Check if the current NutritionOrderOralDietTexture contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrderOralDietTexture from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrderOralDietTexture): NutritionOrderOralDietTexture;
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export declare class NutritionOrderOralDiet extends fhir.BackboneElement implements fhir.INutritionOrderOralDiet {
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhir.CodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhir.FhirElement | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhir.NutritionOrderOralDietNutrient[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.Timing[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhir.NutritionOrderOralDietTexture[] | undefined;
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrderOralDiet>);
    /**
     * Check if the current NutritionOrderOralDiet contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrderOralDiet from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrderOralDiet): NutritionOrderOralDiet;
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export declare class NutritionOrderSupplement extends fhir.BackboneElement implements fhir.INutritionOrderSupplement {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    _instruction?: fhir.FhirElement | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    _productName?: fhir.FhirElement | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.Timing[] | undefined;
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrderSupplement>);
    /**
     * Check if the current NutritionOrderSupplement contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrderSupplement from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrderSupplement): NutritionOrderSupplement;
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export declare class NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement implements fhir.INutritionOrderEnteralFormulaAdministration {
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
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.Timing | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormulaAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrderEnteralFormulaAdministration>);
    /**
     * Check if the current NutritionOrderEnteralFormulaAdministration contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrderEnteralFormulaAdministration from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrderEnteralFormulaAdministration): NutritionOrderEnteralFormulaAdministration;
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export declare class NutritionOrderEnteralFormula extends fhir.BackboneElement implements fhir.INutritionOrderEnteralFormula {
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    _additiveProductName?: fhir.FhirElement | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhir.NutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    _administrationInstruction?: fhir.FhirElement | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    _baseFormulaProductName?: fhir.FhirElement | undefined;
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.CodeableConcept | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.Quantity | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.Quantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrderEnteralFormula>);
    /**
     * Check if the current NutritionOrderEnteralFormula contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrderEnteralFormula from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrderEnteralFormula): NutritionOrderEnteralFormula;
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export declare class NutritionOrder extends fhir.DomainResource implements fhir.INutritionOrder {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder";
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhir.Reference[] | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: string | null;
    _dateTime?: fhir.FhirElement | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.NutritionOrderEnteralFormula | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhir.CodeableConcept[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhir.FhirElement[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhir.FhirElement[] | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: NutritionOrderIntentEnum | null;
    _intent?: fhir.FhirElement | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.NutritionOrderOralDiet | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.Reference | null;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: NutritionOrderStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhir.NutritionOrderSupplement[] | undefined;
    /**
     * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.INutritionOrder>);
    /**
     * Check if the current NutritionOrder contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a NutritionOrder from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.INutritionOrder): NutritionOrder;
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