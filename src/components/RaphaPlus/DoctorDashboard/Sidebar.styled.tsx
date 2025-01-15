import styled from "styled-components";

export const SidebarStyled = styled.div`
  .sidebar-main {
    display: flex;
    flex-direction: row;
  }
  .sidebar {
    width: 120px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0 0;
    gap: 55.15px;
    transition: width 0.3s ease-in-out;
    overflow: hidden;
  }

  .sidebarItem {
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    transition: color 0.3s, background-color 0.3s;
    gap: 10px;
    width: 100%;
    justify-content: center;
    overflow: hidden;
  }
  .sidebar-horizental-line {
    filter: blur(2px);
    border-right: 0.5px solid #000;
    opacity: 0.15;
    margin: 0 2px;
  }

  .active {
    background-color: #252b61;
    color: white;
    gap: 5px;
    border-radius: 2px 0px 0px 2px;
    justify-content: flex-start;
  }

  .icon {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .active .icon {
    filter: brightness(0) invert(1);
  }

  .sectionName {
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    max-width: 120px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  .active .sectionName {
    opacity: 1;
  }

  .help-center-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100px;
}

.helpCenterBackground {
  background-color: #252b61;
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.helpCenter {
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 100%;
}

.helpCenterContent {
  display: flex;
  margin-top: -2.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.helpCenter:hover .helpCenterContent {
  top: 50%; /* Move into the center on hover */
  opacity: 1; /* Make visible */
}

.helpCenterIcon {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  padding: 5px;
  background-color: transparent;
}

.helpCenterText {
  text-wrap: nowrap;
  margin-top: 2px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  text-align: center;
  font-family: Poppins, sans-serif;
}

`;
