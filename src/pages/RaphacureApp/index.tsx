import { RaphacureAppStyled } from "./RaphaCureApp.styled";
import TicklightBlue from "../../assets/icons/tick_light_blue.svg"
import TickDarkBlue from "../../assets/icons/tick_dark_blue.svg"
import googleplay from "../../assets/images/googleplay.png";
import AppleStore from "../../assets/images/appstore.png";
import desktopImg from "../../assets/desktop.png";
import Bezel from "../../assets/Bezel.png";
import Pharmacy from "../../assets/Pharmacy_onboarding_1.png";
import forDcoClicDeskImg from "../../assets/Desktop81.png";
import forpatDeskImg from "../../assets/Dashboard1.png";

const Data = [
	{
		backgroundClass: "bgBlue",
		textColor: "txtWhite",
		flexreverse: "",
		h1content: "For Corporates",
		subContent: "Streamline corporate healthcare with Raphaplus. Manage employee healthcare plans and wellness programs efficiently. Boost productivity with our all-in-one system and get a free professional portal.",
		listImage: TicklightBlue,
		ListsOne: [
			"Effective employee management",
			"Tailored professional portal",
			"Simplified healthcare plan administration",
			"In-depth analytics",
		],
		ListsTwo: [
			"Wellness program management",
			"Enhanced employee communication",
			"Productivity boosting tools",
			"And much more"
		],
		desktopInnerImg: "",
	},
	{
		backgroundClass: "",
		flexreverse: "reverseFlex",
		textColor: "",
		h1content: "For Doctor & Clinics",
		subContent: "Optimize your clinic operations with Raphaplus. Manage staff, patients, and appointments seamlessly while boosting revenue with our marketing tools. Enjoy a free professional website and management system.",
		listImage: TickDarkBlue,
		ListsOne: [
			"Streamlined staff scheduling",
			"Custom professional website",
			"Efficient patient management",
			"Comprehensive reporting",
		],
		ListsTwo: [
			"Online appointment booking",
			"Improved patient communication",
			"Revenue enhancement features",
			"And much more"
		],
		desktopInnerImg: forDcoClicDeskImg,
	},
	{
		backgroundClass: "bgBlue",
		textColor: "txtWhite",
		h1content: "For Patients",
		flexreverse: "",
		subContent: "Manage your health with Raphaplus. Schedule appointments, access secure records, and communicate with providers. Enjoy a free personal health portal.",
		listImage: TicklightBlue,
		ListsOne: [
			"Convenient appointment scheduling",
			"Personalized health portal",
			"Secure medical record access",
			"Health insights and analytics",
		],
		ListsTwo: [
			"Direct provider communication",
			"Health reminders and alerts",
			"Exclusive health resources",
			"And much more"
		],
		desktopInnerImg: forpatDeskImg,
	}
]


function RaphacureApp() {
	return (<RaphacureAppStyled>
		{Data.map((item, index) => {
			return (
				<div className={`conatiner-sec ${item.backgroundClass} ${item.textColor} ${item.flexreverse}`}>
					<div className="content-sec">
						<h1>{item.h1content}</h1>
						<p>{item.subContent}</p>
						<div>
							<ul>
								{item.ListsOne?.map((text, index) => {
									return (
										<li key={index}> <img src={item.listImage} /> {text} </li>
									)
								})}
							</ul>
							<ul>
								{item.ListsTwo?.map((text, index) => {
									return (
										<li key={index}> <img src={item.listImage} />	{text} </li>
									)
								})}
							</ul>
						</div>
						<div className="playstore-sec">
							<img src={googleplay} alt="Googleplay Store" />
							<img src={AppleStore} alt="Apple Store" />
						</div>
					</div>
					<div className="img-sec">
						<div className="imgdiv">
							<div className="imageOne">
								<img src={desktopImg} />
								{item?.desktopInnerImg &&
									<div className="desktopInnerImg">
										<img src={item?.desktopInnerImg} />
									</div>
								}
							</div>
							<div className="imageTwo"> <img src={Bezel} /> </div>
							<div className="imageThree"> <img src={Pharmacy} /> </div>
						</div>
					</div>
				</div>
			)
		})}

	</RaphacureAppStyled>)
}

export default RaphacureApp;