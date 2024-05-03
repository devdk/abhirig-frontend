import backImg1 from "../assets/vid.png"

const Video = () => {
  const sectionStyle = {
    backgroundImage: `url(${backImg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="text-white mt-10 body-font relative" style={sectionStyle}>
      <video className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default Video