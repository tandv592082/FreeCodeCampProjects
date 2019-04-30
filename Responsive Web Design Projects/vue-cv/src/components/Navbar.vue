<template>
    <div class="nav">
        <ul>
            <li class="link"><a href="#home" v-smooth-scroll v-on:click="getActive($event)">Home</a></li>
            <li class="link"><a href="#about" v-smooth-scroll v-on:click="getActive($event)">About</a></li>
            <li class="link"><a href="#skill" v-smooth-scroll v-on:click="getActive($event)">Skill & Experence</a></li>
            <li class="link"><a href="#contact" v-smooth-scroll v-on:click="getActive($event)">Contact</a></li>
            <li class="link icons">
                <div class="dropdown">
                    <custom-icon name="settings" base-class="custom-icon"></custom-icon>
                    <div class="dropdown-content">
                        <a href="#" v-on:click="selectLanguage('Japan')">Japanese</a>
                        <a href="#" v-on:click="selectLanguage('English')">English</a>
                        <a href="#" v-on:click="selectLanguage('Vietnam')">Vietnamese</a>
                    </div>
                </div>
            </li>
            <div class="lang">
                <p>{{Lang}}</p>
            </div>
        </ul>
        
    </div>
    
</template>
<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
export default {
        name: 'Navbar',
        props:{
            home_active: false,
            about_active: false,
            skill_active: false,
            Lang: {
                type:String,
                default: 'Eng'
            }
        },
        components: {
            customIcon,
        },
        data: function () {
            return {
                baseClass: 'v-icon',
            }
        },
         computed: {
            curve() { return this.Lang }
        },
        methods: {
            getActive: function(event){
                let targetId = event.currentTarget.href;
                let nameId = targetId.substring(26,targetId.length);
                if(nameId === 'home'){
                    this.home_active = true;
                    this.about_active = false;
                    this.skill_active = false;
                }
                else if(nameId === 'about'){
                    this.home_active = false;
                    this.about_active = true;
                    this.skill_active = false;
                }
                else{
                    this.home_active = false;
                    this.about_active = false;
                    this.skill_active = true;
                }
            },
            selectLanguage(str){
                if(str==='Japan') this.Lang = 'JP'
                if(str==='Vietnam') this.Lang = 'VN'
                if(str === "English") this.Lang = 'Eng'
            }
        },
    }
</script>
<style scoped>
.nav{
    background-color: white;
    /*overflow: hidden;*/

    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 10;
}
ul{
    top: 0;
    float: right;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    display: inline-block;
    flex-direction: row;
    list-style-type: none;
    text-align: right;
}
a{
    text-decoration: none;
    color: #E74761;
    transition: color 0.4s ease 0s;
    font-size: 18px;
    cursor: pointer;
}

.link{
    display: inline-block;
    width: 10%;
    height: 100%;
    text-align: center;
    margin-left: 20px;
    margin-right: 30px;
}

a:hover{
    color: #D1A33D;
    transition: color 0.4s ease 0s;
    
}




.custom-icon {
    width: 16px;
    color: #E74761;
    cursor: pointer;
}


.custom-icon:hover {
    animation-name: spin;
    animation-duration: 400ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}


@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(90deg);
    }
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  left: -100px;
  min-width: 120px;
  margin-left: 50px;
  margin-top: 20px;
  box-shadow: 0px 8px 16px 0px rgba(146, 0, 0, 0.253);

}
.dropdown-content a {
  font-size: 12px;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
    background-color: #ddd;
    color: #E74761;
}

.dropdown:hover .dropdown-content {display: block;}

.icons{
    border-radius: 15px;
    color: #E74761;
    padding: 5px;
    height: 14px;
    margin-right: 50px;
}

.lang{
    top: 2.8px;
    position: absolute !important;
    width: 40px;
    right: 80px;
    color: #E74761;
}


</style>
