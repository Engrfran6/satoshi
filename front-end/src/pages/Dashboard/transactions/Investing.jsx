import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchData, userRequest} from '../../../components/Commons/HandleRequest';
import {store} from '../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import {useEffect} from 'react';

export const Investment = () => {
  const token = useSelector((state) => state.user.user.token);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  let myDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];
  let user = store?.getState()?.user?.user?.user || [];
  let tDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];

  const deposit = myDeposit.toLocaleString();
  const thisDeposit = tDeposit.toLocaleString();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (selectedImage) {
      const formData = new FormData();
      formData.append('photo', selectedImage);
      formData.append('depAmount', thisDeposit);
      try {
        const response = await userRequest('/deposit/create', {depAmount: thisDeposit}, token);
        if (response.status === 'success') {
          successAlert();
        }
      } catch (error) {
        showErrorAlert();
      }
    }
  };

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
      title: 'Deposit failed',
      text: 'Please try again! !',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: 'red',
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
                  fontSize: '1.3rem',
                  color: 'white',
                  padding: '2rem 1rem',
                  width: '100%',
                  textAlign: 'center',
                  margin: '3rem 0',
                  borderRadius: '1rem',
                }}>
                <label style={{fontSize: '1.9rem'}}>Deposit amount: $ {thisDeposit}</label>
              </div>

              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onSubmit={handleUpload}>
                <div>
                  <div>
                    <h2>Select Payment Options</h2>
                    <ul style={{display: 'flex', gap: '5%'}}>
                      {Object.keys(wallets).map((paymentType) => (
                        <li key={paymentType}>
                          <p
                            onClick={() => handlePaymentClick(paymentType)}
                            style={{
                              padding: '.5rem 3rem',
                              color: 'white',
                              backgroundColor: 'grey',
                              fontSize: '1.6rem',
                              border: 'none',
                              borderRadius: '1rem',
                              cursor: 'pointer',
                            }}>
                            {paymentType}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <br />
                  <br />
                  <div>
                    <label style={{fontSize: '1.5rem'}}>PAY TO:</label>
                    <div
                      style={{
                        width: '100%',
                        height: '15rem',
                        marginBottom: '2rem',
                        border: '1px solid purple',
                        fontSize: '1.8rem',
                        padding: '.3rem 1rem',
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
                    {selectedImage && <img src={selectedImage} alt="Uploaded" />}
                  </div>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    placeholder="Upload payment receipt"
                  />
                  <div style={{marginTop: '2rem', width: '100%'}}>
                    Click
                    <button
                      style={{margin: '0 .36rem'}}
                      disabled={!selectedImage}
                      className="btn btn-primary">
                      here
                    </button>
                    to comfirm that your completed the payment of ${' '}
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
