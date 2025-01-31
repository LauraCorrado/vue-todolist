const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: [
        {
          text: "Chiamare il commercialista",
          done: false,
          edit: false
        },
        {
          text: "Prenotare un tavolo",
          done: false,
          edit: false
        },
        {
          text: "Andare dal gommista",
          done: false,
          edit: false
        },
        {
          text: "Comprare gli ingredienti per stasera",
          done: false,
          edit: false
        },
        {
          text: "Andare dall'estetista",
          done: false,
          edit: false
        },
        {
          text: "Pulire il bagno",
          done: false,
          edit: false
        },
        {
          text: "Studiare",
          done: false,
          edit: false
        },
      ],
      newTask: undefined,
    };
  },
  methods: {
    isTaskDone(i) {
      this.todo[i].done = true;
      console.log(this.todo[i].done);
    },
    taskRemove(i) {
      if (confirm("Sicuro di voler eliminare questa task?")) {
        this.todo.splice(i, 1);
      }
    },
    taskAdd() {
      // creare oggetto
      let objectTask = {
        text: this.newTask,
        done: false,
      };
      this.todo.push(objectTask);
      this.newTask = undefined;
    },
    reverseBoolean(i) {
      if (this.todo[i].done) {
        this.todo[i].done = !this.todo[i].done // false
      } else {
        this.todo[i].done = !this.todo[i].done // true
      }
    },
    editTask(i) {
      this.todo[i].edit = !this.todo[i].edit
    }
  },
}).mount("#app");
