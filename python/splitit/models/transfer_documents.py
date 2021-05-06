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


class TransferDocuments(object):
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
        'id': 'int',
        'amount': 'float',
        'currency_id': 'int',
        'business_unit_id': 'int',
        'ach_status': 'int',
        'currency': 'Currencies',
        'transfer_document_details': 'list[TransferDocumentDetails]'
    }

    attribute_map = {
        'id': 'Id',
        'amount': 'Amount',
        'currency_id': 'CurrencyId',
        'business_unit_id': 'BusinessUnitId',
        'ach_status': 'AchStatus',
        'currency': 'Currency',
        'transfer_document_details': 'TransferDocumentDetails'
    }

    def __init__(self, id=None, amount=None, currency_id=None, business_unit_id=None, ach_status=None, currency=None, transfer_document_details=None):  # noqa: E501
        """TransferDocuments - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._amount = None
        self._currency_id = None
        self._business_unit_id = None
        self._ach_status = None
        self._currency = None
        self._transfer_document_details = None
        self.discriminator = None

        self._id = id
        self._amount = amount
        self._currency_id = currency_id
        self._business_unit_id = business_unit_id
        self._ach_status = ach_status
        if currency is not None:
            self._currency = currency
        if transfer_document_details is not None:
            self._transfer_document_details = transfer_document_details

    @property
    def id(self):
        """Gets the id of this TransferDocuments.  # noqa: E501


        :return: The id of this TransferDocuments.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this TransferDocuments.


        :param id: The id of this TransferDocuments.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def amount(self):
        """Gets the amount of this TransferDocuments.  # noqa: E501


        :return: The amount of this TransferDocuments.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this TransferDocuments.


        :param amount: The amount of this TransferDocuments.  # noqa: E501
        :type: float
        """
        
        if amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501

        self._amount = amount

    @property
    def currency_id(self):
        """Gets the currency_id of this TransferDocuments.  # noqa: E501


        :return: The currency_id of this TransferDocuments.  # noqa: E501
        :rtype: int
        """
        return self._currency_id

    @currency_id.setter
    def currency_id(self, currency_id):
        """Sets the currency_id of this TransferDocuments.


        :param currency_id: The currency_id of this TransferDocuments.  # noqa: E501
        :type: int
        """
        
        if currency_id is None:
            raise ValueError("Invalid value for `currency_id`, must not be `None`")  # noqa: E501

        self._currency_id = currency_id

    @property
    def business_unit_id(self):
        """Gets the business_unit_id of this TransferDocuments.  # noqa: E501


        :return: The business_unit_id of this TransferDocuments.  # noqa: E501
        :rtype: int
        """
        return self._business_unit_id

    @business_unit_id.setter
    def business_unit_id(self, business_unit_id):
        """Sets the business_unit_id of this TransferDocuments.


        :param business_unit_id: The business_unit_id of this TransferDocuments.  # noqa: E501
        :type: int
        """
        
        if business_unit_id is None:
            raise ValueError("Invalid value for `business_unit_id`, must not be `None`")  # noqa: E501

        self._business_unit_id = business_unit_id

    @property
    def ach_status(self):
        """Gets the ach_status of this TransferDocuments.  # noqa: E501


        :return: The ach_status of this TransferDocuments.  # noqa: E501
        :rtype: int
        """
        return self._ach_status

    @ach_status.setter
    def ach_status(self, ach_status):
        """Sets the ach_status of this TransferDocuments.


        :param ach_status: The ach_status of this TransferDocuments.  # noqa: E501
        :type: int
        """
        
        if ach_status is None:
            raise ValueError("Invalid value for `ach_status`, must not be `None`")  # noqa: E501

        self._ach_status = ach_status

    @property
    def currency(self):
        """Gets the currency of this TransferDocuments.  # noqa: E501


        :return: The currency of this TransferDocuments.  # noqa: E501
        :rtype: Currencies
        """
        return self._currency

    @currency.setter
    def currency(self, currency):
        """Sets the currency of this TransferDocuments.


        :param currency: The currency of this TransferDocuments.  # noqa: E501
        :type: Currencies
        """

        self._currency = currency

    @property
    def transfer_document_details(self):
        """Gets the transfer_document_details of this TransferDocuments.  # noqa: E501


        :return: The transfer_document_details of this TransferDocuments.  # noqa: E501
        :rtype: list[TransferDocumentDetails]
        """
        return self._transfer_document_details

    @transfer_document_details.setter
    def transfer_document_details(self, transfer_document_details):
        """Sets the transfer_document_details of this TransferDocuments.


        :param transfer_document_details: The transfer_document_details of this TransferDocuments.  # noqa: E501
        :type: list[TransferDocumentDetails]
        """

        self._transfer_document_details = transfer_document_details

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
        if issubclass(TransferDocuments, dict):
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
        if not isinstance(other, TransferDocuments):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
