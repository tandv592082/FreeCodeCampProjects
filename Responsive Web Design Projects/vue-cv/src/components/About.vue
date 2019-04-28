<template  >
    <div id="about">
        <h1 class="text-about">ABOUT</h1>
        <div class="information">
            <div class="column">
                <div class="row">
                    <div class="wrap">
                         <v-icon name="circle" base-class="custom-icon"/>
                         <p class="ps" for="bio"><strong>FullName</strong></p>
                    </div>
                    
                    <p class="bio-text" name="bio">: Do Thi Ngoc Huyen</p>
                </div>
                <div class="row">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Gender</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: Famale</p>
                </div>
                <div class="row">
                    <div class="wrap">
                         <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Age</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: 20</p> 
                </div>
               
                <div class="row">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Date Of Birth</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: 1999 / 4 / 3</p>
                </div>
                 <div class="row">
                    <div class="wrap">
                         <v-icon name="circle" base-class="custom-icon"/>
                            <p class="ps" for="bio"><strong>Height</strong> </p>
                    </div>
                    <p class="bio-text" name="bio">: 1m57</p>
                </div>
                 <div class="row">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Weight</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: 54kg</p>
                </div>
                <div class="row">
                    <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Eye Color</strong></p>
                    </div>
                    <p class="bio-text" name="bio">: Black</p>
                </div>
                <div class="row">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Hair Color</strong></p>
                   </div>
                    <p class="bio-text" name="bio">: Black</p>
                </div>
                <div class="row">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Language</strong></p>
                   </div>
                    <p class="bio-text" name="bio">: Vietnamese , English , Japanese </p>
                </div>
                
            </div>
            <div class="column">
                <div class="row2">
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
                <div class="row2">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Weekness</strong></p>
                   </div>
                    <p class="content" name="bio">I don't like watching horror movies</p>
                </div>
                <div class="row2">
                   <div class="wrap">
                        <v-icon name="circle" base-class="custom-icon"/>
                        <p class="ps" for="bio"><strong>Special Skills</strong></p>
                   </div>
                    <p class="content" name="bio">Singging , Swimming , Hiking and Draw</p>
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


</style>
