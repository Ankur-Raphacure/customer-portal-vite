import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  InstapaperIcon,
} from "react-share";
import { StyledShareModal } from "./ShareModal.styled";
// import { triggerSegmentEvent } from "Scenes/common";
// import { isAppleDevice } from "../../utils/userAgent";
// import twitter_new from "./../../assets/twitter_new.png";
interface ShareModalProps {
  show: boolean;
  url: string;
  handleClose: () => void;
  onCopyClick: () => void;
  marketplaceId?: string;
  title?: string;
}

const ShareModal = (props: ShareModalProps) => {
  const { show, handleClose, url, onCopyClick, marketplaceId, title } = props;
  const [isCopied, setIsCopied] = useState(false);

  const shareButtonClick = (platform: any) => {
    if (marketplaceId) {
      const jsonObj = {
        creator_id: marketplaceId,
        platform: platform,
      };
      // triggerSegmentEvent("share_clicks", jsonObj);
    }
  };

  const objectEncode = (object: any) => {
    const str = [] as any;
    Object.keys(object).forEach((key) => {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`);
    });
    return str.join("&");
  };
  const onCopyClick1 = () => {
    onCopyClick();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  const smsBody = objectEncode({ body: url });
  // console.log("title", title);
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modalBodyDefault">
        <StyledShareModal>
          <h6>
            SHARE{" "}
            <span
              className="handle-close-icon-share"
              onClick={props.handleClose}
            >
              X
            </span>{" "}
          </h6>

          <div className="icons">
            <WhatsappShareButton
              beforeOnClick={() => {
                shareButtonClick("whatsapp");
              }}
              url={url}
            >
              <WhatsappIcon round={true} size={60} />
              <div>Whatsapp</div>
            </WhatsappShareButton>
            <EmailShareButton
              url={url}
              beforeOnClick={() => {
                shareButtonClick("whatsapp");
              }}
            >
              <EmailIcon round={true} size={60} />
              <div>Email</div>
            </EmailShareButton>

            <FacebookShareButton
              url={url}
              title={title}
              beforeOnClick={() => {
                shareButtonClick("facebook");
              }}
            >
              <FacebookIcon round={true} size={60} />
              <div>Facebook</div>
            </FacebookShareButton>
            {/* <InstapaperShareButton
              url={url}
              beforeOnClick={() => {
                shareButtonClick("insta");
              }}
            >
              <InstapaperIcon round={true} size={60} />
              <div>Insta </div>
            </InstapaperShareButton> */}
            <FacebookMessengerShareButton
              appId="837843727183125"
              url={url}
              beforeOnClick={() => {
                shareButtonClick("messenger");
              }}
            >
              <FacebookMessengerIcon round={true} size={60} />
              <div>Messenger</div>
            </FacebookMessengerShareButton>
            <TwitterShareButton
              url={url}
              title={title}
              beforeOnClick={() => {
                shareButtonClick("twitter");
              }}
            >
              {/* <img className="twitter_new_icon_new" src={twitter_new} /> */}
              <TwitterIcon round={true} size={60} />
              <div>Twitter</div>
            </TwitterShareButton>
            <LinkedinShareButton
              url={url}
              title={title}
              beforeOnClick={() => {
                shareButtonClick("linkedIn");
              }}
            >
              <LinkedinIcon round={true} size={60} />
              <div>LinkedIn</div>
            </LinkedinShareButton>
            <RedditShareButton
              url={url}
              beforeOnClick={() => {
                shareButtonClick("reddit");
              }}
            >
              <RedditIcon round={true} size={60} />
              <div>Reddit</div>
            </RedditShareButton>
            <TelegramShareButton
              url={url}
              beforeOnClick={() => {
                shareButtonClick("telegram");
              }}
            >
              <TelegramIcon round={true} size={60} />
              <div>Telegram</div>
            </TelegramShareButton>
          </div>
          {isCopied && (
            <div className="copy-feedback">
              <span>Share Link copied to clipboard</span>
            </div>
          )}
          <div className="copy">
            <span>{url}</span>
            <Button onClick={onCopyClick1}>COPY</Button>
          </div>
        </StyledShareModal>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;
