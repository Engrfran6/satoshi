import {store} from '../redux/store';

export const Home = () => {
  let user = store?.getState()?.user?.user;
  if (user) {
    user = user.user;
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div
        style={{
          textAlign: 'center',
          marginTop: '7rem',
          padding: '15% 10%',
          width: '60%',
          boxShadow: ' 5px 5px 10px 2px rgba(0, 0, 0, 0.3)',
        }}>
        <h2 style={{color: 'rgb(7,182,212)'}}>Welcome!!!</h2>
        <br />
        <br />
        <br />
        <h4 style={{color: 'rgb(7,182,212)'}}>Satoshi Finance Admin Dashboard</h4>
      </div>
    </div>
  );
};
