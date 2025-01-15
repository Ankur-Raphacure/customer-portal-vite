export const healthCategories = {
  query: `{
      healthCategories {
        id
        name
        image
        packages {
          image
          service_code
          service_name
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
          tests{
          service_code
          service_name
          fasting
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
          visit_type
        }
        }
        tests {
          service_code
          service_name
          fasting
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
          visit_type
        }
      }
    }`,
};

export const labtestPackages = {
  query: `{
      
    }`,
};
export const constructHospitalListQuery = (obj) => {
  let queryString;
  let countqueryString;
  if (obj.searchText && obj.cityId) {
    queryString = ` vendors(type : "hospital", city : "${obj.cityId}", count: ${obj.count}, page: ${obj.page}, searchText: "${obj.searchText}", doctorFilterObject: ${obj.doctorFilterObject})`;
    countqueryString = `vendorCount (type : "hospital", city : "${obj.cityId}", searchText: "${obj.searchText}", doctorFilterObject: ${obj.doctorFilterObject})`;
  } else if (obj.searchText) {
    queryString = ` vendors(type : "hospital", count: ${obj.count}, page: ${obj.page}, searchText: "${obj.searchText}", doctorFilterObject: ${obj.doctorFilterObject})`;
    countqueryString = `vendorCount (type : "hospital", searchText: "${obj.searchText}", doctorFilterObject: ${obj.doctorFilterObject})`;
  } else if (obj.cityId) {
    queryString = ` vendors(type : "hospital", city : "${obj.cityId}", count: ${obj.count}, page: ${obj.page}, doctorFilterObject: ${obj.doctorFilterObject})`;
    countqueryString = `vendorCount (type : "hospital", city : "${obj.cityId}", doctorFilterObject: ${obj.doctorFilterObject})`;
  } else {
    queryString = ` vendors(type : "hospital", count: ${obj.count}, page: ${obj.page}, doctorFilterObject: ${obj.doctorFilterObject})`;
    countqueryString = `vendorCount (type : "hospital", doctorFilterObject: ${obj.doctorFilterObject})`;
  }
  const queryObj = {
    query: `{
           ${queryString}{
                id,
                name,
                city,
                zip,
                address,
                rating,
                image
            doctors {
              id
              gender
              name
              languages
              specialization
              medical_registration_body
              highest_education
              slot_start_time
              slot_end_time
              zip
              city
              gst
              registration_number
              registration_expiry_date
              work_experience_years
              rating
              consultation_cost
             }
            }
            ${countqueryString}
          }`,
  };
  return queryObj;
};

export const constructHospitalDoctorsListQuery = (obj) => {
  let queryString;
  let countqueryString;
  if (obj.searchText && obj.specialization) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject}, specialization: "${obj.specialization}", searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject}, specialization: "${obj.specialization}", searchText: "${obj.searchText}"))`;
  } else if (obj.searchText) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject}, searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject}, searchText: "${obj.searchText}")`;
  } else if (obj.specialization) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject}, specialization: "${obj.specialization}")`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject}, specialization: "${obj.specialization}")`;
  } else {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject})`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, doctorFilterObject: ${obj.doctorFilterObject})`;
  }
  const queryObj = {
    query: `{
        ${queryString} {
          id
          type
          name
          languages
          specialization
          medical_registration_body
          highest_education
          zip
          city
          gst
          registration_number
          registration_expiry_date
          work_experience_years
          rating
          virtual_consultation_cost
          chat_consultation_cost
          call_consultation_cost
          consultation_cost
          gender
          image
          slot_start_time
          slot_end_time
          available_in_90
        }
        ${countqueryString}
      }`,
  };
  return queryObj;
};

export const constructDoctorsListQuery = (obj) => {
  let queryString;
  let countqueryString;
  if (obj.searchText && obj.doctorFilterObject) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, virtual: true, doctorFilterObject: ${obj.doctorFilterObject}, searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (virtual: true, doctorFilterObject: ${obj.doctorFilterObject}, searchText: "${obj.searchText}")`;
  } else if (obj.searchText) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, virtual: true, searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (virtual: true, searchText: "${obj.searchText}")`;
  } else if (obj.doctorFilterObject) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, virtual: true, doctorFilterObject: ${obj.doctorFilterObject})`;
    countqueryString = `doctorCount (virtual: true, doctorFilterObject: ${obj.doctorFilterObject})`;
  } else {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, virtual: true)`;
    countqueryString = `doctorCount (virtual: true)`;
  }
  const queryObj = {
    query: `{
        ${queryString} {
          id
          type
          name
          languages
          specialization
          medical_registration_body
          highest_education
          zip
          city
          gst
          registration_number
          registration_expiry_date
          work_experience_years
          rating
          virtual_consultation_cost
          chat_consultation_cost
          call_consultation_cost
          consultation_cost
          gender
          image
          slot_start_time
          slot_end_time
          available_in_90
          bio
        }
        ${countqueryString}
      }`,
  };
  return queryObj;
};

export const constructgetInHouseDoctorsQuery = (doctorId) => {
  const queryObj = {
    query: `{
  doctors(type: "inhouse") {
    id
    type
    name
    languages
    specialization
    medical_registration_body
    highest_education
    zip
    city
    gst
    registration_number
    registration_expiry_date
    work_experience_years
    rating
    virtual_consultation_cost
    chat_consultation_cost
    call_consultation_cost
    consultation_cost
    gender
    image
    slot_start_time
    slot_end_time
    available_in_90
    bio
  }
}`,
  };
  return queryObj;
};
export const constructDoctorHospitalListQuery = (doctorId) => {
  const queryObj = {
    query: `{
      doctorById(id: "${doctorId}"){
        id
        vendors {
          id,
          name,
          image,
          address,
          city,
          type,
          consultation_cost
        }
      }
    }`,
  };
  return queryObj;
};

export const constructHospitalDetailsQuery = (hospitalId) => {
  const queryObj = {
    query: `{
          vendorById( id: ${hospitalId}){
              id,
              name,
              city,
              zip,
              address,
              rating,
              image,
              slot_start_time
              slot_end_time,
          doctors {
            id
            name
            gender
            languages
            specialization
            medical_registration_body
            highest_education
            zip
            city
            gst
            image
            registration_number
            registration_expiry_date
            work_experience_years
            rating
            slot_start_time
            slot_end_time,
            consultation_cost
            virtual_consultation_cost
            call_consultation_cost
           }
          }   
        }`,
  };
  return queryObj;
};
export const SimilarMedicinesQuery = (medicineId) => {
  const queryObj = {
    query: `{
         medicineById(service_code: "${medicineId}") {
    
     service_code,
  service_name,
  price{
    actual_cost
    discounted_price
    discount_percentage
  }
  image
  category_key
  unit
  product_highlights
  information
  safety_instruction
  counter_type
  type
  description
  how_to_use
  substitutes{
     service_code,
  service_name,
  price{
    actual_cost
    discounted_price
    discount_percentage
  }
  image
  category_key
  unit
  type
  description
  how_to_use
  }
          vendor_ids
        salt_key
        category_ids
        subcategory_ids
        inventory
company
  }
        }`,
  };
  return queryObj;
};
export const pharmacyCategories = {
  query: `
    {
        medicineCategories {
          key
          name
          bio
          detail
          image
          medicines {
            service_code
            service_name
            type
            unit
            company
            description
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image
            category_key
          }
        }
      }
        `,
};

export const medicinesQuery = (
  searchText,
  category,
  count = 50,
  page = 0,
  selectedRecomonded,
  discStart,
  discEnd,
  startPrice,
  endPrice
) => {
  const queryObj = {
    query: `
        {
          medicines (searchText:"${searchText}", category: "${category}",sort:"${selectedRecomonded || ""
      }",discountStart:${discStart || null},discountEnd:${discEnd || null
      }, startPrice: ${startPrice ? startPrice : null}, endPrice: ${endPrice ? endPrice : null
      }, page: 0){
              service_code,
              search_keys,
              service_name,
              image,
              category_key,
              type,
              unit,
              company,
              description,
              price {
                        actual_cost,
                        discount_percentage,
                        discounted_price
                      }
          }
          medicineCount (searchText:"${searchText}", category: "${category}")
    }`,
  };
  return queryObj;
};

export const userDependentsQuery = {
  query: `{
      me {
          id,
          first_name,
          last_name,
          email,
          phone,
          gender,
          head_id,
          relation,
          dob
          age
          image
          client{
            id,
            name,
            type,
            logo_url
            dependent_per_user
          },
      dependents {
          id,
          first_name,
          last_name,
          email,
          phone,
          gender,
          relation,
          dob,
          age,
          head_id,
          image,
        }
      }
    }`,
};
export const myAddressQuery = {
  query: `{
  addresses {
    id
    name
    address
    landmark
    isDefault
    detail
    city
    latitude
    longitude
    state
    zip
  }
    }`,
};
export const CreateTrackerDetailQuery = {
  query: `{
  personaldetail{
    dob
    last_period_date
    average_period_cycle
  }
}`,
};
export const constructBookingQuery = (count) => {
  const queryObj = {
    query: `{
      bookings (role: "retail" , count : ${count}, page: 0){
        id
        collection_1_date
        collection_1_slot
        collection_2_date
        collection_2_slot
        show_virtual_call
        virtual_type
        status
        type
        created_at
        final_amount
        vendor{
          id
          name
          address
          city
          zip
          type
          image
        }
        address{
          id
          name
          address
          city
          zip
        }
        package {
          service_code,
          service_name,
          price {
            actual_cost,
            discount_percentage
          }
        }
        test {
          service_code,
          service_name,
          type
          price {
            actual_cost,
            discount_percentage
          }
        }
        user{
          id,
          first_name,
          last_name,
          gender,
          image
        }
        doctor{
          id,
          name,
          specialization,
          image
        }
        medicines{
          count
          image
          service_code
          service_name
        }
        logs{
          id
          collection_1_date
          collection_1_slot
          status
          changed_by
          created_at
          vendor_id
        }
        attachments{
          id,
          ext,
          url
        }
      }
    }`,
  };
  return queryObj;
};

export const constructAllScansQuery = {
  query: `{
    tests(page: 0, count: 30, type: "ctmri"){
      service_code,
      service_name,
      fasting,
      type
      image
      price {
        actual_cost
        discount_percentage
        discounted_price
      },
      vendors {
        id
        name
        address
        city
        zip
        type
      }
      visit_type
    },
}`,
};

export const constructAllScansCityQuery = (body) => {
  const queryObj = {
    query: `{
    tests(page: 0, count: 30, type: "ctmri",city: "${body?.city || ""}"){
      service_code,
      service_name,
      fasting,
      type
      image
      price {
        actual_cost
        discount_percentage
        discounted_price
      },
      vendors {
        id
        name
        address
        city
        zip
        type
      }
      visit_type
    },
}`,
  };
  return queryObj;
};

export const constructAllCtMriCategoryQuery = {
  query: `{
    ctmriCategories {
      id
      name
      image
      tests {
        service_code
        service_name
        fasting
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        }
        visit_type
        vendors {
          id
          name
          address
          city
          zip
          type
        }
      }
    }
  }`,
};
export const constructgetCtMriByCategoryQuery = (categoryId) => {
  const queryObj = {
    query: `{
    ctmriCategoryById(id: ${categoryId}) {
      id
      name
      image
      tests {
        service_code
        service_name
        fasting
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        }
        visit_type
        vendors {
          id
          name
          address
          city
          zip
          type
        }
      }
    }
  }`,
  };
  return queryObj;
};

export const constructgetCtmriDetailsQuery = (body) => {
  // , city: "${city}"
  const queryObj = {
    query: `{
      test(service_code: "${body?.service_code}", city: "${body?.city || ""
      }", sort: "${body?.sort || "discount"}") {
        service_code,
        service_name,
        description,
        preperation,
        category_ids,
        type,
        price{
          actual_cost,
          discount_percentage,
          discounted_price
        },
        fasting,
        visit_type,
        image,
        vendors{
          id,
          name,
          city,
          state,
          address,
          image,
          buying_price,
          selling_price,
          mor_start_Time,
          mor_end_Time,
          mor_buying_price,
          mor_selling_price,
          mor_female_available,
          mor_male_available,
          aft_start_Time,
          aft_end_Time,
          aft_buying_price,
          aft_selling_price,
          aft_female_available,
          aft_male_available,
          eve_start_Time,
          eve_end_Time,
          eve_buying_price,
          eve_selling_price,
          eve_female_available,
          eve_male_available,
           price{
            actual_cost,
            discount_percentage,
            discounted_price,
          },
        }
      }
    }`,
  };
  return queryObj;
};

export const getBookingIdDetails = (bookingId) => {
  const queryObj = {
    query: `
    {bookingById(id:"${bookingId}"){
      id,
      collection_1_date,
      collection_1_slot,
      collection_2_date,
      collection_2_slot,
      notes,
      status,
        user{
        id,
        first_name,
        last_name,
        phone,
        email,
        parent{
          id,
          first_name,
          last_name,
          phone,
          email
        }
      }
      vendor{
        id,
        name,
        address
      }
        address{
        id,
        address,
        name,
        landmark,
        city,
        state,
        zip,
        latitude,
        longitude
      }
      to_address {
        id,
        address,
        name,
        city,
        state
      },
      package{
        service_code,
        service_name,
        preperation,
        description,
        image,
        visit_type
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      },
      test{
        service_code,
        service_name,
        preperation,
        description,
        image,
        visit_type
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      },
      tests{
        service_code,
        service_name,
        preperation,
        description,
        image,
        visit_type
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      }
      doctor{
        id,
        name,
        specialization,
          image,
        languages
      },
      type,
      final_amount,
      medicines{
        service_code,
        service_name,
        description,
        image,
        count
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      },
      created_at
    }}
  `,
  };
  return queryObj;
};

export const constructVendorDetailsQuery = (vendorId) => {
  const queryObj = {
    query: `{
          vendorById ( id: ${vendorId}){
            id
            name
            city
            zip
            address
            rating
            image
            slot_start_time
            slot_end_time
          }
        }`,
  };
  return queryObj;
};

export const constructVendorPackageListQuery = (obj) => {
  let queryString;
  if (obj.searchText) {
    queryString = `packages (is_corporate:false, vendorId: ${obj.vendorId}, searchText: "${obj.searchText}")`;
  } else {
    queryString = `packages (is_corporate:false, vendorId: ${obj.vendorId})`;
  }
  const queryObj = {
    query: `{
          ${queryString} {
            service_code,
            service_name,
            preperation,
            description,
            type,
            image,
            visit_type,
            price{
              discounted_price,
              discount_percentage,
              actual_cost
            },
            sort,
            tests {
              service_code,
              service_name,
              preperation,
              fasting,
              description,
              image,
              visit_type
              price{
                discounted_price,
                discount_percentage,
                actual_cost
              }
            }
          }
        }`,
  };
  return queryObj;
};

export const constructVendorTestListQuery = (obj) => {
  let queryString;
  if (obj.searchText) {
    queryString = `tests (vendorId: ${obj.vendorId}, searchText: "${obj.searchText}")`;
  } else {
    queryString = `tests (vendorId: ${obj.vendorId})`;
  }
  const queryObj = {
    query: `{
          ${queryString} {
            service_code,
            service_name,
            preperation,
            description,
            image,
            visit_type,
            price{
              discounted_price,
              discount_percentage,
              actual_cost
            }
          }
        }`,
  };
  return queryObj;
};

export const getMyPackageDetailsQuery = () => {
  const queryObj = {
    query: `
    {
      packages (is_corporate:true) {
        service_code,
        service_name,
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        },
        sort,
        image,
        tests {
          service_code,
          service_name,
          fasting,
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          },
          visit_type
        },
        vendors {
          id,
          name,
          address,
          city,
          zip,
          type
        }
      }
    
    }
  `,
  };
  return queryObj;
};

export const getEyeCategoriesQuery = (body) => {
  const queryObj = {
    query: `
    {
      tests(type : "${body.type}", city: "${body.city ?? ""}") {
            service_code,
            service_name,
            fasting,
            type
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image,
            visit_type
        }
      }
  `,
  };
  return queryObj;
};

export const getAyurvedsServiceQuery = {
  query: `
    {
        medicineCategories {
          key
          name
          bio
          detail
          image
          medicines {
            service_code
            service_name
            type
            unit
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image
            category_key
          }
        }
      }
        `,
};

export const getAyurvedsCenterQuery = (body) => {
  const queryObj = {
    query: `{
    vendors(page: 0, count: 30, type: "ayurveda", city: "${body?.city || ""}"){
      id
      name
      city
      zip
      address
      rating
      image
      type

    },
}`,
  };
  return queryObj;
};

export const eyecareNearClinicQuery = (body) => {
  const queryObj = {
    query: `{
    vendors(page: 0, count: 100, type: "eye_care", city: "${body?.city || ""}"){
      id
      name
      city
      zip
      address
      rating
      image
      type
      address
    },
}`,
  };
  return queryObj;
};

export const dentalcareNearClinicQuery = (body) => {
  const queryObj = {
    query: `{
    vendors(page: 0, count: 100, type: "dental_care", city: "${body?.city || ""
      }"){
      id
      name
      city
      zip
      address
      rating
      image
      type
      address
    },
}`,
  };
  return queryObj;
};

export const getAyurvedsPanchakarmaQuery = (body) => {
  const queryObj = {
    query: `{
    vendors(page: 0, count: 100, type: "panchakarma", city: "${body?.city || ""
      }"){
      id
      name
      city
      zip
      address
      rating
      image
      type

    },
}`,
  };
  return queryObj;
};

export const getAyurvedsNaturopathyQuery = (body) => {
  const queryObj = {
    query: `{
    vendors(page: 0, count: 30, type: "naturopathy", city: "${body?.city || ""
      }"){
      id
      name
      city
      zip
      address
      rating
      image
      type

    },
}`,
  };
  return queryObj;
};

export const getWomensPackagesQuery = {
  query: `{
      packages (type: "diagnostic",for:"female") {
        service_code,
        service_name,
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        },
        sort,
        image,
        tests {
          service_code,
          service_name,
          fasting,
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          },
          visit_type
        },
        vendors {
          id,
          name,
          address,
          city,
          zip,
          type
        }
      }
    }`,
};

export const getVaccinationsQuery = (body) => {
  const queryObj = {
    query: `{
    tests(page: 0, count: 30, type: "vaccination",for:"female",, city: "${body?.city || ""
      }"){
      service_code,
              service_name,
              fasting,
              type
              price {
                actual_cost
                discount_percentage
                discounted_price
              },
              visit_type
    },
}`,
  };
  return queryObj;
};
export const getDomiciliaryVaccinationsQuery = (body) => {
  const queryObj = {
    query: `{
    tests(page: 0, count: 30, type: "vaccination", city: "${body?.city || ""}"){
      image,
      service_code,
    service_name,
    description,
    price {
      actual_cost
      discount_for_dependents
      discount_percentage
      discounted_price
      service_charges
    }
    },
}`,
  };
  return queryObj;
};
export const getAllEyewearGlassessQuery = (body) => {
  const queryObj = {
    query: `
    {
        eyewear(color: ["black","maroon"], age_group: "8-12 yrs",frame_type:["full_rim","rimless"]) {
        age_group
        category_name
        color
        frame_features
        frame_shape
        frame_type
        id
        price
        brand
        image_url
        size
      }
    }
    `,
  };
  return queryObj;
};

export const getDomiciliaryCareQuery = (body) => {
  const queryObj = {
    query: `{
    tests(page: 0, count: 30, type: "dc"){
      service_code,
      service_name,
      description,
      fasting,
      type
      image
      price {
        actual_cost
        discount_percentage
        discounted_price
      },
      visit_type
    },
}`,
  };
  return queryObj;
};

export const getAyurvedsDiseaseQuery = (body) => {
  const queryObj = {
    query: `{
    tests(page: 0, count: 30, type: "ayurveda",city: "${body?.city || ""}"){
      service_code,
      service_name,
      fasting,
      type
      image
      price {
        actual_cost
        discount_percentage
        discounted_price
      },
      vendors {
        id
        name
        address
        city
        zip
        type
      }
      visit_type
    },
}`,
  };
  return queryObj;
};

export const getDomiciliaryNurseQuery = (body) => {
  const queryObj = {
    query: `{
    nurses(page: 0, count: 30,){
     id
    first_name
    languages_known
    consultation_fee
    specialization
    years_of_experience
    },
}`,
  };
  return queryObj;
};
export const getDomiciliaryEquipmentsQuery = (body) => {
  const queryObj = {
    query: `{
    equipment (page: 0, count: 30,){
     id
    name
    description
    price_per_day
    },
}`,
  };
  return queryObj;
};
export const getgetAllFitnessQuery = (body) => {
  const queryObj = {
    query: `{
   
  vendors(type: "${body?.type || ""}", city: "${body?.city || "newdelhi"}") {
    id
    name
    zip
    address
    image
    city
    type
    state
    facilities
    services
    rating
    tests {
      service_code
      service_name
      description
      preperation
      visit_type
      image
      price {
        actual_cost
        discounted_price
        discount_percentage
      }
      price {
        actual_cost
        discounted_price
        discount_percentage
      }
    }
  }

}`,
  };
  return queryObj;
};

export const getEyeHospitalsQuery = (body) => {
  const queryObj = {
    query: `{
          vendors(type : "${body.type}" , city : "${body.city}"){
              id,
              name,
              city,
              zip,
              address
          }   
        }`,
  };
  return queryObj;
};

export const getGymCategoriesQuery = (body) => {
  const queryObj = {
    query: `
      {vendors(type:"${body?.type}",city:"${body?.city ?? ""}"){
        id,
        name,
        zip,
        address,
        image,
        city,
        type,
        state,
        tests{
          service_code,
          service_name,
          description,
          preperation,
          visit_type,
          image,
          price{
            actual_cost,
            discounted_price,
            discount_percentage
          }
        }
      }}
`,
  };
  return queryObj;
};
export const getGymVendorsQuery = (body) => {
  const queryObj = {
    query: `{
      tests(type : "${body?.type}", city: "${body?.city ?? ""}") {
            service_code,
            service_name,
            fasting,
            type
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image,
            visit_type,
            vendors {
              id,
              name,
              address,
              city,
              zip,
              type
            }
        }
      }`,
  };
  return queryObj;
};

export const constructgetPackageDetailsQuery = (body) => {
  const queryObj = {
    query: `{
      package(service_code:"${body?.service_code}", city:"${body?.city ?? ""
      }", collection_type: "${body?.collection_type || "center"}"
    ,  sort: "${body?.sort || "discount"}"){
        service_code
        service_name
        image
        description
        preperation
        category_ids
        fasting
        type
        price {
          actual_cost
          discount_percentage
          service_charges
          discounted_price
        }
        sort
        tests {
          service_code
          service_name
          image
          description
          preperation
          fasting
          price {
            actual_cost
            discount_percentage
            service_charges
            discounted_price
          }
          visit_type
        }
        vendors {
          available_in_90
          id
          name
          address
          city
          zip
          type
          image
          price {
        actual_cost
        discount_percentage
        discounted_price
        service_charges
      }
        }
      }
    }`,
  };
  return queryObj;
};

export const getBloodBankVendors = (city) => {
  const queryObj = {
    query: `{
      vendors(type : "blood_bank", city: "${city}"){
          id,
          name,
          city,
          zip,
          address
      }
    }`,
  };
  return queryObj;
};

export const fetchBloodTests = {
  query: `{
        bloodTests {
          id
          group
          component
          test {
            service_code
            service_name
            type
          }
        }
      }`,
};

export const getNearByLabTest = (body) => {
  const queryObj = {
    query: `{
  vendors(
    type: "diagnostic_center"
    count: ${body?.count}
    page: 0,
    city:"${body?.city}"
  ) {
    id
    name
    city
    zip
    address
    rating
    image

  }
  vendorCount(type: "diagnostic_center", city: "${body?.city}")
}`,
  };
  return queryObj;
};

export const constructgetAllScansNearByQuery = (body) => {
  const queryObj = {
    query: `{
  vendors(
    type: "ctmri"
    count: ${body?.count}
    page: 0,
    city:"${body?.city}"
  ) {
    id
    name
    city
    zip
    address
    rating
    image
   

  }
  vendorCount(type: "ctmri", city: "${body?.city}")
}`,
  };
  return queryObj;
};

export const getAllVendorDetailsQuery = {
  query: `{
    vendors {
      id
      name
      tests {
        service_code
        service_name
      }
      packages {
        service_name
        service_code
      }
    }
  }`,
};