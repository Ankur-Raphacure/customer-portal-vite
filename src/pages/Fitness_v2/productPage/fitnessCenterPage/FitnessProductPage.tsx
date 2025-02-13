import React, { useEffect, useState } from "react";
import {
  FitnessProductPageStyled,
  FitnessProductPageTrainersCardStyled,
} from "./FitnessProductPage.styled";
import ProductsDeck from "../../../../components/Gym/productsDeck/ProductsDeck";
import ProductCard from "../../../../components/Gym/productCard/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFitnessCentersAPI,
  getAllFitnessTrainersAPI,
  getFitnessCentersDataAPI,
} from "../../../../redux/slices/fitness/fitnessService";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import BookingCard from "./bookingSection/BookingSection";
import { RootState } from "../../../../redux/store";
import { distance } from "motion";
import BreadCrumbModule from "../../../Pharmacy/BreadCrumbModule";
import { toast } from "react-toastify";

const Trainers = ({ centerId }: any) => {
  const [trainers, setTrainers] = useState(null) as any;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTrainers = async () => {
      setIsLoading(true);
      const result = (await dispatch(
        getAllFitnessTrainersAPI({ fitnessCenter_id: centerId }),
      )) as any;
      setTrainers(result?.payload?.data?.trainers);
      setIsLoading(false);
    };
    if (centerId) {
      getTrainers();
    }
  }, [centerId, dispatch]);

  return (
    <FitnessProductPageTrainersCardStyled>
      {trainers?.length > 0 ? (
        <div className="trainers-container">
          <h2 className="section-title">Our Trainers</h2>
          <div className="trainers-scroll">
            {trainers?.map((trainer: any, index: any) => (
              <div className="trainer-card" key={index}>
                <div className="image-container trainer-img-bg">
                  <img
                    src={trainer?.image?.[1]}
                    alt={trainer?.name}
                    className="trainer-image"
                  />
                </div>
                <div className="trainer-text-content">
                  <h3 className="trainer-name">{trainer?.name}</h3>
                  <p className="trainer-role">Gym Trainer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </FitnessProductPageTrainersCardStyled>
  );
};
const Service = ({ serviceData }: any) => {
  console.log("ser", serviceData);
  return (
    <FitnessProductPageTrainersCardStyled>
      {serviceData?.length > 0 && (
        <div className="trainers-container">
          <h2 className="section-title">Services</h2>
          <div className="trainers-scroll">
            {serviceData?.length > 0 &&
              serviceData?.map((service: any, index: number) => (
                <div className="service-card" key={index}>
                  <div className="service-banner">
                    <img
                      src={service?.image}
                      alt={service?.section_name}
                      className="trainer-image"
                    />
                  </div>
                  <h3 className="trainer-name">{service?.name}</h3>
                </div>
              ))}
          </div>
        </div>
      )}
    </FitnessProductPageTrainersCardStyled>
  );
};

const FitnessProductPage = () => {
  const { productId } = useParams() as any;
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [SimilarFitnessCenters, setSimilarFitnessCenters] = useState([]) as any;
  const [SelectedFitnessCenter, setSelectedFitnessCenter] = useState(
    null,
  ) as any;

  const list = [
    {
      title: "Fitness",
      link: `/fitness_v2`,
    },
    {
      title: "Gyms",
      link: "/fitnessCenters",
    },
    {
      title: SelectedFitnessCenter?.name,
      link: `/fitnessCenters/${SelectedFitnessCenter?.name?.split?.(" ")?.join("-")}/${SelectedFitnessCenter?.id}`,
    },
  ];

  useEffect(() => {
    const getSimilar = async (category = []) => {
      const result = (await dispatch(
        getAllFitnessCentersAPI({
          page: 1,
          count: 10,
          category_ids: category,
          status: "active",
          role: "user",
          latitude: selectedCurrentAddress?.latitude,
          longitude: selectedCurrentAddress?.longitude,
        }),
      )) as any;
      setSimilarFitnessCenters(result?.payload?.data);
    };
    if (
      SelectedFitnessCenter?.category_ids &&
      Array.isArray(SelectedFitnessCenter?.category_ids)
    ) {
      getSimilar(SelectedFitnessCenter?.category_ids);
    }
  }, [SelectedFitnessCenter]);

  useEffect(() => {
    const getSelected = async () => {
      const result = (await dispatch(
        getFitnessCentersDataAPI({ id: productId }),
      )) as any;
      setSelectedFitnessCenter(result?.payload?.data);
      setSelectedPackage(result?.payload?.data?.packages?.[0]?.service_code);
    };
    getSelected();
  }, [productId]);

  console.log("selected", SelectedFitnessCenter);

  const [selectedPackage, setSelectedPackage] = useState("") as any;

  const similar = SimilarFitnessCenters?.fitnessCenters?.filter(
    (item: any) => String(item?.id) !== String(productId),
  );

  const { selectedCurrentAddress } = useSelector(
    (ReduxState: RootState) => ReduxState.profile,
  );

  return (
    <FitnessProductPageStyled>
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <BreadCrumbModule moduleName={"gym"} list={list} />
        </div>

        <div className="listing-container">
          {/* Left side - Image Gallery */}
          <div className="gallery-section">
            <div className="main-image-container-parent">
              {SelectedFitnessCenter?.isRapha ? (
                <div className="assured-badge">
                  <svg
                    style={{ transform: "scale(1.2)" }}
                    width="89"
                    height="35"
                    viewBox="0 0 89 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H73C81.8366 0 89 7.16344 89 16V35H14C6.26802 35 0 28.732 0 21V0Z"
                      fill="#F0DA69"
                    />
                    <path
                      d="M18.6562 9.436V8.296H20.7802C21.2042 8.296 21.5322 8.188 21.7642 7.972C22.0042 7.748 22.1242 7.44 22.1242 7.048C22.1242 6.696 22.0082 6.4 21.7762 6.16C21.5442 5.92 21.2162 5.8 20.7922 5.8H18.6562V4.6H20.8522C21.3802 4.6 21.8442 4.708 22.2442 4.924C22.6442 5.132 22.9522 5.42 23.1682 5.788C23.3922 6.148 23.5042 6.56 23.5042 7.024C23.5042 7.512 23.3922 7.936 23.1682 8.296C22.9522 8.656 22.6442 8.936 22.2442 9.136C21.8442 9.336 21.3802 9.436 20.8522 9.436H18.6562ZM17.7082 13V4.6H19.0882V13H17.7082ZM22.3162 13L19.3762 9.352L20.6602 8.884L24.0562 13H22.3162ZM27.3156 13.12C26.7956 13.12 26.3236 12.988 25.8996 12.724C25.4836 12.46 25.1516 12.104 24.9036 11.656C24.6636 11.2 24.5436 10.692 24.5436 10.132C24.5436 9.564 24.6636 9.056 24.9036 8.608C25.1516 8.152 25.4836 7.792 25.8996 7.528C26.3236 7.256 26.7956 7.12 27.3156 7.12C27.7556 7.12 28.1436 7.216 28.4796 7.408C28.8236 7.592 29.0956 7.848 29.2956 8.176C29.4956 8.504 29.5956 8.876 29.5956 9.292V10.948C29.5956 11.364 29.4956 11.736 29.2956 12.064C29.1036 12.392 28.8356 12.652 28.4916 12.844C28.1476 13.028 27.7556 13.12 27.3156 13.12ZM27.5316 11.872C28.0196 11.872 28.4116 11.708 28.7076 11.38C29.0116 11.052 29.1636 10.632 29.1636 10.12C29.1636 9.776 29.0956 9.472 28.9596 9.208C28.8236 8.944 28.6316 8.74 28.3836 8.596C28.1436 8.444 27.8596 8.368 27.5316 8.368C27.2116 8.368 26.9276 8.444 26.6796 8.596C26.4396 8.74 26.2476 8.944 26.1036 9.208C25.9676 9.472 25.8996 9.776 25.8996 10.12C25.8996 10.464 25.9676 10.768 26.1036 11.032C26.2476 11.296 26.4396 11.504 26.6796 11.656C26.9276 11.8 27.2116 11.872 27.5316 11.872ZM29.0796 13V11.452L29.3076 10.048L29.0796 8.656V7.24H30.3996V13H29.0796ZM35.1285 13.12C34.6885 13.12 34.2965 13.028 33.9525 12.844C33.6085 12.652 33.3365 12.392 33.1365 12.064C32.9445 11.736 32.8485 11.364 32.8485 10.948V9.292C32.8485 8.876 32.9485 8.504 33.1485 8.176C33.3485 7.848 33.6205 7.592 33.9645 7.408C34.3085 7.216 34.6965 7.12 35.1285 7.12C35.6485 7.12 36.1165 7.256 36.5325 7.528C36.9565 7.792 37.2885 8.152 37.5285 8.608C37.7765 9.056 37.9005 9.564 37.9005 10.132C37.9005 10.692 37.7765 11.2 37.5285 11.656C37.2885 12.104 36.9565 12.46 36.5325 12.724C36.1165 12.988 35.6485 13.12 35.1285 13.12ZM32.0445 15.4V7.24H33.3645V8.788L33.1365 10.192L33.3645 11.584V15.4H32.0445ZM34.9125 11.872C35.2325 11.872 35.5125 11.8 35.7525 11.656C36.0005 11.504 36.1925 11.296 36.3285 11.032C36.4725 10.768 36.5445 10.464 36.5445 10.12C36.5445 9.776 36.4725 9.472 36.3285 9.208C36.1925 8.944 36.0005 8.74 35.7525 8.596C35.5125 8.444 35.2325 8.368 34.9125 8.368C34.5925 8.368 34.3085 8.444 34.0605 8.596C33.8125 8.74 33.6205 8.944 33.4845 9.208C33.3485 9.472 33.2805 9.776 33.2805 10.12C33.2805 10.464 33.3485 10.768 33.4845 11.032C33.6205 11.296 33.8125 11.504 34.0605 11.656C34.3085 11.8 34.5925 11.872 34.9125 11.872ZM43.1334 13V9.676C43.1334 9.292 43.0094 8.976 42.7614 8.728C42.5214 8.48 42.2094 8.356 41.8254 8.356C41.5694 8.356 41.3414 8.412 41.1414 8.524C40.9414 8.636 40.7854 8.792 40.6734 8.992C40.5614 9.192 40.5054 9.42 40.5054 9.676L39.9894 9.388C39.9894 8.948 40.0854 8.56 40.2774 8.224C40.4694 7.88 40.7334 7.612 41.0694 7.42C41.4134 7.22 41.7974 7.12 42.2214 7.12C42.6534 7.12 43.0374 7.216 43.3734 7.408C43.7094 7.6 43.9734 7.868 44.1654 8.212C44.3574 8.548 44.4534 8.94 44.4534 9.388V13H43.1334ZM39.1854 13V4.36H40.5054V13H39.1854ZM48.3868 13.12C47.8668 13.12 47.3948 12.988 46.9708 12.724C46.5548 12.46 46.2228 12.104 45.9748 11.656C45.7348 11.2 45.6148 10.692 45.6148 10.132C45.6148 9.564 45.7348 9.056 45.9748 8.608C46.2228 8.152 46.5548 7.792 46.9708 7.528C47.3948 7.256 47.8668 7.12 48.3868 7.12C48.8268 7.12 49.2148 7.216 49.5508 7.408C49.8948 7.592 50.1668 7.848 50.3668 8.176C50.5668 8.504 50.6668 8.876 50.6668 9.292V10.948C50.6668 11.364 50.5668 11.736 50.3668 12.064C50.1748 12.392 49.9068 12.652 49.5628 12.844C49.2188 13.028 48.8268 13.12 48.3868 13.12ZM48.6028 11.872C49.0908 11.872 49.4828 11.708 49.7788 11.38C50.0828 11.052 50.2348 10.632 50.2348 10.12C50.2348 9.776 50.1668 9.472 50.0308 9.208C49.8948 8.944 49.7028 8.74 49.4548 8.596C49.2148 8.444 48.9308 8.368 48.6028 8.368C48.2828 8.368 47.9988 8.444 47.7508 8.596C47.5108 8.74 47.3188 8.944 47.1748 9.208C47.0388 9.472 46.9708 9.776 46.9708 10.12C46.9708 10.464 47.0388 10.768 47.1748 11.032C47.3188 11.296 47.5108 11.504 47.7508 11.656C47.9988 11.8 48.2828 11.872 48.6028 11.872ZM50.1508 13V11.452L50.3788 10.048L50.1508 8.656V7.24H51.4708V13H50.1508ZM12.7382 27L16.1942 18.6H17.1542L20.5862 27H19.0982L16.4102 20.196H16.9142L14.2022 27H12.7382ZM14.4422 25.38V24.18H18.8942V25.38H14.4422ZM23.672 27.12C23.352 27.12 23.044 27.08 22.748 27C22.452 26.912 22.18 26.792 21.932 26.64C21.684 26.48 21.468 26.288 21.284 26.064L22.124 25.224C22.324 25.456 22.552 25.632 22.808 25.752C23.072 25.864 23.368 25.92 23.696 25.92C23.992 25.92 24.216 25.876 24.368 25.788C24.52 25.7 24.596 25.572 24.596 25.404C24.596 25.228 24.524 25.092 24.38 24.996C24.236 24.9 24.048 24.82 23.816 24.756C23.592 24.684 23.352 24.612 23.096 24.54C22.848 24.468 22.608 24.372 22.376 24.252C22.152 24.124 21.968 23.952 21.824 23.736C21.68 23.52 21.608 23.24 21.608 22.896C21.608 22.528 21.692 22.212 21.86 21.948C22.036 21.684 22.28 21.48 22.592 21.336C22.912 21.192 23.292 21.12 23.732 21.12C24.196 21.12 24.604 21.204 24.956 21.372C25.316 21.532 25.616 21.776 25.856 22.104L25.016 22.944C24.848 22.736 24.656 22.58 24.44 22.476C24.224 22.372 23.976 22.32 23.696 22.32C23.432 22.32 23.228 22.36 23.084 22.44C22.94 22.52 22.868 22.636 22.868 22.788C22.868 22.948 22.94 23.072 23.084 23.16C23.228 23.248 23.412 23.324 23.636 23.388C23.868 23.452 24.108 23.524 24.356 23.604C24.612 23.676 24.852 23.78 25.076 23.916C25.308 24.044 25.496 24.22 25.64 24.444C25.784 24.66 25.856 24.944 25.856 25.296C25.856 25.856 25.66 26.3 25.268 26.628C24.876 26.956 24.344 27.12 23.672 27.12ZM29.0083 27.12C28.6883 27.12 28.3803 27.08 28.0843 27C27.7883 26.912 27.5163 26.792 27.2683 26.64C27.0203 26.48 26.8043 26.288 26.6203 26.064L27.4603 25.224C27.6603 25.456 27.8883 25.632 28.1443 25.752C28.4083 25.864 28.7043 25.92 29.0323 25.92C29.3283 25.92 29.5523 25.876 29.7043 25.788C29.8563 25.7 29.9323 25.572 29.9323 25.404C29.9323 25.228 29.8603 25.092 29.7163 24.996C29.5723 24.9 29.3843 24.82 29.1523 24.756C28.9283 24.684 28.6883 24.612 28.4323 24.54C28.1843 24.468 27.9443 24.372 27.7123 24.252C27.4883 24.124 27.3043 23.952 27.1603 23.736C27.0163 23.52 26.9443 23.24 26.9443 22.896C26.9443 22.528 27.0283 22.212 27.1963 21.948C27.3723 21.684 27.6163 21.48 27.9283 21.336C28.2483 21.192 28.6283 21.12 29.0683 21.12C29.5323 21.12 29.9403 21.204 30.2923 21.372C30.6523 21.532 30.9523 21.776 31.1923 22.104L30.3523 22.944C30.1843 22.736 29.9923 22.58 29.7763 22.476C29.5603 22.372 29.3123 22.32 29.0323 22.32C28.7683 22.32 28.5643 22.36 28.4203 22.44C28.2763 22.52 28.2043 22.636 28.2043 22.788C28.2043 22.948 28.2763 23.072 28.4203 23.16C28.5643 23.248 28.7483 23.324 28.9723 23.388C29.2043 23.452 29.4443 23.524 29.6923 23.604C29.9483 23.676 30.1883 23.78 30.4123 23.916C30.6443 24.044 30.8323 24.22 30.9763 24.444C31.1203 24.66 31.1923 24.944 31.1923 25.296C31.1923 25.856 30.9963 26.3 30.6043 26.628C30.2123 26.956 29.6803 27.12 29.0083 27.12ZM34.8245 27.12C34.3365 27.12 33.9005 27.012 33.5165 26.796C33.1405 26.58 32.8445 26.284 32.6285 25.908C32.4205 25.524 32.3165 25.084 32.3165 24.588V21.24H33.6365V24.528C33.6365 24.808 33.6805 25.048 33.7685 25.248C33.8645 25.44 34.0005 25.588 34.1765 25.692C34.3605 25.796 34.5765 25.848 34.8245 25.848C35.2085 25.848 35.5005 25.736 35.7005 25.512C35.9085 25.28 36.0125 24.952 36.0125 24.528V21.24H37.3325V24.588C37.3325 25.092 37.2245 25.536 37.0085 25.92C36.8005 26.296 36.5085 26.592 36.1325 26.808C35.7565 27.016 35.3205 27.12 34.8245 27.12ZM38.8397 27V21.24H40.1597V27H38.8397ZM40.1597 23.796L39.7037 23.568C39.7037 22.84 39.8637 22.252 40.1837 21.804C40.5117 21.348 41.0037 21.12 41.6597 21.12C41.9477 21.12 42.2077 21.172 42.4397 21.276C42.6717 21.38 42.8877 21.548 43.0877 21.78L42.2237 22.668C42.1197 22.556 42.0037 22.476 41.8757 22.428C41.7477 22.38 41.5997 22.356 41.4317 22.356C41.0637 22.356 40.7597 22.472 40.5197 22.704C40.2797 22.936 40.1597 23.3 40.1597 23.796ZM46.4067 27.12C45.8307 27.12 45.3107 26.992 44.8467 26.736C44.3907 26.472 44.0267 26.112 43.7547 25.656C43.4907 25.2 43.3587 24.688 43.3587 24.12C43.3587 23.552 43.4907 23.044 43.7547 22.596C44.0187 22.14 44.3747 21.78 44.8227 21.516C45.2787 21.252 45.7827 21.12 46.3347 21.12C46.8707 21.12 47.3427 21.244 47.7507 21.492C48.1667 21.74 48.4907 22.08 48.7227 22.512C48.9627 22.944 49.0827 23.436 49.0827 23.988C49.0827 24.084 49.0747 24.184 49.0587 24.288C49.0507 24.384 49.0347 24.492 49.0107 24.612H44.2827V23.532H48.3267L47.8347 23.964C47.8187 23.612 47.7507 23.316 47.6307 23.076C47.5107 22.836 47.3387 22.652 47.1147 22.524C46.8987 22.396 46.6307 22.332 46.3107 22.332C45.9747 22.332 45.6827 22.404 45.4347 22.548C45.1867 22.692 44.9947 22.896 44.8587 23.16C44.7227 23.416 44.6547 23.724 44.6547 24.084C44.6547 24.444 44.7267 24.76 44.8707 25.032C45.0147 25.304 45.2187 25.516 45.4827 25.668C45.7467 25.812 46.0507 25.884 46.3947 25.884C46.6907 25.884 46.9627 25.832 47.2107 25.728C47.4667 25.624 47.6827 25.472 47.8587 25.272L48.6987 26.124C48.4187 26.452 48.0787 26.7 47.6787 26.868C47.2787 27.036 46.8547 27.12 46.4067 27.12ZM52.7328 27.12C52.2128 27.12 51.7408 26.988 51.3168 26.724C50.9008 26.46 50.5688 26.104 50.3208 25.656C50.0808 25.2 49.9608 24.692 49.9608 24.132C49.9608 23.564 50.0808 23.056 50.3208 22.608C50.5688 22.152 50.9008 21.792 51.3168 21.528C51.7408 21.256 52.2128 21.12 52.7328 21.12C53.1728 21.12 53.5608 21.216 53.8968 21.408C54.2408 21.592 54.5128 21.848 54.7128 22.176C54.9128 22.504 55.0128 22.876 55.0128 23.292V24.948C55.0128 25.364 54.9128 25.736 54.7128 26.064C54.5208 26.392 54.2528 26.652 53.9088 26.844C53.5648 27.028 53.1728 27.12 52.7328 27.12ZM52.9488 25.872C53.2768 25.872 53.5608 25.8 53.8008 25.656C54.0488 25.504 54.2408 25.296 54.3768 25.032C54.5128 24.768 54.5808 24.464 54.5808 24.12C54.5808 23.776 54.5128 23.472 54.3768 23.208C54.2408 22.944 54.0488 22.74 53.8008 22.596C53.5608 22.444 53.2808 22.368 52.9608 22.368C52.6328 22.368 52.3448 22.444 52.0968 22.596C51.8568 22.74 51.6648 22.944 51.5208 23.208C51.3848 23.472 51.3168 23.776 51.3168 24.12C51.3168 24.464 51.3848 24.768 51.5208 25.032C51.6648 25.296 51.8568 25.504 52.0968 25.656C52.3448 25.8 52.6288 25.872 52.9488 25.872ZM55.8168 27H54.4968V25.452L54.7248 24.048L54.4968 22.656V18.36H55.8168V27Z"
                      fill="#252B61"
                    />
                    <g clip-path="url(#clip0_2821_2446)">
                      <path
                        d="M80.5135 8.47104V14.015C79.5824 13.588 78.5534 13.3501 77.4685 13.3501C73.4224 13.3501 70.1185 16.6471 70.1185 20.7001C70.1185 23.129 71.3084 25.292 73.1354 26.629C72.9814 26.678 72.8204 26.727 72.6594 26.776L71.8684 27L71.0914 26.776C66.4364 25.446 63.2305 21.19 63.2305 16.346V8.47104L71.8685 6L80.5135 8.47104Z"
                        fill="url(#paint0_linear_2821_2446)"
                      />
                      <path
                        d="M77.4699 14.3999C73.9909 14.3999 71.1699 17.2209 71.1699 20.6999C71.1699 24.1789 73.9909 26.9999 77.4699 26.9999C80.9559 26.9999 83.7699 24.1789 83.7699 20.6999C83.7699 17.2209 80.9559 14.3999 77.4699 14.3999ZM80.3049 19.3139L76.9379 22.8139C76.8399 22.9189 76.6999 22.9749 76.5599 22.9749C76.4129 22.9749 76.2799 22.9188 76.1819 22.8139L74.6419 21.2179C74.4459 21.0079 74.4529 20.6788 74.6559 20.4759C74.8659 20.2729 75.2019 20.2799 75.4049 20.4899L76.5599 21.6939L79.5419 18.5859C79.7449 18.3759 80.0809 18.3688 80.2839 18.5719C80.4939 18.7749 80.5009 19.1038 80.3049 19.3139Z"
                        fill="url(#paint1_linear_2821_2446)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2821_2446"
                        x1="71.872"
                        y1="6"
                        x2="71.7495"
                        y2="20.875"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#252B61" />
                        <stop offset="1" stop-color="#4C58C7" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2821_2446"
                        x1="77.4699"
                        y1="14.3999"
                        x2="77.4699"
                        y2="26.9999"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#92BDF6" />
                        <stop offset="1" stop-color="#4B7CBC" />
                      </linearGradient>
                      <clipPath id="clip0_2821_2446">
                        <rect
                          width="21"
                          height="21"
                          fill="white"
                          transform="translate(63 6)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ) : null}
              {SelectedFitnessCenter?.rating && (
                <div className="rating-badge">
                  <svg
                    width="83"
                    height="56"
                    viewBox="0 0 83 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 39H0L22 56V39Z" fill="#496C9A" />

                    <path
                      d="M0 2C0 0.89543 0 2 2 2H63.5C74.2696 2 83 10.7304 83 21.5V21.5C83 32.2696 74.2696 41 63.5 41H0V2Z"
                      fill="#92BDF6"
                    />

                    <path
                      d="M13.3987 30L15.2675 22.2355L9 17.0132L17.28 16.3224L20.5 9L23.72 16.3224L32 17.0132L25.7325 22.2355L27.6012 30L20.5 25.8829L13.3987 30Z"
                      fill="#252B61"
                    />

                    <text
                      x="49.5"
                      y="24"
                      font-size="14"
                      font-family="Arial, sans-serif"
                      font-weight="bold"
                      fill="#252B61"
                      text-anchor="middle"
                      dominant-baseline="middle"
                    >
                      {Number(SelectedFitnessCenter?.rating)?.toFixed?.(1)}
                    </text>
                  </svg>
                </div>
              )}
              <div className="main-image-container">
                {/* Main Image */}
                <img
                  src={SelectedFitnessCenter?.images?.[selectedImage]}
                  alt="Gym facility"
                  className="main-image"
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="thumbnail-container">
              {SelectedFitnessCenter?.images?.map((img: any, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${
                    selectedImage === index ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="gym-header">
              <h3 className="gym-name">{SelectedFitnessCenter?.name}</h3>
              <div className="location-container">
                <div className="address">
                  <p>{SelectedFitnessCenter?.full_address}</p>
                </div>

                <button
                  className="map-button"
                  onClick={() => {
                    if (
                      SelectedFitnessCenter?.latitude &&
                      SelectedFitnessCenter?.longitude
                    ) {
                      window.open(
                        `https://www.google.com/maps?q=${
                          SelectedFitnessCenter?.latitude
                        },${SelectedFitnessCenter?.longitude}&z=${15}`,
                        "_blank",
                      );
                    }
                  }}
                >
                  <svg
                    className="btn-map-icon"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12.0005C10.206 12.0005 12 10.2065 12 8.00049C12 5.79449 10.206 4.00049 8 4.00049C5.794 4.00049 4 5.79449 4 8.00049C4 10.2065 5.794 12.0005 8 12.0005ZM8 6.00049C9.103 6.00049 10 6.89749 10 8.00049C10 9.10349 9.103 10.0005 8 10.0005C6.897 10.0005 6 9.10349 6 8.00049C6 6.89749 6.897 6.00049 8 6.00049Z"
                      fill="#252B61"
                    />
                    <path
                      d="M7.42009 19.8145C7.58945 19.9351 7.79218 19.9999 8.00009 19.9999C8.20799 19.9999 8.41073 19.9351 8.58009 19.8145C8.88409 19.5995 16.0291 14.4405 16.0001 8.00049C16.0001 3.58949 12.4111 0.000488281 8.00009 0.000488281C3.58909 0.000488281 8.80377e-05 3.58949 8.80377e-05 7.99549C-0.028912 14.4405 7.11609 19.5995 7.42009 19.8145ZM8.00009 2.00049C11.3091 2.00049 14.0001 4.69149 14.0001 8.00549C14.0211 12.4435 9.61209 16.4285 8.00009 17.7355C6.38909 16.4275 1.97909 12.4415 2.00009 8.00049C2.00009 4.69149 4.69109 2.00049 8.00009 2.00049Z"
                      fill="#252B61"
                    />
                  </svg>
                  View in Map
                </button>
              </div>

              <div className="timing-container">
                <span className="timing-label">Timing </span>
                <span className="timing-details">
                  <span className="opening-hours">
                    <b>
                      Open:{" "}
                      {moment(
                        SelectedFitnessCenter?.opening_time,
                        "HH:mm:ss",
                      ).format("h:mm A")}{" "}
                      -{" "}
                      {moment(
                        SelectedFitnessCenter?.closing_time,
                        "HH:mm:ss",
                      ).format("h:mm A")}
                    </b>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="package-details-section">
            {SelectedFitnessCenter?.packages &&
              Array.isArray(SelectedFitnessCenter?.packages) &&
              SelectedFitnessCenter?.packages?.length > 0 && (
                <div className="package-details-section-deck">
                  {SelectedFitnessCenter?.packages?.map((item: any) => {
                    return (
                      <div
                        onClick={() => setSelectedPackage(item?.service_code)}
                        className={`package-div ${
                          selectedPackage === item?.service_code
                            ? "package-div-selected"
                            : ""
                        }`}
                      >
                        <h4>{item?.service_name}</h4>
                        <div>
                          <b>Descriptions:</b>
                          <span
                            className="description"
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          ></span>
                        </div>
                        <div className="price-container">
                          <div className="price">
                            Rs.{item?.price?.actual_cost}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
          </div>

          <div className="service-section">
            <Service serviceData={SelectedFitnessCenter?.category_data} />
          </div>
          <div className="trainers-section">
            {SelectedFitnessCenter?.id && (
              <Trainers centerId={SelectedFitnessCenter?.id} />
            )}
          </div>

          <div className="booking-side">
            <BookingCard
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              SelectedFitnessCenter={SelectedFitnessCenter}
            />
          </div>
        </div>
        {similar?.length > 0 && (
          <div>
            <ProductsDeck
              background={true}
              padding={false}
              viewAllLink="/fitnessCenters"
              heading={"Similar Products"}
              data={SimilarFitnessCenters?.fitnessCenters?.filter(
                (item: any) => String(item?.id) !== String(productId),
              )}
              renderCard={(item: any, i: any) => {
                const data = {
                  name: item?.name,
                  place: item?.city,
                  imgLink: item?.images?.[0],
                  rating: item?.rating,
                  distance: item?.distance_km ?? "N/A",
                };
                return (
                  <ProductCard
                    key={i}
                    data={data}
                    link={`/fitnessCenters/${item?.name?.split?.(" ")?.join("-")}/${item?.id}`}
                  />
                );
              }}
            />
          </div>
        )}
      </div>
    </FitnessProductPageStyled>
  );
};

export default FitnessProductPage;
