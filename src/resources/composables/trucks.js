import { ref } from 'vue'
import axios from "axios";
import { useRoute } from 'vue-router';

export default function useSafetyForm() {
    const truck = ref('')
    const trailer = ref('')
    const questions = ref([])
    const route = useRoute()
    const trailerid = ref('')
    const truckid = ref('')
    const errors = ref('')
    const orderid = ref(route.params.id)

    const getTruck = async () => {
        let response = await axios.get(`/checklist/${orderid.value}`)
        truckid.value = response.data.truck_details.id
        trailerid.value = response.data.trailer_details.id
        
        truck.value = response.data.truck_details.registration
        trailer.value = response.data.trailer_details.registration;
    }

    const getQuestions = async () => {
        let response = await axios.get('/checklist-questions/')
        questions.value = response.data;
    }

    // const storeCompany = async (data) => {
    //     errors.value = ''
    //     try {
    //         await axios.post('/api/companies', data)
    //         await router.push({name: 'companies.index'})
    //     } catch (e) {
    //         if (e.response.status === 422) {
    //             errors.value = e.response.data.errors
    //         }
    //     }
    // }

    // const updateCompany = async (id) => {
    //     errors.value = ''
    //     try {
    //         await axios.put('/api/companies/' + id, company.value)
    //         await router.push({name: 'companies.index'})
    //     } catch (e) {
    //         if (e.response.status === 422) {
    //            errors.value = e.response.data.errors
    //         }
    //     }
    // }

    // const destroyCompany = async (id) => {
    //     await axios.delete('/api/companies/' + id)
    // }


    return {
        getTruck,
        getQuestions,
        trailerid,
        truckid,
        orderid,
        questions,
        truck,
        trailer
    }
}