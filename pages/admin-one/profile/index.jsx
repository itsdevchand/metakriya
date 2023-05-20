import React from 'react';
import Image from 'next/image';
import cls from 'classnames';
import s from './Profile.module.scss';
import Avatar from '../../../public/images/prasanna/user-one.jpg';
import { IoMdPerson, IoMdNotificationsOutline } from 'react-icons/io';
import { FaSignInAlt } from 'react-icons/fa';
import { BsCheck2Square, BsSliders } from 'react-icons/bs';
import { RiMapPin2Line } from 'react-icons/ri';

const Profile = () => {
  return (
    <>
      <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <div className="sidebar-brand">
              <span className="align-middle">AdminKit</span>
            </div>

            <ul className="sidebar-nav">
              <li className="sidebar-header">Pages</li>

              <li className="sidebar-item active">
                <div className="sidebar-link">
                  <BsSliders />
                  <span className="align-middle">Dashboard</span>
                </div>
              </li>

              <li className="sidebar-item">
                <div className="sidebar-link">
                  <IoMdPerson />
                  <span className="align-middle">Profile</span>
                </div>
              </li>

              <li className="sidebar-item">
                <div className="sidebar-link">
                  <FaSignInAlt />
                  <span className="align-middle">Sign In</span>
                </div>
              </li>

              <li className="sidebar-header">Tools & Components</li>

              <li className="sidebar-item">
                <div className="sidebar-link">
                  <BsCheck2Square />
                  <span className="align-middle">Forms</span>
                </div>
              </li>

              <li className="sidebar-item">
                <div className="sidebar-link" href="ui-cards.html">
                  <i className="align-middle" data-feather="grid"></i>
                  <span className="align-middle">Cards</span>
                </div>
              </li>

              <li className="sidebar-item">
                <div className="sidebar-link" href="ui-typography.html">
                  <i className="align-middle" data-feather="align-left"></i>
                  <span className="align-middle">Typography</span>
                </div>
              </li>

              <li className="sidebar-item">
                <div className="sidebar-link" href="icons-feather.html">
                  <i className="align-middle" data-feather="coffee"></i>
                  <span className="align-middle">Icons</span>
                </div>
              </li>

              <li className="sidebar-header">Plugins & Addons</li>

              <li className="sidebar-item">
                <div className="sidebar-link" href="charts-chartjs.html">
                  <i className="align-middle" data-feather="bar-chart-2"></i>
                  <span className="align-middle">Charts</span>
                </div>
              </li>

              <li className="sidebar-item">
                <div className="sidebar-link" href="maps-google.html">
                  <RiMapPin2Line />
                  <span className="align-middle">Maps</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main">
          <nav className="navbar navbar-expand navbar-light navbar-bg">
            <div className="sidebar-toggle js-sidebar-toggle">
              <i className="hamburger align-self-center"></i>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-align">
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <div className="position-relative">
                      <IoMdNotificationsOutline />
                      <span className="indicator">4</span>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                    aria-labelledby="alertsDropdown"
                  >
                    <div className="dropdown-menu-header">
                      4 New Notifications
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i
                              className="text-danger"
                              data-feather="alert-circle"
                            ></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Update completed</div>
                            <div className="text-muted small mt-1">
                              Restart server 12 to complete the update.
                            </div>
                            <div className="text-muted small mt-1">30m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-warning" data-feather="bell"></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Lorem ipsum</div>
                            <div className="text-muted small mt-1">
                              Aliquam ex eros, imperdiet vulputate hendrerit et.
                            </div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-primary" data-feather="home"></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">
                              Login from 192.186.1.8
                            </div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i
                              className="text-success"
                              data-feather="user-plus"
                            ></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">New connection</div>
                            <div className="text-muted small mt-1">
                              Christina accepted your request.
                            </div>
                            <div className="text-muted small mt-1">14h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">
                        Show all notifications
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <div className="position-relative">
                      <i
                        className="align-middle"
                        data-feather="message-square"
                      ></i>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                    aria-labelledby="messagesDropdown"
                  >
                    <div className="dropdown-menu-header">
                      <div className="position-relative">4 New Messages</div>
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <Image
                              layout="fill"
                              src={Avatar}
                              className="avatar img-fluid rounded-circle"
                              alt="Vanessa Tucker"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Vanessa Tucker</div>
                            <div className="text-muted small mt-1">
                              Nam pretium turpis et arcu. Duis arcu tortor.
                            </div>
                            <div className="text-muted small mt-1">15m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <Image
                              layout="fill"
                              src={Avatar}
                              className="avatar img-fluid rounded-circle"
                              alt="William Harris"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">William Harris</div>
                            <div className="text-muted small mt-1">
                              Curabitur ligula sapien euismod vitae.
                            </div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <Image
                              layout="fill"
                              src={Avatar}
                              className="avatar img-fluid rounded-circle"
                              alt="Christina Mason"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Christina Mason</div>
                            <div className="text-muted small mt-1">
                              Pellentesque auctor neque nec urna.
                            </div>
                            <div className="text-muted small mt-1">4h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <Image
                              layout="fill"
                              src={Avatar}
                              className="avatar img-fluid rounded-circle"
                              alt="Sharon Lessman"
                            />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Sharon Lessman</div>
                            <div className="text-muted small mt-1">
                              Aenean tellus metus, bibendum sed, posuere ac,
                              mattis non.
                            </div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">
                        Show all messages
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="align-middle" data-feather="settings"></i>
                  </a>

                  <div
                    className="nav-link dropdown-toggle d-none d-sm-flex"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <div className={cls(s.profileImg)}>
                      <Image
                        layout="fill"
                        src={Avatar}
                        className="avatar img-fluid rounded me-1"
                        alt="Charles Hall"
                      />
                    </div>
                    <span className="text-dark">Charles Hall</span>
                  </div>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="align-middle me-1" data-feather="user"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        className="align-middle me-1"
                        data-feather="pie-chart"
                      ></i>
                      Analytics
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="index.html">
                      <i
                        className="align-middle me-1"
                        data-feather="settings"
                      ></i>
                      Settings & Privacy
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        className="align-middle me-1"
                        data-feather="help-circle"
                      ></i>
                      Help Center
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <main className="content">
            <div className="container-fluid p-0">
              <div className="mb-3">
                <h1 className="h3 d-inline align-middle">Profile</h1>
                <a
                  className="badge bg-dark text-white ms-2"
                  href="upgrade-to-pro.html"
                >
                  Get more page examples
                </a>
              </div>
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Profile Details</h5>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className={cls(s.profileMainImg)}>
                        <Image
                          layout="fill"
                          src={Avatar}
                          alt="Christina Mason"
                          className="img-fluid rounded-circle mb-2"
                        />
                      </div>
                      <h5 className="card-title mb-0">Christina Mason</h5>
                      <div className="text-muted mb-2">Lead Developer</div>

                      <div>
                        <button
                          className="btn btn-primary text-white btn-sm me-2"
                          href="#"
                        >
                          Follow
                        </button>
                        <button
                          className="btn btn-primary text-white btn-sm"
                          href="#"
                        >
                          <span data-feather="message-square"></span> Message
                        </button>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <h5 className="h6 card-title">Skills</h5>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        HTML
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        JavaScript
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        Sass
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        Angular
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        Vue
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        React
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        Redux
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        UI
                      </a>
                      <a href="#" className="badge bg-primary me-1 my-1">
                        UX
                      </a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <h5 className="h6 card-title">About</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                          <span
                            data-feather="home"
                            className="feather-sm me-1"
                          ></span>{' '}
                          Lives in <a href="#">San Francisco, SA</a>
                        </li>

                        <li className="mb-1">
                          <span
                            data-feather="briefcase"
                            className="feather-sm me-1"
                          ></span>{' '}
                          Works at <a href="#">GitHub</a>
                        </li>
                        <li className="mb-1">
                          <span
                            data-feather="map-pin"
                            className="feather-sm me-1"
                          ></span>{' '}
                          From <a href="#">Boston</a>
                        </li>
                      </ul>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <h5 className="h6 card-title">Elsewhere</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                          <a href="#">staciehall.co</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Twitter</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Facebook</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Instagram</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">LinkedIn</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-8 col-xl-9">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Activities</h5>
                    </div>
                    <div className="card-body h-100">
                      <div className="d-flex align-items-start">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">5m ago</small>
                          <strong>Vanessa Tucker</strong> started following{' '}
                          <strong>Christina Mason</strong>
                          <br />
                          <small className="text-muted">Today 7:51 pm</small>
                          <br />
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex align-items-start position-relative">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">30m ago</small>
                          <strong>Charles Hall</strong> posted something on{' '}
                          <strong>Christina Mason</strong>'s timeline
                          <br />
                          <small className="text-muted">Today 7:21 pm</small>
                          <div className="border text-sm text-muted p-2 mt-1">
                            Etiam rhoncus. Maecenas tempus, tellus eget
                            condimentum rhoncus, sem quam semper libero, sit
                            amet adipiscing sem neque sed ipsum. Nam quam nunc,
                            blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus. Donec
                            vitae sapien ut libero venenatis faucibus. Nullam
                            quis ante.
                          </div>
                          <a href="#" className="btn btn-sm btn-danger mt-1">
                            <i className="feather-sm" data-feather="heart"></i>{' '}
                            Like
                          </a>
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex align-items-start position-relative">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">1h ago</small>
                          <strong>Christina Mason</strong> posted a new blog
                          <br />
                          <small className="text-muted">Today 6:35 pm</small>
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex align-items-start position-relative">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">3h ago</small>
                          <strong>William Harris</strong> posted two photos on{' '}
                          <strong>Christina Mason</strong>'s timeline
                          <br />
                          <small className="text-muted">Today 5:12 pm</small>
                          <div className="row g-0 mt-1">
                            <div className="col-6 col-md-4 col-lg-4 col-xl-3 position-relative">
                              <div
                                className={cls(
                                  'img-box position-relative',
                                  s.imgBox
                                )}
                              >
                                <Image
                                  layout="fill"
                                  src={Avatar}
                                  className="rounded-circle me-2 position-relative"
                                  alt="Vanessa Tucker"
                                />
                              </div>
                              position-relative{' '}
                            </div>
                            <div className="col-6 col-md-4 col-lg-4 col-xl-3 position-relative">
                              <div
                                className={cls(
                                  'img-box position-relative',
                                  s.imgBox
                                )}
                              >
                                <Image
                                  layout="fill"
                                  src={Avatar}
                                  className="rounded-circle me-2 position-relative"
                                  alt="Vanessa Tucker"
                                />
                              </div>
                              position-relative{' '}
                            </div>
                          </div>
                          <a href="#" className="btn btn-sm btn-danger mt-1">
                            <i className="feather-sm" data-feather="heart"></i>{' '}
                            Like
                          </a>
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex align-items-start position-relative">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">1d ago</small>
                          <strong>William Harris</strong> started following{' '}
                          <strong>Christina Mason</strong>
                          <br />
                          <small className="text-muted">
                            Yesterday 3:12 pm
                          </small>
                          <div className="d-flex align-items-start mt-1">
                            <a className="position-relative pe-3" href="#">
                              <div
                                className={cls(
                                  'img-box position-relative',
                                  s.imgBox
                                )}
                              >
                                <Image
                                  layout="fill"
                                  src={Avatar}
                                  className="rounded-circle me-2 position-relative"
                                  alt="Vanessa Tucker"
                                />
                              </div>
                            </a>
                            <div className="flex-grow-1">
                              <div className="border text-sm text-muted p-2 mt-1">
                                Nam quam nunc, blandit vel, luctus pulvinar,
                                hendrerit id, lorem. Maecenas nec odio et ante
                                tincidunt tempus.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex align-items-start position-relative">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">1d ago</small>
                          <strong>Christina Mason</strong> posted a new blog
                          <br />
                          <small className="text-muted">
                            Yesterday 2:43 pm
                          </small>
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex align-items-start position-relative">
                        <div
                          className={cls('img-box position-relative', s.imgBox)}
                        >
                          <Image
                            layout="fill"
                            src={Avatar}
                            className="rounded-circle me-2 position-relative"
                            alt="Vanessa Tucker"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <small className="float-end text-navy">1d ago</small>
                          <strong>Charles Hall</strong> started following{' '}
                          <strong>Christina Mason</strong>
                          <br />
                          <small className="text-muted">
                            Yesterdag 1:51 pm
                          </small>
                        </div>
                      </div>

                      <hr />
                      <div className="d-grid">
                        <a href="#" className="btn btn-primary text-white">
                          Load more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a
                      className="text-muted"
                      href="https://adminkit.io/"
                      target="_blank"
                    >
                      <strong>AdminKit</strong>
                    </a>{' '}
                    &copy;
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Support
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Help Center
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Profile;
