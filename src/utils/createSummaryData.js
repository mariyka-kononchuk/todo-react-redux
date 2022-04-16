const categoryName = ['Task', 'Idea', 'Random Thought'];
export function createSummaryData(data) {
  const totalData = [];
  const newArray = data.map(e => { return { category: e.category, status: e.status} });
  for (const name of categoryName) {
    let totalActive = 0;
    let totalArchived = 0;
    for (const item of newArray) {
      if (item.category === name && item.status === 'active') {
        totalActive++;
      }
      if (item.category === name && item.status === 'archived') {
        totalArchived++;
      }
    }

    if (totalActive === 0) {
      totalActive = ''
    }
    if (totalArchived === 0) {
      totalArchived = ''
    }

    // let url = '';
    // for (const icon of icons) {
    //   if (name === icon.name) {
    //     url = icon.svgUrl;
    //   }
    // }
    
    const newTotalData = {
      category: name,
      active: totalActive,
      archived: totalArchived,
      //svgUrl:url
    }
    totalData.push(newTotalData);
    for (const item of totalData) {
        const index = totalData.findIndex(item => item.active === '' && item.archived === '');
        if (index !== -1) {
      totalData.splice(index, 1);
        }
    }
  }
  return totalData;
}