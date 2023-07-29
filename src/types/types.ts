export interface SamsungResult {
    response: Response;
}

export interface Response {
    statusCode: number;
    statusMessage: string;
    siteCode: string;
    resultData: ResultData;
}

export interface ResultData {
    productList: ProductList[];
}

interface Award {
    awardTitle: string;
    awardDesc: string;
    awardLink: string;
    awardImg: string;
}

export interface ProductList {
    familyRecord: string;
    familyId: string;
    modelCount: string;
    fmyMarketingName: string;
    fmyEngName: string;
    categorySubTypeCode: string;
    categorySubTypeEngName: string;
    simplePdYN: string;
    oldProductYN: string;
    productGroupId: string;
    optionPriceUse: null;
    iaCtaDisplay: string;
    wtbOnlineDispFuncUseYN: null;
    wtbDispFuncUseYN: null;
    filterParamText: null;
    thirdPASeller: null;
    isRecommended: null;
    chipOptions: ChipOption[];
    awardList: Award[];
    quickLooks: any[];
    localBenefitList: LocalBenefitList[];
    modelList: ModelList[];
}

export type ChipType = "COLOR" | "MOBILE MEMORY"

export interface ChipOption {
    fmyChipType: ChipType;
    optionList: OptionList[];
}

export interface OptionList {
    optionCode: string;
    optionName: string;
    optionLocalName: string;
    multiColorYN: string;
    multiColorList: null;
}

export interface LocalBenefitList {
    localBenefitText: string;
    localBenefitImgAltText: string;
    localBenefitIconType: string;
}

export interface ModelList {
    modelCode: string;
    shopSKU: string;
    modelName: string;
    displayName: string;
    marketingpdpYN: string;
    thumbUrl: string;
    thumbUrlAlt: string;
    galleryImage: string[];
    galleryImageAlt: string[];
    galleryImageLarge: string[];
    pdpUrl: string;
    originPdpUrl: string;
    configuratorUrl: string;
    ratings: string;
    reviewCount: string;
    reviewUrl: string;
    energyLabelGrade: null;
    newEnergyLabel: null;
    energyLabelClass1: null;
    energyLabelClass2: null;
    energyFileUrl: null;
    ficheFileUrl: null;
    selected: string;
    fmyChipList: FmyChipList[];
    ctaType: string;
    offerCtaFlag: null;
    tariffYN: string;
    wtbUseFlag: string;
    repairabilityIndex: null;
    repairabilityIndexPdfUrl: null;
    stockStatusText: null;
    financeInfoAmount: null;
    financeInfoValue: null;
    tradeIn: null;
    tradeInDesc: null;
    tradeInFormattedDesc: null;
    premiumCare: null;
    premiumCareDesc: null;
    premiumCareFormattedDesc: null;
    financing: null;
    financingDesc: null;
    financingFormattedDesc: null;
    upgrade: null;
    upgradeDesc: null;
    upgradeFormattedDesc: null;
    storePromotions: null;
    usp: string[];
    leasingInfo: null;
    price: null;
    priceDisplay: null;
    promotionPrice: null;
    promotionPriceDisplay: null;
    tradeInPriceText: null;
    listPrice: null;
    listPriceDisplay: null;
    saveText: null;
    pricePeriodInfo: null;
    buyBackDesc: null;
    tradeInDiscount: null;
    tradeInPrice: null;
    msrpPrice: null;
    vatEligible: null;
    vatFreePrice: null;
    vatFreePriceDisplay: null;
    monthlyPriceInfo: null;
    topFlags: null;
    merchandisingText: null;
    keySummary: null;
    emiCalculatorUrl: null;
    pviTypeName: string;
    pviSubtypeName: string;
    deliveryYN: string;
    buyingConfigLinkType: null;
    buyingConfigLink: null;
    bespokeCtaUse: string;
    bespokeCtaLink: null;
    ctaLocalText: string;
    ctaEngText: string;
    configuratorUseYn: string;
    pf360IconUse: string;
    uspText: null;
    lowestWasPrice: null;
    lowestWasPriceDisplay: null;
    packageYN: string;
    pkgChildModelList: null;
    keySpec: null;
}

export interface FmyChipList {
    fmyChipType: string;
    fmyChipCode: string;
    fmyChipName: string;
    fmyChipLocalName: string;
    multiColorYN: string;
    multiColorList: null;
}
