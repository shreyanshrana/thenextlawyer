import React from "react";
import { Link } from "react-router-dom";
import "./Services_Container.scss";
const Services_Container = props => {
  return (
    <div className="dashboard__container">
      <div className="display6">Create New</div>
      <div className="display8">Personal and Family</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            General Power of Attorney for Property
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Special Power of Attorney for Property
          </Link>
        </div>
        <div className="py-2 px-3 col-4 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Will
          </Link>
        </div>
        <div className="py-2 px-3 col-4 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Marriage Registration
          </Link>
        </div>
        <div className="py-2 px-3 col-4 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Gift Deed
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left ">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Revocation of Power of Attorney
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Sale/Purchase of Vehicle
          </Link>
        </div>
      </div>
      <div className="display8">Rent or Lease</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-12 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Rental Agreement
          </Link>
        </div>
      </div>
      <div className="display8">General Affidavits</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Name Changing Affidavit
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Affidavit Regarding Age
          </Link>
        </div>
        <div className="py-2 px-3 col-12 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            No third party loss in accident Affidavit
          </Link>
        </div>
      </div>
      <div className="display8">For Companies</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Non Disclosure Agreement
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to="/dashboard/services/gpa"
            className="btn  btn-outline-primary col-12"
          >
            Employment Contract
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services_Container;
