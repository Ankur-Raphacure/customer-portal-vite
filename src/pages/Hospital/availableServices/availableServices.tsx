import { AvailableServicesstyled } from "./availableServices.styled";

const AvailableServices = () => {
  const initilaServices = [
    'Cardiac Sciences',
    'Generic Medicine',
    'Oncology',
    'Neurology',
    'Liver transplant & Hepatobiliary',
    'Medical Genetics',
    'Pain & Palliative Medicine',
    'Palliative Medicine',
    'Dental Science',
    'Dermatology',
    'Diabetology',
    'Emergency & Trauma',
    'ENT',
    'General Surgery',
    'Haematology',
    'Orthopedics',
    'Pediatrics'
  ];

  return (
    <AvailableServicesstyled>
      <div className="availableservices_container round-shadow">
        <div className="availableservices_data">
          <div className="availableservices_title poppins-medium">Available Services</div>
          <div className="availableservices_item">
            {
              initilaServices?.map((service:string) => {
                return (
                  <div className="availableservices_link" v-for="service in availableServices">
                    <a className="availableservices_text poppins-regular" href="#service" title={service}>{ service }</a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </AvailableServicesstyled>
  );
};

export default AvailableServices;
