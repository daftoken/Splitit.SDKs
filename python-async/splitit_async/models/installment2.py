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


class Installment2(object):
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
        'installment_number': 'int',
        'amount': 'Money',
        'original_amount': 'Money',
        'refund_amount': 'Money',
        'process_date_time': 'datetime',
        'is_refund': 'bool',
        'required_credit': 'Money',
        'created_date_time': 'datetime',
        'status': 'ReferenceEntityBase',
        'transaction_results': 'list[TransactionResult]',
        'card_details': 'CardData',
        'result': 'bool'
    }

    attribute_map = {
        'installment_number': 'InstallmentNumber',
        'amount': 'Amount',
        'original_amount': 'OriginalAmount',
        'refund_amount': 'RefundAmount',
        'process_date_time': 'ProcessDateTime',
        'is_refund': 'IsRefund',
        'required_credit': 'RequiredCredit',
        'created_date_time': 'CreatedDateTime',
        'status': 'Status',
        'transaction_results': 'TransactionResults',
        'card_details': 'CardDetails',
        'result': 'Result'
    }

    def __init__(self, installment_number=None, amount=None, original_amount=None, refund_amount=None, process_date_time=None, is_refund=None, required_credit=None, created_date_time=None, status=None, transaction_results=None, card_details=None, result=None):  # noqa: E501
        """Installment2 - a model defined in Swagger"""  # noqa: E501

        self._installment_number = None
        self._amount = None
        self._original_amount = None
        self._refund_amount = None
        self._process_date_time = None
        self._is_refund = None
        self._required_credit = None
        self._created_date_time = None
        self._status = None
        self._transaction_results = None
        self._card_details = None
        self._result = None
        self.discriminator = None

        self._installment_number = installment_number
        if amount is not None:
            self._amount = amount
        if original_amount is not None:
            self._original_amount = original_amount
        if refund_amount is not None:
            self._refund_amount = refund_amount
        if process_date_time is not None:
            self._process_date_time = process_date_time
        self._is_refund = is_refund
        if required_credit is not None:
            self._required_credit = required_credit
        self._created_date_time = created_date_time
        if status is not None:
            self._status = status
        if transaction_results is not None:
            self._transaction_results = transaction_results
        if card_details is not None:
            self._card_details = card_details
        if result is not None:
            self._result = result

    @property
    def installment_number(self):
        """Gets the installment_number of this Installment2.  # noqa: E501


        :return: The installment_number of this Installment2.  # noqa: E501
        :rtype: int
        """
        return self._installment_number

    @installment_number.setter
    def installment_number(self, installment_number):
        """Sets the installment_number of this Installment2.


        :param installment_number: The installment_number of this Installment2.  # noqa: E501
        :type: int
        """
        
        if installment_number is None:
            raise ValueError("Invalid value for `installment_number`, must not be `None`")  # noqa: E501

        self._installment_number = installment_number

    @property
    def amount(self):
        """Gets the amount of this Installment2.  # noqa: E501


        :return: The amount of this Installment2.  # noqa: E501
        :rtype: Money
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this Installment2.


        :param amount: The amount of this Installment2.  # noqa: E501
        :type: Money
        """

        self._amount = amount

    @property
    def original_amount(self):
        """Gets the original_amount of this Installment2.  # noqa: E501


        :return: The original_amount of this Installment2.  # noqa: E501
        :rtype: Money
        """
        return self._original_amount

    @original_amount.setter
    def original_amount(self, original_amount):
        """Sets the original_amount of this Installment2.


        :param original_amount: The original_amount of this Installment2.  # noqa: E501
        :type: Money
        """

        self._original_amount = original_amount

    @property
    def refund_amount(self):
        """Gets the refund_amount of this Installment2.  # noqa: E501


        :return: The refund_amount of this Installment2.  # noqa: E501
        :rtype: Money
        """
        return self._refund_amount

    @refund_amount.setter
    def refund_amount(self, refund_amount):
        """Sets the refund_amount of this Installment2.


        :param refund_amount: The refund_amount of this Installment2.  # noqa: E501
        :type: Money
        """

        self._refund_amount = refund_amount

    @property
    def process_date_time(self):
        """Gets the process_date_time of this Installment2.  # noqa: E501


        :return: The process_date_time of this Installment2.  # noqa: E501
        :rtype: datetime
        """
        return self._process_date_time

    @process_date_time.setter
    def process_date_time(self, process_date_time):
        """Sets the process_date_time of this Installment2.


        :param process_date_time: The process_date_time of this Installment2.  # noqa: E501
        :type: datetime
        """

        self._process_date_time = process_date_time

    @property
    def is_refund(self):
        """Gets the is_refund of this Installment2.  # noqa: E501


        :return: The is_refund of this Installment2.  # noqa: E501
        :rtype: bool
        """
        return self._is_refund

    @is_refund.setter
    def is_refund(self, is_refund):
        """Sets the is_refund of this Installment2.


        :param is_refund: The is_refund of this Installment2.  # noqa: E501
        :type: bool
        """
        is_refund = bool(is_refund)
        if is_refund is None:
            raise ValueError("Invalid value for `is_refund`, must not be `None`")  # noqa: E501

        self._is_refund = is_refund

    @property
    def required_credit(self):
        """Gets the required_credit of this Installment2.  # noqa: E501


        :return: The required_credit of this Installment2.  # noqa: E501
        :rtype: Money
        """
        return self._required_credit

    @required_credit.setter
    def required_credit(self, required_credit):
        """Sets the required_credit of this Installment2.


        :param required_credit: The required_credit of this Installment2.  # noqa: E501
        :type: Money
        """

        self._required_credit = required_credit

    @property
    def created_date_time(self):
        """Gets the created_date_time of this Installment2.  # noqa: E501


        :return: The created_date_time of this Installment2.  # noqa: E501
        :rtype: datetime
        """
        return self._created_date_time

    @created_date_time.setter
    def created_date_time(self, created_date_time):
        """Sets the created_date_time of this Installment2.


        :param created_date_time: The created_date_time of this Installment2.  # noqa: E501
        :type: datetime
        """
        
        if created_date_time is None:
            raise ValueError("Invalid value for `created_date_time`, must not be `None`")  # noqa: E501

        self._created_date_time = created_date_time

    @property
    def status(self):
        """Gets the status of this Installment2.  # noqa: E501


        :return: The status of this Installment2.  # noqa: E501
        :rtype: ReferenceEntityBase
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Installment2.


        :param status: The status of this Installment2.  # noqa: E501
        :type: ReferenceEntityBase
        """

        self._status = status

    @property
    def transaction_results(self):
        """Gets the transaction_results of this Installment2.  # noqa: E501


        :return: The transaction_results of this Installment2.  # noqa: E501
        :rtype: list[TransactionResult]
        """
        return self._transaction_results

    @transaction_results.setter
    def transaction_results(self, transaction_results):
        """Sets the transaction_results of this Installment2.


        :param transaction_results: The transaction_results of this Installment2.  # noqa: E501
        :type: list[TransactionResult]
        """

        self._transaction_results = transaction_results

    @property
    def card_details(self):
        """Gets the card_details of this Installment2.  # noqa: E501


        :return: The card_details of this Installment2.  # noqa: E501
        :rtype: CardData
        """
        return self._card_details

    @card_details.setter
    def card_details(self, card_details):
        """Sets the card_details of this Installment2.


        :param card_details: The card_details of this Installment2.  # noqa: E501
        :type: CardData
        """

        self._card_details = card_details

    @property
    def result(self):
        """Gets the result of this Installment2.  # noqa: E501


        :return: The result of this Installment2.  # noqa: E501
        :rtype: bool
        """
        return self._result

    @result.setter
    def result(self, result):
        """Sets the result of this Installment2.


        :param result: The result of this Installment2.  # noqa: E501
        :type: bool
        """

        self._result = result

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
        if issubclass(Installment2, dict):
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
        if not isinstance(other, Installment2):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
