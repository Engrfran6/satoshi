import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchData, userRequest} from '../../../components/Commons/HandleRequest';
import {store} from '../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import {useEffect} from 'react';
import axios from 'axios';

export const Investment = () => {
  const token = useSelector((state) => state.user.user.token);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  let myDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];
  let user = store?.getState()?.user?.user?.user || [];
  let tDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];
  const url = import.meta.env.VITE_API_BASE_URL;

  const deposit = myDeposit.toLocaleString();
  const thisDeposit = tDeposit.toLocaleString();

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', selectedFile);

    try {
      const response = await axios.post(`${url}/proof/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Image uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // const [imageFile, setImageFile] = useState(null);
  // const [imageUrl, setImageUrl] = useState('');

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImageFile(file);

  //     // Display the selected image
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       setImageUrl(event.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('data=======', imageFile);
  //   console.log('data=======', thisDeposit);
  //   const formData = new FormData();
  //   formData.append('photo', imageFile);
  //   formData.append('depAmount', thisDeposit);

  //   try {
  //     console.log('deposit=============', formData);
  //     const response = await userRequest(
  //       '/deposit/create',
  //       {
  //         method: 'POST',
  //         body: formData,
  //       },
  //       token
  //     );

  //     if (response.status === 'success') {
  //       successAlert();
  //     } else {
  //       showErrorAlert();
  //     }
  //   } catch (error) {
  //     networkError();
  //   }
  // };

  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (event) => {
  //   const image = event.target.files[0];
  //   setSelectedImage(URL.createObjectURL(image));
  // };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   if (selectedImage) {
  //     const formData = new FormData();
  //     formData.append('photo', selectedImage);
  //     formData.append('depAmount', thisDeposit);
  //     try {
  //       const response = await userRequest('/deposit/create', {depAmount: thisDeposit}, token);
  //       if (response.status === 'success') {
  //         successAlert();
  //       }
  //     } catch (error) {
  //       showErrorAlert();
  //     }
  //   }
  // };

  const successAlert = () => {
    Swal.fire({
      title: `Good ${formData?.fullName.split(' ')[0]}!`,
      text: `Your deposit ${thisAmount}is been proccessed`,
      icon: 'success',
      timer: 2000,
    }).then(() => {
      navigate('/dashboard');
    });
  };

  const showErrorAlert = () => {
    Swal.fire({
      title: 'Error proccessing request',
      text: 'Please try again! !',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: 'red',
    });
  };
  const networkError = () => {
    Swal.fire({
      title: 'Network Error!',
      text: 'Please try again! !',
      icon: 'error',

      timer: 2000,
    });
  };

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentClick = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    getWallets();
  }, []);

  const getWallets = async () => {
    try {
      const response = await fetchData('/all-payment-options');
      setWallets(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{paddingTop: '4rem'}}>
      <div className="nk-content nk-content-lg nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-inner"></div>
          <div
            style={{
              marginTop: '10%',
              // height: '60vh',
              width: '100%',
            }}>
            <div>
              <div
                style={{
                  backgroundColor: 'rgb(20,194,142)',
                  color: 'white',
                  padding: '1rem 1rem',
                  width: '100%',
                  textAlign: 'center',
                  margin: '3rem 0',
                  borderRadius: '1rem',
                }}>
                <label style={{fontSize: '1.3rem'}}>Deposit amount: $ {thisDeposit}</label>
              </div>

              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <div>
                  <div>
                    <h4>Select Payment Options</h4>
                    <ul style={{display: 'flex', flexFlow: 'wrap', gap: '1rem'}}>
                      {Object.keys(wallets).map((paymentType) => (
                        <li key={paymentType}>
                          <p
                            onClick={() => handlePaymentClick(paymentType)}
                            style={{
                              padding: '.06rem 1.1rem',
                              color: 'white',
                              backgroundColor: 'grey',
                              fontSize: '1.2rem',
                              border: 'none',
                              borderRadius: '.5rem',
                              cursor: 'pointer',
                            }}>
                            {paymentType}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <br />
                  <div>
                    <label style={{fontSize: '1.5rem'}}>PAY TO:</label>
                    <div
                      style={{
                        width: '100%',
                        height: 'max-content',
                        marginBottom: '2rem',
                        border: '1px solid white',
                        fontSize: '1.1rem',
                        padding: '.3rem .7rem',
                        backgroundColor: 'white',
                      }}>
                      {selectedPayment && (
                        <div>
                          <p style={{textDecoration: 'underline', paddingBottom: '0.6rem '}}>
                            {selectedPayment} deposit details :{' '}
                          </p>
                          <ul>
                            {wallets[selectedPayment].map((payment) => (
                              <li key={payment.payId}>{payment.name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      border: '1px solid purple',
                      contain: 'cover',
                    }}>
                    {imageUrl && <img src={imageUrl} alt="Uploaded" />}
                  </div>
                  <input type="file" onChange={handleImageChange} />
                  <div style={{marginTop: '2rem', width: '100%'}}>
                    Click
                    <button
                      style={{margin: '0 .36rem'}}
                      disabled={!imageUrl}
                      className="btn btn-primary"
                      onClick={handleUpload}>
                      here
                    </button>
                    to comfirm that your completed the payment of $
                    <p style={{color: 'green', display: 'inline-block'}}>{thisDeposit}</p> to your
                    wallet.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
