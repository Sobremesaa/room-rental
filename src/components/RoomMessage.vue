<template>
<div style="width: 480px;height: 500px; margin-top: 50px;">
  <div v-if="show==1">
    <a-form-model :model="conference" ref="ruleForm" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" style="margin-left: 30px; width: 480px;">
      <a-form-model-item label="预定人">
        {{conference.people}}
      </a-form-model-item>

      <a-form-model-item label="联系方式" ref="telephone" prop="telephone">
      <a-input
        placeholder="请输入手机号码"
        v-model="conference.telephone"/>
    </a-form-model-item>

      <a-form-model-item label="预定会场">
        {{conference.roomname}}
      </a-form-model-item>

      <a-form-model-item label="会议名称"  ref="name" prop="name">
        <a-input  placeholder="请输入会议名称" v-model="conference.name" />
      </a-form-model-item>

      <a-form-model-item label="预定时间">
        {{conference.roomtime}}
      </a-form-model-item>
      
      <a-form-model-item label="申请理由" ref="reason" prop="reason">
        <a-input placeholder="请输入申请理由" v-model="conference.reason" type="textarea" />
      </a-form-model-item>

      <a-form-model-item >
        <button class="buttonstyle" @click="onSubmit(roomMsg)">
          申请教室
        </button>
      </a-form-model-item>
    </a-form-model>
  </div>

  <div v-else>
    <div class="container">
        <div class="card">
          <p>会议名称：{{conference.name}}</p>
          <p>会议地点：{{conference.roomname}}</p>
          <p>会议时间：{{conference.roomtime}}</p>
          <p>申请理由：{{conference.reason}}</p>
          <p>申请人：{{conference.people}}</p>
          <p>联系方式：{{conference.telephone}}</p>
        </div>
    </div>
  </div>


 
  <button @click="changenav">改变</button>

</div>
</template>
<script>
export default {
  props:['roomMsg'],
  data() {
    return {
      show:1,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules: {
        telephone: [
          { required: true, message: '电话号码不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '电话号码长度必须是11位', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '会议名称不能为空', trigger: 'blur' },
        ],
        reason: [
          { required: true, message: '申请理由不能为空', trigger: 'blur' },
        ],
      },
      conference: {
        people:'张汇泉',
        telephone:'',
        roomname:'文津楼3段4楼会议室',
        roomtime:'2021-10-10 8:00:00至2021-10-11 10:00:00',
        name: '',
        reason: '',
      },
      hstyle:{"text-align":"center"},
      bstyle:{"text-align":"left"},
    };
  },

  methods: {
    onSubmit(value) {
      console.log(value);
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('提交内容',this.conference);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    changenav() {
      this.show=!this.show
    },
  },
};
</script>

<style scoped>
.container{
  width:400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-radius: 10px;
  background:linear-gradient(#66afe9,#66afe9 45%,#fff 45%,#fff 100%);
}
.card{
  width: 400px;
  height: 300px;
  position: relative;
  padding:40px 20px 30px 20px;
  border-radius: 10px;
  border:0.5px solid rgba(245, 240, 240, 0.952);
  backdrop-filter: blur(60px);
  box-shadow: 0 5px 5px rgba(102, 101, 101, 0.637);
  text-align: left;

} 

.formstyle{
  width:400px;
  height:300px;
  background:#99bdf7;
}

/* .buttonstyle{
   display:inline-block;
   cursor:pointer;
   text-align:center;
   text-decoration:none;
   outline:none;
   color:#fff;
   background-color:#66afe9;
   border:none;
   width:30px;
   border-radius:8px;
   box-shadow: 3px 3px 2px grey;
   } */
.buttonstyle:hover{
  background-color:#46a6e6
   }
.buttonstyle:active{
  background-color: #46a6e6;
  box-shadow:0 3px grey;
  transform:translateY(4px);
   }

</style>
