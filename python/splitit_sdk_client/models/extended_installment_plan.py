# coding: utf-8

"""
    splitit-web-api-public-sdk

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ExtendedInstallmentPlan(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'installment_plan_number': 'str',
        'installment_plan_status': 'ReferenceEntityBase',
        'amount': 'Money',
        'outstanding_amount': 'Money',
        'number_of_installments': 'int',
        'number_of_processed_installments': 'int',
        'original_amount': 'Money',
        'refund_amount': 'Money',
        'consumer': 'ConsumerData',
        'active_card': 'CardData',
        'fraud_check': 'FraudCheck',
        'merchant': 'MerchantRef',
        'ref_order_number': 'str',
        'purchase_method': 'ReferenceEntityBase',
        'strategy': 'ReferenceEntityBase',
        'delay_resolution': 'ReferenceEntityBase',
        'extended_params': 'dict(str, str)',
        'is_full_captured': 'bool',
        'is_charged_back': 'bool',
        'are_payments_on_hold': 'bool',
        'scp_funding_percent': 'float',
        'test_mode': 'TestModes',
        'creation_date_time': 'datetime',
        'installments': 'list[Installment]',
        'secure_authorizations': 'list[ReAuthorization]',
        'business_unit': 'BuRef',
        'shopper_payment_request_time': 'datetime'
    }

    attribute_map = {
        'installment_plan_number': 'InstallmentPlanNumber',
        'installment_plan_status': 'InstallmentPlanStatus',
        'amount': 'Amount',
        'outstanding_amount': 'OutstandingAmount',
        'number_of_installments': 'NumberOfInstallments',
        'number_of_processed_installments': 'NumberOfProcessedInstallments',
        'original_amount': 'OriginalAmount',
        'refund_amount': 'RefundAmount',
        'consumer': 'Consumer',
        'active_card': 'ActiveCard',
        'fraud_check': 'FraudCheck',
        'merchant': 'Merchant',
        'ref_order_number': 'RefOrderNumber',
        'purchase_method': 'PurchaseMethod',
        'strategy': 'Strategy',
        'delay_resolution': 'DelayResolution',
        'extended_params': 'ExtendedParams',
        'is_full_captured': 'IsFullCaptured',
        'is_charged_back': 'IsChargedBack',
        'are_payments_on_hold': 'ArePaymentsOnHold',
        'scp_funding_percent': 'ScpFundingPercent',
        'test_mode': 'TestMode',
        'creation_date_time': 'CreationDateTime',
        'installments': 'Installments',
        'secure_authorizations': 'SecureAuthorizations',
        'business_unit': 'BusinessUnit',
        'shopper_payment_request_time': 'ShopperPaymentRequestTime'
    }

    def __init__(self, installment_plan_number=None, installment_plan_status=None, amount=None, outstanding_amount=None, number_of_installments=None, number_of_processed_installments=None, original_amount=None, refund_amount=None, consumer=None, active_card=None, fraud_check=None, merchant=None, ref_order_number=None, purchase_method=None, strategy=None, delay_resolution=None, extended_params=None, is_full_captured=None, is_charged_back=None, are_payments_on_hold=None, scp_funding_percent=None, test_mode=None, creation_date_time=None, installments=None, secure_authorizations=None, business_unit=None, shopper_payment_request_time=None):  # noqa: E501
        """ExtendedInstallmentPlan - a model defined in Swagger"""  # noqa: E501

        self._installment_plan_number = None
        self._installment_plan_status = None
        self._amount = None
        self._outstanding_amount = None
        self._number_of_installments = None
        self._number_of_processed_installments = None
        self._original_amount = None
        self._refund_amount = None
        self._consumer = None
        self._active_card = None
        self._fraud_check = None
        self._merchant = None
        self._ref_order_number = None
        self._purchase_method = None
        self._strategy = None
        self._delay_resolution = None
        self._extended_params = None
        self._is_full_captured = None
        self._is_charged_back = None
        self._are_payments_on_hold = None
        self._scp_funding_percent = None
        self._test_mode = None
        self._creation_date_time = None
        self._installments = None
        self._secure_authorizations = None
        self._business_unit = None
        self._shopper_payment_request_time = None
        self.discriminator = None

        if installment_plan_number is not None:
            self.installment_plan_number = installment_plan_number
        if installment_plan_status is not None:
            self.installment_plan_status = installment_plan_status
        if amount is not None:
            self.amount = amount
        if outstanding_amount is not None:
            self.outstanding_amount = outstanding_amount
        self.number_of_installments = number_of_installments
        self.number_of_processed_installments = number_of_processed_installments
        if original_amount is not None:
            self.original_amount = original_amount
        if refund_amount is not None:
            self.refund_amount = refund_amount
        if consumer is not None:
            self.consumer = consumer
        if active_card is not None:
            self.active_card = active_card
        if fraud_check is not None:
            self.fraud_check = fraud_check
        if merchant is not None:
            self.merchant = merchant
        if ref_order_number is not None:
            self.ref_order_number = ref_order_number
        if purchase_method is not None:
            self.purchase_method = purchase_method
        if strategy is not None:
            self.strategy = strategy
        if delay_resolution is not None:
            self.delay_resolution = delay_resolution
        if extended_params is not None:
            self.extended_params = extended_params
        self.is_full_captured = is_full_captured
        self.is_charged_back = is_charged_back
        self.are_payments_on_hold = are_payments_on_hold
        self.scp_funding_percent = scp_funding_percent
        self.test_mode = test_mode
        self.creation_date_time = creation_date_time
        if installments is not None:
            self.installments = installments
        if secure_authorizations is not None:
            self.secure_authorizations = secure_authorizations
        if business_unit is not None:
            self.business_unit = business_unit
        if shopper_payment_request_time is not None:
            self.shopper_payment_request_time = shopper_payment_request_time

    @property
    def installment_plan_number(self):
        """Gets the installment_plan_number of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The installment_plan_number of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: str
        """
        return self._installment_plan_number

    @installment_plan_number.setter
    def installment_plan_number(self, installment_plan_number):
        """Sets the installment_plan_number of this ExtendedInstallmentPlan.


        :param installment_plan_number: The installment_plan_number of this ExtendedInstallmentPlan.  # noqa: E501
        :type: str
        """

        self._installment_plan_number = installment_plan_number

    @property
    def installment_plan_status(self):
        """Gets the installment_plan_status of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The installment_plan_status of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: ReferenceEntityBase
        """
        return self._installment_plan_status

    @installment_plan_status.setter
    def installment_plan_status(self, installment_plan_status):
        """Sets the installment_plan_status of this ExtendedInstallmentPlan.


        :param installment_plan_status: The installment_plan_status of this ExtendedInstallmentPlan.  # noqa: E501
        :type: ReferenceEntityBase
        """

        self._installment_plan_status = installment_plan_status

    @property
    def amount(self):
        """Gets the amount of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The amount of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: Money
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this ExtendedInstallmentPlan.


        :param amount: The amount of this ExtendedInstallmentPlan.  # noqa: E501
        :type: Money
        """

        self._amount = amount

    @property
    def outstanding_amount(self):
        """Gets the outstanding_amount of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The outstanding_amount of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: Money
        """
        return self._outstanding_amount

    @outstanding_amount.setter
    def outstanding_amount(self, outstanding_amount):
        """Sets the outstanding_amount of this ExtendedInstallmentPlan.


        :param outstanding_amount: The outstanding_amount of this ExtendedInstallmentPlan.  # noqa: E501
        :type: Money
        """

        self._outstanding_amount = outstanding_amount

    @property
    def number_of_installments(self):
        """Gets the number_of_installments of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The number_of_installments of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: int
        """
        return self._number_of_installments

    @number_of_installments.setter
    def number_of_installments(self, number_of_installments):
        """Sets the number_of_installments of this ExtendedInstallmentPlan.


        :param number_of_installments: The number_of_installments of this ExtendedInstallmentPlan.  # noqa: E501
        :type: int
        """
        if number_of_installments is None:
            raise ValueError("Invalid value for `number_of_installments`, must not be `None`")  # noqa: E501

        self._number_of_installments = number_of_installments

    @property
    def number_of_processed_installments(self):
        """Gets the number_of_processed_installments of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The number_of_processed_installments of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: int
        """
        return self._number_of_processed_installments

    @number_of_processed_installments.setter
    def number_of_processed_installments(self, number_of_processed_installments):
        """Sets the number_of_processed_installments of this ExtendedInstallmentPlan.


        :param number_of_processed_installments: The number_of_processed_installments of this ExtendedInstallmentPlan.  # noqa: E501
        :type: int
        """
        if number_of_processed_installments is None:
            raise ValueError("Invalid value for `number_of_processed_installments`, must not be `None`")  # noqa: E501

        self._number_of_processed_installments = number_of_processed_installments

    @property
    def original_amount(self):
        """Gets the original_amount of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The original_amount of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: Money
        """
        return self._original_amount

    @original_amount.setter
    def original_amount(self, original_amount):
        """Sets the original_amount of this ExtendedInstallmentPlan.


        :param original_amount: The original_amount of this ExtendedInstallmentPlan.  # noqa: E501
        :type: Money
        """

        self._original_amount = original_amount

    @property
    def refund_amount(self):
        """Gets the refund_amount of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The refund_amount of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: Money
        """
        return self._refund_amount

    @refund_amount.setter
    def refund_amount(self, refund_amount):
        """Sets the refund_amount of this ExtendedInstallmentPlan.


        :param refund_amount: The refund_amount of this ExtendedInstallmentPlan.  # noqa: E501
        :type: Money
        """

        self._refund_amount = refund_amount

    @property
    def consumer(self):
        """Gets the consumer of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The consumer of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: ConsumerData
        """
        return self._consumer

    @consumer.setter
    def consumer(self, consumer):
        """Sets the consumer of this ExtendedInstallmentPlan.


        :param consumer: The consumer of this ExtendedInstallmentPlan.  # noqa: E501
        :type: ConsumerData
        """

        self._consumer = consumer

    @property
    def active_card(self):
        """Gets the active_card of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The active_card of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: CardData
        """
        return self._active_card

    @active_card.setter
    def active_card(self, active_card):
        """Sets the active_card of this ExtendedInstallmentPlan.


        :param active_card: The active_card of this ExtendedInstallmentPlan.  # noqa: E501
        :type: CardData
        """

        self._active_card = active_card

    @property
    def fraud_check(self):
        """Gets the fraud_check of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The fraud_check of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: FraudCheck
        """
        return self._fraud_check

    @fraud_check.setter
    def fraud_check(self, fraud_check):
        """Sets the fraud_check of this ExtendedInstallmentPlan.


        :param fraud_check: The fraud_check of this ExtendedInstallmentPlan.  # noqa: E501
        :type: FraudCheck
        """

        self._fraud_check = fraud_check

    @property
    def merchant(self):
        """Gets the merchant of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The merchant of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: MerchantRef
        """
        return self._merchant

    @merchant.setter
    def merchant(self, merchant):
        """Sets the merchant of this ExtendedInstallmentPlan.


        :param merchant: The merchant of this ExtendedInstallmentPlan.  # noqa: E501
        :type: MerchantRef
        """

        self._merchant = merchant

    @property
    def ref_order_number(self):
        """Gets the ref_order_number of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The ref_order_number of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: str
        """
        return self._ref_order_number

    @ref_order_number.setter
    def ref_order_number(self, ref_order_number):
        """Sets the ref_order_number of this ExtendedInstallmentPlan.


        :param ref_order_number: The ref_order_number of this ExtendedInstallmentPlan.  # noqa: E501
        :type: str
        """

        self._ref_order_number = ref_order_number

    @property
    def purchase_method(self):
        """Gets the purchase_method of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The purchase_method of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: ReferenceEntityBase
        """
        return self._purchase_method

    @purchase_method.setter
    def purchase_method(self, purchase_method):
        """Sets the purchase_method of this ExtendedInstallmentPlan.


        :param purchase_method: The purchase_method of this ExtendedInstallmentPlan.  # noqa: E501
        :type: ReferenceEntityBase
        """

        self._purchase_method = purchase_method

    @property
    def strategy(self):
        """Gets the strategy of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The strategy of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: ReferenceEntityBase
        """
        return self._strategy

    @strategy.setter
    def strategy(self, strategy):
        """Sets the strategy of this ExtendedInstallmentPlan.


        :param strategy: The strategy of this ExtendedInstallmentPlan.  # noqa: E501
        :type: ReferenceEntityBase
        """

        self._strategy = strategy

    @property
    def delay_resolution(self):
        """Gets the delay_resolution of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The delay_resolution of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: ReferenceEntityBase
        """
        return self._delay_resolution

    @delay_resolution.setter
    def delay_resolution(self, delay_resolution):
        """Sets the delay_resolution of this ExtendedInstallmentPlan.


        :param delay_resolution: The delay_resolution of this ExtendedInstallmentPlan.  # noqa: E501
        :type: ReferenceEntityBase
        """

        self._delay_resolution = delay_resolution

    @property
    def extended_params(self):
        """Gets the extended_params of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The extended_params of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._extended_params

    @extended_params.setter
    def extended_params(self, extended_params):
        """Sets the extended_params of this ExtendedInstallmentPlan.


        :param extended_params: The extended_params of this ExtendedInstallmentPlan.  # noqa: E501
        :type: dict(str, str)
        """

        self._extended_params = extended_params

    @property
    def is_full_captured(self):
        """Gets the is_full_captured of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The is_full_captured of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: bool
        """
        return self._is_full_captured

    @is_full_captured.setter
    def is_full_captured(self, is_full_captured):
        """Sets the is_full_captured of this ExtendedInstallmentPlan.


        :param is_full_captured: The is_full_captured of this ExtendedInstallmentPlan.  # noqa: E501
        :type: bool
        """
        if is_full_captured is None:
            raise ValueError("Invalid value for `is_full_captured`, must not be `None`")  # noqa: E501

        self._is_full_captured = is_full_captured

    @property
    def is_charged_back(self):
        """Gets the is_charged_back of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The is_charged_back of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: bool
        """
        return self._is_charged_back

    @is_charged_back.setter
    def is_charged_back(self, is_charged_back):
        """Sets the is_charged_back of this ExtendedInstallmentPlan.


        :param is_charged_back: The is_charged_back of this ExtendedInstallmentPlan.  # noqa: E501
        :type: bool
        """
        if is_charged_back is None:
            raise ValueError("Invalid value for `is_charged_back`, must not be `None`")  # noqa: E501

        self._is_charged_back = is_charged_back

    @property
    def are_payments_on_hold(self):
        """Gets the are_payments_on_hold of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The are_payments_on_hold of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: bool
        """
        return self._are_payments_on_hold

    @are_payments_on_hold.setter
    def are_payments_on_hold(self, are_payments_on_hold):
        """Sets the are_payments_on_hold of this ExtendedInstallmentPlan.


        :param are_payments_on_hold: The are_payments_on_hold of this ExtendedInstallmentPlan.  # noqa: E501
        :type: bool
        """
        if are_payments_on_hold is None:
            raise ValueError("Invalid value for `are_payments_on_hold`, must not be `None`")  # noqa: E501

        self._are_payments_on_hold = are_payments_on_hold

    @property
    def scp_funding_percent(self):
        """Gets the scp_funding_percent of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The scp_funding_percent of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: float
        """
        return self._scp_funding_percent

    @scp_funding_percent.setter
    def scp_funding_percent(self, scp_funding_percent):
        """Sets the scp_funding_percent of this ExtendedInstallmentPlan.


        :param scp_funding_percent: The scp_funding_percent of this ExtendedInstallmentPlan.  # noqa: E501
        :type: float
        """
        if scp_funding_percent is None:
            raise ValueError("Invalid value for `scp_funding_percent`, must not be `None`")  # noqa: E501

        self._scp_funding_percent = scp_funding_percent

    @property
    def test_mode(self):
        """Gets the test_mode of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The test_mode of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: TestModes
        """
        return self._test_mode

    @test_mode.setter
    def test_mode(self, test_mode):
        """Sets the test_mode of this ExtendedInstallmentPlan.


        :param test_mode: The test_mode of this ExtendedInstallmentPlan.  # noqa: E501
        :type: TestModes
        """
        if test_mode is None:
            raise ValueError("Invalid value for `test_mode`, must not be `None`")  # noqa: E501

        self._test_mode = test_mode

    @property
    def creation_date_time(self):
        """Gets the creation_date_time of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The creation_date_time of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: datetime
        """
        return self._creation_date_time

    @creation_date_time.setter
    def creation_date_time(self, creation_date_time):
        """Sets the creation_date_time of this ExtendedInstallmentPlan.


        :param creation_date_time: The creation_date_time of this ExtendedInstallmentPlan.  # noqa: E501
        :type: datetime
        """
        if creation_date_time is None:
            raise ValueError("Invalid value for `creation_date_time`, must not be `None`")  # noqa: E501

        self._creation_date_time = creation_date_time

    @property
    def installments(self):
        """Gets the installments of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The installments of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: list[Installment]
        """
        return self._installments

    @installments.setter
    def installments(self, installments):
        """Sets the installments of this ExtendedInstallmentPlan.


        :param installments: The installments of this ExtendedInstallmentPlan.  # noqa: E501
        :type: list[Installment]
        """

        self._installments = installments

    @property
    def secure_authorizations(self):
        """Gets the secure_authorizations of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The secure_authorizations of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: list[ReAuthorization]
        """
        return self._secure_authorizations

    @secure_authorizations.setter
    def secure_authorizations(self, secure_authorizations):
        """Sets the secure_authorizations of this ExtendedInstallmentPlan.


        :param secure_authorizations: The secure_authorizations of this ExtendedInstallmentPlan.  # noqa: E501
        :type: list[ReAuthorization]
        """

        self._secure_authorizations = secure_authorizations

    @property
    def business_unit(self):
        """Gets the business_unit of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The business_unit of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: BuRef
        """
        return self._business_unit

    @business_unit.setter
    def business_unit(self, business_unit):
        """Sets the business_unit of this ExtendedInstallmentPlan.


        :param business_unit: The business_unit of this ExtendedInstallmentPlan.  # noqa: E501
        :type: BuRef
        """

        self._business_unit = business_unit

    @property
    def shopper_payment_request_time(self):
        """Gets the shopper_payment_request_time of this ExtendedInstallmentPlan.  # noqa: E501


        :return: The shopper_payment_request_time of this ExtendedInstallmentPlan.  # noqa: E501
        :rtype: datetime
        """
        return self._shopper_payment_request_time

    @shopper_payment_request_time.setter
    def shopper_payment_request_time(self, shopper_payment_request_time):
        """Sets the shopper_payment_request_time of this ExtendedInstallmentPlan.


        :param shopper_payment_request_time: The shopper_payment_request_time of this ExtendedInstallmentPlan.  # noqa: E501
        :type: datetime
        """

        self._shopper_payment_request_time = shopper_payment_request_time

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ExtendedInstallmentPlan, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ExtendedInstallmentPlan):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
