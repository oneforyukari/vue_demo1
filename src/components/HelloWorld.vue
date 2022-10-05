<template>
  <div>
    <h1>The result:{{ message }}</h1>
    <el-upload action="/api/classfy"
               :show-file-list="false"
               :on-success="handleSuccess">
      <img v-if="imageUrl"
           :src="imageUrl"
           class="avatar"/>
      <div v-else>
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <div class="el-upload__text">
          <el-button>
            点击上传
          </el-button>
        </div>

      </div>
      <template #tip>
        <div v-if="!imageUrl"
             class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: this.msg,
      uploadUrl: '/api/classfy',
      imageUrl: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    // 上传成功，获取返回的图片地址
    handleSuccess(res) {
      this.message = res
      console.log(res)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
