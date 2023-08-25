import { useEffect, useState } from "react";
import Select from 'react-select';
import { getDateRange } from "../../helpers/date-helper";
import { transactionService } from '../../services/transaction-service'


export const DropDown = ({ dataToComponent, model, select }) => {
  const [selectedOption, setSelectedOption] = useState('month');

  const handleClick = async (data) => {
    const { value } = data
    setSelectedOption(value)
    const dates = await getDateRange(value);
    const res = await transactionService.getDataByDate(dates, model, select)
    dataToComponent(res.data.data, value)
  }

  useEffect(() => {
    (async () => {
      if ( model && select) {
        const dates = await getDateRange(selectedOption);
        const res = await transactionService.getDataByDate(dates, model, select)
        dataToComponent(res.data.data, selectedOption)
      }
    })();
  }, []);


  const options = [
    { value: 'this month', label: 'This Month' },
    { value: '1 week', label: 'This Week' },
    { value: '2 weeks', label: 'Last 2 Weeks' },
    { value: 'today', label: 'This Day' },
  ];
  
  return (
    <Select
        defaultValue={{ label: 'This Month', value: selectedOption }}
        onChange={ handleClick }
        options={ options }
        className={'select-react'}
    />
  );
};
