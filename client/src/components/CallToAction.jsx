import { Button } from "flowbite-react";

export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2 className="text-2xl"> Want to learn more about React?</h2>
                <p className="text-gray-500 my-2">Checkout these projects in my Github!</p>
                <Button
                    gradientDuoTone="purpleToPink"
                    className="rounded-tl-xl rounded-bl-none"
                >
                    <a
                        href="https://github.com/Breanzy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img
                    src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
                    alt=""
                />
            </div>
        </div>
    );
}
