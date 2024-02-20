<script setup>
import TeamInfoBox from './TeamInfoBox.vue';
import PersonalInfoBox from './PersonalInfoBox.vue';
import UploadBox from './UploadBox.vue';
</script>
<script>
export default {
    props: {
        isTeamWork: Boolean
    }
}

</script>

<template>
    <div class="main">
        <TeamInfoBox v-if="isTeamWork === true"/>
        <PersonalInfoBox v-else/>
        <UploadBox/>
    </div>
</template>