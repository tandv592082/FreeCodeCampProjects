<template  >
    <div id="about">
        <h1 class="text-about">ABOUT</h1>
        <div class="information">
            <div class="column">
                <div class="row" data-aos="fade-right" data-aos-duration="500">
                    <div class="wrap">
                         <v-icon name="circle" base-class="custom-icon"/>
                         <p class="ps" for="bio"><strong>FullName</strong></p>
                    </div>
                    
                    <p class="bio-text" name="bio">: Do Thi Ngoc Huyen</p>
                </div>
                <div class="row" data-aos="fade-right" data-aos-duration="600">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Gender</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: Famale</p>
                </div>
                <div class="row" data-aos="fade-right" data-aos-duration="700">
                    <div class="wrap">
                         <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Age</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: 20</p> 
                </div>
               
                <div class="row" data-aos="fade-right" data-aos-duration="800">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Date Of Birth</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: 1999 / 4 / 3</p>
                </div>
                 <div class="row" data-aos="fade-right" data-aos-duration="900">
                    <div class="wrap">
                         <v-icon name="circle" base-class="custom-icon"/>
                            <p class="ps" for="bio"><strong>Height</strong> </p>
                    </div>
                    <p class="bio-text" name="bio">: 1m57</p>
                </div>
                 <div class="row" data-aos="fade-right" data-aos-duration="1000">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Weight</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: 54kg</p>
                </div>
                <div class="row" data-aos="fade-right" data-aos-duration="1100">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Eye Color</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: Black</p>
                </div>
                <div class="row" data-aos="fade-right" data-aos-duration="1200">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Hair Color</strong></p>
                   </div>
                    <p class="bio-text" name="bio">: Black</p>
                </div>
                <div class="row" data-aos="fade-right" data-aos-duration="1300">
                   <div class="wrap mobile">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Language</strong></p>
                   </div>
                    <p class="bio-text" name="bio">: Vietnamese , English , Japanese </p>
                </div>
                
            </div>
            <div class="column">
                <div class="row2"  data-aos="fade-right" data-aos-duration="1400">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Hobby</strong></p>
                   </div>
                    <p class="content" name="bio">I like watching movies, especially romantic and action movies.
                                                    I love listening to Taylor Swift's songs.
                                                    I like learning English because it helps me improve my communication skills.
                                                    I volunteer because it continuously teaches me something new about people, about cooperation, about compassion, and about myself.
                                                    </p>
                </div>
                <div class="row2"  data-aos="fade-right" data-aos-duration="1500">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Weekness</strong></p>
                   </div>
                    <p class="content" name="bio">I don't like watching horror movies</p>
                </div>
                <div class="row2"  data-aos="fade-right" data-aos-duration="1600">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Special Skills</strong></p>
                   </div>
                    <p class="content" name="bio">Making crafts, studying Japanese, doing exercises, volunteering and joining extracurricular activities</p>
                </div>
            </div>
        </div>
         
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

.custom-icon{
    width: 8px;
    color: white;
    height: 10px;
    margin-right: 20px;
    margin-top: 5px;
}
#about{
   
    background:linear-gradient(to right, rgb(255, 170, 114), rgb(181, 123, 218)) ;
    border-radius: 5px;
    width: auto;
    height: 100%;
    margin: 30px;
    margin-bottom: 20px;
}
.text-about{
    color: rgb(235, 39, 39);
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 60px;
    padding-bottom: 30px;
    margin-bottom: 30px;
}
.wrap{
    width: 35%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    justify-items: start;
}
.bio-text{
    margin: 0;
    margin-left: 30px;
    float: right;
}

p{
    margin-left: 20px;
    margin-bottom: 3.5px;
    margin: 0;
    padding: 0;
}

.information{
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
}
.column{
    display: flex;
    flex-direction: column;
    width: 100%;
}


.row{
    background-color: rgba(2, 2, 2, 0.267);
    color: white;
    align-items: center;
    font-size: 20px;
    width: 84%;
    padding: 5px;
    border-radius: 5px;
    margin: 0 auto;
    margin-left: 40px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
}
.row2{
    margin-bottom: 20px;
    background-color: rgba(2, 2, 2, 0.267);
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 5px;
    font-size: 20px;
}

.content{
    width: 100%;
    text-align: start;
    margin-left: 20px;
}
.row:hover{
    color: rgb(139, 16, 16);
    transition: 500ms;
}

.row2:hover{
    color: rgb(139, 16, 16);
    transition: 500ms;
}

.last{
    margin: 0 auto;
    margin-top: 30px;
    width: 50%;
    margin-bottom: 40px;
}
@media only screen and (max-width: 900px) {
    .information{
        display: flex;
        flex-direction: column;
    }
    #about{
        border-radius: 8px;
        margin: 10px;
        margin-bottom: 0px;
    }
    .text-about{
        color: rgb(192, 44, 44);
        margin: 0 auto;
        margin-top: 10px;
        padding: 20px;
    }
    .ps{
        font-size: 14px;
        text-align: start;
    }
    .bio-text{
        font-size: 14px;
        padding: 0px;
        margin: 0;
        text-align: start;

    }
    .wrap{
        width: 40%;
    }
    
    .row{
        width: 90%;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .mobile{
        width: 33%
    }
    .row2{
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .content{
        font-size: 14px;
    }
}

</style>
