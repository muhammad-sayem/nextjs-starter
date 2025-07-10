import React from 'react';

const ServiceDetailsPage = ({ params }) => {
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

  const id = params.id;
  console.log("This is params", params);

  const singleService = services.find((service) => service._id === id);
  if (singleService) {
    return (
      <div className='my-16'>
        <h2 className='text-3xl font-bold text-blue-500 text-center mb-4'> Service Details page </h2>
        <div className='flex justify-between items-center'>
          <div>
            <img src={singleService.service_image} alt="" />
          </div>

          <div>
            <p> ID: {id} </p>
            <p className='text-2xl text-red-500 font-bold'> Service Name: {singleService.service_name} </p>
            <p> {singleService.service_description} </p>
          </div>
        </div>
      </div>
    );
  }
  else{
    return <p> Nothing found in this route </p>
  }

};

export default ServiceDetailsPage;