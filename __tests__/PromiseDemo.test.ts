async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => resolve("数据已加载"), 2000)
    });
  }

  
  async function loadData() {
    try {
      const data = await fetchData()
      console.log(data);  // 处理解决（resolved）状态
      return data
    } catch (error) {
      console.error(error);  // 处理拒绝（rejected）状态
      throw error
    }
  }
  
 test('loadData returns "数据已加载"', async () => {
    // 等待loadData执行并验证结果
    await expect(loadData()).resolves.toEqual("数据已加载");
  });