import {store} from '../../../redux/store';

export const SuccessMessage = () => {
  let user = store?.getState()?.user?.user?.user || [];
  let myPackage = store?.getState()?.user?.user?.selectedPackage || [];
  let amount = store?.getState()?.user?.user?.investAmount || [];
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '20%',
        background: 'rgb(235, 237, 245)',
        padding: '10% 20%',
        fontSize: '1rem',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}>
        <h5 style={{color: 'green'}}>Congratutions!!!</h5> <h5>{user?.username}</h5>
      </div>
      <br /> <br />
      <h5>
        You have successfully invested
        <small style={{padding: '.3rem', fontWeight: 'bold', color: 'green', fontSize: '1.1rem'}}>
          ${amount}
        </small>
        for
        <small style={{padding: '.3rem', fontWeight: 'bold'}}>{myPackage.duration} days</small> in
        <small style={{padding: '.3rem', fontWeight: 'bold', textTransform: 'capitalize'}}>
          _{myPackage.name}
        </small>
        plan.
      </h5>
    </div>
  );
};
