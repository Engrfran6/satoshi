import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {userRequest} from '../../../components/Commons/HandleRequest';
import {store} from '../../../redux/store';

export const Investment = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  let myDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];
  let user = store?.getState()?.user?.user?.user || [];
  let tDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];

  const deposit = myDeposit.toLocaleString();
  const thisDeposit = tDeposit.toLocaleString();

  const newBalance = user?.balance - myDeposit;

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('paymentProof', selectedImage);

      try {
        const response = await userRequest('/deposit/image', formData);
        if (response.status == 200) {
          setMessage('success');
          navigate('/dashboard/schemes');
        } else setMessage('failed');
      } catch (error) {
        console.error('Image upload error:', error);
      }
    }
  };

  return (
    <div className="nk-body npc-invest bg-lighter ">
      <div className="nk-app-root">
        <div className="nk-wrap ">
          <div
            style={{
              marginTop: '10%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '60vh',
            }}>
            {message == 'success' ? (
              <div>
                Congratulations!!! <br /> Your have successfully invested $ -{thisDeposit}
              </div>
            ) : message == 'failed' ? (
              <p>There was a problem uploading image, please try again later!</p>
            ) : (
              <form
                style={{
                  width: '50%',
                }}
                onSubmit={handleUpload}>
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
                <div>
                  <label>PAY TO:</label>
                  <div style={{width: '40%', height: 'max-content', background: 'teal'}}></div>
                </div>
                <div
                  style={{
                    width: '50%',
                    height: 'max-content',
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
                  <button disabled={!selectedImage} className="btn btn-primary">
                    here
                  </button>
                  to comfirm that your completed the payment of ${' '}
                  <p style={{color: 'green', display: 'inline-block'}}>{thisDeposit}</p> to your
                  wallet.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
