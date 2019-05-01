<template>
    <div class="nav">
        <ul>
            <li class="link"><a href="#home" v-smooth-scroll >Home</a></li>
            <li class="link"><a href="#about" v-smooth-scroll >About</a></li>
            <li class="link"><a href="#skill" v-smooth-scroll >Skill & Experence</a></li>
            <li class="link"><a href="#contact" v-smooth-scroll >Contact</a></li>
            <li class="link icons">
                <div class="dropdown">
                    <div @mouseover="mouseOver()">
                        <custom-icon name="settings" base-class="custom-icon"></custom-icon>
                    </div>
                    <div class="dropdown-content" v-show="show">
                        <a @click="selectLanguage('JP')">Japanese</a>
                        <a  @click="selectLanguage('Eng')">English</a>
                        <a  @click="selectLanguage('VN')">Vietnamese</a>
                    </div>
                </div>
            </li>
            <div class="lang">
                <p>{{lang}}</p>
            </div>
        </ul>
        
    </div>
    
</template>
<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
import swal from 'sweetalert2'
export default {
        name: 'Navbar',
        props:{
            home_active: false,
            about_active: false,
            skill_active: false
        },
        components: {
            customIcon,
        },
        data: function () {
            return {
                baseClass: 'v-icon',
                lang : 'Eng',
                show : true,
                hover: false
            }
        },
         computed: {
            curve() { return this.Lang }
        },
        methods: {
            selectLanguage: function(str){
                this.lang = str;
                this.show = false;
                let fullLang = 'English';
                if( str === 'JP') fullLang = 'Japanese';
                else if(str === 'VN') fullLang = 'Vietnamese'
               const Toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000
                });

                Toast.fire({
                    type: 'success',
                    title: fullLang + ' is selected!'
                })

                return this.lang;
            },
            mouseOver: function(){
                this.show = true;
                return this.show;
            
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
    width: 100px;
}

a:hover{
    color: #D1A33D;
    transition: color 0.4s ease 0s;
    
}


.link:nth-child(3){
    width: 180px;
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
  box-shadow: 0px 8px 16px 0px rgba(146, 0, 0, 0.295);

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
.hide {
    display: none !important;
}
.icons{
    border-radius: 15px;
    color: #E74761;
    padding: 5px;
    height: 14px;
    width: 40px;
    margin-right: 60px;
}

.lang{
    top: 2.8px;
    position: absolute !important;
    width: 16px;
    right: 40px;
    color: #E74761;
    margin-left: 20px;
}



@media only screen and (max-width: 900px) {
    .link{
        width: 60px;
    }
    .lang{
        right: 40px;
        font-size: 13px;
        top: 10px;
    }
    a{
        font-size: 13px;
    }
    .link:nth-child(3){
        width: 120px;
    }
    .custom-icon {
        width: 13px;
        color: #E74761;
        cursor: pointer;
    }
    .icons{
        width: 40px;
    }
    .dropdown-content {
        left: -95px;
        min-width: 100px;
    }
    
}

@media only screen and (max-width: 380px) {
    .link{
        width: 55px;
    }
    .lang{
        right: 20px;
        font-size: 13px;
        top: 9px;
    }
    a{
        font-size: 13px;
    }
    .link:nth-child(3){
        width: 120px;
    }
    .custom-icon {
        width: 13px;
        color: #E74761;
        cursor: pointer;
    }
    .icons{
        width: 40px;
    }
    .dropdown-content {
        left: -95px;
        min-width: 90px;
    }
    .dropdown-content a {
        font-size: 11px;
        text-align: center;
    }
}



@media only screen and (max-width: 360px){
        .link{
            width: 50px;
            font-size: 10px;
        }
        a{
            font-size: 12px;
        }
        .custom-icon{
            width: 11px;
        }
        .lang{
            right: 15px;
            font-size: 12px;
            top: 7px;
        }
}

@media only screen and (max-width: 320px){
    .link{
        width: 40px;
        font-size: 10px;
    }
    .lang{
            right: 12px;
            font-size: 12px;
            top: 7px;
    }
}

</style>
