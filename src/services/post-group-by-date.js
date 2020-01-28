const postGroupByDate = (postList, dateGroup) => {
  const dateRegExp = /(\d\d\d\d)-(\d\d)-(\d\d)/;
  const groupByYearPostGroup = {
  };

  dateGroup.forEach(({ fieldValue: date }) => {
    const dateKey = new Date(date).getFullYear();
    if (!groupByYearPostGroup.hasOwnProperty(dateKey)) {
      groupByYearPostGroup[dateKey] = [];
    }
  });

  postList.forEach(({ node: { frontmatter } }) => {
    const dateKey = frontmatter.date.replace(dateRegExp, '$1');
    if (groupByYearPostGroup.hasOwnProperty(dateKey)) {
      groupByYearPostGroup[dateKey] = [
        ...groupByYearPostGroup[dateKey],
        {
          ...frontmatter,
          date: frontmatter.date.replace(dateRegExp, '$2월 $3일'),
        },
      ]
    }
  });

  return Object.entries(groupByYearPostGroup).reverse();
};

export default postGroupByDate;
