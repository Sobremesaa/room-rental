<template>
    <div class="room-state">
      <div class="state-header">
        <div>
          <!-- <a-select default-value="2021/10/10  周日" style="width: 150px" @change="dateChange">
            <a-select-option value="Mon">
              2021/10/02 周一
            </a-select-option>
            <a-select-option value="Tues">
              2021/10/03 周二
            </a-select-option>
            <a-select-option value="Wed">
              2021/10/06 周三
            </a-select-option>
            <a-select-option value="Thu">
              2021/10/07 周四
            </a-select-option>
            <a-select-option value="Fri">
              2021/10/08 周五
            </a-select-option>
            <a-select-option value="Sat">
              2021/10/09 周六
            </a-select-option>
            <a-select-option value="Sun">
              2021/10/10 周日
            </a-select-option>
          </a-select> -->
          <select>
            <option v-for="(date,index) in dates"
              :key="index"
            >
              {{ date }}
            </option>
          </select>
        </div>
        <div>
          <div class="icon free"></div>
          <span class="text-span">空闲</span>
        </div>
        <div>
          <div class="icon rented"></div>
          <span class="text-span">已被租</span>
        </div>
        <div>
          <div class="icon forbid"></div>
          <span class="text-span">未开放</span>
        </div>
      </div>
      <div style="height: 570px; overflow-y: auto; margin-top: 10px; background-color: #f2fbfe;">
        <table border="1" class="state-table" align="center">
          <tr>
            <td class="font-center titfont" rowspan="2">教室</td>
            <td colspan="5" class="font-center titfont">周一</td>
          </tr>
          <tr>
            <td width="13%" class="font-center"> 8:00- 9:50</td>
            <td width="13%" class="font-center">10:10-12:00</td>
            <td width="13%" class="font-center">14:30-16:20</td>
            <td width="13%" class="font-center">16:40-18:30</td>
            <td width="13%" class="font-center">19:20-21:10</td>
          </tr>
        <tbody>
          <tr v-for="roomTime in data"
            :key="roomTime.room"
          >
            <td>{{ roomTime.room }}</td>
            <td >
              <div v-if="roomTime.time1 % 3 == 1" class="icon free"></div>
              <div v-if="roomTime.time1 % 3 == 2" class="icon forbid"></div>
              <div v-if="roomTime.time1 % 3 == 0" class="icon rented"></div>
              <!-- <a-icon v-if="roomTime.time1 % 3 == 1" style="color: #FF0000"  type="close-circle" />
              <a-icon v-if="roomTime.time1 % 3 == 2" style="color:#00DD00" type="minus-circle" />
              <a-icon v-if="roomTime.time1 % 3 == 0" style="color:#666666" type="stop" /> -->
            </td>
            <td>
              <div v-if="roomTime.time1 % 3 == 1" class="icon free"></div>
              <div v-if="roomTime.time1 % 3 == 2" class="icon forbid"></div>
              <div v-if="roomTime.time1 % 3 == 0" class="icon rented"></div>
            </td>
            <td>
              <div v-if="roomTime.time1 % 3 == 1" class="icon free"></div>
              <div v-if="roomTime.time1 % 3 == 2" class="icon forbid"></div>
              <div v-if="roomTime.time1 % 3 == 0" class="icon rented"></div>
            </td>
            <td>
              <div v-if="roomTime.time1 % 3 == 1" class="icon free"></div>
              <div v-if="roomTime.time1 % 3 == 2" class="icon forbid"></div>
              <div v-if="roomTime.time1 % 3 == 0" class="icon rented"></div>
            </td>
            <td>
              <div v-if="roomTime.time1 % 3 == 1" class="icon free"></div>
              <div v-if="roomTime.time1 % 3 == 2" class="icon forbid"></div>
              <div v-if="roomTime.time1 % 3 == 0" class="icon rented"></div>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
</template>

<script>

const columns = [
  {
    title: '教室',
    dataIndex: 'room',
    width: '25%',
    // scopedSlots: { customRender: 'room' },
  },
  {
    title: '8:00-10:00',
    dataIndex: 'time1',
    width: '15%',
    // scopedSlots: { customRender: 'time1' },
  },
  {
    title: '10:00-12:00',
    dataIndex: 'time2',
    width: '15%',
    // scopedSlots: { customRender: 'time2' },
  },
  {
    title: '14:30-16:30',
    dataIndex: 'time3',
    width: '15%',
    // scopedSlots: { customRender: 'time3' },
  },
  {
    title: '16:30-18:30',
    dataIndex: 'time4',
    width: '15%',
    // scopedSlots: { customRender: 'time4' },
  },
  {
    title: '19:20-21:10',
    dataIndex: 'time5',
    width: '15%',
    // scopedSlots: { customRender: 'time5' },
  },
];

const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i.toString(),
    room: `文津楼36 ${i}`,
    time1: i,
    time2: i+1,
    time3: i+2,
    time4: i+3,
    time5: i+4,
  });
}

export default {
    name: 'RoomState',

    data() {
        // this.cacheData = data.map(item => ({ ...item }));
        return {
            data,
            columns,
            editingKey: '',
            dates: ["2021/10/11 周一",
              "2021/10/12 周二",
              "2021/10/13 周三",
              "2021/10/14 周四",
              "2021/10/15 周五",
              "2021/10/16 周六",
              "2021/10/17 周天"],
        };
    },

    methods: {
      getDate() {
        let date = new Date();
        console.log("++++++++",date);
      },
      dateChange() {

      },
    // handleChange(value, key, column) {
      
    // },
    // edit(key) {
      
    // },
    // save(key) {
      
    // },
    // cancel(key) {
      
    // },
  },

  mounted() {
    this.getDate();
  }
  
}

</script>

<style>
.state-header {
  
}

.state-header div {
  display: inline-block;
}

.text-span {
  font-size: 13px;
  margin-left: 5px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.state-table {
  width: "100%";
  text-align: center;
  background-color: #ffffff;
  height: 500px;
}

.state-table tr {
  border: #777777
}

.font-center { text-align:center}

.icon {
  width:15px; 
  height: 15px; 
  margin-left: 25px;
}

.free {
  background-color: #66ee66;
}

.forbid {
  background-color: #f15555;
}

.rented {
  background-color: #e1e1e8;
}

.titfont {
  font-family: STheiti,微软雅黑,宋体,Arial,Tahoma,sans-serif,serif;
	font-size: 14px;
	font-weight: bold;
	background: no-repeat 15px center;
	background-color:#f7f7f7;
}

.room-state {
    width: 480px;
    height: 500px;
    margin-right: 20px;
    background-color: aqua;
}

.editable-row-operations a {
  margin-right: 4px;
}

.ant-table {
  font-size: 8px;
}

</style>