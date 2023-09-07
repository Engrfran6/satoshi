import {useState} from 'react';

export const SortingTable = ({data, columns}) => {
  const [sortedField, setSortedField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const handleSort = (field) => {
    if (sortedField === field) {
      setAscending(!ascending);
    } else {
      setSortedField(field);
      setAscending(true);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const comparison = a[sortedField] - b[sortedField];
    return ascending ? comparison : -comparison;
  });

  const renderData = sortedField ? sortedData : data;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field}>
                <button onClick={() => handleSort(column.field)}>{column.label}</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderData.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.field}>{item[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <table
        id="user-list-table"
        className="table table-striped"
        role="grid"
        data-toggle="data-table">
        <thead>
          <tr>
            <th>#</th>
            {columns.map((column) => (
              <th key={column.field}>
                <button onClick={() => handleSort(column.field)}>{column.label}</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderData.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <>
                  <td className="text-center">{1}</td>
                  <td key={column.field}>{item[column.field]}</td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
