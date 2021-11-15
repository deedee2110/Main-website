import Image from 'next/image';

export default function Product(){
    return(
<section>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
            <span className="card-img-top text-center">
          <Image
            src="/product/spray/kumirice1.jpeg"
            alt="..."
            width={100}
            height={100}
          />
          </span>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">Kumi Rice Butter Balm</h5>
              <p className="text-muted mb-4">mosquito Balm</p>
            </div>
            
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>฿220.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
        <span className="card-img-top text-center">
          <Image
            src="/product/spray/kumispray1.jpeg"
            alt="..."
            width={100}
            height={100}
          />
          </span>
          <div className="card-body">
          <div className="text-center">
              <h5 className="card-title">Kumi Mossy Spray</h5>
              <p className="text-muted mb-4">Anti mosquito spray</p>
            </div>
            
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>฿220.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
        <span className="card-img-top text-center">
          <Image
            src="/product/spray/kumisticker1.jpeg"
            alt="..."
            width={100}
            height={100}
          />
          </span>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">Kumi Mosquito Sticker</h5>
              <p className="text-muted mb-4">Anti Mosquito sticker</p>
            </div>

            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>220.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
    )
}