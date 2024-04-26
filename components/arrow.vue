<script setup>
    const props = defineProps({
        show: {
            type: Boolean,
            default: false,
        }
    })

</script>

<template>
    <div class="arrow-container" :class="{show: !show}">
        <div class="arrow">
            <svg fill="#fff" transform="rotate(-90)" viewBox="0 0 330 330">
                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                    l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                    C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.arrow-container{
    width: 40px;
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);

    .arrow {
        animation: example .9s linear infinite;
    }
}

@keyframes example {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(20px);
    }
}

.show {
    display: none;
}
</style>