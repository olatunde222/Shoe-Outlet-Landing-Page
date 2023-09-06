import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold capitalize">
        sign up from <span> updates</span> & newsletter
      </h3>
      <div className="lg:max-w-[40px] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full min-w-fit">
        <input type="text" placeholder="subscribe here..." className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
