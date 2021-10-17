<template>
  <div>
    <div class="room-status">
      <div class="status-header">
        <div>
          <select id="date-select" @change=dateSelect()>
            <option v-for="(date,index) in dates"
              :key="index"
              :value="date"
            >
              {{ date[0] + "/" + date[1] + "/" + date[2] + "/" + date[3] }}
            </option>
          </select>
        </div>
        <div style="float: right;">
          <div>
            <div class="icon free" @click="statusSelected(roomTime.room)"></div>
            <span class="text-span">空闲可租</span>
          </div>
          <div>
            <div class="icon rented" @click="statusSelected(roomTime.room)"></div>
            <span class="text-span">已被租</span>
          </div>
          <div>
            <div class="icon forbid" @click="statusSelected(roomTime.room)"></div>
            <span class="text-span">未开放</span>
          </div>
        </div>
      </div>
      <div style="height: 500px; overflow-y: auto; margin-top: 10px; background-color: #f2fbfe;">
        <table border="1" class="status-table" align="center">
          <tr>
            <td class="font-center titfont" rowspan="2">教室</td>
            <td colspan="5" class="font-center titfont">{{ dateSelected[3] }}</td>
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
            <td v-for="(roomStatus,index) in roomTime.status"
              :key="index">
              <div v-if="roomStatus % 3 == 1" class="icon free" @click="statusSelected(index + 1, roomTime.room)"></div>
              <div v-if="roomStatus % 3 == 2" class="icon forbid" @click="statusSelected(index + 1, roomTime.room)"></div>
              <div v-if="roomStatus % 3 == 0" class="icon rented" @click="statusSelected(index + 1, roomTime.room)"></div>
            </td>
            </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

const columns = [
  {
    title: '教室',
    dataIndex: 'room',
    width: '25%',
  },
  {
    title: '8:00-10:00',
    dataIndex: 'time1',
    width: '15%',
  },
  {
    title: '10:00-12:00',
    dataIndex: 'time2',
    width: '15%',
  },
  {
    title: '14:30-16:30',
    dataIndex: 'time3',
    width: '15%',
  },
  {
    title: '16:30-18:30',
    dataIndex: 'time4',
    width: '15%',
  },
  {
    title: '19:20-21:10',
    dataIndex: 'time5',
    width: '15%',
  },
];

const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i.toString(),
    room: `文津楼36 ${i}`,
    status:[i,i+1,i+2,i+3,i+4]
  });
}

export default {
    name: 'RoomStatus',
    data() {
        return {
            data,
            columns,
            editingKey: '',
            dates: [],
            dateSelected:{},
        };
    },

    methods: {
      dayTransform(day) {
        let week = "周一";
        switch(day) {
          case 1 : week = "周一";break;
          case 2 : week = "周二";break;
          case 3 : week = "周三";break;
          case 4 : week = "周四";break;
          case 5 : week = "周五";break;
          case 6 : week = "周六";break;
          case 7 : week = "周天";break;
        }
        return week;
      },

      getDate() {
        let date = new Date();
        this.dates.push([date.getFullYear(),date.getMonth()+1,date.getDate(),this.dayTransform(date.getDay())]);
        for(let i = 0; i < 6; i ++) {
          date.setTime(date.getTime() + 3600 * 24 * 1000);
          this.dates.push([date.getFullYear(),date.getMonth()+1,date.getDate(),this.dayTransform(date.getDay())]);
        }
        this.dateSelected = this.dates[0];
      },

      dateSelect() {
        var value = document.getElementById("date-select").selectedIndex;
        this.dateSelected = this.dates[value];
        console.log("选择", this.dates[value]);
      },

      statusSelected(key,value) {
        this.$emit("tellFather", value);
      },
  },

  mounted() {
    this.getDate();
  }
  
}

</script>

<style>

.status-header div {
  display: inline-block;
}

.text-span {
  font-size: 13px;
  margin-left: 5px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.status-table {
  width: "100%";
  text-align: center;
  background-color: #ffffff;
  height: 500px;
}

.status-table tr {
  border: #777777
}

.font-center { text-align:center}

.icon {
  width:15px; 
  height: 15px; 
  margin-left: 25px;
}

.icon:hover {
  cursor: pointer;
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

.room-status {
    width: 480px;
    height: 550px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
}

.editable-row-operations a {
  margin-right: 4px;
}

.ant-table {
  font-size: 8px;
}

</style>