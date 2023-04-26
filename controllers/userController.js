const connection = require('../dbConfig');

// 创建卡密
const createActivationCode = (req, res) => {
  const { activationCode, type, balance, status } = req?.body;
  const addSql = `INSERT INTO user (activationCode, type, balance, status) VALUES (${activationCode}, ${type},${balance},${status})`;
  connection.query(addSql, (error, results, fields) => {
    if (error) throw error;
    res.send('Data added successfully!');
  });
};

// 查询卡密
const getActivationCode = (req, res) => {
  const { id } = req?.query;
  connection.query(`SELECT * FROM user WHERE activationCode=${id}`, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
};

// 更新卡密的余额
const upBalance = (req, res) => {
  const sql = `UPDATE user SET balance=2000 WHERE activationCode=${id}`;
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.send('success');
  });
};

// 删除卡密
const deleteActivationCode = (req, res) => {
  const { id } = req?.query;
  const addSql = `DELETE FROM user WHERE activationCode=${id}`;
  connection.query(addSql, (error, results, fields) => {
    if (error) throw error;
    res.send('Data added successfully!');
  });
};

module.exports = {
  createActivationCode,
  getActivationCode,
  upBalance,
  deleteActivationCode,
};
