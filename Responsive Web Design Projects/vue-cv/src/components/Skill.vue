<template>
    <div id="skill">
        <h1 class="text-skill">Skills & Experence</h1>
        
        <div class="skill-wrap">
            <div class="skill">
                <p class="content">
                     Soft Skills
                </p>
                <div class="row  animated bounceInLeft delay-0.1s">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="60" 
                        text-position="top" 
                        text="Japanese" 
                        title="60%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>N3 / N1</strong></p>
                </div>
                  <div class="row animated bounceInLeft delay-1s">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="70" 
                        text-position="top" 
                        text="English" 
                        title="60%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>70%</strong></p>
                </div>
                <div class="row animated bounceInLeft delay-2s">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="70" 
                        text-position="top" 
                        text="Teamwork" 
                        title="60%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>70%</strong></p>
                </div>
                <div class="row">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="80" 
                        text-position="top" 
                        text="Communication " 
                        title="80%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>80%</strong></p>
                </div>
              
                <p class="content"> MS Offices Skill</p>
                <div class="row">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="75" 
                        text-position="top" 
                        text="Word" 
                        title="75%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>75%</strong></p>
                </div>
                <div class="row">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="60" 
                        text-position="top" 
                        text="Excel" 
                        title="60%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>60%</strong></p>
                </div>
                <div class="row">
                    <progress-bar class="pro"
                        bar-color="#10bb00" 
                        val="60" 
                        text-position="top" 
                        text="PowerPoint" 
                        title="60%" 
                        size='14'
                        :font-size="14"
                        text-fg-color="#ffffff"/>
                    <p class="percent"><strong>60%</strong></p>
                </div>
            </div>
            
            <div class="experence">
                <p class="content">Experence</p>
                <div class="history">
                    <div class="time-leap">
                        <div class="half">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <div class="half"></div>
                    </div>
                    <div class="active">
                        <active
                            date="2017 / 8"
                            content="I'm a student at HANU"/>
                        <active
                            date="2017 / 10 to 2018 / 4"
                            :hasLink="true"
                            link="https://izienglish.net/"
                            content="I joined an English center called IZI English"/>
                        <active
                            date="2017 / 11"
                            content="I 'am a member of Japanese Department at HANU"/>
                        <active
                            date="2018 / 7"
                            content="I'am Hang Lena's teacher."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProgressBar from 'vue-simple-progress'
import Active from './Active'
export default {
    components:{
        'progress-bar': ProgressBar,
        'active'      : Active
    }
}
</script>
<style scoped>
#skill{
    background:linear-gradient(to right, rgb(255, 170, 114), rgb(181, 123, 218)) ;
    border-radius: 5px;
    width: auto;
    height: 100%;
    margin: 30px;
    margin-bottom: 20px;
}

.text-skill{
    color: rgb(235, 39, 39);
    padding: 20px;
    margin: 0 auto;
    padding: 60px;
    padding-bottom: 0px;
}
.skill-wrap{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.skill{
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    margin-left: 40px;
}
.row{
    width:100%;
    display: flex;
    flex-direction: row;
}
.experence{
    width: 80%;
    margin-left: 40px;
}

.pro{
    width: 80%;
}
.percent{
    margin-left: 15px;
    vertical-align: bottom;
    color: white;
    margin-top: 19px;
}

.content{
    color: white;
    font-size: 24px;
    text-align: left;
}


.history{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
}

.time-leap{
    width: 10%;
    display: flex;
    flex-direction: row;
}
.active{
    width: 100%;
}
.vue-simple-progress-text{
    vertical-align: bottom;
}
.half{
    width: 100%;
    margin-top: 15px;
    margin-bottom: 80px;
}
.half:nth-child(1){
    border-right: 1px solid white;
}

.dot{
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: white;
    left: 100%;
    transform: translateX(-50%);
}

.dot:nth-child(1){
    top: 0;
}
.dot:nth-child(2){
    top: 27%;
}
.dot:nth-child(3){
    top: 54%;
}
.dot:nth-child(4){
    top: 82%;
}

@media only screen and (max-width: 900px){
    #skill{
        border-radius: 8px;
        margin: 10px;
    }
    .text-skill{
        color: rgb(192, 44, 44);
        margin: 0 auto;
        margin-top: 10px;
        padding: 20px;
    }
    .skill-wrap{
        display: flex;
        flex-direction: column;
    }
    .content{
        font-size: 18px;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 25px;
        text-align: center;
    }
    .row{
        width: 100%;
        margin: 0 auto;
    }
    .skill{
        width: 90%;
        margin: 0 auto;
        height: auto;
    }
    .percent{
        margin-left: 15px;
        vertical-align: bottom;
        color: white;
        margin-top: 21px;
        font-size: 12px;
    }
    .vue-simple-progress-bar{
        border-radius: 10px;
    }
    .experence{
        width: 85%;
        margin-left: 10px;
    }
    .dot:nth-child(1){
        top: -5px;
    }
    .dot:nth-child(2){
        top: 22%;
    }
    .dot:nth-child(3){
        top: 56%;
    }
    .dot:nth-child(4){
        top: 84%;
    }
}
</style>
