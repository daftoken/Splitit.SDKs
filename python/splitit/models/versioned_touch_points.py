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


class VersionedTouchPoints(object):
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
        'version': 'str',
        'touch_point_id': 'int',
        'sub_version': 'str',
        'touch_point': 'TouchPoints',
        'pis_sessions': 'list[PisSessions]',
        'installment_plan_audit_logs': 'list[InstallmentPlanAuditLogs]'
    }

    attribute_map = {
        'id': 'Id',
        'version': 'Version',
        'touch_point_id': 'TouchPointId',
        'sub_version': 'SubVersion',
        'touch_point': 'TouchPoint',
        'pis_sessions': 'PisSessions',
        'installment_plan_audit_logs': 'InstallmentPlanAuditLogs'
    }

    def __init__(self, id=None, version=None, touch_point_id=None, sub_version=None, touch_point=None, pis_sessions=None, installment_plan_audit_logs=None):  # noqa: E501
        """VersionedTouchPoints - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._version = None
        self._touch_point_id = None
        self._sub_version = None
        self._touch_point = None
        self._pis_sessions = None
        self._installment_plan_audit_logs = None
        self.discriminator = None

        self._id = id
        if version is not None:
            self._version = version
        self._touch_point_id = touch_point_id
        if sub_version is not None:
            self._sub_version = sub_version
        if touch_point is not None:
            self._touch_point = touch_point
        if pis_sessions is not None:
            self._pis_sessions = pis_sessions
        if installment_plan_audit_logs is not None:
            self._installment_plan_audit_logs = installment_plan_audit_logs

    @property
    def id(self):
        """Gets the id of this VersionedTouchPoints.  # noqa: E501


        :return: The id of this VersionedTouchPoints.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this VersionedTouchPoints.


        :param id: The id of this VersionedTouchPoints.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def version(self):
        """Gets the version of this VersionedTouchPoints.  # noqa: E501


        :return: The version of this VersionedTouchPoints.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this VersionedTouchPoints.


        :param version: The version of this VersionedTouchPoints.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def touch_point_id(self):
        """Gets the touch_point_id of this VersionedTouchPoints.  # noqa: E501


        :return: The touch_point_id of this VersionedTouchPoints.  # noqa: E501
        :rtype: int
        """
        return self._touch_point_id

    @touch_point_id.setter
    def touch_point_id(self, touch_point_id):
        """Sets the touch_point_id of this VersionedTouchPoints.


        :param touch_point_id: The touch_point_id of this VersionedTouchPoints.  # noqa: E501
        :type: int
        """
        
        if touch_point_id is None:
            raise ValueError("Invalid value for `touch_point_id`, must not be `None`")  # noqa: E501

        self._touch_point_id = touch_point_id

    @property
    def sub_version(self):
        """Gets the sub_version of this VersionedTouchPoints.  # noqa: E501


        :return: The sub_version of this VersionedTouchPoints.  # noqa: E501
        :rtype: str
        """
        return self._sub_version

    @sub_version.setter
    def sub_version(self, sub_version):
        """Sets the sub_version of this VersionedTouchPoints.


        :param sub_version: The sub_version of this VersionedTouchPoints.  # noqa: E501
        :type: str
        """

        self._sub_version = sub_version

    @property
    def touch_point(self):
        """Gets the touch_point of this VersionedTouchPoints.  # noqa: E501


        :return: The touch_point of this VersionedTouchPoints.  # noqa: E501
        :rtype: TouchPoints
        """
        return self._touch_point

    @touch_point.setter
    def touch_point(self, touch_point):
        """Sets the touch_point of this VersionedTouchPoints.


        :param touch_point: The touch_point of this VersionedTouchPoints.  # noqa: E501
        :type: TouchPoints
        """

        self._touch_point = touch_point

    @property
    def pis_sessions(self):
        """Gets the pis_sessions of this VersionedTouchPoints.  # noqa: E501


        :return: The pis_sessions of this VersionedTouchPoints.  # noqa: E501
        :rtype: list[PisSessions]
        """
        return self._pis_sessions

    @pis_sessions.setter
    def pis_sessions(self, pis_sessions):
        """Sets the pis_sessions of this VersionedTouchPoints.


        :param pis_sessions: The pis_sessions of this VersionedTouchPoints.  # noqa: E501
        :type: list[PisSessions]
        """

        self._pis_sessions = pis_sessions

    @property
    def installment_plan_audit_logs(self):
        """Gets the installment_plan_audit_logs of this VersionedTouchPoints.  # noqa: E501


        :return: The installment_plan_audit_logs of this VersionedTouchPoints.  # noqa: E501
        :rtype: list[InstallmentPlanAuditLogs]
        """
        return self._installment_plan_audit_logs

    @installment_plan_audit_logs.setter
    def installment_plan_audit_logs(self, installment_plan_audit_logs):
        """Sets the installment_plan_audit_logs of this VersionedTouchPoints.


        :param installment_plan_audit_logs: The installment_plan_audit_logs of this VersionedTouchPoints.  # noqa: E501
        :type: list[InstallmentPlanAuditLogs]
        """

        self._installment_plan_audit_logs = installment_plan_audit_logs

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
        if issubclass(VersionedTouchPoints, dict):
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
        if not isinstance(other, VersionedTouchPoints):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
