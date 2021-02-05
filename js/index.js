var app = new Vue({
    el: '.miApp',
    data: {
        info: null,
    },
    mounted() {
        axios
            .get("https://carlosmoreno00.github.io/CV/json/datos.json")
            .then(response => (this.info = response.data))
            .catch(function (error){
                console.log("Error al cargar el JSON" + error);
            })
    },
    methods: {

    },
    computed: {
        
    }
})