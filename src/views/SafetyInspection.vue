<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Saaaafety</h1>
            </div>
                
            
            <div class="column is-12">
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Company</th>
                            <th>Destination</th>
                            <th>Loaded Qty</th>                            
                            <th>Status</th>
                            <th> Created at</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="order in orders"
                            v-bind:key="order.id">                                
                                <td>{{ order.id }}</td>
                                <td>{{ order.customer }}</td>
                                <td>{{ order.destination }}</td>
                                <td>{{ order.loaded_quantity }}</td>
                                <td>{{ order.status }}</td>
                                <td>{{ order.created_at }}</td>
                                <td>
                                <button>
                                <router-link :to="{ name: 'Safetyform', params: { id: order.id }}" class="button is-light">Edit</router-link>
                                </button>
                                </td>
                               
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    // import { toast } from 'bulma-toast'

    export default {
        name: 'SafetyInspection',
        data() {
            return {
                orders: [],
            }
        },
        mounted() {
            this.getOrders()
        },
        methods: {
            async getOrders() {
                // this.$store.commit('setIsLoading', true)
                this.showNextButton = false
                this.showPreviousButton = false

                await axios
                    .get(`/safety/`)
                    .then(response => {
                        console.log(response.data)
                        this.orders = response.data
                        this.num_orders = response.data.count
                    })

                // await axios
                //     .get(`/api/v1/leads/?page=${this.currentPage}&search=${this.query}`)
                //     .then(response => {
                //         this.leads = response.data.results
                //         console.log(response.data)
                        
                //     // for (let i = 0; i < response.data.length; i++) {
                //     //     this.leads.push(response.data[i]) 

                //         if (response.data.next) {
                //             this.showNextButton = true
                //         }
                //         if (response.data.previous) {
                //             this.showPreviousButton = true
                //         }
                    // })
                
                    .catch(error => {
                        console.log(error)
                    })
                // this.$store.commit('setIsLoading', false)
            }
            
        }
    }
</script>