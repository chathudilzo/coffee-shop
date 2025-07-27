import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        className="text items-center flex flex-col md:flex-row px-6 md:px-10 lg:px-20 py-12 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/coffee_image.svg')" }}
      >
        <div className="[font-family:var(--font-playfair)] w-full md:w-1/2 flex-col">
          <p className="">We've got your morning covered with</p>
          <h1 className="my-5 [font-family:var(--font-clicker)] text-9xl">
            Coffee
          </h1>
          <p className="[font-family:var(--font-playfair)]">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className="[font-family:var(--font-playfair)] mt-5 bg-primary text-black text-sm p-2 rounded-3xl ">
            Order Now
          </button>
        </div>

        <div></div>
      </section>
      <section className="relative [font-family:var(--font-playfair)] flex flex-col md:flex-row px-6 md:px-10 lg:px-20 py-12 w-full  bg-white justify-between items-center">
        <div className="md:w-1/2 flex-col">
          <h2 className="mb-5 text-title text-3xl font-bold">
            Discover the best cofee
          </h2>
          <p className="text-black [font-family:var(--font-playfair)]">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <button className="rounded-3xl bg-primary p-2 text-sm mt-5 text-black [font-family:var(--font-playfair)]">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/Mask group.svg"}
            alt="coffee cup"
            width={400}
            height={400}
          />
        </div>

        <div className="absolute bottom-0 left-0 ">
          <Image
            src={"/images/coffee_blast.svg"}
            alt="wave"
            width={300}
            height={300}
          />
        </div>
      </section>

      <section className="relative [font-family:var(--font-playfair)] px-6 md:px-10 lg:px-20 py-12 w-full bg-white justify-center items-center">
        <h2 className="font-bold text-center text-title text-3xl mb-2">
          Enjoy new blend of cofee style
        </h2>

        <p className="text-gray-600 text-center">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Cappuccino",
              ratio: "Coffee 50% | Milk 50%",
              price: "Rs:250",
              image: "/images/cups/Rectangle 7.svg",
            },
            {
              name: "Latte",
              ratio: "Coffee 30% | Milk 70%",
              price: "Rs:280",
              image: "/images/cups/Rectangle 9.svg",
            },
            {
              name: "Americano",
              ratio: "Coffee 100%",
              price: "Rs:200",
              image: "/images/cups/Rectangle 11.svg",
            },
            {
              name: "Mocha",
              ratio: "Coffee 60% | Chocolate 40%",
              price: "Rs:300",
              image: "/images/cups/Rectangle 13.svg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg overflow-visible"
            >
              <div className="w-32 h-32 relative mb-3">
                <Image fill alt="cup" src={item.image} />
              </div>
              <h4 className="text-title font-semibold text-1xl">{item.name}</h4>
              <p className="text-gray-600 text-xs">{item.ratio}</p>
              <p className="text-title font-semibold">{item.price}</p>

              <div className=" absolute bottom-0 bg-primary text-black rounded-3xl p-2 text-xs font-semibold translate-y-1/2 shadow-lg hover:scale-105 transition">
                Order Now
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </section>

      <section className="relative [font-family:var(--font-playfair)] w-full px-6 md:px-10 lg:px-20 py-12 bg-white justify-center items-center">
        <div className="absolute top-0 right-0">
          <Image
            src="/images/coffee_blast(1).svg"
            alt="wave"
            width={300}
            height={300}
          />
        </div>
        <h2 className="text-center text-3xl text-title font-bold">
          Why are we different?
        </h2>
        <p className="text-gray-600 text-center mt-2">
          We don't make your cofee,we make your day!
        </p>

        <div className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Supreme Beans",
              image: "/images/icons/coffee-beans 1.svg",
              desc: "Beans that provides great taste",
            },
            {
              title: "High Quality",
              image: "/images/icons/badge 1.svg",
              desc: "We provide the highest quality",
            },
            {
              title: "Extraordinary",
              image: "/images/icons/coffee-cup 1.svg",
              desc: "Coffee like you have never tasted",
            },
            {
              title: "Affordable Price",
              image: "/images/icons/best-price 1.svg",
              desc: "Our Coffee prices are easy to afford",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 bg-yellow-200 shadow-md hover:bg-yellow-100 transition"
            >
              <div className="w-20 h-20 relative mb-3 items-center justify-center">
                <Image alt="icon" src={item.image} fill />
              </div>
              <h3 className="text-center text-title font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-center text sm">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <h4 className="text-center mb-5 text-2xl text-title font-semibold">
          Get started today!
        </h4>

        <button className="mx-auto block rounded-3xl py-1 px-3 bg-primary text-title text-sm font-semibold">
          Join Us
        </button>
      </section>
      <section
        style={{ backgroundImage: "url('/images/Rectangle 14.svg')" }}
        className="relative [font-family:var(--font-playfair)] w-full pt-12 pb-20 px-6 md:px-10 lg:px-20 bg-white items-center flex flex-col md:flex-row justify-between "
      >
        <div className="absolute inset-0 bg-primary/30 z-0"></div>
        <div className="relative z-10 max-w-xl text-center md-text-left flex flex-col ">
          <h2 className="  text-3xl text-white font-bold ">
            Get a chance to have an Amazing morning
          </h2>
          <p className=" mt-2 text-white">
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>

          <button className="mt-10 mx-auto max-w-[200] inline-block rounded-2xl px-3 py-2 text-black text-sm bg-primary hover:bg-primary/80 transition">
            Order Now
          </button>
        </div>

        <div>
          <Image
            className="relative z-10"
            src="/images/cup.svg"
            alt="cup"
            width={300}
            height={500}
          />
        </div>
      </section>

      <section className="[font-family:var(--font-playfair)] relative px-6 md:px-10 lg:px-20 pt-12 pb-20 justify-center items-center bg-white">
        <h2 className="text-3xl text-title font-bold text-center">
          Our coffee perfection feedback
        </h2>
        <p className="text-black text-center">
          Our customers has amazing things to say about us
        </p>

        <div className="p-15 mt-5 relative bg-[#F9C06A] max-w-3xl mx-auto">
          <Image
            src="/images/ups.svg"
            alt="ups"
            width={50}
            height={50}
            className="absolote left-10 top-10"
          />

          <p className="text-gray-600 text-center text-sm my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset.....
          </p>
          <h3 className="text-title font-semibold text-2xl text-center">
            Chathura Dilshan
          </h3>
          <p className="text-center text-gray-600 text-sm">Coffee lover</p>

          <Image
            src="/images/profile.jpg"
            className="rounded-full mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white"
            alt="profile"
            width={80}
            height={80}
          />

          <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
            <ChevronLeft className="text-primary w-5 h-5" />
          </div>

          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
            <ChevronRight className="text-primary w-5 h-5" />
          </div>
        </div>

        <Image
          src="/images/coffee_blast(2).svg"
          className="absolute top-0 right-0"
          alt="wave"
          width={300}
          height={300}
        />
        <Image
          src="/images/coffee_blast(3).svg"
          alt="wave"
          className="absolute left-0 bottom-0"
          width={300}
          height={300}
        />
      </section>

      <section
        className=" relative [font-family:var(--font-playfair)] w-full py-12 px-6 md:px-10 lg-px-20"
        style={{ backgroundImage: "url('/images/Rectangle 14.svg')" }}
      >
        <div className="absolute inset-0 bg-primary/30 z-0"></div>

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h2 className=" text-center text-3xl text-white font-semibold">
            Subscribe to get the Latest News
          </h2>
          <p className=" text-center text-gray-200 text-sm">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
          <div className=" flex mx-auto items-center justify-center mt-10  ">
            <input
              placeholder="Enter Your Email"
              className="p-2 bg-white text-black text-sm"
            />

            <button className="text-title font-semibold text-sm p-2 bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className=" [font-family:var(--font-playfair)] relative w-full px-6 md:px-10 lg:px-20 pt-25 pb-12 bg-amber-950">
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h2 className="mb-4 [font-family:var(--font-clicker)] text-2xl">
              Dilso Plaza
            </h2>

            <p className="text-xs mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex gap-3 ">
              <Facebook className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">About</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Menu</li>
              <li>Features</li>
              <li>News & Blogs</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg  mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>How we work</li>
              <li>Terms of service</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Kalawana Road, Rathnapura, Sri Lanka</li>
              <li>0112-121212</li>
              <li>dilzoplaza@gmail.com</li>
              <li>www.dilzoplaza.com</li>
            </ul>
          </div>
        </div>
        <div className=" absolute inset-0 z-0 bottom-0">
          <Image
            className="object-cover opacity-10"
            src="/images/fotter_image.png"
            alt="footer"
            fill
          />
        </div>
      </section>
    </>
  );
}
