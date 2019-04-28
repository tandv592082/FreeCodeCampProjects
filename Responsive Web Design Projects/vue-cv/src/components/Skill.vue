<template>
    <div id="skill">
        <h1 class="text-skill">Skills & Experence</h1>
        
        <div class="skill-wrap">
            <div class="skill">
                <p class="content">
                    - Soft Skills
                </p>
                <div class="row">
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
                  <div class="row">
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
                <div class="row">
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
              
                <p class="content">- MS Offices Skill</p>
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
                x
            </div>
        </div>
    </div>
</template>
<script>
import ProgressBar from 'vue-simple-progress'
export default {
    components:{
        'progress-bar': ProgressBar
    }
}
</script>
<style scoped>
#skill{
    background:linear-gradient(to right, rgb(255, 170, 114), rgb(181, 123, 218)) ;
    border-radius: 5px;
    width: auto;
    height: auto;
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
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
}
.skill{
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 60px;
}
.row{
    width:100%;
    display: flex;
    flex-direction: row;
}
.experence{
    width: 100%
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
.vue-simple-progress-text{
    vertical-align: bottom;
}
</style>
