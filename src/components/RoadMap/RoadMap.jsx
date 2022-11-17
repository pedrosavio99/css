import styled from "styled-components";

export const ButtonCustom  = styled.button`
cursor: pointer;
margin-top: 10%;
border-style: none;
border-radius: 4px;
width: 200px;
height: 45px;
font-size: 21px;
    background-color: #ffef0d;
    color: #141414;

    :hover{
        background-color: #f1e202;
        font-size: 18px;
    }
`

export const RoadMapDiv = styled.div`
  color: black;
  * {
    box-sizing: border-box;
    
  }
  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    width: 500px;
    max-height: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -8px;
    border-radius: 35%;
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    margin: 0;
    position: relative;
    background-color: inherit;
    width: 45%;
  }

  /* The circles on the timeline */
  .container::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    right: -6px;
    background-color: white;
    border: 3.5px solid #11cf11;
    top: 23px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 5%;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent  #999595;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent  #999595 transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content {
    height: 45px;
    padding: 1px;
    background-color: #999595;
    color: white;
    position: relative;
    border-radius: 6px;
    font-size: 11px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline {
      width: 300px;
      font-size: 14px;
    }
    .timeline::after {
      left: 31px;
    }

    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent  #999595 transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after {
      left: 1px;
    }
    .right::after {
      left: 1px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 5%;
    }
    h2{
        font-size: 15px;
    }
    p{
        font-size: 13px;
    }
  }

  @media screen and (max-width: 350px) {
    /* Place the timelime to the left */
    .timeline {
      width: 250px;
      font-size: 12px;
    }

    .left::after {
      left: 5px;
    }
    .right::after {
      left: 5px;
    }
    .right {
      left: 5%;
    }
  }
`;
