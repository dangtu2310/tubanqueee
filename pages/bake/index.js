import { MdAccountCircle } from "react-icons/md";
import { CiSearch,CiShoppingCart  } from "react-icons/ci";
import Link from "next/link";

const BlogPage = () => {
  return (
  <>
    <header>
        <nav className="bg-black-bg flex text-white items-center justify-between px-12 py-5">
            <div>
                <Link href="/">
                  <a className="flex items-center justify-start ">
                    <img width={"50px"} style={{height:"50px"}}  src="https://source.unsplash.com/random" />
                  </a>
                </Link>

            </div>
            <div>
                <ul className="flex gap-5 ">
                    <li>
                        Home
                    </li>
                    <li>
                        Menu
                    </li>
                    <li>
                        New
                    </li>
                    <li>
                        Booking
                    </li>
                </ul>
            </div>
        <div className="flex gap-5">
        <CiSearch />
        <CiShoppingCart />
        <MdAccountCircle />

        </div>
        </nav>
    </header>
    <main className="bg-[#6f89a0] text-white">
        <img src="https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-102-16715878746102005998080.jpg" className="h-[250px] w-[100%] object-cover bg-no-repeat"/>
      <div className="flex flex-col items-center">

      <h2 className="uppercase text-xxl text-center text-[#ff9d1a]">DZUx bakery</h2>
        <p className="my-4 w-[250px] mx-auto">
        Dưới bức tranh mặt trời lặn, làn sóng nhẹ nhàng của biển cất lên những âm thanh êm dịu, như là nhịp tim của thiên nhiên. Cảm giác hương biển mặn hòa quyện với gió nhẹ, làm cho không khí trở nên tinh tế và dễ chịu. 
        </p>
        <button className="uppercase text-[#ff9d1a] border-solid border-2 border-rose-600">Read more</button>
    
      </div>
      
<h2 className="uppercase text-xxl text-center text-[#ff9d1a] my-5">DZUx bakery</h2>
<div className="flex  gap-12   ">
<img width={"500px"} src="https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-79-1671587874967986330061.jpg"/>
<div className="">
    <h3 className="text-[#ff9d1a] text-3xl my-4 uppercase ">sourdough bread</h3>
<p className="my-4 w-[250px] mx-auto">
  Dưới bức tranh mặt trời lặn, làn sóng nhẹ nhàng của biển cất lên những âm thanh êm dịu, như là nhịp tim của thiên nhiên. Cảm giác hương biển mặn hòa quyện với gió nhẹ, làm cho không khí trở nên tinh tế và dễ chịu. 
  </p>
  <button className="uppercase text-[#ff9d1a] border-solid border-2 border-rose-600">Read more</button>

</div>
</div>
<div className="border-b-2 divide-gray-400 py-5 mx-auto w-[400px]"></div>


<div className="flex flex-col items-center">

<h2 className="uppercase text-3xl text-center text-[#ff9d1a]">DZUx bakery</h2>
  <p className="my-4 w-[250px] mx-auto">
  Dưới bức tranh mặt trời lặn, làn sóng nhẹ nhàng của biển cất lên những âm thanh êm dịu, như là nhịp tim của thiên nhiên. Cảm giác hương biển mặn hòa quyện với gió nhẹ, làm cho không khí trở nên tinh tế và dễ chịu. 
  </p>
  <button className="uppercase text-[#ff9d1a] border-solid border-2 border-rose-600">Read more</button>

</div>
<div className="border-b-2 divide-gray-400 py-5 mx-auto w-[400px]"></div>

<div className="flex flex-row-reverse  gap-12  my-5 ">
<img width={"500px"} src="https://static2-images.vnncdn.net/files/publish/2022/11/8/com-ngon13-193.jpeg?width=400"/>
<div className="">
<h3 className="text-[#ff9d1a] text-3xl my-4 uppercase">sourdough bread</h3>
<p className="my-4 w-[250px] mx-auto">
Dưới bức tranh mặt trời lặn, làn sóng nhẹ nhàng của biển cất lên những âm thanh êm dịu, như là nhịp tim của thiên nhiên. Cảm giác hương biển mặn hòa quyện với gió nhẹ, làm cho không khí trở nên tinh tế và dễ chịu. 
</p>
<button className="uppercase text-[#ff9d1a] border-solid border-2 border-rose-600">Read more</button>

</div>
</div>
<div className="border-b-2 divide-gray-400 py-5 mx-auto w-[400px]"></div>

<div className="flex  gap-12  my-5  ">
<img width={"500px"} src="https://static2-images.vnncdn.net/files/publish/2022/11/8/com-ngon13-193.jpeg?width=400"/>
<div className="">
<h3 className="text-[#ff9d1a] text-3xl my-4 uppercase">sourdough bread</h3>
<p className="my-4 w-[250px] mx-auto">
Dưới bức tranh mặt trời lặn, làn sóng nhẹ nhàng của biển cất lên những âm thanh êm dịu, như là nhịp tim của thiên nhiên. Cảm giác hương biển mặn hòa quyện với gió nhẹ, làm cho không khí trở nên tinh tế và dễ chịu. 
</p>
<button className="uppercase text-[#ff9d1a] border-solid border-2 border-rose-600">Read more</button>

</div>
</div>
<div className="border-b-2 divide-gray-400 py-5 my-3 mx-auto w-[400px]"></div>
<div >
<img src="https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-79-1671587874967986330061.jpg"/>
</div>
      </main>
      <footer>
        <div className="flex mx-auto justify-center gap-32 bg-black-bg text-white py-2">
            <div className="flex gap-5 flex-col items-center">
                <h3>ADDRESS</h3>
                <p>796 Su van hanh Q.10TPHCM</p>
                <p>796 Su van hanh Q.10TPHCM</p>
                <p>796 Su van hanh Q.10TPHCM</p>
            </div>
            <div className="flex gap-5 flex-col items-center">
                <h3>CONTACT TO</h3>
                <p>+01654646546</p>
                <p>796 Su van hanh Q.10TPHCM</p>

              <div> <span>ins</span> <span>ins</span> <span>ins</span>  </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default BlogPage;
