/**
 * splitit-web-api-public-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountUpdaterPendingCards, AddressData2, BinData, CardBrand, CardStateLogs, CardType, Countries, CountrySubdivisions, DEKData, FraudDetectionLogs, InstallmentPlanAuditLogs, InstallmentPlans, Keks, PisMembers } from './';
/**
 *
 * @export
 * @interface CardsAllOf
 */
export interface CardsAllOf {
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    kekId: number;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    binBinNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    binIssuingCountryIsoNumber?: string;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    binId: number;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    expirationMonth: number;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    expirationYear: number;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    addressDataAddressLine?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    addressDataZip?: string;
    /**
     *
     * @type {boolean}
     * @memberof CardsAllOf
     */
    isDeleted: boolean;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    version: number;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    pisMemberUniqueId?: string;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    pisMemberId?: number;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    addressDataAddressLine2?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    addressDataCity?: string;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    addressDataCountryId?: number;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    addressDataStateId?: number;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    addressDataLegacyFullAddressLine?: string;
    /**
     *
     * @type {boolean}
     * @memberof CardsAllOf
     */
    binIsPrepaid?: boolean;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    token?: string;
    /**
     *
     * @type {Keks}
     * @memberof CardsAllOf
     */
    kek?: Keks;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    cardClass?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    productId?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    issuerBankName?: string;
    /**
     *
     * @type {number}
     * @memberof CardsAllOf
     */
    dekDataId?: number;
    /**
     *
     * @type {DEKData}
     * @memberof CardsAllOf
     */
    dekData?: DEKData;
    /**
     *
     * @type {PisMembers}
     * @memberof CardsAllOf
     */
    pisMember?: PisMembers;
    /**
     *
     * @type {Array<AccountUpdaterPendingCards>}
     * @memberof CardsAllOf
     */
    accountUpdaterPendingCards?: Array<AccountUpdaterPendingCards>;
    /**
     *
     * @type {Array<CardStateLogs>}
     * @memberof CardsAllOf
     */
    cardStateLogs?: Array<CardStateLogs>;
    /**
     *
     * @type {Array<FraudDetectionLogs>}
     * @memberof CardsAllOf
     */
    fraudDetectionLogs?: Array<FraudDetectionLogs>;
    /**
     *
     * @type {Array<InstallmentPlanAuditLogs>}
     * @memberof CardsAllOf
     */
    installmentPlanAuditLogs?: Array<InstallmentPlanAuditLogs>;
    /**
     *
     * @type {Array<InstallmentPlans>}
     * @memberof CardsAllOf
     */
    installmentPlans?: Array<InstallmentPlans>;
    /**
     *
     * @type {AddressData2}
     * @memberof CardsAllOf
     */
    addressData?: AddressData2;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    encryptedNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    dek?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    maskedNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    cardHolderName?: string;
    /**
     *
     * @type {CardBrand}
     * @memberof CardsAllOf
     */
    binCardBrand: CardBrand;
    /**
     *
     * @type {CardType}
     * @memberof CardsAllOf
     */
    binCardType: CardType;
    /**
     *
     * @type {string}
     * @memberof CardsAllOf
     */
    cvv?: string;
    /**
     *
     * @type {BinData}
     * @memberof CardsAllOf
     */
    bin?: BinData;
    /**
     *
     * @type {Countries}
     * @memberof CardsAllOf
     */
    country?: Countries;
    /**
     *
     * @type {CountrySubdivisions}
     * @memberof CardsAllOf
     */
    state?: CountrySubdivisions;
}
export declare function CardsAllOfFromJSON(json: any): CardsAllOf;
export declare function CardsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardsAllOf;
export declare function CardsAllOfToJSON(value?: CardsAllOf | null): any;
