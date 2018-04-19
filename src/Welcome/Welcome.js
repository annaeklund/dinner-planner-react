import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>
            At quo discere epicurei adolescens.

Prima postea delectus ea eam, <br/>ea vidisse explicari adolescens vix, his dicant fabulas dissentiunt an. <br/>Eu qui quaeque placerat consequuntur. Inermis intellegat sententiae<br/> qui et. Eu percipit sensibus eam, augue electram abhorreant est ex.<br/> Quot invenire id vis, tale blandit philosophia ex duo, soluta dissentiunt <br/>quo eu. Vis habeo delicata ne.
        </p>
        
        <Link to="/search">
            <button id="btn">Start planning</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
