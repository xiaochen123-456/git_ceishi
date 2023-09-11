// 全部数据
const record = [
    {
    "id": 1,
    "tmName": "小米",
    "logoUrl": "http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKC6AQ-j2AAAb72A3EO0942.jpg"
  },
  {
    "id": 2,
    "tmName": "苹果",
    "logoUrl": "http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKHOADErHAAAQBezsFBo612.jpg"
  },
  {
    "id": 3,
    "tmName": "华为",
    "logoUrl": "http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKF2AWpcKAADv98DWYRo516.jpg"
  },
  {
    "id": 4,
    "tmName": "尚硅谷",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxObeAfL10AAAsPY94Hn8745.png"
  },
  {
    "id": 5,
    "tmName": "OPPO",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxOciADR75AAE6kN74a-E289.png"
  },
  {
    "id": 6,
    "tmName": "VIVO",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxOdKAamtYAAC9HgX-V4c228.png"
  },
  {
    "id": 7,
    "tmName": "三星",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DA/rBHu8mGxOduAL3-vAAAyNxaecgE342.jpg"
  },
  {
    "id": 8,
    "tmName": "长虹",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMWmAMfrHAAAVOe83Fy0651.jpg"
  },
  {
    "id": 9,
    "tmName": "索尼",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMX-AUh4sAAAH6bIsT_o073.jpg"
  },
  {
    "id": 10,
    "tmName": "联想",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMaWAW-TWAAAIiNxy53s540.jpg"
  },
  {
    "id": 11,
    "tmName": "华硕",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMbKAQP0sAAAWKq85SVY068.jpg"
  },
  {
    "id": 12,
    "tmName": "海信",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMcCAX4bGAAANH1m3gic067.jpg"
  },
  {
    "id": 13,
    "tmName": "戴尔",
    "logoUrl": "http://39.98.123.211/group1/M00/02/DC/rBHu8mGyMc6AUHGFAAAS6pwrg18359.jpg"
  }]

  // 存放每页数组
  const records = []

  function all(){
    //   4                  13/4
    let num = Math.ceil(13/4) //总页数
        console.log(num);
    // page 每页数据

    for (let i = 0; i < num; i++) {
      records.push(record.splice(0,4))
    }
}


all();
console.log( records);