import { useState } from "react"
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import logo  from '../../../assets/sato-logo1.png'
import { userRequest } from "../../../components/Commons/HandleRequest";

userRequest
export const Register = () => {
  const beginer = {name: "Beginer", value:200, percent: 15}
  const standard = {name: "Standard", value:1000, percent: 17}
  const proffesional = {name: "Proffesional", value:10000, percent: 20}
  const ultimate = {name: "Ultimate", value:40000, percent: 55}
  const premium = {name: "Premium", value:100000, percent: 10}


  const navigate = useNavigate();
  const [message, setMessage]= useState()
  const [formData, setFormData] = useState({
    fullname : '',
    username: '',
    email: '',
    password: '',
    phone: '',
    referral: '',
    country: '',
    state: '',
    address: '',
    investment: '',
    portfolio: ''
  });

  const handleInputChange = (e) => {setFormData({...formData,[e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userRequest('/auth/register', formData);
    
      if(response.Ok){
        setMessage('Registration successful')
      }

       navigate('/login'); // <-- redirect

    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error(error);
    }
  };
return (
<div>
  <header style={{position:"fixed", display:"flex", justifyContent:"space-between", padding:"1rem"}} >
     <div style={{width:"100rem", height:"4rem",paddingLeft:"30px"}}>
      <NavLink to="/#"><img style={{width: '18%' , height: '100%',cursor:"pointer" }} src={logo} /></NavLink>
     </div>

      <div className="pull-right">
        <ul>
          <li style={{margin: '12px 40px 0 0', display:"flex", justifyContent:"center", gap:"1rem", width:"max-content" }}> <p style={{color:"purple"}}>have an Account?</p> <NavLink to="/login" style={{background: '#253978' , color: 'white' }} className="btn btn-primary"> Login</NavLink></li>
        </ul>
      </div>
  </header>

    <div className="col-md-8 offset-md-6 side_signing_full">
      <form onSubmit={handleSubmit} id="registrationForm" className="form-signin1 full_side" style={{marginTop:"0", paddingTop:"7rem"}}>
        <span>
          <h3 style={{color: 'crimson' , textAlign: 'center' }} />
        </span>
        <span>
          <h3 style={{color: 'green' , textAlign: 'center' }} />
        </span>
        <h2 style={{width:"max-content", padding:"0 0 2rem 0", color:"#253978"}}>Create an account with Us!</h2>


        <label style={{color: 'black' }} className="font-weight-bold">Full Name</label>
        <input type="text" style={{color: 'black' }} className="form-control"  id="name" name="fullname" value={formData.fullname} onChange={handleInputChange} placeholder="Enter full name" required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Username</label>
        <input type="text" style={{color: 'black' }} className="form-control" name="username" id="username" value={formData.username} onChange={handleInputChange}
          placeholder="Enter Unique Username" required />
        <span style={{color: 'crimson' }} />
        <br />
    


        <label style={{color: 'black' }} className="font-weight-bold">Email address</label>
        <input type="text" style={{color: 'black' }} className="form-control" name="email"    value={formData.email} onChange={handleInputChange}  id="email"
          placeholder="name@example.com" required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Password</label>
        <input type="password" style={{color: 'black' }} className="form-control" name="password"   value={formData.password} onChange={handleInputChange} id="password"
          placeholder="Enter Password" required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Retype Password</label>
        <input type="password" style={{color: 'black' }} className="form-control" name="comfirmPassword"
          id="confirmPassword" placeholder="Confirm Password" required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Phone Number</label>
        <input type="text" style={{color: 'black' }} className="form-control" name="phone"    value={formData.phone} onChange={handleInputChange} id="phone"
          placeholder="Enter Phone number" required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Referral</label>
        <input type="text" style={{color: 'black' }} className="form-control" id="referral" name="referral"    value={formData.referral} onChange={handleInputChange}
          placeholder="Optional" />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Country</label>
        <select style={{color: '#252d47' }} className="form-control " name="country"    value={formData.country} onChange={handleInputChange} id="country"
          data-live-search="true" tabIndex={-1} aria-hidden="true" required>
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
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">State</label>
        <input type="text" style={{color: 'black' }} className="form-control" name="state"    value={formData.state} onChange={handleInputChange} placeholder="State"
           required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Address</label>
        <input type="text" style={{color: 'black' }} className="form-control" name="address"    value={formData.address} onChange={handleInputChange} placeholder="Address"
          required />
        <span style={{color: 'crimson' }} />
        <br />


        <label style={{color: 'black' }} className="font-weight-bold">Account Type</label>
        <select style={{color: '#252d47' }} className="form-control" name="investment"    value={formData.investment} onChange={handleInputChange} id="investment" required>
          <option>Select investment type</option>
           <option>CryptoCurrency & NFT Investment</option>
        </select>
        <span style={{color: 'crimson' }} />
        <br />

        <label style={{color: 'black' }} className="font-weight-bold">Portfolio</label>
        <select style={{color: '#252d47' }} className="form-control" name="portfolio"    value={formData.portfolio} onChange={handleInputChange} id="investment" required>
          <option>Select invvestment package</option>
          <option >{beginer.name} - $ {beginer.value} {beginer.percent}% ROI</option>
          <option>{standard.name} - $ {standard.value} {standard.percent}% ROI</option>
          <option>{proffesional.name} - $ {proffesional.value} {proffesional.percent}% ROI</option>
          <option>{ultimate.name} - $ {ultimate.value} {ultimate.percent}% ROI</option>
          <option>{premium.name} - $ {premium.value} {premium.percent}% ROI</option>
        </select>
        <span style={{color: 'crimson' }} />
        <br />


        {/* <div className="checkbox">
          <input type="checkbox" name="agree" className="form-check-input" defaultChecked required />
          <i className="fa fa-pencil" />
          <b style={{color: 'black' }}>You agree to our <a style={{color: 'green' }}>Terms and
              Conditions</a></b>
        </div> */}
        <div className="message" style={{color:"green"}}>
          <p>{message}</p>
        </div>


        <button className="btn btn-lg btn-primary btn-round" style={{background: '#253978' , color: 'white' }}
          type="submit">Register</button>
      </form>
  </div>

  {/* IE10 viewport hack for Surface/desktop Windows 8 bug */}
  {/* <style
    dangerouslySetInnerHTML={{__html: "\n      .mgm {\n        border-radius: 7px;\n        border: 4px solid #253978;\n        position: fixed;\n        z-index: 90;\n        bottom: 80px;\n        right: 20px;\n        bottom: 4px;\n        left: 30px;\n        background: #fff;\n        padding: 10px 27px;\n        box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, .3);\n      }\n\n      .mgm a {\n        font-weight: 700;\n        display: block;\n        color: #253978;\n      }\n\n      .mgm a,\n      .mgm a:active {\n        transition: all .2s ease;\n        color: #253978;\n      }\n    "
    }} /> */}
  <div className="mgm" style={{display: 'none' }}>
    <div className="txt" style={{color: 'black' }} />
  </div>
     <div className="footer" style={{textAlign:"center"}}>
        <p><small>| Privacy, Cookies, Security & Legal |</small><small>Notice of Data Collection |</small><small>Ad Choices |</small><small>Give Us Feedback |</small></p>
        <p>© 1999 - 2023 Satochi Trade Pro. All rights reserved. NMLSR ID 323801 </p>
      </div>
</div>
)
}

 



