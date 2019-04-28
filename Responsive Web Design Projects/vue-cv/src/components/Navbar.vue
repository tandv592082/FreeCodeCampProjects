<template>
    <div class="nav">
        <ul>
            <li class="link"><a href="#home">Home</a></li>
            <li class="link"><a href="#about">About</a></li>
            <li class="link"><a href="#skill">Skill & Experence</a></li>
            <li class="link"><a href="#">Contact</a></li>
            <li class="link icons"><custom-icon name="settings" base-class="custom-icon"/></li>
        </ul>
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
.nav{
    background-color: white;
    /*overflow: hidden;*/

    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 2;
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
}

a:hover{
    color: #D1A33D;
    transition: color 0.4s ease 0s;

}




.custom-icon {
    width: 16px;
    color: #E74761;
}


.custom-icon:hover {
    width: 20px;
    animation-name: spin;
    animation-duration: 400ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}

.custom-icon:hover:after {
    width: 20px;
    animation-name: spin-reverse;
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

@keyframes spin-reverse {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(-90deg);
    }
}

</style>
