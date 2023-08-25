import { useEffect, useState } from 'react';
import { transactionService } from "../services/transaction-service";
import { LoadMoreSpinner } from './elements/spinners';

export const InfinitScroll = ({ path, dataHandler, limit }) => {
  const [page, setPage] = useState(0)
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isBottom = scrollY + windowHeight >= documentHeight;

      if (isBottom) {
        setPage(prevPage => {
          const newPage = prevPage + 1
          transactionService.getMoreData(limit, newPage, path).then((data) => {
            const { data: { docs } } = data;
            if (!docs.length) {
              setSpinner(false)
            }
            dataHandler(docs);
          });
          return prevPage + 1;
        });
        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {  spinner ? 
        <div style={{ height: '10vh' }}> 
          <LoadMoreSpinner /> 
        </div> : ""
      }
    </>
  );
};