import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {userRequest} from '../../../components/Commons/HandleRequest';
import {store} from '../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';

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
    if (selectedImage || thisDeposit) {
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
                }}>
                <label>Deposit amount: $ {thisDeposit}</label>
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
                    <label>PAY TO:</label>
                    <div
                      style={{
                        width: '100%',
                        height: '10rem',
                        marginBottom: '2rem',
                        background: '',
                      }}></div>
                  </div>
                  <div
                    style={{
                      width: '50%',
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
