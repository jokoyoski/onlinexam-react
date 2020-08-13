import  axios, { AxiosResponse } from 'axios'
import { RegisterUser } from '../model/RegisterUser';
import { toast } from 'react-toastify';
import { LoginUser } from '../model/LoginUser';


//axios.defaults.baseURL='http://bomanaziba-001-site1.dtempurl.com/api/';
axios.defaults.baseURL='http://localhost:5000/api/';
axios.interceptors.response.use(undefined,error=>{
   if(error.response.status===404){
      throw error.response
   } 
   if(error.response.status===500){
      toast.error('Error occured please try again later')
   }
   if(error.message==='Network Error' && !error.response){
      toast.error('Network Error Occured')
   }
   

   throw error;
})
const responseBody=(response:AxiosResponse)=>response.data;
const sleep=(ms:number)=>(response:AxiosResponse)=>new Promise<AxiosResponse>(resolve=>setTimeout(()=>resolve(response),ms));

const requests={
    get:(url:string)=>axios.get(url).then(sleep(1000)).then(responseBody),
    post:(url:string,body:{})=>axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    del:(url:string)=>axios.delete(url).then(responseBody)

}
const Activities={
   /* list:():Promise<IActivity[]>=>requests.get('/activities'),
    details:(id:string)=>requests.get(`/activities/${id}`),
    create:(activity:IActivity)=>requests.post('/activities',activity),
    update:(activity:IActivity)=>requests.put(`/activities/${activity.id}`,activity),
    delete:(id:string)=>requests.del(`/activities/${id}`),*/
    register:(userInfo:RegisterUser)=>requests.post('/account/register',userInfo),
    login:(userInfo:LoginUser)=>requests.post('/account/login',userInfo)

   // 
 
}

export default{
   Activities
}