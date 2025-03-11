import axios from 'axios';
import { useEffect, useState } from 'react'
import { BarChart, Bar,XAxis,YAxis ,Tooltip} from 'recharts';
import { Audio , Grid} from 'react-loader-spinner'

const Phones = () => {

    const [phones,setPhones] = useState([]);
    const[loading,setLoading] = useState(true) // for Loading Spinner
    // https://openapi.programming-hero.com/api/phones?search=iphone
    
      useEffect(()=>{
// FETCH:

        //   fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //   .then(res => res.json())
        //   .then(data => setPhones(data.data))

// AXIOS:

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone') // Axios automatically data JSON এ convert করে দেয়

        //"apple_iphone_12_pro-10508","apple_iphone_12-10509","apple_iphone_12_mini-10510" এগুলোর last এর সংখ্যা বের করার কাজ এখন করা হবে। 


        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone => {
                const obj = {
                     name:phone.phone_name,
                     price: parseInt(phone.slug.split('-')[1])
                }
                return obj; // map থেকে multiline দিলে automatically return করে না, তাই RETURN করতে হবে।
            })
            console.log(phoneWithFakeData)
            setPhones(phoneWithFakeData);
            setLoading(false);
               })




      },[])
    
    return (
        <div style={{ height: "1000px" }} className=" ml-20 mt-200">
           {loading && <div className='width-400px height-400px items-center'>
            <Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
           </div>
           
           } 
{/* If loading is true than <Audio> will be executed */}
            <h2 className="text-5xl">Phones : {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;