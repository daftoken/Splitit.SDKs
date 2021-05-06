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


class TouchPointColorValues(object):
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
        'touch_point_id': 'int',
        'merchant_id': 'int',
        'merchant': 'Merchants',
        'colors': 'list[ConfigValues]',
        'touch_point': 'TouchPoints'
    }

    attribute_map = {
        'id': 'Id',
        'touch_point_id': 'TouchPointId',
        'merchant_id': 'MerchantId',
        'merchant': 'Merchant',
        'colors': 'Colors',
        'touch_point': 'TouchPoint'
    }

    def __init__(self, id=None, touch_point_id=None, merchant_id=None, merchant=None, colors=None, touch_point=None):  # noqa: E501
        """TouchPointColorValues - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._touch_point_id = None
        self._merchant_id = None
        self._merchant = None
        self._colors = None
        self._touch_point = None
        self.discriminator = None

        self._id = id
        self._touch_point_id = touch_point_id
        if merchant_id is not None:
            self._merchant_id = merchant_id
        if merchant is not None:
            self._merchant = merchant
        if colors is not None:
            self._colors = colors
        if touch_point is not None:
            self._touch_point = touch_point

    @property
    def id(self):
        """Gets the id of this TouchPointColorValues.  # noqa: E501


        :return: The id of this TouchPointColorValues.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this TouchPointColorValues.


        :param id: The id of this TouchPointColorValues.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def touch_point_id(self):
        """Gets the touch_point_id of this TouchPointColorValues.  # noqa: E501


        :return: The touch_point_id of this TouchPointColorValues.  # noqa: E501
        :rtype: int
        """
        return self._touch_point_id

    @touch_point_id.setter
    def touch_point_id(self, touch_point_id):
        """Sets the touch_point_id of this TouchPointColorValues.


        :param touch_point_id: The touch_point_id of this TouchPointColorValues.  # noqa: E501
        :type: int
        """
        
        if touch_point_id is None:
            raise ValueError("Invalid value for `touch_point_id`, must not be `None`")  # noqa: E501

        self._touch_point_id = touch_point_id

    @property
    def merchant_id(self):
        """Gets the merchant_id of this TouchPointColorValues.  # noqa: E501


        :return: The merchant_id of this TouchPointColorValues.  # noqa: E501
        :rtype: int
        """
        return self._merchant_id

    @merchant_id.setter
    def merchant_id(self, merchant_id):
        """Sets the merchant_id of this TouchPointColorValues.


        :param merchant_id: The merchant_id of this TouchPointColorValues.  # noqa: E501
        :type: int
        """

        self._merchant_id = merchant_id

    @property
    def merchant(self):
        """Gets the merchant of this TouchPointColorValues.  # noqa: E501


        :return: The merchant of this TouchPointColorValues.  # noqa: E501
        :rtype: Merchants
        """
        return self._merchant

    @merchant.setter
    def merchant(self, merchant):
        """Sets the merchant of this TouchPointColorValues.


        :param merchant: The merchant of this TouchPointColorValues.  # noqa: E501
        :type: Merchants
        """

        self._merchant = merchant

    @property
    def colors(self):
        """Gets the colors of this TouchPointColorValues.  # noqa: E501


        :return: The colors of this TouchPointColorValues.  # noqa: E501
        :rtype: list[ConfigValues]
        """
        return self._colors

    @colors.setter
    def colors(self, colors):
        """Sets the colors of this TouchPointColorValues.


        :param colors: The colors of this TouchPointColorValues.  # noqa: E501
        :type: list[ConfigValues]
        """

        self._colors = colors

    @property
    def touch_point(self):
        """Gets the touch_point of this TouchPointColorValues.  # noqa: E501


        :return: The touch_point of this TouchPointColorValues.  # noqa: E501
        :rtype: TouchPoints
        """
        return self._touch_point

    @touch_point.setter
    def touch_point(self, touch_point):
        """Sets the touch_point of this TouchPointColorValues.


        :param touch_point: The touch_point of this TouchPointColorValues.  # noqa: E501
        :type: TouchPoints
        """

        self._touch_point = touch_point

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
        if issubclass(TouchPointColorValues, dict):
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
        if not isinstance(other, TouchPointColorValues):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
