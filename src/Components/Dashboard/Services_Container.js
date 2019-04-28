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
            to={{
              pathname: '/services',
              state: {
                service: 'GPA'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'GPA'
          >
            General Power of Attorney for Property
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'SPA'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'SPA'
          >
            Special Power of Attorney for Property
          </Link>
        </div>
        <div className="py-2 px-3 col-4 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'Will'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'Will'
          >
            Will
          </Link>
        </div>
        <div className="py-2 px-3 col-4 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'marriage_registeration'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'marriage_registeration'
          >
            Marriage Registration
          </Link>
        </div>
        <div className="py-2 px-3 col-4 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'gift'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'gift'
          >
            Gift Deed
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left ">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'revocation'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'revocation'
          >
            Revocation of Power of Attorney
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'salepurch'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'salepurch'
          >
            Sale/Purchase of Vehicle
          </Link>
        </div>
      </div>
      <div className="display8">Rent or Lease</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-12 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'Rent_Agreement'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'Rent_Agreement'
          >
            Rental Agreement
          </Link>
        </div>
      </div>
      <div className="display8">General Affidavits</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'name_change'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'name_change'
          >
            Name Changing Affidavit
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'age'
              }
            }}
            className="btn btn-outline-primary col-12"
            service = 'age'
          >
            Affidavit Regarding Age
          </Link>
        </div>
        <div className="py-2 px-3 col-12 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'nothirdpartyloss'
              }
            }}
            className="btn btn-outline-primary col-12"
            service='nothirdpartyloss'
          >
            No third party loss in accident Affidavit
          </Link>
        </div>
      </div>
      <div className="display8">For Companies</div>
      <div className="services___btn-container">
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'NDA'
              }
            }}
            className="btn btn-outline-primary col-12"
            service='NDA'
          >
            Non Disclosure Agreement
          </Link>
        </div>
        <div className="py-2 px-3 col-6 float-left">
          <Link
            to={{
              pathname: '/services',
              state: {
                service: 'employment'
              }
            }}
            className="btn btn-outline-primary col-12"
            service='employment'
          >
            Employment Contract
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services_Container;
