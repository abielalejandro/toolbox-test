const validateData = (schema, data) => {
  const { value, error } = schema.validate(data);
  if (error !== undefined) {
    let e = new Error(error);
    e.status = 400;
    throw e;
  }
  return value;
};

module.exports = {
  validateData,
};
