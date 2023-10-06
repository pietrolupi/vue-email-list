const { createApp } = Vue;


createApp({

  data(){

    return{

      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailList: []

    }
  },

  
  methods: {

    
    
    getApi(){
      
      axios.get(this.apiUrl)
      .then ((risposta)=> {
        this.mailList.push(risposta.data.response)
        console.log('risultato-----' + risposta.data.response);
        
      } ) 
      
    },
    
    getTenMails(){

      for(let i=0; i<10; i++){
        this.getApi()
      }

    },


  },

  mounted(){
    this.getTenMails()
    console.log(this.mailList);
   console.log('ciao VUEEEE ');
  }
  
  
}).mount("#app")