const exec = stuin=>new Promise(res=>setTimeout(res.bind(null, stuin), 1000));

async function cmd() {
  console.log('执行开始，两秒后完毕');
  const res = await exec('stuin');
  console.log('执行完毕,出入参数相同：'+res);
}

cmd();