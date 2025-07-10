import Link from "next/link";


const Services = () => {
  const services = [
    {
      _id: "abcdef1",
      service_name: "Web Development",
      service_image: "/service 1.jpg",
      service_description: "Reserve quiet and comfortable study rooms in the college library."
    },
    {
      _id: "abcdef2",
      service_name: "App Development",
      service_image: "/service 2.avif",
      service_description: "Book the college football or cricket ground for team practices and events."
    },
    {
      _id: "abcdef3",
      service_name: "Graphics Design",
      service_image: "/service 3.avif",
      service_description: "Reserve the auditorium for cultural events, seminars, or presentations."
    },
    {
      _id: "abcdef4",
      service_name: "Digital Marketing",
      service_image: "/service 4.png",
      service_description: "Book computer lab time slots for project work or coding practice."
    },
    {
      _id: "abcdef5",
      service_name: "SEO",
      service_image: "/service 5.jpg",
      service_description: "Schedule time to use physics, chemistry, or biology labs for experiments."
    }
  ];

  return (
    <div>
      <p className='text-5xl text-blue-400 font-bold text-center'> All services </p>

      <div className="grid grid-cols-3 gap-4">
        {
          services.map(service => (
            <div key={service._id} className="border-2 border-red-500 p-4">
              <p> Service ID: {service._id} </p>
              <p> Service name: {service.service_name} </p>
              <img className="w-32 h-32 rounded-full mb-4" src={service.service_image} alt="" />
              <Link className="btn bg-gray-700 text-white p-2 rounded-md" href={`services/${service._id}`}> See Details </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;