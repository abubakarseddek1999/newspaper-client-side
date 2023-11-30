

const Faq = () => {
    return (
        <div className="  ">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center py-5"><span className="text-blue-500">F</span>requently <span className="text-blue-500">A</span>sked <span className="text-blue-500">Q</span>uestions </p>

            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* about the social event  */}

                <img className=" w-[50%]" src="https://i.postimg.cc/SRKpQDZ1/FAQs-rafiki.png" alt="faq image" />



                <div className=" my-5">

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How can I subscribe to the newspaper?
                           
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">To subscribe to our newspaper, visit the Subscribe page on our website or contact our customer support.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                         Is there a digital version available?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">Yes, we offer a digital version of our newspaper. You can access it online through our website or mobile app.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        How can I submit a news tip?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">If you have a news tip or story suggestion, you can submit it through our Contact Us page. Our editorial team will review and consider it for publication.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Faq;