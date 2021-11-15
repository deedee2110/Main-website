import Link from "next/link";
import Image from 'next/image';

//Updated by Bhira Piromsopa 15/11/2021 13.00 //

export default function Nav() {
  return (
   <div className="container">
  <div className="row justify-content-center">
    <div className="col-4">
      <h2>About us</h2>
      <p>
          Kumi is Mosquito care company.Who create the rice butter balm.And create Mossy spray and mosquito sticker 
      </p>
    </div>
    <div className="col-4">
      <Image src="/kumiprofile.jpg" alt="idk" width={1000} height={1000}/>
    </div>
  </div>
   </div>   
  );
}
