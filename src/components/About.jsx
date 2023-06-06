const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="flex flex-col items-center text-center w-full">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Jagjeet Singh
              </h2>
              <p className="mb-4 text-center">Full Stack Web Developer</p>
              <div className="flex justify-center">
                <div className="h-1 w-72 mb-4 mx-auto sm:mx-0 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500" />
              </div>
              <p className="mb-8 text-center max-w-[480px]">
                At present, I have completed my 4th semester and have gathered quite experience in the field of web development and have made quite a handful of projects, be it a website design or a full-stack web application. 
                <br />
                In my free-time, you can find me solving some DSA problems on Leetcode, or learning new technolgies for the web, such as while making the this portfolio, I am learing to work with Three.JS and Framer Motion libraries. You can visit my GitHub to have a look at my projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
