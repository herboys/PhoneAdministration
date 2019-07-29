<template>
    <div class="page">
      <main>
        <div>
          <ul>
            <li>
              <span>头像</span>
              <a>
                <img :src="imgurl"/>
              </a>
            </li>
            <li>
              <span>姓名</span>
              <a>
                <input v-model="realname" placeholder="请输入您的名字 " />
              </a>
            </li>
<!--            <li>-->
<!--              <span>性别</span>-->
<!--              <a style="display: flex;align-items: center">-->
<!--                <div v-for="item in sexlist" :key="item.id" @click="sexlistBtn(item)"-->
<!--                     :class="sex == item.id ? 'addclass' : '' " style="font-size:.28rem;-->
<!--font-family:SourceHanSansCN-Medium;-->
<!--font-weight:500;-->
<!--color:rgba(102,102,102,1);padding: 0.1rem 0.4rem">{{item.name}}-->
<!--                </div>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <span>年龄</span>-->
<!--              <a>-->
<!--                <input v-model="age" placeholder="请输入您的年龄" />-->
<!--              </a>-->
<!--            </li>-->
            <li>
              <span style=" letter-spacing: .1rem;">手机号</span>
              <a>
                <input v-model="phone" placeholder="请填写您的手机号" />
              </a>
            </li>
<!--            <li>-->
<!--              <span style=" letter-spacing: 0.01rem;">公司名称</span>-->
<!--              <a>-->
<!--                <input v-model="company" placeholder="请填写您的公司名称" />-->
<!--              </a>-->
<!--            </li>-->
            <li @click="SettleTmapbtn">
              <span style=" letter-spacing: 0.01rem;">小区定位</span>
              <a>
                <input v-model="address" disabled="disabled" placeholder="点击选择小区">
              </a>
            </li>
          </ul>
        </div>
      </main>
      <div></div>
<!--      上传图片-->
      <div class="up_img_item">
        <div>
          <img
            src="../assets/icon/zhengmianshenfenzheng.png" style="width: 3.5rem;height: 2.3rem"/>
          <input id="one_upload_file"
                 style="display: none;"
                 type="file"
                 accept='image/*'
                 @change="onefileChange($event)" />
        </div>
        <div style="width: 3.5rem;height: 2.3rem ;background-color: #EEEEEE;border-radius: .2rem;display: flex;justify-content: center;align-items: center"  @click="oneimgs" v-if="newimgListimgList.length===0">
          <div>上传</div>
        </div>
        <div
          v-for="(item,index) in newimgListimgList"
          :key="index">
          <input style="display:none"
                 v-model="item.name" />
          <img :src="item.url" style="width: 3.5rem;height: 2.3rem ;background-color:  #EEEEEE;border-radius: .2rem">
        </div>
      </div>

      <!--      上传图片-->
      <div class="up_img_item">
        <div>
          <img
            src="../assets/icon/fanmianshenfeng.png" style="width: 3.5rem;height: 2.3rem"/>
          <input id="one_upload_filea"
                 style="display: none;"
                 type="file"
                 accept='image/*'
                 @change="onefileChangea($event)" />
        </div>
        <div style="width: 3.5rem;height: 2.3rem ;background-color: #EEEEEE;border-radius: .2rem;display: flex;justify-content: center;align-items: center"  @click="oneimgsa" v-if="newimgListimgLista.length===0">
          <div>上传</div>
        </div>
        <div
          v-for="(item,index) in newimgListimgLista"
          :key="index">
          <input style="display:none"
                 v-model="item.name" />
          <img :src="item.url" style="width: 3.5rem;height: 2.3rem ;background-color:  #EEEEEE;border-radius: .2rem">
        </div>
      </div>
  <!--      上传图片-->
      <div class="up_img_item">
        <div>
          <img
            src="../assets/icon/shouchi.png" style="width: 3.5rem;height: 2.3rem"/>
          <input id="one_upload_fileab"
                 style="display: none;"
                 type="file"
                 accept='image/*'
                 @change="onefileChangeab($event)" />
        </div>
        <div style="width: 3.5rem;height: 2.3rem ;background-color: #EEEEEE;border-radius: .2rem;display: flex;justify-content: center;align-items: center"  @click="oneimgsab" v-if="newimgListimgListab.length===0">
          <div>上传</div>
        </div>
        <div
          v-for="(item,index) in newimgListimgListab"
          :key="index">
          <input style="display:none"
                 v-model="item.name" />
          <img :src="item.url" style="width: 3.5rem;height: 2.3rem ;background-color:  #EEEEEE;border-radius: .2rem">
        </div>
      </div>
<!-- &lt;!&ndash;      上传图片&ndash;&gt;-->
<!--      <div class="up_img_item">-->
<!--        <div>-->
<!--          <img-->
<!--            src="../assets/icon/certificate.png" style="width: 3.5rem;height: 2.3rem"/>-->
<!--          <input id="one_upload_fileabc"-->
<!--                 style="display: none;"-->
<!--                 type="file"-->
<!--                 accept='image/*'-->
<!--                 @change="onefileChangeabc($event)" />-->
<!--        </div>-->
<!--        <div style="width: 3.5rem;height: 2.3rem ;background-color: #EEEEEE;border-radius: .2rem;display: flex;justify-content: center;align-items: center"  @click="oneimgsabc" v-if="newimgListimgListabc.length===0">-->
<!--          <div>上传</div>-->
<!--        </div>-->
<!--        <div-->
<!--          v-for="(item,index) in newimgListimgListabc"-->
<!--          :key="index">-->
<!--          <input style="display:none"-->
<!--                 v-model="item.name" />-->
<!--          <img :src="item.url" style="width: 3.5rem;height: 2.3rem ;background-color:  #EEEEEE;border-radius: .2rem">-->
<!--        </div>-->
<!--      </div>-->
      <div style="margin-bottom: 1.5rem"></div>
      <div>
      </div>
      <div class="bottom" @click="Isexamine">
        <div >
          <div>提交审核</div>
        </div>

      </div>
    </div>
</template>

<script>
  import {adminAdd,goodsPublish} from "@/request/api"
  import {mapState,mapMutations} from "vuex"
    export default {
        name: "SettledIn",
      data(){
        return{
          sexlist: [
            {
              id: 1,
              name: "男"
            },
            {
              id: 2,
              name: "女"
            },

          ],
          uid:'',
          imgurl:"",
          realname:"",
          sex:1,
          age:"",
          phone:"",
          company:"",
          address:"",
          newimgListimgList: [],
          newimgListimgLista: [],
          newimgListimgListab: [],
          newimgListimgListabc: [],
          zhuanhuaimgsurl: '',
          username: '',

          pname:"",
          pname:"",
          cityname:"",
          adname:"",
          jing:[],
        }
      },
      computed:{
        ...mapState(['userid','userimg','username','usercompany','DynamicAddress'])
      },
      created() {
        this.uid=this.userid
        this.imgurl=this.userimg
        this.address=this.DynamicAddress.name,

           this.jing=this.DynamicAddress.location.split(',');
          this.pname=this.DynamicAddress.pname
          this.village=this.DynamicAddress.address
          this.cityname=this.DynamicAddress.cityname
          this.adname=this.DynamicAddress.adname
        this.company=localStorage.getItem("company")
        this.phone=localStorage.getItem("phone")
        this.age=localStorage.getItem("age")
        this.realname=localStorage.getItem("realname")
      },
      methods:{
        sexlistBtn(item) {
          this.sex = item.id
        },
        SettleTmapbtn(){
          localStorage.setItem("company",this.company)
          localStorage.setItem("phone",this.phone)
          localStorage.setItem("age",this.age)
          localStorage.setItem("realname",this.realname)
          this.$router.push({path:'/SettleTmap'})
        },
        // 上传身份证反面
        oneimgs() {
          document.getElementById("one_upload_file").click()
        },
        onefileChange(el) {
          if (!el.target.files[0].size) return
          this.onefileList(el.target)
          el.target.value = ''
        },
        onefileList(onefileList) {
          let files = onefileList.files;
          for (let i = 0; i < files.length; i++) {
            //判断是否为文件夹
            if (files[i].type != '') {
              this.onefileAdd(files[i]);
            } else {
              //文件夹处理
              this.onefolders(onefileList.items[i]);
            }
          }
        },
        onefolders(files) {
          let _this = this;
          //判断是否为原生file
          if (files.kind) {
            files = files.webkitGetAsEntry();
          }
          files.createReader().readEntries(function (file) {
            for (let i = 0; i < file.length; i++) {
              if (file[i].isFile) {
                _this.onefoldersAdd(file[i]);
              } else {
                _this.onefolders(file[i]);
              }
            }
          })
        },
        onefileAdd(file) {
          //总大小
          this.size = this.size + file.size;
          //判断是否为图片文件
          if (file.type.indexOf('image') == -1) {
            file.src = 'wenjian.png';
            this.imgListimgList.push({
              file
            });
          } else {
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function () {
              file.src = this.result;
              let para = {
                file: file.src
              }
              goodsPublish(para).then(res => {
                if (res.status === 1) {
                  this.vue.zhuanhuaimgsurl = res.message
                  this.vue.newimgListimgList.push({
                    url: this.vue.zhuanhuaimgsurl,
                    name: this.vue.username
                  });
                  this.vue.username = ''
                  console.log(this.vue.newimgListimgList)
                }
              }).catch(res=>{})
            }
          }
        },
        // 上传身份证反面
        oneimgsa() {
          document.getElementById("one_upload_filea").click()
        },
        onefileChangea(el) {
          if (!el.target.files[0].size) return
          this.onefileLista(el.target)
          el.target.value = ''
        },
        onefileLista(onefileLista) {
          let files = onefileLista.files;
          for (let i = 0; i < files.length; i++) {
            //判断是否为文件夹
            if (files[i].type != '') {
              this.onefileAdda(files[i]);
            } else {
              //文件夹处理
              this.onefoldersa(onefileLista.items[i]);
            }
          }
        },
        onefoldersa(files) {
          let _this = this;
          //判断是否为原生file
          if (files.kind) {
            files = files.webkitGetAsEntry();
          }
          files.createReader().readEntries(function (file) {
            for (let i = 0; i < file.length; i++) {
              if (file[i].isFile) {
                _this.onefoldersAdda(file[i]);
              } else {
                _this.onefoldersa(file[i]);
              }
            }
          })
        },
        onefileAdda(file) {
          //总大小
          this.size = this.size + file.size;
          //判断是否为图片文件
          if (file.type.indexOf('image') == -1) {
            file.src = 'wenjian.png';
            this.imgListimgLista.push({
              file
            });
          } else {
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function () {
              file.src = this.result;
              let para = {
                file: file.src
              }
              goodsPublish(para).then(res => {
                if (res.status === 1) {
                  this.vue.zhuanhuaimgsurl = res.message
                  this.vue.newimgListimgLista.push({
                    url: this.vue.zhuanhuaimgsurl,
                    name: this.vue.username
                  });
                  this.vue.username = ''
                  console.log(this.vue.newimgListimgLista)
                }
              }).catch(res=>{})
            }
          }
        }, // 上传身份证反面
        oneimgsab() {
          document.getElementById("one_upload_fileab").click()
        },
        onefileChangeab(el) {
          if (!el.target.files[0].size) return
          this.onefileListab(el.target)
          el.target.value = ''
        },
        onefileListab(onefileListab) {
          let files = onefileListab.files;
          for (let i = 0; i < files.length; i++) {
            //判断是否为文件夹
            if (files[i].type != '') {
              this.onefileAddab(files[i]);
            } else {
              //文件夹处理
              this.onefoldersab(onefileListab.items[i]);
            }
          }
        },
        onefoldersab(files) {
          let _this = this;
          //判断是否为原生file
          if (files.kind) {
            files = files.webkitGetAsEntry();
          }
          files.createReader().readEntries(function (file) {
            for (let i = 0; i < file.length; i++) {
              if (file[i].isFile) {
                _this.onefoldersAdda(file[i]);
              } else {
                _this.onefoldersab(file[i]);
              }
            }
          })
        },
        onefileAddab(file) {
          //总大小
          this.size = this.size + file.size;
          //判断是否为图片文件
          if (file.type.indexOf('image') == -1) {
            file.src = 'wenjian.png';
            this.imgListimgListab.push({
              file
            });
          } else {
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function () {
              file.src = this.result;
              let para = {
                file: file.src
              }
              goodsPublish(para).then(res => {
                if (res.status === 1) {
                  this.vue.zhuanhuaimgsurl = res.message
                  this.vue.newimgListimgListab.push({
                    url: this.vue.zhuanhuaimgsurl,
                    name: this.vue.username
                  });
                  this.vue.username = ''
                  console.log(this.vue.newimgListimgListab)
                }
              }).catch(res=>{})
            }
          }
        },// 上传身份证反面
        oneimgsabc() {
          document.getElementById("one_upload_fileabc").click()
        },
        onefileChangeabc(el) {
          if (!el.target.files[0].size) return
          this.onefileListabc(el.target)
          el.target.value = ''
        },
        onefileListabc(onefileListabc) {
          let files = onefileListabc.files;
          for (let i = 0; i < files.length; i++) {
            //判断是否为文件夹
            if (files[i].type != '') {
              this.onefileAddabc(files[i]);
            } else {
              //文件夹处理
              this.onefoldersabc(onefileListabc.items[i]);
            }
          }
        },
        onefoldersabc(files) {
          let _this = this;
          //判断是否为原生file
          if (files.kind) {
            files = files.webkitGetAsEntry();
          }
          files.createReader().readEntries(function (file) {
            for (let i = 0; i < file.length; i++) {
              if (file[i].isFile) {
                _this.onefoldersAddac(file[i]);
              } else {
                _this.onefoldersabc(file[i]);
              }
            }
          })
        },
        onefileAddabc(file) {
          //总大小
          this.size = this.size + file.size;
          //判断是否为图片文件
          if (file.type.indexOf('image') == -1) {
            file.src = 'wenjian.png';
            this.imgListimgListabc.push({
              file
            });
          } else {
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function () {
              file.src = this.result;
              let para = {
                file: file.src
              }
              goodsPublish(para).then(res => {
                if (res.status === 1) {
                  this.vue.zhuanhuaimgsurl = res.message
                  this.vue.newimgListimgListabc.push({
                    url: this.vue.zhuanhuaimgsurl,
                    name: this.vue.username
                  });
                  this.vue.username = ''
                  console.log(this.vue.newimgListimgListabc)
                }
              }).catch(res=>{})
            }
          }
        },
        // 审核
        Isexamine(){
          for (let i = 0; i <this.newimgListimgList.length ; i++) {
            this.hand=this.newimgListimgList[0].url
          }  for (let i = 0; i <this.newimgListimgLista.length ; i++) {
            this.handa=this.newimgListimgLista[0].url
          }  for (let i = 0; i <this.newimgListimgListab.length ; i++) {
            this.handab=this.newimgListimgListab[0].url
          }  for (let i = 0; i <this.newimgListimgListabc.length ; i++) {
            this.handabc=this.newimgListimgListabc[0].url
          }
            let para={
              uid:this.uid,
              realname:this.realname,
             // sex:this.sex,
             // age:this.age,
              phone:this.phone,
              company:this.company,
              just:this.hand,    //正面
              against:this.handa,   //反面
              hand:this.handab,   //手持
             // business:this.handabc,    //营业执照
              address:this.village,   //定位地址
              village:this.address,   //小区
              province:this.pname,   //省
              city:this.cityname  , // 市
              county:this.adname,   // 县
              longitude:this.jing[0],   // 经度
              latitude:this.jing[1],   //纬度
            }
          adminAdd(para).then(res=>{
            switch (res.status) {
              case 1:
                this.$router.push({path:"/Audit"})
                break
            }
          }).catch(err=>{

          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .page{
    font-size: .28rem;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  main{
    div{
      ul{
        padding: .2rem;
        li{
          width: 100%;
          height: 1rem;
          border-bottom: .01rem solid #f5f5f5;
          display: flex;
          align-items: center;
          span{
            width: 2.2rem;
            font-size: .32rem;
            font-weight: bold;
            color: #333333;
            letter-spacing: .51rem;
          }
          a{
            width: 100%;
            img{
              width: .7rem;
              height: .7rem;
              border-radius: 50%;
            }
            input{
              width: 100%;
              height: .8rem;
              border:0px;
              outline: none;
              padding: 0;
              background-color: white;
              font-size: .3rem;
            }
          }
        }
      }
    }
  }
  .up_img_item{

    margin-bottom: 1rem;
    display: flex;
    padding: 0 .1rem;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: .1rem;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    font-size: .4rem;
    font-weight:bold;
    color: white;
    background-color: white;
    padding: 0 .2rem;
    width: 100%;
    line-height: 1rem;
    div{
      div{
        border-radius: .6rem;
        background-color: #09D15A;
        text-align: center;
      }
    }


  }
  .addclass {
    background-color: #09D15A;
    color: white !important;
    border-radius: .5rem;
  }
</style>
