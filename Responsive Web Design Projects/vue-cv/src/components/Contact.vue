<template>
    <div id="contact">
        <h1 class="text-contact">Contact Me</h1>
        <div class="contact">
            <form @submit.prevent="submit" class="send-mail">
                <div class="wrap-all">
                    <div class="name-and-mail">
                        <input required type="text" class="input first" @input='updateVal' :name="name" placeholder="Name">
                        <input required type="email" class="input first" @input='updateVal' :v-model="email"  placeholder="Email">
                    </div>
                    <input required type="text" class="input" @input='updateVal' :v-model="subject"  placeholder="Subject">
                    <textarea required class="text-area" @input='updateVal' :v-model="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button class="submit" @click="submit">Submit</button>
                </div>
            </form>
            <div class="information">
                    <div class="all-info">
                            <div class="address">
                                <h3>HUYEN DO THI NGOC</h3>
                                <p class='text-name'>STUDENT</p>
                                <p class='text-name'><strong>Phone : </strong> 0868 700 728</p>
                                <p class='text-name'><strong>Email : </strong> do.t.ngochuyen@gmail.com</p>
                                <p class='text-name'><strong>Address : </strong>41th Lane , Thai Ha Str , Dong Da Dist , Ha Noi City </p>
                            </div>
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
                    </div>
                    <div class="sign">
                        <img class="sign-img" src="../assets/sign.png" alt="sign">
                    </div>
            </div>
        </div>
    </div>    
</template>
<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'


export default {

    components: {
        customIcon
    },
    props:{
        name: String,
        email: String,
        subject: String,
        message: String
    },
    data: function () {
        return {
            baseClass: 'v-icon',
           
        }
    },
    methods:{
        updateVal: function(val){
           this.$emit('input', val);
        }
        ,
        submit(event){
            console.log(this.name)
        }
    }
}

</script>


<style scoped>

.custom-icon{
    width: 8px;
    color: white;
    height: 10px;
    margin-right: 20px;
    margin-top: 5px;
}
#contact{
    background:linear-gradient(to right, rgb(255, 170, 114), rgb(181, 123, 218)) ;
    border-radius: 5px;
    width: auto;
    height: 100%;
    margin: 30px;
    margin-bottom: 20px;
}

.text-contact{
    color: rgb(235, 39, 39);
    padding: 20px;
    margin: 0 auto;
    padding: 60px;
    padding-bottom: 0px;
}
.contact{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    width: 100%;
    border-top: 1px solid rgba(245, 245, 245, 0.315);
}
.wrap-all{
    width: 60%;
    margin: 0 auto;
    padding: 15px;
}

.send-mail{
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    border-right: 1px solid rgba(245, 245, 245, 0.315);
}

.name-and-mail{
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.input,.text-area{
    box-sizing : border-box;
    width: 100%;
    padding: 8px;
    font-size: 13px;
    max-width: 100vw;
    background-color: rgba(255, 255, 255, 0.712);
    border: 0px none;
    color: rgb(235, 39, 39);
    outline: none;
    margin-bottom: 10px;
}

.input::placeholder,.text-area::placeholder{
    color: rgba(235, 39, 39, 0.452);
}

.first{
    margin: 0;
   
}

.first:nth-child(2){
    justify-items: end;
    margin-left: 15px;
}

.submit{
    padding: 8px;
    width: 100%;
    padding-right: 15px;
    cursor: pointer;
    border: 1px solid rgb(255, 255, 255, 0.712);
    color: rgb(235, 39, 39);
    font-size: 14px;
    background-color: rgb(255, 255, 255, 0.712);
}

.information{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.submit:hover{
    border: 1px solid red;
    background-color: rgba(255, 0, 0, 0);
    transition: 500ms;
}


.all-info{
    width: 100%;
    padding: 15px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
}

.address{
    height: 80%;
    border-bottom: 1px solid rgba(245, 245, 245, 0.315);
    float: left;
    text-align: start;
}

.sign{
    width: 100%;
}

h3{
    color: rgb(255, 255, 255);
}

.text-name{
    color: rgb(255, 255, 255);
    font-size: 14px;
}

.text-name:nth-child(1){
    margin-top: 0px;
    padding-top: 0px;
}

.social{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
}


.sign-img{
    width: 200px;
    height: 100px;
    margin: 0 auto;
    margin-top: 35%;
}
.icon-social{
    width: 24px;
    color: white;
    margin-left: 20px;
}
.icon-social:nth-child(1){
    margin-left: 0px;
}
</style>
