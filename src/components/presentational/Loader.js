import React from 'react';
import '../../styles/Loader.css';


//Presentational React Component
export default class Loader extends React.Component {
    render() {
      return (
        <div className="loader">
          <div className="box">
            <div className="line-1" />
            <div className="line-2">
              <div className="triangle">
                <div className="shine" />
              </div>
            </div>
            <div className="line-3">
              <div className="triangle-sm">
                <div className="shine" />
              </div>
            </div>
            <div className="line-4">
              <div className="triangle-sm">
                <div className="shine" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }