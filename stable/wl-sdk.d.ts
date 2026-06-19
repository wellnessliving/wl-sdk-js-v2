export interface WlClientOptions {
    /** JWT Bearer token for authentication. */
    token?: string;
    /** API server base URL. Default: 'https://staging.wellnessliving.com' (US). */
    baseUrl?: string;
    /** Request timeout in milliseconds. Default: 30000. */
    timeout?: number;
}
export interface WlApiErrorDetail {
    /** HTML-escaped error message. */
    html_message: string;
    /** Error code, or null if not applicable. */
    id: number | null;
    /** Field name associated with this error, if any. */
    s_field: string;
}
export declare class WlApiError extends Error {
    readonly status: number;
    readonly errors: WlApiErrorDetail[];
    constructor(status: number, body: unknown);
}
export interface ThothExplorerSearchClassSessionClassSessionSearchParams {
    /** List of business keys to search by. */
    a_business: Array<string>;
    /** List of experience types to search by. Each value is one of [ClassSessionExperienceTypeEnum](#/co... */
    a_experience_type: Array<number>;
    /** List of home tour activity types to search by. Each value is from [RsHomeTourSid](#/components/sc... */
    a_home_tour: Array<number>;
    /** List of location keys to search by. */
    a_location: Array<string>;
    /** List of location ratings to search by. Values are integers from 1 to 5, or `null`/`0` for unrated... */
    a_location_rating: Array<number> | Array<string>;
    /** List of staff user keys to search by. Each value is a user key (uid) of a staff member. */
    a_staff_uid: Array<string>;
    /** Start date of the session search date range in MySQL format (`Y-m-d`). Required. */
    dl_begin?: string | null;
    /** End date of the session search date range in MySQL format (`Y-m-d`). Required. */
    dl_end?: string | null;
    /** Latitude coordinate for search. Required. */
    f_latitude?: number | null;
    /** Longitude coordinate for search. Required. */
    f_longitude?: number | null;
    /** Search radius in kilometers. Required. */
    f_radius?: number | null;
    /** Maximum price to search by (inclusive). Decimal string in dollars (e.g. `&quot;100.00&quot;`). */
    m_price_max?: string | null;
    /** Minimum price to search by (inclusive). Decimal string in dollars (e.g. `&quot;0.00&quot;`). */
    m_price_min?: string | null;
}
export interface ThothExplorerSearchClassSessionClassSessionSearchResponse {
    a_class_session: Array<{
        dtu_book_begin: string | null;
        dtu_book_end: string | null;
        dtu_session: string;
        k_class: string;
        k_class_period: string;
        k_class_period_session: string;
    }>;
}
export type ThothReportCoreGeneratorQueryParams = Record<string, unknown>;
export interface ThothReportCoreGeneratorQueryResponse {
    /** A list of dynamic fields in this report. */
    a_dynamic: Array<Array<unknown>> | Array<{
        a_cell: Array<Record<string, unknown>>;
        a_customization_element: Array<Array<unknown>>;
        a_type: Array<unknown>;
        is_dynamic: boolean;
        is_export?: boolean | null;
        is_hide_by_default: boolean;
        is_hide_if_empty: boolean;
        is_null: boolean;
        is_order?: boolean | null;
        is_show: boolean;
        is_store: boolean;
        s_cast?: string | null;
        s_class?: string | Record<string, unknown> | null;
        s_class_css: string;
        s_format?: string | null;
        s_name: string;
        s_sort: string;
        s_type: string;
        text_title?: string | null;
        text_title_export?: string | null;
        text_title_info?: string | null;
    }>;
    /** A list of fields in this report. */
    a_field: Array<string>;
    /** Report data. */
    a_row: Array<Array<string>>;
    /** A list of stale rows. */
    a_stale: Array<number>;
    /** Warning list of the report. */
    a_warning: Array<string>;
    /** Date and time when this report has completed generation. */
    dtu_complete: string;
    /** Date and time when this report was put on generation queue. */
    dtu_queue: string;
    /** Date and time when generation of this report has started. */
    dtu_start: string;
    /** A CAS (compare-and-swap) number that allows to track changes in the report storage. */
    i_cas_change: number;
    /** Lists statuses of reports from point of view of its generation. */
    id_report_status: number;
    /** Key of this report. */
    s_report: string;
    /** Text of an error message that occurred during generation of the report. */
    text_error: string;
}
export interface ThothWlPayAccountAccountParams {
    /** If `true`, information for the account's owner is returned. Clients can be configured to pay for ... */
    is_owner: boolean;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface ThothWlPayAccountAccountResponse {
    a_account: Array<{
        id_currency: number;
        k_currency: string;
        k_pay_account: string | null;
        k_pay_method: string | null;
        m_rest: string;
        s_method: string | null;
    }>;
    /** A list of accounts that is not created for this user yet. */
    a_account_nx: Array<Array<unknown>>;
    /** Determines whether the user is a debtor. If `true` - the owner of this account is a debtor. */
    is_debtor: boolean;
}
export interface ThothWlPayFormEnvironmentUserParams {
    /** The key of the business to retrieve payment information for. */
    k_business: string;
    /** The key of the currency to retrieve payment information for. */
    k_currency: string;
    /** The key of the location to retrieve payment information for. */
    k_location: string;
    /** The user ID to retrieve payment information for. Primary key in the PassportLoginSql table. */
    uid_owner?: string | null;
}
export interface ThothWlPayFormEnvironmentUserResponse {
    /** A list of supported bank card systems. */
    a_card_system: Array<number>;
    /** A list of payment methods enabled for staff members. The ID is one of [RsPayMethodSid](#/componen... */
    a_method_staff: Array<number>;
    a_method_support: Array<{
        id_pay_method: number;
        is_client?: boolean;
        k_pay_method: string | null;
        s_method?: string;
    }>;
    /** The configuration array that's sent to mobile card reader plugin. */
    a_mobile_config: Array<unknown> | null;
    a_pay_processor: Array<{
        a_public_keys: Array<unknown> | null;
        a_public_info: Array<unknown> | null;
        hide_save_source: boolean;
        id_pay_processor: number;
        is_enabled_3ds: boolean | null;
        is_test: boolean | null;
        k_business_merchant: string;
    }> | null;
    /** Current local date in current location [EnvironmentApi](/Thoth/WlPay/Form/Environment.json) */
    dl_now: string;
    /** Surcharge amount for payment with card represented as a percent of transaction amount. */
    f_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a percent of transaction amount. */
    f_surcharge_ach: string | null;
    /** A list of locales. */
    id_locale: number | null;
    /** `true` if clients can choose whether their banking and credit card information is saved at checkout, */
    is_save_optional: boolean;
    /** Determines whether newly added payment sources should be saved. This will be `true` if payment so... */
    is_save_source: boolean;
    /** Whether tips are accepted. */
    is_tip: boolean;
    /** Surcharge amount for payment with card represented as a fixed amount. */
    m_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a fixed amount. */
    m_surcharge_ach: string | null;
}
export interface ThothWlPayFormEnvironmentParams {
    /** The key of the business to retrieve payment information for. */
    k_business: string;
    /** The key of the currency to retrieve payment information for. */
    k_currency: string;
    /** The key of the location to retrieve payment information for. */
    k_location: string;
    /** The user ID to retrieve payment information for. Primary key in the PassportLoginSql table. */
    uid_owner?: string | null;
}
export interface ThothWlPayFormEnvironmentResponse {
    /** A list of supported bank card systems. */
    a_card_system: Array<number>;
    /** A list of payment methods enabled for staff members. The ID is one of [RsPayMethodSid](#/componen... */
    a_method_staff: Array<number>;
    a_method_support: Array<{
        id_pay_method: number;
        is_client?: boolean;
        k_pay_method: string | null;
        s_method?: string;
    }>;
    /** The configuration array that's sent to mobile card reader plugin. */
    a_mobile_config: Array<unknown> | null;
    a_pay_processor: Array<{
        a_public_keys: Array<unknown> | null;
        a_public_info: Array<unknown> | null;
        hide_save_source: boolean;
        id_pay_processor: number;
        is_enabled_3ds: boolean | null;
        is_test: boolean | null;
        k_business_merchant: string;
    }> | null;
    /** Current local date in current location [EnvironmentApi](/Thoth/WlPay/Form/Environment.json) */
    dl_now: string;
    /** Surcharge amount for payment with card represented as a percent of transaction amount. */
    f_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a percent of transaction amount. */
    f_surcharge_ach: string | null;
    /** A list of locales. */
    id_locale: number | null;
    /** `true` if clients can choose whether their banking and credit card information is saved at checkout, */
    is_save_optional: boolean;
    /** Determines whether newly added payment sources should be saved. This will be `true` if payment so... */
    is_save_source: boolean;
    /** Whether tips are accepted. */
    is_tip: boolean;
    /** Surcharge amount for payment with card represented as a fixed amount. */
    m_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a fixed amount. */
    m_surcharge_ach: string | null;
}
export interface ThothWlPayMethodListParams {
    /** Whether only active payment methods should be returned. */
    is_active: boolean;
    /** The business key. */
    k_business: string;
    /** Whether payment method [RsPayMethodSid::ACCOUNT_MANUAL](#/components/schemas/RsPayMethodSid) shou... */
    show_manual: boolean;
    /** The key of a user to show information for. */
    uid: string;
}
export interface ThothWlPayMethodListResponse {
    a_pay_method: Array<{
        id_pay_method: number;
        k_pay_method: string | null;
        s_title: string;
    }>;
}
export interface ThothWlPayOwnerOwnerParams {
    /** Key of a user to show information for. */
    uid: string;
    /** Business key. */
    k_business?: string | null;
}
export interface ThothWlPayOwnerOwnerResponse {
    /** A list of money owners from which account money can be transferred. */
    id_pay_owner: number;
    /** The payment owner key. This is used for financial transactions. */
    k_pay_owner: string;
    /** Key of the money owner. */
    k_pay_owner_money: string;
}
export interface ThothWlPayAddressAddressParams {
    /** The ID of the payment owner type. */
    id_pay_owner: number;
    /** Business key, where the payment is performed. */
    k_business: string;
    /** The primary key of a payment owner. */
    k_id: string;
}
export interface ThothWlPayAddressAddressResponse {
    /** The payee's address information. */
    a_pay_address: Array<unknown>;
}
export interface ThothWlPayAddressProfileParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The key of the user whose data should be retrieved. */
    uid: string;
}
export interface ThothWlPayAddressProfileResponse {
    /** The country key. */
    k_geo_country: string | null;
    /** The region ID. */
    k_geo_region: string | null;
    /** The name of the city in the address. */
    s_city: string | null;
    /** The client name as listed in their address. */
    s_name: string | null;
    /** The client phone number. */
    s_phone: string | null;
    /** The client postal or zip code. */
    s_postal: string | null;
    /** The first line of the client address. */
    s_street1: string | null;
    /** The second line of the client address. */
    s_street2: string | null;
}
export interface CoreRequestExampleParams {
    /** Example argument. */
    i_argument: number;
}
export interface CoreRequestExampleResponse {
    /** Example result. */
    i_result: number;
    /** Key of the log record written by the API controller. */
    s_log: string;
}
export interface CoreGeoComboboxParams {
    /** The locale ID used as a filter. The locale is generally a country. */
    id_locale: number | null;
    /** The city name (or a fragment of the city name) used for the search. */
    s_value: string;
}
export interface CoreGeoComboboxResponse {
    a_list: Array<{
        s_value: string;
        s_key: string;
    }>;
}
export type CoreGoogleGoogleCaptchaParams = Record<string, unknown>;
export type CoreGoogleGoogleCaptchaResponse = Record<string, unknown>;
export type CoreWebSocketSubscribeParams = Record<string, unknown>;
export interface CoreWebSocketSubscribeResponse {
    a_message_broadcast: Array<{
        i_cas_change: number;
        id_report_status: number;
    } | {
        k_visit: string;
    } | {
        a_data: Record<string, unknown>;
    } | {
        k_business: string | null;
    } | {
        url_redirect: string;
    } | {
        i_overdue: number;
        id_task_status: number;
        k_task: string;
    } | {
        i_unread_alert: number;
        is_active: boolean;
        is_message: boolean;
        is_sound: boolean;
        k_alert: string | null;
    } | {
        id_card_system: number;
        id_pay_exception: number | null;
        id_ticket_status: number | null;
        m_tip: string;
        s_card_holder: string | null;
        s_expire: string | null;
        s_last4: string | null;
        text_message: string | null;
    } | {
        text_title: string;
    } | {
        dt_end_local: string;
        dt_start_local: string;
        k_class_tab_new: string | null;
        k_class_tab_old: string | null;
    } | {
        dtl_end: string;
        dtl_start: string;
        k_appointment: string | null;
        k_class_period: string | null;
    } | {
        is_active: boolean;
        is_booking_in_progress: boolean | null;
    } | {
        a_visit: Record<string, unknown>;
    } | Record<string, unknown> | {
        i_complete: number;
        i_fail: number;
        i_left: number;
        k_import: string;
        url_log: string;
    } | {
        html_error_message: string;
        s_key: string;
        tl_send: number;
    } | {
        i_generation: number;
        id_report: number;
        is_need_show: boolean;
        k_report_accumulation: string;
        text_report: string;
    } | {
        a_domain_token: Record<string, unknown>;
        id_domain_status: number;
        text_domain_status_icon: string;
    } | {
        id_mail_verify_status: number;
        text_email: string;
    } | {
        k_login_type: string | null;
        uid: string;
    } | {
        id_card_system: number;
        id_card_type: number | null;
        id_pay_exception: number | null;
        id_payment_status: number | null;
        m_tip: string | null;
        s_last4: string | null;
        text_card_holder: string | null;
        text_message: string | null;
    } | {
        i_unread_sms: number;
    } | {
        is_close: boolean;
        k_location: string;
        text_full_name: string;
        text_location: string;
        uid_request: string;
    } | {
        is_grant: boolean;
        text_full_name: string;
        tu_send: number;
    } | {
        is_inactive: boolean;
    } | {
        a_invalid: Record<string, unknown>;
        a_valid: Record<string, unknown>;
    } | {
        a_info: Record<string, unknown>;
        tl_send: number;
    } | {
        a_info: Record<string, unknown>;
        s_key: string;
    } | {
        f_progress: number;
    }>;
}
export interface CoreSidCoreSidParams {
    /** Name of the Sid class to get list from. */
    s_class_name: string;
}
export interface CoreSidCoreSidResponse {
    a_list: Array<{
        sid: number;
        text_title: string;
    }>;
}
export interface CoreCaptchaCaptchaRequireParams {
    /** Arguments for creating CAPTCHA object. */
    a_arguments: Array<{
        k_business: string | null;
    } | Record<string, unknown> | {
        is_search: boolean;
    }>;
    /** The CID of the CAPTCHA. */
    cid_captcha: number;
}
export interface CoreCaptchaCaptchaRequireResponse {
    /** `true` if enabled V3 captcha enabled. */
    is_enable_v3: boolean;
    /** This will be `true` if a CAPTCHA is required. Otherwise, this will be `false`. */
    is_require: boolean;
}
export interface SocialMicrosoftLoginDeleteParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
}
export type SocialMicrosoftLoginDeleteResponse = Record<string, unknown>;
export interface SocialMicrosoftLoginGetParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export interface SocialMicrosoftLoginGetResponse {
    /** If `true`, the user has a bound Microsoft account. Otherwise, this will be `false`. */
    is_exists: boolean;
    /** The Microsoft OAuth 2.0 authorization link. */
    url_login: string;
}
export interface SocialMicrosoftLoginPostParams {
    /** If authorization is performed in a third-party application, set this flag in case of authorizatio... */
    is_external: boolean;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export type SocialMicrosoftLoginPostResponse = Record<string, unknown>;
export interface WlScheduleCancelGetParams {
    /** The date of the session in UTC. */
    dt_date: string;
    /** This will be `true` if the API is being used from the back end. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** `true` is late cancel, `false` reservation is not late cancel. */
    is_late_cancel: boolean;
    /** Key of the business within which the action is performed. */
    k_business: string;
    /** The user key. */
    uid: string;
    /** The appointment key. */
    k_appointment?: string | null;
    /** The class period key. */
    k_class_period?: string | null;
}
export type WlScheduleCancelGetResponse = Record<string, unknown>;
export interface WlScheduleCancelPostParams {
    /** The date of the session in UTC. */
    dt_date: string;
    /** This will be `true` if the API is being used from the back end. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** `true` is late cancel, `false` reservation is not late cancel. */
    is_late_cancel: boolean;
    /** Key of the business within which the action is performed. */
    k_business: string;
    /** The user key. */
    uid: string;
    /** The appointment key. */
    k_appointment?: string | null;
    /** The class period key. */
    k_class_period?: string | null;
}
export type WlScheduleCancelPostResponse = Record<string, unknown>;
export interface WlScheduleScheduleAvailableDateParams {
    /** Class keys to filter. */
    a_class: Array<string>;
    /** IDs of week days from [ADateWeekSid](#/components/schemas/ADateWeekSid) class. */
    a_day: Array<number>;
    /** Event keys to filter. */
    a_event: Array<string>;
    /** Location keys to filter. */
    a_location: Array<string>;
    /** Staff member keys to filter. */
    a_staff: Array<string>;
    /** Time interval: */
    a_time: Array<{
        tl_end: string;
        tl_start: string;
    }>;
    /** The date/time to start from in UTC. */
    dtu_start: string;
    /** "Book now" tab ID. One of [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) constants. */
    id_class_tab: number;
    /** `true` to include classes; `false` to exclude. */
    is_class: boolean;
    /** `true` to include events; `false` to exclude. */
    is_event: boolean;
    /** `true` to include only virtual classes; */
    is_virtual: boolean;
    /** Business key. */
    k_business: string;
    /** Timezone key. */
    k_timezone: string;
}
export interface WlScheduleScheduleAvailableDateResponse {
    /** Nearest session date available for booking in user's or business timezone. */
    dl_next_available: string | null;
}
export interface WlVisitVisitStatusGetParams {
    /** The business key. */
    k_business: string;
    /** The visit key. */
    k_visit: string;
    /** The time zone key. */
    k_timezone?: string | null;
}
export interface WlVisitVisitStatusGetResponse {
    a_cancel: Array<{
        a_penalty: {
            is_flat: boolean;
            k_currency: string;
            m_amount: string;
        } | null;
        can_cancel: boolean;
        is_flag: boolean;
        is_late: boolean;
        is_refund: boolean;
    }>;
    /** An array of service resources. */
    a_resource: Array<string> | null;
    a_resource_alias: Array<{
        k_resource: string;
        k_resource_type: string;
        i_index: number;
        i_quantity: number;
        text_alias: string;
        text_title: string;
    }> | null;
    /** The list of keys of staff members that conduct the class. */
    a_staff: Array<string>;
    /** The list of user IDs of staff members that conduct the class. */
    a_uid_staff: Array<string>;
    /** The visit date and time in UTC and in MySQL format. */
    dt_date: string;
    /** The visit date in the location's time zone and in MySQL format. */
    dtl_date: string;
    /** The service duration (in minutes). */
    i_duration: number;
    /** The client's place in a waiting list. */
    i_wait_spot: number;
    /** The source of a visit. */
    id_mode: number;
    /** Possible states of the visit: book, attended, cancelled, etc. */
    id_visit: number;
    /** Determines whether the visit is from an event. */
    is_event: boolean;
    /** Whether this visit is requested and requires staff confirmation. */
    is_request: boolean;
    /** The class key. */
    k_class: string;
    /** The class period key. */
    k_class_period: string;
    /** The key of the location where visit provides. */
    k_location: string;
    /** The service key. */
    k_service: string | null;
    /** The key of the staff providing the appointment. */
    k_staff: string | null;
    /** The .ics file for adding the service to a phone calendar. */
    s_calendar_file_content: string;
    /** The text abbreviation of the time zone. */
    text_abbr_timezone: string;
    /** The full address of the location for the visit (not the name of the location). */
    text_location: string;
    /** The full name of the staff member who conducts this visit. */
    text_staff: string;
    /** The service title. */
    text_title: string;
    /** User key who made a visit. */
    uid: string | null;
    /** The ID of the user who is the staff providing the appointment. */
    uid_staff: string | null;
    /** The direct link to start class/event booking on the WellnessLiving website. */
    url_book_referral: string | null;
    /** The shortened direct link to start class/event booking on the WellnessLiving website. */
    url_book_referral_short: string | null;
    /** URL of virtual service. Empty if the visit is not virtual. */
    url_virtual_service: string;
}
export interface WlVisitVisitStatusPostParams {
    /** The staff decision to charge (or not charge) a penalty when a client meets late cancel/no-show re... */
    is_charge_fee: boolean;
    /** The business key. */
    k_business: string;
    /** The visit key. */
    k_visit: string;
    /** The reason the visit was canceled. */
    text_reason: string;
    /** The email pattern key. */
    k_mail_pattern_live?: string | null;
}
export type WlVisitVisitStatusPostResponse = Record<string, unknown>;
export interface WlLocationListBulkParams {
    /** The ID of the directory if locations should be filtered by enabling directory integration. */
    id_directory: number;
    /** A list of businesses. Business primary keys are serialized with JSON. */
    s_business: string;
    /** A list of locations. Location primary keys are serialized with JSON. */
    s_location: string;
}
export interface WlLocationListBulkResponse {
    a_location: Array<{
        f_latitude: number;
        f_longitude: number;
        f_rate: number;
        i_order: number;
        k_business: string;
        k_location: string;
        s_title: string;
        text_address: string;
        url_logo?: string;
    }>;
    a_location_full: Array<{
        a_age: Array<number>;
        a_amenities: Array<number>;
        a_level: Array<string>;
        a_logo: {
            i_height: number;
            i_width: number;
            s_url: string;
        };
        a_slide: {
            i_height: number;
            i_width: number;
            url_preview: string;
            url_slide: string;
        };
        a_work: {
            s_end: string;
            s_start: string;
        };
        dtu_check?: string | null;
        dtu_create: string;
        f_latitude: number;
        f_longitude: number;
        html_description_full: string;
        html_description_preview: string;
        i_logo_height: number;
        i_logo_width: number;
        id_industry?: number;
        is_phone: boolean;
        is_top_choice: boolean;
        k_business: string;
        k_business_type: string;
        k_location: string;
        k_timezone: string;
        s_address: string;
        s_map: string;
        s_phone: string;
        s_timezone: string;
        s_title: string;
        text_address_individual: string;
        text_alias: string;
        text_business_type: string;
        text_city: string;
        text_country: string;
        text_industry: string;
        text_mail: string;
        text_postal: string;
        text_region: string;
        text_region_code: string;
        url_facebook: string;
        url_instagram: string;
        url_linkedin: string;
        url_map: string;
        url_microsite: string;
        url_site: string;
        url_twitter: string;
        url_web: string;
        url_youtube: string;
    }>;
}
export type WlLocationLocationParams = Record<string, unknown>;
export interface WlLocationLocationResponse {
    /** The key of the location. */
    k_location: string | null;
}
export interface WlLocationListParams {
    /** A list of business keys. */
    a_business: Array<string>;
    /** The business key used internally by WellnessLiving. */
    k_business: string;
    /** The primary keys of the selected businesses. */
    s_business: string;
    /** Determines whether removed locations should be returned. */
    show_remove: boolean;
}
export interface WlLocationListResponse {
    a_location: Array<{
        a_directories: Array<number>;
        a_timezone: {
            k_timezone: string;
            text_abbr: string;
            text_name: string;
        };
        f_latitude: number;
        f_longitude: number;
        i_shift: number;
        k_business: string;
        k_country: string;
        k_location: string;
        k_region: string;
        s_mail: string;
        s_phone: string;
        s_title: string;
        text_address: string;
        url_logo?: string;
        url_logo_source?: string;
    }>;
}
export type WlProfileProfileCreateParams = Record<string, unknown>;
export interface WlProfileProfileCreateResponse {
    /** The key of the user. */
    uid: string;
}
export interface WlEventEventListGetParams {
    /** Defines how the event availability flag filter should be applied. */
    id_flag: number;
    /** Determines whether the endpoint is used for backend mode. */
    is_backend: boolean;
    /** `true` to show even event restricted by booking policies; `false` to show available events only. */
    is_ignore_requirement: boolean;
    /** Determines whether you need to retrieve a list of event sessions regardless of the tab specified ... */
    is_tab_all: boolean;
    /** The class tab key to retrieve a list of event sessions from a specific tab only. */
    k_class_tab: string;
    /** The skin key if an event list is used for widget mode. */
    k_skin: string;
    /** Search string to filter events by name. */
    text_search: string;
    /** List of class keys applied by filter. */
    a_class_filter?: Array<string> | null;
    /** List of day the week applied by filter [ADateWeekSid](#/components/schemas/ADateWeekSid). */
    a_day?: Array<number> | null;
    /** List of enrollment blocks keys applied by filter. */
    a_enrollment_block_filter?: Array<string> | null;
    /** List of location keys applied by filter. */
    a_location?: Array<string> | null;
    /** List of staff keys applied by filter. */
    a_staff?: Array<string> | null;
    /** List of time day applied by filter [RsScheduleTimeSid](#/components/schemas/RsScheduleTimeSid). */
    a_time?: Array<number> | null;
    /** List of IDs to include/exclude virtual events. */
    a_virtual?: Array<string> | null;
    /** The end date of the range from which a list of events should be retrieved. */
    dl_end?: string | null;
    /** The start date of the range from which a list of events should be retrieved. */
    dl_start?: string | null;
    /** The event business key to retrieve a list of all event sessions in business. */
    k_business?: string | null;
    /** The event class key to retrieve a list of all event sessions of a specific class. */
    k_class?: string | null;
    /** The event location key to retrieve a list of all event sessions in a specific location. */
    k_location?: string | null;
    /** The user key. */
    uid?: string | null;
}
export interface WlEventEventListGetResponse {
    /** List of available enrollment blocks matching the requested parameters. */
    a_enrollment_block_list: Array<string>;
    /** A list of events corresponding to requested parameters. */
    a_event_list: Array<{
        a_age_restriction: Array<Record<string, unknown>>;
        a_class_tab: Array<string>;
        a_logo: Array<Record<string, unknown>>;
        a_schedule: Array<Record<string, unknown>>;
        a_search_tag: Array<Record<string, unknown>>;
        can_book: boolean;
        can_cancel: boolean;
        dl_early: string;
        dl_end: string;
        dl_session: string;
        dl_start: string;
        dtu_session: string;
        html_reason: string;
        i_session_all: number;
        i_session_future: number;
        i_session_past: number;
        id_reason: number;
        is_age_restrict: boolean;
        is_age_restrict_only: boolean;
        is_available?: boolean | null;
        is_block: boolean;
        is_book_for_guest: boolean;
        is_bookable: boolean;
        is_booked: boolean;
        is_closed: boolean;
        is_full: boolean;
        is_online: boolean;
        is_online_private: boolean;
        is_open: boolean;
        is_promotion_only: boolean;
        is_prorate: boolean;
        is_single_buy: boolean;
        is_virtual: boolean;
        k_class: string;
        k_class_period: string;
        k_enrollment_block: string;
        k_location: string;
        m_price_max: string;
        m_price_min: string;
        m_price_total: string;
        m_price_total_early: string;
        sid_reason: string;
        text_age_restrict: boolean;
        text_title: string;
        url_book?: string | null;
        xml_description: string;
    }>;
}
export interface WlEventEventListPutParams {
    /** The event business key to retrieve a list of all event sessions in business. */
    k_business?: string | null;
    /** The user key. */
    uid?: string | null;
}
export type WlEventEventListPutResponse = Record<string, unknown>;
export type WlEventEventCancelWholeParams = Record<string, unknown>;
export type WlEventEventCancelWholeResponse = Record<string, unknown>;
export interface WlBusinessDataParams {
    /** The maximum height of the business image (in pixels). */
    i_logo_height: number;
    /** The maximum width of the business image (in pixels). */
    i_logo_width: number;
    /** The business key. */
    k_business: string;
    /** The authorization token. */
    text_token: string;
}
export interface WlBusinessDataResponse {
    /** A list of all business services and their availability data. */
    a_service_list: Array<number>;
    /** The list of predefined tips in percentages. */
    a_tip_predefine: Array<number>;
    /** A list of client booking flow types. */
    id_category: number;
    /** Business status for managing claim request behavior. */
    id_claim_status: number;
    /** A list of currencies. */
    id_currency: number;
    /** A list of locales. */
    id_locale: number | null;
    /** Types of the possible ranks in different business. */
    id_rank_type: number | null;
    /** List of available data center regions. */
    id_region: number;
    /** Determines whether surcharges to client payments are enabled in the business. */
    is_apply_surcharge: boolean;
    /** `true` if business is a franchisor or franchisee. */
    is_franchise: boolean;
    /** Determines whether the business has multiple locations (including inactive locations). */
    is_location_multiple: boolean;
    /** `true` - clients of the business can select a custom time zone in their profile. */
    is_profile_timezone: boolean;
    /** If `true`, clients can enter the progress log. Otherwise, this will be `false`. */
    is_progress_client: boolean;
    /** If `true`, verification of the progress log by a staff member is required. Otherwise, this will b... */
    is_progress_verify: boolean;
    /** Determines whether quizzes are available in the business. */
    is_quiz_available: boolean;
    /** Determines if the business operates in testing mode. */
    is_test: boolean;
    /** If `true`, tips are available in the business. Otherwise, this will be `false`. */
    is_tip: boolean;
    /** If `true`, the business has the "No tip" option displayed. Otherwise, this will be `false`. */
    is_tip_deny: boolean;
    /** If `true`, the client must sign after selecting the tip. Otherwise, this will be `false`. */
    is_tip_sign: boolean;
    /** The franchisor business key. This will be empty if this business is the franchisor or not in a fr... */
    k_business_franchisor: string;
    /** The business key obtained by the security token `text_token`. */
    k_business_token: string;
    /** Key of the business type. */
    k_business_type: string;
    /** The currency key of the given business, or the system currency if the business didn't pass. */
    k_currency: string;
    /** The reply-to email address. */
    s_reply_mail: string;
    /** The reply-to business name. */
    s_reply_name: string;
    /** The business address. */
    text_office_address: string;
    /** The business title. */
    text_title: string;
    /** The URL for the online store. */
    url_catalog: string;
    /** The URL for client sign in. */
    url_enter: string;
    /** The Facebook page. */
    url_facebook: string;
    /** The Google+ page. */
    url_google: string;
    /** URL of the home tour page related to the business type. */
    url_home_tour: string;
    /** The Instagram page. */
    url_instagram: string;
    /** The `LinkedIn` profile. */
    url_linkedin: string;
    /** The logo URL. */
    url_logo: string;
    /** The image stub (in cases where the business logo isn't loaded). */
    url_logo_empty: string;
    /** The URL to redeem gift card. */
    url_redeem: string;
    /** The URL for the client review page. */
    url_review: string;
    /** The URL for the client web app (schedule). */
    url_schedule: string;
    /** The URL for client sign up. */
    url_signup: string;
    /** The Twitter page. */
    url_twitter: string;
    /** The business website. */
    url_website: string;
    /** The YouTube website. */
    url_youtube: string;
}
export type WlBusinessBusinessPostParams = Record<string, unknown>;
export interface WlBusinessBusinessPostResponse {
    /** The key of the business. */
    k_business: string;
    /** The key of the location for update or after creating. */
    k_location: string | null;
    /** The UID of the created staff member or `null` if no staff member should be created. */
    uid: string | null;
    /** Url for password change page. */
    url_password_change: string | null;
}
export type WlBusinessBusinessPutParams = Record<string, unknown>;
export interface WlBusinessBusinessPutResponse {
    /** The key of the business. */
    k_business: string;
    /** The key of the location for update or after creating. */
    k_location: string | null;
    /** The UID of the created staff member or `null` if no staff member should be created. */
    uid: string | null;
    /** Url for password change page. */
    url_password_change: string | null;
}
export interface WlBusinessBusinessAccessParams {
    /** This will be `true` if the API is being used from the backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The staff member's Facebook ID. This won't be empty if the staff member is logging in with Facebook. */
    s_facebook_id: string;
    /** The staff member's Microsoft key. */
    s_microsoft_id: string;
    /** The staff member's Apple authorization code. This won't be empty if the staff member is logging i... */
    text_authorization_apple: string;
    /** The Google Plus user ID. This won't be empty if the staff member is logging in with Google. */
    text_google_plus: string;
    /** The staff member's email to determine their UID. This won't be empty if the staff member is loggi... */
    text_mail: string;
    /** User key. Empty if user is not logged in, but their authorization data is known. */
    uid: string;
}
export interface WlBusinessBusinessAccessResponse {
    /** The businesses the staff member belongs to. */
    a_business: Array<string>;
    a_business_data: Array<{
        id_region: number;
        k_business: string;
        text_office_address: string;
        text_title: string;
        url_logo: string;
    }>;
    /** The staff member key, determined by their email. This will be empty if the UID isn't empty. */
    uid_mail: string;
}
export interface WlReportDataParams {
    /** The page of results to show, starting at zero. The API will return 256 results per page. */
    i_page: number;
    /** The report ID. */
    id_report: number;
    /** The report group ID. */
    id_report_group: number;
    /** The report view ID. One of the [RsReportChartViewSid](#/components/schemas/RsReportChartViewSid) ... */
    id_report_view: number;
    /** The key of business for which the report must be generated. */
    k_business: string;
    /** Filter settings in encoded format. */
    s_filter: string;
    /** The field to use for sorting report data. */
    s_sort: string;
    /** The report page ID. One of the [RsReportPageSid](#/components/schemas/RsReportPageSid) constants. */
    id_report_page?: number | null;
}
export interface WlReportDataResponse {
    /** The report contents. */
    a_data: Array<unknown>;
    /** The report total. */
    a_total: Array<unknown>;
}
export interface WlReportAccessParams {
    /** Report CID. */
    cid_report: number;
    /** Report ID. */
    id_report: number;
    /** ID of business for which access must be checked. */
    k_business: string;
}
export interface WlReportAccessResponse {
    /** `true` - access is granted; `false` - access is denied. */
    has_access: boolean;
}
export interface WlReportPageDataParams {
    /** The page of results to show for each report in collection, starting at zero (set by default). The... */
    a_page: Array<number>;
    /** The report group ID. One of the [RsReportGroupSid](#/components/schemas/RsReportGroupSid) constan... */
    id_report_group: number;
    /** The report page ID. One of the [RsReportPageSid](#/components/schemas/RsReportPageSid) constants. */
    id_report_page: number | null;
    /** The report view ID. One of the [RsReportChartViewSid](#/components/schemas/RsReportChartViewSid) ... */
    id_report_view: number;
    /** The key of business for which the report collection must be generated. */
    k_business: string;
    /** Filter settings in encoded format. */
    s_filter: string;
    /** The field to use for sorting report data. */
    s_sort: string;
}
export interface WlReportPageDataResponse {
    /** List of the reports contents. Key is the report id from [RsReportSid](#/components/schemas/RsRepo... */
    a_data: Array<Array<unknown>>;
}
export interface WlCollectorDebtListParams {
    /** Defines whether new debts should be returned or only previously sent debts. */
    is_request_debt: boolean;
    /** Defines whether debts for test or real business should be returned. */
    is_test: boolean;
    /** Date before which debts should be returned. */
    dl_end?: string | null;
    /** Date since which debts should be returned. */
    dl_start?: string | null;
    /** The business key for which debts should be returned. */
    k_business?: string | null;
}
export interface WlCollectorDebtListResponse {
    a_debt: Array<{
        dl_client_birth: string;
        dtu_client_since: string;
        dtu_due: string;
        dtu_add: string;
        dtu_cease: string;
        id_currency: number;
        k_business: string;
        k_collector_debt: string;
        k_pay_transaction_debt: string;
        k_pay_transaction_last: string;
        m_amount_debt: string;
        m_amount_paid: string;
        text_business_title: string;
        text_client_name: string;
        text_client_address: string;
        text_client_mail: string;
        text_client_phone: string;
        text_client_zip: string;
        text_skip: string;
        uid: string;
    }>;
}
export interface WlCollectorDebtPayParams {
    /** The currency of the payment. */
    id_currency: number;
    /** The key of the business from which the debt originates. */
    k_business: string;
    /** The key of the user with the debt. */
    uid: string;
}
export interface WlCollectorDebtPayResponse {
    /** The transaction key generated to register the payment. */
    k_pay_transaction: string;
}
export interface WlCollectorDebtTransactionParams {
    /** If `true`, debt payments from test businesses will be returned. Otherwise, this will be `false` i... */
    is_test: boolean;
    /** If set, this is the end of the date window. Only debt payments added before or on this date will ... */
    dl_end?: string | null;
    /** If set, this is the start of the date window. Only debt payments added on or after this date will... */
    dl_start?: string | null;
    /** The business key for which debt payments should be returned. */
    k_business?: string | null;
}
export interface WlCollectorDebtTransactionResponse {
    a_transaction: Array<{
        dtu_pay: string;
        m_pay_amount: string;
        id_pay_method: number;
        is_pay_collections: boolean;
        is_debt_paid: boolean;
        text_client_name: string;
        uid: string;
    }>;
}
export interface WlAnnouncementAnnouncementListParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** Business key. */
    k_business: string;
    /** The filter phrase to filter announcements by name. */
    text_search: string;
    /** Order ID for list of announcements. */
    id_order?: number | null;
    /** Sort field ID for list of announcements. */
    id_sort_field?: number | null;
    /** Location key for which need show announcement. */
    k_location?: string | null;
}
export interface WlAnnouncementAnnouncementListResponse {
    a_list: Array<{
        a_location: Array<string>;
        dtl_create: string;
        dtl_publish: string | null;
        dtl_unpublish: string | null;
        html_description: string;
        html_description_clear: string;
        i_order: number | null;
        id_status: number;
        is_pin: boolean;
        k_announcement: string;
        k_business: string;
        text_create_date: string;
        text_publish_date: string;
        text_publish_date_short: string;
        text_title: string;
        text_unpublish_date: string;
        uid_create: string;
        url_detail: string;
        url_image: string;
        xml_description: string;
    }>;
    /** List of possible sort order. */
    id_order: number | null;
    /** List of fields by which you can sort. */
    id_sort_field: number | null;
}
export interface WlLeadLeadGetParams {
    /** The key of business to which the new user must be captured. */
    k_business: string;
    /** The key of the widget skin. If left empty, then the default skin is used. */
    k_skin: string;
}
export interface WlLeadLeadGetResponse {
    a_field_list: Array<{
        a_item: {
            s_id: string;
            text_title: string;
        };
        id_field_general: number;
        id_field_type: number;
        is_require: boolean;
        k_field: string;
        text_field: string;
    }>;
    a_skin: Array<{
        a_style: {
            s_style: string;
            s_value_name: string;
        };
        background: {
            class: string;
            css: string;
        };
        'field-font': {
            class: string;
            css: string;
        };
        'header-text': {
            class: string;
            css: string;
            text: string;
        };
        'info-show': {
            a_require: Array<boolean>;
            a_show: Array<boolean>;
            empty: boolean;
        };
        'submit-background': {
            class: string;
            css: string;
        };
        'submit-font': {
            class: string;
            css: string;
        };
        'submit-text': {
            class: string;
            css: string;
            text: string;
        };
    }>;
    /** Whether it is possible to give free promotion when adding a user (only if free promotion is confi... */
    can_use_free_purchase: boolean | null;
    /** The URL to load the image with a captcha test. */
    url_captcha: string;
}
export interface WlLeadLeadPostParams {
    /** This will be `true` if the API is being used from the backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The key of business to which the new user must be captured. */
    k_business: string;
    /** The key of the widget skin. If left empty, then the default skin is used. */
    k_skin: string;
    /** Whether it is possible to give free promotion when adding a user (only if free promotion is confi... */
    can_use_free_purchase?: boolean | null;
}
export interface WlLeadLeadPostResponse {
    /** Key of the lead source. */
    k_lead_source: string | null;
    /** An error code if the lead is not signed in after creation. */
    text_sign_in_error: string;
    /** The key of the new user. */
    uid: string;
}
export interface WlPromotionPromotionListParams {
    /** Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud bus... */
    is_franchise: boolean;
    /** The business key used to get the promotions. */
    k_business: string;
}
export interface WlPromotionPromotionListResponse {
    a_promotion: Array<{
        id_program: number;
        id_program_type: number;
        is_active: boolean;
        k_promotion: string;
        text_title: string;
    }>;
}
export interface WlPromotionPromotionDeleteParams {
    /** The key of the business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export type WlPromotionPromotionDeleteResponse = Record<string, unknown>;
export interface WlPromotionPromotionGetParams {
    /** The key of the business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export interface WlPromotionPromotionGetResponse {
    a_promotion: Array<{
        a_access: {
            a_class: Record<string, unknown>;
            a_event: Record<string, unknown>;
            a_resource: Record<string, unknown>;
            a_service: Record<string, unknown>;
            is_class_all: boolean;
            is_event_all: boolean;
        };
        a_image: {
            i_height: string;
            i_width: string;
            'url-thumbnail': string;
        };
        a_location: Array<string>;
        a_login_type: Array<string>;
        a_member_group: Array<string>;
        a_tag: Array<string>;
        dl_expire: string;
        dl_terminate: string;
        f_revenue_single: string;
        i_duration: number;
        i_limit: number;
        id_duration: number;
        id_duration_type: number;
        id_program: number;
        id_restriction: number;
        is_active: boolean;
        is_business_wide: boolean;
        is_introductory: boolean;
        is_online: boolean;
        is_payroll: boolean;
        is_revenue_single: boolean;
        is_use: boolean;
        k_promotion: string;
        k_tag_primary: string;
        m_price: string;
        text_description: string;
        text_title: string;
        url_buy: string;
        url_catalog: string;
    }>;
    /** Guest passes settings for promotion. This will be `null` if there are no guest pass settings for ... */
    o_guest_settings: {
        i_claim_day: number;
        i_limit: number;
        i_limit_duration: number;
        id_limit_duration: number;
        is_checkin: boolean;
        is_limit: boolean;
    } | Array<unknown> | null;
}
export interface WlPromotionPromotionPostParams {
    /** The key of the business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export type WlPromotionPromotionPostResponse = Record<string, unknown>;
export interface WlLoginLoginGetParams {
    /** The height of the requested photo. */
    i_photo_height: number;
    /** The width of the requested photo. */
    i_photo_width: number;
    /** The key of the business. Users can be in multiple businesses. */
    k_business: string;
    /** The key of the user. */
    uid?: string | null;
}
export interface WlLoginLoginGetResponse {
    /** Whether this user can send postcards. */
    can_postcard: boolean;
    /** Whether this user can send SMS. If `true` - user can send SMS, otherwise - `false`. */
    can_send_message: boolean;
    /** String identifiers for gender. */
    id_gender: number;
    /** Whether photo is uploaded. */
    is_photo_empty: boolean;
    /** The user's staff key for the specified business. */
    k_staff: string;
    /** The first name of the user. */
    s_first_name: string;
    /** The surname of the user. */
    s_last_name: string;
    /** The client`s mailing address. */
    text_mail_client: string;
    /** The staff member's mailing address. */
    text_mail_staff: string;
    /** The staff member's first name. */
    text_name_first_staff: string;
    /** The user's login name. This is returned in cases when neither the first name nor the last name ha... */
    text_name_full_client: string;
    /** The staff member's full name. */
    text_name_full_staff: string;
    /** The staff member's last name. */
    text_name_last_staff: string;
    /** The key of the user. */
    uid: string | null;
    /** The user's UID as a staff member for the specified business. */
    uid_staff: string | null;
    /** The URL where the user photo can be retrieved. */
    url_photo: string;
}
export interface WlLoginLoginPostParams {
    /** The height of the requested photo. */
    i_photo_height: number;
    /** The width of the requested photo. */
    i_photo_width: number;
    /** The key of the business. Users can be in multiple businesses. */
    k_business: string;
}
export interface WlLoginLoginPostResponse {
    a_login: Array<{
        id_gender: number;
        k_staff: string;
        s_first_name: string;
        s_last_name: string;
        text_mail_client: string;
        text_name_first_staff: string;
        text_name_full_client: string;
        text_name_full_staff: string;
        text_name_last_staff: string;
        uid_staff: string;
        url_photo: string;
    }>;
}
export interface WlQuizQuizElementDeleteParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export type WlQuizQuizElementDeleteResponse = Record<string, unknown>;
export interface WlQuizQuizElementGetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for request quiz from form builder page, `false` otherwise. */
    is_builder: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** List of purchase items for which this form is loaded in JSON format. */
    json_purchase_item: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
    /** UID of the client for which quiz requested. */
    uid_client: string;
}
export interface WlQuizQuizElementGetResponse {
    a_access_log: Array<{
        dtu_activity: string;
        uid_actor: string;
        id_activity: number;
        text_activity: string;
        text_date: string;
        text_actor: string;
        url_actor: string;
    }>;
    a_element: Array<{
        a_amendment: Record<string, unknown>;
        a_answer: Array<number>;
        a_list: Array<string>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_multiple: boolean;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_heading: string;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        has_duplicate: boolean;
        html_caption: string;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_source: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command: string;
        text_caption: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        can_upload: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        k_id: string;
        k_id_custom_markup_image: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_link_default_markup_image: string;
        s_markup_image: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        url_custom_default_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_signature_footer: string;
        html_signature_header: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_signature: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_answer: string;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        i_rate: number;
        i_scale: number;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        has_duplicate: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_image_left: string;
        k_id_image_right: string;
        k_id_source_left: string;
        k_id_source_right: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command_left: string;
        s_command_right: string;
        s_markup_image: string;
        text_left_image: string;
        text_note: string | null;
        text_right_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_content: string;
        html_heading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_content: string;
        text_heading: string;
        xml_content: string;
        xml_heading: string;
    }>;
    a_setting: Array<{
        a_notify_additional: Array<string>;
        a_service: Array<Array<string>>;
        hide_frontend: boolean;
        i_notify_automated: number | string;
        id_book_request_type: number;
        id_notify_automated: number;
        id_purchase_request_type: number;
        is_amend_support: boolean;
        is_book: boolean;
        is_book_before: boolean;
        is_internal: boolean;
        is_notify_additional: boolean;
        is_notify_automated: boolean;
        is_notify_client: boolean;
        is_notify_staff: boolean;
        is_prevent_franchisee: boolean;
        is_private: boolean;
        is_purchase: boolean;
        is_purchase_all: boolean;
        is_purchase_before: boolean;
        is_register_after: boolean;
        is_register_before: boolean;
        is_require_user: boolean;
        is_service_all: boolean;
    }>;
    /** Whether user has privileges to amend form. */
    can_amend: boolean;
    /** Number of responses for specific quiz. */
    i_responses: number;
    /** Quiz active status. */
    is_active: boolean;
    /** `true` if quiz is imported, `false` otherwise. */
    is_imported: boolean;
    /** Whether form can be edited by franchisee. */
    is_prevent_franchisee: boolean;
    /** Business type key. Used only for forms in the system business. */
    k_business_type: string | null;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Quiz form title. */
    text_title: string;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlQuizQuizElementPostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElementPostResponse {
    /** Quiz key. */
    k_quiz: string;
}
export interface WlQuizQuizElementPutParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElementPutResponse {
    a_setting: Array<{
        a_notify_additional: Array<string>;
        a_service: Array<Array<string>>;
        hide_frontend: boolean;
        i_notify_automated: number | string;
        id_book_request_type: number;
        id_notify_automated: number;
        id_purchase_request_type: number;
        is_amend_support: boolean;
        is_book: boolean;
        is_book_before: boolean;
        is_internal: boolean;
        is_notify_additional: boolean;
        is_notify_automated: boolean;
        is_notify_client: boolean;
        is_notify_staff: boolean;
        is_prevent_franchisee: boolean;
        is_private: boolean;
        is_purchase: boolean;
        is_purchase_all: boolean;
        is_purchase_before: boolean;
        is_register_after: boolean;
        is_register_before: boolean;
        is_require_user: boolean;
        is_service_all: boolean;
    }>;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlQuizQuizElement72DeleteParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export type WlQuizQuizElement72DeleteResponse = Record<string, unknown>;
export interface WlQuizQuizElement72GetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for request quiz from form builder page, `false` otherwise. */
    is_builder: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** List of purchase items for which this form is loaded in JSON format. */
    json_purchase_item: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
    /** UID of the client for which quiz requested. */
    uid_client: string;
}
export interface WlQuizQuizElement72GetResponse {
    a_access_log: Array<{
        dtu_activity: string;
        uid_actor: string;
        id_activity: number;
        text_activity: string;
        text_date: string;
        text_actor: string;
        url_actor: string;
    }>;
    a_element: Array<{
        a_amendment: Record<string, unknown>;
        a_answer: Array<number>;
        a_list: Array<string>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_multiple: boolean;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_heading: string;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        has_duplicate: boolean;
        html_caption: string;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_source: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command: string;
        text_caption: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        can_upload: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        k_id: string;
        k_id_custom_markup_image: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_link_default_markup_image: string;
        s_markup_image: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        url_custom_default_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_signature_footer: string;
        html_signature_header: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_signature: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_answer: string;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        i_rate: number;
        i_scale: number;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        has_duplicate: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_image_left: string;
        k_id_image_right: string;
        k_id_source_left: string;
        k_id_source_right: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command_left: string;
        s_command_right: string;
        s_markup_image: string;
        text_left_image: string;
        text_note: string | null;
        text_right_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_content: string;
        html_heading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_content: string;
        text_heading: string;
        xml_content: string;
        xml_heading: string;
    }>;
    a_setting: Array<{
        a_notify_additional: Array<string>;
        a_service: Array<Array<string>>;
        hide_frontend: boolean;
        i_notify_automated: number | string;
        id_book_request_type: number;
        id_notify_automated: number;
        id_purchase_request_type: number;
        is_amend_support: boolean;
        is_book: boolean;
        is_book_before: boolean;
        is_internal: boolean;
        is_notify_additional: boolean;
        is_notify_automated: boolean;
        is_notify_client: boolean;
        is_notify_staff: boolean;
        is_prevent_franchisee: boolean;
        is_private: boolean;
        is_purchase: boolean;
        is_purchase_all: boolean;
        is_purchase_before: boolean;
        is_register_after: boolean;
        is_register_before: boolean;
        is_require_user: boolean;
        is_service_all: boolean;
    }>;
    /** Whether user has privileges to amend form. */
    can_amend: boolean;
    /** Number of responses for specific quiz. */
    i_responses: number;
    /** Quiz active status. */
    is_active: boolean;
    /** `true` if quiz is imported, `false` otherwise. */
    is_imported: boolean;
    /** Whether form can be edited by franchisee. */
    is_prevent_franchisee: boolean;
    /** Business type key. Used only for forms in the system business. */
    k_business_type: string | null;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Quiz form title. */
    text_title: string;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlQuizQuizElement72PostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElement72PostResponse {
    /** Quiz key. */
    k_quiz: string;
}
export interface WlQuizQuizElement72PutParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElement72PutResponse {
    a_setting: Array<{
        a_notify_additional: Array<string>;
        a_service: Array<Array<string>>;
        hide_frontend: boolean;
        i_notify_automated: number | string;
        id_book_request_type: number;
        id_notify_automated: number;
        id_purchase_request_type: number;
        is_amend_support: boolean;
        is_book: boolean;
        is_book_before: boolean;
        is_internal: boolean;
        is_notify_additional: boolean;
        is_notify_automated: boolean;
        is_notify_client: boolean;
        is_notify_staff: boolean;
        is_prevent_franchisee: boolean;
        is_private: boolean;
        is_purchase: boolean;
        is_purchase_all: boolean;
        is_purchase_before: boolean;
        is_register_after: boolean;
        is_register_before: boolean;
        is_require_user: boolean;
        is_service_all: boolean;
    }>;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlVideoVideoElementDeleteParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The video key. */
    k_video: string;
}
export type WlVideoVideoElementDeleteResponse = Record<string, unknown>;
export interface WlVideoVideoElementGetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The video key. */
    k_video: string;
}
export interface WlVideoVideoElementGetResponse {
    /** The keys of the locations where this video is available. */
    a_location: Array<string>;
    /** The keys of the user staff members who are on the video. */
    a_staff: Array<string>;
    a_staff_info: Array<{
        k_staff: string;
        text_name: string;
        uid_staff: string;
    }>;
    /** The user IDs of the staff members who are on the video (authoritative list for who is assigned to... */
    a_staff_uid: Array<string>;
    /** The video category keys where this video can be found. */
    a_video_category: Array<string>;
    /** The video tag keys. */
    a_video_tag: Array<string>;
    /** The date and time when the video was published. */
    dtl_publish: string | null;
    /** The date and time when the video was unpublished. */
    dtl_unpublish: string | null;
    /** The date when the video was uploaded. */
    dtl_upload: string;
    /** The video embed code. */
    html_embed: string;
    /** The count of burned calories associated with the video. */
    i_calorie: number;
    /** The current time as a percentage of the video duration at which the user is at in the video. */
    i_current_percent: number;
    /** The current time in seconds at which the user is at in the video. */
    i_current_time: number;
    /** The video duration in seconds. */
    i_duration: number;
    /** The number of video views. */
    i_watch: number;
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** A list of two answers for any question: Yes or No. */
    id_location_select: number;
    /** List of video types. */
    id_source: number;
    /** If `true`, the calorie count will be displayed on the video. */
    is_calorie: boolean;
    /** If `true`, the video is converted. */
    is_converted: boolean;
    /** If `true`, the video is published. Otherwise, this will be `false`. */
    is_published: boolean;
    /** If `true`, the video level for the video is enabled. */
    is_video_level: boolean;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
    /** The binary string video key. */
    k_video_binary: string;
    /** The video category primary key. */
    k_video_category_primary: string;
    /** The video level key. */
    k_video_level: string;
    /** The string representation of the video's key. */
    s_preview_video_key: string | null;
    /** If `false`, the calorie count for videos is hidden. Otherwise, this will be `true`. */
    show_calorie: boolean;
    /** If `false`, video levels are hidden. Otherwise, this will be `true`. */
    show_level: boolean;
    /** If `false`, the number of views for videos is hidden. Otherwise, this will be `true`. */
    show_view: boolean;
    /** The video level name. */
    text_level_title: string;
    /** The video name. */
    text_title: string;
    /** The URL of the video thumbnail. */
    url_thumbnail: string;
    /** The URL of the video file. */
    url_video: string | null;
    /** The direct URL of the video. */
    url_video_direct: string;
    /** The direct URL of the video for iframe. */
    url_video_frame: string;
    /** The video description. */
    xml_description: string;
}
export interface WlVideoVideoElementPostParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** If `true`, the video is converted. */
    is_converted: boolean;
    /** The business key. */
    k_business: string;
    /** The video key. */
    k_video: string;
}
export interface WlVideoVideoElementPostResponse {
    /** The video key. */
    k_video: string;
}
export type WlVideoVideoElementPutParams = Record<string, unknown>;
export interface WlVideoVideoElementPutResponse {
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
}
export interface WlVideoVideoListGetParams {
    /** The calorie range ascribed to the video to use for the search. */
    a_calorie: Array<{
        i_from?: number;
        i_to?: number;
    }>;
    /** The duration range ascribed to the video to use for the search. */
    a_duration: Array<{
        i_from?: number;
        i_to?: number;
    }>;
    /** A list of levels to show videos for. A level can refer to the difficulty ascribed to the video. */
    a_level: Array<string>;
    /** A list of locations to show videos from. */
    a_location: Array<string>;
    /** A list of video sources. */
    a_source: Array<number>;
    /** A list of staff members who appear in videos. */
    a_staff: Array<string>;
    /** A list of staff members who appear in videos. */
    a_staff_uid: Array<string>;
    /** A list of video categories to show videos from. */
    a_video_category: Array<string>;
    /** A list of video tags to show videos for. */
    a_video_tag: Array<string>;
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The filter phrase to filter videos by name. */
    text_search: string;
    /** Page to return. */
    i_page?: number | null;
    /** Sort order ID. One of [SortOrderSid](#/components/schemas/Core.Sid.SortOrderSid) constants. `null... */
    id_order?: number | null;
    /** The sorting type. */
    id_sort?: number | null;
    /** UID of the client who request list of videos. */
    uid?: string | null;
}
export interface WlVideoVideoListGetResponse {
    a_list: Array<{
        a_staff: {
            uid_staff: string;
            text_name: string;
            k_staff: string;
        };
        a_video_category: {
            k_video_category: string;
            text_title: string;
        };
        a_video_tag: {
            k_video_tag: string;
            text_title: string;
        };
        dtl_publish: string | null;
        dtl_unpublish: string | null;
        dtl_upload: string;
        html_description: string;
        i_calorie: number;
        i_current_percent: number;
        i_current_time: number;
        i_duration: number;
        i_watch: number;
        id_source: number;
        is_calorie: boolean;
        is_converted: boolean;
        is_published: boolean;
        is_video_level: boolean;
        k_business: string;
        k_video: string;
        k_video_binary: string;
        k_video_level: string | null;
        show_calorie: boolean;
        show_level: boolean;
        show_view: boolean;
        text_level_title: string;
        text_title: string;
        url_thumbnail: string | null;
        url_video: string | null;
    }>;
    a_page: Array<{
        'is-next'?: boolean;
        'is-previous'?: boolean;
        'is-selected'?: boolean;
        page: number;
        skip?: boolean;
    }>;
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** List of possible sort order. */
    id_order: number | null;
    /** List of video catalog sorting types. */
    id_sort: number | null;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
}
export interface WlVideoVideoListPutParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlVideoVideoListPutResponse {
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
}
export interface WlFitbuilderMessageParams {
    /** Messenger channel key. */
    k_channel: string;
}
export type WlFitbuilderMessageResponse = Record<string, unknown>;
export interface WlMailSendMailParams {
    /** The business key. */
    k_business: string;
}
export type WlMailSendMailResponse = Record<string, unknown>;
export interface WlStaffStaffElementParams {
    /** The key of the staff member resolved and used internally by this API. */
    k_staff?: string | null;
}
export interface WlStaffStaffElementResponse {
    /** The key of the staff member resolved and used internally by this API. */
    k_staff: string | null;
}
export interface WlSkinSkinForeignDeleteParams {
    /** Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants. */
    id_skin: number;
    /** Key of the business. */
    k_business: string;
    /** Foreign skin key. */
    s_foreign_id: string;
}
export interface WlSkinSkinForeignDeleteResponse {
    /** Skin key. */
    k_skin: string;
}
export interface WlSkinSkinForeignPostParams {
    /** Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants. */
    id_skin: number;
    /** Key of the business. */
    k_business: string;
    /** Foreign skin key. */
    s_foreign_id: string;
}
export interface WlSkinSkinForeignPostResponse {
    /** Skin key. */
    k_skin: string;
}
export interface WlSkinSkinForeignPutParams {
    /** Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants. */
    id_skin: number;
    /** Key of the business. */
    k_business: string;
    /** Foreign skin key. */
    s_foreign_id: string;
}
export interface WlSkinSkinForeignPutResponse {
    /** Skin key. */
    k_skin: string;
}
export interface WlTagTagListGetParams {
    /** The business key of the tags. */
    k_business: string;
}
export interface WlTagTagListGetResponse {
    a_list: Array<{
        i_sort: number;
        k_tag: string;
        text_title: string;
    }>;
    /** Whether a business did set up a penalty fee for failed automatic payments. */
    has_fee: boolean;
    /** Whether a business did set up surcharges. */
    has_surcharge: boolean;
}
export interface WlTagTagListPostParams {
    /** The business key of the tags. */
    k_business: string;
}
export interface WlTagTagListPostResponse {
    a_list: Array<{
        i_sort: number;
        k_tag: string;
        text_title: string;
    }>;
}
export interface WlTaxTaxParams {
    /** The tax key to get information for. */
    k_tax: string;
}
export interface WlTaxTaxResponse {
    /** The tax title. */
    text_tax: string;
}
export interface WlTaxTaxListParams {
    /** The key of the business for which to get a list of taxes. */
    k_business: string;
}
export interface WlTaxTaxListResponse {
    a_list: Array<{
        f_value: number;
        k_tax: string;
        text_title: string;
    }>;
}
export type WlReviewReviewParams = Record<string, unknown>;
export interface WlReviewReviewResponse {
    /** Reward score for leaving a review. */
    i_score: number;
    /** Reward score for sharing a review on Facebook. */
    i_score_facebook: number;
    /** Reward score for sharing a review on Twitter. */
    i_score_twitter: number;
    /** If a reward score for leaving a review exists. */
    is_score: boolean;
    /** If a reward score for sharing a review on Facebook exists. */
    is_score_facebook: boolean;
    /** If a reward score for sharing a review on Twitter exists. */
    is_score_twitter: boolean;
    /** If a reward score for sharing exists. */
    is_share_points: boolean;
    /** If a reward score does not exist for leaving a review or sharing the review. */
    is_share_points_none: boolean;
    /** The key of the review writing activity. This will be empty if the review was saved but not publis... */
    k_login_activity: string;
    /** Review key. */
    k_review: string;
    /** The UID of client who leaves review. */
    uid: string;
    /** The sharing url of the review. */
    url_share: string;
}
export type WlReviewReviewFeatureParams = Record<string, unknown>;
export type WlReviewReviewFeatureResponse = Record<string, unknown>;
export type WlReviewReviewReplyParams = Record<string, unknown>;
export type WlReviewReviewReplyResponse = Record<string, unknown>;
export interface WlRankRankParams {
    /** Rank category keys. Used to filter belts by belt categories. */
    a_rank_category: Array<string>;
    /** Business key. */
    k_business: string;
}
export interface WlRankRankResponse {
    a_rank_list: Array<{
        k_rank: string;
        k_rank_category: string;
        text_rank: string;
        text_rank_category: string;
    }>;
}
export interface WlHolidayHolidayParams {
    /** The date working hours are required for. */
    dl_work: string;
    /** The business key. */
    k_business: string;
}
export interface WlHolidayHolidayResponse {
    /** A list of the location's closed day titles by location keys on the date `dl_work`. */
    a_location_holiday: Array<string>;
    /** `true` if the business has a closed day on the date `dl_work`, `false` if otherwise. */
    is_business_holiday: boolean;
    /** The message used for the business's closed day on the date `dl_work`. */
    text_business_title: string;
}
export interface WlHolidayBulkBusinessHolidayParams {
    /** The business key. */
    k_business: string;
}
export interface WlHolidayBulkBusinessHolidayResponse {
    a_business_holidays: Array<{
        a_class: Array<boolean>;
        a_class_only: Array<boolean>;
        a_event_only: Array<boolean>;
        dt_end: string;
        dt_start: string;
        is_class_all: number;
        is_event_all: number;
        is_service_all: number;
        k_business: string;
        k_holiday: string;
        k_location: string;
        k_market: string;
        s_title: string;
    }>;
}
export interface ThothWlPayAccountChargeChargeParams {
    /** The account charge mode. */
    id_pay_account_charge: number;
    /** If `true`, the account is filled by a staff member in the backend. Otherwise, this will be `false`. */
    is_staff: boolean;
    /** The ID of the business the user account belongs to. */
    k_business: string;
    /** The ID of the user account to refill. */
    k_pay_account: string;
    /** The ID of the user whose account is being refilled. */
    uid: string;
}
export type ThothWlPayAccountChargeChargeResponse = Record<string, unknown>;
export interface ThothWlPayTransactionReportTransactionAllPaymentParams {
    /** The end date in local time to retrieve transactions for. */
    dl_date_end: string;
    /** The end date in local time to retrieve transactions for. */
    dl_date_start: string;
    /** The page of the report, starting from 0. */
    i_page: number;
    /** Determines whether the report should be refreshed. */
    is_refresh: boolean;
    /** The key of the business for which report should be generated. */
    k_business: string;
}
export interface ThothWlPayTransactionReportTransactionAllPaymentResponse {
    /** A list of fields in the report. */
    a_field: Array<string>;
    /** The report data. */
    a_row: Array<unknown>;
    /** The warning list of the report. */
    a_warning: Array<string>;
    /** The date and time if the report has completed generation. Otherwise, this will be `null`. */
    dtu_complete: string | null;
    /** The date and time if this report has been put in the generation queue. Otherwise, this will be `n... */
    dtu_queue: string | null;
    /** The date and time if generation of this report has started. Otherwise, this will be `null`. */
    dtu_start: string | null;
    /** Lists statuses of reports from point of view of its generation. */
    id_report_status: number;
    /** Determines whether to show more rows in the report. */
    is_more: boolean;
    /** Determines whether the report is complete. */
    is_report_complete: boolean;
}
export interface ThothWlPayBankCardListParams {
    /** ID of current business. */
    k_business: string;
    /** Location to show information for. */
    k_location: string;
    /** ID of a user to show information for. */
    uid: string;
}
export interface ThothWlPayBankCardListResponse {
    a_bank_card: Array<{
        i_month: number;
        i_year: number;
        id_card_system: number;
        is_default: boolean;
        k_pay_address: string;
        k_pay_bank: string;
        text_name_card: string;
        text_name_holder: string;
        text_number: string;
    }>;
    /** List of bank cards. */
    a_list: Array<unknown>;
    /** Whether new card can be added. */
    can_add: boolean;
}
export interface CoreDriveImageUploadImageUploadGetParams {
    /** Allows to give custom parameters which can be required for different types of images. */
    a_config: Array<unknown>;
    /** If `true`, the temporary image will be retrieved. Otherwise, this will be `false`. */
    is_temporary: boolean;
    /** The image ID set in `s_class`. */
    k_id: string;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadGetResponse {
    a_text_empty: Array<{
        s_class: string;
        s_text: string;
    }> | null;
    /** An HTML string to use for the image recommendation. */
    html_image_hint: string;
    /** The maximum height of image. */
    i_height_max: number | null;
    /** The minimum height of image. */
    i_height_min: number | null;
    /** The height of the thumbnail image. */
    i_thumbnail_height: number | null;
    /** The width of the thumbnail image. */
    i_thumbnail_width: number | null;
    /** The maximum width of the image. */
    i_width_max: number | null;
    /** The minimum width of the image. */
    i_width_min: number | null;
    /** If `true`, the image is treated as circular. Otherwise, this will be `false`. */
    is_circular: boolean | null;
    /** If `true`, image deletion is permitted. Otherwise, this will be `false`. */
    is_delete_allow: boolean | null;
    /** The link protection code. */
    s_code: string | null;
    /** The image link. */
    s_link: string | null;
    /** The image URL that should be displayed in cases where no image is uploaded. */
    url_empty: string | null;
    /** The thumbnail URL of the image. */
    url_thumbnail: string | null;
    /** The script URL where new image should be uploaded from. */
    url_upload: string | null;
    /** The URL of the full image. */
    url_view: string | null;
}
export interface CoreDriveImageUploadImageUploadPostParams {
    /** Allows to give custom parameters which can be required for different types of images. */
    a_config: Array<unknown>;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadPostResponse {
    a_image: Array<{
        a_text_empty: {
            s_class: string;
            s_text: string;
        };
        i_height_max: number;
        i_height_min: number;
        i_thumbnail_height: number;
        i_thumbnail_width: number;
        i_width_max: number;
        i_width_min: number;
        is_circular: boolean;
        is_delete_allow: boolean;
        s_link: string;
        url_empty: string;
        url_thumbnail: string | null;
        url_upload: string;
        url_view: string | null;
    }>;
}
export interface CoreDriveImageUploadImageUploadPutParams {
    /** Allows to give custom parameters which can be required for different types of images. */
    a_config: Array<unknown>;
    /** If `true`, the temporary image will be retrieved. Otherwise, this will be `false`. */
    is_temporary: boolean;
    /** The image ID set in `s_class`. */
    k_id: string;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadPutResponse {
    a_text_empty: Array<{
        s_class: string;
        s_text: string;
    }> | null;
    /** An HTML string to use for the image recommendation. */
    html_image_hint: string;
    /** The maximum height of image. */
    i_height_max: number | null;
    /** The minimum height of image. */
    i_height_min: number | null;
    /** The height of the thumbnail image. */
    i_thumbnail_height: number | null;
    /** The width of the thumbnail image. */
    i_thumbnail_width: number | null;
    /** The maximum width of the image. */
    i_width_max: number | null;
    /** The minimum width of the image. */
    i_width_min: number | null;
    /** If `true`, the image is treated as circular. Otherwise, this will be `false`. */
    is_circular: boolean | null;
    /** If `true`, image deletion is permitted. Otherwise, this will be `false`. */
    is_delete_allow: boolean | null;
    /** The link protection code. */
    s_code: string | null;
    /** The image link. */
    s_link: string | null;
    /** The image URL that should be displayed in cases where no image is uploaded. */
    url_empty: string | null;
    /** The thumbnail URL of the image. */
    url_thumbnail: string | null;
    /** The script URL where new image should be uploaded from. */
    url_upload: string | null;
    /** The URL of the full image. */
    url_view: string | null;
}
export interface CoreDriveImageUploadImageUploadTemporaryParams {
    /** The key of the image within `s_class`. */
    k_id: string;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadTemporaryResponse {
    /** If `true`, a crop is used. Otherwise, this will be `false` if a crop isn't used (the image is sav... */
    has_crop: boolean;
    /** The actual height of the thumbnail image. */
    i_height: number;
    /** The height of the original image. */
    i_height_src: number;
    /** The angle of the image rotation compared to the original. */
    i_rotate: number;
    /** The actual width of the thumbnail image. */
    i_width: number;
    /** The width of the original image. */
    i_width_src: number;
    /** List of image types. */
    id_type_src: number;
    /** If `true`, the thumbnail is a resized variant of the original image. */
    is_resize: boolean;
    /** The URL to the resized and rotated image in file storage. */
    url_thumbnail: string;
    /** The URL to the original image in file storage. */
    url_view: string;
}
export interface CoreRequestApiKeySecretParams {
    /** The CSRF code from the client side. */
    s_csrf: string;
    /** The session key. */
    s_key_session: string;
    /** Alias of `url_origin`. */
    url_domain: string;
    /** Origin for client requests. */
    url_origin: string;
}
export interface CoreRequestApiKeySecretResponse {
    /** The secret key for the request signing. */
    s_key_secret: string;
}
export interface CoreRequestTokenTokenPinParams {
    /** The ID to use to send a security code via a push notification. */
    text_push: string;
}
export interface CoreRequestTokenTokenPinResponse {
    /** The expiration date/time of the PIN code. */
    dtu_expire: string;
    /** The PIN code. */
    text_pin: string;
}
export interface CoreGeoRegionRegionParams {
    /** The locale ID to find regions for. One of the [LocaleSid](#/components/schemas/Core.Locale.Locale... */
    id_locale: number | null;
    /** Determines whether to get regions for all locales. */
    is_locale_all: boolean;
}
export interface CoreGeoRegionRegionResponse {
    a_region: Array<{
        a_region: {
            k_geo: string;
            s_title: string;
        };
        id_locale: number | null;
        k_geo_country: string;
        s_abbr: string;
        s_title: string;
    }>;
}
export type CoreGoogleCaptchaGoogleCaptchaParams = Record<string, unknown>;
export type CoreGoogleCaptchaGoogleCaptchaResponse = Record<string, unknown>;
export type CoreGoogleCaptchaCaptchaScoreGetParams = Record<string, unknown>;
export interface CoreGoogleCaptchaCaptchaScoreGetResponse {
    /** Overridden score value for V3 captcha. */
    f_score: number | null;
}
export interface CoreGoogleCaptchaCaptchaScorePostParams {
    /** The user token CAPTCHA from [CaptchaVersionSid::V3](#/components/schemas/Core.Google.Captcha.Capt... */
    text_token: string;
}
export interface CoreGoogleCaptchaCaptchaScorePostResponse {
    /** List of responses for Google Captcha token. */
    id_response: number;
}
export type CoreGoogleCaptchaCaptchaScorePutParams = Record<string, unknown>;
export type CoreGoogleCaptchaCaptchaScorePutResponse = Record<string, unknown>;
export type CorePassportLoginInfoParams = Record<string, unknown>;
export interface CorePassportLoginInfoResponse {
    /** The current user key. */
    uid: string | null;
    /** A URL that a user can visit to reset their password. */
    url_password_change: string;
    /** The URL to the registration page. */
    url_register: string;
}
export interface CorePassportChangePasswordChangePasswordApplyParams {
    /** The verification code, which can be obtained from the "reset password" email link. This is a requ... */
    text_code: string;
    /** The user's login, which can be obtained from the "reset password" email link. This is a required ... */
    text_login: string;
    /** The user's email address, which can be obtained from the "reset password" email link. This is a r... */
    text_mail: string;
}
export type CorePassportChangePasswordChangePasswordApplyResponse = Record<string, unknown>;
export type CorePassportChangePasswordChangePasswordBeginParams = Record<string, unknown>;
export interface CorePassportChangePasswordChangePasswordBeginResponse {
    /** The error code. This will be an empty string if the email has been sent successfully. */
    text_error: string;
}
export type SocialAppleLoginAppleLoginDeleteParams = Record<string, unknown>;
export type SocialAppleLoginAppleLoginDeleteResponse = Record<string, unknown>;
export type SocialAppleLoginAppleLoginPostParams = Record<string, unknown>;
export type SocialAppleLoginAppleLoginPostResponse = Record<string, unknown>;
export type SocialFacebookLoginLoginParams = Record<string, unknown>;
export type SocialFacebookLoginLoginResponse = Record<string, unknown>;
export type SocialGooglePlusLoginParams = Record<string, unknown>;
export type SocialGooglePlusLoginResponse = Record<string, unknown>;
export type WlScheduleClassListClassList68Params = Record<string, unknown>;
export interface WlScheduleClassListClassList68Response {
    /** Keys are dates of the days inside requested date range, when there is at least one class in the b... */
    a_calendar: Array<string>;
    a_quick: Array<{
        text_type: string;
        k_class: string;
        s_class: string;
        i_class: number;
    }>;
    a_session: Array<{
        a_class_tab: Array<string>;
        a_image: Array<string>;
        a_search_tag: Array<string>;
        a_staff: Array<string>;
        a_staff_uid: Array<string>;
        a_virtual_location: Array<string>;
        dt_date: string;
        dt_time: string;
        dtl_date: string;
        hide_application: boolean;
        html_description: string;
        i_book: number;
        i_capacity: number | null;
        i_day: number;
        i_duration: number;
        i_wait: number;
        is_book_for_guest: boolean;
        is_cancel: boolean;
        is_event: boolean;
        is_virtual: boolean;
        is_wait_list_enabled: boolean;
        k_class: string;
        k_class_period: string;
        k_location: string;
        k_resource_location: string;
        s_title: string;
        url_book: string;
    }>;
    /** If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will... */
    is_timezone_different: boolean;
    /** If `true`, there exists at least one virtual service by a specified */
    is_virtual_service: boolean;
}
export interface WlScheduleClassListClassListParams {
    /** The list of classes keys to filter. */
    a_class: Array<string>;
    /** Class filter by day of the week. */
    a_day: Array<number>;
    /** The list of location keys to filter results. */
    a_location: Array<string>;
    /** Class filter by time of day. */
    a_time: Array<{
        tl_start: string;
        tl_end: string;
    }>;
    /** The list start date in UTC and in MySQL format. */
    dt_date: string;
    /** The list end date in UTC and in MySQL format. */
    dt_end: string;
    /** `true` means to not generate `a_session` result. */
    is_response_short: boolean;
    /** If `true`, sessions from every class tab are returned. If `false`, use the */
    is_tab_all: boolean;
    /** The business key. */
    k_business: string;
    /** The category tab key. */
    k_class_tab: string;
    /** The list of staff members to filter. */
    s_staff: string;
    /** The list of staff user keys to filter. */
    s_staff_uid: string;
    /** If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned. */
    show_cancel: boolean;
    /** If `true`, classes will be included in the response. `false` - otherwise. */
    show_class: boolean;
    /** If `true`, events are also returned. If `false`, only classes are returned. */
    show_event: boolean;
    /** The user key. */
    uid: string;
    /** Class filter by type. */
    is_virtual?: boolean | null;
}
export interface WlScheduleClassListClassListResponse {
    /** Keys are dates of the days inside requested date range, when there is at least one class in the b... */
    a_calendar: Array<string>;
    a_session: Array<{
        a_class_tab: Array<string>;
        a_image: Array<string>;
        a_search_tag: Array<string>;
        a_staff: Array<string>;
        a_staff_uid: Array<string>;
        a_virtual_location: Array<string>;
        dt_date: string;
        dt_time: string;
        dtl_date: string;
        hide_application: boolean;
        html_description: string;
        i_book: number;
        i_capacity: number | null;
        i_day: number;
        i_duration: number;
        i_wait: number;
        is_book_for_guest: boolean;
        is_cancel: boolean;
        is_event: boolean;
        is_virtual: boolean;
        is_wait_list_enabled: boolean;
        k_class: string;
        k_class_period: string;
        k_location: string;
        s_title: string;
        url_book: string;
    }>;
    /** If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will... */
    is_timezone_different: boolean;
    /** If `true`, there exists at least one virtual service by a specified */
    is_virtual_service: boolean;
}
export interface WlScheduleTabTabParams {
    /** Whether we are inside the widget or not. */
    is_widget: boolean;
    /** The key of the current business. */
    k_business: string;
    /** The key of the current location. */
    k_location: string;
    /** The key of the current user. */
    uid: string;
}
export interface WlScheduleTabTabResponse {
    a_tab: Array<{
        id_class_tab_object: number;
        id_class_tab_system: number;
        k_class_tab: string | null;
        k_id: string;
        s_title: string;
    }>;
}
export interface WlScheduleClassViewClassViewGetParams {
    /** The date/time of the session. */
    dt_date: string;
    /** The class period key. */
    k_class_period: string;
    /** The user key. */
    uid: string;
    /** A list of sessions to get information for. Every element has the following keys: */
    a_session_request?: Array<{
        dt_date: string;
        k_class_period: string;
    }> | null;
    /** Key of the business in which the action is performed. */
    k_business?: string | null;
}
export interface WlScheduleClassViewClassViewGetResponse {
    a_asset: Array<{
        i_count: number;
        i_index: number;
        id_category: string;
        k_city: string;
        k_resource: string;
        text_address: string;
        text_guide: string;
        text_index: string;
        text_postal: string;
        text_name: string;
    }> | null;
    a_class: Array<{
        a_class_tab: Array<string>;
        a_image: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_search_tag: {
            k_search_tag: string;
            text_title: string;
        };
        a_tag: Array<number>;
        can_book: boolean;
        dt_date_global: string;
        dt_date_local: string;
        html_deny_reason: string;
        html_description: string;
        html_special: string;
        text_timezone: string;
        i_age_from: number | null;
        i_age_to: number | null;
        i_book: number;
        i_book_active: number;
        i_capacity: number;
        i_duration: number;
        i_wait_limit: number | null;
        id_deny_reason: number;
        is_book: boolean;
        is_book_for_guest: boolean;
        is_cancel: boolean;
        is_event: boolean;
        is_promotion_only: boolean;
        is_virtual: boolean;
        is_wait_list: boolean;
        is_wait_list_enabled: boolean;
        k_resource_location: string;
        m_price: string;
        s_duration: string;
        s_title: string;
        text_room: string;
    }> | null;
    a_location: Array<{
        f_latitude: number;
        f_longitude: number;
        f_rate: number;
        k_location: string;
        s_address: string;
        s_map: string;
        s_phone: string;
        s_title: string;
    }> | null;
    a_session_result: Array<{
        a_asset: {
            i_count: number;
            i_index: number;
            id_category: string;
            k_city: string;
            k_resource: string;
            text_address: string;
            text_guide: string;
            text_index: string;
            text_postal: string;
            text_name: string;
        };
        a_class: {
            a_class_tab: Array<string>;
            a_image: Record<string, unknown>;
            a_search_tag: Record<string, unknown>;
            a_tag: Array<number>;
            can_book: boolean;
            dt_date_global: string;
            dt_date_local: string;
            html_deny_reason: string;
            html_description: string;
            html_special: string;
            text_timezone: string;
            i_age_from: number | null;
            i_age_to: number | null;
            i_book: number;
            i_book_active: number;
            i_capacity: number;
            i_duration: number;
            i_wait_limit: number | null;
            id_deny_reason: number;
            is_book: boolean;
            is_book_for_guest: boolean;
            is_cancel: boolean;
            is_event: boolean;
            is_promotion_only: boolean;
            is_virtual: boolean;
            is_wait_list: boolean;
            is_wait_list_enabled: boolean;
            k_resource_location: string;
            m_price: string;
            s_duration: string;
            s_title: string;
            text_room: string;
        };
        a_location: {
            f_latitude: number;
            f_longitude: number;
            f_rate: number;
            k_location: string;
            s_address: string;
            s_map: string;
            s_phone: string;
            s_title: string;
        };
        a_staff: {
            a_logo: Record<string, unknown>;
            is_quick_substitute: boolean;
            is_substitute: boolean;
            k_staff: string;
            uid_staff: string;
            s_family: string;
            s_name: string;
        };
        a_virtual_location: Array<string>;
        a_visits_required: {
            i_count: number;
            is_event: boolean;
            k_class: string;
            text_title: string;
        };
    }>;
    a_staff: Array<{
        a_logo: {
            id_gender: number;
            is_empty: boolean;
            s_url: string;
        };
        is_quick_substitute: boolean;
        is_substitute: boolean;
        k_staff: string;
        uid_staff: string;
        s_family: string;
        s_name: string;
    }> | null;
    /** List of other locations where virtual class can be booked. */
    a_virtual_location: Array<string>;
    a_visits_required: Array<{
        i_count: number;
        is_event: boolean;
        k_class: string;
        text_title: string;
    }>;
}
export interface WlScheduleClassViewClassViewPostParams {
    /** The date/time of the session. */
    dt_date: string;
    /** The class period key. */
    k_class_period: string;
    /** The user key. */
    uid: string;
    /** A list of sessions to get information for. Every element has the following keys: */
    a_session_request?: Array<{
        dt_date: string;
        k_class_period: string;
    }> | null;
    /** Key of the business in which the action is performed. */
    k_business?: string | null;
}
export interface WlScheduleClassViewClassViewPostResponse {
    a_asset: Array<{
        i_count: number;
        i_index: number;
        id_category: string;
        k_city: string;
        k_resource: string;
        text_address: string;
        text_guide: string;
        text_index: string;
        text_postal: string;
        text_name: string;
    }> | null;
    a_class: Array<{
        a_class_tab: Array<string>;
        a_image: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_search_tag: {
            k_search_tag: string;
            text_title: string;
        };
        a_tag: Array<number>;
        can_book: boolean;
        dt_date_global: string;
        dt_date_local: string;
        html_deny_reason: string;
        html_description: string;
        html_special: string;
        text_timezone: string;
        i_age_from: number | null;
        i_age_to: number | null;
        i_book: number;
        i_book_active: number;
        i_capacity: number;
        i_duration: number;
        i_wait_limit: number | null;
        id_deny_reason: number;
        is_book: boolean;
        is_book_for_guest: boolean;
        is_cancel: boolean;
        is_event: boolean;
        is_promotion_only: boolean;
        is_virtual: boolean;
        is_wait_list: boolean;
        is_wait_list_enabled: boolean;
        k_resource_location: string;
        m_price: string;
        s_duration: string;
        s_title: string;
        text_room: string;
    }> | null;
    a_location: Array<{
        f_latitude: number;
        f_longitude: number;
        f_rate: number;
        k_location: string;
        s_address: string;
        s_map: string;
        s_phone: string;
        s_title: string;
    }> | null;
    a_session_result: Array<{
        a_asset: {
            i_count: number;
            i_index: number;
            id_category: string;
            k_city: string;
            k_resource: string;
            text_address: string;
            text_guide: string;
            text_index: string;
            text_postal: string;
            text_name: string;
        };
        a_class: {
            a_class_tab: Array<string>;
            a_image: Record<string, unknown>;
            a_search_tag: Record<string, unknown>;
            a_tag: Array<number>;
            can_book: boolean;
            dt_date_global: string;
            dt_date_local: string;
            html_deny_reason: string;
            html_description: string;
            html_special: string;
            text_timezone: string;
            i_age_from: number | null;
            i_age_to: number | null;
            i_book: number;
            i_book_active: number;
            i_capacity: number;
            i_duration: number;
            i_wait_limit: number | null;
            id_deny_reason: number;
            is_book: boolean;
            is_book_for_guest: boolean;
            is_cancel: boolean;
            is_event: boolean;
            is_promotion_only: boolean;
            is_virtual: boolean;
            is_wait_list: boolean;
            is_wait_list_enabled: boolean;
            k_resource_location: string;
            m_price: string;
            s_duration: string;
            s_title: string;
            text_room: string;
        };
        a_location: {
            f_latitude: number;
            f_longitude: number;
            f_rate: number;
            k_location: string;
            s_address: string;
            s_map: string;
            s_phone: string;
            s_title: string;
        };
        a_staff: {
            a_logo: Record<string, unknown>;
            is_quick_substitute: boolean;
            is_substitute: boolean;
            k_staff: string;
            uid_staff: string;
            s_family: string;
            s_name: string;
        };
        a_virtual_location: Array<string>;
        a_visits_required: {
            i_count: number;
            is_event: boolean;
            k_class: string;
            text_title: string;
        };
    }>;
    a_staff: Array<{
        a_logo: {
            id_gender: number;
            is_empty: boolean;
            s_url: string;
        };
        is_quick_substitute: boolean;
        is_substitute: boolean;
        k_staff: string;
        uid_staff: string;
        s_family: string;
        s_name: string;
    }> | null;
    /** List of other locations where virtual class can be booked. */
    a_virtual_location: Array<string>;
}
export interface WlSchedulePagePageElementParams {
    /** Key of the business to which the visit belongs. */
    k_business: string;
    /** Visit key. */
    k_visit: string;
}
export interface WlSchedulePagePageElementResponse {
    a_appointment_visit_info: Array<{
        id_visit: number;
        is_confirmed: boolean;
        is_deny: boolean;
        is_notify_request_accept: boolean;
        is_notify_request_deny: boolean;
        is_request: boolean;
    }>;
    a_asset: Array<{
        s_name: string;
        i_count: string;
    }>;
    a_class_info: Array<{
        i_book_active: number;
        i_capacity: number;
        i_wait: number;
    }> | null;
    a_resource_image: Array<{
        a_image: {
            i_height: number;
            i_height_src: number;
            i_rotate: number;
            i_width: number;
            i_width_src: number;
            'is-resize': boolean;
            'url-view': string;
            'url-thumbnail': string;
        };
        i_angle?: number;
        i_height: number;
        i_width: number;
        is_empty: boolean;
        k_resource: string;
        sid_image: string;
        sid_image_icon: string;
        sid_image_shape: string;
        url: string;
    }> | null;
    a_staff: Array<{
        k_staff: string;
        s_family: string;
        s_name: string;
    }>;
    /** The latest date and time for when the visit can be canceled without penalty. */
    dt_cancel: string;
    /** The date and time of the visit in UTC. */
    dt_date_global: string;
    /** The date and time of the visit in the local time zone. */
    dt_date_local: string;
    /** Session date/time in timezone of the location where it takes place. */
    dtl_location: string;
    /** The description of the service. */
    html_description: string;
    /** The special instructions for the service. */
    html_special: string;
    /** Capacity of the service. */
    i_capacity: number | null;
    /** The scheduled duration of the visit. */
    i_duration: number;
    /** Estimated place of reservation on the waiting list. */
    i_wait_spot: number;
    /** A list of types of visit note. */
    id_note: number | null;
    /** List of possible value of virtual integrations. */
    id_virtual_provider: number | null;
    /** Possible states of the visit: book, attended, cancelled, etc. */
    id_visit: number;
    /** If `true`, then this visit is ready to be checked in. If `false`, then this visit can't be checke... */
    is_checkin: boolean;
    /** This will be `true` if clients can cancel the session. Otherwise, this will be `false`. */
    is_enable_client_cancel: boolean;
    /** If `true`, then this visit is a part of a larger event. If `false`, then this visit is an individ... */
    is_event: boolean;
    /** `true` - service is in progress; `false` - otherwise. */
    is_in_progress: boolean;
    /** `true` - service is virtual; `false` - otherwise. */
    is_virtual: boolean;
    /** The appointment key. */
    k_appointment: string | null;
    /** The class key. This will be set only if the visit is a class or an event. */
    k_class: string | null;
    /** The class period key. This will be set only if the visit is a class or an event. */
    k_class_period: string | null;
    /** The location key. */
    k_location: string;
    /** Resource key. */
    k_resource: string | null;
    /** Session key. */
    k_service: string | null;
    /** The name of class or service. */
    s_title: string;
    /** Location title. */
    text_location: string;
    /** Room where session takes place. */
    text_room: string;
    /** Timezone abbreviation. */
    text_timezone: string;
    /** The user key. */
    uid: string;
    /** URL of the image representing the service or resource. */
    url_image: string;
    /** Url to wait page is the beginning of an online service. */
    url_virtual_join: string;
}
export interface WlSchedulePagePageListParams {
    /** If `true`, then all the client previous visits will be retrieved. */
    is_past: boolean;
    /** The business key. */
    k_business: string;
    /** If the date is set, a list of services before this date will be returned. */
    dtu_end?: string | null;
    /** If the date is set, a list of services after this date will be returned. */
    dtu_start?: string | null;
    /** The user key. */
    uid?: string | null;
}
export interface WlSchedulePagePageListResponse {
    a_visit: Array<{
        dtu_date: string;
        k_business: string;
        k_visit: string;
        id_visit: number;
    }>;
}
export interface WlAppointmentEditAddonUpdateGetParams {
    /** List of user keys to get add-ons for. Not empty only when getting add-ons for new appointment */
    a_uid: Array<string>;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. This will be an empty string if not set yet. */
    k_business: string;
    /** Location key. */
    k_location: string;
    /** Service key. */
    k_service: string;
}
export interface WlAppointmentEditAddonUpdateGetResponse {
    a_addon_data: Array<{
        a_addon: {
            html_amount: string;
            html_duration: string;
            html_title: string;
            i_count_banked: number;
            i_count_paid: number;
            i_count_unpaid: number;
            i_count_use: number;
            i_product: number;
            is_disable: boolean;
        };
        a_addon_buy: {
            html_amount: string;
            html_duration: string;
            html_title: string;
            i_count_banked: number;
            i_count_paid: number;
            i_count_unpaid: number;
            i_count_use: number;
            i_product: number;
            is_disable: boolean;
        };
        a_addon_own: {
            html_amount: string;
            html_duration: string;
            html_title: string;
            i_count_banked: number;
            i_count_paid: number;
            i_count_unpaid: number;
            i_count_use: number;
            i_product: number;
            is_disable: boolean;
        };
        a_addon_select: {
            html_amount: string;
            html_duration: string;
            html_title: string;
            i_count_banked: number;
            i_count_paid: number;
            i_count_unpaid: number;
            i_count_use: number;
            i_product: number;
            is_disable: boolean;
        };
        is_addon_banking: boolean;
        is_all_addon_selected: boolean;
        is_search: boolean;
    }>;
}
export interface WlAppointmentEditAddonUpdatePutParams {
    /** The appointment key. */
    k_appointment: string;
    /** The business key. This will be an empty string if not set yet. */
    k_business: string;
}
export type WlAppointmentEditAddonUpdatePutResponse = Record<string, unknown>;
export interface WlAppointmentInfoInfoParams {
    /** Class identifier to get information for. */
    k_appointment: string;
}
export interface WlAppointmentInfoInfoResponse {
    a_next: Array<{
        dt_date_local: string;
        has_note: boolean;
        i_duration: number;
        can_view: boolean;
        k_appointment: string;
        k_visit: string;
        text_appointment_title: string;
        text_staff_name: string;
    }>;
    a_previous: Array<{
        dt_date_local: string;
        has_note: boolean;
        i_duration: number;
        can_view: boolean;
        k_appointment: string;
        k_visit: string;
        text_appointment_title: string;
        text_staff_name: string;
    }>;
    a_question: Array<{
        i_size: number;
        is_multiple: boolean;
        s_answer: string;
        s_key: string;
        s_question: string;
    }>;
    a_resource: Array<{
        i_color_background: number;
        i_color_border: number;
        i_index: number;
        is_remove: boolean;
        k_resource: string;
        k_resource_type: string;
        s_resource: string;
        s_resource_type: string;
        text_resource_alias: string;
    }>;
    a_shop_product_option: Array<{
        a_login_product: {
            k_login_product: string;
        };
        k_login_product: string;
        k_shop_product: string;
        k_shop_product_option: string;
        m_amount: string;
    }>;
    /** Date/time of appointment in location timezone. */
    dt_date_local: string;
    /** Appointment duration (in minutes). */
    i_duration: number | null;
    /** Index of booked asset. */
    i_index: number | null;
    /** The possible payment types an appointment can have. */
    id_appointment_pay: number;
    /** Location key. */
    k_location: string;
    /** Purchased promotion which provides this appointment. */
    k_login_promotion: string | null;
    /** Asset key. */
    k_resource: string | null;
    /** Asset category key. */
    k_resource_type: string | null;
    /** Service key. */
    k_service: string | null;
    /** Service category key. */
    k_service_category: string | null;
    /** Purchased drop-in which provides this appointment. */
    k_session_pass: string | null;
    /** Staff member who conducts this appointment. */
    k_staff: string;
    /** Title of the appointment. */
    text_title: string;
    /** User for whom this appointment was booked. */
    uid_appointment: string;
    /** Staff member who conducts this appointment. */
    uid_staff: string | null;
}
export interface WlAppointmentRecentRecentServiceParams {
    /** Count of last booked services to return. Default value is 5. */
    i_visit: number;
    /** Type of service to return. One of [ServiceSid](#/components/schemas/Wl.Service.ServiceSid) consta... */
    id_service: number;
    /** The key of the business. */
    k_business: string;
    /** The key of the user. */
    uid: string;
}
export interface WlAppointmentRecentRecentServiceResponse {
    /** List of last booked services. */
    a_service_last: Array<string>;
}
export interface WlBookProcessProcessGroupParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
}
export interface WlBookProcessProcessGroupResponse {
    a_book_error: Array<{
        text_code: string;
        text_message: string;
    }>;
    /** Primary keys of users' activity that correspond to bookings made. */
    a_login_activity_book: Array<string>;
    /** Primary keys of bookings made. */
    a_visit: Array<string>;
    /** The key of the user's activity corresponding to the purchase made. */
    k_login_activity_purchase: string | null;
}
export interface WlBookProcessProcessParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessProcessResponse {
    /** Relationships who clients are allowed to book for. */
    a_family_relation_login_allow: Array<number> | null;
    a_path: Array<{
        id_book_process: number;
        is_current?: boolean;
    }>;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** `true` if this class has age restriction and requires user to specify age. `false` otherwise. */
    is_age_require: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** If `true`, the session being booked is an event. Otherwise, this will be `false`. */
    is_event: boolean;
    /** Determines whether clients are allowed to book for their relationships without switching profiles. */
    is_family_relation_book: boolean;
    /** Determines whether the class/event is free (price). */
    is_free: boolean;
    /** `true` if the client has an ach account, `false` otherwise. */
    is_have_ach: boolean;
    /** If `true`, the client has a credit card. Otherwise, this will be `false`. */
    is_have_credit_card: boolean;
    /** `true` - the client can select several sessions per booking. */
    is_session: boolean;
    /** If `true`, the user can be placed on a wait list. Otherwise, this will be `false`. */
    is_wait: boolean;
    /** If `true`, the user can be placed on a wait list without payment, `false` otherwise. */
    is_wait_list_unpaid: boolean;
    /** The key of the location where the session is booked. */
    k_location: string;
}
export interface WlBookProcessProcess54Params {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessProcess54Response {
    /** Relationships who clients are allowed to book for. */
    a_family_relation_login_allow: Array<number> | null;
    a_path: Array<{
        id_book_process: number;
        is_current?: boolean;
    }>;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** `true` if this class has age restriction and requires user to specify age. `false` otherwise. */
    is_age_require: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** If `true`, the session being booked is an event. Otherwise, this will be `false`. */
    is_event: boolean;
    /** Determines whether clients are allowed to book for their relationships without switching profiles. */
    is_family_relation_book: boolean;
    /** Determines whether the class/event is free (price). */
    is_free: boolean;
    /** `true` if the client has an ach account, `false` otherwise. */
    is_have_ach: boolean;
    /** If `true`, the client has a credit card. Otherwise, this will be `false`. */
    is_have_credit_card: boolean;
    /** `true` - the client can select several sessions per booking. */
    is_session: boolean;
    /** If `true`, the user can be placed on a wait list. Otherwise, this will be `false`. */
    is_wait: boolean;
    /** If `true`, the user can be placed on a wait list without payment, `false` otherwise. */
    is_wait_list_unpaid: boolean;
    /** The key of the location where the session is booked. */
    k_location: string;
}
export interface WlBookProcessProcess59Params {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessProcess59Response {
    /** Relationships who clients are allowed to book for. */
    a_family_relation_login_allow: Array<number> | null;
    a_path: Array<{
        id_book_process: number;
        is_current?: boolean;
    }>;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** `true` if this class has age restriction and requires user to specify age. `false` otherwise. */
    is_age_require: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** If `true`, the session being booked is an event. Otherwise, this will be `false`. */
    is_event: boolean;
    /** Determines whether clients are allowed to book for their relationships without switching profiles. */
    is_family_relation_book: boolean;
    /** Determines whether the class/event is free (price). */
    is_free: boolean;
    /** `true` if the client has an ach account, `false` otherwise. */
    is_have_ach: boolean;
    /** If `true`, the client has a credit card. Otherwise, this will be `false`. */
    is_have_credit_card: boolean;
    /** `true` - the client can select several sessions per booking. */
    is_session: boolean;
    /** If `true`, the user can be placed on a wait list. Otherwise, this will be `false`. */
    is_wait: boolean;
    /** If `true`, the user can be placed on a wait list without payment, `false` otherwise. */
    is_wait_list_unpaid: boolean;
    /** The key of the location where the session is booked. */
    k_location: string;
}
export interface WlBookCancelCancelCanParams {
    /** Key of the business within which the action is performed. */
    k_business: string;
    /** Visit key. */
    k_visit: string;
}
export interface WlBookCancelCancelCanResponse {
    a_penalty: Array<{
        is_flat: boolean;
        k_currency: string;
        m_amount: string;
    }> | null;
    /** `true` if the booking can be canceled online by the specified user, `false` otherwise. */
    can_cancel: boolean;
    /** `true` if the client's account will be flagged instead of charging a monetary fee, `false` otherw... */
    is_flag: boolean;
    /** `true` if the cancellation would be considered a late cancel, `false` otherwise. */
    is_late: boolean;
    /** `true` if the visit credit (from the purchase option used to book) will be returned */
    is_refund: boolean;
}
export interface WlLocationFlagFlagParams {
    /** The location key. */
    k_location: string;
    /** User keys. */
    a_uid?: Array<string> | null;
    /** The user's key. */
    uid?: string | null;
}
export interface WlLocationFlagFlagResponse {
    a_flag: Array<{
        uid: string;
        is_flag: boolean;
    }>;
    a_restrictions_multiple: Array<{
        is_book: boolean;
        is_purchase: boolean;
    }> | null;
    a_restrictions_single: Array<{
        is_book: boolean;
        is_purchase: boolean;
    }> | null;
    /** `true` if the user is flagged and can make purchases, but cannot make new reservations, `false` i... */
    is_flag: boolean;
}
export type WlLocationWorkTimeLocationWorkTimeParams = Record<string, unknown>;
export type WlLocationWorkTimeLocationWorkTimeResponse = Record<string, unknown>;
export interface WlLocationViewViewParams {
    /** Maximum location image height. */
    i_logo_height: number;
    /** Maximum location image width. */
    i_logo_width: number;
    /** The location key. */
    k_location: string;
}
export interface WlLocationViewViewResponse {
    /** A list of ages that are permitted for visiting this location. */
    a_age: Array<number>;
    /** A list of facilities that are available in this location. */
    a_amenities: Array<number>;
    /** A list of levels that are suitable for visiting this location. */
    a_level: Array<string>;
    a_logo: Array<{
        i_height: number;
        i_width: number;
        s_url: string;
    }>;
    a_slide: Array<{
        i_height: number;
        i_width: number;
        url_preview: string;
        url_slide: string;
    }>;
    a_work: Array<{
        s_end: string;
        s_start: string;
    }>;
    /** The latitude coordinate of the location. */
    f_latitude: number;
    /** The longitude coordinate of the location. */
    f_longitude: number;
    /** The full description of the location. */
    html_description_full: string;
    /** A shorter description of the location. A preview of `html_description_full`. */
    html_description_preview: string;
    /** List of different types for landing pages based on business types. */
    id_industry: number;
    /** `true` if to display phone number on location page. `false` otherwise. */
    is_phone: boolean;
    /** `true` if WellnessLiving identifies this is a top choice location, `false` otherwise. */
    is_top_choice: boolean;
    /** The key of the business this location belongs to. */
    k_business: string;
    /** The key of the business type this location belongs to. */
    k_business_type: string;
    /** The timezone. */
    k_timezone: string;
    /** The physical address of the location. */
    s_address: string;
    /** A string that can be used in navigator programs. */
    s_map: string;
    /** The phone number for the location. */
    s_phone: string;
    /** The system name of the time zone. */
    s_timezone: string;
    /** The title of the location. */
    s_title: string;
    /** The address of the location. */
    text_address_individual: string;
    /** The special system name, which can be used in custom location links. */
    text_alias: string;
    /** The name of the business type. */
    text_business_type: string;
    /** The city name of the location. */
    text_city: string;
    /** The country name of the location. */
    text_country: string;
    /** The name of the industry of the business. */
    text_industry: string;
    /** The email address. */
    text_mail: string;
    /** Postal code of the location. */
    text_postal: string;
    /** The region name of the location. */
    text_region: string;
    /** Region 2 or 3 letters abbreviation of the location. Can be empty, if abbreviation for region is n... */
    text_region_code: string;
    /** The Facebook URL of the location. */
    url_facebook: string;
    /** The Instagram URL of the location. */
    url_instagram: string;
    /** The Linked In URL of the location. */
    url_linkedin: string;
    /** The URL of the location in Google Maps. */
    url_map: string;
    /** The URL to the location entry in the WellnessLiving Explorer listing. */
    url_microsite: string;
    /** The website URL of the location. */
    url_site: string;
    /** The URL of the location's Twitter account. */
    url_twitter: string;
    /** The URL to the business's Client Web App. */
    url_web: string;
    /** The YouTube URL of the location. */
    url_youtube: string;
}
export interface WlLocationFacilityFacilitySidParams {
    /** Name of the Sid class to get list from. */
    s_class_name: string;
}
export interface WlLocationFacilityFacilitySidResponse {
    a_list: Array<{
        sid: number;
        text_title: string;
    }>;
}
export interface WlProfileEditEditGetParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
}
export interface WlProfileEditEditGetResponse {
    a_error_list: Array<{
        code: string;
        field: string;
        message: string;
    }> | null;
    a_phone_inherit: Array<{
        is_phone_inherit?: boolean;
        text_relative?: string;
        uid_relative: string;
    }>;
    a_structure: Array<{
        id_field_general?: number;
        is_require: boolean;
        id_field_type: number;
        k_field: string;
        s_title: string;
        x_value: string;
    }>;
    /** Whether current user can change password of the given user or not. */
    can_password_change: boolean;
    /** `true` if the A2P 10DLC registration feature is enabled for this business, `false` otherwise. */
    is_a2p: boolean;
    /** Whether the address be inherited. */
    is_address_inherit: boolean | null;
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Key of the lead source. */
    k_lead_source: string | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Error message. */
    text_message: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address: string | null;
}
export interface WlProfileEditEditPostParams {
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** Compound key delimited with a colon. First part is the business key where the selected client exi... */
    text_business_uid_key: string;
    /** The key of the user to edit. */
    uid: string;
    /** The UID of an existing user in another business to add to the current business. */
    uid_existed: string;
    /** UID of the user, whose email was inherited by the existing client we want to add. */
    uid_relative_key: string;
    /** ID of source mode. One of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode?: number;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export interface WlProfileEditEditPostResponse {
    a_error_list: Array<{
        code: string;
        field: string;
        message: string;
    }> | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Status of the request. */
    s_status: string | null;
    /** Error message. */
    text_message: string | null;
    /** The key of the user to edit. */
    uid: string;
}
export interface WlProfileEditEditPutParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export type WlProfileEditEditPutResponse = Record<string, unknown>;
export type WlProfileEditCreateParams = Record<string, unknown>;
export interface WlProfileEditCreateResponse {
    /** The key of the user added. */
    uid: string;
}
export interface WlProfileEditEditByTokenGetParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The security token. */
    text_token: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
}
export interface WlProfileEditEditByTokenGetResponse {
    a_error_list: Array<{
        code: string;
        field: string;
        message: string;
    }> | null;
    a_phone_inherit: Array<{
        is_phone_inherit?: boolean;
        text_relative?: string;
        uid_relative: string;
    }>;
    a_structure: Array<{
        id_field_general?: number;
        is_require: boolean;
        id_field_type: number;
        k_field: string;
        s_title: string;
        x_value: string;
    }>;
    /** Whether current user can change password of the given user or not. */
    can_password_change: boolean;
    /** `true` if the A2P 10DLC registration feature is enabled for this business, `false` otherwise. */
    is_a2p: boolean;
    /** Whether the address be inherited. */
    is_address_inherit: boolean | null;
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Key of the lead source. */
    k_lead_source: string | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Error message. */
    text_message: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address: string | null;
}
export interface WlProfileEditEditByTokenPostParams {
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** Compound key delimited with a colon. First part is the business key where the selected client exi... */
    text_business_uid_key: string;
    /** The key of the user to edit. */
    uid: string;
    /** The UID of an existing user in another business to add to the current business. */
    uid_existed: string;
    /** UID of the user, whose email was inherited by the existing client we want to add. */
    uid_relative_key: string;
    /** ID of source mode. One of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode?: number;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export interface WlProfileEditEditByTokenPostResponse {
    a_error_list: Array<{
        code: string;
        field: string;
        message: string;
    }> | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Status of the request. */
    s_status: string | null;
    /** Error message. */
    text_message: string | null;
    /** The key of the user to edit. */
    uid: string;
}
export interface WlProfileEditEditByTokenPutParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export type WlProfileEditEditByTokenPutResponse = Record<string, unknown>;
export type WlProfileEditEditPasswordParams = Record<string, unknown>;
export type WlProfileEditEditPasswordResponse = Record<string, unknown>;
export interface WlProfileAttachAttachListParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** Business key. */
    k_business: string;
    /** The filter phrase to filter attach by name. */
    text_search: string;
    /** Business key. */
    uid: string;
}
export interface WlProfileAttachAttachListResponse {
    a_list: Array<{
        dtu_create: string;
        dtu_edit: string;
        i_height: number | null;
        i_show_delete: number;
        i_width: number | null;
        id_preview: number;
        is_private: boolean;
        k_attach: string;
        k_business: string;
        k_quiz_response: string | null;
        text_description: string | null;
        text_filename: string;
        text_filesize: string;
        text_filetype: string;
        text_source: string;
        text_uploaded_by: string;
        text_uploaded_date: string;
        url_file: string;
        url_preview: string | null;
    }>;
}
export interface WlProfileAttachAttachElementDeleteParams {
    /** Attachment key. */
    k_attach: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export type WlProfileAttachAttachElementDeleteResponse = Record<string, unknown>;
export interface WlProfileAttachAttachElementGetParams {
    /** Attachment key. */
    k_attach: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlProfileAttachAttachElementGetResponse {
    /** Date and time of the creation. */
    dtu_create: string;
    /** Date and time of the last edit. */
    dtu_edit: string;
    /** Flag for showing a delete button. */
    s_show_delete: string;
    /** Attachment description. */
    text_description: string | null;
    /** Attachment file name. */
    text_filename: string | null;
    /** Attachment file size. */
    text_filesize: string;
    /** Attachment file type. */
    text_filetype: string;
    /** URL to get attachment file. */
    url_file: string;
    /** URL to get preview attachment data. */
    url_preview: string | null;
}
export interface WlProfileAttachAttachElementPostParams {
    /** Attachment key. */
    k_attach: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlProfileAttachAttachElementPostResponse {
    /** Attachment key. */
    k_attach: string;
}
export interface WlProfilePurchasePurchaseElementParams {
    /** The key of the redemption code used to obtain some goods. */
    k_code: string;
    /** The key of an entirely booked event. */
    k_enrollment_book: string;
    /** The key of a purchased product. */
    k_login_product: string;
    /** The key of the user's promotion. */
    k_login_promotion: string;
    /** The key of the purchased item. This should be specified only for ordinary purchases, not for thos... */
    k_purchase_item: string;
    /** The key of the make-up session used to attend an event. */
    k_session_pass: string;
    /** The business key. Currently used only with `k_session_pass` variable. */
    k_business?: string | null;
}
export interface WlProfilePurchasePurchaseElementResponse {
    a_component: Array<{
        k_enrollment_book?: string;
        k_login_product?: string;
        k_login_promotion?: string;
        k_session_pass?: string;
    }>;
    a_logo: Array<{
        i_height: number;
        i_width: number;
        is_empty: boolean;
        s_url: string;
    }>;
    a_restrict: Array<{
        i_limit: number;
        i_remain: number;
        s_date: string;
    }>;
    a_tax: Array<{
        f_tax_discount: string;
        s_tax: string;
    }>;
    /** This is `true` only if the purchased item is a promotion and the user can control the renewal of ... */
    can_renew: boolean;
    /** Local date of purchase in MySQL format. */
    dl_purchase: string;
    /** The start date of the promotion. This is used only if the purchased item is a promotion. */
    dl_start: string;
    /** The expiration date of the promotion. This is used only if the purchased item is a promotion. */
    dt_end: string;
    /** The end date of the promotion hold. This is used only for promotions on hold. */
    dt_hold_end: string;
    /** The start date of the promotion hold. This is used only for promotions on hold. */
    dt_hold_start: string;
    /** The purchase date of the purchased item. This is given in GMT in MySQL format. */
    dt_purchase: string;
    /** The date for when the email regarding the gift card should be sent (or was sent) to the receiver. */
    dt_send: string;
    /** The percentage value of the discount for the client type. This is empty if this discount wasn't a... */
    f_discount_login_type_percent: number;
    /** The description of the purchased item. */
    html_description: string;
    /** The number of sessions remaining for a promotion. This is used only for promotions. */
    i_book: number;
    /** The number of purchased items bought at the time of purchase. */
    i_buy: number;
    /** The percentage value of the discount given by a reward prize. This field will be `0` if a discoun... */
    i_discount_count: number;
    /** This field is only added for promotions. Duration of promotion. Measurement unit is `id_duration`. */
    i_duration: number;
    /** The number of bookings remaining in this promotion. This value is used only for non-sequential pr... */
    i_left: number;
    /** The number of visits which can be made with this promotion. This is used only for promotions. */
    i_limit: number;
    /** The duration of the regular payments interval. This is used only for “membership” type promoti */
    i_payment_period: number;
    /** The number of remaining bookings for the promotion. This is used only for promotions. */
    i_remain: number;
    /** The number of minutes remaining for the promotion. */
    i_remain_duration: number;
    /** Not `0` only for promotions. How many times promotion was updated. */
    i_renew: number;
    /** This is used only for promotions. This is the number of visits that were attended for the promotion. */
    i_use: number;
    /** Promotion or package date start rule. */
    id_activation: number;
    /** String identifiers for tax type. */
    id_discount_commission_type: number;
    /** Class to process string identifiers for duration types */
    id_duration: number;
    /** Program types. */
    id_program_type: number;
    /** A list of purchase types. */
    id_purchase_item: number;
    /** List of sale categories on the store page. */
    id_sale: number;
    /** If `true`, then the purchase item is active. If `false`, then the purchase item isn't active. */
    is_active: boolean;
    /** If `true`, then the purchased item is a component of another purchase item, as is the case of a p... */
    is_component: boolean;
    /** If `true`, then this promotion will be converted to a different promotion after it expires. It `f... */
    is_convert: boolean;
    /** This is `true` only if the purchased item is an expired promotion. Otherwise, this will be `false`. */
    is_expire: boolean;
    /** This is `true` only if the purchased item is a promotion placed on hold. */
    is_hold: boolean;
    /** If `true`, then the usage of this purchased item is disabled. If `false`, then the usage of this ... */
    is_limit: boolean;
    /** If `true`, then the discount was applied for the member type. If `false`, then the discount was a... */
    is_login_type_member: boolean | null;
    /** If `true`, then the gift card email notification will be sent to the receiver. This is `true` onl... */
    is_mail: boolean;
    /** If `true`, then the gift card email notification has been sent. This can only be `true` if the pu... */
    is_past: boolean;
    /** This is `true` if the gift card has been redeemed. This can only be true if the purchased item is... */
    is_redeem: boolean;
    /** This is `true` if the promotion is auto-renewable. This can only be true if the purchased item is... */
    is_renew: boolean;
    /** This is `true` if the promotion has been transferred. This can only be `true` if the purchased it... */
    is_transfer: boolean;
    /** The key of the redemption code. This won't be `0` if the purchased item is obtained via a redempt... */
    k_code_result: string;
    /** The key of the currency used to make the purchase. */
    k_currency: string;
    /** The key of the purchased promotion. This won't be `0` only for promotions. */
    k_login_promotion_result: string;
    /** The key of the whole purchase which includes the given purchased item. */
    k_purchase_result: string;
    /** The cost of the purchased item. */
    m_cost_item: string;
    /** The total cost of the purchase, including taxes and fees. */
    m_cost_total: string;
    /** The amount of the discount given via a reward prize. This will be empty if the discount wasn't ap... */
    m_discount_amount: string;
    /** The amount of the discount for the client type. This will be empty if the discount wasn't applied. */
    m_discount_login_type_amount: string;
    /** Amount of manual discount. Empty if this discount was not applied. */
    m_discount_manual: string;
    /** The amount to pay for each payment period. This is used only for promotions with the "membership"... */
    m_period_price: string;
    /** Source price of item. */
    m_price: string;
    /** The amount refunded. This will be `0` if there are no refunds. */
    m_refund: string;
    /** The redemption code. This is used only if the purchase is bought using a redemption code. */
    s_code: string;
    /** The code to redeem gift card. This won't be empty only for gift cards. */
    s_gift_code: string;
    /** Name of gift recipient. This won't be empty only for gift cards. */
    s_gift_recipient: string;
    /** The name of the staff member who disabled the usage of the purchased item. */
    s_limit_actor: string;
    /** The email address the gift card was sent to. This is used only for gift cards. */
    s_mail: string;
    /** The text of the message sent to the gift card recipient. This is used only for gift cards. */
    s_message: string;
    /** The name of the user who paid for this purchase. */
    s_payer: string;
    /** The title of the converted promotion. This is used only for promotions which must be converted to */
    s_promotion_convert: string;
    /** The purchase ID number as it appears on the receipt. */
    s_purchase: string;
    /** The name of the user who paid for this purchase. */
    s_recipient: string;
    /** The name of the sender. This is used only for gift cards. */
    s_sender: string;
    /** The name of the purchased item. */
    s_title: string;
    /** The string ID of the purchased item. This ID may be used to change the view of the purchased item. */
    sid_value: string;
    /** The key of the user who paid for this purchase. */
    uid_payer: string;
    /** The key of the user who paid for this purchase. */
    uid_recipient: string;
}
export interface WlProfilePurchasePurchaseListParams {
    /** The key of a business to show information for. */
    k_business: string;
    /** The key of a user to show information for. */
    uid: string;
}
export interface WlProfilePurchasePurchaseListResponse {
    a_purchase: Array<{
        a_active: Array<boolean>;
        a_sale: Array<number>;
        dt_add: string;
        id_purchase_item: number;
        id_sale: number;
        is_active: boolean;
        is_component?: boolean;
        is_package: boolean;
        k_appointment: string;
        k_code: string;
        k_enrollment_book?: string;
        k_id: string;
        k_login_product?: string;
        k_login_promotion: string;
        k_purchase: string;
        k_purchase_item: string;
        k_service: string;
        k_session_pass?: string;
        s_title: string;
        uid: string;
    }>;
}
export interface WlProfilePurchaseListPurchaseListParams {
    /** The key of a business to show information for. */
    k_business: string;
    /** The key of a user to show information for. */
    uid: string;
}
export interface WlProfilePurchaseListPurchaseListResponse {
    a_purchase: Array<{
        a_active: Array<boolean>;
        a_sale: Array<number>;
        dt_add: string;
        id_purchase_item: number;
        id_sale: number;
        is_active: boolean;
        is_component?: boolean;
        is_package: boolean;
        k_appointment: string;
        k_code: string;
        k_enrollment_book?: string;
        k_id: string;
        k_login_product?: string;
        k_login_promotion: string;
        k_purchase: string;
        k_purchase_item: string;
        k_service: string;
        k_session_pass?: string;
        s_title: string;
        uid: string;
    }>;
}
export interface WlProfilePurchaseListPurchaseListElementParams {
    /** Image Height in pixels. Please specify this value if you need purchase image to be returned in sp... */
    i_image_height: number;
    /** Image Width in pixels. Please specify this value if you need purchase image to be returned in spe... */
    i_image_width: number;
    /** The ID of the redemption code used to obtain the item. This should be specified only for items ob... */
    k_code: string;
    /** The key of an entirely booked event. This must be specified if the purchased item is a whole event */
    k_enrollment_book: string;
    /** The key of a purchased product. This must be specified if the purchased item is a product and par... */
    k_login_product: string;
    /** The key of the user's promotion. This should only be specified for promotions given without a pur... */
    k_login_promotion: string;
    /** The key of the purchased item. This should be specified only for ordinary purchases */
    k_purchase_item: string;
    /** The ID of the makeup session used to attend an event. */
    k_session_pass: string;
    /** The business key. Used with `k_session_pass` variable and */
    k_business?: string | null;
}
export interface WlProfilePurchaseListPurchaseListElementResponse {
    a_component: Array<{
        k_enrollment_book?: string;
        k_login_product?: string;
        k_login_promotion?: string;
        k_session_pass?: string;
    } | {
        id_purchase_item: number;
        k_id: string;
        text_title: string;
    }>;
    a_logo: Array<{
        i_height: number;
        i_width: number;
        is_empty: boolean;
    }> | null;
    a_restrict: Array<{
        i_limit: number;
        i_remain: number;
        text_date: string;
    }>;
    a_tax: Array<{
        f_tax_discount: string;
        s_tax: string;
    }>;
    /** This is `true` only if the purchased item is a promotion and the user can control the renewal of ... */
    can_renew: boolean;
    /** The cancellation date of the promotion. Only available if the item is a promotion and has been ca... */
    dl_cancel: string;
    /** The expiration date of the promotion. Only available if the item is a promotion. */
    dl_end: string;
    /** The local date of the purchase in MySQL format. */
    dl_purchase: string;
    /** The local date in MySQL format when mail about purchasing was sent (or will be sent) to the user. */
    dl_send: string;
    /** The start date of the promotion. Only available if the item is a promotion. */
    dl_start: string;
    /** The local date of cancellation in MySQL format. Only available if the item is a membership. */
    dt_cancel: string;
    /** The end date of the promotion hold. This is used only for promotions on hold. */
    dt_hold_end: string;
    /** The start date of the promotion hold. Only available if the item is a promotion and on hold. */
    dt_hold_start: string;
    /** The purchase date of the purchased item. This is given in UTC in MySQL format. */
    dt_purchase: string;
    /** The date in MySQL format when gift card was redeemed. Only available if the item is a gift card. */
    dt_redeem: string;
    /** The percentage value of the discount for the client type. This will be empty if a discount wasn't... */
    f_discount_login_type_percent: number;
    /** The description of the purchased item. */
    html_description: string;
    /** The number of sessions remaining for a promotion. This value is used only for promotions. This va... */
    i_book: number;
    /** Displays the number of minutes of sessions that were booked by this promotion. This isn't `0` onl... */
    i_book_duration: number;
    /** The number of purchased items bought at the time of purchase. */
    i_buy: number;
    /** The number of days notice before the client is able to set cancel date. */
    i_client_cancel_notice_days: number;
    /** The percentage value of the discount given by a reward prize. This will be `0` if a discount wasn... */
    i_discount_count: number;
    /** The duration of the promotion. The measurement unit is `id_duration`. This field is only added fo... */
    i_duration: number;
    /** The number of bookings left with this promotion. This value is used only for non-sequential promo... */
    i_left: number;
    /** The number of visits that can be made with this promotion. This value is used only for promotions. */
    i_limit: number;
    /** The interval duration of the regular payments. This value is used only for membership-type promot... */
    i_payment_period: number;
    /** The number of remaining bookings for the promotion. This is used only for promotions. */
    i_remain: number;
    /** The number of minutes remaining for the promotion. */
    i_remain_duration: number;
    /** Displays how many times promotion was updated. This isn't `0` only for promotions. */
    i_renew: number;
    /** The number of visits that were attended for the promotion. This is used only for promotions. */
    i_use: number;
    /** The number of minutes the user has already used with this purchase of this promotion. This isn't ... */
    i_use_duration: number;
    /** Promotion or package date start rule. */
    id_activation: number;
    /** String identifiers for tax type. */
    id_discount_commission_type: number;
    /** Class to process string identifiers for duration types */
    id_duration: number;
    /** Program types. */
    id_program_type: number;
    /** A list of purchase types. */
    id_purchase_item: number;
    /** List of sale categories on the store page. */
    id_sale: number;
    /** If `true`, then the purchase item is active. If `false`, then the purchase item isn't active. */
    is_active: boolean;
    /** Whether the purchase item is asset. */
    is_asset: boolean;
    /** If `true`, then a promotion is pending cancellation. Otherwise, this will be `false`. */
    is_cancel_pending: boolean;
    /** If `true`, then a promotion can be canceled by a client. Otherwise, this will be `false`. */
    is_client_cancel_allow: boolean;
    /** If `true`, then the purchased item is a component of another purchase item, as is the case of a p... */
    is_component: boolean;
    /** If `true`, then this promotion will be converted to a different promotion after it expires. If `f... */
    is_convert: boolean;
    /** `true` if the purchase item is an event; `false` otherwise. */
    is_event: boolean;
    /** This is `true` only if the purchased item is a promotion that has expired. Otherwise, this will b... */
    is_expire: boolean;
    /** This is `true` only if the purchased item is a promotion and has been placed on hold. */
    is_hold: boolean;
    /** If `true`, then the usage of this purchased item is disabled. */
    is_limit: boolean;
    /** If `true`, then the discount was applied for the member type. */
    is_login_type_member: boolean | null;
    /** If `true`, then the gift card email notification will be sent to the receiver. This is `true` onl... */
    is_mail: boolean;
    /** If `true`, then the gift card email notification has been sent. This can only be `true` if the pu... */
    is_past: boolean;
    /** This is `true` if the gift card has been redeemed. */
    is_redeem: boolean;
    /** This is `true` if the promotion is auto-renewable. This can only be `true` if the purchased item ... */
    is_renew: boolean;
    /** This is `true` if the promotion has been transferred. This can only be true if the purchased item... */
    is_transfer: boolean;
    /** The key of the redemption code. This value will not be `0` if the purchased item is obtained via ... */
    k_code_result: string;
    /** The key of the currency used to make the purchase. */
    k_currency: string;
    /** The key of the item. This can correspond to one of many values depending on `id_sale`. */
    k_id: string;
    /** The key of the purchased promotion. This won't be `0` only for promotions. */
    k_login_promotion_result: string;
    /** The key of the whole purchase, including the given purchased item. */
    k_purchase_result: string;
    /** The cost of the purchased item. */
    m_cost_item: string;
    /** The total cost of the purchase, including taxes and fees. */
    m_cost_total: string;
    /** The amount of the discount via prize. This will be empty if this discount wasn't applied. */
    m_discount_amount: string;
    /** The amount of the discount for the client type. This value will be empty if the discount wasn't a... */
    m_discount_login_type_amount: string;
    /** The amount of the manual discount. This will be empty if this discount wasn't applied. */
    m_discount_manual: string;
    /** The amount to pay for each payment period. This is used only for promotions with the membership p... */
    m_period_price: string;
    /** The source price of item. */
    m_price: string;
    /** The amount refunded. This will be `0` if there are no refunds. */
    m_refund: string;
    /** Cancellation fee amount. */
    m_terminate_fee: string | null;
    /** The redemption code. This value is used only if the purchase is bought via a redemption code. */
    s_code: string;
    /** The code to redeem the gift card. This isn't empty only for gift cards. */
    s_gift_code: string;
    /** The name of gift recipient. This isn't empty only for gift cards. */
    s_gift_recipient: string;
    /** The name of the staff member who disabled the usage of the purchased item. */
    s_limit_actor: string;
    /** The email address to which the gift card was sent. This is used only for gift cards. */
    s_mail: string;
    /** The test of the message sent to the gift card recipient. This is used only for gift cards. */
    s_message: string;
    /** The name of the user who paid for this purchase. */
    s_payer: string;
    /** The title of the converted promotion. This value is used only for promotions that must be convert... */
    s_promotion_convert: string;
    /** The purchase ID number as it appears on the receipt. This value will also include the leading 0s ... */
    s_purchase: string;
    /** The name of the user who paid for this purchase. */
    s_recipient: string;
    /** The name of the sender. This value is used only for gift cards. */
    s_sender: string;
    /** The name of the purchased item. */
    s_title: string;
    /** The string ID of the purchased item. This ID may be used to change the view of the purchased item. */
    sid_value: string;
    /** Expire conditions for the purchased item (only for promotion). */
    text_expire: string;
    /** Text describing guest passes available for the purchased promotion. */
    text_guest_pass: string;
    /** The key of the user who paid for this purchase. */
    uid_payer: string | null;
    /** The key of the user who paid for this purchase. */
    uid_recipient: string;
}
export interface WlProfileAlertAlertParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The key of the business. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileAlertAlertResponse {
    a_alert: Array<{
        dt_date: string | null;
        is_today: boolean;
        id_profile_note: number;
        k_pay_account?: string;
        k_purchase_item?: string;
        s_text: string;
    }>;
    a_warning: Array<{
        a_location_flag: Array<string>;
        dt_create: boolean;
        dt_date: boolean;
        is_book_restricted: boolean;
        is_flag: boolean;
        is_purchase_restricted: boolean;
        is_today: boolean;
        s_text: string;
        text_author: string;
        text_editor: string;
    }>;
}
export interface WlProfileAlertAlertEditDeleteParams {
    /** Key of current business. */
    k_business: string;
    /** Login note key to edit or get info for. */
    k_login_note: string;
}
export type WlProfileAlertAlertEditDeleteResponse = Record<string, unknown>;
export interface WlProfileAlertAlertEditGetParams {
    /** Key of current business. */
    k_business: string;
    /** Login note key to edit or get info for. */
    k_login_note: string;
    /** Key of a user to show information or post a note for. */
    uid: string;
}
export interface WlProfileAlertAlertEditGetResponse {
    a_login_note_data: Array<{
        a_location: {
            html_title: string;
            is_select: boolean;
            k_id: string;
            text_title: string;
        };
        can_flag: boolean;
        id_login_note_access: number;
        id_login_note_flag: number;
        id_source: number | null;
        is_automated: boolean;
        is_book: boolean;
        is_flag: boolean;
        is_icon: boolean;
        is_location_multiple: boolean;
        is_purchase: boolean;
        is_remove: boolean;
        k_business: string;
        k_login_note: string;
        s_text: string;
        text_flag_description: string;
        text_flag_disable: string;
        uid: string;
        url_action: string;
    }>;
}
export interface WlProfileAlertAlertEditPostParams {
    /** Key of current business. */
    k_business: string;
    /** Login note key to edit or get info for. */
    k_login_note: string;
    /** Key of a user to show information or post a note for. */
    uid: string;
}
export interface WlProfileAlertAlertEditPostResponse {
    /** Login note key to edit or get info for. */
    k_login_note: string;
}
export interface WlProfileTermTermParams {
    /** The key of the current business. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileTermTermResponse {
    /** The date/time of the waiver confirmation. */
    dt_agree: string | null;
    /** The text of the online waiver. */
    html_contract: string;
    /** Age of minor which documents can be signed by parent or legal guardian. */
    i_minor_age: number;
    /** The IP address from which the confirmation was carried out. */
    ip_agree: string | null;
    /** Flag of successful saving agreement. */
    is_agree: boolean;
    /** The user's name. */
    s_name: string;
    /** The URL to the image with the client's signature. */
    url_signature: string | boolean;
}
export interface WlProfileAttendanceAttendanceOverlapParams {
    /** Duration of a service. */
    i_duration: number;
    /** Whether an asset is booking. Needed in case when a client is allowed to select a date and time, then */
    is_appointment: boolean;
    /** Primary key of the business to add the user into. */
    k_business: string;
    /** Class period key. */
    k_class_period: string;
    /** Location key. */
    k_location: string;
    /** Asset key. */
    k_resource: string;
    /** Service key. */
    k_service: string;
    /** Key of timezone. */
    k_timezone: string;
    /** UID of a user. */
    uid: string;
    /** Date of a selected service. */
    dtu_date?: string | null;
}
export interface WlProfileAttendanceAttendanceOverlapResponse {
    a_visit_list: Array<{
        dtu_date: string;
        i_duration?: string;
        i_end: string;
        i_end_local?: string;
        i_start: string;
        i_start_local?: string;
        k_appointment: string;
        k_business: string;
        k_class_period: string;
        k_enrollment_book: string;
        k_location: string;
        text_title: string;
    }>;
}
export interface WlProfileSettingSettingGetParams {
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileSettingSettingGetResponse {
    /** Determines whether email notifications related to purchases, contracts, and other activity in a c... */
    is_account_management_email: boolean;
    /** Determines whether SMS notifications related to purchases, contracts, and other activity in a cli... */
    is_account_management_sms: boolean;
    /** Determines whether email notifications related to news and updates from the business regarding th... */
    is_news_and_updates_email: boolean;
    /** Whether sms notifications related to news and updates from the business regarding their services,... */
    is_news_and_updates_sms: boolean;
    /** Determines whether email notifications related to the services a client has booked are enabled. */
    is_schedule_and_reminders_email: boolean;
    /** Determines whether SMS notifications related to the services a client has booked are enabled. */
    is_schedule_and_reminders_sms: boolean;
    /** SID of language code. */
    text_language: string;
}
export interface WlProfileSettingSettingPostParams {
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export type WlProfileSettingSettingPostResponse = Record<string, unknown>;
export interface WlProfileActivityElementParams {
    /** The key of the activity item represented by this endpoint. */
    k_login_activity: string;
}
export interface WlProfileActivityElementResponse {
    /** Messages with description what did user do to get account credits as reward points. */
    a_credit_score: Array<string>;
    /** Messages with description what did user do to get points. */
    a_reward_score: Array<string>;
    /** Verifies that current user can view the specified profile. */
    can_profile: boolean;
    /** The date of the activity in GMT. */
    dt_date_gmt: string;
    /** The date of the activity in the client's time zone. */
    dt_date_local: string;
    /** Description of the action, who and what did. */
    html_message: string;
    /** Total amount of account credits user got for `k_login_activity`. */
    i_credit_score: number;
    /** The total amount of rewards points the client received for the activity. */
    i_score: number;
    /** The rewards points used to redeem a prize. */
    i_spend: number;
    /** List of available design icons. */
    id_icon: number | null;
    /** Manages identifiers of user activity. */
    id_type: number;
    /** Object ID, for example, class period ID for books and visits. */
    k_id: string;
    /** The description of the activity. This should include the nature of the activity and the people in... */
    s_message: string;
    /** Link to share activity with social networks. */
    url_link: string;
}
export interface WlProfileActivityListParams {
    /** Ending date of the date range. Optional. */
    dl_end: string;
    /** Starting date of the date range. Optional. */
    dl_start: string;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the client to show information for. */
    uid: string;
}
export interface WlProfileActivityListResponse {
    /** An array listing client activities, where each activity is provided as an ID number. */
    a_activity: Array<string>;
}
export interface WlProfileContractContractGetParams {
    /** The start date of the contract. */
    dt_start: string;
    /** The percentage discount for the item. */
    f_manual_discount: number;
    /** The type of purchase item. This is one of the [RsPurchaseItemSid](#/components/schemas/RsPurchase... */
    id_purchase_item: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the purchase item in the database. */
    k_id: string;
    /** The key of the selected location. */
    k_location: string;
    /** The key of the selected purchase item. */
    k_purchase_item: string;
    /** Amount of a flat manual discount. */
    m_discount_flat: string;
    /** The custom price of the item. */
    m_price_custom: string;
    /** The discount code used for the item. */
    s_discount_code: string;
    /** The key of the current user. */
    uid: string;
}
export interface WlProfileContractContractGetResponse {
    /** The text of the contract. */
    html_contract: string;
    /** Age of minor which documents can be signed by parent or legal guardian. */
    i_minor_age: number;
    /** Title of purchase option. */
    text_title: string;
}
export interface WlProfileContractContractPostParams {
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the selected purchase item. */
    k_purchase_item: string;
    /** The key of the current user. */
    uid: string;
}
export type WlProfileContractContractPostResponse = Record<string, unknown>;
export interface WlClassesClassListBookListParams {
    /** The image height in pixels. Specify this value if you need the image to be returned in a specific... */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need the image to be returned in a specific ... */
    i_image_width: number;
    /** The location key. */
    k_location: string;
}
export interface WlClassesClassListBookListResponse {
    a_class: Array<{
        a_class_tab: Array<string>;
        a_login_type: Array<string>;
        a_member_group: Array<string>;
        a_url_book: Array<string>;
        dtu_book_date: string;
        i_capacity: number;
        id_bookable: number;
        is_active: boolean;
        is_event: boolean;
        is_online_private: boolean;
        k_class: string;
        k_enrollment_block: string;
        m_price_total: string;
        text_description: string;
        text_title: string;
    }>;
}
export interface WlClassesClassListListParams {
    /** Whether all events should be returned from same enrollment block. */
    is_enrollment_block_all: boolean;
    /** Whether to include events without sessions. */
    is_enrollment_block_empty: boolean;
    /** Whether to include events in the result. */
    is_event_include: boolean;
    /** Whether to return franchisee-created classes (if business is franchisor). */
    is_franchise: boolean;
    /** Business key. */
    k_business: string;
    /** List of tabs keys. */
    a_class_tab?: Array<string> | null;
    /** ID of book now tab. One of [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) constants. */
    id_class_tab?: number;
}
export interface WlClassesClassListListResponse {
    a_class: Array<{
        a_class_tab: Array<string>;
        a_event_tab: Array<string>;
        dl_end: string;
        dl_start: string;
        is_active: boolean;
        is_event: boolean;
        is_remove: boolean;
        k_class: string;
        k_enrollment_block: string;
        text_title: string;
    }>;
}
export interface WlClassesClassViewElementParams {
    /** The image height in pixels. Specify this value if you need the image to be returned in a specific... */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need the image to be returned in a specific ... */
    i_image_width: number;
    /** The business key. */
    k_business: string;
    /** The class key used to get information for a specific class. */
    k_class: string;
    /** Defines if canceled schedules should be included in the result. */
    show_cancelled: boolean;
}
export interface WlClassesClassViewElementResponse {
    a_class_list: Array<{
        a_schedule: {
            a_repeat: Record<string, unknown>;
            a_staff_key: Array<string>;
            a_uid_staff_key: Array<string>;
            dl_end: string;
            dl_start: string;
            i_day: number;
            i_duration: number;
            is_cancel: boolean;
            k_location: string;
            m_price: string;
            text_room: string;
            text_time: string;
        };
        a_config: {
            a_family_relation: Array<string>;
            a_family_relation_login_allow: Array<number>;
        } | null;
        a_search_tag: {
            k_search_tag: string;
            text_title: string;
        };
        a_visits_required: {
            i_count: number;
            is_event: boolean;
            k_class: string;
            text_title: string;
        };
        has_own_image: boolean | null;
        html_description: string;
        html_special_instruction: string;
        i_age_from: number;
        i_age_to: number;
        is_age_public: boolean;
        is_bookable: boolean;
        is_online_private: boolean;
        is_promotion_client: boolean;
        is_promotion_only: boolean;
        is_promotion_staff: boolean;
        is_single_buy: boolean;
        is_virtual: boolean;
        is_event: boolean;
        k_class: string;
        k_promotion_default: string;
        m_price: string;
        show_special_instructions: boolean;
        xml_description: string;
        xml_special_instruction: string;
        url_image: string;
    }>;
}
export interface WlClassesPromotionClassPromotionParams {
    /** Determines whether the class is an event or not. */
    is_event: boolean;
    /** `true` - the login type or group restrictions are ignored and all pricing options will be returne... */
    is_login_type_ignore: boolean;
    /** `true` - promotions should only be returned if they're related to the given class or event. */
    is_related_only: boolean;
    /** The business key. */
    k_business: string;
    /** The class key. */
    k_class?: string | null;
}
export interface WlClassesPromotionClassPromotionResponse {
    a_promotion: Array<{
        k_promotion: string;
        text_title: string;
        id_program: number;
        is_select: boolean;
    }>;
    /** The default promotion key. */
    k_promotion_default: string | null;
}
export interface WlBusinessPartnerPartnerCodeGetParams {
    /** Business key. */
    k_business: string;
}
export interface WlBusinessPartnerPartnerCodeGetResponse {
    /** Link to the landing campaign */
    url_partner: string;
}
export interface WlBusinessPartnerPartnerCodePostParams {
    /** Business key. */
    k_business: string;
}
export type WlBusinessPartnerPartnerCodePostResponse = Record<string, unknown>;
export interface WlBusinessPartnerPartnerSettingsParams {
    /** The unique code that a business can provide other businesses to tell them about system. */
    text_code: string;
}
export interface WlBusinessPartnerPartnerSettingsResponse {
    /** List of different types for landing pages based on business types. */
    id_business_tour: number;
    /** The business key. */
    k_business: string;
    /** The first name of the business representative. */
    text_name_first: string;
    /** The last name of the business representative. */
    text_name_last: string;
    /** The job title of the business representative. */
    text_position: string;
    /** The text of the review about the WellnessLiving system. */
    text_review: string;
    /** A link to the photo of the business representative. */
    url_photo: string | null;
}
export interface WlBusinessAccountBusinessAccountParams {
    /** `true` returns WellnessLiving customers. */
    is_prospects: boolean;
    /** Specifies if only businesses having published locations should be returned. */
    is_published: boolean;
}
export interface WlBusinessAccountBusinessAccountResponse {
    /** A list of business keys. */
    a_business_keys: Array<string>;
}
export interface WlBusinessClaimBusinessClaimGetParams {
    /** The email address of the location. */
    text_mail: string;
    /** The phone number of the business, staff and location. */
    text_phone: string;
}
export type WlBusinessClaimBusinessClaimGetResponse = Record<string, unknown>;
export type WlBusinessClaimBusinessClaimPostParams = Record<string, unknown>;
export interface WlBusinessClaimBusinessClaimPostResponse {
    /** Location microsite URL. */
    url_microsite: string | null;
}
export type WlBusinessClaimBusinessClaimPutParams = Record<string, unknown>;
export type WlBusinessClaimBusinessClaimPutResponse = Record<string, unknown>;
export interface WlBusinessDesignBusinessDesignParams {
    /** Business key to get design data. */
    k_business: string;
}
export interface WlBusinessDesignBusinessDesignResponse {
    a_data: Array<{
        hide_past_days: boolean;
        id_layout: number;
        id_logo_position: number;
        id_logo_style: number;
        is_attend_self: boolean;
        is_appointment_capacity: boolean;
        is_class_capacity: boolean;
        is_class_quick: boolean;
        is_class_spot_only: boolean;
        is_show_name: boolean;
        s_color_background: string;
        s_color_header: string;
        s_color_menu_border: string;
        s_color_menu_element: string;
        s_color_menu_hover: string;
        s_color_menu_hover_background: string;
        s_color_menu_press: string;
        s_color_submenu: string;
        s_color_submenu_element: string;
        s_color_submenu_hover: string;
        s_color_submenu_press: string;
        s_fb_pixel_id: string;
        s_ga_tracking_id: string;
        s_gtm_container_id: string;
        s_url_background: string;
    }>;
}
export type WlBusinessLeadBusinessLeadParams = Record<string, unknown>;
export type WlBusinessLeadBusinessLeadResponse = Record<string, unknown>;
export interface WlBusinessPhonePhoneDeleteParams {
    /** Business key. */
    k_business?: string | null;
    /** Business phone number(in locale format). */
    text_phone?: string | null;
}
export type WlBusinessPhonePhoneDeleteResponse = Record<string, unknown>;
export interface WlBusinessPhonePhoneGetParams {
    /** Business key. */
    k_business?: string | null;
}
export interface WlBusinessPhonePhoneGetResponse {
    /** A list of locales. */
    id_locale: number | null;
    /** Business phone number(in locale format). */
    text_phone: string | null;
    /** Business phone number mask. */
    text_phone_mask: string;
}
export interface WlBusinessPhonePhonePostParams {
    /** Business key. */
    k_business?: string | null;
    /** Business phone number(in locale format). */
    text_phone?: string | null;
}
export type WlBusinessPhonePhonePostResponse = Record<string, unknown>;
export interface WlBusinessSearchBusinessSearchUserParams {
    /** If `true`, the return only active customers, `false` - all business. */
    is_customer: boolean;
    /** User email to search business keys. */
    text_mail: string;
    /** Given business name to search by. */
    text_name: string;
}
export interface WlBusinessSearchBusinessSearchUserResponse {
    /** Array with business keys that contain given name in their title. */
    a_result: Array<string>;
}
export interface WlBusinessSearchBusinessSearchParams {
    /** If `true`, the return only active customers, `false` - all business. */
    is_customer: boolean;
    /** If `true`, returns only active customer businesses, if `false`, returns all businesses. */
    is_strict: boolean;
    /** Given business name to search by. */
    text_name: string;
}
export interface WlBusinessSearchBusinessSearchResponse {
    /** Array with business keys that contain given name in their title. */
    a_result: Array<string>;
}
export interface WlBusinessConfigBusinessConfigParams {
    /** The business key. */
    k_business: string;
}
export interface WlBusinessConfigBusinessConfigResponse {
    a_business_policy: Array<{
        a_payment_reattempt_not_decline_reason: Array<number>;
        a_wait_service: number;
        i_book_before: number;
        i_book_future: number;
        i_cancel: number;
        i_promote: number;
        i_promote_fastest_response: number;
        i_promote_require_confirm: number;
        i_reattempt_count: number;
        id_book_before: number;
        id_book_future: number;
        id_cancel: number;
        id_promote: number;
        id_promote_fastest_response: number;
        id_promote_require_confirm: number;
        is_book_inside_active_pay_period: boolean;
        is_disable_promotion: number;
        is_enable_payment_penalty: boolean;
        is_enable_payment_reattempt: boolean;
        is_enable_staff_ip_restriction: boolean;
        is_prevent_booking: number;
        is_staff_restrict: boolean;
        is_wait: boolean;
        k_currency: string;
        k_timezone: string;
        m_payment_penalty: string;
        url_custom: string;
        a_family_relation: Array<string>;
        a_family_relation_login_allow: Array<number>;
    }>;
    a_penalty: Array<{
        a_class_period: Array<string>;
        a_login_type?: Array<string>;
        a_resource?: Array<string>;
        a_service: Array<string>;
        i_blame: number;
        i_cancel_period: number;
        i_charge_measure: number;
        id_blame: number;
        id_cancel_period: number;
        id_charge: number;
        id_charge_measure: number;
        is_appointment_all: boolean;
        is_class_all: boolean;
        is_enable_cancel_charge: boolean;
        is_event_all: boolean;
        is_login_type_all: boolean;
        is_resource_all: boolean;
        is_service_all: boolean;
    }>;
    /** Whether client must select a location at checkout. */
    is_location_client_select: boolean;
    /** Determines whether staff members should select a location at checkout. */
    is_location_select: boolean;
    /** Determines whether the business has white label setting enabled in the admin settings. */
    is_white_label: boolean;
}
export interface WlBusinessAmazonRegionAmazonRegionParams {
    /** List of business key. */
    a_business: Array<string>;
}
export interface WlBusinessAmazonRegionAmazonRegionResponse {
    /** List of region IDs for `a_business`. */
    a_business_region: Array<number>;
}
export interface WlBusinessAuthorizePartnerAuthorizePartnerParams {
    /** Determines whether the user will be granted access or if access will be revoked. */
    is_grant: boolean;
    /** The key of the franchisee location to enter. */
    k_location: string;
    /** The key of the user who will be granted access. */
    uid: string;
}
export type WlBusinessAuthorizePartnerAuthorizePartnerResponse = Record<string, unknown>;
export interface WlBusinessSelectBusinessSelectParams {
    /** Configuration data used to determine the list of businesses returned. This array has the followin... */
    a_config: Array<{
        is_role: boolean;
        k_business?: string;
    }>;
    /** Business in which a list of business is requested. */
    k_business: string;
    /** User who is requesting the list of businesses. */
    uid: string;
}
export interface WlBusinessSelectBusinessSelectResponse {
    a_select: Array<{
        a_business: {
            k_business: string;
            s_title: string;
            selected: boolean;
        };
        is_select: boolean;
        name: string;
        onchange: string;
        s_id: string;
        s_style: string;
    }>;
}
export type WlBusinessTypeBusinessTypeListParams = Record<string, unknown>;
export interface WlBusinessTypeBusinessTypeListResponse {
    a_business_type: Array<{
        a_image_list: {
            i_height: number;
            i_height_src: number;
            i_rotate: number;
            i_width: number;
            i_width_src: number;
            is_resize: boolean;
            url_thumbnail: string;
            url_view: string;
        };
        id_business_category: number;
        id_tour: number;
        k_business_type: string;
        text_category: string;
        text_category_description: string;
        text_category_icon: string;
        text_file: string;
        text_title: string;
    }>;
}
export interface WlBusinessWaiverWaiverParams {
    /** ID of business to get waiver for. */
    k_business: string;
    /** Full username. */
    text_fullname: string;
    /** User key for which the waiver is shown. */
    uid: string;
}
export interface WlBusinessWaiverWaiverResponse {
    /** Does the business have a waiver or not? */
    has_waiver: boolean;
    /** Text of the current waiver with the substituted variables. */
    html_waiver: string;
}
export interface WlLeadSourceLeadSourceListParams {
    /** Business key. */
    k_business: string;
}
export interface WlLeadSourceLeadSourceListResponse {
    a_lead_source: Array<{
        i_sort: number | null;
        id_lead_source: number;
        is_add_lead: boolean;
        is_use: boolean;
        k_lead_source: string;
        k_skin: string;
        text_title: string;
    }>;
}
export interface WlLeadSourceLeadSourceElementDeleteParams {
    /** Key of the lead source. */
    k_lead_source_replace: string;
}
export type WlLeadSourceLeadSourceElementDeleteResponse = Record<string, unknown>;
export type WlLeadSourceLeadSourceElementPostParams = Record<string, unknown>;
export type WlLeadSourceLeadSourceElementPostResponse = Record<string, unknown>;
export type WlLeadSourceLeadSourceElementPutParams = Record<string, unknown>;
export interface WlLeadSourceLeadSourceElementPutResponse {
    /** Key of the lead source. */
    k_lead_source: string;
}
export interface WlPromotionIndexPromotionIndexParams {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The program type ID, which will be one of the [RsProgramTypeSid](#/components/schemas/RsProgramTy... */
    id_program_type: number;
    /** The location key. */
    k_location: string;
}
export interface WlPromotionIndexPromotionIndexResponse {
    a_promotion: Array<{
        a_access: {
            a_class: Record<string, unknown>;
            a_event: Record<string, unknown>;
            a_resource: Record<string, unknown>;
            a_service: Record<string, unknown>;
            is_class_all: boolean;
            is_event_all: boolean;
        };
        a_component: {
            id_purchase_item: number;
            k_id: string;
            i_quantity: number;
            text_title: string;
        };
        a_image: {
            i_height: string;
            i_width: string;
            'url-thumbnail': string;
        };
        a_visit_limit: {
            i_limit: number;
            i_period: number;
            i_roll_over_cap: number;
            i_roll_over_expire: number;
            id_roll_over_expire: number;
            id_limit_cycle: number;
            is_reconcile_visit: boolean;
            is_roll_over_expire: boolean;
            is_roll_over_renew: boolean;
            is_rollup: boolean;
            is_visit_conversion: boolean;
        };
        dl_expire: string;
        i_duration: number;
        i_limit: number;
        i_limit_duration: number;
        id_limit_duration: number;
        id_duration: number;
        id_duration_type: number;
        id_program: number;
        id_program_category: number;
        id_program_type: number;
        is_direct_buy_only: boolean;
        is_introductory: boolean;
        is_online: boolean;
        k_promotion: string;
        m_price: string;
        text_description: string;
        text_program: number;
        text_title: string;
        url_buy: string;
    }>;
}
export interface WlLoginMailMailUseParams {
    /** The business for which the email address search is being performed. */
    k_business: string;
    /** The email address to check for. */
    text_mail: string;
}
export interface WlLoginMailMailUseResponse {
    /** If `true`, the user with the specified email address exists in specified business. Otherwise, thi... */
    is_exists: boolean;
    /** Key of the user who using email within the business. */
    uid_use: string | null;
}
export interface WlLoginPromotionPromotionPayPauseDeleteParams {
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export type WlLoginPromotionPromotionPayPauseDeleteResponse = Record<string, unknown>;
export interface WlLoginPromotionPromotionPayPauseGetParams {
    /** Whether need to get all pause periods for the login promotion. */
    is_list: boolean;
    /** The end date of the current hold, in the local time zone. */
    dt_end?: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start?: string | null;
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export interface WlLoginPromotionPromotionPayPauseGetResponse {
    a_pay_pause_list: Array<{
        dl_create: string | null;
        dl_end: string;
        dl_start: string;
        i_hold_day: number | null;
        is_past: boolean;
        k_promotion_pay_pause: string;
        text_note: string | null;
        text_user_create: string | null;
        uid_create: string | null;
    }> | null;
    /** The end date of the current hold, in the local time zone. */
    dt_end: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start: string | null;
    /** The date when the email notification was sent. */
    dtu_date_notification: string | null;
    /** Whether or not to send email notification. */
    is_mail: boolean;
    /** Whether or not to send push notification. */
    is_push: boolean;
    /** Whether or not to send SMS notification. */
    is_sms: boolean;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion: string | null;
    /** Key of the email pattern. */
    k_mail_pattern: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause: string | null;
    /** Additional notes for the promotion payment pause period. */
    text_note: string | null;
}
export interface WlLoginPromotionPromotionPayPausePostParams {
    /** The end date of the current hold, in the local time zone. */
    dt_end?: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start?: string | null;
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export interface WlLoginPromotionPromotionPayPausePostResponse {
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause: string | null;
}
export interface WlLoginPromotionPromotionPayPausePutParams {
    /** The end date of the current hold, in the local time zone. */
    dt_end?: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start?: string | null;
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export interface WlLoginPromotionPromotionPayPausePutResponse {
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause: string | null;
}
export interface WlLoginMemberMemberValidateParams {
    /** Key of the business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberMemberValidateResponse {
    /** List of fields if the user has empty profile fields, which are required for booking. */
    a_empty_fields_booking: Array<string>;
    /** List of fields if the user has empty profile fields, which are required for registration. */
    a_empty_fields_registration: Array<string>;
    /** `true` If the user has credit cards on profile, otherwise `false`. */
    has_credit_card: boolean;
    /** `true` if the user has an outstanding contract, otherwise `false`. */
    has_outstanding_contract: boolean;
    /** `true` If the user has an outstanding waiver for the business, otherwise `false`. */
    has_outstanding_waiver: boolean;
    /** `true` If the user has pending registration quizzes to complete, otherwise `false`. */
    has_pending_quizzes: boolean;
    /** `true` If the user has to provide credit card details before booking, otherwise `false`. */
    is_booking_require_card: boolean;
    /** `true` If the user has to provide credit card details to finish their registration, otherwise `fa... */
    is_register_require_card: boolean;
    /** Home user`s location. */
    k_location: string | null;
}
export interface WlLoginMemberMemberGetParams {
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberMemberGetResponse {
    a_business: Array<{
        can_enter: boolean;
        is_franchisee: boolean;
        is_franchisor: boolean;
        k_business: string;
        k_business_franchisor: string;
        text_title: string;
    }>;
}
export interface WlLoginMemberMemberPostParams {
    /** The user's key. */
    uid: string;
}
export type WlLoginMemberMemberPostResponse = Record<string, unknown>;
export interface WlLoginMemberLoginMemberGetParams {
    /** The business key. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberLoginMemberGetResponse {
    /** The user's ID to get/set. */
    s_member: string;
}
export interface WlLoginMemberLoginMemberPostParams {
    /** The business key. */
    k_business: string;
    /** The user's ID to get/set. */
    s_member: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberLoginMemberPostResponse {
    /** The date when client became a member. */
    dt_member: string;
}
export interface WlLoginMemberMemberValidate63Params {
    /** Key of the business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberMemberValidate63Response {
    a_empty_fields_booking: Array<{
        id_field_general: number;
        k_field: string;
        text_field_title: string;
    }>;
    a_empty_fields_registration: Array<{
        id_field_general: number;
        k_field: string;
        text_field_title: string;
    }>;
    a_empty_fields_required: Array<{
        id_field_general: number;
        k_field: string;
        text_field_title: string;
    }>;
    /** `true` If the user has credit cards on profile, otherwise `false`. */
    has_credit_card: boolean;
    /** `true` if the user has an outstanding contract, otherwise `false`. */
    has_outstanding_contract: boolean;
    /** `true` If the user has an outstanding waiver for the business, otherwise `false`. */
    has_outstanding_waiver: boolean;
    /** `true` If the user has pending registration quizzes to complete, otherwise `false`. */
    has_pending_quizzes: boolean;
    /** `true` If the user has to provide credit card details before booking, otherwise `false`. */
    is_booking_require_card: boolean;
    /** `true` If the user has to provide credit card details to finish their registration, otherwise `fa... */
    is_register_require_card: boolean;
    /** Home user`s location. */
    k_location: string | null;
}
export interface WlLoginMemberLoginMemberListAllParams {
    /** The maximum number of members to return in the list. */
    i_page_size: number;
    /** The key of the business to get a list of members for. */
    k_business: string;
    /** The last member UID from the previous page. */
    uid_last: string;
}
export interface WlLoginMemberLoginMemberListAllResponse {
    /** List of UIDs for all active clients that belong to the business. */
    a_uid: Array<string>;
}
export type WlLoginAddMailUseOkParams = Record<string, unknown>;
export interface WlLoginAddMailUseOkResponse {
    a_error_list: Array<{
        html_message: string;
        s_field: string;
    }>;
    /** The result code of the request. */
    s_code: string;
    /** The result message of the request. */
    text_message: string;
}
export interface WlLoginAttendanceAttendanceListParams {
    /** The local date of the class or event session. */
    dt_date_local: string;
    /** If `true`, then return the purchase used to pay for session. */
    is_purchase_info_return: boolean;
    /** The appointment key. Not used if requesting information for a class or event session. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** The class period key. Not used if requesting information for an appointment. */
    k_class_period: string;
}
export interface WlLoginAttendanceAttendanceListResponse {
    a_list_active: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        a_photo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_progress: {
            id_field: number;
            id_measurement_unit: number;
            id_type: number;
            k_field: string;
            x_value: string;
            text_name: string;
        };
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        };
        a_resource: {
            i_index: number;
            k_resource: string;
            text_alias: string;
            text_title: string;
        };
        a_wait_confirm: {
            s_day: string;
            s_time: string;
        };
        a_wearable: {
            id_type: number;
            is_remove: boolean;
            s_sensor: string;
            text_name: string;
            uid: string;
        };
        can_profile: boolean;
        dt_book: string;
        dt_date: string;
        dt_expire: string;
        dt_register: string;
        html_age: string;
        html_book_by: string;
        html_gender_class: string;
        html_member: string;
        html_tooltip_book_by: string;
        i: number;
        i_left: number;
        i_order: number;
        i_total: number;
        i_visit_return?: number;
        id_gender: number;
        id_pass_prospect: number;
        id_program: number;
        id_visit: number;
        is_attend: boolean;
        is_duration_pass: boolean;
        is_deposit: boolean;
        is_early: boolean;
        is_free: boolean;
        is_hidden: boolean;
        is_penalty: boolean;
        is_promotion_first: boolean;
        is_promotion_last: boolean;
        is_unlimited: boolean;
        is_visit: boolean;
        is_wait: boolean;
        is_wait_confirm: boolean;
        is_wait_priority: boolean;
        k_location: string;
        k_login_promotion: string;
        k_visit: string;
        o_purchase_item: string | null;
        s_expire: string;
        s_firstname: string;
        s_lastname: string;
        s_note: string;
        s_promotion: string;
        text_expire: string;
        text_firstname: string;
        text_lastname: string;
        text_note: string;
        text_promotion_return?: string;
        text_promotion: string;
        text_restrict_title: string;
        text_visit_status_class: string;
        text_visit_status_icon: string;
        text_wearable: string;
        uid: string;
        uid_book: string;
        'url-cancel': string;
        'url-cancel-admin': string;
        'url-login-view': string;
        'url-mail': string;
        'url-profile': string;
    }>;
    a_list_confirm: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        a_photo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_progress: {
            id_field: number;
            id_measurement_unit: number;
            id_type: number;
            k_field: string;
            x_value: string;
            text_name: string;
        };
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        };
        a_resource: {
            i_index: number;
            k_resource: string;
            text_alias: string;
            text_title: string;
        };
        a_wait_confirm: {
            s_day: string;
            s_time: string;
        };
        a_wearable: {
            id_type: number;
            is_remove: boolean;
            s_sensor: string;
            text_name: string;
            uid: string;
        };
        can_profile: boolean;
        dt_book: string;
        dt_date: string;
        dt_expire: string;
        dt_register: string;
        html_age: string;
        html_book_by: string;
        html_gender_class: string;
        html_member: string;
        html_tooltip_book_by: string;
        i: number;
        i_left: number;
        i_order: number;
        i_total: number;
        i_visit_return?: number;
        id_gender: number;
        id_pass_prospect: number;
        id_program: number;
        id_visit: number;
        is_attend: boolean;
        is_duration_pass: boolean;
        is_deposit: boolean;
        is_early: boolean;
        is_free: boolean;
        is_hidden: boolean;
        is_penalty: boolean;
        is_promotion_first: boolean;
        is_promotion_last: boolean;
        is_unlimited: boolean;
        is_visit: boolean;
        is_wait: boolean;
        is_wait_confirm: boolean;
        is_wait_priority: boolean;
        k_location: string;
        k_login_promotion: string;
        k_visit: string;
        o_purchase_item: string | null;
        s_expire: string;
        s_firstname: string;
        s_lastname: string;
        s_note: string;
        s_promotion: string;
        text_expire: string;
        text_firstname: string;
        text_lastname: string;
        text_note: string;
        text_promotion_return?: string;
        text_promotion: string;
        text_restrict_title: string;
        text_visit_status_class: string;
        text_visit_status_icon: string;
        text_wearable: string;
        uid: string;
        uid_book: string;
        'url-cancel': string;
        'url-cancel-admin': string;
        'url-login-view': string;
        'url-mail': string;
        'url-profile': string;
    }>;
    a_list_wait: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        a_photo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_progress: {
            id_field: number;
            id_measurement_unit: number;
            id_type: number;
            k_field: string;
            x_value: string;
            text_name: string;
        };
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        };
        a_resource: {
            i_index: number;
            k_resource: string;
            text_alias: string;
            text_title: string;
        };
        a_wait_confirm: {
            s_day: string;
            s_time: string;
        };
        a_wearable: {
            id_type: number;
            is_remove: boolean;
            s_sensor: string;
            text_name: string;
            uid: string;
        };
        can_profile: boolean;
        dt_book: string;
        dt_date: string;
        dt_expire: string;
        dt_register: string;
        html_age: string;
        html_book_by: string;
        html_gender_class: string;
        html_member: string;
        html_tooltip_book_by: string;
        i: number;
        i_left: number;
        i_order: number;
        i_total: number;
        i_visit_return?: number;
        id_gender: number;
        id_pass_prospect: number;
        id_program: number;
        id_visit: number;
        is_attend: boolean;
        is_duration_pass: boolean;
        is_deposit: boolean;
        is_early: boolean;
        is_free: boolean;
        is_hidden: boolean;
        is_penalty: boolean;
        is_promotion_first: boolean;
        is_promotion_last: boolean;
        is_unlimited: boolean;
        is_visit: boolean;
        is_wait: boolean;
        is_wait_confirm: boolean;
        is_wait_priority: boolean;
        k_location: string;
        k_login_promotion: string;
        k_visit: string;
        o_purchase_item: string | null;
        s_expire: string;
        s_firstname: string;
        s_lastname: string;
        s_note: string;
        s_promotion: string;
        text_expire: string;
        text_firstname: string;
        text_lastname: string;
        text_note: string;
        text_promotion_return?: string;
        text_promotion: string;
        text_restrict_title: string;
        text_visit_status_class: string;
        text_visit_status_icon: string;
        text_wearable: string;
        uid: string;
        uid_book: string;
        'url-cancel': string;
        'url-cancel-admin': string;
        'url-login-view': string;
        'url-mail': string;
        'url-profile': string;
    }>;
    /** The maximum capacity of the class or event session. */
    i_capacity: number;
    /** Count client on the attendance. */
    i_client: number;
    /** The maximum number of clients on wait list of the class or event session. */
    i_wait_list_limit: number;
    /** `true` to use class/event specific wait list limit, `false` to use the limit from default policies. */
    is_wait_list_limit: boolean;
    /** The Location key. */
    k_location: string;
}
export interface WlLoginAttendanceAttendanceInfoParams {
    /** Start date of the class in MySQL format in local time. */
    dt_date_local: string;
    /** ID of appointment to get information for. */
    k_appointment: string;
    /** ID of business to get information for. */
    k_business: string;
    /** ID of class period to get information for. */
    k_class_period: string;
}
export interface WlLoginAttendanceAttendanceInfoResponse {
    a_appointment_visit_info: Array<{
        is_deny: boolean;
        is_notify_request_accept: boolean;
        is_notify_request_deny: boolean;
        is_request: boolean;
    }>;
    a_logo: Array<{
        is_empty: boolean;
        s_url: string;
    }>;
    a_purchase_option_default: Array<{
        id_sale: number;
        k_id: string | null;
        is_single_default: boolean;
    }>;
    /** Assets which are bound to this session. */
    a_resource: Array<string>;
    a_resource_layout: Array<{
        a_client: {
            text_client: string;
            uid: string;
        };
        a_resource_available: Array<string>;
        k_resource_layout: string;
        text_resource_type: string;
    }>;
    a_staff: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            url_logo: string;
        };
        k_staff: string;
        uid_staff: string;
        html_firstname: string;
        html_lastname: string;
    }>;
    /** Confirmation date+time of appointment in MySQL format. If client never confirmed, will be zero da... */
    dt_confirm: string;
    /** Start date of the session in MySQL format in GMT. */
    dt_date_global: string;
    /** End date and time of the session in MySQL format in local timezone. */
    dtl_end: string;
    /** End date and time of the session in MySQL format in GMT. */
    dtu_end: string;
    /** Date and time in UTC when the visit is promoted from wait list to active list. */
    dtu_wait_promote: string;
    /** Whether notes added to visit. */
    has_note: boolean;
    /** Duration of the session in minutes. */
    i_duration: number;
    /** A list of types of visit note. */
    id_note: number | null;
    /** Identifiers for services types. */
    id_service: number;
    /** Whether this service be carried out in Zoom. */
    is_start_virtual_service: boolean;
    /** Class identifier. Not empty if service is class or event reservation. */
    k_class: string;
    /** Location identifier. */
    k_location: string;
    /** Resource identifier. Not empty if service is asset reservation. */
    k_resource: string;
    /** Service identifier. Not empty if service is appointment reservation. */
    k_service: string;
    /** Location name. */
    text_location: string;
    /** Time when service starts in format `8:00AM`. */
    text_time_end: string;
    /** Start time of the session in format '9:30AM'. */
    text_time_start: string;
    /** Title of the appointment. */
    text_title: string;
    /** URL that leads directly to the class/event booking page in the Client Web App. */
    url_booking: string;
}
export interface WlLoginAttendanceAttendanceListByTokenParams {
    /** The local date of the class or event session. */
    dt_date_local: string;
    /** If `true`, then return the purchase used to pay for session. */
    is_purchase_info_return: boolean;
    /** The appointment key. Not used if requesting information for a class or event session. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** The class period key. Not used if requesting information for an appointment. */
    k_class_period: string;
    /** The security token. */
    text_token: string;
}
export interface WlLoginAttendanceAttendanceListByTokenResponse {
    a_list_active: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        a_photo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_progress: {
            id_field: number;
            id_measurement_unit: number;
            id_type: number;
            k_field: string;
            x_value: string;
            text_name: string;
        };
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        };
        a_resource: {
            i_index: number;
            k_resource: string;
            text_alias: string;
            text_title: string;
        };
        a_wait_confirm: {
            s_day: string;
            s_time: string;
        };
        a_wearable: {
            id_type: number;
            is_remove: boolean;
            s_sensor: string;
            text_name: string;
            uid: string;
        };
        can_profile: boolean;
        dt_book: string;
        dt_date: string;
        dt_expire: string;
        dt_register: string;
        html_age: string;
        html_book_by: string;
        html_gender_class: string;
        html_member: string;
        html_tooltip_book_by: string;
        i: number;
        i_left: number;
        i_order: number;
        i_total: number;
        i_visit_return?: number;
        id_gender: number;
        id_pass_prospect: number;
        id_program: number;
        id_visit: number;
        is_attend: boolean;
        is_duration_pass: boolean;
        is_deposit: boolean;
        is_early: boolean;
        is_free: boolean;
        is_hidden: boolean;
        is_penalty: boolean;
        is_promotion_first: boolean;
        is_promotion_last: boolean;
        is_unlimited: boolean;
        is_visit: boolean;
        is_wait: boolean;
        is_wait_confirm: boolean;
        is_wait_priority: boolean;
        k_location: string;
        k_login_promotion: string;
        k_visit: string;
        o_purchase_item: string | null;
        s_expire: string;
        s_firstname: string;
        s_lastname: string;
        s_note: string;
        s_promotion: string;
        text_expire: string;
        text_firstname: string;
        text_lastname: string;
        text_note: string;
        text_promotion_return?: string;
        text_promotion: string;
        text_restrict_title: string;
        text_visit_status_class: string;
        text_visit_status_icon: string;
        text_wearable: string;
        uid: string;
        uid_book: string;
        'url-cancel': string;
        'url-cancel-admin': string;
        'url-login-view': string;
        'url-mail': string;
        'url-profile': string;
    }>;
    a_list_confirm: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        a_photo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_progress: {
            id_field: number;
            id_measurement_unit: number;
            id_type: number;
            k_field: string;
            x_value: string;
            text_name: string;
        };
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        };
        a_resource: {
            i_index: number;
            k_resource: string;
            text_alias: string;
            text_title: string;
        };
        a_wait_confirm: {
            s_day: string;
            s_time: string;
        };
        a_wearable: {
            id_type: number;
            is_remove: boolean;
            s_sensor: string;
            text_name: string;
            uid: string;
        };
        can_profile: boolean;
        dt_book: string;
        dt_date: string;
        dt_expire: string;
        dt_register: string;
        html_age: string;
        html_book_by: string;
        html_gender_class: string;
        html_member: string;
        html_tooltip_book_by: string;
        i: number;
        i_left: number;
        i_order: number;
        i_total: number;
        i_visit_return?: number;
        id_gender: number;
        id_pass_prospect: number;
        id_program: number;
        id_visit: number;
        is_attend: boolean;
        is_duration_pass: boolean;
        is_deposit: boolean;
        is_early: boolean;
        is_free: boolean;
        is_hidden: boolean;
        is_penalty: boolean;
        is_promotion_first: boolean;
        is_promotion_last: boolean;
        is_unlimited: boolean;
        is_visit: boolean;
        is_wait: boolean;
        is_wait_confirm: boolean;
        is_wait_priority: boolean;
        k_location: string;
        k_login_promotion: string;
        k_visit: string;
        o_purchase_item: string | null;
        s_expire: string;
        s_firstname: string;
        s_lastname: string;
        s_note: string;
        s_promotion: string;
        text_expire: string;
        text_firstname: string;
        text_lastname: string;
        text_note: string;
        text_promotion_return?: string;
        text_promotion: string;
        text_restrict_title: string;
        text_visit_status_class: string;
        text_visit_status_icon: string;
        text_wearable: string;
        uid: string;
        uid_book: string;
        'url-cancel': string;
        'url-cancel-admin': string;
        'url-login-view': string;
        'url-mail': string;
        'url-profile': string;
    }>;
    a_list_wait: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        a_photo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_progress: {
            id_field: number;
            id_measurement_unit: number;
            id_type: number;
            k_field: string;
            x_value: string;
            text_name: string;
        };
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        };
        a_resource: {
            i_index: number;
            k_resource: string;
            text_alias: string;
            text_title: string;
        };
        a_wait_confirm: {
            s_day: string;
            s_time: string;
        };
        a_wearable: {
            id_type: number;
            is_remove: boolean;
            s_sensor: string;
            text_name: string;
            uid: string;
        };
        can_profile: boolean;
        dt_book: string;
        dt_date: string;
        dt_expire: string;
        dt_register: string;
        html_age: string;
        html_book_by: string;
        html_gender_class: string;
        html_member: string;
        html_tooltip_book_by: string;
        i: number;
        i_left: number;
        i_order: number;
        i_total: number;
        i_visit_return?: number;
        id_gender: number;
        id_pass_prospect: number;
        id_program: number;
        id_visit: number;
        is_attend: boolean;
        is_duration_pass: boolean;
        is_deposit: boolean;
        is_early: boolean;
        is_free: boolean;
        is_hidden: boolean;
        is_penalty: boolean;
        is_promotion_first: boolean;
        is_promotion_last: boolean;
        is_unlimited: boolean;
        is_visit: boolean;
        is_wait: boolean;
        is_wait_confirm: boolean;
        is_wait_priority: boolean;
        k_location: string;
        k_login_promotion: string;
        k_visit: string;
        o_purchase_item: string | null;
        s_expire: string;
        s_firstname: string;
        s_lastname: string;
        s_note: string;
        s_promotion: string;
        text_expire: string;
        text_firstname: string;
        text_lastname: string;
        text_note: string;
        text_promotion_return?: string;
        text_promotion: string;
        text_restrict_title: string;
        text_visit_status_class: string;
        text_visit_status_icon: string;
        text_wearable: string;
        uid: string;
        uid_book: string;
        'url-cancel': string;
        'url-cancel-admin': string;
        'url-login-view': string;
        'url-mail': string;
        'url-profile': string;
    }>;
    /** The maximum capacity of the class or event session. */
    i_capacity: number;
    /** Count client on the attendance. */
    i_client: number;
    /** The maximum number of clients on wait list of the class or event session. */
    i_wait_list_limit: number;
    /** `true` to use class/event specific wait list limit, `false` to use the limit from default policies. */
    is_wait_list_limit: boolean;
    /** The Location key. */
    k_location: string;
}
export interface WlLoginAttendanceAttendanceInfoByTokenParams {
    /** Start date of the class in MySQL format in local time. */
    dt_date_local: string;
    /** ID of appointment to get information for. */
    k_appointment: string;
    /** ID of business to get information for. */
    k_business: string;
    /** ID of class period to get information for. */
    k_class_period: string;
    /** The security token. */
    text_token: string;
}
export interface WlLoginAttendanceAttendanceInfoByTokenResponse {
    a_appointment_visit_info: Array<{
        is_deny: boolean;
        is_notify_request_accept: boolean;
        is_notify_request_deny: boolean;
        is_request: boolean;
    }>;
    a_logo: Array<{
        is_empty: boolean;
        s_url: string;
    }>;
    a_purchase_option_default: Array<{
        id_sale: number;
        k_id: string | null;
        is_single_default: boolean;
    }>;
    /** Assets which are bound to this session. */
    a_resource: Array<string>;
    a_resource_layout: Array<{
        a_client: {
            text_client: string;
            uid: string;
        };
        a_resource_available: Array<string>;
        k_resource_layout: string;
        text_resource_type: string;
    }>;
    a_staff: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            url_logo: string;
        };
        k_staff: string;
        uid_staff: string;
        html_firstname: string;
        html_lastname: string;
    }>;
    /** Confirmation date+time of appointment in MySQL format. If client never confirmed, will be zero da... */
    dt_confirm: string;
    /** Start date of the session in MySQL format in GMT. */
    dt_date_global: string;
    /** End date and time of the session in MySQL format in local timezone. */
    dtl_end: string;
    /** End date and time of the session in MySQL format in GMT. */
    dtu_end: string;
    /** Date and time in UTC when the visit is promoted from wait list to active list. */
    dtu_wait_promote: string;
    /** Whether notes added to visit. */
    has_note: boolean;
    /** Duration of the session in minutes. */
    i_duration: number;
    /** A list of types of visit note. */
    id_note: number | null;
    /** Identifiers for services types. */
    id_service: number;
    /** Whether this service be carried out in Zoom. */
    is_start_virtual_service: boolean;
    /** Class identifier. Not empty if service is class or event reservation. */
    k_class: string;
    /** Location identifier. */
    k_location: string;
    /** Resource identifier. Not empty if service is asset reservation. */
    k_resource: string;
    /** Service identifier. Not empty if service is appointment reservation. */
    k_service: string;
    /** Location name. */
    text_location: string;
    /** Time when service starts in format `8:00AM`. */
    text_time_end: string;
    /** Start time of the session in format '9:30AM'. */
    text_time_start: string;
    /** Title of the appointment. */
    text_title: string;
    /** URL that leads directly to the class/event booking page in the Client Web App. */
    url_booking: string;
}
export interface WlLoginSearchConcertoParams {
    /** Business to search user in. */
    k_business: string;
    /** Email to search. */
    text_mail: string;
    /** Phone to search. */
    text_phone: string;
}
export interface WlLoginSearchConcertoResponse {
    /** User's primary key. */
    uid: string;
}
export interface WlLoginTypeLoginTypeParams {
    /** If `true`, this `k_business` is a franchisor, and login types of all franchisees should be returned. */
    is_franchisor: boolean;
    /** The business key used internally by WellnessLiving. */
    k_business: string;
}
export interface WlLoginTypeLoginTypeResponse {
    a_login_type_list: Array<{
        id_client_type: number;
        is_member: boolean;
        k_login_type: string;
        s_title: string;
        text_title: string;
    }>;
}
export interface WlLoginPermissionPermissionParams {
    /** The key of the purchased promotion. */
    k_login_promotion: string;
}
export type WlLoginPermissionPermissionResponse = Record<string, unknown>;
export interface WlLoginAgreeAgreeGetParams {
    /** The key of business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginAgreeAgreeGetResponse {
    /** Formatted text of business liability release. Not empty if the business has a liability release a... */
    html_contract: string;
}
export interface WlLoginAgreeAgreePostParams {
    /** The key of business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export type WlLoginAgreeAgreePostResponse = Record<string, unknown>;
export interface WlLoginCouponCouponParams {
    /** The business key. */
    k_business: string;
    /** The gift card. */
    s_code: string;
}
export interface WlLoginCouponCouponResponse {
    /** The gift card reference number for this specific user. WellnessLiving uses this reference number ... */
    k_login_coupon: string;
    /** The gift card amount. */
    m_amount: string;
}
export interface WlLoginProductProductParams {
    /** Maximal date and time of purchase in UTC. Empty string means no filter by maximal date. */
    dtu_end: string;
    /** Minimal date and time of purchase in UTC. Empty string means no filter by minimal date. */
    dtu_start: string;
    /** Number of the page to get. */
    i_page: number;
    /** Page size. */
    i_page_size: number;
    /** ID of the payment method. One of the [RsPayMethodSid](#/components/schemas/RsPayMethodSid) consta... */
    id_pay_method: number;
    /** Business key. */
    k_business: string;
    /** Location key. Empty string means no filter by location. */
    k_location: string;
    /** Product option key. Empty string means no filter by product option. */
    k_shop_product_option: string;
    /** Maximum price of the product. 0 means no filter by maximum price. */
    m_price_max: string;
    /** Minimum price of the product. */
    m_price_min: string;
    /** User key. Empty string means return products purchased by walk-in. */
    uid: string;
}
export interface WlLoginProductProductResponse {
    a_login_product: Array<{
        dtu_purchase: string;
        i_quantity: number;
        k_shop_product_option: string;
        m_price: string;
        m_total_amount: string;
        text_location: string;
        text_product: string;
    }>;
}
export interface WlQuizResponseResponse65DeleteParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export type WlQuizResponseResponse65DeleteResponse = Record<string, unknown>;
export interface WlQuizResponseResponse65GetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for load answers for response, `false` otherwise. */
    is_answer: boolean;
    is_backend: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponse65GetResponse {
    a_access_log: Array<{
        dtu_activity: string;
        uid_actor: string;
        id_activity: number;
        text_activity: string;
        text_date: string;
        text_actor: string;
        url_actor: string;
    }>;
    a_element: Array<{
        a_amendment: Record<string, unknown>;
        a_answer: Array<number>;
        a_list: Array<string>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_multiple: boolean;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_heading: string;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        has_duplicate: boolean;
        html_caption: string;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_source: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command: string;
        text_caption: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        can_upload: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        k_id: string;
        k_id_custom_markup_image: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_link_default_markup_image: string;
        s_markup_image: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        url_custom_default_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_signature_footer: string;
        html_signature_header: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_signature: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_answer: string;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        i_rate: number;
        i_scale: number;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        has_duplicate: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_image_left: string;
        k_id_image_right: string;
        k_id_source_left: string;
        k_id_source_right: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command_left: string;
        s_command_right: string;
        s_markup_image: string;
        text_left_image: string;
        text_note: string | null;
        text_right_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_content: string;
        html_heading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_content: string;
        text_heading: string;
        xml_content: string;
        xml_heading: string;
    }>;
    a_service_info: Array<{
        text_date: string;
        text_location: string;
        text_service: string;
        text_staff_member: string;
    }>;
    /** Whether response can be amended by current user. */
    can_amend: boolean;
    /** Date when response was submitted. */
    dtu_response: string;
    /** List of sources where quiz response can be generated. */
    id_source: number;
    /** List of response statuses. */
    id_status: number;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Date when response added. */
    text_add_date: string;
    /** Date when response amended. */
    text_amend_date: string;
    /** Name of the user who amend the response. */
    text_amend_user: string;
    /** Date when response completed. */
    text_complete_date: string;
    /** Name of the user who complete the response. */
    text_complete_user: string;
    /** Name of the user who owned the response. */
    text_response_by: string;
    /** Title of the filled form. */
    text_title: string | null;
}
export interface WlQuizResponseResponse65PostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    is_backend: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponse65PostResponse {
    /** Quiz response key. */
    k_quiz_response: string | null;
}
export interface WlQuizResponseResponse65PutParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
    /** User's key for the response association. */
    uid_link?: string | null;
}
export type WlQuizResponseResponse65PutResponse = Record<string, unknown>;
export interface WlQuizResponseResponseDeleteParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export type WlQuizResponseResponseDeleteResponse = Record<string, unknown>;
export interface WlQuizResponseResponseGetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for load answers for response, `false` otherwise. */
    is_answer: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponseGetResponse {
    a_access_log: Array<{
        dtu_activity: string;
        uid_actor: string;
        id_activity: number;
        text_activity: string;
        text_date: string;
        text_actor: string;
        url_actor: string;
    }>;
    a_element: Array<{
        a_amendment: Record<string, unknown>;
        a_answer: Array<number>;
        a_list: Array<string>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_multiple: boolean;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_heading: string;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        has_duplicate: boolean;
        html_caption: string;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_source: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command: string;
        text_caption: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        can_upload: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        k_id: string;
        k_id_custom_markup_image: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_link_default_markup_image: string;
        s_markup_image: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        url_custom_default_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_heading: string;
        html_signature_footer: string;
        html_signature_header: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_signature: string;
        text_heading: string;
        text_note: string | null;
        text_subheading: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_answer: string;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
    } | {
        a_amendment: Record<string, unknown>;
        html_description: string;
        html_question: string;
        i_rate: number;
        i_scale: number;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_description: string;
        text_note: string | null;
        text_question: string;
        xml_description: string;
        xml_question: string;
    } | {
        a_amendment: Record<string, unknown>;
        a_markup_image: Array<unknown>;
        has_duplicate: boolean;
        html_heading: string;
        html_subheading: string;
        id_element: number;
        is_require: boolean;
        k_id_image_left: string;
        k_id_image_right: string;
        k_id_source_left: string;
        k_id_source_right: string;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        s_command_left: string;
        s_command_right: string;
        s_markup_image: string;
        text_left_image: string;
        text_note: string | null;
        text_right_image: string;
        xml_heading: string;
        xml_subheading: string;
    } | {
        a_amendment: Record<string, unknown>;
        html_content: string;
        html_heading: string;
        id_element: number;
        is_require: boolean;
        k_quiz_element?: string | null;
        k_quiz_element_old: string | null;
        text_content: string;
        text_heading: string;
        xml_content: string;
        xml_heading: string;
    }>;
    a_service_info: Array<{
        text_date: string;
        text_location: string;
        text_service: string;
        text_staff_member: string;
    }>;
    /** Whether response can be amended by current user. */
    can_amend: boolean;
    /** Date when response was submitted. */
    dtu_response: string;
    /** List of sources where quiz response can be generated. */
    id_source: number;
    /** List of response statuses. */
    id_status: number;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Date when response added. */
    text_add_date: string;
    /** Date when response amended. */
    text_amend_date: string;
    /** Name of the user who amend the response. */
    text_amend_user: string;
    /** Date when response completed. */
    text_complete_date: string;
    /** Name of the user who complete the response. */
    text_complete_user: string;
    /** Name of the user who owned the response. */
    text_response_by: string;
    /** Title of the filled form. */
    text_title: string | null;
}
export interface WlQuizResponseResponsePostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponsePostResponse {
    /** Quiz response key. */
    k_quiz_response: string | null;
}
export interface WlQuizResponseResponsePutParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
    /** User's key for the response association. */
    uid_link?: string | null;
}
export type WlQuizResponseResponsePutResponse = Record<string, unknown>;
export interface WlCatalogCatalogListElementParams {
    /** Information about the discount code: */
    a_discount_code: Array<{
        f_amount: string;
        f_percent: number;
        i_limit: number;
        k_discount_code: string;
        s_discount_code: string;
    }>;
    /** The list of items grouped by sale categories on the store page. */
    a_sale_id_group: Array<{
        id_sale: number;
        k_id: string;
        k_shop_product_option: string;
    }>;
    /** The image height in pixels. Specify this value if you need the image to be returned in a specific... */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need the image to be returned in a specific ... */
    i_image_width: number;
    /** The promotion image height in pixels. Specify this value if you need the image to be returned in ... */
    i_promotion_image_height: number;
    /** The promotion image width in pixels. Specify this value if you need the image to be returned in a... */
    i_promotion_image_width: number;
    /** The ID of item category. */
    id_sale: number;
    /** Determines whether the API is called in the backend mode. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The item key. */
    k_id: string;
    /** The location key. */
    k_location: string;
    /** The UID of a customer (user) for whom the purchase is made. This is used in the backend to calcul... */
    uid_customer: string;
    /** The client prorate date. */
    dl_client_prorate?: string | null;
    /** The product option key. */
    k_shop_product_option?: string | null;
    /** A list of goods to get information for. Every element must contain the next keys: */
    text_item?: string | null;
}
export interface WlCatalogCatalogListElementResponse {
    a_age_restriction: Array<{
        i_age_from: number | null;
        i_age_to: number | null;
        is_age_public: boolean;
    }>;
    a_data: Array<{
        a_service_access: Array<number>;
        is_renew_public: boolean;
        a_component: {
            id_program: number;
            id_purchase_item: number;
            id_sale: number;
            k_id: string;
            text_title: string;
        };
        a_staff: {
            k_staff: string;
            uid_staff: string;
            text_family: string;
            text_staff: string;
        };
        dl_expire: string;
        dl_now: string;
        dl_start: string;
        i_duration: number;
        id_activation: number;
        id_duration: number;
        id_duration_type: number;
    }>;
    a_image: Array<{
        i_height: number;
        i_width: number;
        is_empty: boolean;
        s_url: string;
    }>;
    a_image_list: Array<{
        i_height: number;
        i_width: number;
        is_empty: boolean;
        s_url: string;
    }>;
    a_installment_template: Array<{
        i_count: number;
        id_duration: number;
        i_period: number;
        k_currency: string;
        k_pay_installment_template: string;
        m_amount: string;
        s_duration: string;
    }>;
    a_item: Array<{
        a_data: {
            is_price_breakdown: boolean;
        };
        a_image: {
            a_image: Record<string, unknown>;
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        a_tax: {
            f_tax: number;
            f_tax_discount: string;
            f_tax_discount_login: string;
            f_value: number;
            id_tax: number;
            k_tax: string;
            s_tax: string;
        };
        id_purchase_option_view: number;
        m_discount_code: string;
        m_discount_login: string;
        s_comment: string;
        s_price: string;
        s_sale: string;
        s_title: string;
    }>;
    a_tax: Array<{
        f_tax: number;
        f_tax_discount: string;
        f_tax_discount_login: string;
        f_value: number;
        id_tax: number;
        k_tax: string;
        s_tax: string;
    }>;
    /** The price of the sale item. */
    f_price: string | null;
    /** The price of the sale item, including tax. */
    f_price_include: string | null;
    /** The retail price of the product. This will be empty if this isn't a product. */
    f_price_retail_product: string;
    /** Full price of event. This will be empty if this isn't an event. */
    f_price_total_enrollment: string;
    /** The tax amount. */
    f_tax: string | null;
    /** The sale item description. */
    html_description: string | null;
    /** Special instructions for the sale item. */
    html_special: string | null;
    /** A list of purchase types. */
    id_purchase_item: number;
    /** A list of Purchase Option view types. */
    id_purchase_option_view: number;
    /** List of sale categories on the store page. */
    id_sale: number;
    /** If `true`, the item requires a contract. Otherwise, this will be `false`. */
    is_contract: boolean;
    /** The item key. */
    k_id: string;
    /** The product option key. */
    k_shop_product_option: string | null;
    /** The discount amount for a discount code. */
    m_discount_code: string;
    /** The discount amount for a user's type. */
    m_discount_login: string;
    /** The price on the price tag. */
    m_price: string;
    /** The price, including taxes. */
    m_price_include: string;
    /** The tax amount. */
    m_tax: string;
    /** Additional comment(s). */
    s_comment: string;
    /** The price of the sale item in a human-readable format. */
    s_price: string | null;
    /** The category title of the sale item. */
    s_sale: string | null;
    /** The sale item title. */
    s_title: string | null;
    /** The price on the price tag, with the currency sign. */
    text_price: string;
    /** The title of the item category. */
    text_sale: string;
    /** The item title. */
    text_title: string;
    /** A detailed description. */
    xml_description: string | null;
    /** Special instructions. */
    xml_special: string | null;
}
export interface WlCatalogCatalogListListParams {
    /** Arguments from direct purchase link, which can give additional access to products, which are avai... */
    a_direct_link: Array<{
        id_sale: number;
        is_product: boolean;
        k_id: string;
    }>;
    /** `true` to consider the requirement to have a credit card for booking */
    is_credit_card_check: boolean;
    /** The business key. */
    k_business: string;
    /** The key of a location. If `0`, all products in the business are retrieved. */
    k_location: string;
    /** The key of user. */
    uid: string;
}
export interface WlCatalogCatalogListListResponse {
    a_product: Array<{
        a_location: Array<string>;
        a_shop_category: Array<string>;
        dtu_create: string;
        f_price: string;
        hide_application: boolean;
        id_sale: number;
        is_direct: boolean;
        is_introductory: boolean;
        k_id: string;
        k_shop_category: string;
        s_key: string;
        s_title: string;
        url_catalog: string;
    }>;
    a_product_duplicate: Array<{
        a_location: Array<string>;
        a_shop_category: Array<string>;
        dtu_create: string;
        f_price: string;
        hide_application: boolean;
        id_sale: number;
        is_direct: boolean;
        is_introductory: boolean;
        k_id: string;
        k_shop_category: string;
        s_key: string;
        s_title: string;
        url_catalog: string;
    }>;
}
export interface WlCatalogCatalogListCatalogProductParams {
    /** Additional data to filter products. */
    a_filter: Array<{
        a_quick_config?: {
            k_visit?: string;
        };
        a_sale_id?: Array<number>;
        a_shop_category?: Array<string>;
        i_last: number;
        id_order: number | null;
        id_sort: number;
        k_business: string;
        k_location?: string;
        s_title?: string;
        uid?: string;
    }>;
    /** The currently shown element. */
    i_last: number;
    /** The business key to get products for. */
    k_business: string;
    /** The selected shop category. */
    k_shop_category: string;
    /** The cache key used to get products. */
    s_cache_key: string;
}
export interface WlCatalogCatalogListCatalogProductResponse {
    a_category_sort: Array<{
        a_order: Array<number>;
        id_order: number | null;
        id_sort: number;
    }>;
    a_product: Array<{
        html_price: string;
        html_price_early?: string;
        id_sale: number;
        k_id: string;
        k_shop_category?: string;
        s_title: string;
        url_catalog: string;
    }>;
    /** The currently shown element. */
    i_last: number;
    /** Determines whether more products can be loaded. */
    is_load_more: boolean;
    /** The cache key used to get products. */
    s_cache_key: string;
}
export interface WlCatalogPaymentPaymentParams {
    /** The staff commission earned for this purchase. If this isn't empty, it has the next fields: */
    a_commission: Array<{
        uid_staff: string;
        k_staff: string;
        k_staff_pay: string;
    }>;
    /** The WellnessLiving mode type (required). One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSi... */
    id_mode: number;
    /** Determines if the payment owner is an anonymous user (optional). */
    is_guest: boolean;
    /** Specify this if operations are performed by the staff member (optional). */
    is_staff: boolean;
    /** The business key (required). */
    k_business: string;
    /** The location key (required). */
    k_location: string;
    /** The user's key (required). */
    uid: string;
}
export interface WlCatalogPaymentPaymentResponse {
    /** The key of login activity. */
    k_login_activity: string | null;
    /** The purchase key created during payment. */
    k_purchase: string;
}
export interface WlCatalogCartCartParams {
    /** The list of items in the cart. */
    a_item: Array<{
        dl_client_prorate: string;
        i_quantity: number;
        id_sale: number;
        k_id: string;
        k_login_prize?: string | null;
        k_shop_product_option?: string;
    }>;
    /** Whether selected login prize should be auto applied to first applicable item. */
    is_auto_apply_prize: boolean;
    /** The location key. */
    k_location: string;
    /** The login prize key. */
    k_login_prize: string;
    /** The user key. */
    uid: string;
    /** The discount code. */
    text_discount_code?: string | null;
}
export interface WlCatalogCartCartResponse {
    /** The list of discounts for each item. */
    a_discount_item: Array<string>;
    a_item: Array<{
        dl_client_prorate: string;
        i_quantity: number;
        id_sale: number;
        k_id: string;
        k_login_prize?: string | null;
        k_shop_product_option?: string;
    }>;
    a_prize_propose: Array<{
        i_score: number;
        k_reward_prize: string;
        text_discount: string;
        text_title: string;
    }>;
    a_reward_item: Array<{
        i_quantity: number;
        id_sale: number;
        is_login_prize_used: boolean;
        k_id: string;
        k_shop_product_option: string;
    }>;
    a_reward_propose: Array<{
        k_login_prize: string;
        text_discount: string;
        text_discount_applied: string;
        text_discount_purpose: string;
        text_title: string;
    }>;
    /** Values derived for individual tax rates. */
    a_tax_list: Array<string>;
    /** Amount of client's reward points. */
    i_score: number | null;
    /** The full discount of the cart. */
    m_discount: string | null;
    /** The total discount amount. */
    m_discount_total: string;
    /** The total amount in the catalog cart without tax. */
    m_subtotal: string | null;
    /** The tax amount. */
    m_tax: string | null;
    /** The amount of appointment tips. */
    m_tip_purchase: string | null;
    /** The total amount in the catalog cart. */
    m_total: string | null;
}
export interface WlCatalogCartLimitQuantityParams {
    /** The cart items list with the next structure: */
    a_item: Array<{
        i_quantity: number;
        id_sale: number;
        k_id: string;
        k_shop_product_option: string;
    }>;
    /** The business in which the purchase will be made. */
    k_business: string;
    /** The promotion key to add to the cart. */
    k_promotion: string;
    /** The user key. */
    uid: string;
}
export interface WlCatalogCartLimitQuantityResponse {
    /** The quantity if promotions have already been purchased by the current user. */
    i_purchase_already: number | null;
    /** The current quantity of a promotion with the quantity limit in the cart. */
    i_purchase_current: number | null;
    /** The quantity limit of the promotion. */
    i_quantity_limit: number | null;
    /** Determines whether the limit quantity has been exceeded. */
    is_limit_exceeded: boolean | null;
}
export type WlVideoWatchWatchPostParams = Record<string, unknown>;
export interface WlVideoWatchWatchPostResponse {
    /** The video watch key. */
    k_video_watch: string;
}
export type WlVideoWatchWatchPutParams = Record<string, unknown>;
export type WlVideoWatchWatchPutResponse = Record<string, unknown>;
export interface WlVideoCategoryCategoryElementDeleteParams {
    /** The business key. */
    k_business: string;
    /** The category key. */
    k_video_category: string;
}
export type WlVideoCategoryCategoryElementDeleteResponse = Record<string, unknown>;
export interface WlVideoCategoryCategoryElementGetParams {
    /** The business key. */
    k_business: string;
    /** The category key. */
    k_video_category: string;
}
export interface WlVideoCategoryCategoryElementGetResponse {
    /** A list of client and member types who can access videos from the category. */
    a_login_type: Array<string>;
    /** A list of member groups who can access videos from the category. */
    a_member_group: Array<string>;
    /** The category's placement in the business's list of categories. */
    i_order: number;
    /** This will be `true` if the video category is for cloud session recordings. Otherwise, this will b... */
    is_cloud_recording: boolean;
    /** This will be `true` if some client or member types can grant access to the video category. Otherw... */
    is_login_type: boolean;
    /** This will be `true` if some member groups can grant access to the video category. */
    is_member_group: boolean;
    /** The category key. */
    k_video_category: string;
    /** The category name. */
    text_title: string;
}
export interface WlVideoCategoryCategoryElementPutParams {
    /** The business key. */
    k_business: string;
    /** The category key. */
    k_video_category: string;
}
export interface WlVideoCategoryCategoryElementPutResponse {
    /** The category key. */
    k_video_category: string;
}
export interface WlVideoCategoryCategoryListGetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** If `true`, groups that are missing videos won't be displayed. Otherwise, this will be `false`. */
    is_skip_empty_group: boolean;
    /** The business key. */
    k_business: string;
    /** The filter phrase used to filter categories by name. */
    text_filter: string;
}
export interface WlVideoCategoryCategoryListGetResponse {
    a_video_category: Array<{
        can_delete: boolean;
        i_video: number;
        k_video_category: string;
        k_video_category_full: string;
        text_title: string;
    }>;
}
export interface WlVideoCategoryCategoryListPutParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
}
export type WlVideoCategoryCategoryListPutResponse = Record<string, unknown>;
export interface WlVideoLevelLevelDeleteParams {
    /** If `true`, confirmation is required to delete videos. Otherwise, this will be `false`. */
    is_delete_confirm: boolean;
    /** The business key. */
    k_business: string;
    /** The video level key. */
    k_video_level: string;
}
export type WlVideoLevelLevelDeleteResponse = Record<string, unknown>;
export interface WlVideoLevelLevelPostParams {
    /** The business key. */
    k_business: string;
    /** The video level key. */
    k_video_level: string;
}
export interface WlVideoLevelLevelPostResponse {
    /** The video level key. */
    k_video_level: string;
}
export interface WlVideoLevelLevelPutParams {
    /** The business key. */
    k_business: string;
    /** The video level key. */
    k_video_level: string;
}
export type WlVideoLevelLevelPutResponse = Record<string, unknown>;
export interface WlVideoLevelLevelListGetParams {
    /** The business key. */
    k_business: string;
}
export interface WlVideoLevelLevelListGetResponse {
    a_level_list: Array<{
        k_video_level: string;
        text_title: string;
    }>;
}
export interface WlVideoLevelLevelListPutParams {
    /** The business key. */
    k_business: string;
}
export type WlVideoLevelLevelListPutResponse = Record<string, unknown>;
export interface WlVideoTagTagDeleteParams {
    /** If `true`, confirmation is required to delete videos. Otherwise, this will be `false`. */
    is_delete_confirm: boolean;
    /** The business key. */
    k_business: string;
    /** The video tag key. */
    k_video_tag: string;
}
export type WlVideoTagTagDeleteResponse = Record<string, unknown>;
export interface WlVideoTagTagPostParams {
    /** The business key. */
    k_business: string;
    /** The video tag key. */
    k_video_tag: string;
}
export interface WlVideoTagTagPostResponse {
    /** The video tag key. */
    k_video_tag: string;
}
export interface WlVideoTagTagPutParams {
    /** The business key. */
    k_business: string;
    /** The video tag key. */
    k_video_tag: string;
}
export type WlVideoTagTagPutResponse = Record<string, unknown>;
export interface WlVideoTagTagListParams {
    /** The business key. */
    k_business: string;
}
export interface WlVideoTagTagListResponse {
    a_tag_list: Array<{
        k_video_tag: string;
        text_title: string;
    }>;
}
export type WlGoogleLoginGoogleLoginParams = Record<string, unknown>;
export type WlGoogleLoginGoogleLoginResponse = Record<string, unknown>;
export type WlReceptionRosterAttendanceListNotAttendParams = Record<string, unknown>;
export type WlReceptionRosterAttendanceListNotAttendResponse = Record<string, unknown>;
export interface WlReceptionRosterAttendanceListAttendParams {
    /** The UTC datetime for the class in MySQL format. */
    dtu_date: string;
    /** The business key. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The secret for authenticating the attendance kiosk. */
    s_secret: string;
    /** The client's user key. */
    uid: string;
}
export interface WlReceptionRosterAttendanceListAttendResponse {
    /** The visit key. */
    k_visit: string;
    /** The status message displayed on a successful check-in. */
    text_message: string;
}
export type WlReceptionRosterAttendanceListBookParams = Record<string, unknown>;
export interface WlReceptionRosterAttendanceListBookResponse {
    /** `true` if the client is on the waitlist for the class, `false` if they are on the class list. */
    is_wait: boolean;
    /** The status message displayed on a successful booking. */
    text_message: string;
}
export interface WlReceptionRosterAttendanceSecretParams {
    /** Key of the business. */
    k_business: string;
    /** Key of the location. */
    k_location: string;
}
export interface WlReceptionRosterAttendanceSecretResponse {
    /** Secret string. */
    s_secret: string;
}
export interface WlReceptionApplicationReceptionScheduleGetParams {
    /** The business key, where the Self Check-In Web App is started. */
    k_business: string;
    /** The location key, where the Self Check-In Web App is started. */
    k_location: string;
    /** The key of the Self Check-In Web App. */
    s_secret: string;
    /** The key of the user to show the schedule for. */
    uid: string;
}
export interface WlReceptionApplicationReceptionScheduleGetResponse {
    a_class: Array<{
        a_resources_shared: {
            k_resource: string;
            s_title: string;
        };
        a_staff_all: {
            s_name_full: string;
        };
        dtu_date: string;
        html_class_js: string;
        i_duration: number;
        id_service: number;
        is_auto: boolean;
        is_book: boolean;
        is_wait: boolean;
        k_appointment: string | null;
        k_class_period: string | null;
        k_visit: string | null;
        s_class: string;
        s_duration: string;
        s_time: string;
    }>;
    /** All types of services that appear in the schedule. */
    a_schedule_class_all: Array<number>;
    /** The schedule to be shown in the Self Check-In Web App for the selected user. */
    html_schedule: string;
}
export interface WlReceptionApplicationReceptionSchedulePostParams {
    /** The business key, where the Self Check-In Web App is started. */
    k_business: string;
    /** The location key, where the Self Check-In Web App is started. */
    k_location: string;
    /** The key of the Self Check-In Web App. */
    s_secret: string;
    /** The key of the user to show the schedule for. */
    uid: string;
}
export interface WlReceptionApplicationReceptionSchedulePostResponse {
    a_confirmation_data: Array<{
        a_payment: {
            a_restrict: Record<string, unknown>;
            has_visit_past: boolean;
            hide_visit_additional_info: boolean;
            i_book: number;
            i_book_duration: number;
            i_limit: number;
            i_remain: number;
            i_remain_duration: number;
            i_use: number;
            i_use_duration: number;
            i_visit_past: number;
            id_program_type: number;
            is_last_use: boolean;
            is_package: boolean;
            is_restrict_multiply: boolean;
            k_login_promotion: string;
            s_remain_measure: string;
            show_remain: boolean;
            sid_program_type: string;
        };
        a_resources_not_shared: {
            i_index: number;
            s_title: string;
        };
        dl_renew: string;
        i_visits: number;
        s_expire: string;
        s_payment: string;
        s_renew: string;
        show_visits: string;
    }>;
    /** The confirmation template to be shown in the Self Check-In Web App for the selected user. */
    html_confirmation: string;
    /** The visit key, which was added or checked in. */
    k_visit: string;
}
export interface WlReceptionApplicationMemberInfoParams {
    /** Date of the session, if we show it on the appointment info window or on the attendance list. */
    dt_date: string;
    /** `true` - if API is being used from backend, `false` - otherwise. */
    is_backend: boolean;
    /** If you need to return additional information set to `true` or `false` if not. */
    is_full: boolean;
    /** The business ID required to access client information. */
    k_business: string;
    /** The location where the Self Check-In Web App is running. */
    k_location: string;
    /** ID of the visit, if we show icons on the attendance list and information that depends on visit is... */
    k_visit: string;
    /** Key of the Check In application. */
    s_secret: string;
    /** A list of icons with additional information about the business member. */
    s_show: string;
    /** ID of a user to retrieve member information for. */
    uid: string;
    /** Primary keys of users whose information must be returned. */
    a_uid?: Array<string> | null;
    /** List of dates for load additional information about users. */
    a_uid_date?: Array<string> | null;
}
export interface WlReceptionApplicationMemberInfoResponse {
    a_info: Array<{
        a_icon: {
            s_color_background: string;
            s_color_foreground: string;
            s_letter: string;
            s_shape: string;
            s_title: string;
            sid_shape: string;
        };
        a_vaccination_status: {
            sid_vaccination_status: string;
            text_vaccination_status: string;
        };
        a_note: {
            html_note: string;
            is_flag: boolean;
        };
        html_credit: string;
        html_note: string;
        is_task_active: boolean;
        is_task_urgent: boolean;
        is_waiver: boolean;
        k_currency: string;
        m_credit: string;
        show_amount: boolean;
        text_address: string;
        text_age: string;
        text_mail: string;
        text_phone: string;
        text_firstname: string;
        text_visit_credit: string;
        url_attendance: string;
        url_billing: string;
        url_contract: string;
        url_form: string;
        url_overview: string;
        url_profile: string;
        url_waiver: string;
    }> | null;
    a_items: Array<{
        id_color: number;
        id_icon: number;
        text_class: string;
        text_message: string;
        html_message: string;
    }>;
    a_result_list: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        is_traveller: boolean;
        s_member: string;
        text_first_name: string;
        text_fullname: string;
        url_barcode: string;
    }> | null;
    a_visit_last: Array<{
        dtu_visit: string;
        k_appointment: string | null;
        k_class_period: string | null;
        k_location: string;
    }>;
    a_visit_next: Array<{
        dtu_visit: string;
        k_appointment: string | null;
        k_class_period: string | null;
        k_location: string;
    }>;
    /** Count attend visits for one client. */
    i_lifetime_visit: number;
    /** If `true`, the client is a traveler. Otherwise, this will be `false`. */
    is_traveller: boolean | null;
    /** The member's lifetime value. */
    m_lifetime_value: string;
    /** The member ID. */
    s_member: string | null;
    /** First user's name. */
    text_first_name: string;
    /** Full user's name. */
    text_fullname: string;
    /** URL to barcode image. */
    url_barcode: string;
    /** URL to email. */
    url_email: string;
}
export interface WlReceptionApplicationReceptionAuthorizeParams {
    /** Key of the business, where Check In application is started. */
    k_business: string;
    /** Key of the location, where Check In application is started. */
    k_location: string;
    /** Key of the Check In application. */
    s_secret: string;
}
export interface WlReceptionApplicationReceptionAuthorizeResponse {
    a_select: Array<{
        text_name_first: string;
        text_name_last: string;
        uid: string;
        url_image: string;
    }>;
    /** Key of the authorized user. */
    uid: string;
}
export interface WlReceptionDesignReceptionDesignParams {
    /** Key of the business, where application is run. */
    k_business: string;
    /** Key of the location, where application is run. */
    k_location: string;
}
export interface WlReceptionDesignReceptionDesignResponse {
    a_reception_logo: Array<{
        url_view: string;
        url_thumbnail: string;
    }>;
    /** `true` - client profile images will be hidden after the client signs in on the Check-in Kiosk; */
    hide_profile_images: boolean;
    /** Number of minutes for the client check-in window after session has started. */
    i_book_open: number;
    /** Delay in seconds on Check-in Confirmation Screen before redirect to Login screen. */
    i_confirm_delay: number;
    /** Delay in seconds on Schedule Screen before redirect to Login screen. */
    i_schedule_delay: number;
    /** List of sounds used for check ins. */
    id_failed_sound: number;
    /** List of sounds used for check ins. */
    id_success_sound: number;
    /** `true` - allow client to check-in unpaid; */
    is_attend_free: boolean;
    /** If only one service available with the look ahead window the client will: */
    is_auto_check_in: boolean;
    /** `true` - allow clients to check-in to sessions in progress; */
    is_book_open: boolean;
    /** `true` - allow client check-in without booking prior; */
    is_book_optional: boolean;
    /** `true` - enable check-in by client id; */
    is_client_id: boolean;
    /** `true` - enable check-in by email; */
    is_mail: boolean;
    /** `true` - require password while check-in; */
    is_password: boolean;
    /** `true` - enable check-in by phone; */
    is_phone: boolean;
    /** `true` - automatically reconcile unpaid visits upon check in; */
    is_reconcile_auto: boolean;
    /** `true` - show business name on client self check-in page; */
    show_business_name: boolean;
    /** `true` - show confirm screen after client self check-in; */
    show_confirm_screen: boolean;
    /** Name of the business to display on the client self check-in page. */
    text_business_name: string;
}
export interface WlPurchaseReceiptPurchaseReceiptParams {
    /** Whether `url_print` and `url_print_receipt` require authentication. */
    is_url_public: boolean;
    /** The key of the purchase. */
    k_purchase?: string | null;
}
export interface WlPurchaseReceiptPurchaseReceiptResponse {
    a_account_rest: Array<{
        m_amount: string;
        text_currency: string;
        text_method: string;
    }>;
    a_business: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            text_url: string;
        };
        text_address: string;
        text_mail: string;
        text_phone: string;
        text_title: string;
    }>;
    a_card: Array<{
        text_card_number: string;
        text_card_system: string;
        text_title: string;
    }>;
    a_customer: Array<{
        text_address: string;
        text_mail: string;
        text_name: string;
        text_phone: string;
    }>;
    a_pay_method: Array<{
        m_amount: string;
        text_currency: string;
        text_pay_method: string;
    }>;
    a_price: Array<{
        m_discount: string;
        m_discount_code: string;
        m_sum: string;
        m_tax: string;
        m_tip: string;
        m_total: string;
        text_currency: string;
        text_discount_code: string;
    }>;
    a_purchase_item: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            text_url: string;
        };
        a_visit?: Array<string>;
        i_count: number;
        id_program: number;
        id_purchase_item: number;
        id_sale: number;
        k_id: string;
        k_purchase_item: string;
        k_shop_product?: string;
        m_price: string;
        m_price_total: string;
        text_category: string;
        text_currency: string;
        text_info: string;
        text_title: string;
        text_description: string;
        url_print?: string;
    }>;
    /** The local date of the purchase in MySQL format. */
    dtl_purchase: string;
    /** Determines whether the payment contained a signature. */
    has_signature: boolean;
    /** HTML representation of the purchase receipt. */
    html_receipt: string;
    /** The normalized purchase ID. */
    text_purchase_id: string;
    /** The receipt text set in the store settings. */
    text_receipt: string;
    /** The URL for printing on a normal printer. */
    url_print: string;
    /** The URL for printing on a receipt printer. */
    url_print_receipt: string;
}
export type WlPurchaseMailPurchaseMailParams = Record<string, unknown>;
export type WlPurchaseMailPurchaseMailResponse = Record<string, unknown>;
export type WlPurchaseSharePurchaseShareParams = Record<string, unknown>;
export interface WlPurchaseSharePurchaseShareResponse {
    /** The URL to the sharing page. */
    url_share: string;
}
export interface WlInsuranceCatalogProgramListParams {
    /** The key of the franchisee business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export interface WlInsuranceCatalogProgramListResponse {
    a_wellness_program: Array<{
        k_wellness_program: string;
        m_price: string;
        text_insurance_organization: string;
        text_partner: string;
        text_program: string;
        url_insurance_detail: string;
    }>;
}
export interface WlServiceServiceListListParams {
    /** Whether to return franchisee-created appointment types (if business is franchisor). */
    is_franchise: boolean;
    /** Business key, primary key. */
    k_business: string;
}
export interface WlServiceServiceListListResponse {
    a_service: Array<{
        hide_application: boolean;
        k_service: string;
        k_service_category: string;
        text_category: string;
        text_service: string;
    }>;
}
export interface WlSmsPhoneBusinessPhoneParams {
    /** Key of the business. */
    k_business: string;
}
export interface WlSmsPhoneBusinessPhoneResponse {
    /** Phone number of the business, which is added as sender for 2-Way SMS feature. */
    text_phone_sender: string | null;
}
export interface WlAiAgentLinkSendMailParams {
    /** Purchase item ID. Required if `text_action` is 'purchase'. */
    id_purchase_item: number;
    /** Service ID. Required if `text_action` is 'booking'. */
    id_service: number;
    /** Business key. Required. */
    k_business: string;
    /** Unique identifier for the link. */
    k_id: string;
    /** Action type. Must be 'purchase' or 'booking'. */
    text_action: string;
    /** User ID. Required. */
    uid: string;
}
export type WlAiAgentLinkSendMailResponse = Record<string, unknown>;
export interface WlStaffPrivilegePrivilegeListParams {
    /** Key of business to get privileges for. */
    k_business: string;
    /** User key to get privileges for. */
    uid: string;
}
export interface WlStaffPrivilegePrivilegeListResponse {
    /** List of privileges, if user is administrator. */
    a_privilege_passport: Array<string>;
    /** List of privileges, if the given user is a staff member in the give business. */
    a_privilege_staff: Array<number>;
    /** Whether this user is a super-administrator because he is a studio staff member. */
    is_admin: boolean;
}
export interface WlStaffStaffListStaffListParams {
    /** A list of privileges to filter staff members by. */
    a_privilege: Array<number>;
    /** Determines that only staff members which the current user has access to should be retrieved. */
    is_check_staff_access: boolean;
    /** Whether inactive and removed staff members are available. */
    is_staff_inactive: boolean;
    /** The key of the business to show information for. */
    k_business: string;
}
export interface WlStaffStaffListStaffListResponse {
    a_staff: Array<{
        a_pay_rate: Array<string>;
        a_staff_service: {
            k_service: string;
            k_staff_pay: string;
        };
        html_name: string;
        i_order: number;
        is_appointment: boolean;
        is_class: boolean;
        is_event: boolean;
        k_staff: string;
        s_name: string;
        s_position: string;
        s_surname: string;
        s_surname_full: string | null;
        text_name_full: string;
        uid: string;
        uid_staff: string;
        url_image: string;
    }>;
}
export interface WlStaffStaffViewStaffViewParams {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The staff member key. */
    k_staff: string;
    /** The staff member user ID. */
    uid_staff: string;
    /** A list of staff keys. */
    a_staff_list?: Array<string> | null;
    /** A list of staff user IDs. */
    a_uid_staff_list?: Array<string> | null;
}
export interface WlStaffStaffViewStaffViewResponse {
    a_class_day: Array<{
        a_class_period: {
            dt_time: string;
            i_duration: number;
            s_title: string;
            url_book: string;
        };
        i_day: number;
    }>;
    a_result_list: Array<{
        a_class_day: {
            a_class_period: Record<string, unknown>;
            i_day: number;
        };
        a_staff: {
            a_location_work: Array<string>;
            a_photo: Record<string, unknown>;
            html_biography: string;
            html_first: string;
            html_last: string;
            html_location_title: string;
            id_gender: number;
            is_classes_events: boolean;
            is_publish_business_page: boolean;
            is_schedule_enabled: boolean;
            k_location: string;
            k_staff: string;
            s_biography: string;
            s_family: string;
            s_name: string;
            s_position: string;
            text_business_role: string;
            text_full_name: string;
            uid: string;
            uid_staff: string;
            url_schedule: string;
        };
    }>;
    a_staff: Array<{
        a_location_work: Array<string>;
        a_photo: {
            a_image: Record<string, unknown>;
            i_height: number;
            i_width: number;
            id_gender: number;
            is_empty: boolean;
            k_staff: string;
            s_url: string;
            text_name: string;
            uid: string;
        };
        html_biography: string;
        html_first: string;
        html_last: string;
        html_location_title: string;
        id_gender: number;
        is_classes_events: boolean;
        is_publish_business_page: boolean;
        is_schedule_enabled: boolean;
        k_location: string;
        k_staff: string;
        s_biography: string;
        s_family: string;
        s_name: string;
        s_position: string;
        text_business_role: string;
        text_full_name: string;
        uid: string;
        uid_staff: string;
        url_schedule: string;
    }>;
}
export interface WlStaffStaffViewStaffView74Params {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The staff member user ID. */
    uid_staff: string;
    /** A list of staff user IDs. */
    a_uid_staff_list?: Array<string> | null;
}
export interface WlStaffStaffViewStaffView74Response {
    a_class_day: Array<{
        a_class_period: {
            dt_time: string;
            i_duration: number;
            s_title: string;
            url_book: string;
        };
        i_day: number;
    }>;
    a_result_list: Array<{
        a_class_day: {
            a_class_period: Record<string, unknown>;
            i_day: number;
        };
        a_staff: {
            a_location_work: Array<string>;
            a_photo: Record<string, unknown>;
            html_biography: string;
            html_first: string;
            html_last: string;
            html_location_title: string;
            id_gender: number;
            is_classes_events: boolean;
            is_publish_business_page: boolean;
            is_schedule_enabled: boolean;
            k_location: string;
            k_staff: string;
            s_biography: string;
            s_family: string;
            s_name: string;
            s_position: string;
            text_business_role: string;
            text_full_name: string;
            uid: string;
            uid_staff: string;
            url_schedule: string;
        };
    }>;
    a_staff: Array<{
        a_location_work: Array<string>;
        a_photo: {
            a_image: Record<string, unknown>;
            i_height: number;
            i_width: number;
            id_gender: number;
            is_empty: boolean;
            k_staff: string;
            s_url: string;
            text_name: string;
            uid: string;
        };
        html_biography: string;
        html_first: string;
        html_last: string;
        html_location_title: string;
        id_gender: number;
        is_classes_events: boolean;
        is_publish_business_page: boolean;
        is_schedule_enabled: boolean;
        k_location: string;
        k_staff: string;
        s_biography: string;
        s_family: string;
        s_name: string;
        s_position: string;
        text_business_role: string;
        text_full_name: string;
        uid: string;
        uid_staff: string;
        url_schedule: string;
    }>;
}
export interface WlRewardActionActionParams {
    /** Key of current business. */
    k_business: string;
    /** Key of reward action category. */
    k_reward_action_category: string;
    /** Key of a user to show information for. */
    uid: string;
}
export interface WlRewardActionActionResponse {
    a_reward_action: Array<{
        id_reward_action_category: number;
        k_reward_action: string;
        k_reward_action_category: string;
    }>;
}
export type WlRewardActionActionWriteParams = Record<string, unknown>;
export type WlRewardActionActionWriteResponse = Record<string, unknown>;
export interface WlRewardActionElementGetParams {
    /** Business to show information for. */
    k_business: string;
    /** Reward action to show information for. */
    k_reward_action: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardActionElementGetResponse {
    /** Points amount that will be added to user account after successful accomplishment of reward action. */
    i_score: number;
    /** Types of reward actions. */
    id_reward_score: number | null;
    /** `true` if user has requested points for action accomplishment, `false` otherwise. */
    is_request: boolean;
    /** User friendly reward action description. */
    s_description: string;
}
export interface WlRewardActionElementPostParams {
    /** Business to show information for. */
    k_business: string;
    /** Reward action to show information for. */
    k_reward_action: string;
    /** User to retrieve information about. */
    uid: string;
}
export type WlRewardActionElementPostResponse = Record<string, unknown>;
export interface WlRewardActionActionTypeParams {
    /** ID of type of reward action. One of [RsRewardScoreSid](#/components/schemas/RsRewardScoreSid) con... */
    id_reward_score: number | null;
    /** Key of a business to show information for. */
    k_business: string;
}
export interface WlRewardActionActionTypeResponse {
    a_reward_action: Array<{
        i_score: number;
    }>;
}
export interface WlRewardScoreScoreGetParams {
    /** List of login activity keys for which points should be added or returned. */
    a_login_activity: Array<string>;
}
export interface WlRewardScoreScoreGetResponse {
    /** Depending on arguments specified during API request might be: */
    i_score: number;
}
export interface WlRewardScoreScorePostParams {
    /** List of login activity keys for which points should be added or returned. */
    a_login_activity: Array<string>;
}
export type WlRewardScoreScorePostResponse = Record<string, unknown>;
export type WlRewardScoreScorePutParams = Record<string, unknown>;
export type WlRewardScoreScorePutResponse = Record<string, unknown>;
export interface WlRewardBoardElementParams {
    /** Business to show information for. */
    k_business: string;
    /** Reward board to show information for. */
    k_reward_board: string;
    /** User to retrieve information about. */
    uid: string;
    /** List of users to get information for. */
    a_uid?: Array<string> | null;
}
export interface WlRewardBoardElementResponse {
    a_reward: Array<{
        i_score: number;
        text_name: string;
        uid: string;
        url_logo: string;
    }> | null;
    /** Score in points. */
    i_score: number;
    /** User name. */
    s_name: string;
    /** User logo. */
    url_logo: string;
}
export interface WlRewardBoardListParams {
    /** ID of a business to show information for. */
    k_business: string;
    /** ID of reward board to show information for. */
    k_reward_board: string;
}
export interface WlRewardBoardListResponse {
    /** A list of UID items. */
    a_uid: Array<number>;
}
export interface WlRewardPrizeElementGetParams {
    /** Business to show information for. */
    k_business: string;
    /** Key of redeemable prize. */
    k_reward_prize: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardPrizeElementGetResponse {
    /** Prize price in wellnessliving points. */
    i_score: number;
    /** User friendly prize description. */
    s_description: string;
}
export interface WlRewardPrizeElementPostParams {
    /** Business to show information for. */
    k_business: string;
    /** Key of redeemable prize. */
    k_reward_prize: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardPrizeElementPostResponse {
    /** Key of login prize. */
    k_login_prize: string;
}
export interface WlRewardPrizePrizeParams {
    /** Key of current business. */
    k_business: string;
}
export interface WlRewardPrizePrizeResponse {
    /** Array of prize keys. */
    a_prize: Array<string>;
    /** Array of prize scores. */
    a_score: Array<number>;
}
export type WlNotificationSendNotificationSendParams = Record<string, unknown>;
export type WlNotificationSendNotificationSendResponse = Record<string, unknown>;
export interface WlNotificationSendNotificationInfoParams {
    /** ID of the notification. See [RsMailSid](#/components/schemas/RsMailSid). */
    id_notification: number;
    /** Key of the business where information about notification should be retrieved. */
    k_business: string;
}
export interface WlNotificationSendNotificationInfoResponse {
    /** Information about mail. */
    a_info: Array<unknown>;
}
export interface WlNotificationOtpPhoneOtpGetParams {
    /** Phone number to be validated. */
    text_phone: string;
}
export type WlNotificationOtpPhoneOtpGetResponse = Record<string, unknown>;
export interface WlNotificationOtpPhoneOtpPostParams {
    /** Phone number to be validated. */
    text_phone: string;
}
export type WlNotificationOtpPhoneOtpPostResponse = Record<string, unknown>;
export interface WlPassportLoginInfoParams {
    /** Business key. */
    k_business: string;
}
export interface WlPassportLoginInfoResponse {
    /** The current user key. */
    uid: string | null;
    /** A URL that a user can visit to reset their password. */
    url_password_change: string;
    /** The URL to the registration page. */
    url_register: string;
}
export interface WlSkinApplicationSkinDeleteParams {
    /** Whether customization billing is confirmed. */
    is_billing_confirm: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlSkinApplicationSkinDeleteResponse {
    /** Name of the link to default application skin. */
    s_link: string;
}
export interface WlSkinApplicationSkinGetParams {
    /** The business key. */
    k_business: string;
}
export interface WlSkinApplicationSkinGetResponse {
    /** Skin information. */
    a_skin: Array<unknown>;
    /** Determines current business account contains amount for the application customisation. */
    has_pay: boolean;
    /** Name of the link to default application skin. */
    s_link: string;
}
export interface WlSkinWidgetSkinWidgetListParams {
    /** Business key. */
    k_business: string;
}
export interface WlSkinWidgetSkinWidgetListResponse {
    a_widget_skin: Array<{
        k_skin: string;
        text_widget_name: string;
    }>;
}
export interface WlMemberInfoInfoParams {
    /** Date of the session, if we show it on the appointment info window or on the attendance list. */
    dt_date: string;
    /** `true` - if API is being used from backend, `false` - otherwise. */
    is_backend: boolean;
    /** If you need to return additional information set to `true` or `false` if not. */
    is_full: boolean;
    /** The business ID required to access client information. */
    k_business: string;
    /** ID of the visit, if we show icons on the attendance list and information that depends on visit is... */
    k_visit: string;
    /** A list of icons with additional information about the business member. */
    s_show: string;
    /** ID of a user to retrieve member information for. */
    uid: string;
    /** Primary keys of users whose information must be returned. */
    a_uid?: Array<string> | null;
    /** List of dates for load additional information about users. */
    a_uid_date?: Array<string> | null;
}
export interface WlMemberInfoInfoResponse {
    a_info: Array<{
        a_icon: {
            s_color_background: string;
            s_color_foreground: string;
            s_letter: string;
            s_shape: string;
            s_title: string;
            sid_shape: string;
        };
        a_vaccination_status: {
            sid_vaccination_status: string;
            text_vaccination_status: string;
        };
        a_note: {
            html_note: string;
            is_flag: boolean;
        };
        html_credit: string;
        html_note: string;
        is_task_active: boolean;
        is_task_urgent: boolean;
        is_waiver: boolean;
        k_currency: string;
        m_credit: string;
        show_amount: boolean;
        text_address: string;
        text_age: string;
        text_mail: string;
        text_phone: string;
        text_firstname: string;
        text_visit_credit: string;
        url_attendance: string;
        url_billing: string;
        url_contract: string;
        url_form: string;
        url_overview: string;
        url_profile: string;
        url_waiver: string;
    }> | null;
    a_result_list: Array<{
        a_info: {
            a_icon: Record<string, unknown>;
            a_vaccination_status: Record<string, unknown>;
            a_note: Record<string, unknown>;
            html_credit: string;
            html_note: string;
            is_task_active: boolean;
            is_task_urgent: boolean;
            is_waiver: boolean;
            k_currency: string;
            m_credit: string;
            show_amount: boolean;
            text_address: string;
            text_age: string;
            text_mail: string;
            text_phone: string;
            text_firstname: string;
            text_visit_credit: string;
            url_attendance: string;
            url_billing: string;
            url_contract: string;
            url_form: string;
            url_overview: string;
            url_profile: string;
            url_waiver: string;
        };
        is_traveller: boolean;
        s_member: string;
        text_first_name: string;
        text_fullname: string;
        url_barcode: string;
    }> | null;
    a_visit_last: Array<{
        dtu_visit: string;
        k_appointment: string | null;
        k_class_period: string | null;
        k_location: string;
    }>;
    a_visit_next: Array<{
        dtu_visit: string;
        k_appointment: string | null;
        k_class_period: string | null;
        k_location: string;
    }>;
    /** Count attend visits for one client. */
    i_lifetime_visit: number;
    /** If `true`, the client is a traveler. Otherwise, this will be `false`. */
    is_traveller: boolean | null;
    /** The member's lifetime value. */
    m_lifetime_value: string;
    /** The member ID. */
    s_member: string | null;
    /** First user's name. */
    text_first_name: string;
    /** Full user's name. */
    text_fullname: string;
    /** URL to barcode image. */
    url_barcode: string;
    /** URL to email. */
    url_email: string;
}
export interface WlMemberPurchaseMemberByPromotionParams {
    /** The key of the business for which to get a list of clients. */
    k_business: string;
    /** The comma-separated list of the Purchase Option keys. */
    s_promotion_keys: string;
}
export interface WlMemberPurchaseMemberByPromotionResponse {
    a_clients: Array<{
        a_purchase_options: {
            dl_end: string | null;
            dtu_purchase: string;
            dl_start: string | null;
            dl_terminate: string | null;
            k_promotion: string;
        };
        uid: string;
    }>;
}
export interface WlUserInfoUserInfoParams {
    /** A list of user keys. */
    a_user_list: Array<string>;
    /** The key of the business. */
    k_business: string;
    /** `true` to ignore cache and load information from the database directly. */
    not_cached: boolean;
    /** The key of the user. */
    uid: string;
}
export interface WlUserInfoUserInfoResponse {
    a_custom_field: Array<{
        k_field: string;
        text_title: string;
        text_value: string;
        text_value_title: string;
    }>;
    /** List of member groups that the user belongs to. */
    a_member_group: Array<string>;
    a_photo: Array<{
        i_height: number;
        i_width: number;
        url_photo: string;
    }>;
    a_result_list: Array<{
        a_custom_field: {
            k_field: string;
            text_title: string;
            text_value: string;
        };
        a_member_group: Array<string>;
        a_photo: {
            i_height: number;
            i_width: number;
            url_photo: string;
        };
        dt_add: string;
        dt_birth: string;
        id_gender: number;
        is_customer_new: boolean;
        is_traveller: boolean;
        k_business: string;
        k_login_type: string;
        s_first_name: string;
        s_last_name: string;
        s_mail: string;
        s_member: string;
        s_phone: string;
        s_phone_home: string;
        s_phone_work: string;
        uid: string;
        url_photo: string;
    }>;
    /** Whether the user can purchase introductory offers. */
    can_introductory: boolean;
    /** The date the user was added, given in UTC time. */
    dt_add: string;
    /** The user's birthday. This will be `null` if the birthday isn't set yet. */
    dt_birth: string;
    /** Whether client's login type has a discount. */
    has_discount: boolean | null;
    /** String identifiers for gender. */
    id_gender: number;
    /** This will be `true` if the user has Google Calendar linked to their account; otherwise, `false`. */
    is_calendar_google: boolean;
    /** This will be `true` if the user has Microsoft Calendar linked to their account; otherwise, `false`. */
    is_calendar_microsoft: boolean;
    /** This will be `true` if the user has never made purchases or reservations in this business. */
    is_customer_new: boolean;
    /** This will be `true` if the user is a traveler. A traveler is someone whose home location isn't th... */
    is_traveller: boolean;
    /** City key. */
    k_city: string | null;
    /** The key of the login type. The login type describes the user's client type in this business. */
    k_login_type: string;
    /** The user's first name. */
    s_first_name: string;
    /** The user's last name. */
    s_last_name: string;
    /** The user's email address. */
    s_mail: string;
    /** The user's member ID in the business. Also referred to as the client ID in the client's profile. ... */
    s_member: string;
    /** The user's phone number. */
    s_phone: string;
    /** The user's home phone number. */
    s_phone_home: string;
    /** The user's work phone number. */
    s_phone_work: string;
    /** Address inside a city. */
    text_address: string | null;
    /** City name. */
    text_city: string | null;
    /** Login type title. */
    text_login_type: string;
    /** Postal code. */
    text_postal: string | null;
    /** The key of the user. */
    uid: string;
    /** The URL for the user's photo. */
    url_photo: string;
}
export interface WlUserInfoUserIntegrationParams {
    /** The key of the business. */
    k_business: string;
    /** Key of the user. */
    uid: string;
}
export interface WlUserInfoUserIntegrationResponse {
    a_integration: Array<{
        is_classpass: boolean;
        is_gympass: boolean;
        is_reserve_with_google: boolean;
    }> | null;
}
export interface WlUserReferrerReferrerParams {
    /** The key of the current business. */
    k_business: string;
    /** The string to be used for searching for a referrer. */
    s_search: string;
}
export interface WlUserReferrerReferrerResponse {
    a_photo: Array<{
        i_height: number;
        i_width: number;
        url_photo: string;
    }>;
    /** The email address of the referrer. */
    s_email: string;
    /** The business client ID of the referrer. */
    s_member: string;
    /** The first name of the referrer. */
    s_name_first: string;
    /** The last name of the referrer. */
    s_name_last: string;
    /** The phone number of the referrer. */
    s_phone: string;
    /** Composes name of the referrer for public usage. */
    text_name_public: string | null;
    /** The referrer's user key. */
    uid_referrer: string;
}
export interface WlDiscountCodeDiscountCodeParams {
    /** Business key of the discount codes. */
    k_business: string;
}
export interface WlDiscountCodeDiscountCodeResponse {
    a_list: Array<{
        k_discount_code: string;
        text_discount_code: string;
    }>;
}
export interface WlShopCategoryCategoryGetParams {
    /** The key of the business to get shop categories for. */
    k_business: string;
}
export interface WlShopCategoryCategoryGetResponse {
    a_shop_category: Array<{
        is_default: boolean;
        i_order: number;
        k_shop_category: string;
        text_description: string;
        text_title: string;
    }>;
}
export interface WlShopCategoryCategoryPostParams {
    /** The key of the business to get shop categories for. */
    k_business: string;
}
export interface WlShopCategoryCategoryPostResponse {
    /** Key of the created shop category. */
    k_shop_category: string;
}
export interface WlResourceLayoutLayoutParams {
    /** The key of the layout. */
    k_resource_layout: string;
}
export interface WlResourceLayoutLayoutResponse {
    a_resource: Array<{
        a_image: {
            a_image: Record<string, unknown>;
            i_angle?: number;
            i_height: number;
            i_width: number;
            is_empty: boolean;
            k_resource: string;
            sid_image: string;
            sid_image_icon: string;
            sid_image_shape: string;
            url: string;
        };
        i_cell_x: number;
        i_cell_y: number;
        i_left: number;
        i_top: number;
        i_index: number;
        k_resource: string;
        s_name: string;
        s_title: string;
    }>;
    a_shape_custom: Array<{
        f_height: number;
        f_width: number;
        i_degree_from: number;
        i_degree_to: number;
        i_left: number;
        i_radius: number;
        i_top: number;
        id_resource_layout_shape: number;
        k_resource_layout_shape: string;
        s_color_background: string;
        s_color_foreground: string;
        s_text: string;
    }>;
    a_shape_icon: Array<{
        i_cell_x: number;
        i_cell_y: number;
        i_left: number;
        i_top: number;
        id_shape_icon: number;
    }>;
    /** The grid size. */
    i_grid: number;
    /** This will be `true` if snap to grid is enabled. Otherwise, this will be `false`. */
    is_grid: boolean;
    /** The key of the asset category. */
    k_resource_type: string;
    /** The color for active assets. Hex encoding with prefix `#`. */
    s_color_active: string;
    /** This will be `true` if asset names are displayed. Otherwise, this will be `false`. */
    show_name: boolean;
    /** This will be `true` if asset numbers are displayed. Otherwise, this will be `false`. */
    show_number: boolean;
}
export interface WlResourceResourceListListParams {
    /** Type of the resource. */
    id_category: number;
    /** Whether to return franchisee-created resources (if business is franchisor). */
    is_franchise: boolean;
    /** Business key, primary key in RsBusinessSql. */
    k_business: string;
}
export interface WlResourceResourceListListResponse {
    a_resource: Array<{
        hide_application: boolean;
        is_active: boolean;
        is_book: boolean;
        k_city: string;
        k_resource: string;
        k_resource_layout: string;
        k_resource_type: string;
        text_address: string;
        text_guide: string;
        text_postal: string;
        text_title: string;
    }>;
}
export interface WlFamilyRelationRelationDeleteParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
    /** The key of the related user who `uid` must be removed. */
    uid_delete: string;
}
export interface WlFamilyRelationRelationDeleteResponse {
    a_relation: Array<{
        id_family_relation: number;
        id_family_relation_reverse: number;
        text_name: string;
        text_name_first: string;
        uid: string;
    }>;
}
export interface WlFamilyRelationRelationGetParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelationGetResponse {
    a_relation: Array<{
        id_family_relation: number;
        id_family_relation_reverse: number;
        text_name: string;
        text_name_first: string;
        uid: string;
    }>;
}
export interface WlFamilyRelationRelationPostParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelationPostResponse {
    a_relation: Array<{
        id_family_relation: number;
        id_family_relation_reverse: number;
        text_name: string;
        text_name_first: string;
        uid: string;
    }>;
}
export interface WlFamilyRelationFamilyRelationParams {
    /** The business key. */
    k_business: string;
}
export interface WlFamilyRelationFamilyRelationResponse {
    /** The relationship types in the business. */
    a_business_relationships: Array<number>;
}
export interface WlFamilyRelationRelation72DeleteParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
    /** The key of the related user who [RelationApi](/Wl/Family/Relation/Relation.json) must be removed. */
    uid_delete: string;
}
export interface WlFamilyRelationRelation72DeleteResponse {
    a_relation: Array<{
        id_family_relation: number;
        id_family_relation_reverse: number;
        text_name: string;
        text_name_first: string;
        uid: string;
    }>;
}
export interface WlFamilyRelationRelation72GetParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelation72GetResponse {
    a_relation: Array<{
        id_family_relation: number;
        id_family_relation_reverse: number;
        text_name: string;
        text_name_first: string;
        uid: string;
    }>;
}
export interface WlFamilyRelationRelation72PostParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelation72PostResponse {
    a_relation: Array<{
        id_family_relation: number;
        id_family_relation_reverse: number;
        text_name: string;
        text_name_first: string;
        uid: string;
    }>;
}
export interface WlIntegrationAutymateAutymateActivateParams {
    /** The mode of the request. */
    id_mode: number;
    /** The new status of the enrollment. If `0`, the current status is returned. */
    id_status: number;
    /** The key of the business. */
    k_business: string;
    /** The randomly generated 32 character string used to authenticate Autymate requests for the business. */
    s_guid: string;
    /** The user key. */
    uid: string;
}
export interface WlIntegrationAutymateAutymateActivateResponse {
    /** List of statuses of an Autymate enrollment notification. */
    id_status: number;
}
export interface WlIntegrationAutymateReportParams {
    /** List of payment methods to filter out in the report. */
    a_pay_method_remove: Array<number>;
    /** The date in local time to retrieve transactions for. */
    dl_date: string;
    /** The page of the report, starting from 0. */
    i_page: number;
    /** Determines whether this report should be refreshed. */
    is_refresh: boolean;
    /** The key of the business for which the report must be generated. */
    k_business: string;
    /** The randomly generated 32 character string used to authenticate requests. */
    s_guid: string;
}
export interface WlIntegrationAutymateReportResponse {
    /** The list of fields in this report. */
    a_field: Array<string>;
    /** The report data. */
    a_row: Array<Array<string>>;
    /** The warning list of the report, if applicable. */
    a_warning: Array<string>;
    /** The date and time when this report has completed generation. */
    dtu_complete: string | null;
    /** The date and time when this report was put in the generation queue. */
    dtu_queue: string | null;
    /** The date and time when generation of this report was started. */
    dtu_start: string | null;
    /** Lists statuses of reports from point of view of its generation. */
    id_report_status: number;
    /** If `true` then there are more report rows to get. Otherwise, `false` if all rows have been sent. */
    is_more: boolean;
    /** Determines whether this report is complete. If this report is accessed on the current day, or is ... */
    is_report_complete: boolean;
}
export type WlIntegrationSamlSamlUserDeactivationParams = Record<string, unknown>;
export interface WlIntegrationSamlSamlUserDeactivationResponse {
    /** The key of the SAML identifier. */
    a_result: Array<boolean>;
}
export interface WlIntegrationCurvesCurvesFranchiseLocationParams {
    /** Determines which locations should be returned. */
    id_business_franchise_location: number;
    /** Determines whether to include churned/removed locations. */
    is_include_churn: boolean;
    /** Determines whether to include locations marked to not be displayed on franchisor website. */
    is_include_non_api: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlIntegrationCurvesCurvesFranchiseLocationResponse {
    a_city_list: Array<{
        k_city: string;
        k_country: string;
        k_state: string;
        text_title: string;
    }>;
    a_country_list: Array<{
        k_country: string;
        text_title: string;
    }>;
    a_location_list: Array<{
        id_currency: number;
        k_city: string;
        k_country: string;
        k_location: string;
        k_region: string;
        k_state: string;
        text_title: string;
    }>;
    a_region_list: Array<{
        k_region: string;
        text_title: string;
    }>;
    a_state_list: Array<{
        k_country: string;
        k_state: string;
        text_title: string;
    }>;
}
export interface WlIntegrationDragonFlyAccessParams {
    /** The location key. */
    k_location: string;
    /** The member ID. */
    s_member: string;
    /** The user key. */
    uid: string;
}
export interface WlIntegrationDragonFlyAccessResponse {
    /** Whether the specified user can access the location. */
    can_access: boolean;
}
export interface WlCouponCouponListListParams {
    /** Whether to return franchisee-created coupons (if business is franchisor). */
    is_franchise: boolean;
    /** `true` to get only gift cards available for current user; `false` to get all gift cards. */
    is_frontend: boolean;
    /** A flag to include disabled items in the query result */
    is_inactive_include: boolean;
    /** The business key to retrieve a list of all the gift cards in a business. */
    k_business: string;
}
export interface WlCouponCouponListListResponse {
    a_coupon: Array<{
        id_type: number;
        k_coupon: string;
        text_title: string;
    }>;
}
export interface WlMicrosoftLoginMicrosoftLoginDeleteParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
}
export type WlMicrosoftLoginMicrosoftLoginDeleteResponse = Record<string, unknown>;
export interface WlMicrosoftLoginMicrosoftLoginGetParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export interface WlMicrosoftLoginMicrosoftLoginGetResponse {
    /** If `true`, the user has a bound Microsoft account. Otherwise, this will be `false`. */
    is_exists: boolean;
    /** The Microsoft OAuth 2.0 authorization link. */
    url_login: string;
}
export interface WlMicrosoftLoginMicrosoftLoginPostParams {
    /** If authorization is performed in a third-party application, set this flag in case of authorizatio... */
    is_external: boolean;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export type WlMicrosoftLoginMicrosoftLoginPostResponse = Record<string, unknown>;
export type WlSearchTagSearchTagListParams = Record<string, unknown>;
export interface WlSearchTagSearchTagListResponse {
    a_search_tag: Array<{
        id_business_category: number;
        k_search_tag: string;
        text_title: string;
    }>;
}
export interface WlReviewReviewListReviewElementDeleteParams {
    /** The review key. */
    k_review: string;
}
export type WlReviewReviewListReviewElementDeleteResponse = Record<string, unknown>;
export interface WlReviewReviewListReviewElementGetParams {
    /** The key of the business to which the review belongs. */
    k_business: string;
    /** The review key. */
    k_review: string;
    /** The user key. */
    uid: string;
}
export interface WlReviewReviewListReviewElementGetResponse {
    a_review: Array<{
        dt_add: string;
        f_rate: number;
        id_review_status: number | null;
        is_featured: boolean;
        is_verify: boolean;
        text_firstname: string;
        text_lastname: string;
        text_reply: string;
        text_review: string;
        text_business_name: string;
        text_response: string;
        uid: string;
        url_logo: string;
    }>;
}
export interface WlReviewReviewListReviewListParams {
    /** Business key. If not specified, location key needs to be specified. */
    k_business: string;
    /** The key of the location to show reviews for. If not specified, business key should be specified. */
    k_location: string;
    /** The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff... */
    uid: string;
    /** If not specified, this request will return all review keys. If specified, this request will retur... */
    i_page?: number | null;
    /** The order in which the review should be arranged. One of the [ReviewOrderSid](#/components/schema... */
    id_order?: number | null;
}
export interface WlReviewReviewListReviewListResponse {
    a_review: Array<{
        can_reply: boolean;
        dl_reply: string;
        dt_add: string;
        f_rate: number;
        is_featured: boolean;
        is_verify: boolean;
        k_location: string;
        k_review: string;
        s_firstname: string;
        s_lastname: string;
        s_reply: string;
        s_text: string;
        text_city: string;
        text_reply_first: string;
        text_reply_last: string;
        text_role: string;
        uid: string;
        url_image: string;
        url_reply_image: string;
    }>;
}
export interface WlGymVisitVisitAddParams {
    /** The business key. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The key of the user making the gym visit. */
    uid: string;
}
export interface WlGymVisitVisitAddResponse {
    /** Url to the business catalog with items that can be used to pay for the visit. */
    url_catalog: string;
}
export type WlSocialShareSocialShareParams = Record<string, unknown>;
export interface WlSocialShareSocialShareResponse {
    /** Secret key for access shared object. */
    s_secret: string;
}
export type WlFacebookLoginFacebookLoginParams = Record<string, unknown>;
export type WlFacebookLoginFacebookLoginResponse = Record<string, unknown>;
export interface ThothWlPayBankCardAddAddDeleteParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** Pay bank key to delete. */
    k_pay_bank: string;
}
export type ThothWlPayBankCardAddAddDeleteResponse = Record<string, unknown>;
export interface ThothWlPayBankCardAddAddGetParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The payment owner ID. This is different from the user ID. It can be found with */
    k_pay_owner: string;
}
export interface ThothWlPayBankCardAddAddGetResponse {
    /** The HTML form containing the fields required to add a card. */
    html_widget: string;
}
export interface ThothWlPayBankCardAddAddPostParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The payment owner ID. This is different from the user ID. It can be found with */
    k_pay_owner: string;
}
export type ThothWlPayBankCardAddAddPostResponse = Record<string, unknown>;
export type CoreRequestApiApplicationOriginDeleteParams = Record<string, unknown>;
export type CoreRequestApiApplicationOriginDeleteResponse = Record<string, unknown>;
export type CoreRequestApiApplicationOriginGetParams = Record<string, unknown>;
export interface CoreRequestApiApplicationOriginGetResponse {
    /** A list of origins. */
    a_list: Array<string> | null;
}
export type CoreRequestApiApplicationOriginPutParams = Record<string, unknown>;
export type CoreRequestApiApplicationOriginPutResponse = Record<string, unknown>;
export type CorePassportLoginEnterEnterParams = Record<string, unknown>;
export interface CorePassportLoginEnterEnterResponse {
    /** An optional URL for redirection after the user has signed in to the web application. */
    url_redirect: string;
}
export interface CorePassportLoginEnterNotepadParams {
    /** The session type to store the notepad in. */
    s_type: string;
    /** User login. */
    s_login?: string | null;
}
export interface CorePassportLoginEnterNotepadResponse {
    /** List of available data center regions. */
    id_region: number;
    /** The hash type. */
    s_hash: string;
    /** The notepad value, which is used to hash the user's password. */
    s_notepad: string;
}
export type CorePassportLoginRegisterRegisterParams = Record<string, unknown>;
export interface CorePassportLoginRegisterRegisterResponse {
    /** JSON configuration for confirmation email. */
    json_confirm_config: string;
    /** The URL to the confirmation page. This link is used in a confirmation email. */
    url_confirm: string;
}
export interface CorePassportLoginRegisterRegisterConfirmParams {
    /** The unique registration code. */
    text_code: string;
    /** The user's login. */
    text_login: string;
    /** The user's email. */
    text_mail: string;
}
export interface CorePassportLoginRegisterRegisterConfirmResponse {
    /** The key of the new registered user. */
    uid: string;
}
export type CorePassportLoginSignOutSignOutParams = Record<string, unknown>;
export type CorePassportLoginSignOutSignOutResponse = Record<string, unknown>;
export type CorePassportEnterJwtJwtTokenParams = Record<string, unknown>;
export interface CorePassportEnterJwtJwtTokenResponse {
    /** Jwt token that allows to authenticate user. */
    s_token: string;
}
export interface CorePassportUserEmailEmailExistParams {
    /** The email address. */
    text_email: string;
}
export interface CorePassportUserEmailEmailExistResponse {
    /** Determines whether the email address exists. */
    is_exist: boolean;
}
export interface WlScheduleScheduleListStaffAppScheduleListParams {
    /** Configuration options for schedule. */
    a_config: Array<{
        is_appointment_cancel_recurring: boolean;
        is_appointment_cancel_single: boolean;
        is_class_cancel: boolean;
    }>;
    /** The end date of the range from which the list of schedule sessions should be retrieved. */
    dl_end: string;
    /** The start date of the range from which the list of scheduled sessions should be retrieved. */
    dl_start: string;
    /** The date of the sessions in Coordinated Universal Time (UTC) and MySQL format. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlScheduleScheduleListStaffAppScheduleListResponse {
    a_schedule: Array<{
        a_note: Array<string>;
        a_quiz: {
            id_status: number;
            is_hide: boolean;
            is_require: boolean;
            k_quiz: string;
            k_quiz_login: string;
            k_quiz_response: string;
            text_title: string;
        } | null;
        a_appointment_visit_info: {
            id_visit: number;
            is_confirmed: boolean;
            is_deny: boolean;
            is_notify_request_accept: boolean;
            is_notify_request_deny: boolean;
            is_request: boolean;
        };
        a_resource: Array<string>;
        a_resource_removed: Array<string>;
        a_staff: Array<string>;
        a_uid_staff: Array<string>;
        a_staff_info: {
            text_staff: string;
            is_staff_change: boolean;
            k_staff: string;
            uid_staff: string;
        };
        a_user: Array<string>;
        a_virtual_location: Array<string>;
        dt_date: string;
        dt_date_cancel: string;
        dt_date_local: string;
        has_quiz_uncompleted: boolean;
        i_addon: number;
        i_book: number;
        i_capacity: number;
        i_duration: number;
        i_padding_after: number;
        i_padding_before: number;
        i_start: number;
        i_wait: number;
        id_option: number;
        id_service: number;
        is_arrive: boolean;
        is_pay: boolean;
        is_repeat: boolean;
        k_appointment: string;
        dt_confirm: string;
        k_class: string;
        k_class_period: string;
        k_location: string;
        k_service: string;
        s_title: string;
        show_quiz_icon: boolean;
        t_business_start: number;
        t_business_end: number;
        text_alert: string;
        text_color_background: string;
        text_color_border: string;
        text_quiz_title: string;
        is_virtual_service: boolean;
        url_image: string;
    }>;
    /** `true` - If the business has at least one virtual service, `false` - otherwise. */
    is_virtual_service: boolean;
}
export interface WlScheduleScheduleListStaffAppScheduleListByTokenParams {
    /** Configuration options for schedule. */
    a_config: Array<{
        is_appointment_cancel_recurring: boolean;
        is_appointment_cancel_single: boolean;
        is_class_cancel: boolean;
    }>;
    /** The end date of the range from which the list of schedule sessions should be retrieved. */
    dl_end: string;
    /** The start date of the range from which the list of scheduled sessions should be retrieved. */
    dl_start: string;
    /** The date of the sessions in Coordinated Universal Time (UTC) and MySQL format. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** The security token. */
    text_token: string;
    /** User key. */
    uid: string;
}
export interface WlScheduleScheduleListStaffAppScheduleListByTokenResponse {
    a_schedule: Array<{
        a_note: Array<string>;
        a_appointment_visit_info: {
            id_visit: number;
            is_confirmed: boolean;
            is_deny: boolean;
            is_notify_request_accept: boolean;
            is_notify_request_deny: boolean;
            is_request: boolean;
        };
        a_resource: Array<string>;
        a_staff: Array<string>;
        a_staff_info: {
            text_staff: string;
            is_staff_change: boolean;
            k_staff: string;
        };
        a_user: Array<string>;
        a_virtual_location: Array<string>;
        dt_date: string;
        dt_date_cancel: string;
        dt_date_local: string;
        i_book: number;
        i_capacity: number;
        i_duration: number;
        i_padding_after: number;
        i_padding_before: number;
        i_start: number;
        i_wait: number;
        id_option: number;
        id_service: number;
        is_arrive: boolean;
        is_pay: boolean;
        is_repeat: boolean;
        k_appointment: string;
        dt_confirm: string;
        k_class: string;
        k_class_period: string;
        k_location: string;
        k_service: string;
        s_title: string;
        text_alert: string;
        text_color_background: string;
        text_color_border: string;
        is_virtual_service: boolean;
        url_image: string;
    }>;
    /** `true` - If the business has at least one virtual service, `false` - otherwise. */
    is_virtual_service: boolean;
}
export interface WlAppointmentBookServiceServiceList52Params {
    /** The class tab key to use to filter services. If empty, this can be found on the standard book tab. */
    a_class_tab: Array<string>;
    /** List of staff members to filter a result. */
    a_staff: Array<string>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** `true` - return all active services for a certain location ignoring user age and other restrictions. */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The key of a service category to show information for. */
    k_service_category: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
}
export interface WlAppointmentBookServiceServiceList52Response {
    a_service: Array<{
        a_class_tab: Array<string>;
        a_direct_link: {
            k_class_tab: string;
            url_tab: string;
        };
        a_config: {
            is_back_to_back: boolean;
            is_book_repeat_client: boolean;
            is_book_repeat_no_end_date_appointment: boolean;
            is_multiple_booking: boolean;
            is_wait_list_unpaid: boolean;
        } | null;
        a_image: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            k_service: string;
            s_service: string;
            s_url: string;
        };
        a_login_type_restriction: Array<string>;
        a_member_group_restriction: Array<string>;
        f_deposit: string;
        f_offline_max: string;
        f_offline_min: string;
        f_online: string;
        hide_application: boolean;
        i_age_from: number;
        i_age_to: number;
        i_price: number;
        i_duration: number;
        id_book_flow: number;
        id_service_require: number;
        is_age_public: boolean;
        is_age_restricted: boolean;
        is_back_to_back: boolean;
        is_bookable: boolean;
        is_book_repeat_client: boolean;
        is_book_repeat_no_end_date_appointment: boolean;
        is_deposit_percent: boolean;
        is_gender_select: boolean;
        is_online_sell: boolean;
        is_resource_type: boolean;
        is_single_buy: boolean;
        is_staff_confirm: boolean;
        is_staff_skip: boolean;
        is_question: boolean;
        is_virtual: boolean;
        k_service: string;
        k_service_category: string;
        s_duration: string;
        s_service: string;
        text_age_restriction: string;
        xml_description: string;
        xml_description_short: string;
        xml_special: string;
    }>;
    /** Whether services allow multiple appointment booking. */
    is_multiple_booking: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookServiceCategoryParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** `true` - return all service categories for a certain location. */
    is_backend: boolean;
    /** Whether a flagged client is allowed to retrieve categories. */
    is_flag_ignore: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The class tab key used to filter services. */
    k_class_tab: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookServiceCategoryResponse {
    a_category: Array<{
        hide_application: boolean;
        i_sort: boolean;
        k_service_category: string;
        s_title: string;
    }>;
    /** `true` - if client has a flag, `false` - otherwise. */
    is_client_flag: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookServiceServiceListParams {
    /** The class tab key to use to filter services. If empty, this can be found on the standard book tab. */
    a_class_tab: Array<string>;
    /** List of staff members to filter a result. */
    a_staff: Array<string>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** `true` - return all active services for a certain location ignoring user age and other restrictions. */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The class tab key to filter services. If empty or `0`, this can be found on the standard book now... */
    k_class_tab: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The key of a service category to show information for. */
    k_service_category: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
}
export interface WlAppointmentBookServiceServiceListResponse {
    a_service: Array<{
        a_class_tab: Array<string>;
        a_direct_link: {
            k_class_tab: string;
            url_tab: string;
        };
        a_config: {
            is_back_to_back: boolean;
            is_book_repeat_client: boolean;
            is_book_repeat_no_end_date_appointment: boolean;
            is_multiple_booking: boolean;
            is_wait_list_unpaid: boolean;
        } | null;
        a_image: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            k_service: string;
            s_service: string;
            s_url: string;
        };
        a_login_type_restriction: Array<string>;
        a_member_group_restriction: Array<string>;
        f_deposit: string;
        f_offline_max: string;
        f_offline_min: string;
        f_online: string;
        hide_application: boolean;
        i_age_from: number;
        i_age_to: number;
        i_price: number;
        i_duration: number;
        id_book_flow: number;
        id_service_require: number;
        is_age_public: boolean;
        is_age_restricted: boolean;
        is_back_to_back: boolean;
        is_bookable: boolean;
        is_book_repeat_client: boolean;
        is_book_repeat_no_end_date_appointment: boolean;
        is_deposit_percent: boolean;
        is_gender_select: boolean;
        is_online_sell: boolean;
        is_resource_type: boolean;
        is_single_buy: boolean;
        is_staff_confirm: boolean;
        is_staff_skip: boolean;
        is_question: boolean;
        is_virtual: boolean;
        k_service: string;
        k_service_category: string;
        s_duration: string;
        s_service: string;
        text_age_restriction: string;
        xml_description: string;
        xml_description_short: string;
        xml_special: string;
    }>;
    /** Whether services allow multiple appointment booking. */
    is_multiple_booking: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookServiceServiceCheckParams {
    /** Date of booking in MySQL format. */
    dt_date: string;
    /** The business key. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The service key. */
    k_service: string;
    /** The user key. */
    uid: string;
}
export type WlAppointmentBookServiceServiceCheckResponse = Record<string, unknown>;
export interface WlAppointmentBookFinishFinishMultipleParams {
    /** The payment type for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/RsApp... */
    a_pay: Array<number>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Data to create new users. */
    a_user: Array<{
        a_note: Array<string>;
        text_mail: string;
        text_name_first: string;
        text_name_last: string;
        text_phone: string;
    }>;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookFinishFinishMultipleResponse {
    a_appointment: Array<{
        k_appointment: string;
    }>;
    /** The activity IDs of bookings that have been made. */
    a_login_activity_visit: Array<string>;
    /** The visit IDs. */
    a_visit: Array<string>;
    /** Keys of booked visits. */
    a_visit_provider: Array<Array<string>>;
}
export interface WlAppointmentBookFinishFinishGetParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookFinishFinishGetResponse {
    a_notification: Array<{
        is_mail?: boolean;
        is_sms?: boolean;
        is_push?: boolean;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookFinishFinishPostParams {
    /** All data from the provider model `Wl_Appointment_Book_ProviderModel`: */
    a_book_data: Array<{
        a_conflict?: {
            dt_date_local: string;
            i_duration: number;
            i_index: number;
            id_conflict: number;
            k_resource: string;
            k_staff: string | null;
        };
        a_product?: {
            i_count: number;
            i_count_use?: number;
            k_shop_product_option: string;
        };
        a_repeat?: {
            a_week?: Array<number>;
            dl_end?: string;
            i_occurrence?: number;
            i_period: number;
            id_period: number;
            is_month?: boolean;
        };
        a_resource?: {
            i_index?: number;
            k_resource: string;
        };
        dt_date: string;
        i_duration?: number;
        i_index?: number;
        id_class_tab?: number;
        id_gender_staff?: number;
        is_wait_list_unpaid?: boolean;
        k_login_prize?: string;
        k_login_promotion?: string;
        k_resource?: string;
        k_service?: string;
        k_session_pass?: string;
        k_staff?: string;
        k_staff_date?: string;
        m_tip_appointment?: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Data to create new user. */
    a_user: Array<{
        a_note: Array<string>;
        text_mail: string;
        text_name_first: string;
        text_name_last: string;
        text_phone: string;
    }>;
    /** The payment type ID for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/Rs... */
    id_pay: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookFinishFinishPostResponse {
    a_appointment: Array<{
        k_appointment: string;
    }>;
    /** The activity keys of the bookings that were made. */
    a_login_activity_visit: Array<string>;
    /** The keys of visits. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        is_free: boolean;
        k_login_promotion: string;
        k_promotion: string;
        k_session_pass: string;
        text_promotion: string;
    }>;
}
export interface WlAppointmentBookFinishFinish47GetParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookFinishFinish47GetResponse {
    a_notification: Array<{
        is_mail?: boolean;
        is_sms?: boolean;
        is_push?: boolean;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookFinishFinish47PostParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Data to create new user. */
    a_user: Array<{
        a_note: Array<string>;
        text_mail: string;
        text_name_first: string;
        text_name_last: string;
        text_phone: string;
    }>;
    /** The payment type ID for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/Rs... */
    id_pay: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookFinishFinish47PostResponse {
    a_appointment: Array<{
        k_appointment: string;
    }>;
    /** The activity keys of the bookings that were made. */
    a_login_activity_visit: Array<string>;
    /** The keys of visits. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        is_free: boolean;
        k_login_promotion: string;
        k_promotion: string;
        k_session_pass: string;
        text_promotion: string;
    }>;
}
export interface WlAppointmentBookPurchasePurchaseParams {
    /** List of selected services without current `k_service`. */
    a_service: Array<{
        a_purchase: {
            id_purchase_item: number;
            k_id: string;
            is_purchase_previous?: boolean;
        };
        dt_date: string;
        k_login_prize: string | null;
        k_login_promotion: string | null;
        k_service: string;
        k_timezone: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to use to check for expiration of Purchase Options. */
    dt_date: string;
    /** The asset booking duration. */
    i_duration: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` - get all Purchase Options suitable for appointment. */
    is_backend: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key. */
    k_resource: string;
    /** The service key used to select available Purchase Options. */
    k_service: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion?: string | null;
    /** The timezone key for `dt_date`. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookPurchasePurchaseResponse {
    a_login_prize: Array<{
        i_count: number;
        k_login_prize: string;
        text_description: string;
    }>;
    a_login_promotion: Array<{
        a_login_promotion_info: {
            i_limit: number;
            i_limit_duration: number | null;
            i_remain: number;
            i_remain_duration: number | null;
        };
        a_visit_limit: Array<string>;
        a_restrict: {
            i_limit: number;
            i_remain: number;
            text_restriction: string;
        };
        a_restrict_data: {
            i_book: number;
            i_limit: number;
            i_remain: number;
            i_use: number;
            i_visit_past: number;
            text_restriction: string;
        };
        i_limit: number;
        i_limit_duration: number | null;
        i_promotion_priority: number;
        id_program: number;
        is_share: boolean;
        k_login_promotion: string;
        s_class_include: string;
        s_description: string;
        s_duration: string;
        s_title: string;
        text_package_item: string;
        uid_owner: string;
    }>;
    a_purchase: Array<{
        a_image: {
            i_height: number;
            i_height_src: number;
            i_rotate: number;
            i_width: number;
            i_width_src: number;
            'is-resize': boolean;
            'url-view': string;
            'url-thumbnail': string;
        };
        a_payment: {
            m_discount: string;
            m_discount_login: string;
        };
        a_visit_limit: Array<string>;
        dt_expire: string;
        dt_start: string;
        f_price: string;
        i: number;
        i_limit: number;
        i_limit_duration: number | null;
        i_payment_period: number;
        id_duration: number;
        id_program: number;
        id_program_type: number;
        id_promotion_price: number;
        id_purchase_item: number;
        is_contract: boolean;
        is_description: boolean;
        is_introductory: boolean;
        is_renew: boolean;
        is_renew_check: boolean;
        is_start: boolean;
        k_id: string;
        m_price_old?: string | null;
        s_activation: string;
        s_class: string;
        s_class_include: string;
        s_description: string;
        s_duration: string;
        s_payment_duration: string;
        sid_program_category: string;
        s_title: string;
        s_value: string;
        text_package_item: string;
    }>;
    a_reward_prize: Array<{
        i_score: number;
        k_reward_prize: string;
        text_description: string;
    }>;
    a_session_pass: Array<{
        i_remain: number;
        k_session_pass: string;
        id_purchase_item: number;
        s_title: string;
    }>;
    /** Indicates if drop-in rate should be the default purchase option. */
    is_single_default: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion: string | null;
    /** Default promotion key. */
    k_promotion_default: string;
    /** Login promotion title suitable to pay for the services. */
    text_login_promotion: string;
}
export interface WlAppointmentBookPurchasePurchase72Params {
    /** List of selected services without current [PurchaseApi](/Wl/Appointment/Book/Purchase/Purchase.js... */
    a_service: Array<{
        a_purchase: {
            id_purchase_item: number;
            k_id: string;
            is_purchase_previous?: boolean;
        };
        dt_date: string;
        k_login_prize: string | null;
        k_login_promotion: string | null;
        k_service: string;
        k_timezone: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to use to check for expiration of Purchase Options. */
    dt_date: string;
    /** The asset booking duration. */
    i_duration: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` - get all Purchase Options suitable for appointment. */
    is_backend: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key. */
    k_resource: string;
    /** The service key used to select available Purchase Options. */
    k_service: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
    /** Appointment key. */
    k_appointment?: string | null;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion?: string | null;
    /** The timezone key for [PurchaseApi](/Wl/Appointment/Book/Purchase/Purchase.json). */
    k_timezone?: string | null;
}
export interface WlAppointmentBookPurchasePurchase72Response {
    a_login_prize: Array<{
        i_count: number;
        k_login_prize: string;
        text_description: string;
    }>;
    a_login_promotion: Array<{
        a_login_promotion_info: {
            i_limit: number;
            i_limit_duration: number | null;
            i_remain: number;
            i_remain_duration: number | null;
        };
        a_visit_limit: Array<string>;
        a_restrict: {
            i_limit: number;
            i_remain: number;
            text_restriction: string;
        };
        a_restrict_data: {
            i_book: number;
            i_limit: number;
            i_remain: number;
            i_use: number;
            i_visit_past: number;
            text_restriction: string;
        };
        i_limit: number;
        i_limit_duration: number | null;
        i_promotion_priority: number;
        id_program: number;
        is_share: boolean;
        k_login_promotion: string;
        s_class_include: string;
        s_description: string;
        s_duration: string;
        s_title: string;
        text_package_item: string;
        uid_owner: string;
    }>;
    a_purchase: Array<{
        a_image: {
            i_height: number;
            i_height_src: number;
            i_rotate: number;
            i_width: number;
            i_width_src: number;
            'is-resize': boolean;
            'url-view': string;
            'url-thumbnail': string;
        };
        a_payment: {
            m_discount: string;
            m_discount_login: string;
        };
        a_visit_limit: Array<string>;
        dt_expire: string;
        dt_start: string;
        f_price: string;
        i: number;
        i_limit: number;
        i_limit_duration: number | null;
        i_payment_period: number;
        id_duration: number;
        id_program: number;
        id_program_type: number;
        id_promotion_price: number;
        id_purchase_item: number;
        is_contract: boolean;
        is_description: boolean;
        is_introductory: boolean;
        is_renew: boolean;
        is_renew_check: boolean;
        is_start: boolean;
        k_id: string;
        m_price_old?: string | null;
        s_activation: string;
        s_class: string;
        s_class_include: string;
        s_description: string;
        s_duration: string;
        s_payment_duration: string;
        sid_program_category: string;
        s_title: string;
        s_value: string;
        text_package_item: string;
    }>;
    a_reward_prize: Array<{
        i_score: number;
        k_reward_prize: string;
        text_description: string;
    }>;
    a_session_pass: Array<{
        i_remain: number;
        k_session_pass: string;
        id_purchase_item: number;
        s_title: string;
    }>;
    /** Indicates if drop-in rate should be the default purchase option. */
    is_single_default: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion: string | null;
    /** Default promotion key. */
    k_promotion_default: string;
    /** Login promotion title suitable to pay for the services. */
    text_login_promotion: string;
}
export interface WlAppointmentBookScheduleDayTimeParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv... */
    i_duration: number;
    /** An index of the selected asset. `0` for booking of service or if asset is not on layout. */
    i_index: number;
    /** The ID of the staff member's gender. */
    id_gender_staff: number;
    /** Determines whether multiple appointments are booked in back-to-back mode. */
    is_back_to_back: boolean;
    /** `true` if the request is made by staff member; in this case booking policy restrictions are ignored. */
    is_staff: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** `true` - return service categories that have no staff members able to conduct them. */
    is_unavailable: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key to show which days are available for booking. */
    k_resource: string;
    /** The service key used for showing the available appointment booking schedule. */
    k_service: string;
    /** The staff member key used for showing the available appointment booking schedule. */
    k_staff: string;
    /** The staff key to show what days are available for booking. */
    s_appointment: string;
    /** A list of service add-ons keys(encoded as JSON string). */
    s_product: string;
    /** The user key. */
    uid: string;
    /** The staff user key used for showing the available appointment booking schedule. */
    uid_staff: string;
    /** Current booking tab. */
    k_class_tab?: string | null;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookScheduleDayTimeResponse {
    a_time: Array<{
        dt_date: string;
        i_count: number;
        i_time: number;
        i_wait: number;
        is_waitlist: boolean;
        k_staff: string;
        uid_staff: string;
        s_title: string;
    }>;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** Maximum number of clients that can simultaneously book this service. */
    i_capacity: number | null;
    /** Maximum number of clients that can be placed on the waitlist for this service. */
    i_capacity_waitlist: number | null;
    /** Whether list of available times contains slots with only waitlist booking available. */
    is_waitlist: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookScheduleCalendarParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv... */
    i_duration: number;
    /** An index of the selected asset. `0` for booking of service or if asset is not on layout. */
    i_index: number;
    /** The ID of the staff member's gender. */
    id_gender_staff: number;
    /** Determines whether multiple appointments are booked in back-to-back mode. */
    is_back_to_back: boolean;
    /** If calendar should be displayed in month view mode. */
    is_month_view: boolean;
    /** `true` if the request is made by staff member; in this case booking policy restrictions are ignored. */
    is_staff: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** `true` - return service categories that have no staff members able to conduct them. */
    is_unavailable: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key to show which days are available for booking. */
    k_resource: string;
    /** The service key used for showing the available appointment booking schedule. */
    k_service: string;
    /** The staff member key used for showing the available appointment booking schedule. */
    k_staff: string;
    /** The staff key to show what days are available for booking. */
    s_appointment: string;
    /** A list of service add-ons keys(encoded as JSON string). */
    s_product: string;
    /** The user key. */
    uid: string;
    /** The staff user key used for showing the available appointment booking schedule. */
    uid_staff: string;
    /** Current booking tab. */
    k_class_tab?: string | null;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookScheduleCalendarResponse {
    a_date: Array<{
        dt_date: string;
        i_week: number;
        is_available: boolean;
        is_current: boolean;
        is_out: boolean;
        is_waitlist_only: boolean;
        is_week_end: boolean;
        is_week_start: boolean;
        s_day: string;
        s_week: string;
    }>;
    a_time: Array<{
        dt_date: string;
        i_count: number;
        i_time: number;
        i_wait: number;
        is_waitlist: boolean;
        k_staff: string;
        uid_staff: string;
        s_title: string;
    }>;
    a_timezone_data: Array<{
        a_timezone: {
            i_order: number;
            i_shift: number;
            is_select: boolean;
            k_timezone: string;
            s_title: string;
            text_abbr: string;
        } | null;
        name: string | null;
    }>;
    a_week_name: Array<{
        i_day: number;
        html_week_day: string;
    }>;
    /** Whether previous calendar period can be shown (start of shown period later than current date). */
    can_backwards: boolean;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** Maximum number of clients that can simultaneously book this service. */
    i_capacity: number | null;
    /** Maximum number of clients that can be placed on the waitlist for this service. */
    i_capacity_waitlist: number | null;
    /** A class for the days of the week. */
    i_week_end: number;
    /** A class for the days of the week. */
    i_week_start: number;
    /** Whether list of available times contains slots with only waitlist booking available. */
    is_waitlist: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookScheduleNextAvailableDayParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Start date to search next available date in MySQL format. If empty, the search will start from th... */
    dt_date: string;
    /** The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv... */
    i_duration: number;
    /** An index of the selected asset. `0` for booking of service or if asset is not on layout. */
    i_index: number;
    /** The ID of the staff member's gender. */
    id_gender_staff: number;
    /** Determines whether multiple appointments are booked in back-to-back mode. */
    is_back_to_back: boolean;
    /** `true` if the request is made by staff member; in this case booking policy restrictions are ignored. */
    is_staff: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key to show which days are available for booking. */
    k_resource: string;
    /** The service key used for showing the available appointment booking schedule. */
    k_service: string;
    /** The staff key to show what days are available for booking. */
    s_appointment: string;
    /** A list of service add-ons keys(encoded as JSON string). */
    s_product: string;
    /** The user key. */
    uid: string;
    /** The staff user key used for showing the available appointment booking schedule. */
    uid_staff: string;
    /** Current booking tab. */
    k_class_tab?: string | null;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookScheduleNextAvailableDayResponse {
    /** Start date to search next available date in MySQL format. If empty, the search will start from th... */
    dt_date: string;
    /** Next available date in MySQL format. */
    dt_next: string;
    /** Maximum number of clients that can simultaneously book this service. */
    i_capacity: number | null;
    /** Maximum number of clients that can be placed on the waitlist for this service. */
    i_capacity_waitlist: number | null;
    /** Whether list of available times contains slots with only waitlist booking available. */
    is_waitlist: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookAssetAssetListParams {
    /** The selected date and time of the asset booking. It is used in cases when the business booking po... */
    dtl_date: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** Mode type, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** This is `true` if asset categories are loaded for back-end mode. Otherwise, this will be `false` ... */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** Key of the appointment, if we reschedule existing appointment. */
    k_appointment: string;
    /** Business key. */
    k_business: string;
    /** The class tab key used to filter assets. */
    k_class_tab: string;
    /** The location key. */
    k_location: string;
    /** The asset category key to show information for. */
    k_resource_category: string;
    /** Timezone of date and time of asset booking. */
    k_timezone: string;
    /** Client to get information for. */
    uid?: string | null;
}
export interface WlAppointmentBookAssetAssetListResponse {
    a_asset: Array<{
        a_age_restrictions: {
            i_age_from: number | null;
            i_age_to: number | null;
            is_age_public: boolean;
        };
        a_class_tab: Array<string>;
        a_direct_link: {
            k_class_tab: string;
            url_tab: string;
        };
        a_image: {
            i_angle: number;
            is_empty: boolean;
            sid_image_icon: string;
            sid_image_shape: string;
            url: string;
        };
        a_period: {
            html_duration: string;
            html_price: string;
            i_duration: number;
            id_price: number;
            m_price: string;
        };
        a_search_tag: Array<string>;
        hide_application: boolean;
        html_age_restriction: string;
        html_title: string;
        id_service_require: number;
        is_age_restricted: boolean;
        k_class_tab: string;
        k_resource: string;
        k_resource_category: string;
    }>;
    /** A list of reserved assets. */
    a_asset_busy: Array<Array<string | boolean>>;
    /** The asset layout key. */
    k_resource_layout: string;
}
export interface WlAppointmentBookAssetCategoryParams {
    /** If `true`, asset categories are loaded for backend mode. Otherwise, this will be `false` if asset... */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** The class tab key to use for filtering services. */
    k_class_tab: string;
    /** The key of the location to show information for. */
    k_location: string;
}
export interface WlAppointmentBookAssetCategoryResponse {
    a_category: Array<{
        hide_application: boolean;
        k_resource_type: string;
        html_title: string;
        text_title: string;
    }>;
}
export interface WlAppointmentBookPaymentPaymentGetParams {
    /** Information detailing an appointment booking: */
    a_book_data: Array<{
        a_product: Array<number>;
        dl_client_prorate: string;
        id_class_tab: number;
        is_pay_later: boolean;
        is_purchase_previous: boolean;
        is_wait_list_unpaid: boolean;
        i_duration: number;
        k_login_prize: string;
        k_login_promotion: string;
        k_resource: string;
        k_reward_prize: string;
        k_service: string;
        k_session_pass: string;
        m_tip_appointment: string;
        s_signature: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on `id_purchase_item` property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The login promotion key. */
    k_login_promotion: string;
    /** Session pass key. */
    k_session_pass: string;
    /** Variable price. Is set only during booking an appointment with variable type of the price */
    m_variable_price: string;
    /** Service unique key. */
    s_unique_key: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
    /** The business key. Currently used only with `k_session_pass` variable. */
    k_business?: string | null;
}
export interface WlAppointmentBookPaymentPaymentGetResponse {
    a_promotion_data: Array<{
        i_limit: number;
        i_remain: number;
        s_expire: string;
        s_title: string;
    }>;
    a_purchase: Array<{
        a_tax: {
            m_tax: string;
            text_title: string;
        };
        id_purchase_item: number;
        k_id: string;
        m_discount: string;
        m_discount_login: string;
        m_pay: string;
        m_price: string;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card amount. */
    m_coupon: string;
    /** Discount amount. */
    m_discount: string;
    /** Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper). */
    m_surcharge: string;
    /** Surcharge amount calculated for money transfers from account: ACH, Direct Entry. */
    m_surcharge_ach: string;
    /** The tax of service. */
    m_tax: string;
    /** The total cost of the purchase. */
    m_total: string;
}
export interface WlAppointmentBookPaymentPaymentPostParams {
    /** Information detailing an appointment booking: */
    a_book_data: Array<{
        a_product: Array<number>;
        dl_client_prorate: string;
        id_class_tab: number;
        is_pay_later: boolean;
        is_purchase_previous: boolean;
        is_wait_list_unpaid: boolean;
        i_duration: number;
        k_login_prize: string;
        k_login_promotion: string;
        k_resource: string;
        k_reward_prize: string;
        k_service: string;
        k_session_pass: string;
        m_tip_appointment: string;
        s_signature: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on `id_purchase_item` property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentPostResponse {
    /** The purchase item keys from the database. */
    a_purchase_item: Array<string> | null;
    /** The possible payment types an appointment can have. */
    id_pay: number;
    /** The key of activity of the purchase made. */
    k_login_activity_purchase: string;
    /** Login prize key. In case when appointment paid by reward prize, there is the key of redeemed logi... */
    k_login_prize: string;
}
export interface WlAppointmentBookPaymentPaymentMultipleGetParams {
    /** The booking process information: */
    a_book_data: Array<{
        a_provider: {
            a_product: Record<string, unknown>;
            i_duration: number;
            id_purchase_item: number;
            is_pay_later: boolean;
            is_purchase_previous: boolean;
            is_wait_list_unpaid: boolean;
            k_id: string;
            k_login_prize: string;
            k_login_promotion: string;
            k_resource: string;
            k_service: string;
            s_signature: string;
            uid?: string;
        };
        id_class_tab: number;
        m_tip_appointment: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The ID of the source mode. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The gift card code. */
    text_coupon_code: string;
    /** The discount code. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentMultipleGetResponse {
    a_promotion_data: Array<{
        i_limit: number;
        i_remain: number;
        s_expire: string;
        s_title: string;
    }>;
    a_purchase: Array<{
        a_tax: {
            m_tax: string;
            text_title: string;
        };
        id_purchase_item: number;
        k_id: string;
        m_discount: string;
        m_pay: string;
        m_price: string;
    }>;
    /** The list of amounts to pay for appointments from the batch, with taxes and without surcharges. */
    a_total: Array<string>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The gift card amount. */
    m_coupon: string;
    /** The discount amount. */
    m_discount: string;
    /** Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper). */
    m_surcharge: string;
    /** Surcharge amount calculated for money transfers from account: ACH, Direct Entry. */
    m_surcharge_ach: string;
    /** The amount of tax to pay. */
    m_tax: string;
    /** The price of the service, with taxes and without surcharges. */
    m_total: string;
}
export interface WlAppointmentBookPaymentPaymentMultiplePostParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The ID of the source mode. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The gift card code. */
    text_coupon_code: string;
    /** The discount code. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentMultiplePostResponse {
    /** The list of redeemed prizes. */
    a_login_prize: Array<string>;
    /** The payment type for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/RsApp... */
    a_pay: Array<number>;
    /** The keys of purchased items. */
    a_purchase_item: Array<Array<string>> | null;
    /** Key of the activity for the purchase made. This will be empty if no purchase has been made. */
    k_login_activity_purchase: string;
}
export interface WlAppointmentBookPaymentPaymentPostGetParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The login promotion key. */
    k_login_promotion: string;
    /** Session pass key. */
    k_session_pass: string;
    /** Variable price. Is set only during booking an appointment with variable type of the price */
    m_variable_price: string;
    /** Service unique key. */
    s_unique_key: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
    /** The business key. Currently used only with [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json... */
    k_business?: string | null;
}
export interface WlAppointmentBookPaymentPaymentPostGetResponse {
    a_promotion_data: Array<{
        i_limit: number;
        i_remain: number;
        s_expire: string;
        s_title: string;
    }>;
    a_purchase: Array<{
        a_tax: {
            m_tax: string;
            text_title: string;
        };
        id_purchase_item: number;
        k_id: string;
        m_discount: string;
        m_discount_login: string;
        m_pay: string;
        m_price: string;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card amount. */
    m_coupon: string;
    /** Discount amount. */
    m_discount: string;
    /** Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper). */
    m_surcharge: string;
    /** Surcharge amount calculated for money transfers from account: ACH, Direct Entry. */
    m_surcharge_ach: string;
    /** The tax of service. */
    m_tax: string;
    /** The total cost of the purchase. */
    m_total: string;
}
export interface WlAppointmentBookPaymentPaymentPostPostParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentPostPostResponse {
    /** The purchase item keys from the database. */
    a_purchase_item: Array<string> | null;
    /** The possible payment types an appointment can have. */
    id_pay: number;
    /** The key of activity of the purchase made. */
    k_login_activity_purchase: string;
    /** Login prize key. In case when appointment paid by reward prize, there is the key of redeemed logi... */
    k_login_prize: string;
}
export interface WlAppointmentBookQuestionQuestionParams {
    /** The service key used for retrieving questions. */
    k_service: string;
}
export interface WlAppointmentBookQuestionQuestionResponse {
    a_question: Array<{
        i_size: number;
        is_multiple: boolean;
        s_key: string;
        s_question: string;
    }>;
}
export interface WlAppointmentBookStaffListParams {
    /** The date/time of the appointment selected by user, in the location's time zone. */
    dt_date: string;
    /** User role by whom this api called. */
    id_role: number;
    /** `true` - returns service categories that have no staff members available to conduct them. */
    is_unavailable: boolean;
    /** Key of appointment which must be ignored when searches available staff. */
    k_appointment_ignore: string;
    /** The key of the location. */
    k_location: string;
    /** The key of a service for which to show information. */
    k_service: string;
    /** Custom appointment duration in minutes. */
    i_duration_custom?: number | null;
    /** User's timezone. */
    k_timezone?: string | null;
    /** The user key for whom the service is booking. */
    uid?: string | null;
}
export interface WlAppointmentBookStaffListResponse {
    a_staff: Array<{
        id_gender: number;
        is_available: boolean;
        is_daily_limit: boolean;
        is_wait_list: boolean;
        k_staff: string;
        s_position: string;
        s_staff: number;
        uid: string;
        xml_biography: string;
    }>;
    /** Can staff booked unavailable staff. */
    can_book_unavailable_staff: boolean;
    /** Determines whether to select the staff member's gender for the appointment. */
    has_gender: boolean;
    /** Determines whether to select staff member(s) for the appointment. */
    has_staff: boolean;
    /** Determines if the staff list has male and female members. */
    is_gender_different: boolean;
}
export interface WlAppointmentBookProductProduct62Params {
    /** The key of a location where appointment is going to be booked. */
    k_location: string;
    /** The key of a service to show information for. */
    k_service: string;
    /** The key of a user to show information for. */
    uid?: string | null;
}
export interface WlAppointmentBookProductProduct62Response {
    a_product: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        html_description: string;
        i_duration: number;
        is_client_duration: boolean;
        is_online_sell: boolean;
        is_amount: boolean;
        k_currency: string;
        k_shop_product: string;
        k_shop_product_option: string;
        m_amount: string;
        text_description: string;
        text_duration: string;
        text_title: string;
    }>;
}
export interface WlAppointmentBookProductProductParams {
    /** The key of a service to show information for. */
    k_service: string;
}
export interface WlAppointmentBookProductProductResponse {
    a_product: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            is_empty: boolean;
            s_url: string;
        };
        html_description: string;
        i_duration: number;
        is_client_duration: boolean;
        is_online_sell: boolean;
        is_amount: boolean;
        k_currency: string;
        k_shop_product: string;
        k_shop_product_option: string;
        m_amount: string;
        text_description: string;
        text_duration: string;
        text_title: string;
    }>;
}
export interface WlBookProcessPurchasePurchaseParams {
    /** A list of existing purchase options that were selected for previous clients (group). */
    a_login_promotion_group: Array<{
        k_login_promotion: string;
        uid: string;
    }>;
    /** The list of sessions being booked. */
    a_session: Array<string>;
    /** The selected sessions on the wait list that are unpaid. */
    a_session_wait_list_unpaid: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The image height in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
    /** The business key. */
    k_business?: string | null;
}
export interface WlBookProcessPurchasePurchaseResponse {
    a_login_prize: Array<{
        f_price: string;
        i_count: number;
        i_limit: number;
        id_purchase_item: number;
        k_id: string;
        k_login_prize: string;
        s_value: string;
        text_title: string;
    }>;
    a_login_promotion: Array<{
        a_login_promotion_info: {
            i_limit: number;
            i_limit_duration: number | null;
            i_remain: number;
            i_remain_duration: number | null;
        };
        a_uid_share: Array<string>;
        a_visit_limit: Array<string>;
        a_restrict: {
            i_limit: number;
            i_remain: number;
            text_restriction: string;
        };
        a_restrict_data: {
            i_book: number;
            i_limit: number;
            i_remain: number;
            i_use: number;
            i_visit_past: number;
            text_restriction: string;
        };
        i_limit: number;
        i_limit_duration: number | null;
        i_promotion_priority: number;
        id_program: number;
        is_convert: boolean;
        is_shared: boolean;
        k_login_promotion: string;
        s_class_include: string;
        s_description: string;
        s_duration: string;
        s_promotion_convert?: string;
        s_title: string;
        text_package_item: string;
    }>;
    a_purchase: Array<{
        a_installment_template: {
            i_count: number;
            id_duration: number;
            i_period: number;
            k_currency: string;
            k_pay_installment_template: string;
            m_amount: string;
            s_duration: string;
        };
        a_visit_limit?: {
            s_title: string;
        };
        dl_client_prorate: string;
        f_price: string;
        f_price_early?: string;
        html_payment_period: string;
        html_description: string;
        i_limit?: number;
        i_payment_period?: number;
        i_session?: number;
        id_program_category?: number;
        id_program_type?: number;
        id_purchase_item: number;
        is_contract?: boolean;
        is_convert?: boolean;
        is_renew?: boolean;
        is_renew_check?: boolean;
        k_id: string;
        k_login_prize?: string;
        k_reward_prize?: string;
        m_prorate?: string;
        s_contract?: string;
        s_payment_duration?: string;
        s_promotion_convert?: string;
        s_title: string;
        s_value: string;
    }>;
    a_reward_prize: Array<{
        f_price: string;
        i_limit: number;
        i_score: number;
        id_purchase_item: number;
        k_id: string;
        k_reward_prize: string;
        s_value: string;
        text_title: string;
    }>;
    a_session_pass: Array<{
        i_remain: number;
        k_session_pass: string;
        id_purchase_item: number;
        s_title: string;
    }>;
    /** Indicates if the drop-in rate should be the default promotion. */
    is_single_default: boolean;
    /** The default Purchase Option key. */
    k_promotion_default: string;
}
export interface WlBookProcessPurchasePurchaseElementGroupParams {
    /** A list of purchase items. Each item is an associative array with the following keys: */
    a_purchase_item: Array<{
        i_session?: number;
        id_purchase_item: number;
        k_id: string;
        k_login_prize?: string;
        k_pay_installment_template?: string | null;
        k_reward_prize?: string;
        uid: string;
    }>;
    /** The key of the session to check for booking availability. */
    k_class_period: string;
    /** The key of the location in which the purchase is made. */
    k_location: string;
    /** The discount code. */
    text_discount_code: string;
    /** The key of the current user. */
    uid: string;
    /** Date/time of session is booking. */
    dtu_date?: string | null;
}
export interface WlBookProcessPurchasePurchaseElementGroupResponse {
    /** A list of taxes for the given purchase options. */
    a_tax: Array<string>;
    /** The total cost of the given purchase options. */
    m_cost: string;
    /** The amount of the whole discount for the given purchase options. */
    m_discount: string;
    /** The discount amount provided by a discount code for the given purchase options. */
    m_discount_code: string;
    /** The discount amount for the client type for the given purchase options. */
    m_discount_login: string;
    /** The price of the given purchase options (with or without taxes, depending on regional standards). */
    m_price: string;
    /** The amount of subtotal for the given purchase options. */
    m_subtotal: string;
    /** The amount of taxes for the given purchase options. */
    m_tax: string;
}
export interface WlBookProcessPurchasePurchase56Params {
    /** A list of existing purchase options that were selected for previous clients (group). */
    a_login_promotion_group: Array<{
        k_login_promotion: string;
        uid: string;
    }>;
    /** The list of sessions being booked. */
    a_session: Array<string>;
    /** The selected sessions on the wait list that are unpaid. */
    a_session_wait_list_unpaid: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The image height in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** A list of existing purchase options that were selected for previous clients (group). */
    json_login_promotion_group: string;
    /** The selected sessions. */
    json_session: string;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
    /** The business key. */
    k_business?: string | null;
}
export interface WlBookProcessPurchasePurchase56Response {
    a_login_prize: Array<{
        f_price: string;
        i_count: number;
        i_limit: number;
        id_purchase_item: number;
        k_id: string;
        k_login_prize: string;
        s_value: string;
        text_title: string;
    }>;
    a_login_promotion: Array<{
        a_login_promotion_info: {
            i_limit: number;
            i_limit_duration: number | null;
            i_remain: number;
            i_remain_duration: number | null;
        };
        a_uid_share: Array<string>;
        a_visit_limit: Array<string>;
        a_restrict: {
            i_limit: number;
            i_remain: number;
            text_restriction: string;
        };
        a_restrict_data: {
            i_book: number;
            i_limit: number;
            i_remain: number;
            i_use: number;
            i_visit_past: number;
            text_restriction: string;
        };
        i_limit: number;
        i_limit_duration: number | null;
        i_promotion_priority: number;
        id_program: number;
        is_convert: boolean;
        is_shared: boolean;
        k_login_promotion: string;
        s_class_include: string;
        s_description: string;
        s_duration: string;
        s_promotion_convert?: string;
        s_title: string;
        text_package_item: string;
    }>;
    a_purchase: Array<{
        a_installment_template: {
            i_count: number;
            id_duration: number;
            i_period: number;
            k_currency: string;
            k_pay_installment_template: string;
            m_amount: string;
            s_duration: string;
        };
        a_visit_limit?: {
            s_title: string;
        };
        dl_client_prorate: string;
        f_price: string;
        f_price_early?: string;
        html_payment_period: string;
        html_description: string;
        i_limit?: number;
        i_payment_period?: number;
        i_session?: number;
        id_program_category?: number;
        id_program_type?: number;
        id_purchase_item: number;
        is_contract?: boolean;
        is_convert?: boolean;
        is_renew?: boolean;
        is_renew_check?: boolean;
        k_id: string;
        k_login_prize?: string;
        k_reward_prize?: string;
        m_prorate?: string;
        s_contract?: string;
        s_payment_duration?: string;
        s_promotion_convert?: string;
        s_title: string;
        s_value: string;
    }>;
    a_reward_prize: Array<{
        f_price: string;
        i_limit: number;
        i_score: number;
        id_purchase_item: number;
        k_id: string;
        k_reward_prize: string;
        s_value: string;
        text_title: string;
    }>;
    a_session_pass: Array<{
        i_remain: number;
        k_session_pass: string;
        id_purchase_item: number;
        s_title: string;
    }>;
    /** Indicates if the drop-in rate should be the default promotion. */
    is_single_default: boolean;
    /** The default Purchase Option key. */
    k_promotion_default: string;
}
export interface WlBookProcessPurchasePurchaseElementParams {
    /** The number of sessions which are booked simultaneously. */
    i_session: number;
    /** The ID of the purchase item type. One of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemS... */
    id_purchase_item: number;
    /** The key of the session to check for booking availability. */
    k_class_period: string;
    /** The key of the purchase item in the database. */
    k_id: string;
    /** The key of the location in which the purchase is made. */
    k_location: string;
    /** The key of the user's prize. */
    k_login_prize: string;
    /** The key of the reward prize. */
    k_reward_prize: string;
    /** The discount code. */
    text_discount_code: string;
    /** The key of the current user. */
    uid: string;
    /** Date/time of session is booking. */
    dtu_date?: string | null;
    /** Installment template key. */
    k_pay_installment_template?: string | null;
}
export interface WlBookProcessPurchasePurchaseElementResponse {
    /** A list of taxes for the given purchase options. */
    a_tax: Array<string>;
    /** The total cost of the given purchase options. */
    m_cost: string;
    /** The amount of the whole discount for the given purchase options. */
    m_discount: string;
    /** The discount amount provided by a discount code for the given purchase options. */
    m_discount_code: string;
    /** The discount amount for the client type for the given purchase options. */
    m_discount_login: string;
    /** The price of the given purchase options (with or without taxes, depending on regional standards). */
    m_price: string;
    /** The amount of subtotal for the given purchase options. */
    m_subtotal: string;
    /** The amount of taxes for the given purchase options. */
    m_tax: string;
}
export interface WlBookProcessPurchasePurchaseElementListParams {
    /** A list of purchase items to get information for. Every element has the next keys: */
    a_purchase_item_request: Array<{
        i_session?: number;
        id_purchase_item: number;
        k_id: string;
        k_login_prize?: string;
    }>;
    /** The key of the business in which the purchase is made. */
    k_business: string;
    /** The discount code. */
    text_discount_code: string;
    /** The key of the user making the purchase. */
    uid: string;
    /** The key of the location in which the purchase is made. */
    k_location?: string | null;
}
export interface WlBookProcessPurchasePurchaseElementListResponse {
    a_purchase_item_result: Array<{
        a_tax: Array<string>;
        id_purchase_item: number;
        k_id: string;
        m_cost: string;
        m_discount: string;
        m_discount_login: string;
        m_price: string;
        m_tax: string;
    }>;
}
export interface WlBookProcessRelationRelationGetParams {
    /** List of check that must be skipped. */
    a_check_ignore: Array<number>;
    /** The date/time of the session to check for booking availability. */
    dtu_date: string;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** The business where `uid_from` creates the new relative. */
    k_business: string;
    /** The key of the session to check for booking availability. */
    k_class_period: string;
    /** The user who's adding the new relative. */
    uid_from: string;
}
export type WlBookProcessRelationRelationGetResponse = Record<string, unknown>;
export interface WlBookProcessRelationRelationPostParams {
    /** The business where `uid_from` creates the new relative. */
    k_business: string;
    /** The user who's adding the new relative. */
    uid_from: string;
}
export interface WlBookProcessRelationRelationPostResponse {
    /** The newly added relative. */
    uid_create: string;
}
export interface WlBookProcessResourceResourceGetParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResourceGetResponse {
    a_resource_all: Array<{
        a_client: Array<Array<boolean>>;
        a_resource_list: {
            a_class_period: Array<Array<unknown>>;
            a_image: Record<string, unknown>;
            i_index: number;
            i_quantity: number;
            i_use: number;
            is_current: boolean;
            k_city: string;
            k_resource: string;
            s_resource: string;
            text_address: string;
            text_guide: string;
            text_postal: string;
        };
        has_current: boolean;
        id_category: number;
        is_client_select: boolean;
        is_select: boolean;
        is_share: boolean;
        k_resource_layout: string;
        k_resource_type: string;
        s_resource_type: string;
    }>;
}
export interface WlBookProcessResourceResourcePostParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResourcePostResponse {
    /** The keys of a user's activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings that have been made. */
    a_visit: Array<string>;
    /** `true` - the next steps of the booking wizard are required (for example, to purchase something to... */
    is_next: boolean;
}
export interface WlBookProcessResourceResource54GetParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Selected sessions. */
    json_session: string;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResource54GetResponse {
    a_resource_all: Array<{
        a_client: Array<Array<boolean>>;
        a_resource_list: {
            a_class_period: Array<Array<unknown>>;
            a_image: Record<string, unknown>;
            i_index: number;
            i_quantity: number;
            i_use: number;
            is_current: boolean;
            k_city: string;
            k_resource: string;
            s_resource: string;
            text_address: string;
            text_guide: string;
            text_postal: string;
        };
        has_current: boolean;
        id_category: number;
        is_client_select: boolean;
        is_select: boolean;
        is_share: boolean;
        k_resource_layout: string;
        k_resource_type: string;
        s_resource_type: string;
    }>;
}
export interface WlBookProcessResourceResource54PostParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Selected sessions. */
    json_session: string;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResource54PostResponse {
    /** The keys of a user's activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings that have been made. */
    a_visit: Array<string>;
    /** `true` - the next steps of the booking wizard are required (for example, to purchase something to... */
    is_next: boolean;
}
export interface WlBookProcessPaymentPaymentParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessPaymentPaymentResponse {
    /** Keys of the user's activity which correspond to bookings made. */
    a_login_activity_book: Array<string>;
    /** The keys of bookings made. */
    a_visit: Array<string>;
    /** The keys of the user's activity corresponding to the purchase made. This won't be empty when the ... */
    k_login_activity_purchase: string;
}
export interface WlBookProcessStoreStoreParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessStoreStoreResponse {
    /** The keys for the user's activities. This will be populated upon completion of the booking process. */
    a_login_activity: Array<string>;
    /** The keys of the bookings that have been made. */
    a_visit: Array<string>;
    /** If `true`, the next steps of the booking wizard are required to purchase an item or book the sele... */
    is_next: boolean;
}
export interface WlBookProcessStoreStoreGroupParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
}
export interface WlBookProcessStoreStoreGroupResponse {
    a_purchase_item_distribute: Array<{
        a_owner: Array<string>;
        i_session: number;
        k_login_promotion: string | null;
        k_session_pass: string | null;
        s_value: string | null;
        text_error: string;
        text_error_code: string;
    }>;
}
export interface WlBookProcessInfoInfoGetParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` if class capacity should be shown, */
    show_class_capacity: boolean;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfoGetResponse {
    /** Week days available for recurring booking. Constants of [ADateWeekSid](#/components/schemas/ADate... */
    a_day_available: Array<number> | null;
    a_session_all: Array<{
        a_staff: Array<string>;
        a_virtual_location: Array<string>;
        dt_date: string;
        i_active: number;
        i_active_limit: number;
        i_duration: number;
        i_wait: number;
        i_wait_limit: number | null;
        is_select: boolean;
        is_wait: boolean;
        is_wait_list_unpaid: boolean;
        k_class_period: string;
        k_location: string;
        m_price: string;
        s_location: string;
        s_start: string;
        text_duration: string;
    }>;
    a_session_free: Array<{
        dt_date: string;
        k_class_period: string;
    }>;
    a_staff: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            s_url: string;
        };
        s_family: string;
        s_staff: string;
        uid_staff: string;
        uid: string;
    }>;
    /** Date when this class session occurrences stop. */
    dl_end: string;
    /** The date/time of the session the user is booking in MySQL format in the location's timezone. */
    dt_date_local: string;
    /** `true` if price for the individual session should be hidden, if client has applicable pricing opt... */
    hide_price: boolean;
    /** The text of the contract to which the user must agree before book this session. */
    html_contract: string;
    /** Class duration in human-readable format. */
    html_duration: string;
    /** The special instructions for the class. */
    html_special: string;
    /** Special instructions preview for class. */
    html_special_preview: string;
    /** Number of available spots. */
    i_available: number | null;
    /** Number of booked spots. */
    i_book: number | null;
    /** The duration of the session in minutes. */
    i_duration: number;
    /** Total number of clients on the wait list. */
    i_wait: number;
    /** Total capacity the wait list. */
    i_wait_limit: number | null;
    /** Estimated place of reservation on the waiting list. */
    i_wait_spot: number;
    /** `true` if recurring booking is available, `false` otherwise. */
    is_book_repeat_client: boolean;
    /** `true` if the setting for frequency during class recurring booking will be `never end` by default... */
    is_book_repeat_no_end_date: boolean;
    /** Can client chooses several session per booking. */
    is_event_session: boolean;
    /** `true` if need to display location phone number, `false` otherwise. */
    is_location_phone: boolean;
    /** `true` if event can be paid with pricing option only. */
    is_promotion_only: boolean;
    /** Whether the class can be paid with single session. */
    is_single_buy: boolean;
    /** Whether the full text of the special instructions fits within the preview length or not. */
    is_special_preview: boolean;
    /** `true` if class is virtual, `false` otherwise. */
    is_virtual: boolean;
    /** Class period location key. */
    k_location: string;
    /** Price of the session. */
    m_price: string;
    /** Whole event cost. */
    m_price_total: string;
    /** Event price at an early discount. */
    m_price_total_early: string;
    /** The class title. */
    s_class: string;
    /** The location address. */
    s_location_address: string;
    /** The location title. */
    s_location_title: string;
    /** The time when the session takes place in the location's time zone. In format `hh:mm`. */
    s_time: string;
    /** Location phone number. */
    text_location_phone: string;
    /** Room where session takes place. */
    text_room: string;
    /** Text representation of the list of staffs. */
    text_staff: string;
    /** Timezone abbreviation. */
    text_timezone: string;
}
export interface WlBookProcessInfoInfoPostParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfoPostResponse {
    /** The keys of users' activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings made. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        is_free: boolean;
        k_login_promotion: string;
        k_promotion: string;
        k_session_pass: string;
        text_promotion: string;
    }>;
    /** If client must authorize credit card. */
    is_card_authorize: boolean;
    /** Can the class/event be booked immediately or not. */
    is_force_book: boolean;
    /** `true` - next steps of the wizard are needed (for example, to purchase something to book the sele... */
    is_next: boolean;
}
export interface WlBookProcessInfoInfo54GetParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` if class capacity should be shown, */
    show_class_capacity: boolean;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfo54GetResponse {
    /** Week days available for recurring booking. Constants of [ADateWeekSid](#/components/schemas/ADate... */
    a_day_available: Array<number> | null;
    a_session_all: Array<{
        a_staff: Array<string>;
        a_virtual_location: Array<string>;
        dt_date: string;
        i_active: number;
        i_active_limit: number;
        i_duration: number;
        i_wait: number;
        i_wait_limit: number | null;
        is_select: boolean;
        is_wait: boolean;
        is_wait_list_unpaid: boolean;
        k_class_period: string;
        k_location: string;
        m_price: string;
        s_location: string;
        s_start: string;
        text_duration: string;
    }>;
    a_session_free: Array<{
        dt_date: string;
        k_class_period: string;
    }>;
    a_staff: Array<{
        a_logo: {
            i_height: number;
            i_width: number;
            s_url: string;
        };
        s_family: string;
        s_staff: string;
        uid_staff: string;
        uid: string;
    }>;
    /** Date when this class session occurrences stop. */
    dl_end: string;
    /** The date/time of the session the user is booking in MySQL format in the location's timezone. */
    dt_date_local: string;
    /** `true` if price for the individual session should be hidden, if client has applicable pricing opt... */
    hide_price: boolean;
    /** The text of the contract to which the user must agree before book this session. */
    html_contract: string;
    /** Class duration in human-readable format. */
    html_duration: string;
    /** The special instructions for the class. */
    html_special: string;
    /** Special instructions preview for class. */
    html_special_preview: string;
    /** Number of available spots. */
    i_available: number | null;
    /** Number of booked spots. */
    i_book: number | null;
    /** The duration of the session in minutes. */
    i_duration: number;
    /** Total number of clients on the wait list. */
    i_wait: number;
    /** Total capacity the wait list. */
    i_wait_limit: number | null;
    /** Estimated place of reservation on the waiting list. */
    i_wait_spot: number;
    /** `true` if recurring booking is available, `false` otherwise. */
    is_book_repeat_client: boolean;
    /** `true` if the setting for frequency during class recurring booking will be `never end` by default... */
    is_book_repeat_no_end_date: boolean;
    /** Can client chooses several session per booking. */
    is_event_session: boolean;
    /** `true` if need to display location phone number, `false` otherwise. */
    is_location_phone: boolean;
    /** `true` if event can be paid with pricing option only. */
    is_promotion_only: boolean;
    /** Whether the class can be paid with single session. */
    is_single_buy: boolean;
    /** Whether the full text of the special instructions fits within the preview length or not. */
    is_special_preview: boolean;
    /** `true` if class is virtual, `false` otherwise. */
    is_virtual: boolean;
    /** Class period location key. */
    k_location: string;
    /** Price of the session. */
    m_price: string;
    /** Whole event cost. */
    m_price_total: string;
    /** Event price at an early discount. */
    m_price_total_early: string;
    /** The class title. */
    s_class: string;
    /** The location address. */
    s_location_address: string;
    /** The location title. */
    s_location_title: string;
    /** The time when the session takes place in the location's time zone. In format `hh:mm`. */
    s_time: string;
    /** Location phone number. */
    text_location_phone: string;
    /** Room where session takes place. */
    text_room: string;
    /** Text representation of the list of staffs. */
    text_staff: string;
    /** Timezone abbreviation. */
    text_timezone: string;
}
export interface WlBookProcessInfoInfo54PostParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfo54PostResponse {
    /** The keys of users' activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings made. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        is_free: boolean;
        k_login_promotion: string;
        k_promotion: string;
        k_session_pass: string;
        text_promotion: string;
    }>;
    /** If client must authorize credit card. */
    is_card_authorize: boolean;
    /** Can the class/event be booked immediately or not. */
    is_force_book: boolean;
    /** `true` - next steps of the wizard are needed (for example, to purchase something to book the sele... */
    is_next: boolean;
}
export interface WlBookProcessInfoInfoCanCompleteGetParams {
    /** A list of sessions of an event that can be booked together. */
    a_session_select: Array<{
        dt_date: string;
        is_select: boolean;
        k_class_period: string;
    }>;
    /** The date and time of the session that the user is booking, returned in MySQL format and in GMT. */
    dt_date_gmt: string;
    /** The class period ID that the user started to book. */
    k_class_period: string;
    /** The unique booking process key. */
    s_id: string;
    /** The key of a user who is making the booking. */
    uid: string;
    /** Key of the business in which the booking is performed. */
    k_business?: string | null;
}
export interface WlBookProcessInfoInfoCanCompleteGetResponse {
    /** Determines whether users can complete the booking process from the info step. */
    can_complete: boolean;
    /** `true` if price for the individual session should be hidden, if client has applicable pricing opt... */
    hide_price: boolean;
}
export interface WlBookProcessInfoInfoCanCompletePostParams {
    /** The date and time of the session that the user is booking, returned in MySQL format and in GMT. */
    dt_date_gmt: string;
    /** The class period ID that the user started to book. */
    k_class_period: string;
    /** The unique booking process key. */
    s_id: string;
    /** The key of a user who is making the booking. */
    uid: string;
    /** Key of the business in which the booking is performed. */
    k_business?: string | null;
}
export interface WlBookProcessInfoInfoCanCompletePostResponse {
    /** Determines whether users can complete the booking process from the info step. */
    can_complete: boolean;
}
export interface WlBookProcessQuizQuizGetParams {
    /** The list of purchase items. Each element has the format `[id_purchase_item]::[k_id]`, where: */
    a_purchase_item: Array<{
        id_purchase_item: number;
        k_id: string;
    }>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessQuizQuizGetResponse {
    a_quiz: Array<{
        is_require: boolean;
        k_quiz: string;
    }>;
}
export interface WlBookProcessQuizQuizPostParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessQuizQuizPostResponse {
    /** The user's activity keys. */
    a_login_activity: Array<string>;
    /** The keys the bookings that have been made. */
    a_visit: Array<string>;
    /** If `true`, the next steps of the booking wizard are required for the purchase or booking. Otherwi... */
    is_next: boolean;
}
export interface WlBookProcessFrequencyRepeatParams {
    /** List of days of the week to create visits. Each value is a [ADateWeekSid](#/components/schemas/AD... */
    a_day: Array<number>;
    /** List of visits to be ignored. Each value is a string consisting of a class period key */
    a_visit_ignore: Array<string>;
    /** Date and time of the class, when recurring booking was called, in UTC timezone. */
    dt_date: string;
    /** Date to start recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#/... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#... */
    dt_to: string;
    /** Count of the visits to be created. Not empty only when `id_repeat_end` == [RsRepeatEndSid::COUNT]... */
    i_count: number;
    /** Count of days\weeks\months between recurring bookings. */
    i_duration: number;
    /** Recurring booking interval, one of [ADurationSid](#/components/schemas/ADurationSid) constants. */
    id_duration: number;
    /** WellnessLiving mode, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Type of repeating, one of [RsRepeatEndSid](#/components/schemas/RsRepeatEndSid) constants. */
    id_repeat_end: number;
    /** `true` when cancelling booking, `false` otherwise. */
    is_cancel: boolean;
    /** `true` if current user is not created yet, `false` otherwise. */
    is_new_user: boolean;
    /** Business key. */
    k_business: string;
    /** Class period key. */
    k_class_period: string;
    /** Encoded list of user keys, who will attend visits. */
    s_uid: string;
    /** Key of user, who will attend visits. */
    uid: string;
    /** Key of user, who perform booking. */
    uid_actor: string;
}
export interface WlBookProcessFrequencyRepeatResponse {
    a_visit: Array<{
        dt_date: string;
        dt_local: string;
        html_short_name_list: string;
        html_timezone: string;
        i_spot: number;
        is_disable: boolean;
        is_free: boolean;
        is_ignore: boolean;
        is_selected_series: boolean;
        is_wait: boolean;
        k_class_period: string;
        s_alert: string;
        s_date: string;
    }>;
    /** Date to start recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#/... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#... */
    dt_to: string;
    /** Possible ways to stop repeatable events. */
    i_count: number;
    /** Start date of repeatable period in human-readable format. */
    text_date_from: string;
    /** End date of repeatable period in human-readable format. */
    text_date_to: string;
}
export interface WlBookProcessFrequencyRepeatParallelParams {
    /** List of days of the week to create visits. Each value is a [ADateWeekSid](#/components/schemas/AD... */
    a_day: Array<number>;
    /** List of visits to be ignored. Each value is a string consisting of a class period key */
    a_visit_ignore: Array<string>;
    /** Date and time of the class, when recurring booking was called, in UTC timezone. */
    dt_date: string;
    /** Date to start recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repea... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repe... */
    dt_to: string;
    /** Count of the visits to be created. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Rep... */
    i_count: number;
    /** Count of days\weeks\months between recurring bookings. */
    i_duration: number;
    /** Recurring booking interval, one of [ADurationSid](#/components/schemas/ADurationSid) constants. */
    id_duration: number;
    /** WellnessLiving mode, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Type of repeating, one of [RsRepeatEndSid](#/components/schemas/RsRepeatEndSid) constants. */
    id_repeat_end: number;
    /** `true` when cancelling booking, `false` otherwise. */
    is_cancel: boolean;
    /** `true` to also include sessions running in parallel at the same time and location */
    is_include_parallel: boolean;
    /** `true` if current user is not created yet, `false` otherwise. */
    is_new_user: boolean;
    /** Business key. */
    k_business: string;
    /** Class period key. */
    k_class_period: string;
    /** Encoded list of user keys, who will attend visits. */
    s_uid: string;
    /** Key of user, who will attend visits. */
    uid: string;
    /** Key of user, who perform booking. */
    uid_actor: string;
}
export interface WlBookProcessFrequencyRepeatParallelResponse {
    a_visit: Array<{
        dt_date: string;
        dt_local: string;
        html_short_name_list: string;
        html_timezone: string;
        i_spot: number;
        is_disable: boolean;
        is_free: boolean;
        is_ignore: boolean;
        is_selected_series: boolean;
        is_wait: boolean;
        k_class_period: string;
        s_alert: string;
        s_date: string;
    }>;
    /** Date to start recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repea... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repe... */
    dt_to: string;
    /** Possible ways to stop repeatable events. */
    i_count: number;
    /** Start date of repeatable period in human-readable format. */
    text_date_from: string;
    /** End date of repeatable period in human-readable format. */
    text_date_to: string;
}
export interface WlBookProcessGuestGuestProfileGetParams {
    /** Guest's birthday in MySQL format. Empty if service not restricted by age. */
    dl_birthday: string;
    /** Type of the service to book. */
    id_service: number;
    /** Business key. */
    k_business: string;
    /** Key of service to book. */
    k_id: string;
    /** Location key. */
    k_location: string;
    /** Guest's first name. */
    text_first_name: string;
    /** Guest's last name. */
    text_last_name: string;
    /** Guest's email. */
    text_mail: string;
}
export interface WlBookProcessGuestGuestProfileGetResponse {
    /** UID of found or created user. */
    uid: string;
}
export interface WlBookProcessGuestGuestProfilePostParams {
    /** Guest's birthday in MySQL format. Empty if service not restricted by age. */
    dl_birthday: string;
    /** Type of the service to book. */
    id_service: number;
    /** Business key. */
    k_business: string;
    /** Key of service to book. */
    k_id: string;
    /** Guest's first name. */
    text_first_name: string;
    /** Guest's last name. */
    text_last_name: string;
    /** Guest's email. */
    text_mail: string;
}
export interface WlBookProcessGuestGuestProfilePostResponse {
    /** UID of found or created user. */
    uid: string;
}
export interface WlProfileEditEmailEditEmail67GetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key where the check must be performed. */
    k_business: string;
    /** The email address to be checked. */
    text_mail: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmail67GetResponse {
    /** List of business keys where a user is already a member. */
    a_business_member_key: Array<string>;
    a_user: Array<{
        text_firstname: string;
        text_lastname: string;
        text_phone: string;
        url_photo: string;
    }>;
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
    /** If `true`, user is already a member of current business, `false` - otherwise. */
    is_current_member: boolean;
    /** If `true`, then the number of requests has exceeded the rate limit. Otherwise, this will be `false`. */
    is_limit: boolean;
    /** If `true`, user, who has the specified email, has password set, `false` - otherwise. */
    is_password_set: boolean;
    /** If `true`, user, who has the specified email, is staff in current business, `false` - otherwise. */
    is_staff: boolean;
    /** If `true`, user, who has the specified email, is staff in any business, `false` - otherwise. */
    is_staff_any_business: boolean;
    /** If `true`, then the specified email is in use. Otherwise, this will be `false`. */
    is_use: boolean;
    /** The key of user who has the specified email. */
    uid_result: string;
}
export interface WlProfileEditEmailEditEmail67PostParams {
    /** The business key where the check must be performed. */
    k_business: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmail67PostResponse {
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
}
export interface WlProfileEditEmailEditEmailGetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key where the check must be performed. */
    k_business: string;
    /** The email address to be checked. */
    text_mail: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmailGetResponse {
    /** List of business keys where a user is already a member. */
    a_business_member_key: Array<string>;
    a_user: Array<{
        text_firstname: string;
        text_lastname: string;
        text_phone: string;
        url_photo: string;
    }>;
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
    /** If `true`, user is already a member of current business, `false` - otherwise. */
    is_current_member: boolean;
    /** If `true`, then the number of requests has exceeded the rate limit. Otherwise, this will be `false`. */
    is_limit: boolean;
    /** If `true`, user, who has the specified email, has password set, `false` - otherwise. */
    is_password_set: boolean;
    /** If `true`, user, who has the specified email, is staff in current business, `false` - otherwise. */
    is_staff: boolean;
    /** If `true`, user, who has the specified email, is staff in any business, `false` - otherwise. */
    is_staff_any_business: boolean;
    /** If `true`, then the specified email is in use. Otherwise, this will be `false`. */
    is_use: boolean;
    /** The key of user who has the specified email. */
    uid_result: string;
}
export interface WlProfileEditEmailEditEmailPostParams {
    /** The business key where the check must be performed. */
    k_business: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmailPostResponse {
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
}
export interface WlProfileFormResponseResponseListParams {
    /** Defines whether completed forms should not be included in result list of forms. */
    hide_completed: boolean;
    /** Defines whether optional uncompleted forms should not be included in result list of forms. */
    hide_optional: boolean;
    /** This will be `true` if the API is being used from the backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileFormResponseResponseListResponse {
    a_quiz_login: Array<{
        a_visit: Array<string>;
        dtl_date: string;
        id_source: number;
        is_private: boolean;
        k_quiz: string;
        k_quiz_login: string;
        k_quiz_response: string | null;
        text_title: string;
    }>;
    a_quiz_response: Array<{
        a_visit: Array<string>;
        dtl_date: string;
        id_source: number;
        id_status: number;
        is_private: boolean;
        k_quiz: string;
        k_quiz_login: string;
        text_amend_date: string | null;
        text_amend_user: string | null;
        text_title: string;
        text_user: string;
    }>;
    /** Whether response can be amended by current user. */
    can_amend: boolean;
    /** Whether response can be filled by current user. */
    can_fill: boolean;
    /** Whether response can be removed by current user. */
    can_remove: boolean;
    /** Whether response can be viewed by current user. */
    can_view: boolean;
}
export interface WlEventBookEventViewElementParams {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** Staff image height in pixels. Please specify this value if you need image to be returned in speci... */
    i_staff_image_height: number;
    /** Staff image width in pixels. Please specify this value if you need image to be returned in specif... */
    i_staff_image_width: number;
    /** `true` if schedule should be grouped by location time and staff, */
    is_schedule_group: boolean;
    /** The event key. */
    k_event: string;
    /** A list of event keys serialized with JSON. */
    s_event: string;
    /** `true` to show schedule, which is not published yet. */
    show_unpublished: boolean;
    /** The user key. */
    uid: string;
    /** The last available date for booking. */
    dl_book_available_end?: string | null;
    /** The first available date for booking. */
    dl_book_available_start?: string | null;
    /** Datetime of the session. */
    dtu_session?: string | null;
    /** Key of a business to which the requested event(s) belong. */
    k_business?: string | null;
    /** Key of a class period to show information for. */
    k_class_period?: string | null;
}
export interface WlEventBookEventViewElementResponse {
    a_age_restrictions: Array<{
        i_age_from: number | null;
        i_age_to: number | null;
        is_age_public: boolean;
    }>;
    a_book_available: Array<{
        dt_date: string;
        k_class_period: string;
    }>;
    a_business_policy: Array<{
        a_payment_reattempt_not_decline_reason: Array<number>;
        a_wait_service: number;
        i_book_before: number;
        i_book_future: number;
        i_cancel: number;
        i_promote: number;
        i_promote_fastest_response: number;
        i_promote_require_confirm: number;
        i_reattempt_count: number;
        id_book_before: number;
        id_book_future: number;
        id_cancel: number;
        id_promote: number;
        id_promote_fastest_response: number;
        id_promote_require_confirm: number;
        is_book_inside_active_pay_period: boolean;
        is_disable_promotion: number;
        is_enable_payment_penalty: boolean;
        is_enable_payment_reattempt: boolean;
        is_enable_staff_ip_restriction: boolean;
        is_prevent_booking: number;
        is_staff_restrict: boolean;
        is_wait: boolean;
        k_currency: string;
        k_timezone: string;
        m_payment_penalty: string;
        url_custom: string;
    }>;
    a_class_logo: Array<{
        i_height?: number;
        i_width?: number;
        id_gender?: number;
        url_logo?: string;
    }>;
    /** The list of keys from class tab. */
    a_class_tab: Array<string>;
    a_event: Array<{
        a_book_available: {
            dt_date: string;
            k_class_period: string;
        };
        a_class_logo: {
            i_height?: number;
            i_width?: number;
            id_gender?: number;
            url_logo?: string;
        };
        a_class_tab: Array<string>;
        a_installment_template: {
            i_count: number;
            id_duration: number;
            i_period: number;
            k_currency: string;
            k_pay_installment_template: string;
            m_amount: string;
            s_duration: string;
        };
        a_schedule: {
            a_day: Array<boolean>;
            a_repeat: Record<string, unknown>;
            a_staff: Record<string, unknown>;
            a_virtual_location: Array<string>;
            dt_end: string;
            dt_start: string;
            hide_location: boolean;
            i_capacity: number;
            i_duration: number;
            is_virtual: boolean;
            f_price: string;
            k_class_period: string;
            k_location: string;
            s_location: string;
            s_time: string;
            s_timezone: string;
            text_room: string;
        };
        a_shop_category: Array<string>;
        a_staff_logo: {
            i_height: number;
            i_width: number;
            uid: string;
            url_logo: string;
        };
        dt_book_date: string;
        dt_early: string;
        dt_end: string;
        dt_start: string;
        html_end: string;
        html_start: string;
        hide_application: boolean;
        html_special: string;
        i_session: number;
        i_session_remain: number;
        is_availability_checked: boolean;
        is_book: boolean;
        is_full: boolean;
        is_makeup: boolean;
        is_past: boolean;
        is_policy_custom: boolean;
        is_virtual: boolean;
        k_book_class_period: string;
        m_price: string;
        m_price_total: string;
        m_price_total_early: string;
        s_deny_reason: string;
        s_title: string;
        xml_description: string;
    }>;
    a_installment_template: Array<{
        i_count: number;
        id_duration: number;
        i_period: number;
        k_currency: string;
        k_pay_installment_template: string;
        m_amount: string;
        s_duration: string;
    }>;
    a_schedule: Array<{
        a_day: Array<boolean>;
        a_repeat: {
            i_repeat: number;
            id_repeat: number;
        };
        a_staff: {
            k_staff: string;
            s_name: string;
            s_surname: string;
            uid_staff: string;
        };
        a_virtual_location: Array<string>;
        dt_end: string;
        dt_start: string;
        hide_location: boolean;
        i_capacity: number;
        i_duration: number;
        is_virtual: boolean;
        f_price: string;
        k_class_period: string;
        k_location: string;
        s_location: string;
        s_time: string;
        s_timezone: string;
        text_room: string;
    }>;
    /** IDs of online store category. */
    a_shop_category: Array<string>;
    a_staff_logo: Array<{
        i_height: number;
        i_width: number;
        uid: string;
        url_logo: string;
    }>;
    a_timezone_info: Array<{
        i_shift: number;
        s_file: string;
        text_abbr: string | null;
    }>;
    a_visits_required: Array<{
        i_count: number;
        i_has: number;
        is_event: boolean;
        k_class: string;
        text_title: string;
    }>;
    /** That date that should be used to go to the booking wizard. */
    dt_book_date: string | null;
    /** The early registration date of the event. */
    dt_early: string | null;
    /** The end date of the event. */
    dt_end: string;
    /** The start date of the event. */
    dt_start: string;
    /** Whether event will be hidden in the White Label mobile application. */
    hide_application: boolean;
    /** The description of the event. */
    html_description: string | null;
    /** Special instruction for the event. */
    html_special: string;
    /** Class capacity. */
    i_capacity: number | null;
    /** The session count. */
    i_session: number;
    /** The remaining session count. */
    i_session_remain: number;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require_option: number;
    /** List of possible value of virtual integrations. */
    id_virtual_provider: number | null;
    /** Whether the event is age restricted. */
    is_age_restrict: boolean;
    /** `true` if the event availability was checked; `false` if the event has too many sessions, and cal... */
    is_availability_checked: boolean;
    /** `true` if the event is already booked; `false` if the event isn't booked. */
    is_book: boolean;
    /** `true` If the event is bookable; `false` if the event isn't bookable. */
    is_bookable: boolean;
    /** `true` if there are no free spots in the event; booking is available only into the wait list. */
    is_full: boolean;
    /** `true` if the selected session can be a make up session. */
    is_makeup: boolean;
    /** `true` if the selected session has already started and do not available to book. */
    is_past: boolean;
    /** `true` if the `a_business_policy` contains the custom policies from the event. */
    is_policy_custom: boolean;
    /** `true` if the event can be paid with a Purchase Option only. */
    is_promotion_only: boolean;
    /** `true` if clients, when they book event, which has been started, can pay only for the sessions in... */
    is_prorate: boolean;
    /** Determines whether this event allows paying for a single session. */
    is_single_session_buy: boolean;
    /** `true` if event is virtual; `false` otherwise. */
    is_virtual: boolean;
    /** The ID of the session which should be used to go to the booking wizard. */
    k_book_class_period: string;
    /** The price of a single session of the event. */
    m_price: string;
    /** The price of the all sessions of the event. */
    m_price_total: string;
    /** Price of the full event should be used as full price while `dt_early` is actual. */
    m_price_total_early: string | null;
    /** The reason why the event can't be booked. */
    s_deny_reason: string;
    /** The title of the event. */
    s_title: string | null;
    /** `true` if special instructions can be public, */
    show_special_instructions: boolean;
    /** End date of the event in user-friendly format. */
    text_end: string;
    /** Start date of the event in user-friendly format. */
    text_start: string;
    /** Link to the start of the booking wizard to book the closed session from this event or the entire ... */
    url_book: string | null;
    /** The description of the event. */
    xml_description: string | null;
}
export interface WlEventBookEventListListParams {
    /** Defines how the event availability flag filter should be applied. */
    id_status: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the category tab. */
    k_class_tab: string;
    /** The user's key. */
    uid: string;
}
export interface WlEventBookEventListListResponse {
    /** A list of event identifiers. */
    a_event: Array<string>;
    /** Event availability map. */
    a_event_available: Array<boolean>;
    /** `true` if exist at least one virtual event */
    is_virtual_service: boolean;
}
export interface WlClassesPeriodModifyModifyGetParams {
    /** The end date, returned in MySQL format and the local time. */
    dt_end: string;
    /** The start date, returned in MySQL format and the local time. */
    dt_start: string;
    /** The class modify step type. One of the [RsClassModifyActionSid](#/components/schemas/RsClassModif... */
    id_class_modify_action: number;
    /** The modify mode type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModifyModeSid... */
    id_class_modify_mode: number;
    /** The class modify action type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModif... */
    id_step: number;
    /** The business key. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The unique hash string. */
    s_id: string;
    /** The step direction. */
    is_back?: boolean | null;
}
export interface WlClassesPeriodModifyModifyGetResponse {
    /** Step information, depending on the steps. */
    a_get: Array<unknown>;
}
export interface WlClassesPeriodModifyModifyPostParams {
    /** The end date, returned in MySQL format and the local time. */
    dt_end: string;
    /** The start date, returned in MySQL format and the local time. */
    dt_start: string;
    /** The class modify step type. One of the [RsClassModifyActionSid](#/components/schemas/RsClassModif... */
    id_class_modify_action: number;
    /** The modify mode type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModifyModeSid... */
    id_class_modify_mode: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** The class modify action type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModif... */
    id_step: number;
    /** The business key. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The unique hash string. */
    s_id: string;
    /** The step direction. */
    is_back?: boolean | null;
}
export interface WlClassesPeriodModifyModifyPostResponse {
    /** The list of possible modify mode for class modify wizard. */
    id_step: number;
    /** The step direction. */
    is_back: boolean | null;
    /** The class ID. */
    k_class: string | null;
    /** The unique hash string. */
    s_id: string;
}
export interface WlBusinessAccountSubscriptionSubscriptionInfoParams {
    /** CID of the subscription information of which is requested. */
    cid_subscription: number;
    /** Business key for which subscription information is requested. */
    k_business: string;
}
export interface WlBusinessAccountSubscriptionSubscriptionInfoResponse {
    /** A list of locales. */
    id_locale: number | null;
    id_plan: number;
    /** Whether subscription is active. */
    is_active: boolean;
}
export interface WlBusinessAuthorizeSupportResponseResponseParams {
    /** Determines whether the user will be granted access or if access will be revoked. */
    is_grant: boolean;
    /** The key of the location to access. */
    k_location: string;
    /** The key of the user who will be granted access. */
    uid: string;
}
export type WlBusinessAuthorizeSupportResponseResponseResponse = Record<string, unknown>;
export interface WlBusinessFranchiseLocationBusinessFranchiseLocationParams {
    /** Determines which locations should be returned. */
    id_business_franchise_location: number;
    /** Determines whether to include churned/removed locations. */
    is_include_churn: boolean;
    /** Determines whether to include locations marked to not be displayed on franchisor website. */
    is_include_non_api: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlBusinessFranchiseLocationBusinessFranchiseLocationResponse {
    a_city_list: Array<{
        k_city: string;
        k_country: string;
        k_state: string;
        text_title: string;
    }>;
    a_country_list: Array<{
        k_country: string;
        text_title: string;
    }>;
    a_location_list: Array<{
        id_currency: number;
        k_city: string;
        k_country: string;
        k_location: string;
        k_region: string;
        k_state: string;
        text_title: string;
    }>;
    a_region_list: Array<{
        k_region: string;
        text_title: string;
    }>;
    a_state_list: Array<{
        k_country: string;
        k_state: string;
        text_title: string;
    }>;
}
export interface WlBusinessRewardConfigRewardConfigGetParams {
    /** Business key. */
    k_business: string;
}
export interface WlBusinessRewardConfigRewardConfigGetResponse {
    /** `true` Reward program is disabled, `false` - otherwise. */
    is_disabled_reward_program: boolean;
}
export interface WlBusinessRewardConfigRewardConfigPostParams {
    /** Business key. */
    k_business: string;
}
export type WlBusinessRewardConfigRewardConfigPostResponse = Record<string, unknown>;
export interface WlBusinessUserSubscribeSubscribeGetParams {
    /** The business key used for users to subscribe, unsubscribe, and receive information about the stat... */
    k_business: string;
    /** The key of the user whose subscription status needs to be checked or switched to subscribed/unsub... */
    uid: string;
}
export interface WlBusinessUserSubscribeSubscribeGetResponse {
    /** Information about the user`s subscription. */
    is_subscribe: boolean | null;
    /** Information about the user`s subscription. */
    is_subscribe_sms: boolean | null;
}
export interface WlBusinessUserSubscribeSubscribePutParams {
    /** The business key used for users to subscribe, unsubscribe, and receive information about the stat... */
    k_business: string;
    /** The key of the user whose subscription status needs to be checked or switched to subscribed/unsub... */
    uid: string;
    /** Information about the user`s subscription. */
    is_subscribe?: boolean | null;
    /** Information about the user`s subscription. */
    is_subscribe_sms?: boolean | null;
}
export type WlBusinessUserSubscribeSubscribePutResponse = Record<string, unknown>;
export interface WlLoginPromotionConvertConvertDeleteParams {
    /** The business key. */
    k_business: string;
    /** The login promotion key. */
    k_login_promotion: string;
}
export type WlLoginPromotionConvertConvertDeleteResponse = Record<string, unknown>;
export interface WlLoginPromotionConvertConvertGetParams {
    /** The business key. */
    k_business: string;
    /** The login promotion key. */
    k_login_promotion: string;
}
export interface WlLoginPromotionConvertConvertGetResponse {
    a_promotion: Array<{
        k_promotion: string;
        text_title: string;
        id_program: number;
        is_select: boolean;
    }>;
    /** The last date on what conversion can be scheduled. */
    dl_convert_max: string;
    /** The first date on what conversion can be scheduled. */
    dl_convert_min: string;
    /** Local date, when hold ends, if PO is on hold right now. */
    dl_hold_end: string;
    /** Local date, when hold starts, if PO is on hold right now. */
    dl_hold_start: string;
    /** List of options to convert promotion. */
    id_convert: number;
    /** Different types of conversion behavior: when and how it should be converted. */
    id_convert_when: number | null;
    /** Determines whether the conversion request is new or editing an existing conversion. */
    is_edit: boolean;
    /** `true` if PO is going to be renewed and not converted. */
    is_renew: boolean;
    /** The existing conversion date, returned as a string for the datepicker. */
    s_date_convert: string;
    /** The current date, returned as a string. */
    s_date_now: string;
    /** The Purchase Option title. */
    s_title: string;
    /** Expiration date in string user-friendly format. */
    text_date_expire: string;
    /** Next payment date in string user-friendly format. */
    text_date_payment: string;
    /** The note for the promotion conversion. */
    text_note: string | null;
}
export interface WlLoginPromotionConvertConvertPostParams {
    /** The conversion date, in the local time zone. */
    dl_convert: string;
    /** The conversion ID. One of the [PromotionConvertSid](#/components/schemas/Wl.Promotion.Convert.Pro... */
    id_convert: number;
    /** The business key. */
    k_business: string;
    /** The login promotion key. */
    k_login_promotion: string;
    /** The promotion key the given promotion will be converted to. */
    k_promotion_to: string;
    /** When conversion should be done. One of the [ConvertWhenSid](#/components/schemas/Wl.Login.Promoti... */
    id_convert_when?: number | null;
    /** The note for the promotion conversion. */
    text_note?: string | null;
}
export type WlLoginPromotionConvertConvertPostResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassGuestPassListParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
    /** Class key to filter guest passes by. */
    k_class?: string | null;
    /** Location key to filter guest passes by. */
    k_location?: string | null;
}
export interface WlLoginPromotionGuestPassGuestPassListResponse {
    a_list: Array<{
        a_image: {
            i_height: number;
            i_width: number;
            'url-thumbnail': string;
        };
        a_period_dl: {
            dl_end: string;
            dl_start: string;
        } | null;
        a_settings: {
            i_claim_day: number;
            i_limit: number;
            i_limit_duration: number;
            id_limit_duration: number;
            is_checkin: boolean;
            is_limit: boolean;
        };
        can_invite: boolean;
        can_send: boolean;
        dl_reset: string | null;
        has_service: boolean;
        i_cap_day: number | null;
        i_limit: number | null;
        i_period: number | null;
        i_remain: number | null;
        i_remain_day: number | null;
        i_use: number;
        id_period: number;
        id_program_guest: number;
        id_reset_type_guest: number;
        is_expire_note: boolean;
        is_reset: boolean;
        k_business: string;
        k_login_promotion: string;
        k_promotion: string;
        text_location: string;
        text_owner: string;
        text_period: string;
        text_period_date: string;
        text_promotion_grant: string;
        text_promotion_guest: string;
        uid_owner: string;
    }>;
}
export interface WlLoginPromotionGuestPassGuestPassGetParams {
    /** Business key. */
    k_business: string;
    /** Login promotion key. */
    k_login_promotion: string;
}
export interface WlLoginPromotionGuestPassGuestPassGetResponse {
    a_guest_pass: Array<{
        a_image: {
            i_height: number;
            i_width: number;
            'url-thumbnail': string;
        };
        a_period_dl: {
            dl_end: string;
            dl_start: string;
        } | null;
        a_settings: {
            i_claim_day: number;
            i_limit: number;
            i_limit_duration: number;
            id_limit_duration: number;
            is_checkin: boolean;
            is_limit: boolean;
        };
        can_invite: boolean;
        can_send: boolean;
        dl_reset: string | null;
        has_service: boolean;
        i_cap_day: number | null;
        i_limit: number | null;
        i_period: number | null;
        i_remain: number | null;
        i_remain_day: number | null;
        i_use: number;
        id_period: number;
        id_program_guest: number;
        id_reset_type_guest: number;
        is_expire_note: boolean;
        is_reset: boolean;
        k_business: string;
        k_login_promotion: string;
        k_promotion: string;
        text_location: string;
        text_owner: string;
        text_period: string;
        text_period_date: string;
        text_promotion_grant: string;
        text_promotion_guest: string;
        uid_owner: string;
    }>;
}
export interface WlLoginPromotionGuestPassGuestPassPutParams {
    /** Business key. */
    k_business: string;
    /** Login promotion key. */
    k_login_promotion: string;
}
export type WlLoginPromotionGuestPassGuestPassPutResponse = Record<string, unknown>;
export interface WlLoginMemberDynamicIdDynamicIdParams {
    /** `true` if a new dynamic ID should be generated. */
    is_refresh: boolean;
    /** Business key. */
    k_business: string;
    /** User unique identifier. */
    uid: string;
}
export interface WlLoginMemberDynamicIdDynamicIdResponse {
    /** Number of seconds left until the dynamic ID expires. */
    i_expire: number;
    /** Barcode of the member. */
    text_barcode: string;
    /** URL of the barcode image. */
    url_barcode: string;
}
export interface WlLoginAttendanceAddAddGetParams {
    /** The start date and time of the class in GMT and MySQL format. */
    dt_date_global: string;
    /** Key of the business in which the request must be processed. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The client user key. */
    uid_client: string;
}
export interface WlLoginAttendanceAddAddGetResponse {
    a_login_promotion: Array<{
        k_login_promotion: string;
        text_title: string;
    }>;
    a_session_pass: Array<{
        k_session_pass: string;
        text_title: string;
    }>;
    /** If `true`, the session is free with no methods of payment. If `false`, the session can be paid for. */
    is_free: boolean;
    /** The key of the user's promotion to be used for booking. */
    k_login_promotion: string;
    /** The key of a session pass that can be used for a single session payment. */
    k_session_pass: string;
    /** Account balance. */
    m_account: string;
    /** The price of the session, including any taxes and discounts. */
    m_price: string | null;
    /** The user's account balance if they were charged the `m_price` amount. */
    m_rest: string | null;
}
export interface WlLoginAttendanceAddAddPostParams {
    /** The start date and time of the class in GMT and MySQL format. */
    dt_date_global: string;
    /** Defines whether only single session can be booked for block event. */
    is_event_single: boolean;
    /** Key of the business in which the request must be processed. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The client user key. */
    uid_client: string;
}
export interface WlLoginAttendanceAddAddPostResponse {
    /** Possible states of the visit: book, attended, cancelled, etc. */
    id_visit: number;
    /** If `true`, the visit was automatically paid for in any available way during the booking. */
    is_paid: boolean;
    /** The key of the booked visit. This will be set on success. */
    k_visit: string;
    /** The URL link to the store to allow for the payment of the visit. */
    url_store: string;
}
export interface WlLoginSearchStaffAppListParams {
    /** `true` - search among whole franchise; `false` - search in specified business only. */
    is_franchisee_search_wide: boolean;
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The search string. Clients can be matched by name or email. */
    text_search: string;
}
export interface WlLoginSearchStaffAppListResponse {
    a_list: Array<{
        text_mail: string;
        text_name_first: string;
        text_name_last: string;
        text_phone: string;
        text_title: string;
        uid: string;
    }>;
    /** If `true`, then this user can add other users via the Add Client page. */
    can_add: boolean;
}
export interface WlCatalogStaffAppCatalogCartCatalogCartParams {
    /** The list of cart items with the next structure: */
    a_item: Array<{
        a_config?: {
            a_tuition_component?: Record<string, unknown>;
            f_price?: string;
            dt_prorate?: string;
            dt_start?: string;
            is_prorate?: boolean;
            is_prorate_fix?: boolean;
            is_prorate_only?: boolean;
            m_custom?: string;
            dt_send_local?: string;
            is_mail: boolean;
            s_mail?: string;
            s_message?: string;
            s_recipient: string;
            s_sender: string;
            m_prorate_custom: string;
            k_coupon: string;
            k_coupon_amount: string;
        };
        a_tax_custom?: {
            f_tax: string;
            k_tax: string;
        };
        f_discount_percent?: number;
        i_quantity: number;
        id_sale: number;
        k_id: string;
        k_shop_product_option: string;
        m_discount_fix?: string;
        m_price_custom?: string;
    }>;
    /** The discount as a percentage. */
    f_discount_percent: number;
    /** If `true`, every item is checked at the cart. Otherwise, this will be `false`. */
    is_check_cart_item: boolean;
    /** The business key. */
    k_business: string;
    /** The business location key. */
    k_location: string;
    /** The manual discount amount in dollars, excluding tax. */
    m_discount_flat: string;
    /** The amount of tips. */
    m_tip: string;
    /** The key of the current user. */
    uid_current: string;
    /** The key of the user who performed the purchase. */
    uid_customer: string;
    /** The discount code. */
    text_discount_code?: string | null;
}
export interface WlCatalogStaffAppCatalogCartCatalogCartResponse {
    a_discount_code: Array<{
        is_select: boolean;
        k_discount_code: string;
        text_discount_code: string;
        text_title: string;
    }>;
    /** Determines whether the business applied a commission at checkout. */
    is_commission: boolean;
    /** Determines, how staff sees discount codes in Store. */
    is_discount_code_mode_select: boolean;
    /** Determines whether to display custom receipt notes at checkout. */
    is_receipt_note: boolean;
    /** The discount amount in dollars, excluding tax. */
    m_discount: string;
    /** The discount amount applied to the cart's total amount, including taxes. */
    m_discount_total: string;
    /** The subtotal amount. */
    m_subtotal: string;
    /** The amount of tax. */
    m_tax: string;
    /** The amount of appointment tips. */
    m_tip_purchase: string;
    /** The cart's total amount. */
    m_total: string;
    /** The discount code's error code. */
    text_error_code: string | null;
    /** The discount code's error message. */
    text_error_message: string | null;
    /** The custom receipt note's text. */
    text_receipt_note: string;
}
export interface WlCatalogStaffAppCatalogListCatalogListParams {
    /** The key of the business to get categories for. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The visit key to pay for. */
    k_visit: string;
}
export interface WlCatalogStaffAppCatalogListCatalogListResponse {
    a_shop_product: Array<{
        a_location: Array<string>;
        a_login_type: Array<string>;
        a_member_group: Array<string>;
        a_shop_category: Array<string>;
        id_program?: number;
        id_restriction: number;
        id_sale: number;
        is_online_sell: boolean;
        is_visit: boolean;
        k_id: string;
        text_title: string;
        url_catalog: string;
    }>;
    /** If `true`, the current user is able to add the purchased item to the account. */
    can_add: boolean;
}
export interface WlCatalogStaffAppCatalogViewCatalogViewParams {
    /** Configuration information about the item, which can specify prorated amounts. */
    a_config: Array<{
        f_promote: number;
        is_prorate: boolean;
        m_prorate_custom: string;
    }>;
    /** Contains information about edited taxes. */
    a_tax: Array<{
        k_tax: string;
        m_tax_custom: string;
    }>;
    /** The quantity of items. */
    i_quantity: number;
    /** The ID of the sale category. One of the [RsSaleSid](#/components/schemas/RsSaleSid) constants. */
    id_sale: number;
    /** The business key. */
    k_business: string;
    /** The key of the sale item. */
    k_id: string;
    /** The product option key. */
    k_shop_product_option: string;
    /** The custom price of the sale item. */
    m_price: string;
    /** The ID of the user who performed the actions. */
    uid: string;
}
export interface WlCatalogStaffAppCatalogViewCatalogViewResponse {
    a_tax_data: Array<{
        f_tax: number;
        f_tax_discount: string;
        f_tax_discount_login: string;
        f_value: number;
        id_tax: number;
        k_tax: string;
        s_tax: string;
    }>;
    /** The prorated amount. */
    m_prorate: string;
    /** The amount of the sale item, excluding taxes. */
    m_subtotal: string;
    /** The calculated amount of tax. */
    m_tax: string;
    /** The calculated amount of the sale item, including taxes. */
    m_total: string;
}
export interface WlReceptionRosterDesignReceptionRosterDesignParams {
    /** Key of the business. */
    k_business: string;
}
export interface WlReceptionRosterDesignReceptionRosterDesignResponse {
    a_image: Array<{
        i_height: number;
        i_height_src: number;
        i_width: number;
        i_width_src: number;
        id_type_src: number;
        'is-resize': boolean;
        'url-thumbnail': string;
        'url-view': string;
    }>;
    /** Whether to hide client profile images. */
    hide_profile_images: boolean;
    /** Number of seconds of inactivity before automatic redirect. */
    i_attendance_direct_delay: number;
    /** Number of minutes for the client check-in window after session has started. */
    i_book_open: number;
    /** Units of time for the look ahead window for attendance app. */
    i_book_quick_app: number;
    /** Delay in seconds on attendance web app confirmation screen before redirect to login screen. */
    i_confirm_delay: number;
    /** List of places to redirect user from attendance list after inactivity. */
    id_attendance_direct: number;
    /** A class for managing time intervals. */
    id_book_quick_app: number;
    /** `true` if clients are allowed to check-in unpaid, `false` otherwise. */
    is_attend_free: boolean;
    /** Whether to allow sign-ins to classes in progress. */
    is_book_open: boolean;
    /** `true` if clients are allowed to check-in without booking prior, */
    is_book_optional: boolean;
    /** `true` if clients are allowed to sign in before session is started., */
    is_book_quick_app: boolean;
    /** `true` - show business name on attendance web app; `false` - do not show. */
    show_business_name: boolean;
    /** `true` - show confirm screen on attendance web app; */
    show_confirm_screen: boolean;
    /** Name of the business to display in the attendance web app. */
    text_business_name: string;
}
export interface WlInsuranceEnrollmentFieldEnrollmentFieldListGetParams {
    /** The key of the business in which the enrollment is performed. */
    k_business: string;
    /** "Wellness Program" key. */
    k_wellness_program: string;
}
export interface WlInsuranceEnrollmentFieldEnrollmentFieldListGetResponse {
    a_field_list: Array<{
        a_account: {
            a_config: Array<string>;
            i_length: number | null;
            is_disable: boolean;
            is_required: boolean;
            k_field: string;
            s_regular: string;
            text_display_name: string;
            text_error_message: string;
            text_field_name: string;
        };
        a_field: {
            a_config: Record<string, unknown>;
            i_length: number | null;
            is_disable: boolean;
            is_required: boolean;
            k_field: string;
            s_regular: string;
            text_display_name: string;
            text_error_message: string;
            text_field_name: string;
        };
    }>;
}
export interface WlInsuranceEnrollmentFieldEnrollmentFieldListPostParams {
    /** The key of the business in which the enrollment is performed. */
    k_business: string;
    /** "Wellness Program" key. */
    k_wellness_program: string;
}
export type WlInsuranceEnrollmentFieldEnrollmentFieldListPostResponse = Record<string, unknown>;
export interface WlRewardActionCategoryListCategoryListParams {
    /** ID of a business to show information for. */
    k_business: string;
}
export interface WlRewardActionCategoryListCategoryListResponse {
    a_category: Array<{
        id_reward_action_category: number;
        k_reward_action_category: string;
        s_title: string;
    }>;
}
export interface WlRewardScoreCurrentCurrentParams {
    /** ID of a business to show information for. */
    k_business: string;
    /** UID to retrieve information about. */
    uid: string;
}
export interface WlRewardScoreCurrentCurrentResponse {
    /** Current user's rank in the first leaderboard. */
    i_board_rank: number;
    /** Current score in wellnessliving points. */
    i_score: number;
    /** Title of the first leaderboard. */
    s_board_title: string;
}
export interface WlRewardBoardBoardListListParams {
    /** Business to show information for. */
    k_business: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardBoardBoardListListResponse {
    a_reward_board: Array<{
        k_reward_board: string;
        s_title: string;
    }> | null;
}
export interface WlPassportLoginEnterPassportOtpGetParams {
    /** Whether OTP code will be sending to user via email. */
    is_mail: boolean;
    /** Whether OTP code will be sending to user via email. */
    is_phone: boolean;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export type WlPassportLoginEnterPassportOtpGetResponse = Record<string, unknown>;
export interface WlPassportLoginEnterPassportOtpPostParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlPassportLoginEnterPassportOtpPostResponse {
    /** Redirect url after successful authorization. */
    url_redirect: string;
}
export interface WlPassportLoginRegisterRegisterOtpGetParams {
    /** Business key. */
    k_business: string;
    /** Email address OTP code will be sent to. */
    text_mail: string;
    /** Phone number OTP code will be sent to. */
    text_phone: string;
}
export type WlPassportLoginRegisterRegisterOtpGetResponse = Record<string, unknown>;
export interface WlPassportLoginRegisterRegisterOtpPostParams {
    /** Business key. */
    k_business: string;
}
export interface WlPassportLoginRegisterRegisterOtpPostResponse {
    /** Number of attempts left to submit the correct otp code. */
    i_attempt_left: number;
    /** JWT token generated after successful otp validation. */
    s_jwt_token: string;
    /** Key of the user, which was signed in after successful otp verification. */
    uid: string;
    /** Redirect url after successful authorization. */
    url_redirect: string;
}
export type WlSkinApplicationConnectApplicationConnectParams = Record<string, unknown>;
export interface WlSkinApplicationConnectApplicationConnectResponse {
    /** Key of the created or updated application. */
    k_spa_application: string;
}
export interface WlSkinApplicationResourceApplicationResourceParams {
    /** The business key. */
    k_business: string;
}
export interface WlSkinApplicationResourceApplicationResourceResponse {
    a_application: Array<{
        a_resource: {
            a_group: Record<string, unknown>;
            text_group: string;
        };
        i_version: number;
        k_business: string;
        s_google_id: string;
        s_google_reverse: string;
        s_splash_color_android: string;
        s_version_name: string;
        text_annotation: string;
        text_description: string;
        text_description_google: string;
        text_domain: string;
        text_keyword: string;
        text_name: string;
        text_title: string;
    }>;
}
export type WlSkinApplicationResourceApplicationResourceMaterialParams = Record<string, unknown>;
export type WlSkinApplicationResourceApplicationResourceMaterialResponse = Record<string, unknown>;
export type WlSkinApplicationResourceApplicationResourceUploadParams = Record<string, unknown>;
export type WlSkinApplicationResourceApplicationResourceUploadResponse = Record<string, unknown>;
export interface WlMemberGroupEditEditGetParams {
    /** The business key. */
    k_business: string;
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Unique string identifying the name of the search group. */
    s_search_group: string;
    /** User key. */
    uid: string;
}
export interface WlMemberGroupEditEditGetResponse {
    /** Lead conversion type. */
    id_conversion_type: number | null;
    /** Shapes of client group icons. */
    id_member_group_shape: number;
    /** Whether Facility Access enabled for group. */
    is_brivo_active: boolean;
    /** Whether Brivo invitation feature enabled for the group. */
    is_brivo_invitation_active: boolean;
    /** `true` to enable group icon. `false` to disable. */
    is_icon: boolean;
    /** Whether auto-update enabled for group. */
    is_update: boolean;
    /** Key of existing template. */
    k_search_template: string;
    /** Hexadecimal color of icon background. */
    s_color_background: string;
    /** Hexadecimal color of icon foreground. */
    s_color_foreground: string;
    /** Characters on icon. */
    s_icon: string;
    /** Title for a client group. */
    text_title: string;
}
export interface WlMemberGroupEditEditPostParams {
    /** The business key. */
    k_business: string;
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Unique string identifying the name of the search group. */
    s_search_group: string;
    /** User key. */
    uid: string;
}
export interface WlMemberGroupEditEditPostResponse {
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Additional warning message if there were some minor issues with request. */
    text_warning: string | null;
}
export interface WlMemberGroupEditEditPutParams {
    /** The business key. */
    k_business: string;
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Unique string identifying the name of the search group. */
    s_search_group: string;
    /** User key. */
    uid: string;
}
export interface WlMemberGroupEditEditPutResponse {
    /** Additional warning message if there were some minor issues with request. */
    text_warning: string | null;
}
export interface WlMemberGroupUserUserGroupDeleteParams {
    /** UID of a user. */
    uid_user: string;
    /** Key of the business. */
    k_business?: string | null;
}
export type WlMemberGroupUserUserGroupDeleteResponse = Record<string, unknown>;
export interface WlMemberGroupUserUserGroupGetParams {
    /** UID of a user. */
    uid_user: string;
    /** Key of the business. */
    k_business?: string | null;
}
export interface WlMemberGroupUserUserGroupGetResponse {
    /** All groups to which the specified user belongs. */
    a_group_info: Array<string>;
    /** Whether the user is in the quick group or not. */
    is_quick_group: boolean;
}
export interface WlMemberGroupUserUserGroupPostParams {
    /** UID of a user. */
    uid_user: string;
    /** Key of the business. */
    k_business?: string | null;
}
export type WlMemberGroupUserUserGroupPostResponse = Record<string, unknown>;
export interface WlMemberGroupGroupListListDeleteParams {
    /** The business key. */
    k_business: string;
}
export type WlMemberGroupGroupListListDeleteResponse = Record<string, unknown>;
export interface WlMemberGroupGroupListListGetParams {
    /** Whether include "Isaac Churn Risk" group. */
    is_churn_risk: boolean;
    /** Whether include a list of members of groups. */
    is_return_members: boolean;
    /** The business key. */
    k_business: string;
    /** List of groups for filtering groups of business. */
    a_member_group_select?: Array<string> | null;
}
export interface WlMemberGroupGroupListListGetResponse {
    a_member_group: Array<{
        k_member_group: string;
        text_title: string;
    }>;
}
export interface WlMemberGroupGroupListListPutParams {
    /** The business key. */
    k_business: string;
}
export type WlMemberGroupGroupListListPutResponse = Record<string, unknown>;
export interface WlMemberProgressFieldStateParams {
    /** Business key. */
    k_business: string;
    /** Field key. */
    k_field: string;
}
export interface WlMemberProgressFieldStateResponse {
    /** List of progress log fields. */
    id_field: number;
    /** Whether field is active and should be displayed on page. */
    is_active: boolean | null;
    /** Whether this field is public. If this field is set to `false`, this field is not visible to clients. */
    is_public: boolean | null;
    /** Whether field value is required for clients. */
    is_require: boolean | null;
    /** Whether field value is required for staffs. */
    is_require_staff: boolean | null;
    /** Field title. */
    text_title: string | null;
}
export interface WlMemberProgressLogVerifyParams {
    /** Local date without time of the progress log. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export type WlMemberProgressLogVerifyResponse = Record<string, unknown>;
export interface WlDiscountCodeEditDiscountCodeEditGetParams {
    /** Business key. */
    k_business: string;
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditGetResponse {
    a_component: Array<{
        id_purchase_item: number;
        k_id: string;
        text_title: string;
    }>;
    /** List of client types. */
    a_login_type: Array<string>;
    /** List of client groups. */
    a_member_group: Array<string>;
    /** Expiration date. `null` if discount code is never expires. */
    dl_end: string | null;
    /** Activation date. */
    dl_start: string;
    /** Value of the percentage or fixed discount. */
    f_value: string;
    /** Count of calendar periods from `id_duration` before expiration. */
    i_duration: number;
    /** Maximum count of usage. Zero means unlimited usage. */
    i_limit: number;
    /** A class for managing time intervals. */
    id_duration: number;
    /** Class to process string identifiers for duration types */
    id_duration_type: number;
    /** `true` means discount code is active. */
    is_active: boolean;
    /** `true` means membership will auto-renew at discounted rate. */
    is_auto_renew: boolean;
    /** `true` means discount code can reduce price of the gift cards. */
    is_coupon: boolean;
    /** `true` means discount code can be applied to first membership payment only. */
    is_first_payment: boolean;
    /** `true` means that only selected client types or groups can use this discount code. */
    is_login_type: boolean;
    /** `true` if clients can use this discount code in online store, */
    is_online: boolean;
    /** `true` means discount value is percent from the purchase amount. */
    is_percent: boolean;
    /** `true` means discount can be applied to all products and purchase options. */
    is_purchase_all: boolean;
    /** List of product and purchase options that are effected with this discount code. */
    s_component: string;
    /** Discount code that can be used during purchase. */
    text_code: string;
    /** Description of the discount code. */
    text_description: string;
    /** Name of the discount code. */
    text_title: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPostParams {
    /** Business key. */
    k_business: string;
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPostResponse {
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPutParams {
    /** Business key. */
    k_business: string;
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPutResponse {
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface CoreRequestApiApplicationCredentialCredentialDeleteParams {
    /** The CID of the credential. */
    cid_credential: number;
}
export type CoreRequestApiApplicationCredentialCredentialDeleteResponse = Record<string, unknown>;
export interface CoreRequestApiApplicationCredentialCredentialGetParams {
    /** The CID of the credential. */
    cid_credential: number;
}
export interface CoreRequestApiApplicationCredentialCredentialGetResponse {
    /** An array with the credential. */
    json_credential: string;
}
export interface CoreRequestApiApplicationCredentialCredentialPutParams {
    /** The CID of the credential. */
    cid_credential: number;
}
export type CoreRequestApiApplicationCredentialCredentialPutResponse = Record<string, unknown>;
export interface WlAppointmentBookAssetServiceServiceParams {
    /** The appointment booking date selected by the user. */
    dt_start: string;
    /** Mode type, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** If `true`, back-end mode is selected. */
    is_backend: boolean;
    /** Whether to show both grid layouts and custom layouts. */
    is_grid_any: boolean;
    /** Whether unavailable assets should be included. */
    is_show_unavailable_assets: boolean;
    /** The selected location key. */
    k_location: string;
    /** The selected service's key. */
    k_service: string;
    /** Timezone of date and time of service start. */
    k_timezone: string;
    /** User to get information for. */
    uid: string;
    /** The appointment booking key to ignore when `a_resource_busy` is derived. */
    k_appointment_ignore?: string | null;
}
export interface WlAppointmentBookAssetServiceServiceResponse {
    /** A list of reserved assets. */
    a_resource_busy: Array<Array<string>>;
    a_resource_type: Array<{
        a_resource: {
            a_image: Record<string, unknown>;
            i_quantity: number;
            is_available: boolean;
            k_resource: string;
            s_resource: string;
        };
        k_resource_layout: string | null;
        s_resource_type: string;
    }>;
    /** Can the staff members book reserved assets. */
    can_book_unavailable_assets: boolean;
}
export interface WlProfileAttendanceScheduleFrontendLifetimeTotalsParams {
    /** The business key. */
    k_business: string;
    /** The user key. */
    uid: string;
}
export interface WlProfileAttendanceScheduleFrontendLifetimeTotalsResponse {
    a_total: Array<{
        text_title: string;
        s_value: number;
    }>;
}
export interface WlBusinessAccountSubscriptionAchieveAchieveSubscriptionParams {
    /** Business key to check Achieve app subscription plan. */
    k_business: string;
}
export interface WlBusinessAccountSubscriptionAchieveAchieveSubscriptionResponse {
    /** If Achieve app has free subscription plan is `true`, otherwise (white label, professional) - `fal... */
    is_free: boolean;
    /** If Achieve app has white label subscription plan is `true`, otherwise (free, professional) - `fal... */
    is_white_label: boolean;
}
export type WlLoginPromotionGuestPassClaimClaimParams = Record<string, unknown>;
export type WlLoginPromotionGuestPassClaimClaimResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassInviteInviteDeleteParams {
    /** Business key. */
    k_business: string;
    /** Secret of the invitation. */
    s_secret: string;
}
export type WlLoginPromotionGuestPassInviteInviteDeleteResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassInviteInvitePutParams {
    /** Business key. */
    k_business: string;
    /** Secret of the invitation. */
    s_secret: string;
}
export type WlLoginPromotionGuestPassInviteInvitePutResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassInviteInviteListGetParams {
    /** Whether to include invitations that have already expired or were revoked. */
    is_include_expire: boolean;
    /** Key of the business within which guest pass invitations are managed. */
    k_business: string;
    /** End of the guest pass activity period. */
    dl_end?: string | null;
    /** Start of the guest pass activity period. */
    dl_start?: string | null;
    /** Key of the login promotion which provides the guest pass invitation. */
    k_login_promotion?: string | null;
    /** Key of the invited user. */
    uid_guest?: string | null;
    /** Key of the host user who sent the invitation. */
    uid_host?: string | null;
}
export interface WlLoginPromotionGuestPassInviteInviteListGetResponse {
    a_list: Array<{
        a_guest: {
            text_mail: string;
            text_name_first: string;
            text_name_last: string;
            text_phone: string | null;
            uid: string | null;
        };
        dtl_accept: string | null;
        dtl_expire: string | null;
        dtl_invite: string;
        dtl_redeem: string | null;
        dtl_reject: string | null;
        dtl_visit: string | null;
        dtu_accept: string | null;
        dtu_expire: string | null;
        dtu_invite: string;
        dtu_redeem: string | null;
        dtu_reject: string | null;
        id_status: number;
        is_checkin: boolean | null;
        is_visit_future: boolean;
        k_login_promotion_guest: string | null;
        k_login_promotion_host: string;
        k_promotion: string;
        k_visit: string | null;
        s_secret: string;
        text_host_name: string | null;
        text_promotion_guest: string;
        text_promotion_host: string;
        text_service_title: string | null;
        text_timezone: string;
        uid_host: string | null;
        url_service: string;
    }>;
}
export interface WlLoginPromotionGuestPassInviteInviteListPostParams {
    /** Key of the business within which guest pass invitations are managed. */
    k_business: string;
    /** Key of the login promotion which provides the guest pass invitation. */
    k_login_promotion?: string | null;
    /** Key of the invited user. */
    uid_guest?: string | null;
}
export type WlLoginPromotionGuestPassInviteInviteListPostResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassApplyApplyParams {
    /** Business key. */
    k_business: string;
}
export type WlLoginPromotionGuestPassApplyApplyResponse = Record<string, unknown>;
export interface WlMemberProgressFieldEditFieldGetParams {
    /** Business key. */
    k_business: string;
    /** Field key. */
    k_field: string;
}
export interface WlMemberProgressFieldEditFieldGetResponse {
    /** A list of field measurement. See [MeasurementSid](#/components/schemas/Wl.Member.Progress.Field.M... */
    a_measurement: Array<number>;
    /** A list of field type. See [TypeSid](#/components/schemas/Wl.Member.Progress.Field.TypeSid). */
    a_type: Array<number>;
    /** List of progress log fields. */
    id_field: number;
    /** Possible measurement units of the progress fields values. */
    id_measurement_unit: number;
    /** Possible types of the progress fields values. */
    id_type: number;
    /** Whether field is active and should be displayed on page. */
    is_active: boolean;
    /** Whether this field is public. If this field is set to `false`, this field is not visible to clients. */
    is_public: boolean;
    /** Whether field value is required for clients. */
    is_require: boolean;
    /** Whether field value is required for staffs. */
    is_require_staff: boolean;
    /** Field title. */
    text_title: string | null;
}
export interface WlMemberProgressFieldEditFieldPostParams {
    /** Business key. */
    k_business: string;
    /** Field key. */
    k_field: string;
}
export interface WlMemberProgressFieldEditFieldPostResponse {
    /** Field title. */
    text_title: string | null;
}
export interface WlMemberProgressLogEditLogGetParams {
    /** Progress log local date. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressLogEditLogGetResponse {
    a_field_list: Array<{
        id_field: number;
        id_measurement_unit: number;
        id_type: number;
        k_field: string;
        x_value: string;
        text_name: string;
    }>;
    /** Last local date when the user entered progress values. `null` if the user had not entered progres... */
    dt_last: string | null;
    /** How we want to see this page. As a staff or as a user. */
    is_staff: boolean;
}
export interface WlMemberProgressLogEditLogPostParams {
    /** Progress log local date. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressLogEditLogPostResponse {
    a_field_list: Array<{
        id_field: number;
        id_measurement_unit: number;
        id_type: number;
        k_field: string;
        x_value: string;
        text_name: string;
    }>;
}
export interface WlMemberProgressLogImageImageDeleteParams {
    /** Local date of the progress picture. */
    dt_date?: string | null;
    /** Business key. */
    k_business?: string | null;
    /** User key. */
    uid?: string | null;
}
export type WlMemberProgressLogImageImageDeleteResponse = Record<string, unknown>;
export interface WlMemberProgressLogImageImageGetParams {
    /** Local date of the progress picture. */
    dt_date?: string | null;
    /** Business key. */
    k_business?: string | null;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressLogImageImageGetResponse {
    a_image: Array<{
        a_image: {
            i_height: number;
            i_height_src: number;
            i_rotate: number;
            i_width: number;
            i_width_src: number;
            'is-resize': boolean;
            'url-view': string;
            'url-thumbnail': string;
        };
        'i-size': number;
        'i-thumbnail-height': number;
        'i-thumbnail-width': number;
        s_link: string;
        'url-action': string;
    }>;
}
export interface WlMemberProgressLogImageImagePostParams {
    /** Local date of the progress picture. */
    dt_date?: string | null;
    /** Business key. */
    k_business?: string | null;
    /** User key. */
    uid?: string | null;
}
export type WlMemberProgressLogImageImagePostResponse = Record<string, unknown>;
export interface WlMemberProgressLogCompareCompareParams {
    /** Key of business to get information for. */
    k_business: string;
    /** User key to search dates for. */
    uid: string;
}
export interface WlMemberProgressLogCompareCompareResponse {
    /** List of local dates of the progress log. */
    a_date: Array<string>;
}
export interface WlMemberProgressGoalEditGoalGetParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressGoalEditGoalGetResponse {
    a_field_list: Array<{
        id_field: number;
        id_measurement_unit: number;
        id_type: number;
        k_field: string;
        x_value: string;
        text_name: string;
    }>;
    /** How we want to see this page. As a staff or as a user. */
    is_staff: boolean;
}
export interface WlMemberProgressGoalEditGoalPostParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressGoalEditGoalPostResponse {
    a_field_list: Array<{
        id_field: number;
        id_measurement_unit: number;
        id_type: number;
        k_field: string;
        x_value: string;
        text_name: string;
    }>;
}
export interface WlShopProductOptionInventoryCountInventoryCountGetParams {
    /** The list of notes for product options in the store. */
    a_note: Array<string>;
    /** The list of product option quantities in the store. */
    a_quantity: Array<number>;
    /** The current business. */
    k_business: string;
    /** The product barcode, used for the search. */
    text_barcode: string;
}
export interface WlShopProductOptionInventoryCountInventoryCountGetResponse {
    a_product_option: Array<{
        a_image: {
            i_height: number;
            i_width: number;
            url: string;
        };
        dl_change: string;
        i_count: number;
        k_location: string;
        k_shop_product_option: string;
        k_shop_product_option_inventory: string;
        text_category: string;
        text_location: string;
        text_note: string;
        text_option: string;
        text_product: string;
    }>;
    /** The current username. */
    text_user_name: string;
}
export interface WlShopProductOptionInventoryCountInventoryCountPostParams {
    /** The list of notes for product options in the store. */
    a_note: Array<string>;
    /** The list of product option quantities in the store. */
    a_quantity: Array<number>;
    /** The current business. */
    k_business: string;
}
export type WlShopProductOptionInventoryCountInventoryCountPostResponse = Record<string, unknown>;
export declare class ThothExplorerSearchClassSessionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of class sessions based on search criteria. */
    classSessionSearch(params?: ThothExplorerSearchClassSessionClassSessionSearchParams): Promise<ThothExplorerSearchClassSessionClassSessionSearchResponse>;
}
export declare class ThothExplorerSearchNamespace {
    private readonly _client;
    readonly classSession: ThothExplorerSearchClassSessionNamespace;
    constructor(_client: WlClient);
}
export declare class ThothReportCoreGeneratorNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns contents of a report as a table. */
    query(params?: ThothReportCoreGeneratorQueryParams): Promise<ThothReportCoreGeneratorQueryResponse>;
}
export declare class ThothReportCoreNamespace {
    private readonly _client;
    readonly generator: ThothReportCoreGeneratorNamespace;
    constructor(_client: WlClient);
}
export declare class ThothWlPayAccountChargeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Allows the user account to be filled with a specified payment, or to perform the reset change manually. */
    charge(params?: ThothWlPayAccountChargeChargeParams): Promise<ThothWlPayAccountChargeChargeResponse>;
}
export declare class ThothWlPayAccountNamespace {
    private readonly _client;
    readonly charge: ThothWlPayAccountChargeNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about accounts of given user in given business. */
    account(params?: ThothWlPayAccountAccountParams): Promise<ThothWlPayAccountAccountResponse>;
}
export declare class ThothWlPayFormNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about payment environment. */
    environmentUser(params?: ThothWlPayFormEnvironmentUserParams): Promise<ThothWlPayFormEnvironmentUserResponse>;
    /** Returns information about payment environment. */
    /** @deprecated */
    environment(params?: ThothWlPayFormEnvironmentParams): Promise<ThothWlPayFormEnvironmentResponse>;
}
export declare class ThothWlPayMethodNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of active payment methods data. */
    list(params?: ThothWlPayMethodListParams): Promise<ThothWlPayMethodListResponse>;
}
export declare class ThothWlPayOwnerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about payment owner. */
    owner(params?: ThothWlPayOwnerOwnerParams): Promise<ThothWlPayOwnerOwnerResponse>;
}
export declare class ThothWlPayAddressNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets user's payment addresses information. */
    address(params?: ThothWlPayAddressAddressParams): Promise<ThothWlPayAddressAddressResponse>;
    /** Returns default payment address data that is retrieved from user profile. */
    profile(params?: ThothWlPayAddressProfileParams): Promise<ThothWlPayAddressProfileResponse>;
}
export declare class ThothWlPayTransactionReportNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets the daily transaction data. */
    transactionAllPayment(params?: ThothWlPayTransactionReportTransactionAllPaymentParams): Promise<ThothWlPayTransactionReportTransactionAllPaymentResponse>;
}
export declare class ThothWlPayTransactionNamespace {
    private readonly _client;
    readonly report: ThothWlPayTransactionReportNamespace;
    constructor(_client: WlClient);
}
export declare class ThothWlPayBankCardAddNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes saved card. */
    addDelete(params?: ThothWlPayBankCardAddAddDeleteParams): Promise<ThothWlPayBankCardAddAddDeleteResponse>;
    /** Gets code of bank card widget. */
    /** @deprecated */
    addGet(params?: ThothWlPayBankCardAddAddGetParams): Promise<ThothWlPayBankCardAddAddGetResponse>;
    /** Saves new bank card. */
    addPost(params?: ThothWlPayBankCardAddAddPostParams): Promise<ThothWlPayBankCardAddAddPostResponse>;
}
export declare class ThothWlPayBankCardNamespace {
    private readonly _client;
    readonly add: ThothWlPayBankCardAddNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about user's bank cards. */
    list(params?: ThothWlPayBankCardListParams): Promise<ThothWlPayBankCardListResponse>;
}
export declare class ThothWlPayBankNamespace {
    private readonly _client;
    readonly card: ThothWlPayBankCardNamespace;
    constructor(_client: WlClient);
}
export declare class ThothWlPayNamespace {
    private readonly _client;
    readonly account: ThothWlPayAccountNamespace;
    readonly form: ThothWlPayFormNamespace;
    readonly method: ThothWlPayMethodNamespace;
    readonly owner: ThothWlPayOwnerNamespace;
    readonly address: ThothWlPayAddressNamespace;
    readonly transaction: ThothWlPayTransactionNamespace;
    readonly bank: ThothWlPayBankNamespace;
    constructor(_client: WlClient);
}
export declare class ThothNamespace {
    private readonly _client;
    readonly explorerSearch: ThothExplorerSearchNamespace;
    readonly reportCore: ThothReportCoreNamespace;
    readonly wlPay: ThothWlPayNamespace;
    constructor(_client: WlClient);
}
export declare class CoreRequestApiApplicationCredentialNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified credential for the application. */
    credentialDelete(params?: CoreRequestApiApplicationCredentialCredentialDeleteParams): Promise<CoreRequestApiApplicationCredentialCredentialDeleteResponse>;
    /** Returns the credential data for the application. */
    credentialGet(params?: CoreRequestApiApplicationCredentialCredentialGetParams): Promise<CoreRequestApiApplicationCredentialCredentialGetResponse>;
    /** Saves the credential for the application. */
    credentialPut(params?: CoreRequestApiApplicationCredentialCredentialPutParams): Promise<CoreRequestApiApplicationCredentialCredentialPutResponse>;
}
export declare class CoreRequestApiApplicationNamespace {
    private readonly _client;
    readonly credential: CoreRequestApiApplicationCredentialNamespace;
    constructor(_client: WlClient);
    /** Restricts access to API for all sites, which are given in the list. */
    originDelete(params?: CoreRequestApiApplicationOriginDeleteParams): Promise<CoreRequestApiApplicationOriginDeleteResponse>;
    /** Gets list of all sites, where usage of the API is allowed for the current application. */
    originGet(params?: CoreRequestApiApplicationOriginGetParams): Promise<CoreRequestApiApplicationOriginGetResponse>;
    /** Allows access to API for all sites, which are given in the list. */
    originPut(params?: CoreRequestApiApplicationOriginPutParams): Promise<CoreRequestApiApplicationOriginPutResponse>;
}
export declare class CoreRequestApiNamespace {
    private readonly _client;
    readonly application: CoreRequestApiApplicationNamespace;
    constructor(_client: WlClient);
    /** Gets a secret key for signing. */
    keySecret(params?: CoreRequestApiKeySecretParams): Promise<CoreRequestApiKeySecretResponse>;
}
export declare class CoreRequestTokenNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets new pin code. */
    tokenPin(params?: CoreRequestTokenTokenPinParams): Promise<CoreRequestTokenTokenPinResponse>;
}
export declare class CoreRequestNamespace {
    private readonly _client;
    readonly api: CoreRequestApiNamespace;
    readonly token: CoreRequestTokenNamespace;
    constructor(_client: WlClient);
    /** Returns the example result for debugging. */
    example(params?: CoreRequestExampleParams): Promise<CoreRequestExampleResponse>;
}
export declare class CoreGeoRegionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about countries and regions. */
    region(params?: CoreGeoRegionRegionParams): Promise<CoreGeoRegionRegionResponse>;
}
export declare class CoreGeoNamespace {
    private readonly _client;
    readonly region: CoreGeoRegionNamespace;
    constructor(_client: WlClient);
    /** Returns a list of cities to show in combobox list. */
    combobox(params?: CoreGeoComboboxParams): Promise<CoreGeoComboboxResponse>;
}
export declare class CoreGoogleCaptchaNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves the user CAPTCHA token for the current session. */
    googleCaptcha(params?: CoreGoogleCaptchaGoogleCaptchaParams): Promise<CoreGoogleCaptchaGoogleCaptchaResponse>;
    /** Returns the overridden score for the reCAPTCHA v3. */
    captchaScoreGet(params?: CoreGoogleCaptchaCaptchaScoreGetParams): Promise<CoreGoogleCaptchaCaptchaScoreGetResponse>;
    /** Validates the reCAPTCHA v3 token. */
    captchaScorePost(params?: CoreGoogleCaptchaCaptchaScorePostParams): Promise<CoreGoogleCaptchaCaptchaScorePostResponse>;
    /** Overrides the score for the reCAPTCHA v3. */
    captchaScorePut(params?: CoreGoogleCaptchaCaptchaScorePutParams): Promise<CoreGoogleCaptchaCaptchaScorePutResponse>;
}
export declare class CoreGoogleNamespace {
    private readonly _client;
    readonly captcha: CoreGoogleCaptchaNamespace;
    constructor(_client: WlClient);
    /** Saves the user CAPTCHA token for the current session. */
    /** @deprecated */
    googleCaptcha(params?: CoreGoogleGoogleCaptchaParams): Promise<CoreGoogleGoogleCaptchaResponse>;
}
export declare class CoreWebSocketNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks whether a listener can subscribe to specified channel. Subscribes in a case of positive result. */
    subscribe(params?: CoreWebSocketSubscribeParams): Promise<CoreWebSocketSubscribeResponse>;
}
export declare class CoreSidNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of all items for the given Sid class. */
    coreSid(params?: CoreSidCoreSidParams): Promise<CoreSidCoreSidResponse>;
}
export declare class CoreCaptchaNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if a CAPTCHA is required for the given captcha type. */
    captchaRequire(params?: CoreCaptchaCaptchaRequireParams): Promise<CoreCaptchaCaptchaRequireResponse>;
}
export declare class CoreDriveImageUploadNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about the image. */
    imageUploadGet(params?: CoreDriveImageUploadImageUploadGetParams): Promise<CoreDriveImageUploadImageUploadGetResponse>;
    /** Loads image information for a list of IDs. The POST method is used instead of the GET method because the maximum permitted URI length is restricted. */
    imageUploadPost(params?: CoreDriveImageUploadImageUploadPostParams): Promise<CoreDriveImageUploadImageUploadPostResponse>;
    /** Updates the image. */
    imageUploadPut(params?: CoreDriveImageUploadImageUploadPutParams): Promise<CoreDriveImageUploadImageUploadPutResponse>;
    /** Saves new uploaded image. */
    imageUploadTemporary(params?: CoreDriveImageUploadImageUploadTemporaryParams): Promise<CoreDriveImageUploadImageUploadTemporaryResponse>;
}
export declare class CoreDriveNamespace {
    private readonly _client;
    readonly imageUpload: CoreDriveImageUploadNamespace;
    constructor(_client: WlClient);
}
export declare class CorePassportLoginEnterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Signs the user in using their login and hashed password. */
    enter(params?: CorePassportLoginEnterEnterParams): Promise<CorePassportLoginEnterEnterResponse>;
    /** Generates notepad for user sign in form. */
    notepad(params?: CorePassportLoginEnterNotepadParams): Promise<CorePassportLoginEnterNotepadResponse>;
}
export declare class CorePassportLoginRegisterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Validates the new user's data and sends a confirmation email to complete registration. */
    register(params?: CorePassportLoginRegisterRegisterParams): Promise<CorePassportLoginRegisterRegisterResponse>;
    /** Confirms email of a new user and completes registration. */
    registerConfirm(params?: CorePassportLoginRegisterRegisterConfirmParams): Promise<CorePassportLoginRegisterRegisterConfirmResponse>;
}
export declare class CorePassportLoginSignOutNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Signs user out. */
    signOut(params?: CorePassportLoginSignOutSignOutParams): Promise<CorePassportLoginSignOutSignOutResponse>;
}
export declare class CorePassportLoginNamespace {
    private readonly _client;
    readonly enter: CorePassportLoginEnterNamespace;
    readonly register: CorePassportLoginRegisterNamespace;
    readonly signOut: CorePassportLoginSignOutNamespace;
    constructor(_client: WlClient);
    /** Returns information about user that is currently signed in. */
    info(params?: CorePassportLoginInfoParams): Promise<CorePassportLoginInfoResponse>;
}
export declare class CorePassportChangePasswordNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves for user new password. */
    changePasswordApply(params?: CorePassportChangePasswordChangePasswordApplyParams): Promise<CorePassportChangePasswordChangePasswordApplyResponse>;
    /** Sends to user "password recovery" mail. */
    changePasswordBegin(params?: CorePassportChangePasswordChangePasswordBeginParams): Promise<CorePassportChangePasswordChangePasswordBeginResponse>;
}
export declare class CorePassportEnterJwtNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a jwt token that can be used to log user. */
    jwtToken(params?: CorePassportEnterJwtJwtTokenParams): Promise<CorePassportEnterJwtJwtTokenResponse>;
}
export declare class CorePassportEnterNamespace {
    private readonly _client;
    readonly jwt: CorePassportEnterJwtNamespace;
    constructor(_client: WlClient);
}
export declare class CorePassportUserEmailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if email address exists. */
    emailExist(params?: CorePassportUserEmailEmailExistParams): Promise<CorePassportUserEmailEmailExistResponse>;
}
export declare class CorePassportUserNamespace {
    private readonly _client;
    readonly email: CorePassportUserEmailNamespace;
    constructor(_client: WlClient);
}
export declare class CorePassportNamespace {
    private readonly _client;
    readonly login: CorePassportLoginNamespace;
    readonly changePassword: CorePassportChangePasswordNamespace;
    readonly enter: CorePassportEnterNamespace;
    readonly user: CorePassportUserNamespace;
    constructor(_client: WlClient);
}
export declare class CoreNamespace {
    private readonly _client;
    readonly request: CoreRequestNamespace;
    readonly geo: CoreGeoNamespace;
    readonly google: CoreGoogleNamespace;
    readonly webSocket: CoreWebSocketNamespace;
    readonly sid: CoreSidNamespace;
    readonly captcha: CoreCaptchaNamespace;
    readonly drive: CoreDriveNamespace;
    readonly passport: CorePassportNamespace;
    constructor(_client: WlClient);
}
export declare class SocialMicrosoftNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes the association between a website client and a Microsoft account. */
    loginDelete(params?: SocialMicrosoftLoginDeleteParams): Promise<SocialMicrosoftLoginDeleteResponse>;
    /** Collects data for the Microsoft login button. */
    loginGet(params?: SocialMicrosoftLoginGetParams): Promise<SocialMicrosoftLoginGetResponse>;
    /** Signs a user in with Microsoft. */
    loginPost(params?: SocialMicrosoftLoginPostParams): Promise<SocialMicrosoftLoginPostResponse>;
}
export declare class SocialAppleLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes the association between a website client and the Apple account. Invalidates the tokens and associated client authorizations. */
    appleLoginDelete(params?: SocialAppleLoginAppleLoginDeleteParams): Promise<SocialAppleLoginAppleLoginDeleteResponse>;
    /** Signs user in with Apple. */
    appleLoginPost(params?: SocialAppleLoginAppleLoginPostParams): Promise<SocialAppleLoginAppleLoginPostResponse>;
}
export declare class SocialAppleNamespace {
    private readonly _client;
    readonly login: SocialAppleLoginNamespace;
    constructor(_client: WlClient);
}
export declare class SocialFacebookLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Authorizes user with facebook. */
    login(params?: SocialFacebookLoginLoginParams): Promise<SocialFacebookLoginLoginResponse>;
}
export declare class SocialFacebookNamespace {
    private readonly _client;
    readonly login: SocialFacebookLoginNamespace;
    constructor(_client: WlClient);
}
export declare class SocialGooglePlusNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Authorizes user with Google. */
    login(params?: SocialGooglePlusLoginParams): Promise<SocialGooglePlusLoginResponse>;
}
export declare class SocialGoogleNamespace {
    private readonly _client;
    readonly plus: SocialGooglePlusNamespace;
    constructor(_client: WlClient);
}
export declare class SocialNamespace {
    private readonly _client;
    readonly microsoft: SocialMicrosoftNamespace;
    readonly apple: SocialAppleNamespace;
    readonly facebook: SocialFacebookNamespace;
    readonly google: SocialGoogleNamespace;
    constructor(_client: WlClient);
}
export declare class WlScheduleClassListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** This method is a modified Get method `get()`. The difference is as follows: */
    classList68(params?: WlScheduleClassListClassList68Params): Promise<WlScheduleClassListClassList68Response>;
    /** Retrieves a list of classes and class information for the given business and date range. */
    /** @deprecated */
    classList(params?: WlScheduleClassListClassListParams): Promise<WlScheduleClassListClassListResponse>;
}
export declare class WlScheduleTabNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about tabs for page "Book now". */
    tab(params?: WlScheduleTabTabParams): Promise<WlScheduleTabTabResponse>;
}
export declare class WlScheduleClassViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about class. */
    classViewGet(params?: WlScheduleClassViewClassViewGetParams): Promise<WlScheduleClassViewClassViewGetResponse>;
    /** Retrieves information about classes. */
    classViewPost(params?: WlScheduleClassViewClassViewPostParams): Promise<WlScheduleClassViewClassViewPostResponse>;
}
export declare class WlSchedulePageNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about one element of schedule. */
    pageElement(params?: WlSchedulePagePageElementParams): Promise<WlSchedulePagePageElementResponse>;
    /** Retrieves items of schedule for the client. */
    pageList(params?: WlSchedulePagePageListParams): Promise<WlSchedulePagePageListResponse>;
}
export declare class WlScheduleScheduleListStaffAppNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets schedule of business `k_business` for day `dt_date`. */
    scheduleList(params?: WlScheduleScheduleListStaffAppScheduleListParams): Promise<WlScheduleScheduleListStaffAppScheduleListResponse>;
    /** Gets schedule of business [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json) for day [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json). */
    scheduleListByToken(params?: WlScheduleScheduleListStaffAppScheduleListByTokenParams): Promise<WlScheduleScheduleListStaffAppScheduleListByTokenResponse>;
}
export declare class WlScheduleScheduleListNamespace {
    private readonly _client;
    readonly staffApp: WlScheduleScheduleListStaffAppNamespace;
    constructor(_client: WlClient);
}
export declare class WlScheduleNamespace {
    private readonly _client;
    readonly classList: WlScheduleClassListNamespace;
    readonly tab: WlScheduleTabNamespace;
    readonly classView: WlScheduleClassViewNamespace;
    readonly page: WlSchedulePageNamespace;
    readonly scheduleList: WlScheduleScheduleListNamespace;
    constructor(_client: WlClient);
    /** Cancels session for the client. */
    cancelGet(params?: WlScheduleCancelGetParams): Promise<WlScheduleCancelGetResponse>;
    /** Cancels session for the client. This method is an alias for partners using the API or SDK. */
    cancelPost(params?: WlScheduleCancelPostParams): Promise<WlScheduleCancelPostResponse>;
    /** Finds the nearest class session that can be booked by the current user. */
    scheduleAvailableDate(params?: WlScheduleScheduleAvailableDateParams): Promise<WlScheduleScheduleAvailableDateResponse>;
}
export declare class WlVisitNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets visit status. */
    visitStatusGet(params?: WlVisitVisitStatusGetParams): Promise<WlVisitVisitStatusGetResponse>;
    /** Changes visit status. */
    visitStatusPost(params?: WlVisitVisitStatusPostParams): Promise<WlVisitVisitStatusPostResponse>;
}
export declare class WlLocationFlagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if user `uid` is flagged in location `k_location` or each of users `a_uid` is flagged in location `k_location`. */
    flag(params?: WlLocationFlagFlagParams): Promise<WlLocationFlagFlagResponse>;
}
export declare class WlLocationWorkTimeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves working hours of the location. */
    locationWorkTime(params?: WlLocationWorkTimeLocationWorkTimeParams): Promise<WlLocationWorkTimeLocationWorkTimeResponse>;
}
export declare class WlLocationViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns detailed information about the specified location. */
    view(params?: WlLocationViewViewParams): Promise<WlLocationViewViewResponse>;
}
export declare class WlLocationFacilityNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of all items for the given Sid class. */
    facilitySid(params?: WlLocationFacilityFacilitySidParams): Promise<WlLocationFacilityFacilitySidResponse>;
}
export declare class WlLocationNamespace {
    private readonly _client;
    readonly flag: WlLocationFlagNamespace;
    readonly workTime: WlLocationWorkTimeNamespace;
    readonly view: WlLocationViewNamespace;
    readonly facility: WlLocationFacilityNamespace;
    constructor(_client: WlClient);
    /** Gets location lists for a bulk of businesses. */
    listBulk(params?: WlLocationListBulkParams): Promise<WlLocationListBulkResponse>;
    /** Creates new location or edits the existing location. */
    location(params?: WlLocationLocationParams): Promise<WlLocationLocationResponse>;
    /** Retrieves a list of locations for the given business. */
    list(params?: WlLocationListParams): Promise<WlLocationListResponse>;
}
export declare class WlProfileEditEmailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if specified email address is busy. */
    editEmail67Get(params?: WlProfileEditEmailEditEmail67GetParams): Promise<WlProfileEditEmailEditEmail67GetResponse>;
    /** Adds user to business. */
    editEmail67Post(params?: WlProfileEditEmailEditEmail67PostParams): Promise<WlProfileEditEmailEditEmail67PostResponse>;
    /** Checks if specified email address is busy. */
    /** @deprecated */
    editEmailGet(params?: WlProfileEditEmailEditEmailGetParams): Promise<WlProfileEditEmailEditEmailGetResponse>;
    /** Adds user to business. */
    /** @deprecated */
    editEmailPost(params?: WlProfileEditEmailEditEmailPostParams): Promise<WlProfileEditEmailEditEmailPostResponse>;
}
export declare class WlProfileEditNamespace {
    private readonly _client;
    readonly email: WlProfileEditEmailNamespace;
    constructor(_client: WlClient);
    /** Returns current user profile information. */
    editGet(params?: WlProfileEditEditGetParams): Promise<WlProfileEditEditGetResponse>;
    /** Creates a new user. */
    editPost(params?: WlProfileEditEditPostParams): Promise<WlProfileEditEditPostResponse>;
    /** Updates values of profile fields. */
    editPut(params?: WlProfileEditEditPutParams): Promise<WlProfileEditEditPutResponse>;
    /** Creates a new user. */
    create(params?: WlProfileEditCreateParams): Promise<WlProfileEditCreateResponse>;
    /** Returns current user profile information. */
    editByTokenGet(params?: WlProfileEditEditByTokenGetParams): Promise<WlProfileEditEditByTokenGetResponse>;
    /** Creates a new user. */
    editByTokenPost(params?: WlProfileEditEditByTokenPostParams): Promise<WlProfileEditEditByTokenPostResponse>;
    /** Updates values of profile fields. */
    editByTokenPut(params?: WlProfileEditEditByTokenPutParams): Promise<WlProfileEditEditByTokenPutResponse>;
    /** Saves new password for user. */
    editPassword(params?: WlProfileEditEditPasswordParams): Promise<WlProfileEditEditPasswordResponse>;
}
export declare class WlProfileAttachNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of file attachments for the specified client in the given business. */
    attachList(params?: WlProfileAttachAttachListParams): Promise<WlProfileAttachAttachListResponse>;
    /** Deletes the attachment. */
    attachElementDelete(params?: WlProfileAttachAttachElementDeleteParams): Promise<WlProfileAttachAttachElementDeleteResponse>;
    /** Gets the data for the attachment editing form. */
    attachElementGet(params?: WlProfileAttachAttachElementGetParams): Promise<WlProfileAttachAttachElementGetResponse>;
    /** In case the attachment key is not specified, it adds a new attachment. In case the attachment key is specified, edits the attachment. */
    attachElementPost(params?: WlProfileAttachAttachElementPostParams): Promise<WlProfileAttachAttachElementPostResponse>;
}
export declare class WlProfilePurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about 1 purchase item. */
    /** @deprecated */
    purchaseElement(params?: WlProfilePurchasePurchaseElementParams): Promise<WlProfilePurchasePurchaseElementResponse>;
    /** Retrieves a list of user's purchase items to show in user profile. */
    /** @deprecated */
    purchaseList(params?: WlProfilePurchasePurchaseListParams): Promise<WlProfilePurchasePurchaseListResponse>;
}
export declare class WlProfilePurchaseListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of user's purchase items to show in user profile. */
    purchaseList(params?: WlProfilePurchaseListPurchaseListParams): Promise<WlProfilePurchaseListPurchaseListResponse>;
    /** Retrieves information about 1 purchase item. */
    purchaseListElement(params?: WlProfilePurchaseListPurchaseListElementParams): Promise<WlProfilePurchaseListPurchaseListElementResponse>;
}
export declare class WlProfileAlertNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of notices to show in user's profile. */
    alert(params?: WlProfileAlertAlertParams): Promise<WlProfileAlertAlertResponse>;
    /** Deletes existing note. */
    alertEditDelete(params?: WlProfileAlertAlertEditDeleteParams): Promise<WlProfileAlertAlertEditDeleteResponse>;
    /** Retrieves login note data. */
    alertEditGet(params?: WlProfileAlertAlertEditGetParams): Promise<WlProfileAlertAlertEditGetResponse>;
    /** Creates new text note or updates the existing one. */
    alertEditPost(params?: WlProfileAlertAlertEditPostParams): Promise<WlProfileAlertAlertEditPostResponse>;
}
export declare class WlProfileTermNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns online waiver information for the specified user and business. */
    term(params?: WlProfileTermTermParams): Promise<WlProfileTermTermResponse>;
}
export declare class WlProfileAttendanceScheduleFrontendNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves lifetime visit totals. */
    lifetimeTotals(params?: WlProfileAttendanceScheduleFrontendLifetimeTotalsParams): Promise<WlProfileAttendanceScheduleFrontendLifetimeTotalsResponse>;
}
export declare class WlProfileAttendanceScheduleNamespace {
    private readonly _client;
    readonly frontend: WlProfileAttendanceScheduleFrontendNamespace;
    constructor(_client: WlClient);
}
export declare class WlProfileAttendanceNamespace {
    private readonly _client;
    readonly schedule: WlProfileAttendanceScheduleNamespace;
    constructor(_client: WlClient);
    /** Returns a list of visits that overlap with the specified service, class, resource, or time data. */
    attendanceOverlap(params?: WlProfileAttendanceAttendanceOverlapParams): Promise<WlProfileAttendanceAttendanceOverlapResponse>;
}
export declare class WlProfileSettingNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of user settings and other additional information for the settings page. */
    settingGet(params?: WlProfileSettingSettingGetParams): Promise<WlProfileSettingSettingGetResponse>;
    /** Saves the user's notification settings for the specified business. */
    settingPost(params?: WlProfileSettingSettingPostParams): Promise<WlProfileSettingSettingPostResponse>;
}
export declare class WlProfileActivityNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about activity item. */
    element(params?: WlProfileActivityElementParams): Promise<WlProfileActivityElementResponse>;
    /** Retrieves a list of activity items to show in user profile. */
    list(params?: WlProfileActivityListParams): Promise<WlProfileActivityListResponse>;
}
export declare class WlProfileContractNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns contract information for the specified purchase option. */
    contractGet(params?: WlProfileContractContractGetParams): Promise<WlProfileContractContractGetResponse>;
    /** Completes a sale of a Purchase Option requiring a contract by submitting the signed contract. */
    contractPost(params?: WlProfileContractContractPostParams): Promise<WlProfileContractContractPostResponse>;
}
export declare class WlProfileFormResponseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the lists of completed and pending quiz responses for the specified user and business. */
    responseList(params?: WlProfileFormResponseResponseListParams): Promise<WlProfileFormResponseResponseListResponse>;
}
export declare class WlProfileFormNamespace {
    private readonly _client;
    readonly response: WlProfileFormResponseNamespace;
    constructor(_client: WlClient);
}
export declare class WlProfileNamespace {
    private readonly _client;
    readonly edit: WlProfileEditNamespace;
    readonly attach: WlProfileAttachNamespace;
    readonly purchase: WlProfilePurchaseNamespace;
    readonly purchaseList: WlProfilePurchaseListNamespace;
    readonly alert: WlProfileAlertNamespace;
    readonly term: WlProfileTermNamespace;
    readonly attendance: WlProfileAttendanceNamespace;
    readonly setting: WlProfileSettingNamespace;
    readonly activity: WlProfileActivityNamespace;
    readonly contract: WlProfileContractNamespace;
    readonly form: WlProfileFormNamespace;
    constructor(_client: WlClient);
    /** Creates a new client profile with the provided personal details in the specified business. */
    profileCreate(params?: WlProfileProfileCreateParams): Promise<WlProfileProfileCreateResponse>;
}
export declare class WlEventBookEventViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about event item. */
    element(params?: WlEventBookEventViewElementParams): Promise<WlEventBookEventViewElementResponse>;
}
export declare class WlEventBookEventListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of events. */
    list(params?: WlEventBookEventListListParams): Promise<WlEventBookEventListListResponse>;
}
export declare class WlEventBookNamespace {
    private readonly _client;
    readonly eventView: WlEventBookEventViewNamespace;
    readonly eventList: WlEventBookEventListNamespace;
    constructor(_client: WlClient);
}
export declare class WlEventNamespace {
    private readonly _client;
    readonly book: WlEventBookNamespace;
    constructor(_client: WlClient);
    /** Returns the list of events matching the specified filter parameters. */
    eventListGet(params?: WlEventEventListGetParams): Promise<WlEventEventListGetResponse>;
    /** Resets the event list cache for the specified business and user. */
    eventListPut(params?: WlEventEventListPutParams): Promise<WlEventEventListPutResponse>;
    /** Cancels book of event `k_class`. */
    eventCancelWhole(params?: WlEventEventCancelWholeParams): Promise<WlEventEventCancelWholeResponse>;
}
export declare class WlBusinessPartnerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the partner URL for the specified business. */
    partnerCodeGet(params?: WlBusinessPartnerPartnerCodeGetParams): Promise<WlBusinessPartnerPartnerCodeGetResponse>;
    /** Updates partner url for a business that takes part in the partner program. */
    partnerCodePost(params?: WlBusinessPartnerPartnerCodePostParams): Promise<WlBusinessPartnerPartnerCodePostResponse>;
    /** Returns partner settings for the business identified by the given partner code. */
    partnerSettings(params?: WlBusinessPartnerPartnerSettingsParams): Promise<WlBusinessPartnerPartnerSettingsResponse>;
}
export declare class WlBusinessAccountSubscriptionAchieveNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the Achieve subscription plan flags (free and white-label) for the given business. */
    achieveSubscription(params?: WlBusinessAccountSubscriptionAchieveAchieveSubscriptionParams): Promise<WlBusinessAccountSubscriptionAchieveAchieveSubscriptionResponse>;
}
export declare class WlBusinessAccountSubscriptionNamespace {
    private readonly _client;
    readonly achieve: WlBusinessAccountSubscriptionAchieveNamespace;
    constructor(_client: WlClient);
    /** Gets information about subscription. */
    subscriptionInfo(params?: WlBusinessAccountSubscriptionSubscriptionInfoParams): Promise<WlBusinessAccountSubscriptionSubscriptionInfoResponse>;
}
export declare class WlBusinessAccountNamespace {
    private readonly _client;
    readonly subscription: WlBusinessAccountSubscriptionNamespace;
    constructor(_client: WlClient);
    /** Generates list of active business keys for the same region as the requesting user (proper permissions required). */
    businessAccount(params?: WlBusinessAccountBusinessAccountParams): Promise<WlBusinessAccountBusinessAccountResponse>;
}
export declare class WlBusinessClaimNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if the email or phone number has already been used for a trial account or not. */
    businessClaimGet(params?: WlBusinessClaimBusinessClaimGetParams): Promise<WlBusinessClaimBusinessClaimGetResponse>;
    /** Completes the verification process of the trial business. */
    businessClaimPost(params?: WlBusinessClaimBusinessClaimPostParams): Promise<WlBusinessClaimBusinessClaimPostResponse>;
    /** Saves the Self-Setup wizard form data in the business claim log. */
    businessClaimPut(params?: WlBusinessClaimBusinessClaimPutParams): Promise<WlBusinessClaimBusinessClaimPutResponse>;
}
export declare class WlBusinessDesignNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** API method to get business design data. */
    businessDesign(params?: WlBusinessDesignBusinessDesignParams): Promise<WlBusinessDesignBusinessDesignResponse>;
}
export declare class WlBusinessLeadNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves a new business lead referral record submitted through the Partner Program. */
    businessLead(params?: WlBusinessLeadBusinessLeadParams): Promise<WlBusinessLeadBusinessLeadResponse>;
}
export declare class WlBusinessPhoneNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes business phone number from the system. */
    phoneDelete(params?: WlBusinessPhonePhoneDeleteParams): Promise<WlBusinessPhonePhoneDeleteResponse>;
    /** Returns phone number(in locale format) of the business, if phone number does not exist returns empty line. */
    phoneGet(params?: WlBusinessPhonePhoneGetParams): Promise<WlBusinessPhonePhoneGetResponse>;
    /** Registers business phone number in system. */
    phonePost(params?: WlBusinessPhonePhonePostParams): Promise<WlBusinessPhonePhonePostResponse>;
}
export declare class WlBusinessSearchNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Searches for businesses by name and email address and returns matching business keys. */
    businessSearchUser(params?: WlBusinessSearchBusinessSearchUserParams): Promise<WlBusinessSearchBusinessSearchUserResponse>;
    /** Searches for businesses by name and returns matching business keys. */
    businessSearch(params?: WlBusinessSearchBusinessSearchParams): Promise<WlBusinessSearchBusinessSearchResponse>;
}
export declare class WlBusinessConfigNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about a business config. */
    businessConfig(params?: WlBusinessConfigBusinessConfigParams): Promise<WlBusinessConfigBusinessConfigResponse>;
}
export declare class WlBusinessAmazonRegionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the Amazon region ID for each of the requested business keys. */
    amazonRegion(params?: WlBusinessAmazonRegionAmazonRegionParams): Promise<WlBusinessAmazonRegionAmazonRegionResponse>;
}
export declare class WlBusinessAuthorizePartnerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Grants or denies access to business location for a partner. */
    authorizePartner(params?: WlBusinessAuthorizePartnerAuthorizePartnerParams): Promise<WlBusinessAuthorizePartnerAuthorizePartnerResponse>;
}
export declare class WlBusinessSelectNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs checks and generates a list of businesses according to a given configuration. */
    businessSelect(params?: WlBusinessSelectBusinessSelectParams): Promise<WlBusinessSelectBusinessSelectResponse>;
}
export declare class WlBusinessTypeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of available business types with their categories and images. */
    businessTypeList(params?: WlBusinessTypeBusinessTypeListParams): Promise<WlBusinessTypeBusinessTypeListResponse>;
}
export declare class WlBusinessWaiverNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the business waiver text rendered as HTML with user-specific variables substituted. */
    waiver(params?: WlBusinessWaiverWaiverParams): Promise<WlBusinessWaiverWaiverResponse>;
}
export declare class WlBusinessAuthorizeSupportResponseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Grants or denies access to business location for staff member. */
    response(params?: WlBusinessAuthorizeSupportResponseResponseParams): Promise<WlBusinessAuthorizeSupportResponseResponseResponse>;
}
export declare class WlBusinessAuthorizeSupportNamespace {
    private readonly _client;
    readonly response: WlBusinessAuthorizeSupportResponseNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessFranchiseLocationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns country, region, state, city and location lists of the franchisor. */
    businessFranchiseLocation(params?: WlBusinessFranchiseLocationBusinessFranchiseLocationParams): Promise<WlBusinessFranchiseLocationBusinessFranchiseLocationResponse>;
}
export declare class WlBusinessFranchiseNamespace {
    private readonly _client;
    readonly location: WlBusinessFranchiseLocationNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessRewardConfigNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the reward program configuration for the specified business. */
    rewardConfigGet(params?: WlBusinessRewardConfigRewardConfigGetParams): Promise<WlBusinessRewardConfigRewardConfigGetResponse>;
    /** Updates the reward program enabled or disabled state for the specified business. */
    rewardConfigPost(params?: WlBusinessRewardConfigRewardConfigPostParams): Promise<WlBusinessRewardConfigRewardConfigPostResponse>;
}
export declare class WlBusinessRewardNamespace {
    private readonly _client;
    readonly config: WlBusinessRewardConfigNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessUserSubscribeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about if user is subscribed on specified business or not. */
    subscribeGet(params?: WlBusinessUserSubscribeSubscribeGetParams): Promise<WlBusinessUserSubscribeSubscribeGetResponse>;
    /** Subscribes or unsubscribes user on specified business. */
    subscribePut(params?: WlBusinessUserSubscribeSubscribePutParams): Promise<WlBusinessUserSubscribeSubscribePutResponse>;
}
export declare class WlBusinessUserNamespace {
    private readonly _client;
    readonly subscribe: WlBusinessUserSubscribeNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessNamespace {
    private readonly _client;
    readonly partner: WlBusinessPartnerNamespace;
    readonly account: WlBusinessAccountNamespace;
    readonly claim: WlBusinessClaimNamespace;
    readonly design: WlBusinessDesignNamespace;
    readonly lead: WlBusinessLeadNamespace;
    readonly phone: WlBusinessPhoneNamespace;
    readonly search: WlBusinessSearchNamespace;
    readonly config: WlBusinessConfigNamespace;
    readonly amazonRegion: WlBusinessAmazonRegionNamespace;
    readonly authorizePartner: WlBusinessAuthorizePartnerNamespace;
    readonly select: WlBusinessSelectNamespace;
    readonly type: WlBusinessTypeNamespace;
    readonly waiver: WlBusinessWaiverNamespace;
    readonly authorizeSupport: WlBusinessAuthorizeSupportNamespace;
    readonly franchise: WlBusinessFranchiseNamespace;
    readonly reward: WlBusinessRewardNamespace;
    readonly user: WlBusinessUserNamespace;
    constructor(_client: WlClient);
    /** Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo. */
    data(params?: WlBusinessDataParams): Promise<WlBusinessDataResponse>;
    /** Creates new business. */
    businessPost(params?: WlBusinessBusinessPostParams): Promise<WlBusinessBusinessPostResponse>;
    /** Claims business. */
    businessPut(params?: WlBusinessBusinessPutParams): Promise<WlBusinessBusinessPutResponse>;
    /** Gets information about businesses where given user is a staff member. */
    businessAccess(params?: WlBusinessBusinessAccessParams): Promise<WlBusinessBusinessAccessResponse>;
}
export declare class WlReportNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets data of required report. */
    data(params?: WlReportDataParams): Promise<WlReportDataResponse>;
    /** Checks access to given report. */
    access(params?: WlReportAccessParams): Promise<WlReportAccessResponse>;
    /** Gets data of required report collection. */
    pageData(params?: WlReportPageDataParams): Promise<WlReportPageDataResponse>;
}
export declare class WlCollectorNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a list of client debts for the specified business within the given date range. */
    debtList(params?: WlCollectorDebtListParams): Promise<WlCollectorDebtListResponse>;
    /** Registers a debt payment made outside WellnessLiving and applies a credit to the client's account balance. */
    debtPay(params?: WlCollectorDebtPayParams): Promise<WlCollectorDebtPayResponse>;
    /** Returns a list of debt payment transactions for the specified business within the given date range. */
    debtTransaction(params?: WlCollectorDebtTransactionParams): Promise<WlCollectorDebtTransactionResponse>;
}
export declare class WlAnnouncementNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a list of announcements for the given business and location. */
    announcementList(params?: WlAnnouncementAnnouncementListParams): Promise<WlAnnouncementAnnouncementListResponse>;
}
export declare class WlLeadSourceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of Lead Sources. */
    leadSourceList(params?: WlLeadSourceLeadSourceListParams): Promise<WlLeadSourceLeadSourceListResponse>;
    /** Deletes custom source lead. */
    leadSourceElementDelete(params?: WlLeadSourceLeadSourceElementDeleteParams): Promise<WlLeadSourceLeadSourceElementDeleteResponse>;
    /** Creates or edits a custom source lead. */
    /** @deprecated */
    leadSourceElementPost(params?: WlLeadSourceLeadSourceElementPostParams): Promise<WlLeadSourceLeadSourceElementPostResponse>;
    /** Adds one lead source. */
    leadSourceElementPut(params?: WlLeadSourceLeadSourceElementPutParams): Promise<WlLeadSourceLeadSourceElementPutResponse>;
}
export declare class WlLeadNamespace {
    private readonly _client;
    readonly source: WlLeadSourceNamespace;
    constructor(_client: WlClient);
    /** Gets information necessary to display "Lead capture" widget. */
    leadGet(params?: WlLeadLeadGetParams): Promise<WlLeadLeadGetResponse>;
    /** Saves new user via "Lead capture". */
    leadPost(params?: WlLeadLeadPostParams): Promise<WlLeadLeadPostResponse>;
}
export declare class WlPromotionIndexNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets a list of packages/passes/memberships. */
    promotionIndex(params?: WlPromotionIndexPromotionIndexParams): Promise<WlPromotionIndexPromotionIndexResponse>;
}
export declare class WlPromotionNamespace {
    private readonly _client;
    readonly index: WlPromotionIndexNamespace;
    constructor(_client: WlClient);
    /** Returns promotion list of the specified business. */
    promotionList(params?: WlPromotionPromotionListParams): Promise<WlPromotionPromotionListResponse>;
    /** Soft-deletes the specified promotion if it has no associated sales. */
    promotionDelete(params?: WlPromotionPromotionDeleteParams): Promise<WlPromotionPromotionDeleteResponse>;
    /** Returns promotion by the specified business and promotion keys. */
    promotionGet(params?: WlPromotionPromotionGetParams): Promise<WlPromotionPromotionGetResponse>;
    /** Saves promotion data. */
    promotionPost(params?: WlPromotionPromotionPostParams): Promise<WlPromotionPromotionPostResponse>;
}
export declare class WlLoginMailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if specified user exists in specified business. */
    mailUse(params?: WlLoginMailMailUseParams): Promise<WlLoginMailMailUseResponse>;
}
export declare class WlLoginPromotionConvertNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes conversion and reset the after expiration setting to previous state. */
    convertDelete(params?: WlLoginPromotionConvertConvertDeleteParams): Promise<WlLoginPromotionConvertConvertDeleteResponse>;
    /** Returns the current conversion configuration and the list of promotions available to convert to. */
    convertGet(params?: WlLoginPromotionConvertConvertGetParams): Promise<WlLoginPromotionConvertConvertGetResponse>;
    /** Creates or updates conversion form data for the login promotion. Performs all necessary checks and apply changes. */
    convertPost(params?: WlLoginPromotionConvertConvertPostParams): Promise<WlLoginPromotionConvertConvertPostResponse>;
}
export declare class WlLoginPromotionGuestPassClaimNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Claims the guest pass invitation for the current user and accepts it. */
    claim(params?: WlLoginPromotionGuestPassClaimClaimParams): Promise<WlLoginPromotionGuestPassClaimClaimResponse>;
}
export declare class WlLoginPromotionGuestPassInviteNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Revokes a guest pass invitation. */
    inviteDelete(params?: WlLoginPromotionGuestPassInviteInviteDeleteParams): Promise<WlLoginPromotionGuestPassInviteInviteDeleteResponse>;
    /** Sends a reminder notification for a guest pass invitation. */
    invitePut(params?: WlLoginPromotionGuestPassInviteInvitePutParams): Promise<WlLoginPromotionGuestPassInviteInvitePutResponse>;
    /** Returns a list of guest pass invitations for the given membership or user. */
    inviteListGet(params?: WlLoginPromotionGuestPassInviteInviteListGetParams): Promise<WlLoginPromotionGuestPassInviteInviteListGetResponse>;
    /** Sends a guest pass invitation to a user. */
    inviteListPost(params?: WlLoginPromotionGuestPassInviteInviteListPostParams): Promise<WlLoginPromotionGuestPassInviteInviteListPostResponse>;
}
export declare class WlLoginPromotionGuestPassApplyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Applies the guest pass of the specified login promotion to the attendee's visit. */
    apply(params?: WlLoginPromotionGuestPassApplyApplyParams): Promise<WlLoginPromotionGuestPassApplyApplyResponse>;
}
export declare class WlLoginPromotionGuestPassNamespace {
    private readonly _client;
    readonly claim: WlLoginPromotionGuestPassClaimNamespace;
    readonly invite: WlLoginPromotionGuestPassInviteNamespace;
    readonly apply: WlLoginPromotionGuestPassApplyNamespace;
    constructor(_client: WlClient);
    /** Retrieves guest passes for a specific client. */
    guestPassList(params?: WlLoginPromotionGuestPassGuestPassListParams): Promise<WlLoginPromotionGuestPassGuestPassListResponse>;
    /** Retrieves guest pass information for a client's membership. */
    guestPassGet(params?: WlLoginPromotionGuestPassGuestPassGetParams): Promise<WlLoginPromotionGuestPassGuestPassGetResponse>;
    /** Updates the guest pass remaining usages for a client's membership. */
    guestPassPut(params?: WlLoginPromotionGuestPassGuestPassPutParams): Promise<WlLoginPromotionGuestPassGuestPassPutResponse>;
}
export declare class WlLoginPromotionNamespace {
    private readonly _client;
    readonly convert: WlLoginPromotionConvertNamespace;
    readonly guestPass: WlLoginPromotionGuestPassNamespace;
    constructor(_client: WlClient);
    /** Deletes specified promotion payment pause. */
    promotionPayPauseDelete(params?: WlLoginPromotionPromotionPayPauseDeleteParams): Promise<WlLoginPromotionPromotionPayPauseDeleteResponse>;
    /** Returns promotion payment pause data: all hold periods when `is_list` is `true`,  the specified hold period when `k_promotion_pay_pause` is provided, or the currently  active hold period otherwise. */
    promotionPayPauseGet(params?: WlLoginPromotionPromotionPayPauseGetParams): Promise<WlLoginPromotionPromotionPayPauseGetResponse>;
    /** Adds or updates a payment pause period for promotion. */
    promotionPayPausePost(params?: WlLoginPromotionPromotionPayPausePostParams): Promise<WlLoginPromotionPromotionPayPausePostResponse>;
    /** Updates a promotion payment pause period. */
    promotionPayPausePut(params?: WlLoginPromotionPromotionPayPausePutParams): Promise<WlLoginPromotionPromotionPayPausePutResponse>;
}
export declare class WlLoginMemberDynamicIdNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the member's barcode and its expiry time for the specified business and user. */
    dynamicId(params?: WlLoginMemberDynamicIdDynamicIdParams): Promise<WlLoginMemberDynamicIdDynamicIdResponse>;
}
export declare class WlLoginMemberNamespace {
    private readonly _client;
    readonly dynamicId: WlLoginMemberDynamicIdNamespace;
    constructor(_client: WlClient);
    /** Checks whether anything prevents the user from using the business and returns any blocking conditions found. */
    /** @deprecated */
    memberValidate(params?: WlLoginMemberMemberValidateParams): Promise<WlLoginMemberMemberValidateResponse>;
    /** Returns the list of businesses where the specified user is an active member. */
    memberGet(params?: WlLoginMemberMemberGetParams): Promise<WlLoginMemberMemberGetResponse>;
    /** Adds a user into a business. */
    memberPost(params?: WlLoginMemberMemberPostParams): Promise<WlLoginMemberMemberPostResponse>;
    /** Gets client ID for a specific client in a business. */
    loginMemberGet(params?: WlLoginMemberLoginMemberGetParams): Promise<WlLoginMemberLoginMemberGetResponse>;
    /** Updates client ID for a specific client in a business. */
    loginMemberPost(params?: WlLoginMemberLoginMemberPostParams): Promise<WlLoginMemberLoginMemberPostResponse>;
    /** Checks whether anything prevents the user from using the business and returns details about missing required fields. */
    memberValidate63(params?: WlLoginMemberMemberValidate63Params): Promise<WlLoginMemberMemberValidate63Response>;
    /** Returns a paginated list of active member user keys for the specified business. */
    loginMemberListAll(params?: WlLoginMemberLoginMemberListAllParams): Promise<WlLoginMemberLoginMemberListAllResponse>;
}
export declare class WlLoginAddNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks required profile fields and, if complete, registers the existing user in the specified business. */
    mailUseOk(params?: WlLoginAddMailUseOkParams): Promise<WlLoginAddMailUseOkResponse>;
}
export declare class WlLoginAttendanceAddNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about ability of user to pay for given session in any ways. */
    addGet(params?: WlLoginAttendanceAddAddGetParams): Promise<WlLoginAttendanceAddAddGetResponse>;
    /** Adds client to attendance list. */
    addPost(params?: WlLoginAttendanceAddAddPostParams): Promise<WlLoginAttendanceAddAddPostResponse>;
}
export declare class WlLoginAttendanceNamespace {
    private readonly _client;
    readonly add: WlLoginAttendanceAddNamespace;
    constructor(_client: WlClient);
    /** Returns the attendance list for a class period or appointment session. */
    attendanceList(params?: WlLoginAttendanceAttendanceListParams): Promise<WlLoginAttendanceAttendanceListResponse>;
    /** Returns detailed information about a single class period, appointment, or asset session. */
    attendanceInfo(params?: WlLoginAttendanceAttendanceInfoParams): Promise<WlLoginAttendanceAttendanceInfoResponse>;
    /** Returns the attendance list for a class period or appointment session. */
    attendanceListByToken(params?: WlLoginAttendanceAttendanceListByTokenParams): Promise<WlLoginAttendanceAttendanceListByTokenResponse>;
    /** Returns detailed information about a single class period, appointment, or asset session. */
    attendanceInfoByToken(params?: WlLoginAttendanceAttendanceInfoByTokenParams): Promise<WlLoginAttendanceAttendanceInfoByTokenResponse>;
}
export declare class WlLoginSearchStaffAppNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs access checks and returns a list of users, depending on the search query. */
    list(params?: WlLoginSearchStaffAppListParams): Promise<WlLoginSearchStaffAppListResponse>;
}
export declare class WlLoginSearchNamespace {
    private readonly _client;
    readonly staffApp: WlLoginSearchStaffAppNamespace;
    constructor(_client: WlClient);
    /** Finds a user by their email or phone within the specified business. */
    concerto(params?: WlLoginSearchConcertoParams): Promise<WlLoginSearchConcertoResponse>;
}
export declare class WlLoginTypeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets a login types list of a business. */
    loginType(params?: WlLoginTypeLoginTypeParams): Promise<WlLoginTypeLoginTypeResponse>;
}
export declare class WlLoginPermissionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves the auto-renew setting for a purchased promotion. */
    permission(params?: WlLoginPermissionPermissionParams): Promise<WlLoginPermissionPermissionResponse>;
}
export declare class WlLoginAgreeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns text of business liability release if business has liability release and if user did not agree to this liability release. */
    agreeGet(params?: WlLoginAgreeAgreeGetParams): Promise<WlLoginAgreeAgreeGetResponse>;
    /** Saves the user's agreement to the online waiver. */
    agreePost(params?: WlLoginAgreeAgreePostParams): Promise<WlLoginAgreeAgreePostResponse>;
}
export declare class WlLoginCouponNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves the key and balance of a gift card by its code for the specified business. */
    coupon(params?: WlLoginCouponCouponParams): Promise<WlLoginCouponCouponResponse>;
}
export declare class WlLoginProductNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about products purchased by client. */
    product(params?: WlLoginProductProductParams): Promise<WlLoginProductProductResponse>;
}
export declare class WlLoginNamespace {
    private readonly _client;
    readonly mail: WlLoginMailNamespace;
    readonly promotion: WlLoginPromotionNamespace;
    readonly member: WlLoginMemberNamespace;
    readonly add: WlLoginAddNamespace;
    readonly attendance: WlLoginAttendanceNamespace;
    readonly search: WlLoginSearchNamespace;
    readonly type: WlLoginTypeNamespace;
    readonly permission: WlLoginPermissionNamespace;
    readonly agree: WlLoginAgreeNamespace;
    readonly coupon: WlLoginCouponNamespace;
    readonly product: WlLoginProductNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about user. */
    loginGet(params?: WlLoginLoginGetParams): Promise<WlLoginLoginGetResponse>;
    /** Retrieves information about a list of users. This is done via "post" method because only "post" allows large requests. */
    loginPost(params?: WlLoginLoginPostParams): Promise<WlLoginLoginPostResponse>;
}
export declare class WlQuizResponseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified quiz response or list of responses for the given business. */
    response65Delete(params?: WlQuizResponseResponse65DeleteParams): Promise<WlQuizResponseResponse65DeleteResponse>;
    /** Returns quiz response data including element answers, dates, and access information. */
    response65Get(params?: WlQuizResponseResponse65GetParams): Promise<WlQuizResponseResponse65GetResponse>;
    /** Saves a quiz response with the given element answers. */
    response65Post(params?: WlQuizResponseResponse65PostParams): Promise<WlQuizResponseResponse65PostResponse>;
    /** Validates, updates and reindex response information for associated user. */
    response65Put(params?: WlQuizResponseResponse65PutParams): Promise<WlQuizResponseResponse65PutResponse>;
    /** Deletes the specified quiz response or list of responses for the given business. */
    /** @deprecated */
    responseDelete(params?: WlQuizResponseResponseDeleteParams): Promise<WlQuizResponseResponseDeleteResponse>;
    /** Returns quiz response data including element answers, dates, and access information. */
    /** @deprecated */
    responseGet(params?: WlQuizResponseResponseGetParams): Promise<WlQuizResponseResponseGetResponse>;
    /** Saves a quiz response with the given element answers. */
    /** @deprecated */
    responsePost(params?: WlQuizResponseResponsePostParams): Promise<WlQuizResponseResponsePostResponse>;
    /** Validates, updates and reindex response information for associated user. */
    /** @deprecated */
    responsePut(params?: WlQuizResponseResponsePutParams): Promise<WlQuizResponseResponsePutResponse>;
}
export declare class WlQuizNamespace {
    private readonly _client;
    readonly response: WlQuizResponseNamespace;
    constructor(_client: WlClient);
    /** Deletes the quiz with the given key. */
    /** @deprecated */
    quizElementDelete(params?: WlQuizQuizElementDeleteParams): Promise<WlQuizQuizElementDeleteResponse>;
    /** Returns quiz element data including settings, elements, and access information for the given quiz. */
    /** @deprecated */
    quizElementGet(params?: WlQuizQuizElementGetParams): Promise<WlQuizQuizElementGetResponse>;
    /** Creates or updates a quiz with the given elements and settings. */
    /** @deprecated */
    quizElementPost(params?: WlQuizQuizElementPostParams): Promise<WlQuizQuizElementPostResponse>;
    /** Updates the active status of the given quiz. */
    /** @deprecated */
    quizElementPut(params?: WlQuizQuizElementPutParams): Promise<WlQuizQuizElementPutResponse>;
    /** Deletes the quiz with the given key. */
    quizElement72Delete(params?: WlQuizQuizElement72DeleteParams): Promise<WlQuizQuizElement72DeleteResponse>;
    /** Returns quiz element data including settings, elements, and access information for the given quiz. */
    quizElement72Get(params?: WlQuizQuizElement72GetParams): Promise<WlQuizQuizElement72GetResponse>;
    /** Creates or updates a quiz with the given elements and settings. */
    quizElement72Post(params?: WlQuizQuizElement72PostParams): Promise<WlQuizQuizElement72PostResponse>;
    /** Updates the active status of the given quiz. */
    quizElement72Put(params?: WlQuizQuizElement72PutParams): Promise<WlQuizQuizElement72PutResponse>;
}
export declare class WlVideoWatchNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Records the start of a video watch session for the current user. */
    watchPost(params?: WlVideoWatchWatchPostParams): Promise<WlVideoWatchWatchPostResponse>;
    /** Updates the watch progress (current position and total watched time) for an existing watch record. */
    watchPut(params?: WlVideoWatchWatchPutParams): Promise<WlVideoWatchWatchPutResponse>;
}
export declare class WlVideoCategoryNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified video category. */
    categoryElementDelete(params?: WlVideoCategoryCategoryElementDeleteParams): Promise<WlVideoCategoryCategoryElementDeleteResponse>;
    /** Returns the data for the specified video category. */
    categoryElementGet(params?: WlVideoCategoryCategoryElementGetParams): Promise<WlVideoCategoryCategoryElementGetResponse>;
    /** Creates or updates a video category. */
    categoryElementPut(params?: WlVideoCategoryCategoryElementPutParams): Promise<WlVideoCategoryCategoryElementPutResponse>;
    /** Returns the list of video categories for the business. */
    categoryListGet(params?: WlVideoCategoryCategoryListGetParams): Promise<WlVideoCategoryCategoryListGetResponse>;
    /** Updates the order of video categories. */
    categoryListPut(params?: WlVideoCategoryCategoryListPutParams): Promise<WlVideoCategoryCategoryListPutResponse>;
}
export declare class WlVideoLevelNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified video level. */
    levelDelete(params?: WlVideoLevelLevelDeleteParams): Promise<WlVideoLevelLevelDeleteResponse>;
    /** Creates a new video level. */
    levelPost(params?: WlVideoLevelLevelPostParams): Promise<WlVideoLevelLevelPostResponse>;
    /** Updates the specified video level. */
    levelPut(params?: WlVideoLevelLevelPutParams): Promise<WlVideoLevelLevelPutResponse>;
    /** Returns the list of video levels for the business. */
    levelListGet(params?: WlVideoLevelLevelListGetParams): Promise<WlVideoLevelLevelListGetResponse>;
    /** Updates the order of video levels. */
    levelListPut(params?: WlVideoLevelLevelListPutParams): Promise<WlVideoLevelLevelListPutResponse>;
}
export declare class WlVideoTagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified video tag. */
    tagDelete(params?: WlVideoTagTagDeleteParams): Promise<WlVideoTagTagDeleteResponse>;
    /** Creates a new video tag. */
    tagPost(params?: WlVideoTagTagPostParams): Promise<WlVideoTagTagPostResponse>;
    /** Updates the specified video tag. */
    tagPut(params?: WlVideoTagTagPutParams): Promise<WlVideoTagTagPutResponse>;
    /** Returns the list of video tags for the business. */
    tagList(params?: WlVideoTagTagListParams): Promise<WlVideoTagTagListResponse>;
}
export declare class WlVideoNamespace {
    private readonly _client;
    readonly watch: WlVideoWatchNamespace;
    readonly category: WlVideoCategoryNamespace;
    readonly level: WlVideoLevelNamespace;
    readonly tag: WlVideoTagNamespace;
    constructor(_client: WlClient);
    /** Deletes the specified video. */
    videoElementDelete(params?: WlVideoVideoElementDeleteParams): Promise<WlVideoVideoElementDeleteResponse>;
    /** Returns the data for the specified video. */
    videoElementGet(params?: WlVideoVideoElementGetParams): Promise<WlVideoVideoElementGetResponse>;
    /** Creates or updates a video for the specified business. */
    videoElementPost(params?: WlVideoVideoElementPostParams): Promise<WlVideoVideoElementPostResponse>;
    /** Validates video embed code. */
    videoElementPut(params?: WlVideoVideoElementPutParams): Promise<WlVideoVideoElementPutResponse>;
    /** Returns the list of videos for the specified business. */
    videoListGet(params?: WlVideoVideoListGetParams): Promise<WlVideoVideoListGetResponse>;
    /** Updates the custom sort order of videos for the specified business. */
    videoListPut(params?: WlVideoVideoListPutParams): Promise<WlVideoVideoListPutResponse>;
}
export declare class WlFitbuilderNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Notifies messengers with new information. */
    message(params?: WlFitbuilderMessageParams): Promise<WlFitbuilderMessageResponse>;
}
export declare class WlMailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends email. */
    sendMail(params?: WlMailSendMailParams): Promise<WlMailSendMailResponse>;
}
export declare class WlStaffPrivilegeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of privileges for the current user in the given business. */
    privilegeList(params?: WlStaffPrivilegePrivilegeListParams): Promise<WlStaffPrivilegePrivilegeListResponse>;
}
export declare class WlStaffStaffListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of staff members for the given business. */
    staffList(params?: WlStaffStaffListStaffListParams): Promise<WlStaffStaffListStaffListResponse>;
}
export declare class WlStaffStaffViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about staff. */
    /** @deprecated */
    staffView(params?: WlStaffStaffViewStaffViewParams): Promise<WlStaffStaffViewStaffViewResponse>;
    /** Retrieves information about staff. */
    staffView74(params?: WlStaffStaffViewStaffView74Params): Promise<WlStaffStaffViewStaffView74Response>;
}
export declare class WlStaffNamespace {
    private readonly _client;
    readonly privilege: WlStaffPrivilegeNamespace;
    readonly staffList: WlStaffStaffListNamespace;
    readonly staffView: WlStaffStaffViewNamespace;
    constructor(_client: WlClient);
    /** Update or create staff. */
    staffElement(params?: WlStaffStaffElementParams): Promise<WlStaffStaffElementResponse>;
}
export declare class WlSkinApplicationConnectNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Creates or updates the integration credentials for the given business application. */
    applicationConnect(params?: WlSkinApplicationConnectApplicationConnectParams): Promise<WlSkinApplicationConnectApplicationConnectResponse>;
}
export declare class WlSkinApplicationResourceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets application resources. */
    applicationResource(params?: WlSkinApplicationResourceApplicationResourceParams): Promise<WlSkinApplicationResourceApplicationResourceResponse>;
    /** Saves text metadata for the given business application. */
    applicationResourceMaterial(params?: WlSkinApplicationResourceApplicationResourceMaterialParams): Promise<WlSkinApplicationResourceApplicationResourceMaterialResponse>;
    /** Uploads image and file assets for the given business application. */
    applicationResourceUpload(params?: WlSkinApplicationResourceApplicationResourceUploadParams): Promise<WlSkinApplicationResourceApplicationResourceUploadResponse>;
}
export declare class WlSkinApplicationNamespace {
    private readonly _client;
    readonly connect: WlSkinApplicationConnectNamespace;
    readonly resource: WlSkinApplicationResourceNamespace;
    constructor(_client: WlClient);
    /** Reset customisation form of client application. */
    skinDelete(params?: WlSkinApplicationSkinDeleteParams): Promise<WlSkinApplicationSkinDeleteResponse>;
    /** Returns the application customisation skin data for the given business. */
    skinGet(params?: WlSkinApplicationSkinGetParams): Promise<WlSkinApplicationSkinGetResponse>;
}
export declare class WlSkinWidgetNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns widget skins grouped by widget type for the given business. */
    skinWidgetList(params?: WlSkinWidgetSkinWidgetListParams): Promise<WlSkinWidgetSkinWidgetListResponse>;
}
export declare class WlSkinNamespace {
    private readonly _client;
    readonly application: WlSkinApplicationNamespace;
    readonly widget: WlSkinWidgetNamespace;
    constructor(_client: WlClient);
    /** Deletes the existing widget. */
    skinForeignDelete(params?: WlSkinSkinForeignDeleteParams): Promise<WlSkinSkinForeignDeleteResponse>;
    /** Creates a new widget. */
    skinForeignPost(params?: WlSkinSkinForeignPostParams): Promise<WlSkinSkinForeignPostResponse>;
    /** Updates the existing widget. */
    skinForeignPut(params?: WlSkinSkinForeignPutParams): Promise<WlSkinSkinForeignPutResponse>;
}
export declare class WlTagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns tags of the specified business. */
    tagListGet(params?: WlTagTagListGetParams): Promise<WlTagTagListGetResponse>;
    /** Saves the list of tags. Can be used to create new tags or update existing ones. */
    tagListPost(params?: WlTagTagListPostParams): Promise<WlTagTagListPostResponse>;
}
export declare class WlTaxNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the title for the specified tax. */
    tax(params?: WlTaxTaxParams): Promise<WlTaxTaxResponse>;
    /** Returns taxes of the specified business. */
    taxList(params?: WlTaxTaxListParams): Promise<WlTaxTaxListResponse>;
}
export declare class WlReviewReviewListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes a review. */
    reviewElementDelete(params?: WlReviewReviewListReviewElementDeleteParams): Promise<WlReviewReviewListReviewElementDeleteResponse>;
    /** Retrieves information about review item. */
    reviewElementGet(params?: WlReviewReviewListReviewElementGetParams): Promise<WlReviewReviewListReviewElementGetResponse>;
    /** Retrieves a list of reviews. */
    reviewList(params?: WlReviewReviewListReviewListParams): Promise<WlReviewReviewListReviewListResponse>;
}
export declare class WlReviewNamespace {
    private readonly _client;
    readonly reviewList: WlReviewReviewListNamespace;
    constructor(_client: WlClient);
    /** Submits user's review. */
    review(params?: WlReviewReviewParams): Promise<WlReviewReviewResponse>;
    /** Updates the featured status of the given review for the business. */
    reviewFeature(params?: WlReviewReviewFeatureParams): Promise<WlReviewReviewFeatureResponse>;
    /** Saves the reply text and optional status update for the given review. */
    reviewReply(params?: WlReviewReviewReplyParams): Promise<WlReviewReviewReplyResponse>;
}
export declare class WlRankNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets belts list of a business. */
    rank(params?: WlRankRankParams): Promise<WlRankRankResponse>;
}
export declare class WlHolidayNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about holiday day of business/locations. */
    holiday(params?: WlHolidayHolidayParams): Promise<WlHolidayHolidayResponse>;
    /** Returns all holiday records for all locations of the specified business. */
    bulkBusinessHoliday(params?: WlHolidayBulkBusinessHolidayParams): Promise<WlHolidayBulkBusinessHolidayResponse>;
}
export declare class WlAppointmentEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Return data about appointment's add-ons. */
    addonUpdateGet(params?: WlAppointmentEditAddonUpdateGetParams): Promise<WlAppointmentEditAddonUpdateGetResponse>;
    /** Replaces the add-ons for the appointment with the provided list, optionally updating the appointment duration. */
    addonUpdatePut(params?: WlAppointmentEditAddonUpdatePutParams): Promise<WlAppointmentEditAddonUpdatePutResponse>;
}
export declare class WlAppointmentInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about appointment. */
    info(params?: WlAppointmentInfoInfoParams): Promise<WlAppointmentInfoInfoResponse>;
}
export declare class WlAppointmentRecentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of client's last booked services. */
    recentService(params?: WlAppointmentRecentRecentServiceParams): Promise<WlAppointmentRecentRecentServiceResponse>;
}
export declare class WlAppointmentBookServiceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about services in the current service category. */
    serviceList52(params?: WlAppointmentBookServiceServiceList52Params): Promise<WlAppointmentBookServiceServiceList52Response>;
    /** Retrieves a list of information about service categories on the appointment booking page. */
    category(params?: WlAppointmentBookServiceCategoryParams): Promise<WlAppointmentBookServiceCategoryResponse>;
    /** Retrieves information about services in the current service category. */
    /** @deprecated */
    serviceList(params?: WlAppointmentBookServiceServiceListParams): Promise<WlAppointmentBookServiceServiceListResponse>;
    /** Checks whether a service can be booked by the given client at the given date, throwing an exception if booking is restricted. */
    serviceCheck(params?: WlAppointmentBookServiceServiceCheckParams): Promise<WlAppointmentBookServiceServiceCheckResponse>;
}
export declare class WlAppointmentBookFinishNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Completes the appointment booking for one or more providers, optionally creating a new client. */
    finishMultiple(params?: WlAppointmentBookFinishFinishMultipleParams): Promise<WlAppointmentBookFinishFinishMultipleResponse>;
    /** Loads data to prepare client side to complete booking. */
    /** @deprecated */
    finishGet(params?: WlAppointmentBookFinishFinishGetParams): Promise<WlAppointmentBookFinishFinishGetResponse>;
    /** Completes the appointment booking and processes payment for the client. */
    /** @deprecated */
    finishPost(params?: WlAppointmentBookFinishFinishPostParams): Promise<WlAppointmentBookFinishFinishPostResponse>;
    /** Loads data to prepare client side to complete booking. */
    finish47Get(params?: WlAppointmentBookFinishFinish47GetParams): Promise<WlAppointmentBookFinishFinish47GetResponse>;
    /** Completes the appointment booking and logs variable counts for diagnostic purposes. */
    finish47Post(params?: WlAppointmentBookFinishFinish47PostParams): Promise<WlAppointmentBookFinishFinish47PostResponse>;
}
export declare class WlAppointmentBookPurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of information about available purchase options. */
    /** @deprecated */
    purchase(params?: WlAppointmentBookPurchasePurchaseParams): Promise<WlAppointmentBookPurchasePurchaseResponse>;
    /** Retrieves a list of information about available purchase options. */
    purchase72(params?: WlAppointmentBookPurchasePurchase72Params): Promise<WlAppointmentBookPurchasePurchase72Response>;
}
export declare class WlAppointmentBookScheduleNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of available appointment booking schedule. */
    /** @deprecated */
    dayTime(params?: WlAppointmentBookScheduleDayTimeParams): Promise<WlAppointmentBookScheduleDayTimeResponse>;
    /** Retrieves a list with all calendar days in specified period with available and unavailable appointment booking schedule. */
    /** @deprecated */
    calendar(params?: WlAppointmentBookScheduleCalendarParams): Promise<WlAppointmentBookScheduleCalendarResponse>;
    /** Finds and returns the next available date for appointment booking starting from the given date. */
    nextAvailableDay(params?: WlAppointmentBookScheduleNextAvailableDayParams): Promise<WlAppointmentBookScheduleNextAvailableDayResponse>;
}
export declare class WlAppointmentBookAssetServiceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves assets required for a service booking at the given date and time, including availability and busy status. */
    service(params?: WlAppointmentBookAssetServiceServiceParams): Promise<WlAppointmentBookAssetServiceServiceResponse>;
}
export declare class WlAppointmentBookAssetNamespace {
    private readonly _client;
    readonly service: WlAppointmentBookAssetServiceNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about assets in the current asset category. */
    assetList(params?: WlAppointmentBookAssetAssetListParams): Promise<WlAppointmentBookAssetAssetListResponse>;
    /** Retrieves a list of information about asset categories for the appointment booking page. */
    category(params?: WlAppointmentBookAssetCategoryParams): Promise<WlAppointmentBookAssetCategoryResponse>;
}
export declare class WlAppointmentBookPaymentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    /** @deprecated */
    paymentGet(params?: WlAppointmentBookPaymentPaymentGetParams): Promise<WlAppointmentBookPaymentPaymentGetResponse>;
    /** Allows to pay an appointment or appointment purchase option for the client. */
    /** @deprecated */
    paymentPost(params?: WlAppointmentBookPaymentPaymentPostParams): Promise<WlAppointmentBookPaymentPaymentPostResponse>;
    /** Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals. */
    paymentMultipleGet(params?: WlAppointmentBookPaymentPaymentMultipleGetParams): Promise<WlAppointmentBookPaymentPaymentMultipleGetResponse>;
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentMultiplePost(params?: WlAppointmentBookPaymentPaymentMultiplePostParams): Promise<WlAppointmentBookPaymentPaymentMultiplePostResponse>;
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    paymentPostGet(params?: WlAppointmentBookPaymentPaymentPostGetParams): Promise<WlAppointmentBookPaymentPaymentPostGetResponse>;
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentPostPost(params?: WlAppointmentBookPaymentPaymentPostPostParams): Promise<WlAppointmentBookPaymentPaymentPostPostResponse>;
}
export declare class WlAppointmentBookQuestionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves questions for the current service. */
    question(params?: WlAppointmentBookQuestionQuestionParams): Promise<WlAppointmentBookQuestionQuestionResponse>;
}
export declare class WlAppointmentBookStaffNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves an information about staff members for the current service. */
    list(params?: WlAppointmentBookStaffListParams): Promise<WlAppointmentBookStaffListResponse>;
}
export declare class WlAppointmentBookProductNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves list of available service add-ons. */
    product62(params?: WlAppointmentBookProductProduct62Params): Promise<WlAppointmentBookProductProduct62Response>;
    /** Retrieves list of available service add-ons. */
    product(params?: WlAppointmentBookProductProductParams): Promise<WlAppointmentBookProductProductResponse>;
}
export declare class WlAppointmentBookNamespace {
    private readonly _client;
    readonly service: WlAppointmentBookServiceNamespace;
    readonly finish: WlAppointmentBookFinishNamespace;
    readonly purchase: WlAppointmentBookPurchaseNamespace;
    readonly schedule: WlAppointmentBookScheduleNamespace;
    readonly asset: WlAppointmentBookAssetNamespace;
    readonly payment: WlAppointmentBookPaymentNamespace;
    readonly question: WlAppointmentBookQuestionNamespace;
    readonly staff: WlAppointmentBookStaffNamespace;
    readonly product: WlAppointmentBookProductNamespace;
    constructor(_client: WlClient);
}
export declare class WlAppointmentNamespace {
    private readonly _client;
    readonly edit: WlAppointmentEditNamespace;
    readonly info: WlAppointmentInfoNamespace;
    readonly recent: WlAppointmentRecentNamespace;
    readonly book: WlAppointmentBookNamespace;
    constructor(_client: WlClient);
}
export declare class WlBookProcessPurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns available purchase options, existing client promotions, session passes, and prizes for the specified session. */
    /** @deprecated */
    purchase(params?: WlBookProcessPurchasePurchaseParams): Promise<WlBookProcessPurchasePurchaseResponse>;
    /** Returns the pricing breakdown (totals, taxes, and discounts) for the given list of purchase items. */
    purchaseElementGroup(params?: WlBookProcessPurchasePurchaseElementGroupParams): Promise<WlBookProcessPurchasePurchaseElementGroupResponse>;
    /** Returns available purchase options for the specified session, decoding JSON-encoded group promotion and session inputs. */
    purchase56(params?: WlBookProcessPurchasePurchase56Params): Promise<WlBookProcessPurchasePurchase56Response>;
    /** Builds a single-item purchase list from the scalar input fields and delegates to the parent for price calculation. */
    purchaseElement(params?: WlBookProcessPurchasePurchaseElementParams): Promise<WlBookProcessPurchasePurchaseElementResponse>;
    /** Returns the pricing breakdown for a list of purchase items, applying applicable discounts and taxes. */
    purchaseElementList(params?: WlBookProcessPurchasePurchaseElementListParams): Promise<WlBookProcessPurchasePurchaseElementListResponse>;
}
export declare class WlBookProcessRelationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if user can book specified session. */
    relationGet(params?: WlBookProcessRelationRelationGetParams): Promise<WlBookProcessRelationRelationGetResponse>;
    /** Added new relative. */
    relationPost(params?: WlBookProcessRelationRelationPostParams): Promise<WlBookProcessRelationRelationPostResponse>;
}
export declare class WlBookProcessResourceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of available assets for the booking session, grouped by asset category. */
    /** @deprecated */
    resourceGet(params?: WlBookProcessResourceResourceGetParams): Promise<WlBookProcessResourceResourceGetResponse>;
    /** Saves the asset selection for the booking and attempts to book the session if no further steps are required. */
    /** @deprecated */
    resourcePost(params?: WlBookProcessResourceResourcePostParams): Promise<WlBookProcessResourceResourcePostResponse>;
    /** Returns available assets for the booking, decoding the JSON-encoded session input before delegating to the parent. */
    resource54Get(params?: WlBookProcessResourceResource54GetParams): Promise<WlBookProcessResourceResource54GetResponse>;
    /** Processes the asset selection step of the booking wizard, decoding the JSON-encoded session input before delegating to the parent. */
    resource54Post(params?: WlBookProcessResourceResource54PostParams): Promise<WlBookProcessResourceResource54PostResponse>;
}
export declare class WlBookProcessPaymentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Processes purchases and books sessions on the "Pay/Billing info" step of the booking wizard. */
    payment(params?: WlBookProcessPaymentPaymentParams): Promise<WlBookProcessPaymentPaymentResponse>;
}
export declare class WlBookProcessStoreNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Processes the "Purchase Options" step of the booking wizard, validates selections, and books the session when possible. */
    store(params?: WlBookProcessStoreStoreParams): Promise<WlBookProcessStoreStoreResponse>;
    /** Validates and distributes selected purchase options across all clients in the booking group. */
    storeGroup(params?: WlBookProcessStoreStoreGroupParams): Promise<WlBookProcessStoreStoreGroupResponse>;
}
export declare class WlBookProcessInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns class session details and booking information for the "Class and Location" step of the booking wizard. */
    /** @deprecated */
    infoGet(params?: WlBookProcessInfoInfoGetParams): Promise<WlBookProcessInfoInfoGetResponse>;
    /** Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session. */
    /** @deprecated */
    infoPost(params?: WlBookProcessInfoInfoPostParams): Promise<WlBookProcessInfoInfoPostResponse>;
    /** Returns class and location booking information, enriched with localized date and time for each session. */
    info54Get(params?: WlBookProcessInfoInfo54GetParams): Promise<WlBookProcessInfoInfo54GetResponse>;
    /** Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session. */
    info54Post(params?: WlBookProcessInfoInfo54PostParams): Promise<WlBookProcessInfoInfo54PostResponse>;
    /** Checks whether the user can complete booking wizard without additional steps. */
    /** @deprecated */
    infoCanCompleteGet(params?: WlBookProcessInfoInfoCanCompleteGetParams): Promise<WlBookProcessInfoInfoCanCompleteGetResponse>;
    /** Checks whether the user can complete booking wizard without additional steps. */
    infoCanCompletePost(params?: WlBookProcessInfoInfoCanCompletePostParams): Promise<WlBookProcessInfoInfoCanCompletePostResponse>;
}
export declare class WlBookProcessQuizNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Defines list of required quizzes. */
    quizGet(params?: WlBookProcessQuizQuizGetParams): Promise<WlBookProcessQuizQuizGetResponse>;
    /** Finished booking process and save quiz responses (if quiz step is the last in booking wizard). */
    quizPost(params?: WlBookProcessQuizQuizPostParams): Promise<WlBookProcessQuizQuizPostResponse>;
}
export declare class WlBookProcessFrequencyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of visits to be created for the given recurring booking settings. */
    repeat(params?: WlBookProcessFrequencyRepeatParams): Promise<WlBookProcessFrequencyRepeatResponse>;
    /** Returns the list of visits to be created for the given recurring booking settings. */
    repeatParallel(params?: WlBookProcessFrequencyRepeatParallelParams): Promise<WlBookProcessFrequencyRepeatParallelResponse>;
}
export declare class WlBookProcessGuestNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Check if user exists. */
    guestProfileGet(params?: WlBookProcessGuestGuestProfileGetParams): Promise<WlBookProcessGuestGuestProfileGetResponse>;
    /** Creates new user. */
    guestProfilePost(params?: WlBookProcessGuestGuestProfilePostParams): Promise<WlBookProcessGuestGuestProfilePostResponse>;
}
export declare class WlBookProcessNamespace {
    private readonly _client;
    readonly purchase: WlBookProcessPurchaseNamespace;
    readonly relation: WlBookProcessRelationNamespace;
    readonly resource: WlBookProcessResourceNamespace;
    readonly payment: WlBookProcessPaymentNamespace;
    readonly store: WlBookProcessStoreNamespace;
    readonly info: WlBookProcessInfoNamespace;
    readonly quiz: WlBookProcessQuizNamespace;
    readonly frequency: WlBookProcessFrequencyNamespace;
    readonly guest: WlBookProcessGuestNamespace;
    constructor(_client: WlClient);
    /** Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails. */
    processGroup(params?: WlBookProcessProcessGroupParams): Promise<WlBookProcessProcessGroupResponse>;
    /** Returns the ordered list of booking wizard steps for the given session and client. */
    /** @deprecated */
    process(params?: WlBookProcessProcessParams): Promise<WlBookProcessProcessResponse>;
    /** Returns the ordered list of booking wizard steps, including the quiz step when required. */
    /** @deprecated */
    process54(params?: WlBookProcessProcess54Params): Promise<WlBookProcessProcess54Response>;
    /** Returns the booking wizard steps, adjusting the path when the service is already booked for a family member. */
    process59(params?: WlBookProcessProcess59Params): Promise<WlBookProcessProcess59Response>;
}
export declare class WlBookCancelNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about whether the given user can cancel the booking and the expected consequences. */
    cancelCan(params?: WlBookCancelCancelCanParams): Promise<WlBookCancelCancelCanResponse>;
}
export declare class WlBookNamespace {
    private readonly _client;
    readonly process: WlBookProcessNamespace;
    readonly cancel: WlBookCancelNamespace;
    constructor(_client: WlClient);
}
export declare class WlClassesClassListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets a list of classes which take place in the specified location. */
    bookList(params?: WlClassesClassListBookListParams): Promise<WlClassesClassListBookListResponse>;
    /** Returns list of classes and events in the business. */
    list(params?: WlClassesClassListListParams): Promise<WlClassesClassListListResponse>;
}
export declare class WlClassesClassViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns class information including schedules, images, and booking settings for the specified business. */
    element(params?: WlClassesClassViewElementParams): Promise<WlClassesClassViewElementResponse>;
}
export declare class WlClassesPromotionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of promotions that can be used to pay for the class / event. */
    classPromotion(params?: WlClassesPromotionClassPromotionParams): Promise<WlClassesPromotionClassPromotionResponse>;
}
export declare class WlClassesPeriodModifyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets data for step in wizard. */
    modifyGet(params?: WlClassesPeriodModifyModifyGetParams): Promise<WlClassesPeriodModifyModifyGetResponse>;
    /** Makes step in wizard. */
    modifyPost(params?: WlClassesPeriodModifyModifyPostParams): Promise<WlClassesPeriodModifyModifyPostResponse>;
}
export declare class WlClassesPeriodNamespace {
    private readonly _client;
    readonly modify: WlClassesPeriodModifyNamespace;
    constructor(_client: WlClient);
}
export declare class WlClassesNamespace {
    private readonly _client;
    readonly classList: WlClassesClassListNamespace;
    readonly classView: WlClassesClassViewNamespace;
    readonly promotion: WlClassesPromotionNamespace;
    readonly period: WlClassesPeriodNamespace;
    constructor(_client: WlClient);
}
export declare class WlCatalogCatalogListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves an information about current sale item. */
    element(params?: WlCatalogCatalogListElementParams): Promise<WlCatalogCatalogListElementResponse>;
    /** Retrieves a list of all sale items. */
    list(params?: WlCatalogCatalogListListParams): Promise<WlCatalogCatalogListListResponse>;
    /** Gets store products by shop category. */
    catalogProduct(params?: WlCatalogCatalogListCatalogProductParams): Promise<WlCatalogCatalogListCatalogProductResponse>;
}
export declare class WlCatalogPaymentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Allows to pay items for the client. */
    payment(params?: WlCatalogPaymentPaymentParams): Promise<WlCatalogPaymentPaymentResponse>;
}
export declare class WlCatalogCartNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets purchase cost data. */
    cart(params?: WlCatalogCartCartParams): Promise<WlCatalogCartCartResponse>;
    /** Checks limit quantity and whether a promotion can be added to the cart. */
    limitQuantity(params?: WlCatalogCartLimitQuantityParams): Promise<WlCatalogCartLimitQuantityResponse>;
}
export declare class WlCatalogStaffAppCatalogCartNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Calculates amount of cart. */
    catalogCart(params?: WlCatalogStaffAppCatalogCartCatalogCartParams): Promise<WlCatalogStaffAppCatalogCartCatalogCartResponse>;
}
export declare class WlCatalogStaffAppCatalogListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns all sale items available in the business for staff, optionally filtered by location and visit. */
    catalogList(params?: WlCatalogStaffAppCatalogListCatalogListParams): Promise<WlCatalogStaffAppCatalogListCatalogListResponse>;
}
export declare class WlCatalogStaffAppCatalogViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Calculates price information about sale item. */
    catalogView(params?: WlCatalogStaffAppCatalogViewCatalogViewParams): Promise<WlCatalogStaffAppCatalogViewCatalogViewResponse>;
}
export declare class WlCatalogStaffAppNamespace {
    private readonly _client;
    readonly catalogCart: WlCatalogStaffAppCatalogCartNamespace;
    readonly catalogList: WlCatalogStaffAppCatalogListNamespace;
    readonly catalogView: WlCatalogStaffAppCatalogViewNamespace;
    constructor(_client: WlClient);
}
export declare class WlCatalogNamespace {
    private readonly _client;
    readonly catalogList: WlCatalogCatalogListNamespace;
    readonly payment: WlCatalogPaymentNamespace;
    readonly cart: WlCatalogCartNamespace;
    readonly staffApp: WlCatalogStaffAppNamespace;
    constructor(_client: WlClient);
}
export declare class WlGoogleLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs Google authorization within the context of the specified business. */
    googleLogin(params?: WlGoogleLoginGoogleLoginParams): Promise<WlGoogleLoginGoogleLoginResponse>;
}
export declare class WlGoogleNamespace {
    private readonly _client;
    readonly login: WlGoogleLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlReceptionRosterDesignNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns configuration for the Attendance Kiosk. */
    receptionRosterDesign(params?: WlReceptionRosterDesignReceptionRosterDesignParams): Promise<WlReceptionRosterDesignReceptionRosterDesignResponse>;
}
export declare class WlReceptionRosterNamespace {
    private readonly _client;
    readonly design: WlReceptionRosterDesignNamespace;
    constructor(_client: WlClient);
    /** Marks the visit as not attended via the Attendance Kiosk. */
    attendanceListNotAttend(params?: WlReceptionRosterAttendanceListNotAttendParams): Promise<WlReceptionRosterAttendanceListNotAttendResponse>;
    /** Books a class for the client and marks the visit as attended via the Attendance Kiosk. */
    attendanceListAttend(params?: WlReceptionRosterAttendanceListAttendParams): Promise<WlReceptionRosterAttendanceListAttendResponse>;
    /** Books a class for the client via the Attendance Kiosk and returns whether the client was placed on the class list or waitlist. */
    attendanceListBook(params?: WlReceptionRosterAttendanceListBookParams): Promise<WlReceptionRosterAttendanceListBookResponse>;
    /** Gets the secret string for Attendance Kiosk requests. */
    attendanceSecret(params?: WlReceptionRosterAttendanceSecretParams): Promise<WlReceptionRosterAttendanceSecretResponse>;
}
export declare class WlReceptionApplicationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the schedule and HTML for the Self Check-In Web App for the given user. */
    receptionScheduleGet(params?: WlReceptionApplicationReceptionScheduleGetParams): Promise<WlReceptionApplicationReceptionScheduleGetResponse>;
    /** Performs check-in for the given user and returns the confirmation HTML and data. */
    receptionSchedulePost(params?: WlReceptionApplicationReceptionSchedulePostParams): Promise<WlReceptionApplicationReceptionSchedulePostResponse>;
    /** Returns member information and notification items for the Self Check-In Web App. */
    memberInfo(params?: WlReceptionApplicationMemberInfoParams): Promise<WlReceptionApplicationMemberInfoResponse>;
    /** Performs authorization based on the given authorization value and business settings. */
    receptionAuthorize(params?: WlReceptionApplicationReceptionAuthorizeParams): Promise<WlReceptionApplicationReceptionAuthorizeResponse>;
}
export declare class WlReceptionDesignNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about settings for Check In Web Application. */
    receptionDesign(params?: WlReceptionDesignReceptionDesignParams): Promise<WlReceptionDesignReceptionDesignResponse>;
}
export declare class WlReceptionNamespace {
    private readonly _client;
    readonly roster: WlReceptionRosterNamespace;
    readonly application: WlReceptionApplicationNamespace;
    readonly design: WlReceptionDesignNamespace;
    constructor(_client: WlClient);
}
export declare class WlPurchaseReceiptNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets purchase information. */
    purchaseReceipt(params?: WlPurchaseReceiptPurchaseReceiptParams): Promise<WlPurchaseReceiptPurchaseReceiptResponse>;
}
export declare class WlPurchaseMailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends mail message with list of purchased items for specified purchase. */
    purchaseMail(params?: WlPurchaseMailPurchaseMailParams): Promise<WlPurchaseMailPurchaseMailResponse>;
}
export declare class WlPurchaseShareNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Records the purchase share action and returns the social network sharing URL. */
    purchaseShare(params?: WlPurchaseSharePurchaseShareParams): Promise<WlPurchaseSharePurchaseShareResponse>;
}
export declare class WlPurchaseNamespace {
    private readonly _client;
    readonly receipt: WlPurchaseReceiptNamespace;
    readonly mail: WlPurchaseMailNamespace;
    readonly share: WlPurchaseShareNamespace;
    constructor(_client: WlClient);
}
export declare class WlInsuranceCatalogNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a list of active insurance programs for the specified promotion. */
    programList(params?: WlInsuranceCatalogProgramListParams): Promise<WlInsuranceCatalogProgramListResponse>;
}
export declare class WlInsuranceEnrollmentFieldNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of required partner fields for the specified wellness program. */
    enrollmentFieldListGet(params?: WlInsuranceEnrollmentFieldEnrollmentFieldListGetParams): Promise<WlInsuranceEnrollmentFieldEnrollmentFieldListGetResponse>;
    /** Validates the list of fields filled in by the user for enrollment. */
    enrollmentFieldListPost(params?: WlInsuranceEnrollmentFieldEnrollmentFieldListPostParams): Promise<WlInsuranceEnrollmentFieldEnrollmentFieldListPostResponse>;
}
export declare class WlInsuranceEnrollmentNamespace {
    private readonly _client;
    readonly field: WlInsuranceEnrollmentFieldNamespace;
    constructor(_client: WlClient);
}
export declare class WlInsuranceNamespace {
    private readonly _client;
    readonly catalog: WlInsuranceCatalogNamespace;
    readonly enrollment: WlInsuranceEnrollmentNamespace;
    constructor(_client: WlClient);
}
export declare class WlServiceServiceListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of appointment type in the business. */
    list(params?: WlServiceServiceListListParams): Promise<WlServiceServiceListListResponse>;
}
export declare class WlServiceNamespace {
    private readonly _client;
    readonly serviceList: WlServiceServiceListNamespace;
    constructor(_client: WlClient);
}
export declare class WlSmsPhoneNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets the phone number associated with a specific business. */
    businessPhone(params?: WlSmsPhoneBusinessPhoneParams): Promise<WlSmsPhoneBusinessPhoneResponse>;
}
export declare class WlSmsNamespace {
    private readonly _client;
    readonly phone: WlSmsPhoneNamespace;
    constructor(_client: WlClient);
}
export declare class WlAiAgentLinkNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an AI agent link action email (booking or purchase) to the specified user. */
    sendMail(params?: WlAiAgentLinkSendMailParams): Promise<WlAiAgentLinkSendMailResponse>;
}
export declare class WlAiAgentNamespace {
    private readonly _client;
    readonly link: WlAiAgentLinkNamespace;
    constructor(_client: WlClient);
}
export declare class WlRewardActionCategoryListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves all reward action categories for business specified in `k_business`. */
    categoryList(params?: WlRewardActionCategoryListCategoryListParams): Promise<WlRewardActionCategoryListCategoryListResponse>;
}
export declare class WlRewardActionNamespace {
    private readonly _client;
    readonly categoryList: WlRewardActionCategoryListNamespace;
    constructor(_client: WlClient);
    /** Retrieves a list of available reward actions. */
    action(params?: WlRewardActionActionParams): Promise<WlRewardActionActionResponse>;
    /** Updates configuration fields for the specified reward action. */
    actionWrite(params?: WlRewardActionActionWriteParams): Promise<WlRewardActionActionWriteResponse>;
    /** Retrieves information about reward action item. */
    elementGet(params?: WlRewardActionElementGetParams): Promise<WlRewardActionElementGetResponse>;
    /** Requests points earning. */
    elementPost(params?: WlRewardActionElementPostParams): Promise<WlRewardActionElementPostResponse>;
    /** Retrieves information about reward actions. */
    actionType(params?: WlRewardActionActionTypeParams): Promise<WlRewardActionActionTypeResponse>;
}
export declare class WlRewardScoreCurrentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about current score in wellnessliving points. */
    current(params?: WlRewardScoreCurrentCurrentParams): Promise<WlRewardScoreCurrentCurrentResponse>;
}
export declare class WlRewardScoreNamespace {
    private readonly _client;
    readonly current: WlRewardScoreCurrentNamespace;
    constructor(_client: WlClient);
    /** Returns the total reward points for the specified activity list or user. */
    scoreGet(params?: WlRewardScoreScoreGetParams): Promise<WlRewardScoreScoreGetResponse>;
    /** Gives user reward points for sharing of certain activity into Facebook. */
    scorePost(params?: WlRewardScoreScorePostParams): Promise<WlRewardScoreScorePostResponse>;
    /** Manually adjusts the reward points balance for the specified user. */
    scorePut(params?: WlRewardScoreScorePutParams): Promise<WlRewardScoreScorePutResponse>;
}
export declare class WlRewardBoardBoardListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves all reward boards for business specified in `k_business`. */
    list(params?: WlRewardBoardBoardListListParams): Promise<WlRewardBoardBoardListListResponse>;
}
export declare class WlRewardBoardNamespace {
    private readonly _client;
    readonly boardList: WlRewardBoardBoardListNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about reward board item. */
    element(params?: WlRewardBoardElementParams): Promise<WlRewardBoardElementResponse>;
    /** Retrieves a list of reward board items to show. */
    list(params?: WlRewardBoardListParams): Promise<WlRewardBoardListResponse>;
}
export declare class WlRewardPrizeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about redeemable prize item. */
    elementGet(params?: WlRewardPrizeElementGetParams): Promise<WlRewardPrizeElementGetResponse>;
    /** Redeems selected prize. */
    elementPost(params?: WlRewardPrizeElementPostParams): Promise<WlRewardPrizeElementPostResponse>;
    /** Retrieves a list of redeemable prizes. */
    prize(params?: WlRewardPrizePrizeParams): Promise<WlRewardPrizePrizeResponse>;
}
export declare class WlRewardNamespace {
    private readonly _client;
    readonly action: WlRewardActionNamespace;
    readonly score: WlRewardScoreNamespace;
    readonly board: WlRewardBoardNamespace;
    readonly prize: WlRewardPrizeNamespace;
    constructor(_client: WlClient);
}
export declare class WlNotificationSendNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Schedules or immediately sends a notification to clients of the specified business or location. */
    notificationSend(params?: WlNotificationSendNotificationSendParams): Promise<WlNotificationSendNotificationSendResponse>;
    /** Returns configuration information about the specified notification for the given business. */
    notificationInfo(params?: WlNotificationSendNotificationInfoParams): Promise<WlNotificationSendNotificationInfoResponse>;
}
export declare class WlNotificationOtpNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an OTP code to the specified phone number for verification. */
    phoneOtpGet(params?: WlNotificationOtpPhoneOtpGetParams): Promise<WlNotificationOtpPhoneOtpGetResponse>;
    /** Verifies the OTP code submitted by the user for the specified phone number. */
    phoneOtpPost(params?: WlNotificationOtpPhoneOtpPostParams): Promise<WlNotificationOtpPhoneOtpPostResponse>;
}
export declare class WlNotificationNamespace {
    private readonly _client;
    readonly send: WlNotificationSendNamespace;
    readonly otp: WlNotificationOtpNamespace;
    constructor(_client: WlClient);
}
export declare class WlPassportLoginEnterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an OTP code to the user's email or phone number to initiate authorization. */
    passportOtpGet(params?: WlPassportLoginEnterPassportOtpGetParams): Promise<WlPassportLoginEnterPassportOtpGetResponse>;
    /** Verifies the submitted OTP code and establishes an authorized session for the user. */
    passportOtpPost(params?: WlPassportLoginEnterPassportOtpPostParams): Promise<WlPassportLoginEnterPassportOtpPostResponse>;
}
export declare class WlPassportLoginRegisterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an OTP code to the user's email or phone number to initiate authorization. */
    registerOtpGet(params?: WlPassportLoginRegisterRegisterOtpGetParams): Promise<WlPassportLoginRegisterRegisterOtpGetResponse>;
    /** Verifies the submitted OTP code and establishes an authorized session for the user. */
    registerOtpPost(params?: WlPassportLoginRegisterRegisterOtpPostParams): Promise<WlPassportLoginRegisterRegisterOtpPostResponse>;
}
export declare class WlPassportLoginNamespace {
    private readonly _client;
    readonly enter: WlPassportLoginEnterNamespace;
    readonly register: WlPassportLoginRegisterNamespace;
    constructor(_client: WlClient);
    /** Returns the current user's login information and password reset URL for the specified business. */
    info(params?: WlPassportLoginInfoParams): Promise<WlPassportLoginInfoResponse>;
}
export declare class WlPassportNamespace {
    private readonly _client;
    readonly login: WlPassportLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about specified member. */
    info(params?: WlMemberInfoInfoParams): Promise<WlMemberInfoInfoResponse>;
}
export declare class WlMemberPurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns active clients holding at least one active Purchase Option from the specified list. */
    memberByPromotion(params?: WlMemberPurchaseMemberByPromotionParams): Promise<WlMemberPurchaseMemberByPromotionResponse>;
}
export declare class WlMemberGroupEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns data for group edit form. */
    editGet(params?: WlMemberGroupEditEditGetParams): Promise<WlMemberGroupEditEditGetResponse>;
    /** Adds or changes a client group. */
    editPost(params?: WlMemberGroupEditEditPostParams): Promise<WlMemberGroupEditEditPostResponse>;
    /** Adds or edit client group Query. */
    editPut(params?: WlMemberGroupEditEditPutParams): Promise<WlMemberGroupEditEditPutResponse>;
}
export declare class WlMemberGroupUserNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the user from the group. */
    userGroupDelete(params?: WlMemberGroupUserUserGroupDeleteParams): Promise<WlMemberGroupUserUserGroupDeleteResponse>;
    /** Gets information about all groups to which the specified user belongs. */
    userGroupGet(params?: WlMemberGroupUserUserGroupGetParams): Promise<WlMemberGroupUserUserGroupGetResponse>;
    /** Adds a user to a group. */
    userGroupPost(params?: WlMemberGroupUserUserGroupPostParams): Promise<WlMemberGroupUserUserGroupPostResponse>;
}
export declare class WlMemberGroupGroupListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes groups. */
    listDelete(params?: WlMemberGroupGroupListListDeleteParams): Promise<WlMemberGroupGroupListListDeleteResponse>;
    /** Returns all member groups list in the business if `$a_member_group_select` is empty, otherwise filters result according to `$a_member_group_select`. */
    listGet(params?: WlMemberGroupGroupListListGetParams): Promise<WlMemberGroupGroupListListGetResponse>;
    /** Updates the order of groups in a list. */
    listPut(params?: WlMemberGroupGroupListListPutParams): Promise<WlMemberGroupGroupListListPutResponse>;
}
export declare class WlMemberGroupNamespace {
    private readonly _client;
    readonly edit: WlMemberGroupEditNamespace;
    readonly user: WlMemberGroupUserNamespace;
    readonly groupList: WlMemberGroupGroupListNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberProgressFieldEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns field data. */
    fieldGet(params?: WlMemberProgressFieldEditFieldGetParams): Promise<WlMemberProgressFieldEditFieldGetResponse>;
    /** Saves field data. */
    fieldPost(params?: WlMemberProgressFieldEditFieldPostParams): Promise<WlMemberProgressFieldEditFieldPostResponse>;
}
export declare class WlMemberProgressFieldNamespace {
    private readonly _client;
    readonly edit: WlMemberProgressFieldEditNamespace;
    constructor(_client: WlClient);
    /** Changes states of field. */
    state(params?: WlMemberProgressFieldStateParams): Promise<WlMemberProgressFieldStateResponse>;
}
export declare class WlMemberProgressLogEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns progress log data. */
    logGet(params?: WlMemberProgressLogEditLogGetParams): Promise<WlMemberProgressLogEditLogGetResponse>;
    /** Saves progress fields log. */
    logPost(params?: WlMemberProgressLogEditLogPostParams): Promise<WlMemberProgressLogEditLogPostResponse>;
}
export declare class WlMemberProgressLogImageNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes progress image. */
    imageDelete(params?: WlMemberProgressLogImageImageDeleteParams): Promise<WlMemberProgressLogImageImageDeleteResponse>;
    /** Returns progress picture data. */
    imageGet(params?: WlMemberProgressLogImageImageGetParams): Promise<WlMemberProgressLogImageImageGetResponse>;
    /** Saves progress picture. */
    imagePost(params?: WlMemberProgressLogImageImagePostParams): Promise<WlMemberProgressLogImageImagePostResponse>;
}
export declare class WlMemberProgressLogCompareNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of dates where client logged his progress. */
    compare(params?: WlMemberProgressLogCompareCompareParams): Promise<WlMemberProgressLogCompareCompareResponse>;
}
export declare class WlMemberProgressLogNamespace {
    private readonly _client;
    readonly edit: WlMemberProgressLogEditNamespace;
    readonly image: WlMemberProgressLogImageNamespace;
    readonly compare: WlMemberProgressLogCompareNamespace;
    constructor(_client: WlClient);
    /** Verifies client's progress log data. */
    verify(params?: WlMemberProgressLogVerifyParams): Promise<WlMemberProgressLogVerifyResponse>;
}
export declare class WlMemberProgressGoalEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns progress goal log data. */
    goalGet(params?: WlMemberProgressGoalEditGoalGetParams): Promise<WlMemberProgressGoalEditGoalGetResponse>;
    /** Saves progress goal fields log. */
    goalPost(params?: WlMemberProgressGoalEditGoalPostParams): Promise<WlMemberProgressGoalEditGoalPostResponse>;
}
export declare class WlMemberProgressGoalNamespace {
    private readonly _client;
    readonly edit: WlMemberProgressGoalEditNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberProgressNamespace {
    private readonly _client;
    readonly field: WlMemberProgressFieldNamespace;
    readonly log: WlMemberProgressLogNamespace;
    readonly goal: WlMemberProgressGoalNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberNamespace {
    private readonly _client;
    readonly info: WlMemberInfoNamespace;
    readonly purchase: WlMemberPurchaseNamespace;
    readonly group: WlMemberGroupNamespace;
    readonly progress: WlMemberProgressNamespace;
    constructor(_client: WlClient);
}
export declare class WlUserInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about user. */
    userInfo(params?: WlUserInfoUserInfoParams): Promise<WlUserInfoUserInfoResponse>;
    /** Retrieves information about the user belongs to certain integrations. */
    userIntegration(params?: WlUserInfoUserIntegrationParams): Promise<WlUserInfoUserIntegrationResponse>;
}
export declare class WlUserReferrerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Searches for a referrer by the given search string and returns their profile information. */
    referrer(params?: WlUserReferrerReferrerParams): Promise<WlUserReferrerReferrerResponse>;
}
export declare class WlUserNamespace {
    private readonly _client;
    readonly info: WlUserInfoNamespace;
    readonly referrer: WlUserReferrerNamespace;
    constructor(_client: WlClient);
}
export declare class WlDiscountCodeEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about discount. */
    discountCodeEditGet(params?: WlDiscountCodeEditDiscountCodeEditGetParams): Promise<WlDiscountCodeEditDiscountCodeEditGetResponse>;
    /** Saves information about discount code or create new. */
    discountCodeEditPost(params?: WlDiscountCodeEditDiscountCodeEditPostParams): Promise<WlDiscountCodeEditDiscountCodeEditPostResponse>;
    /** Duplicates an existing discount code. */
    discountCodeEditPut(params?: WlDiscountCodeEditDiscountCodeEditPutParams): Promise<WlDiscountCodeEditDiscountCodeEditPutResponse>;
}
export declare class WlDiscountCodeNamespace {
    private readonly _client;
    readonly edit: WlDiscountCodeEditNamespace;
    constructor(_client: WlClient);
    /** Returns discount codes of the specified business. */
    discountCode(params?: WlDiscountCodeDiscountCodeParams): Promise<WlDiscountCodeDiscountCodeResponse>;
}
export declare class WlDiscountNamespace {
    private readonly _client;
    readonly code: WlDiscountCodeNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopCategoryNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of shop categories available for the given business. */
    categoryGet(params?: WlShopCategoryCategoryGetParams): Promise<WlShopCategoryCategoryGetResponse>;
    /** Creates new shop category. */
    categoryPost(params?: WlShopCategoryCategoryPostParams): Promise<WlShopCategoryCategoryPostResponse>;
}
export declare class WlShopProductOptionInventoryCountNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about product options. Works in two modes: review and search. In review mode, the method returns products with changed inventory quantities and notes. In search mode, the method returns one product and its options (the result of searching by product barcode). */
    inventoryCountGet(params?: WlShopProductOptionInventoryCountInventoryCountGetParams): Promise<WlShopProductOptionInventoryCountInventoryCountGetResponse>;
    /** Saves changes of product inventory quantities and notes. */
    inventoryCountPost(params?: WlShopProductOptionInventoryCountInventoryCountPostParams): Promise<WlShopProductOptionInventoryCountInventoryCountPostResponse>;
}
export declare class WlShopProductOptionInventoryNamespace {
    private readonly _client;
    readonly count: WlShopProductOptionInventoryCountNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopProductOptionNamespace {
    private readonly _client;
    readonly inventory: WlShopProductOptionInventoryNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopProductNamespace {
    private readonly _client;
    readonly option: WlShopProductOptionNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopNamespace {
    private readonly _client;
    readonly category: WlShopCategoryNamespace;
    readonly product: WlShopProductNamespace;
    constructor(_client: WlClient);
}
export declare class WlResourceLayoutNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about the specified asset layout, including assets and custom shapes. */
    layout(params?: WlResourceLayoutLayoutParams): Promise<WlResourceLayoutLayoutResponse>;
}
export declare class WlResourceResourceListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns assets list in the business. */
    list(params?: WlResourceResourceListListParams): Promise<WlResourceResourceListListResponse>;
}
export declare class WlResourceNamespace {
    private readonly _client;
    readonly layout: WlResourceLayoutNamespace;
    readonly resourceList: WlResourceResourceListNamespace;
    constructor(_client: WlClient);
}
export declare class WlFamilyRelationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes family relation between 2 users. */
    relationDelete(params?: WlFamilyRelationRelationDeleteParams): Promise<WlFamilyRelationRelationDeleteResponse>;
    /** Gets relative list. */
    relationGet(params?: WlFamilyRelationRelationGetParams): Promise<WlFamilyRelationRelationGetResponse>;
    /** Adds to user `uid` relative `a_new`. */
    relationPost(params?: WlFamilyRelationRelationPostParams): Promise<WlFamilyRelationRelationPostResponse>;
    /** Gets relationships list. */
    familyRelation(params?: WlFamilyRelationFamilyRelationParams): Promise<WlFamilyRelationFamilyRelationResponse>;
    /** Deletes family relation between 2 users. */
    relation72Delete(params?: WlFamilyRelationRelation72DeleteParams): Promise<WlFamilyRelationRelation72DeleteResponse>;
    /** Gets relative list. */
    relation72Get(params?: WlFamilyRelationRelation72GetParams): Promise<WlFamilyRelationRelation72GetResponse>;
    /** Adds to user [RelationApi](/Wl/Family/Relation/Relation.json) relative [RelationApi](/Wl/Family/Relation/Relation.json). */
    relation72Post(params?: WlFamilyRelationRelation72PostParams): Promise<WlFamilyRelationRelation72PostResponse>;
}
export declare class WlFamilyNamespace {
    private readonly _client;
    readonly relation: WlFamilyRelationNamespace;
    constructor(_client: WlClient);
}
export declare class WlIntegrationAutymateNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns or changes the Autymate enrollment status for the specified business. Autymate specifically requested this method be a get. */
    autymateActivate(params?: WlIntegrationAutymateAutymateActivateParams): Promise<WlIntegrationAutymateAutymateActivateResponse>;
    /** Gets the daily transaction data. */
    report(params?: WlIntegrationAutymateReportParams): Promise<WlIntegrationAutymateReportResponse>;
}
export declare class WlIntegrationSamlNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets status of the user in business for given list of identifiers. */
    samlUserDeactivation(params?: WlIntegrationSamlSamlUserDeactivationParams): Promise<WlIntegrationSamlSamlUserDeactivationResponse>;
}
export declare class WlIntegrationCurvesNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns country, region, state, city and location lists of the franchisor. This method returns all the information from the parent `get()` and the Curves territory ID. */
    curvesFranchiseLocation(params?: WlIntegrationCurvesCurvesFranchiseLocationParams): Promise<WlIntegrationCurvesCurvesFranchiseLocationResponse>;
}
export declare class WlIntegrationDragonFlyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if the user can physically access the location. */
    access(params?: WlIntegrationDragonFlyAccessParams): Promise<WlIntegrationDragonFlyAccessResponse>;
}
export declare class WlIntegrationNamespace {
    private readonly _client;
    readonly autymate: WlIntegrationAutymateNamespace;
    readonly saml: WlIntegrationSamlNamespace;
    readonly curves: WlIntegrationCurvesNamespace;
    readonly dragonFly: WlIntegrationDragonFlyNamespace;
    constructor(_client: WlClient);
}
export declare class WlCouponCouponListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of coupons. */
    list(params?: WlCouponCouponListListParams): Promise<WlCouponCouponListListResponse>;
}
export declare class WlCouponNamespace {
    private readonly _client;
    readonly couponList: WlCouponCouponListNamespace;
    constructor(_client: WlClient);
}
export declare class WlMicrosoftLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes the association between a website client and a Microsoft account. */
    microsoftLoginDelete(params?: WlMicrosoftLoginMicrosoftLoginDeleteParams): Promise<WlMicrosoftLoginMicrosoftLoginDeleteResponse>;
    /** Collects data for the Microsoft login button. */
    microsoftLoginGet(params?: WlMicrosoftLoginMicrosoftLoginGetParams): Promise<WlMicrosoftLoginMicrosoftLoginGetResponse>;
    /** Authenticates a user via Microsoft OAuth for the specified business. */
    microsoftLoginPost(params?: WlMicrosoftLoginMicrosoftLoginPostParams): Promise<WlMicrosoftLoginMicrosoftLoginPostResponse>;
}
export declare class WlMicrosoftNamespace {
    private readonly _client;
    readonly login: WlMicrosoftLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlSearchTagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of search tags. This is public information and method does not require any level of privileges. */
    searchTagList(params?: WlSearchTagSearchTagListParams): Promise<WlSearchTagSearchTagListResponse>;
}
export declare class WlSearchNamespace {
    private readonly _client;
    readonly tag: WlSearchTagNamespace;
    constructor(_client: WlClient);
}
export declare class WlGymVisitNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Records a gym visit for the specified client at the given date and time. */
    visitAdd(params?: WlGymVisitVisitAddParams): Promise<WlGymVisitVisitAddResponse>;
}
export declare class WlGymNamespace {
    private readonly _client;
    readonly visit: WlGymVisitNamespace;
    constructor(_client: WlClient);
}
export declare class WlSocialShareNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves the share post data and returns the secret key for the shared object. */
    socialShare(params?: WlSocialShareSocialShareParams): Promise<WlSocialShareSocialShareResponse>;
}
export declare class WlSocialNamespace {
    private readonly _client;
    readonly share: WlSocialShareNamespace;
    constructor(_client: WlClient);
}
export declare class WlFacebookLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs Facebook authorization within the context of the specified business. */
    facebookLogin(params?: WlFacebookLoginFacebookLoginParams): Promise<WlFacebookLoginFacebookLoginResponse>;
}
export declare class WlFacebookNamespace {
    private readonly _client;
    readonly login: WlFacebookLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlNamespace {
    private readonly _client;
    readonly schedule: WlScheduleNamespace;
    readonly visit: WlVisitNamespace;
    readonly location: WlLocationNamespace;
    readonly profile: WlProfileNamespace;
    readonly event: WlEventNamespace;
    readonly business: WlBusinessNamespace;
    readonly report: WlReportNamespace;
    readonly collector: WlCollectorNamespace;
    readonly announcement: WlAnnouncementNamespace;
    readonly lead: WlLeadNamespace;
    readonly promotion: WlPromotionNamespace;
    readonly login: WlLoginNamespace;
    readonly quiz: WlQuizNamespace;
    readonly video: WlVideoNamespace;
    readonly fitbuilder: WlFitbuilderNamespace;
    readonly mail: WlMailNamespace;
    readonly staff: WlStaffNamespace;
    readonly skin: WlSkinNamespace;
    readonly tag: WlTagNamespace;
    readonly tax: WlTaxNamespace;
    readonly review: WlReviewNamespace;
    readonly rank: WlRankNamespace;
    readonly holiday: WlHolidayNamespace;
    readonly appointment: WlAppointmentNamespace;
    readonly book: WlBookNamespace;
    readonly classes: WlClassesNamespace;
    readonly catalog: WlCatalogNamespace;
    readonly google: WlGoogleNamespace;
    readonly reception: WlReceptionNamespace;
    readonly purchase: WlPurchaseNamespace;
    readonly insurance: WlInsuranceNamespace;
    readonly service: WlServiceNamespace;
    readonly sms: WlSmsNamespace;
    readonly aiAgent: WlAiAgentNamespace;
    readonly reward: WlRewardNamespace;
    readonly notification: WlNotificationNamespace;
    readonly passport: WlPassportNamespace;
    readonly member: WlMemberNamespace;
    readonly user: WlUserNamespace;
    readonly discount: WlDiscountNamespace;
    readonly shop: WlShopNamespace;
    readonly resource: WlResourceNamespace;
    readonly family: WlFamilyNamespace;
    readonly integration: WlIntegrationNamespace;
    readonly coupon: WlCouponNamespace;
    readonly microsoft: WlMicrosoftNamespace;
    readonly search: WlSearchNamespace;
    readonly gym: WlGymNamespace;
    readonly social: WlSocialNamespace;
    readonly facebook: WlFacebookNamespace;
    constructor(_client: WlClient);
}
/** WellnessLiving API client. */
export declare class WlClient {
    private readonly _token;
    private readonly _baseUrl;
    private readonly _timeout;
    readonly thoth: ThothNamespace;
    readonly core: CoreNamespace;
    readonly social: SocialNamespace;
    readonly wl: WlNamespace;
    constructor(options: WlClientOptions);
    _request<T>(path: string, params: unknown, method: string): Promise<T>;
}
export default WlClient;
