import React from 'react';
import '../../index.css'

function Navbar() {
  return (
    <div className="navbar bg-base-200">
        <div className="navbar-start space-x-5">
            <div className="dropdown">
                <a className="normal-case text-xl" href="/"><strong>ZooReact Simulator visitor</strong></a>
            </div>
            <div className="navbar-end">
                <a className="btn bg-emerald-500 text-white">Visitor</a>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
