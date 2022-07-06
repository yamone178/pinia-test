<template>
    <div>
        <pre>
            {{jobStore.customJobs}}
        </pre>
        
    </div>
</template>

<script>
import {useJobsStore} from '../stores/jobs'
export default {
    setup () {
        
        let jobStore= useJobsStore();
        console.log(jobStore)
        return {jobStore}
    }
}
</script>

<style lang="scss" scoped>

</style>