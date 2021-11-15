import Link from "next/link";
import Image from 'next/image';

//Updated by Bhira Piromsopa 15/11/2021 13.00 //
export default function Faq() {
  return (
  <div className="container">
      <br /><br /><br />
      <div className="center">
          <h1>FAQ</h1>
          <Link href="/en/faq"><a className="text-decoration-none text-dark">View all FAQ &rarr;</a></Link>
      </div> <br /><br />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div>
                <h2>What is kumi?</h2>
                <p>Kumi is mosquito care company</p>
            </div>
      </div>
      <br /><br />
  </div>
  );
}
