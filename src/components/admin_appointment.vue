<template>
  <div>
    <div class="admin-table">
      <a-table 
      bordered  
      class="test"
      :columns="columns"
      :data-source="data"
      :pagination="ipagination"
      :rowKey="record=>record._id"
      @change="pageChange" >
          <template slot="status" slot-scope="status">
            <a-tag color="green" v-if="status=='success'">已通过</a-tag>
            <a-tag color="red" v-if="status=='fail'">已驳回</a-tag>
            <a-tag color="blue" v-if="status=='waiting'">审批中</a-tag>
          </template>
      </a-table>
    </div>
</div>
</template>

<script>
const columns = [
  {
    title:'预定会场',
    dataIndex: 'place',
    align: 'center',
    
  },
  {
    title: '预约时间',
    dataIndex: 'submission',
    align: 'center',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.submission > b.submission,
    
  },
  {
    title: '审批状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    align: 'center',
  },
];

const data = [
  {
    place:'文渊楼1234',
    submission:'2021-10-01',
    status:'success'
  },
  {
    place:'文渊楼1204',
    submission:'2021-10-03',
    status:'fail'
  },
  {
    place:'文渊楼3204',
    submission:'2021-10-05',
    status:'waiting' 
  },
];

export default {
    name:"adminAppointment",
  data() {
    return {
      data,
      columns,
       ipagination: {
        current: 1,
        pageSize: 3,
        total: data.length,
        showSizeChanger: true,
        showQuickJumper: true,
        hideOnSinglePage:false, // 少于一页时隐藏分页
        pageSizeOptions: ['5','10','15'],  //这里注意只能是字符串，不能是数字
        showTotal: (total, range) => `显示${range[0]}-${range[1]}条，共有 ${total}条`
        }
    };
  },

  methods:{
    //  pageChange(page, pageSize) {
    //   this.ipagination.current = page.current;
    //   this.ipagination.pageSize = page.pageSize;
    // },
  },
};
</script>


<style scoped>
.admin-table{
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;

  /* background-color: yellow; */
}
.body{
  background: #f7f7f7;
}
.header{
  height: 88px;
  background-color: aqua;
  margin:10px;
}


</style>