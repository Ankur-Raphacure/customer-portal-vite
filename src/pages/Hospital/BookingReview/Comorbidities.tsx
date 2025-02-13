import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Button as BSTButton } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getS3PresignedUrl } from "../../../redux/slices/Profile/ProfileService";
import Loader from "../../../components/Loader/Loader";
import MultiGoogleSelect from "../../../components/MultiGoogleSelect/MultiGoogleSelect";
import { ComorbiditiesStyled } from "./Comorbidities.styled";

interface ComorbiditiesProps {
  show: boolean;
  selectedCartItemId: any;
  onClose: () => void;
  handleSavePastData: (obj: any) => void;
}

const Comorbidities = ({
  show,
  selectedCartItemId,
  onClose,
  handleSavePastData,
}: ComorbiditiesProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState<string[]>([]);
  const [pastIssues, setPastIssues] = useState<string[]>([]);

  useEffect(() => {
    setImageUrls([]);
    setIssues([]);
    setPastIssues([]);
  }, [selectedCartItemId]);

  const dispatch = useDispatch();

  const handleSelectSymptom = (symptom: string) => {
    if (symptom) {
      setIssues((prevIssues) => [...prevIssues, symptom.trim()]);
    }
  };

  const handleSelectPastSymptom = (symptom: string) => {
    if (symptom) {
      setPastIssues((prevIssues) => [...prevIssues, symptom.trim()]);
    }
  };

  const uploadImageToS3 = async (image: File) => {
    try {
      const presignBody = {
        id: `${Date.now()}`,
        ext: ".png",
      };
      const presignedRes = (await dispatch(
        getS3PresignedUrl(presignBody),
      )) as any;
      const presignedUrlResp = presignedRes.payload?.signedUrL;

      await axios.put(presignedUrlResp.signedUrL, image, {
        headers: {
          "Content-Type": "image/png",
        },
      });

      return presignedUrlResp.publicUrl;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw error;
    }
  };

  const handleImgFileChange = async (event: any) => {
    const files = event.target.files;
    if (files?.length > 0) {
      try {
        setLoading(true);
        const uploadPromises = Array.from(files).map((file: any) =>
          uploadImageToS3(file),
        );
        const uploadedUrls = await Promise.all(uploadPromises);
        setImageUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);
      } catch (error) {
        toast.error("Error uploading images. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSkip = () => {
    onClose();
  };

  const handleSave = () => {
    const comorbiditiesData = {
      pastIssues,
      issues,
      imageUrls,
      id: selectedCartItemId,
    };
    handleSavePastData(comorbiditiesData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <ComorbiditiesStyled>
        <Modal.Header closeButton>
          <Modal.Title>Additional Illnesses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Loader />}
          <MultiGoogleSelect
            handleSelectSymptom={handleSelectPastSymptom}
            issues={pastIssues}
            setIssues={setPastIssues}
            caption={"Past Medical Issues"}
          />
          <MultiGoogleSelect
            handleSelectSymptom={handleSelectSymptom}
            issues={issues}
            setIssues={setIssues}
            caption={"Present Symptoms"}
          />
          <Row className="my-3">
            <div className="d-flex flex-col imagesPreview justify-content-between">
              <Form.Group controlId="media">
                <Form.Label className="note-label mt-3">
                  Upload Images
                </Form.Label>
                <Form.Control
                  type="file"
                  accept="image/png"
                  onChange={handleImgFileChange}
                  multiple
                />
              </Form.Group>
              {/* Display all uploaded images */}
              <div className="d-flex flex-col flex-wrap gap-2 mt-3 justify-content-center">
                {imageUrls.map((url, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                    }}
                  >
                    <img
                      src={url}
                      alt={`Uploaded ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <BSTButton
                      variant="danger"
                      size="sm"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "0px 6px",
                        minWidth: "20px",
                        minHeight: "20px",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                      onClick={() =>
                        setImageUrls((prevUrls) =>
                          prevUrls.filter((_, i) => i !== index),
                        )
                      }
                    >
                      ×
                    </BSTButton>
                  </div>
                ))}
              </div>
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column align-items-center gap-2 ">
          <BSTButton variant="outline-secondary" onClick={handleSkip}>
            Skip
          </BSTButton>
          <BSTButton variant="primary" onClick={handleSave}>
            Save
          </BSTButton>
        </Modal.Footer>
      </ComorbiditiesStyled>
    </Modal>
  );
};

export default Comorbidities;
