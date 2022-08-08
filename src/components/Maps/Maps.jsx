import React from "react";
import { Container, MapStyle } from "./style";

export const Maps = ({data}) => {

  return (
    <Container>
      <MapStyle
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4272.517228594486!2d${data?.lon}!3d${data?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1659634543747!5m2!1sen!2s`}
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></MapStyle>
    </Container>
  );
};
