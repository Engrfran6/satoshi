import { useEffect, useState } from "react";
import { DropDown } from "../elements/DropDown"
import { Line } from "react-chartjs-2";
import { groupByWeek, groupByMonth, groupByHour } from "../../helpers/date-helper";
import { getDateRange } from "../../helpers/date-helper";
import { transactionService } from '../../services/transaction-service'

export const UserChart = () => {
  const [dPoints, setDpoints] = useState([])
  const [labels, setLabels] = useState([])
  const [gData, setGraphData] = useState([])

  useEffect(() => {
    getData().then((res) => {
      const { data: {data} } = res
      handleDataFromDropDown(data, 'this month')
    })
  },[])

  const getData = async () => {
    const dates = await getDateRange('this month');
    return await transactionService.getDataByDate(dates, 'account', 'name phone email createdAt -_id')
  }

  const handleDataFromDropDown = (data, type) => {
    if (type === '1 week' || type === '2 weeks') {
      const weekData = groupByWeek(data)
      const { graphLabels, graphData } = weekData
      setLabels(graphLabels);
      setGraphData(graphData);
    }

    if (type === 'this month') {
      const monthData = groupByMonth(data)
      const { graphLabels, graphData } = monthData
      setLabels(graphLabels);
      setGraphData(graphData);
    }

    if (type === 'today') {
      const dayData = groupByHour(data)
      const { graphLabels, graphData } = dayData
      setLabels(graphLabels);
      setGraphData(graphData);
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: gData,
      },
    ],
  };

  return (
    <div className="col-lg-12">
      <div className="card card-block card-stretch card-height">
        <div className="card-header">
          <div className="flex-wrap  d-flex justify-content-between align-items-center">
            <div className="header-title">
              <h4 style={{ marginLeft: '10px'}}>Users</h4>
            </div>
            
            <div className="dropdown" style={{marginRight: '15px'}}>
              < DropDown 
                dataToComponent={ handleDataFromDropDown }
                model={'account'} 
                select={"name phone email createdAt -_id"}
              />
            </div>
          </div>
        </div>
        <div className="card-body">
        <Line data={data}/>
        {/* <CanvasJSChart options={options} /> */}
        </div>
      </div>
    </div>
  )
}