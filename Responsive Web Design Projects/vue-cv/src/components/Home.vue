<template>
    <div show="show" id="home">
        <div class="bio">
            <div class="avatar">
                <img class="avatar-image" src="../assets/avatar.png" alt="avatar">
            </div>
            <h2 class="text-info">HUYEN DO THI NGOC</h2>
            <h4 class="text-job">a student at  <v-icon name="heart" base-class="custom-icon"></v-icon> <a href="http://www.hanu.vn/vn/" target="_blank">HANU</a></h4>
            <div class="social">
                <a class="icon-social" href="https://www.facebook.com/ngochuyen.hanu">
                    <v-icon class="icon2" name="facebook"/>
                </a>
                <a class="icon-social" href="https://www.instagram.com/ngochuyen_aries/">
                    <v-icon class="icon2" name="instagram"/>
                </a>
                <a class="icon-social" href="https://gmail.com">
                    <v-icon class="icon2" name="mail"/>
                </a>
            </div>
            <button class="download-cv" @click="selectCV()">Download my CV</button>
        </div>
        <div class="wrap-image">
            <img class="ex" src="../assets/bg-remix.png" alt="bio">
        </div>  
    </div>
</template>
<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
import Swal from 'sweetalert2'
    export default{
        components: {
            customIcon
        },
        data: function () {
            return {
                baseClass: 'v-icon',
                url:'http://localhost:8080/public/huyencv-jp.pdf'
            }
        },
        methods: {
            selectCV:async  function(){        
                const {value: lang} =await Swal.fire({
                title: 'Select language',
                input: 'select',
                inputOptions: {
                    'Japanese': 'Japanese',
                    'Vietnamese': 'Vietnamese',
                    'English': 'English',
                },
                inputPlaceholder: 'Select a language',
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                    if (value !== '') {
                        resolve()
                    } else {
                        resolve('You need to select language to download!')
                    }
                    })
                }
                })

                if (lang) {
                    Swal.fire('You selected: ' + lang)
                    this.downloadWithVueResource()
                }
            },
            forceFileDownload(response){
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'NgocHuyen-CV.pdf') //or any other extension
                document.body.appendChild(link)
                link.click()
            },
            downloadWithVueResource() {
                this.$http({
                    method: 'get',
                    url: this.url,
                    responseType: 'arraybuffer'
                })
                .then(response => {
                    this.forceFileDownload(response)  
                })
                .catch(() => console.log('error occured'))
            }
        },
}
</script>
<style scoped>
.custom-icon {
    width: 14px;
    color: red;
    margin-top: 5px;
}
#home{
   display: flex;
   flex-direction: row;
   background-color: white;
   border-radius: 8px;
   width: auto;
   height: auto;
   margin: 30px;
   padding-top: 60px;    
}

.icon2{
    color: white;

}

.bio{
    float: left;
    width: 100%;
    background:linear-gradient(to right, rgb(255, 114, 114), #7C5098) ;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    flex-direction: column;

}

.download-cv{
    margin: 0 auto;
    margin-top: 25px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    width: 180px;
    border: none;
    border-radius:25px;
    background-color: rgb(235, 39, 39);
    cursor: pointer;
}
.download-cv:hover{
    border: 1px solid rgb(235, 39, 39);
    background-color: rgba(255, 0, 0, 0);
    transition: 500ms
}

.avatar{
    width: 100%;
    height: 45%;
    margin-bottom:20px;
}
.infor{
    flex-grow: 1;
}


.social{
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.icon-social{
    width: 24px;
}
.icon-social v-icon{
    width: 300px;
}
.text-info{
    color: wheat;
}
.text-job{
    color: wheat;
    top: 0px;
    padding: 0;
    margin: 0 auto;
}

.text-job a{
    color: wheat;
    text-decoration: none;
}
.avatar-image{
    width: 250px;
    height: 250px;
    align-items: center;
    margin-top: 20px;
    
}

.wrap-image{
    width: 100%;
    overflow: hidden;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0;
    margin: 0;
    background:linear-gradient(to right, rgb(255, 114, 114), #7C5098) ;    
}
.ex{
    height: 100%;
    width: 100%
}
.wrap-image img{ 

    transition: transform .5s, filter 1.5s ease-in-out;
    filter: grayscale(100%);
}

.wrap-image:hover img{
    filter: grayscale(0);
    transform: scale(1.1);
}

@media only screen and (max-width: 900px) {
    #home{
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        width: auto;
        height: auto;
        margin: 10px;
        padding-top: 60px;    
    }
    .bio{
        order: 2;
        border-radius: 0;
        top: 0;
        margin: 0;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .wrap-image{
        order: 1;
        border-radius: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .ex{
        height: 100% !important;
        border-radius: 0px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    
    .avatar-image{
        width: 150px;
        height: 150px;
        position: absolute;
        z-index: 3;
        top: calc(100vh*290/731);
        left:50%;
        transform: translateX(-50%);

    }
    .text-info{
        
        font-size: 18px;
        font-weight: nomal;
        padding: 0;
        margin: 0;
        margin-top: 70px;
        margin-bottom: 10px;
    }
    .text-job{
        font-size: 12px;
        margin-top: 0;
        padding: 0;
    }
    .download-cv{
      background-color: rgb(179, 42, 42);
      margin-bottom: 20px;
    }
}
</style>
