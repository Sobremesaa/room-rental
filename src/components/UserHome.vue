<template>
    <div>
        <RoomStatus 
            @tellFather="fatherEmit"
            style="width: 50%; float: left;"
        >
        </RoomStatus>
        <RoomMessage v-bind:room-msg="roomMsg" style="width: 480px; margin: 40px 20px 0 0px; float: right;"></RoomMessage>
    </div>
</template>

<script>
import RoomMessage from '../components/RoomMessage.vue'
import RoomStatus from '../components/RoomStatus.vue'

export default {
    name:"UserHome",
    components: {
        RoomMessage,
        RoomStatus,
    },
    data() {
        return {
            roomMsg:{},
        }
    },
    methods:{
        fatherEmit(data) {
            this.roomMsg = data;
        }
    },

}

</script>