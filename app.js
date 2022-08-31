const app = Vue.createApp({
  data() {
    return { 
      goals: [], 
      enteredGoal: "" ,
      toDo:[
        {
         "id":1,
         "task":"reading",
        },
        {
         "id":2,
         "task":"writing",
        }
      ]
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal="";
    },
  },
});

app.mount("#user-goals");
