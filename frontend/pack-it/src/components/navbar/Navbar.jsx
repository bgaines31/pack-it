import React from 'react';
// import {suitcase} from "../images/"
import { Suitcase } from '../images/Suitcase';
export const Navbar = ({ trips }) => {
  console.log(trips);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {/* <img
              // src={<Suitcase />}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            /> */}
            Pack it!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Add a Trip
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Upcoming Trips
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  {trips.map((trip) => {
                    return (
                      <li>
                        <a class="dropdown-item" href={`/${trip.id}/packingList`}>
                          {trip.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
