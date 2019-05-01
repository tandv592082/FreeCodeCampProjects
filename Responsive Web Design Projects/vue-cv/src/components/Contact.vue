<template>
    <div id="contact">
        <h1 class="text-contact">Contact Me</h1>
        <div class="contact">
            <form v-on:submit.prevent="submit" class="send-mail">
                <div class="wrap-all">
                    <div class="name-and-mail">
                        <input v-model="send.name" required type="text" class="input first"   placeholder="Name">
                        <input v-model="send.email" required type="email" class="input first"    placeholder="Email">
                    </div>
                    <input required type="text" v-model="send.subject" class="input"  placeholder="Subject">
                    <textarea v-model = "send.text" required class="text-area"   id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button class="submit" type="submit">Submit</button>
                </div>
            </form>
            <div class="information">
                    <div class="all-info">
                            <div class="address">
                                <h3 class="mobile">HUYEN DO THI NGOC</h3>
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
                         <img class="sign-img" src="https://i.ibb.co/hB2DHgQ/sign.png" alt="sign">
                    </div>
            </div>
        </div>
    </div>    
</template>
<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
import Swal from 'sweetalert2'

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
            send: {},
            url: 'https://huyen-cv.herokuapp.com/api/sendmail'
           
        }
    },
    methods:{
        
        async submit(){
            let timerInterval
            Swal.fire({
                title: "",
                text: "Please wait a few second...",
                showConfirmButton: false
            }) 
            await this.$http.post(this.url, this.send)
                    .then(respone => {
                        console.log('ok')
                        Swal.close()
                        if(respone.data.success){
                            Swal.fire({
                            position: 'center',
                            type: 'success',
                            title: 'Your message has been sent ! I will reply you soon !',
                            showConfirmButton: false,
                            timer: 2000
                            })
                        }
                        else{
                            Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong! Please check your data!',
                            })
                        }
                    })
                    .catch(err => {
                        Swal.close()
                         Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong! Please check your network!',
                            })
                    })     
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
    font-size: 20px;
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
    border: 1px solid white;
    background-color: rgba(255, 0, 0, 0);
    transition: 500ms;
    color:white;
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

@media only screen and (max-width: 900px) {
    .text-contact{
        color: rgb(192, 44, 44);
        margin: 0 auto;
        margin-top: 10px;
        padding: 20px;
    }
    #contact{
        background:linear-gradient(to right, rgb(255, 170, 114), rgb(181, 123, 218)) ;
        margin: 10px;
        margin-bottom: 20px;
    }
    .contact{
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        width: 100%;
        border-top: 1px solid rgba(245, 245, 245, 0.315);
    }
    .wrap-all{
        width: 90%;
        margin: 0 auto;
        padding: 0;
    }
    .send-mail{
        padding: 0px;
        margin-top: 15px;
    }
    .input::placeholder{
        color: rgb(143, 0, 0);
    }
    .text-area::placeholder{
        color: rgb(143, 0, 0);
    }
    .input,.text-area{
        color: rgb(61, 0, 0)
    }
    .submit{
        color: rgb(61, 0, 0);
    }
    .all-info{
        margin-left: 10px;
        margin-bottom: 5px;
    }
    .address{
        height: 80%;
        border-bottom: 1px solid rgba(245, 245, 245, 0.315);
        float: left;
        text-align: start;
        margin-bottom: 10px;
    }
    .mobile{
        font-size: 16px;
        margin: 0px;
        margin-bottom: 10px;
    }
    .sign{
        width: 50%;
    }
    .text-name{
        font-size: 14px;
        padding: 0px;
        margin: 0px;
        margin-bottom: 8px;
    }
    .information{
        border-top: 1px solid rgba(245, 245, 245, 0.315);
        margin-top: 10px;
    }
    .social{
        margin: 0 auto;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        top: 10px;
    }
    .sign-img{
        width: 100px;
        height: 50px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-100%)
    }
}
@media only screen and (max-width: 320px){
    .sign-img{
        width: 80px;
        height: 40px;
    }
}
</style>
