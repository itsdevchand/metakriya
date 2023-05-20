import Image from 'next/image';
import UserImg from '../../public/images/prasanna/user-one.jpg';
import cls from 'classnames';
import s from '../../styles/Profile.module.scss';
import { IoPersonOutline } from 'react-icons/io5';
import { BsGrid } from 'react-icons/bs';
import { useState } from 'react';

const Profile = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className={cls(s.profileBox)}>
      {showModel && (
        <div
          className={cls(s.bgOverlay)}
          onClick={() => {
            setShowModel(!showModel);
          }}
        ></div>
      )}

      {showModel && (
        <div
          className={cls(s.crossIcon)}
          onClick={() => {
            setShowModel(!showModel);
          }}
        >
          <span>&#x2715;</span>
        </div>
      )}

      <div className={cls('py-5 mb-5', s.profileHeader)}>
        <div className="container text-center">
          <div className={cls(s.profileImg)}>
            <Image layout="fill" src={UserImg} alt="Picture of the User" />
          </div>
          <h2>Hemant</h2>
          <div className={cls(s.userEmail)}>someone@gmail.com</div>
        </div>
      </div>

      <div className={cls('mb-5', s.profileBody)}>
        <div className="container d-md-flex d-block">
          <div className={cls('shadow p-3 mb-md-0 mb-4', s.profileMenu)}>
            <ul className={cls('p-4', s.menuBox)}>
              <li
                className={cls('d-flex-align py-2 px-4', s.menuItem, s.active)}
              >
                <BsGrid />
                <span className={cls('ms-3')}>Overview</span>
              </li>
              <li className={cls('d-flex-align py-2 px-4', s.menuItem)}>
                <IoPersonOutline />
                <span className={cls('ms-3')}>Profile</span>
              </li>
              <li className={cls('d-flex-align py-2 px-4', s.menuItem)}>
                <BsGrid />
                <span className={cls('ms-3')}>Order</span>
              </li>
              <li className={cls('d-flex-align py-2 px-4', s.menuItem)}>
                <BsGrid />
                <span className={cls('ms-3')}>Wishlist</span>
              </li>
              <li className={cls('d-flex-align py-2 px-4', s.menuItem)}>
                <BsGrid />
                <span className={cls('ms-3')}>Address</span>
              </li>
              <li className={cls('d-flex-align py-2 px-4', s.menuItem)}>
                <BsGrid />
                <span className={cls('ms-3')}>Logout</span>
              </li>
            </ul>
          </div>

          {/* <div className={cls('ms-md-4 shadow p-4', s.profileBox)}>
            <form action="">
              <div className="input-group mb-3">
                <div className="input-box">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    aria-label="firstname"
                  />
                </div>
                <div className="ms-lg-4 input-box">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    aria-label="lastname"
                  />
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-box">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    aria-label="firstname"
                  />
                </div>
                <div className="ms-lg-4 input-box">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    aria-label="lastname"
                  />
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="input-box">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    aria-label="firstname"
                  />
                </div>
                <div className="ms-lg-4 input-box">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    aria-label="lastname"
                  />
                </div>
              </div>

              <div className="input-group">
                <input
                  className="btn btn-danger"
                  type="submit"
                  value={'cancel'}
                />
                <input
                  className="btn btn-primary ms-3 text-white"
                  type="submit"
                  value={'Save Changes'}
                />
              </div>
            </form>
          </div> */}

          <div className={cls('ms-md-4 shadow p-4', s.profileBox)}>
            <div>Order List</div>
            <table className={cls('table mt-3', s.userTable)}>
              <tr>
                <th>order#</th>
                <th>Date Purchased</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>#12457896</td>
                <td>Sep 9 2021</td>
                <td>
                  <span className={cls(s.progressTab)}>in progress</span>
                </td>
                <td>2145</td>
                <td className={cls(s.actionBox)}>
                  <BsGrid
                    className={cls(s.actionIcon)}
                    onClick={() => {
                      setShowModel(!showModel);
                    }}
                  />

                  {showModel && (
                    <div className={cls(s.actionModel)}>
                      <div>hello</div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt eligendi sequi rerum officiis error, sunt
                        facilis nemo. Dolores accusantium adipisci, at,
                        repudiandae ullam explicabo consequuntur maxime ex nobis
                        magni quae?
                      </p>
                    </div>
                  )}
                </td>
              </tr>

              <tr>
                <td>#12457896</td>
                <td>Sep 9 2021</td>
                <td>
                  <span className={cls(s.progressTab)}>in progress</span>
                </td>
                <td>2145</td>
                <td>
                  <BsGrid />
                </td>
              </tr>

              <tr>
                <td>#12457896</td>
                <td>Sep 9 2021</td>
                <td>
                  <span className={cls(s.progressTab)}>in progress</span>
                </td>
                <td>2145</td>
                <td>
                  <BsGrid />
                </td>
              </tr>

              <tr>
                <td>#12457896</td>
                <td>Sep 9 2021</td>
                <td>
                  <span className={cls(s.progressTab)}>in progress</span>
                </td>
                <td>2145</td>
                <td>
                  <BsGrid />
                </td>
              </tr>

              <tr>
                <td>#12457896</td>
                <td>Sep 9 2021</td>
                <td>
                  <span className={cls(s.progressTab)}>in progress</span>
                </td>
                <td>2145</td>
                <td>
                  <BsGrid />
                </td>
              </tr>

              <tr>
                <td>#12457896</td>
                <td>Sep 9 2021</td>
                <td>
                  <span className={cls(s.progressTab)}>in progress</span>
                </td>
                <td>2145</td>
                <td>
                  <BsGrid />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
