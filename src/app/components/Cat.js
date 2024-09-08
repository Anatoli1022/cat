import sunny from '../assets/sunny-cat-1.png';
import Image from 'next/image';
const Cat = () => {
  return (
    <section className="cat">
      <div className="cat__img">
        <Image src={sunny} alt="Just. Sunny. Cat." className="cat__img-img" />
      </div>
    </section>
  );
};

export default Cat;
