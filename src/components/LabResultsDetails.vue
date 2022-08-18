<script>
import axios from 'axios'
import useSafetyForm from "../resources/composables/trucks";
import {onMounted} from "vue";

export default {
setup() {
  const { truck, trailer, truckid, trailerid, labResults, orderid, getTruck, getLabResults } = useSafetyForm()
  
  onMounted(getTruck(), getLabResults())

  return {
    truckid,
    trailerid,
    orderid,
    truck,
    trailer,
    labResults


    
  }
},
data() {
            return {
              // questions:[{question: '', value:''}]
            }
},
methods: {
      async submitForm() {
         
          let config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:8000/",
            },
          };

          const payload = {
            order: this.orderid,
            truck: this.truckid,
            trailer: this.trailerid,
            truck_pressure: this.truck_pressure,
            oxygen_content: this.oxygen_content,
            methane_content: this.methane_content

            
          };
          console.log(payload)
          await axios
          .post(`/lab-resultsdetails/`, payload)
          .then((response) => {
            console.log(response.data)
          })
    },
            
  }
}

</script>

<template>
    <div>
    <h4>Truck Reg: {{ truck }} </h4>
    <h4>Trailer Reg: {{ trailer }} </h4>
    </div>
  <form @submit.prevent="submitForm">
    <h3>Lab Results</h3>

      <h4>Oxygen: {{ labResults.oxygen }}</h4>
      <h4>Pressure: {{ labResults.pressure }}</h4>
      <h4>Nitrogen: {{ labResults.nitrogen }}</h4>
      <h4>Methane: {{ labResults.methane }}</h4>
      <div>
      <button type="submit" value="Proceed">Proceed</button>
      </div>
      <div>
      <button type="submit" value="Seal">Seal</button>
      </div>
      <div>
      <button type="submit" value="Vent">Vent</button>
      </div>
      <div>
      <button type="submit" value="Reject">Reject</button>
      </div>
      <div>
      <button type="submit" value="Back">Go To List</button>
      </div>
  </form>
</template>


