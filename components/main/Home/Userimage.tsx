import Image from "next/image";
// import birusha from '@/public/birusha.jpg';
import hackton from '@/public/hackton.jpg';
// import ndegeya from '@/public/birushandegeya.jpg';


const UserImage = (): JSX.Element => {
   return (
      <div className="relative">
         <div className="w-full h-full flex flex-wrap">
            <Image className="w-[500px] h-[400px] object-cover" alt="birusha" src={hackton} />
            {/* <Image className="w-[200px] h-[200px]" alt="birusha" src={birusha} /> */}
            {/* <Image className=" rounded-full w-[200px] h-[200px]" alt="birusha" src={ndegeya} /> */}
         </div>
      </div>
   );
}

export default UserImage;