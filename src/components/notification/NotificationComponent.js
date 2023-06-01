import React, { useEffect, useState } from "react";
import * as NotificatinService from "../../services/notification";
import { Card } from "react-bootstrap";

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState();
  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const response = await NotificatinService.getNotifications();
    if (response) {
      setNotifications(response);
    }
  };

  return (
    <>
      {notifications &&
        notifications.map((notification, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title
                className={`text-${
                  notification.type === "error" ? "danger" : notification.type
                }`}
              >
                {notification.details}
              </Card.Title>
              <Card.Text>{notification.time}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export { NotificationComponent };
