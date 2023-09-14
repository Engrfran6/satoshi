import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {store} from '../../../redux/store';
import Swal from 'sweetalert2';
import {useEffect} from 'react';
import {userService} from '../../../services/userService';
import {userAccountService} from '../../../services/userAccount-services';

export const Investment = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  let tDeposit = store?.getState()?.user?.user?.selectedPaymentOption || [];
  const [payType, setPayType] = useState('');

  const [bankData, setBankData] = useState([]);
  const [btcData, setBtcData] = useState([]);
  const [usdtData, setUsdtData] = useState([]);

  const fetchData = () => {
    userAccountService.getAdminBanks().then((data) => {
      const docs = data.data;
      setBankData(docs);
    });

    userAccountService.getAdminBtcs().then((data) => {
      const docs = data.data;
      setBtcData(docs);
    });

    userAccountService.getAdminUsdts().then((data) => {
      const docs = data.data;
      setUsdtData(docs);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bankListItem = bankData?.map((bank) => {
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <small>{bank.bankName}</small>
          <small>{bank.accountName}</small>
          <small>{bank.accountNumber}</small>
          <small>{bank.bankAddress}</small>
          <small>{bank.clientAddress}</small>
          <small>{bank.routingNumber}</small>
        </div>
      </div>
    );
  });

  const btcListItem = btcData?.map((btc) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <small>{btc.btcWalletAddress}</small>
        <small>{btc.btcNetwork}</small>
      </div>
    );
  });

  const usdtListItem = usdtData?.map((usdt) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <small>{usdt.usdtWalletAddress}</small>
        <small>{usdt.usdtNetwork}</small>
      </div>
    );
  });

  const thisDeposit = tDeposit.toLocaleString();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    event.preventDefault();
    const image = event.target.files[0];
    setImageFile(image);

    // Create a preview URL for the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(image);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append('photo', imageFile);

      try {
        const response = await userService.uploadImage(formData);
        if (response.image.status == 'success') {
          successAlert();
        } else {
          showErrorAlert();
        }
      } catch (error) {
        networkError();
      }
    }
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
      confirmButtonColor: 'red',
      timer: 2000,
    });
  };

  const successAlert = () => {
    Swal.fire({
      title: `Successful!!!`,
      text: `Your deposit of ${thisDeposit} is been proccessed`,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: 'green',
    }).then(() => {
      navigate('/dashboard');
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
                  backgroundColor: 'rgb(38,155,71)',
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
                // encType="multipart/form-data"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <div>
                  <h4>Select Payment Type</h4>
                  <div style={{display: 'flex', gap: '5%', paddingTop: '1rem'}}>
                    <div
                      onClick={() => setPayType('bank')}
                      style={{
                        padding: '.1rem .6rem',
                        color: 'green',
                        border: '2px solid green',
                        cursor: 'pointer',
                      }}>
                      Bank deposit
                    </div>
                    <div
                      onClick={() => setPayType('btc')}
                      style={{
                        padding: '.1rem .6rem',
                        color: 'green',
                        border: '2px solid green',
                        cursor: 'pointer',
                      }}>
                      Btc deposit
                    </div>
                    <div
                      onClick={() => setPayType('usdt')}
                      style={{
                        padding: '.1rem .6rem',
                        color: 'green',
                        border: '2px solid green',
                        cursor: 'pointer',
                      }}>
                      Usdt deposit
                    </div>
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
                      <div>{payType == 'bank' ? bankListItem : ''}</div>
                      <div>{payType == 'btc' ? btcListItem : ''}</div>
                      <div>{payType == 'usdt' ? usdtListItem : ''}</div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      border: '1px solid purple',
                      contain: 'cover',
                    }}>
                    {imagePreview && <img src={URL.createObjectURL(imageFile)} alt="Preview" />}
                  </div>
                  <div>
                    <input type="file" name="photo" accept="image/*" onChange={handleImageChange} />
                  </div>

                  <div style={{marginTop: '2rem', width: '100%'}}>
                    Click
                    <button
                      style={{margin: '0 .36rem'}}
                      disabled={!imagePreview}
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
