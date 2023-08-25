import moment from 'moment';

export const  getDateRange = async (range) => {
  const today = moment();
  let startDate, endDate;

  switch (range) {
    case '1 week':
      startDate = today.clone().startOf('week');
      endDate = today.clone().endOf('week');
      break;
    case '2 weeks':
      startDate = today.clone().subtract(2, 'weeks');
      endDate = today.clone().subtract(1, 'weeks').endOf('isoWeek');
      break;  
    case 'this month':
      startDate = today.clone().startOf('month');
      endDate = today.clone();
      break;
    case 'month':
      startDate = today.clone().subtract(1, 'months').startOf('month');
      endDate = today.clone().subtract(1, 'months').endOf('month');
      break;
    case 'two days ago':
      startDate = today.clone().subtract(2, 'days');
      endDate = today.clone().subtract(2, 'days');
      break;
    case 'today':
      startDate = today.startOf('day');
      endDate = startDate.clone().add(1, 'day');
      break;
    default:
      return null;
  }

  return {
    startDate: startDate.format('YYYY-MM-DD'),
    endDate: endDate.format('YYYY-MM-DD')
  };
}

export const prepareDateData = (dateString) => {
  const formattedDate = moment(dateString);
  const month = formattedDate.format('MMMM'); // Month in full text
  const day = formattedDate.format('DD'); // Day of the month
  const year = formattedDate.format('YYYY'); // Year

  return {
    month,
    day,
    year
  };
}

export const groupByWeek = (bulkData) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const groupedByDayOfWeek = {};
  
  bulkData.forEach((item, index) => {
    const formattedDate = moment(item.createdAt);
    const dayOfWeekIndex = formattedDate.day();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    
    if (!groupedByDayOfWeek[dayOfWeek]) {
      groupedByDayOfWeek[dayOfWeek] = {
        totalAmount: 0,
        entries: []
      };
    }

    if (item.amount) { // for Transaction case
      groupedByDayOfWeek[dayOfWeek].totalAmount += item.amount;
    }

    if (item.name) {
      groupedByDayOfWeek[dayOfWeek].userCount += index;
    }

    groupedByDayOfWeek[dayOfWeek].totalAmount += item.amount;
    groupedByDayOfWeek[dayOfWeek].entries.push(item);
  });
  
  const graphLabels = []
  const graphData = []
  daysOfWeek.forEach(dayOfWeek => {
    if (groupedByDayOfWeek[dayOfWeek]) {
      graphLabels.push(dayOfWeek)
      if (groupedByDayOfWeek[dayOfWeek].userCount) {
        graphData.push(groupedByDayOfWeek[dayOfWeek].userCount)
      }
      graphData.push(groupedByDayOfWeek[dayOfWeek].totalAmount,)
    }
  });
  return {
    graphLabels,
    graphData
  }
}

export const groupByMonth = (bulkData) => {
  const groupedByDaysOfMonth = {};
  const graphLabels = []
  const graphData = []
  bulkData.forEach((item) => {
    const formattedDate = moment(item.createdAt);
    const dayOfMonth = formattedDate.date();
    
    if (!groupedByDaysOfMonth[dayOfMonth]) {
      groupedByDaysOfMonth[dayOfMonth] = { day: dayOfMonth, totalAmount: 0 };
    }
    if (item.amount) { // for Transaction case
      groupedByDaysOfMonth[dayOfMonth].totalAmount += item.amount;
    }

    if (item.phone) {
      groupedByDaysOfMonth[dayOfMonth].userCount = bulkData.length;
    }
  });

  const data = Object.values(groupedByDaysOfMonth).sort((a, b) => a.day - b.day);
  data.forEach((value) => {
      graphLabels.push(value.day);
      if (value.userCount) {
        graphData.push(value.userCount)
      }
      graphData.push(value.totalAmount)
  })

  return {
    graphLabels,
    graphData
  }
}

export const groupByHour = (bulkData) => {
  const groupedByHour = {};
  const graphLabels = []
  const graphData = []
  bulkData.forEach(item => {
    const formattedDate = moment(item.createdAt);
    const hour = formattedDate.hour();
    
    if (!groupedByHour[hour]) {
      groupedByHour[hour] = { hour: hour, totalAmount: 0 };
    }
    
    groupedByHour[hour].totalAmount += item.amount;
  });

  const data = Object.values(groupedByHour).sort((a, b) => a.hour - b.hour);
  data.forEach((value) => {
      graphLabels.push(value.hour);
      graphData.push(value.totalAmount)
  })

  return {
    graphLabels,
    graphData
  }
}