<template>
  <div class="room-reserve">
    <RoomState></RoomState>
  </div>
</template>

<script>
import RoomState from '../components/RoomState.vue'

export default {
  name: 'RoomReserve',
  components:{
    RoomState
  },
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
