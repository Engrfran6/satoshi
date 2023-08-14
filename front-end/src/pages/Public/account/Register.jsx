import {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {getUserData, userRequest} from '../../../components/Commons/HandleRequest';
import axios from 'axios';
import {userService} from '../../../services/userService';

userRequest;
export const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Pending');
  const [selectedItemId, setSelectedItemId] = useState();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    state: '',
    // address: '',
    packageId: '',
  });

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userRequest('/auth/register', formData);

      if (response.status == 200) {
        setMessage('success');
      } else {
        setMessage('failed');
      }

      navigate('/account/login');
    } catch (error) {
      console.error('Error', error);
      setMessage('failed');
    }
  };

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async () => {
    try {
      const response = await getUserData('/package');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{width: '100%'}}>
      <header
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          width: '100%',
          zIndex: '999',
        }}>
        <div style={{width: '100rem', height: '4rem', paddingLeft: '30px'}}>
          <NavLink to="/#">
            <p>SATOCHI TRADE PRO</p>
          </NavLink>
        </div>

        <div className="pull-right">
          <ul>
            <li
              style={{
                margin: '12px 40px 0 0',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                width: 'max-content',
              }}>
              <p style={{color: 'purple'}}> Have an account?</p>{' '}
              <NavLink
                to="/account/login"
                style={{background: 'rgb(38,155,72)', color: 'white'}}
                className="btn btn-primary">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      <div className="side_signing_full" style={{padding: '.1rem 0 5rem 0'}}>
        {message === 'success' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '80vh',
            }}>
            <p style={{color: 'green', fontSize: '1.1rem'}}>
              Registration successful! You can now log in.
            </p>
          </div>
        ) : message === 'failed' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '80vh',
            }}>
            <p style={{color: 'red', fontSize: '1.1rem'}}>
              Registration failed. Please try again later.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: '0',
              paddingTop: '8rem',
              width: '35%',
              margin: '0 auto',
            }}>
            <span>
              <h3 style={{color: 'crimson', textAlign: 'center'}} />
            </span>
            <span>
              <h3 style={{color: 'green', textAlign: 'center'}} />
            </span>
            <h2 style={{width: 'max-content', padding: '0 0 2rem 0', color: '#253978'}}>
              Create an account with Us!
            </h2>

            <label style={{color: 'black'}} className="font-weight-bold">
              Full Name
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Username
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Unique Username"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Email address
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@example.com"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Password
            </label>
            <input
              type="password"
              style={{color: 'black'}}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Retype Password
            </label>
            <input
              type="password"
              style={{color: 'black'}}
              className="form-control"
              name="comfirmPassword"
              placeholder="Confirm Password"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Phone Number
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Phone number"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            {/* <label style={{color: 'black'}} className="font-weight-bold">
              Referral ID
            </label> */}
            {/* <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="referal"
              value={formData.referal}
              onChange={handleInputChange}
              placeholder="Optional"
            /> */}
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Country
            </label>
            <select
              style={{color: '#252d47'}}
              className="form-control "
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              data-live-search="true"
              tabIndex={-1}
              aria-hidden="true"
              required>
              <option value>Your Country</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>American Samoa</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Anguilla</option>
              <option>Antarctica</option>
              <option>Antigua and Barbuda</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Aruba</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaidjan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bermuda</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia-Herzegovina</option>
              <option>Botswana</option>
              <option>Bouvet Island</option>
              <option>Brazil</option>
              <option>British Indian Ocean Territory</option>
              <option>Brunei Darussalam</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Cape Verde</option>
              <option>Cayman Islands</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Christmas Island</option>
              <option>Cocos (Keeling) Islands</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Congo</option>
              <option>Congo (Democratic Republic)</option>
              <option>Cook Islands</option>
              <option>Costa Rica</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>East Timor</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Ethiopia</option>
              <option>Falkland Islands</option>
              <option>Faroe Islands</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>France (European Territory)</option>
              <option>French Guiana</option>
              <option>French Southern Territories</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Gibraltar</option>
              <option>Great Britain</option>
              <option>Greece</option>
              <option>Greenland</option>
              <option>Grenada</option>
              <option>Guadeloupe</option>
              <option>Guam</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Guinea Bissau</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Heard and McDonald Islands</option>
              <option>Holy See (Vatican City State)</option>
              <option>Honduras</option>
              <option>Hong Kong</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Ivory Coast (Cote D`Ivoire)</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Kuwait</option>
              <option>Kyrgyz Republic (Kyrgyzstan)</option>
              <option>Laos</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Macau</option>
              <option>Macedonia</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Marshall Islands</option>
              <option>Martinique</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mayotte</option>
              <option>Mexico</option>
              <option>Micronesia</option>
              <option>Moldavia</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montserrat</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar</option>
              <option>Namibia</option>
              <option>Nauru</option>
              <option>Nepal</option>
              <option>Netherlands</option>
              <option>Netherlands Antilles</option>
              <option>New Caledonia</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>Niue</option>
              <option>Norfolk Island</option>
              <option>North Korea</option>
              <option>Northern Mariana Islands</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palau</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Pitcairn Island</option>
              <option>Poland</option>
              <option>Polynesia</option>
              <option>Portugal</option>
              <option>Puerto Rico</option>
              <option>Qatar</option>
              <option>Reunion</option>
              <option>Romania</option>
              <option>Russian Federation</option>
              <option>Rwanda</option>
              <option>S. Georgia &amp; S. Sandwich Isls.</option>
              <option>Saint Helena</option>
              <option>Saint Kitts &amp; Nevis Anguilla</option>
              <option>Saint Lucia</option>
              <option>Saint Pierre and Miquelon</option>
              <option>Saint Vincent &amp; Grenadines</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome and Principe</option>
              <option>Saudi Arabia</option>
              <option>Serbia</option>
              <option>Senegal</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovak Republic</option>
              <option>Slovenia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Korea</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Svalbard and Jan Mayen Islands</option>
              <option>Swaziland</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>Syria</option>
              <option>Taiwan</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>Togo</option>
              <option>Tokelau</option>
              <option>Tonga</option>
              <option>Trinidad and Tobago</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Turks and Caicos Islands</option>
              <option>Tuvalu</option>
              <option>USA Minor Outlying Islands</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Virgin Islands (British)</option>
              <option>Virgin Islands (USA)</option>
              <option>Wallis and Futuna Islands</option>
              <option>Weather Stations</option>
              <option>Western Sahara</option>
              <option>Yemen</option>
              <option>Yugoslavia</option>
              <option>Zaire</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              State
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Account Type
            </label>
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Portfolio
            </label>

            <select
              style={{color: '#252d47'}}
              className="form-control"
              name="packageId"
              value={formData.packageId}
              onChange={handleInputChange}
              required>
              <option required>Select invvestment package</option>
              {packages.map((item, index) => (
                <option value={item._id} key={index}>
                  {item.name} - $ {item.amount} -- {item.dailyRoi}% ROI
                </option>
              ))}
            </select>
            <span style={{color: 'crimson'}} />
            <br />

            <button
              className="btn btn-lg btn-primary btn-round"
              style={{background: 'rgb(38,155,72)', color: 'white'}}
              type="submit">
              Register
            </button>
          </form>
        )}
      </div>

      <div className="mgm" style={{display: 'none'}}>
        <div className="txt" style={{color: 'black'}} />
      </div>
      <div className="footer" style={{textAlign: 'center'}}>
        <p>
          <small>| Privacy, Cookies, Security & Legal |</small>
          <small>Notice of Data Collection |</small>
          <small>Ad Choices |</small>
          <small>Give Us Feedback |</small>
        </p>
        <p>© 1999 - 2023 Satochi Trade Pro. All rights reserved. NMLSR ID 323801 </p>
      </div>
    </div>
  );
};
