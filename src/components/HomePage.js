import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="row" style={{marginTop: "50px", height: "500px"}}>
      <div className="col-md-6 offset-md-3 text-center" style={{backgroundColor: "lightGrey", paddingTop: "20px"}}>
        <h2>Welcome to City Scape</h2>
        <p>
          Gain insights into how cities across the world rank in terms of their tallest buildings.
          Visit the links below to sort cities according to key features.
        </p>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/city'}>City</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/country'}>Country</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/all-buildings'}>All Buildings</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/100m+'}>100m+ Height</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/150m+'}>150m+ Height</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/200m+'}>200m+ Height</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/300m+'}>300m+ Height</Link>
        <Link className="btn btn-outline-secondary btn-sm btn-block" to={'/all-structures'}>All Structures</Link>
      </div>
    </div>
  )
}

export default Home;
