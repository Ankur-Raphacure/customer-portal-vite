import { useState } from "react";
import { SelectAddressStyled } from "./SelectAddress.styled";
import Modal from "react-bootstrap/Modal";
import "./customaddress.css";

const SelectAddress = (props: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnchange = (evt: any, address: any) => {
    console.log(evt.target.value);
    props.selectSavedAddress({ ...address }, props.index);
    handleClose();
  };

  return (
    <>
      <button className="selectaddress-btn" onClick={handleShow}>
        Select Saved Address
      </button>

      {show && (
        <Modal
          fullscreen="md-down"
          dialogClassName="custom_addressmodal"
          show={show}
          onHide={handleClose}
        >
          <SelectAddressStyled>
            <Modal.Header closeButton>
              <Modal.Title className="poppins-medium">
                Saved Addresses
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.addressList &&
                props.addressList.length > 0 &&
                props.addressList.map((address: any, index: string) => {
                  return (
                    <label className="addresslist-label">
                      <span className="addresslist-inputspan">
                        {props?.address?.id === address?.id && (
                          <input
                            className="addresslist-input"
                            type="radio"
                            defaultChecked
                            onChange={(e) => handleOnchange(e, address)}
                            name="address-group"
                            value={address?.id}
                          />
                        )}
                        {props?.address?.id !== address?.id && (
                          <input
                            className="addresslist-input"
                            type="radio"
                            name="address-group"
                            onChange={(e) => handleOnchange(e, address)}
                            value={address?.id}
                          />
                        )}
                      </span>
                      <span className="poppins-regular addresslist-text">
                        {address?.address}
                      </span>
                    </label>
                  );
                })}
              {(!props.addressList || props.addressList.length === 0) && (
                <div className="error">
                  Sorry, No Saved Addresses available!!
                </div>
              )}
            </Modal.Body>
          </SelectAddressStyled>
        </Modal>
      )}
    </>
  );
};

export default SelectAddress;
