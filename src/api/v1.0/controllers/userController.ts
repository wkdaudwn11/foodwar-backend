module.exports = {
  /**
   * @desc   Test
   */
  test: async (req: any, res: any) => {
    res.status(200).json({ message: "Test!" });
  },
};
