import { useState } from 'react';
import { store } from '../redux/store';
import { CalendarModal } from '../modals/CalendarModal';
import { TransactionCard } from '../components/transactions/TransactionCard';
import { UsersCard } from '../components/users/UsersCard';
import { RecentTransactions } from '../components/transactions/RecentTransactions';
import { RecentUsers } from '../components/users/RecentUsers';
import { TransactionChart } from '../components/charts/TransactionChart';
import { UserChart } from '../components/charts/UserChart';

export const Home = () => {
  let user = store?.getState()?.user?.user
  if (user) {
    user = user.user
  }
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        class="btn btn-primary btn-sm me-2 mt-2"
        data-bs-toggle="modal"
        data-bs-target="#calModal"
      >
        Calendar
      </button>
      <br />
      <br />
      <div className="row">
        <TransactionCard />
        <UsersCard />
      </div>

      <div className="row">
        <div className="col-lg-6 col-xl-6 ">
            <TransactionChart />
            <RecentTransactions />
        </div>

        <div className="col-lg-6 col-xl-6 ">
            <UserChart />
            <RecentUsers />
        </div>
        <div className="col-lg-12 col-xl-12">
        {/* <RecentUsers /> */}
        </div>
      </div>

      <CalendarModal />
    </>
  );
}