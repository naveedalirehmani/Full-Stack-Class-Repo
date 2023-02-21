 const Sort = (req) => {
  const { sort } = req.query;

  let sort_column, sort_order;

  if (sort === undefined || sort === null || sort === "") {
    sort_column = "created_at";
    sort_order = "ASC";
  } else if (sort.startsWith("-")) {
    const [, column] = sort.trim().split("-");
    sort_column = column;
    sort_order = "DESC";
  } else {
    sort_column = sort;
    sort_order = "ASC";
  }

  return {
    sort_column,
    sort_order,
  };
};

module.exports = Sort;
