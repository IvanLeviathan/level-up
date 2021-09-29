import React from 'react'
import { Alert } from 'react-bootstrap';
import "./style.scss";

export default function Alerts(alerts = []) {
  return (
    alerts.items.length ? (
      <div className="alerts">
        {alerts.items.map((alert) => {
          return (
            <Alert key={alert.id} variant={alert.type}>
              {alert.text}
            </Alert>
          )
        })}
      </div>
    ) : null
  )
}
