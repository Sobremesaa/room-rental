<template>
    <div style="background-color: #f7f7f7; height: 100%;">
        <img
        src="../assets/snnu-logo.png"
        alt="snnu logo"
        style="width: 250px; margin:20px 0 0px 16%;"
      />
      <div style="margin: 0px 250px 0 250px; background-color: #fff;">
        <a-tabs v-model="activeName" @change="callback" type="card" style="margin-top:10px;">
          <a-tab-pane :tab="item.name" v-for="item in tabList" :key="item.key" >
            <component :is="currentView"></component>
          </a-tab-pane>
        </a-tabs>
    </div>
    <!-- <div class="room-reserve">
      <RoomState></RoomState>
    </div> -->
    </div>
  </template>
  
  <script>
 import UserHome from '../components/UserHome.vue'
  // import RoomState from '../components/RoomState.vue'
  import adminAppointment from '../components/admin_appointment.vue'
  
  export default {
    name: 'User',
    components:{
        // RoomState,
        UserHome,
        adminAppointment,
    },
    data() {
      return {
        tabList: [
        {
          name: '会场预定',
          // key: 'RoomState'
          key: 'UserHome',
        },
        {
          name: '订单受理',
          key: 'adminAppointment'
        },
        ],
        activeName: 'UserHome',
        currentView: 'UserHome'


      }
    },
    methods: {
    callback(key) {
      this.currentView = key
    }
  }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .room-reserve {
      margin:0 auto;
      width: 1000px;
      height: 600px;
      margin-top: 10px;
      /* margin-left: 20%; */
      background-color: blueviolet;
  }
  </style>
  