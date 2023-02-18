/**
 * Prints error and returns it further.
 */
const errorHandler = (error) => {
  console.error(error);
  throw error;
};

/**
 * On API error return 500.
 */
const apiErrorHandler = (res) => {
  return (error) => {
    res.status(500).json({ error: error.message });
  };
};

module.exports = {
  errorHandler,
  apiErrorHandler
};
