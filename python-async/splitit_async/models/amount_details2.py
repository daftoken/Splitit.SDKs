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


class AmountDetails2(object):
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
        'sub_total': 'float',
        'tax': 'float',
        'shipping': 'float'
    }

    attribute_map = {
        'sub_total': 'SubTotal',
        'tax': 'Tax',
        'shipping': 'Shipping'
    }

    def __init__(self, sub_total=None, tax=None, shipping=None):  # noqa: E501
        """AmountDetails2 - a model defined in Swagger"""  # noqa: E501

        self._sub_total = None
        self._tax = None
        self._shipping = None
        self.discriminator = None

        self._sub_total = sub_total
        self._tax = tax
        self._shipping = shipping

    @property
    def sub_total(self):
        """Gets the sub_total of this AmountDetails2.  # noqa: E501


        :return: The sub_total of this AmountDetails2.  # noqa: E501
        :rtype: float
        """
        return self._sub_total

    @sub_total.setter
    def sub_total(self, sub_total):
        """Sets the sub_total of this AmountDetails2.


        :param sub_total: The sub_total of this AmountDetails2.  # noqa: E501
        :type: float
        """
        
        if sub_total is None:
            raise ValueError("Invalid value for `sub_total`, must not be `None`")  # noqa: E501

        self._sub_total = sub_total

    @property
    def tax(self):
        """Gets the tax of this AmountDetails2.  # noqa: E501


        :return: The tax of this AmountDetails2.  # noqa: E501
        :rtype: float
        """
        return self._tax

    @tax.setter
    def tax(self, tax):
        """Sets the tax of this AmountDetails2.


        :param tax: The tax of this AmountDetails2.  # noqa: E501
        :type: float
        """
        
        if tax is None:
            raise ValueError("Invalid value for `tax`, must not be `None`")  # noqa: E501

        self._tax = tax

    @property
    def shipping(self):
        """Gets the shipping of this AmountDetails2.  # noqa: E501


        :return: The shipping of this AmountDetails2.  # noqa: E501
        :rtype: float
        """
        return self._shipping

    @shipping.setter
    def shipping(self, shipping):
        """Sets the shipping of this AmountDetails2.


        :param shipping: The shipping of this AmountDetails2.  # noqa: E501
        :type: float
        """
        
        if shipping is None:
            raise ValueError("Invalid value for `shipping`, must not be `None`")  # noqa: E501

        self._shipping = shipping

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
        if issubclass(AmountDetails2, dict):
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
        if not isinstance(other, AmountDetails2):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
