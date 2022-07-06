import { defineStore } from 'pinia'

export const useJobsStore = defineStore({
  id: 'jobs',
  state: () => ({
    counter:0,
   jobs: [
    {
        id:1, title: 'Designer', desc:'Watch a free video lesson on Vue School'
    },
    {
        id:2, title: 'Developer', desc:'Watch a free video lesson on Vue School'
    },
    {
        id:3, title: 'Freelancer', desc:'This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:'
    },
    {
        id:4, title: 'Web Designer', desc:'This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:'
    },
    {
        id:5, title: 'Backend Developer', desc:'This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:'
    },
   ],
   currentId: 6
  }),
  getters: {
    // mu la counter ko mapyaung lae buu
    // doubleCount: (state) => state.counter * 2

    customJobs:(state)=>state.jobs.map((job)=>({
        id: job.id,
        title: job.title,
        desc: job.desc.substring(0,30)+ " ..."
    })),

    // customJobs:(i)=>state.jobs.map((job)=>{
    //     id: job.id,
    //     title: job.title,
    //     desc: job.desc.substring(0,30)+ " ..."
    // })
  },
  actions: {
    //mu la counter ko chang zay th
    increment() {
      this.counter++
    }
  }
})
