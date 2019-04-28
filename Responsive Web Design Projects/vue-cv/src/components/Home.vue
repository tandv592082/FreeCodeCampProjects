<template>
    <div show="show" id="home">
    <div class="bio">
        <div class="avatar">
            <img class="avatar-image" src="../assets/avatar.png" alt="avatar">
        </div>
        
        <h1 class="text-info">DO THI NGOC HUYEN</h1>
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
        <img class="sign" src="../assets/sign.png" alt="sign">
        <button class="download-cv">Download my CV</button>
    </div>
    <img class="background-image" src="../assets/sign.png" alt="background-image" >   
</div>
</template>
<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
    export default{
        components: {
            customIcon
        },
        data: function () {
            return {
                baseClass: 'v-icon'
            }
        }
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
   border-radius: 5px;
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
    width: 80%;
    background:linear-gradient(to right, rgb(255, 114, 114), #7C5098) ;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    flex-direction: column;
}

.download-cv{
    margin: 0 auto;
    margin-top: 15px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    height: 50px;
    width: 180px;
    border: none;
    border-radius:25px;
    background-color: rgb(235, 39, 39);
    cursor: pointer;
}
.download-cv:hover{
    border: 1px solid red;
    background-color: rgba(255, 0, 0, 0);
    transition: 500ms
}

.avatar{
    width: 100%;
    height: 45%;
}
.infor{
    flex-grow: 1;
}

.sign{
    margin: 0 auto;
    width: 160px;
    height: 80px;
}
.social{
    width: 50%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.icon-social{
    width: 30px;
}
.icon-social v-icon{
    width: 300px;
}
.text-info{
    top: 0;
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
.background-image{
   
    z-index: 0;
    float: right;
    width: 70vw;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}


</style>
