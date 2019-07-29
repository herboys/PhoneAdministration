<template>
    <div>
        <div class="up_img_item">
            <div>
                <input id="one_upload_file"
                       style="display: none;"
                       type="file"
                       accept='image/*'
                       @change="onefileChange($event)" />
            </div>
            <div @click="oneimgs" v-if="newimgListimgList.length===0">
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
    </div>

</template>

<script>
    import {goodsPublish} from "@/request/api"
    export default {
        name: "child",
        data(){
            return{
                newimgListimgList: [],
                zhuanhuaimgsurl: '',
                username: '',
            }
        },
        methods:{
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
        }
    }
</script>

<style scoped>
    div{
        font-size: .3rem;
    }
</style>
