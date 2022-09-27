const STORAGE_KEY = 'names-storage';
const app = Vue.createApp({
  data() {
    return {
      enteredNameValue: '',
      names: [],
      namesToChooseFrom: [],
      chosenName: '',
    };
  },
  created() {
    this.names = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  methods: {
    addName() {
      this.names.push(this.enteredNameValue);
      this.enteredNameValue = '';
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.names));
    },
    removeName(name) {
      this.names.splice(this.names.indexOf(name), 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.names));
    },
    pickName() {
      var chosenNumber = Math.floor(
        Math.random() * this.namesToChooseFrom.length,
      );
      this.chosenName = this.namesToChooseFrom[chosenNumber];
    },
  },
});

app.mount('#user-names');
