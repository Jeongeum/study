// import Image from 'next/image';
// import Food0 from '/public/food0.png';

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((item, i) => {
        return (
          <div className="food" key={i}>
            {/* <Image src={Food0} alt="토마토" className="food-img" /> */}
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
