import React from "react";
import PropTypes from 'prop-types';

export default function Progressbar({percent = 0, maxPercent = 100}) {
  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: percent + '%'}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax={maxPercent}></div>
    </div>
  )
}

Progressbar.propTypes = {
  percent: PropTypes.number,
  maxPercent: PropTypes.number
};